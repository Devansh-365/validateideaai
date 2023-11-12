import React from "react";
import SideNav from "@/components/dashboard/side-nav";
import { CircleOff } from "lucide-react";
import axios from "axios";
import { UserAccountNav } from "@/components/dashboard/user-account-nav";
import ReactMarkdown from "react-markdown";
import DeleteReportButton from "@/components/dashboard/delete-report";
import { Button, buttonVariants } from "@/components/ui/button";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import MobileNav from "@/components/dashboard/mobile-nav";

async function getCurrentUser() {
  const token = cookies().get("token")?.value;

  try {
    const res = await axios.get(
      "https://backend-mentorship.onrender.com/v1/fine_tuning/jobs/currentuser",
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getBuisnessReport(id: string) {
  const res = await axios.get(
    `https://backend-mentorship.onrender.com/v1/fine_tuning/jobs/responsebyid/${id}`
  );
  const data = await res.data.data[0];
  return data;
}

export default async function page({ params }: { params: { ideaId: string } }) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  const report = await getBuisnessReport(params.ideaId);

  return (
    <>
      <SideNav />
      {/* <Navbar /> */}
      <main className="flex-1 min-h-screen relative">
        <div className="fixed w-full top-0 z-10 flex items-center justify-between h-[62px] border-b dark:border-zinc-800 border-zinc-300 bg-white px-4">
          <MobileNav />
          <div className="ml-auto">
            <UserAccountNav />
          </div>
        </div>
        <div className="ml-0 md:ml-[220px] h-full">
          <section className="mx-auto relative flex mt-[82px] text-[#14171f] flex-col min-h-screen w-full max-w-5xl px-5 lg:px-20 overflow-hidden">
            <div className="w-full flex justify-between items-center pb-6 mb-6 border-b">
              <h2 className="font-bold text-4xl capitalize">
                {report.businessIdeaName}
              </h2>
              {/* <DeleteReportButton report={report} /> */}
            </div>
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
                    return (
                      <h2 className="text-xl mb-2 text-[#14171f] font-medium">
                        {children}
                      </h2>
                    );
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
          </section>
        </div>
      </main>
    </>
  );
}
