import React from "react";
import ChatWrapper from "@/components/chat/chat-wrapper";
import SideNav from "@/components/dashboard/side-nav";
import { CircleOff } from "lucide-react";
import getQueryClient from "@/lib/get-query-client";
import axios from "axios";
import { UserAccountNav } from "@/components/dashboard/user-account-nav";
import ReactMarkdown from "react-markdown";

async function getBuisnessReport(id: string) {
  const res = await axios.get(
    `https://backend-mentorship.onrender.com/v1/fine_tuning/jobs/responsebyid/${id}`
  );
  const data = await res.data.data[0];
  return data;
}

export default async function page({ params }: { params: { ideaId: string } }) {
  const report = await getBuisnessReport(params.ideaId);
  console.log("report : ", report);

  return (
    <>
      <SideNav />
      {/* <Navbar /> */}
      <main className="flex-1 min-h-screen relative">
        <div className="fixed w-full top-0 z-10 flex items-center justify-between h-[62px] border-b dark:border-zinc-800 border-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-4">
          <h5></h5>
          <UserAccountNav />
        </div>
        <div className="ml-0 md:ml-[220px] h-full">
          <section className="mx-auto relative flex mt-[82px] flex-col min-h-screen w-full max-w-5xl px-2.5 lg:px-20 overflow-hidden">
            {report ? (
              <ReactMarkdown
                components={{
                  h1: ({ node, children }) => {
                    return <h1 className="text-2xl">{children}</h1>;
                  },
                  h3: ({ node, children }) => {
                    return <h3 className="text-lg">{children}</h3>;
                  },
                  h2: ({ node, children }) => {
                    return <h2 className="text-xl mb-2">📌 {children}</h2>;
                  },
                  h4: ({ node, children }) => {
                    return <h4 className="text-xl">{children}</h4>;
                  },
                  h5: ({ node, children }) => {
                    return <h5 className="text-xl">{children}</h5>;
                  },
                  h6: ({ node, children }) => {
                    return <h6 className="text-xl">{children}</h6>;
                  },
                  p: ({ node, children }) => {
                    return <p className="mb-6">{children}</p>;
                  },
                }}
              >
                {report.generatedReport}
              </ReactMarkdown>
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
