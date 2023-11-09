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

export const AlertDemoUserModal = () => {
  const { type, isOpen, onClose } = useModal();

  const isModalOpen = isOpen && type === "alertDemoUser";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 overflow-hidden max-w-[375px]">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-xl font-bold">
            Unlock the Full Report
          </DialogTitle>
          <DialogDescription className="text-sm">
            Sign up to unlock the full report and explore in-depth business
            insights.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="px-6 py-4">
          <Link
            href="/register"
            className={buttonVariants({
              className: "rounded-lg",
            })}
          >
            Sign Up
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
