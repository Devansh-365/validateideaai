import React from "react";
import SideNav from "@/components/dashboard/side-nav";
import { CircleOff } from "lucide-react";
import axios from "axios";
import { getCookies } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UserAccountNav } from "@/components/dashboard/user-account-nav";
import MobileNav from "@/components/dashboard/mobile-nav";

async function getCurrentUser() {
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

async function getSideNav(id: string) {
  const res = await axios.get(
    `https://backend-mentorship.onrender.com/v1/fine_tuning/jobs/responsebyuser/${id}`
  );
  const data = await res.data.data;
  return data;
}

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  const reports = await getSideNav(user._id);

  if (reports.length != 0) {
    redirect(`/dashboard/idea/${reports[0]._id}`);
  }

  return (
    <>
      <SideNav />
      {/* <Navbar /> */}
      <main className="flex-1 min-h-screen relative">
        <div className="absolute w-full top-0 z-10 flex items-center justify-between h-[62px] border-b dark:border-zinc-800 border-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-4">
          <MobileNav />
          <div className="ml-auto">
            <UserAccountNav />
          </div>
        </div>
        <div className="ml-0 md:ml-[220px] h-full">
          <section className="mx-auto relative flex flex-col min-h-screen justify-between w-full max-w-5xl px-2.5 lg:px-20 overflow-hidden">
            <div className="text-center mx-auto my-auto flex flex-col items-center justify-center">
              <CircleOff className="w-8 h-8" />
              <h3 className="mt-4 text-xl font-medium">No report found</h3>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
