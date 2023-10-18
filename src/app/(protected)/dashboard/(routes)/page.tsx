import { UserAccountNav } from "@/components/user-account-nav";
import { getCurrentUser } from "@/lib/session";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export default async function DashboardPage({}: Props) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <section className="flex h-36 items-center border-b dark:border-zinc-800 border-zinc-200">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Overview</h1>
            {/* <CreateProjectButton /> */}
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link
            href={`/dashboard/`}
            className="flex flex-col rounded-lg border dark:border-zinc-800 border-zinc-200 p-6 shadow lg:hover:bg-zinc-800/50 lg:hover:border-zinc-700 transition-colors hover:shadow-lg"
          >
            <h3 className="text-lg font-medium tracking-tight text-gray-50">
              AI Pitch
            </h3>
            <p className="mt-1 text-gray-400">
              Summarize your startup, refine your pitch, and master tough
              questions from angel investors with our platform. Receive
              AI-driven feedback to improve.
            </p>
            <p className="mt-3 text-gray-200 font-medium"> Learn more → </p>
          </Link>
          <Link
            href={`/dashboard/decision-insights`}
            className="flex flex-col rounded-lg border dark:border-zinc-800 border-zinc-200 p-6 shadow lg:hover:bg-zinc-800/50 lg:hover:border-zinc-700 transition-colors hover:shadow-lg"
          >
            <h3 className="text-lg font-medium tracking-tight text-gray-50">
              Decision Insights
            </h3>
            <p className="mt-1 text-gray-400">
              {`Unlock the power of informed decisions for your startup by
              anticipating second-order effects with our platform. Please
              specify the decision for which you'd like to explore its
              second-order effects.`}
            </p>
            <p className="mt-3 text-gray-200 font-medium"> Learn more → </p>
          </Link>
          <Link
            href={`/dashboard/sales-chat`}
            className="flex flex-col rounded-lg border dark:border-zinc-800 border-zinc-200 p-6 shadow lg:hover:bg-zinc-800/50 lg:hover:border-zinc-700 transition-colors hover:shadow-lg"
          >
            <h3 className="text-lg font-medium tracking-tight text-gray-50">
              Sales Chat
            </h3>
            <p className="mt-1 text-gray-400">
              Struggling with persuasion, sales, or conflicts? Our AI-powered
              guidance, void of emotions, is tailored to your query for
              practical solutions. Simply enter your query now!
            </p>
            <p className="mt-3 text-gray-200 font-medium"> Learn more → </p>
          </Link>
          <Link
            href={`/dashboard/conflict-ai`}
            className="flex flex-col rounded-lg border dark:border-zinc-800 border-zinc-200 p-6 shadow lg:hover:bg-zinc-800/50 lg:hover:border-zinc-700 transition-colors hover:shadow-lg"
          >
            <h3 className="text-lg font-medium tracking-tight text-gray-50">
              Conflict AI
            </h3>
            <p className="mt-1 text-gray-400">
              Struggling with persuasion, sales, or conflicts? Our AI-powered
              guidance, void of emotions, is tailored to your query for
              practical solutions. Simply enter your query now!{" "}
            </p>
            <p className="mt-3 text-gray-200 font-medium"> Learn more → </p>
          </Link>
        </div>
      </section>
    </>
  );
}
