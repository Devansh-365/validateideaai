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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useModal } from "@/hooks/use-modal";
import { Textarea } from "../ui/textarea";

export default function CreateBuisnessIdeaModal() {
  const { type, isOpen, onClose } = useModal();

  const isModalOpen = isOpen && type === "buisnessIdeaModal";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Describe your idea</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start gap-1">
            {/* <Label htmlFor="name" className="text-right">
              Describe your idea
            </Label> */}
            <Textarea
              id="idea"
              value="Example: Online marketplace that connects people who want to rent out their garage."
              className="col-span-3"
              rows={6}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full rounded-lg" onClick={onClose}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
