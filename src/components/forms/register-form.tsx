"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuthStore from "@/hooks/use-auth-store";
import toast from "react-hot-toast";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required.",
  }),
  email: z.string().email().min(2, {
    message: "Email is required.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(30, {
      message: "Password must not be longer than 30 characters.",
    }),
});

const RegisterAuthForm = ({ className, ...props }: AuthFormProps) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const router = useRouter();
  const { roles, setIsLoggedIn } = useAuthStore();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const checkUserResponse = await axios.post(
        `https://backend-mentorship.onrender.com/v1/fine_tuning/jobs/findbyemail`,
        {
          email: values.email.toLowerCase(),
        }
      );

      if (checkUserResponse.data) {
        toast.error("User with this email already exists.");
        return;
      }

      const response = await axios.post(
        `https://backend-mentorship.onrender.com/v1/fine_tuning/jobs/register`,
        {
          name: values.name,
          email: values.email.toLowerCase(),
          password: values.password,
        }
      );

      const { token } = response.data;
      console.log("Hello, the token is ", token);
      console.log("registered successfully", response);

      if (response?.data?.role) {
        setIsLoggedIn(true);
        useAuthStore.setState((state) => ({
          ...state,
          roles: response?.data?.role,
        }));
      }

      router.push(`/`);

      toast.success("User account created!");
    } catch (error) {
      console.log(error);
      toast.error("Your register request failed. Please try again.");
    }
  };

  return (
    <div
      className={cn("flex flex-col justify-center gap-3", className)}
      {...props}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className="w-full rounded-md"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <></> : null}
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterAuthForm;
