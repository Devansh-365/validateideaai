"use client";

import { BadgePlus, CircleOff } from "lucide-react";
import { useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal";
import { Icons } from "@/components/icons";
import useDemoReportStore from "@/hooks/use-demo-report-store";
import ReactMarkdown from "react-markdown";
import DemoReportButton from "@/components/demo-report-button";
import Link from "next/link";

export default function DemoPage() {
  const { onOpen } = useModal();
  const responseText = useDemoReportStore((state) => state.responseText);

  useEffect(() => {
    if (responseText !== "") {
      const timer: any = setTimeout(() => {
        onOpen("alertDemoUser");
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [responseText, onOpen]);

  return (
    <div className="min-h-[60vh] max-w-3xl px-5 md:px-0 text-start mx-auto my-auto flex flex-col items-center justify-center">
      {responseText !== "" ? (
        <div className="pt-20">
          <div className="w-full flex justify-between items-center pb-6 mb-6 border-b">
            <h2 className="font-bold text-3xl capitalize">
              Unlock the Full Report
            </h2>
            <Link
              href="/register"
              className={buttonVariants({ className: "rounded-lg" })}
            >
              Sign Up
            </Link>
          </div>
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
                  <h2 className="text-xl mb-2 mr-auto text-[#14171f] font-medium">
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
            {responseText}
          </ReactMarkdown>
        </div>
      ) : (
        <div className="text-center flex flex-col justify-center items-center">
          <BadgePlus className="w-8 h-8" />
          <h3 className="text-[#2D3139] font-semibold tracking-tight text-2xl text-center py-1 -my-1 mb-2 mt-4">
            Get Insights into Your Business Idea
          </h3>
          <p className="max-w-md mb-5 text-[#676D79] text-lg">
            Sign Up to Unlock the Full Business Report: Your Key to
            Comprehensive Business Insights
          </p>
          <DemoReportButton />
        </div>
      )}
    </div>
  );
}
