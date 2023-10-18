import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

export default function BillingPage({}: Props) {
  return (
    <>
      <section className="flex h-36 items-center border-b dark:border-zinc-800 border-zinc-200">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Billing</h1>
            {/* <CreateProjectButton /> */}
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 my-10 grid gap-5 md:col-span-4">
        <div className="rounded-lg border dark:border-zinc-800 border-zinc-200">
          <div className="flex flex-col space-y-3 p-5 sm:p-10">
            <h2 className="text-xl font-medium">Plan & Usage</h2>
            <p className="text-sm text-gray-400">
              You are currently on the Free plan.
            </p>
          </div>
          <div className="border-b dark:border-zinc-800 border-zinc-200" />
          <div className="flex items-center justify-end p-3 sm:px-10">
            <div>
              <Button>Upgrade</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
