import BottomNav from "@/components/bottom-nav";
import SideNav from "@/components/side-nav";
import React from "react";
import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { UserAccountNav } from "@/components/user-account-nav";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  return (
    <div className="flex min-h-screen relative flex-col justify-between">
      <SideNav />
      {/* <Navbar /> */}
      <main className="flex-1 relative bg-zinc-900/80">
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
        <div className="ml-0 md:ml-[220px]">{children}</div>
      </main>
      <BottomNav />
    </div>
  );
}
