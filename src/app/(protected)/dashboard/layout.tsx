import BottomNav from "@/components/bottom-nav";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SideNav from "@/components/side-nav";
import React from "react";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen relative flex-col justify-between">
      <SideNav />
      {/* <Navbar /> */}
      <main className="flex-1 relative bg-zinc-900/80">{children}</main>
      <BottomNav />
    </div>
  );
}
