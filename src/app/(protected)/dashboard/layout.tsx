import SideNav from "@/components/dashboard/side-nav";
import Navbar from "@/components/navbar";
import React from "react";
import { getCookie, setCookie, deleteCookie, getCookies } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import axios from "axios";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  if (!cookies().get("token")) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen relative flex-col justify-between">
      {children}
    </div>
  );
}
