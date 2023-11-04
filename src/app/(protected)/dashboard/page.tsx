import React from "react";
import ChatWrapper from "@/components/chat/chat-wrapper";

export default function DashboardPage() {
  return (
    <>
      <section className="mx-auto relative flex flex-col min-h-screen justify-between w-full max-w-5xl px-2.5 lg:px-20 overflow-hidden">
        <ChatWrapper />
       </section>
    </>
  );
}
