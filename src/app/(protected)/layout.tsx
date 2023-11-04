import Navbar from "@/components/navbar";
import React from "react";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen relative flex-col justify-between">
      {/* <Navbar /> */}
      <main className="flex-1 min-h-screen">{children}</main>
    </div>
  );
}
