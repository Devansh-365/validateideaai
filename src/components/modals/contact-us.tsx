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

export const ContactUsModal = () => {
  const { type, isOpen, onClose } = useModal();

  const isModalOpen = isOpen && type === "contactUs";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 overflow-hidden max-w-[375px]">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-xl font-bold">Contact Us</DialogTitle>
          <DialogDescription className="text-sm">
            {`If you're looking for unlimited access, don't hesitate to contact us.`}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="px-6 py-4">
          <Link
            href="mailto:devanshtiwari365@gmail.com"
            target="_blank"
            className={buttonVariants({
              className: "rounded-lg",
            })}
          >
            Contact Us
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
