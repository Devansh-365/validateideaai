"use client";

import CreateBuisnessIdeaModal from "./modals/buisness-idea-modal";
import { useEffect, useState } from "react";
import { DeleteBuisnessIdeaModal } from "./modals/delete-idea-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <DeleteBuisnessIdeaModal />
      <CreateBuisnessIdeaModal />
    </>
  );
};
