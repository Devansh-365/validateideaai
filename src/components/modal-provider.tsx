"use client";

import CreateBuisnessIdeaModal from "./modals/buisness-idea-modal";
import { useEffect, useState } from "react";
import { DeleteBuisnessIdeaModal } from "./modals/delete-idea-modal";
import CreateDemoReport from "./modals/create-demo-report";
import { AlertDemoUserModal } from "./modals/alert-demo-user";
import { CreateMoreReportModal } from "./modals/create-more-report";
import { ContactUsModal } from "./modals/contact-us";

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
      <CreateDemoReport />
      <AlertDemoUserModal />
      <CreateMoreReportModal />
      <ContactUsModal />
    </>
  );
};
