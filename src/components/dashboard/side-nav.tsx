"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icons } from "@/components/icons";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import SettingsDropdown from "./settings-dropdown";
import { useModal } from "@/hooks/use-modal";
import useAuthStore from "@/hooks/use-auth-store";
import { getCookie, setCookie, deleteCookie } from "cookies-next";

type NavItemProps = {
  href?: string;
  icon?: React.ReactNode;
  label?: string;
  active?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({
  href = "/",
  icon,
  label,
  active,
}) => (
  <Link href={href}>
    <div
      className={`my-2 flex py-1 cursor-pointer flex-row items-center rounded pl-2 transition-colors ${
        active
          ? "bg-[#298DFF]/20 text-[#0A7CFF]"
          : "hover:bg-zinc-200 text-foreground"
      }`}
    >
      {icon}
      <span className="">{label}</span>
    </div>
  </Link>
);

export default function SideNav() {
  const pathname = usePathname();
  const { onOpen } = useModal();
  const { roles, isLoggedIn } = useAuthStore();
  const navItems: any = [];
  setCookie("isLoggedIn", getCookie("isLoggedIn"));

  console.log("IsLOGGEDed : ", getCookie("isLoggedIn"));

  //   const navItems = [
  //     {
  //       href: "/dashboard",
  //       icon: <Icons.overview className="w-4 h-4 mr-2" />,
  //       label: "Overview",
  //       active: pathname == "/dashboard",
  //     },
  //     {
  //       title: "Tools",
  //       items: [
  //         {
  //           href: "/dashboard/ai-pitch",
  //           icon: <Icons.bulb className="w-4 h-4 mr-2" />,
  //           label: "AI Pitch",
  //           active: pathname == "/dashboard/ai-pitch",
  //         },
  //         {
  //           href: "/dashboard/decision-insights",
  //           icon: <Icons.bulb className="w-4 h-4 mr-2" />,
  //           label: "Decision Insights",
  //           active: pathname == "/dashboard/decision-insights",
  //         },
  //         {
  //           href: "/dashboard/sales-chat",
  //           icon: <Icons.bulb className="w-4 h-4 mr-2" />,
  //           label: "Sales Chat",
  //           active: pathname == "/dashboard/sales-chat",
  //         },
  //         {
  //           href: "/dashboard/conflict-ai",
  //           icon: <Icons.bulb className="w-4 h-4 mr-2" />,
  //           label: "Conflict AI",
  //           active: pathname == "/dashboard/conflict-ai",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Settings",
  //       items: [
  //         {
  //           href: "/dashboard/profile",
  //           icon: <Icons.user className="w-4 h-4 mr-2" />,
  //           label: "Profile",
  //           active: pathname == "/dashboard/profile",
  //         },
  //         {
  //           href: "/dashboard/billing",
  //           icon: <Icons.billing className="w-4 h-4 mr-2" />,
  //           label: "Billing",
  //           active: pathname == "/dashboard/billing",
  //         },
  //       ],
  //     },
  //   ];

  return (
    <div
      className={`absolute z-20 hidden md:flex h-full w-full flex-shrink-0 flex-col border-r dark:border-zinc-800 border-zinc-400 bg-zinc-100 dark:bg-zinc-900 duration-200 ease-in-out sm:w-[220px] ${
        true ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Link
        href="/"
        className="flex h-[62px] px-4 mb-2 items-center border-b dark:border-zinc-800 border-zinc-400"
      >
        <Image
          src="/logo.svg"
          width={20}
          height={20}
          alt="logo"
          className="mr-2"
        />
        <span>PitchPerfectAI</span>
      </Link>
      <div className="px-4">
        <Button
          onClick={() => onOpen("buisnessIdeaModal")}
          className="w-full rounded-lg py-5 bg-blue-600 hover:bg-blue-600/80"
        >
          <Icons.add className="w-4 h-4 mr-2" />
          <span className="">Add Buisness Idea</span>
        </Button>
        {navItems.length != 0 &&
          navItems.map((item: any, index: any) => (
            <>
              {item.title ? (
                <div key={index} className="mt-4">
                  <span className="mb-2 text-xs uppercase tracking-widest">
                    {item.title}
                  </span>
                  {item.items.map((item: any, index: any) => (
                    <NavItem key={index} {...item} />
                  ))}
                </div>
              ) : (
                <NavItem key={index} {...item} />
              )}
            </>
          ))}
      </div>
      <div className="mt-auto mx-auto mb-2 w-full px-4">
        <SettingsDropdown />
      </div>
    </div>
  );
}
