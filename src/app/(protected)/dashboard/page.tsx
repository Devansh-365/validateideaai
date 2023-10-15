import { UserAccountNav } from "@/components/user-account-nav";
import { getCurrentUser } from "@/lib/session";
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
      <div className="flex items-center justify-between h-[62px] shrink-0 border-b dark:border-zinc-800 border-zinc-200 bg-zinc-100 dark:bg-zinc-900 px-4">
        <h5></h5>
        <UserAccountNav
          user={{
            name: user?.name,
            image: user?.image,
            email: user?.email,
          }}
        />
      </div>
      <section className="flex h-36 items-center border-b dark:border-zinc-800 border-zinc-200">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Overview</h1>
            {/* <CreateProjectButton /> */}
          </div>
        </div>
      </section>
    </>
  );
}
