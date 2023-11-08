import SideNav from "@/components/dashboard/side-nav";
import Navbar from "@/components/navbar";
import React from "react";
import { getCookie, setCookie, deleteCookie, getCookies } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import axios from "axios";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getCurrentUser() {
  await wait(2000);
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

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen relative flex-col justify-between">
      {children}
    </div>
  );
}
