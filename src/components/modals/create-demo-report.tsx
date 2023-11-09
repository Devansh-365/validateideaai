import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { getCookie, setCookie, deleteCookie, getCookies } from "cookies-next";
import { Icons } from "@/components/icons";
import useDemoReportStore from "@/hooks/use-demo-report-store";

const formSchema = z.object({
  idea: z.string().min(8, {
    message: "Buissness Idea must be at least 8 characters.",
  }),
});

export default function CreateDemoReport() {
  const { type, isOpen, onClose } = useModal();
  const setResponseText = useDemoReportStore(
    (state: any) => state.setResponseText
  );
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      idea: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const isModalOpen = isOpen && type === "createDemoReportModal";

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(
        `https://backend-mentorship.onrender.com/v1/fine_tuning/jobs/businessvisitor`,
        {
          messages: [
            { role: "user", content: values.idea },
            {
              role: "system",
              content: "give detailed business report ",
            },
          ],
        },
        {
          withCredentials: true,
        }
      );
      setResponseText(response.data.generatedText);
      form.reset();
      onClose();
      toast.success("Demo buisness report created!");
    } catch (error) {
      console.log(error);
      toast.error("Your buisness report request failed. Please try again.");
    }
  };

  const handleClose = () => {
    if (!isLoading) {
      form.reset();
      onClose();
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Buisness Idea</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="idea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Describe your idea</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Example: Online marketplace that connects people who want to rent out their garage."
                      className="col-span-3"
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full mt-4 rounded-lg"
            >
              {isLoading ? (
                <Icons.spinner className="animate-spin mr-2" />
              ) : null}
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
