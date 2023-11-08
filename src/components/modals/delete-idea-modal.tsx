"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useModal } from "@/hooks/use-modal";

export const DeleteBuisnessIdeaModal = () => {
  const { type, isOpen, onClose, data } = useModal();

  const { report } = data;

  const router = useRouter();
  const params = useParams();

  const isModalOpen = isOpen && type === "deleteBuisnessIdea";

  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      //   const url = qs.stringifyUrl({
      //     url: `/api/channels/${channel?.id}`,
      //     query: {
      //       serverId: server?.id,
      //     },
      //   });

      await axios.delete(
        `https://backend-mentorship.onrender.com/v1/fine_tuning/jobs/deleteresponse/${report?._id}`
      );

      toast.success("Buisness Report has been deleted!");
      router.refresh();
      router.push(`/dashboard`);
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 overflow-hidden max-w-[375px]">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-xl font-bold">Delete Report</DialogTitle>
          <DialogDescription className="text-sm">
            Are you sure you want to do this? <br />
            <span className="text-blue-600 font-semibold">
              {report?.businessIdeaName}
            </span>{" "}
            will be permanently deleted.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="px-6 py-4">
          <Button
            disabled={isLoading}
            onClick={onClose}
            variant="ghost"
            className="rounded-lg"
          >
            Cancel
          </Button>
          <Button
            className="bg-[#ED4245] hover:bg-[#ED4245]/90 rounded-lg"
            disabled={isLoading}
            onClick={onClick}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
