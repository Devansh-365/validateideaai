import React from "react";
import ChatWrapper from "@/components/chat/chat-wrapper";
import SideNav from "@/components/dashboard/side-nav";
import { CircleOff } from "lucide-react";
import getQueryClient from "@/lib/get-query-client";
import axios from "axios";

async function getBuisnessReport(id: string) {
  const res = await axios.get(
    `http://localhost:8000/v1/fine_tuning/jobs/responsebyid/${id}`
  );
  const data = await res.data.data[0];
  return data;
}

export default async function page({ params }: { params: { ideaId: string } }) {
  console.log("PARAMS : ", params.ideaId);
  const report = await getBuisnessReport(params.ideaId);
  console.log("REPORT  : ", report);

  return (
    <>
      <SideNav />
      {/* <Navbar /> */}
      <main className="flex-1 min-h-screen relative">
        <div className="absolute w-full top-0 z-10 flex items-center justify-between h-[62px] border-b dark:border-zinc-800 border-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-4">
          <h5></h5>
          {/* <UserAccountNav
            user={{
              name: user?.name,
              image: user?.image,
              email: user?.email,
            }}
          /> */}
        </div>
        <div className="ml-0 md:ml-[220px] h-full">
          <section className="mx-auto relative flex flex-col min-h-screen justify-between w-full max-w-5xl px-2.5 lg:px-20 overflow-hidden">
            {report ? (
            <p className="text-2xl mt-[82px]">{report.generatedReport}</p>
            ) : (
              <div className="text-center mx-auto my-auto flex flex-col items-center justify-center">
              <CircleOff className="w-8 h-8" />
              <h3 className="mt-4 text-xl font-medium">No report found</h3>
            </div>
            )}
            {/* <ChatWrapper /> */}
          </section>
        </div>
      </main>
    </>
  );
}
