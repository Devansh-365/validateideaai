"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal";
import Link from "next/link";

export const CreateMoreReportModal = () => {
  const { type, isOpen, onClose } = useModal();

  const isModalOpen = isOpen && type === "createMoreReport";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 overflow-hidden max-w-[375px]">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-xl font-bold">
            Validate More Ideas with Our Pro Membership
          </DialogTitle>
          <DialogDescription className="text-sm">
            Unlock the power of our platform with our Pro Membership and
            generate more business reports.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="px-6 py-4">
          <Link
            href="https://mydukaan.io/tech2705"
            target="_blank"
            className={buttonVariants({
              className: "rounded-lg",
            })}
          >
            Buy Now
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
