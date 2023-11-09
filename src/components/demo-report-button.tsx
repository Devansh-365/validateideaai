"use client";

import { useModal } from "@/hooks/use-modal";
import React from "react";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";

export default function DemoReportButton() {
  const { onOpen } = useModal();

  return (
    <Button
      onClick={() => onOpen("createDemoReportModal")}
      className="rounded-lg py-5 bg-blue-600 hover:bg-blue-600/80"
    >
      <Icons.add className="w-4 h-4 mr-2" />
      <span className="">Add Buisness Idea</span>
    </Button>
  );
}
