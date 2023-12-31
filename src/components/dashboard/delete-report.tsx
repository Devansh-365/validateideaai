"use client";

import { useModal } from "@/hooks/use-modal";
import React from "react";
import { Icons } from "@/components/icons";

export default function DeleteReportButton({ report }: { report: any }) {
  const { onOpen } = useModal();

  return (
    <button onClick={() => onOpen("deleteBuisnessIdea", { report })}>
      <Icons.trash className="bg-red-600 text-white w-10 h-10 p-3 rounded-lg ml-auto" />
    </button>
  );
}
