"use client";

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
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
import { set, useForm } from "react-hook-form";
import axios from "axios";
// import { cookies } from "next/headers";
import { getCookie, setCookie, deleteCookie, getCookies } from "cookies-next";
import useAuthStore from "@/hooks/use-auth-store";
import toast from "react-hot-toast";
import { Icons } from "@/components/icons";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
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

const LoginAuthForm = ({ className, ...props }: AuthFormProps) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const router = useRouter();
  // const cookieStore = cookies();
  const { roles, setIsLoggedIn, isLoggedIn } = useAuthStore();
  const jwtToken = getCookie("token");

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(
        `https://backend-mentorship.onrender.com/v1/fine_tuning/jobs/login`,
        {
          email: values.email.toLowerCase(),
          password: values.password,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      setCookie("token", response?.data?.token);

      if (response?.data?.role) {
        setIsLoggedIn(true);
        useAuthStore.setState((state: any) => ({
          ...state,
          roles: response?.data?.role,
        }));
      }

      router.push("/dashboard");
      toast.success("User logged in!");
    } catch (error) {
      console.log(error);
      toast.error("Your login request failed. Please try again.");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      setCookie("isLoggedIn", isLoggedIn);
      setCookie("roles", roles);
    } else {
      deleteCookie("roles");
      deleteCookie("isLoggedIn");
    }
  }, [isLoggedIn, roles]);

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
            {isLoading ? <Icons.spinner className="animate-spin mr-2" /> : null}
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginAuthForm;
