import BottomNav from "@/components/bottom-nav";
import SideNav from "@/components/side-nav";
import React from "react";
import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

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
      <main className="flex-1 relative bg-zinc-900/80 ml-0 md:ml-[220px]">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
