"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Icons } from "@/components/icons";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import { useModal } from "@/hooks/use-modal";
import { useCurrentUser } from "@/hooks/use-current-user";
import useSideNavs from "@/hooks/use-side-navs";
import { Link2, LinkIcon } from "lucide-react";

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
  const navItems: any = [];
  const { data: user, isLoading: isUserLoading } = useCurrentUser();
  const { data: sideNavData, isLoading: isSideNavLoading } = useSideNavs(
    user?._id
  );

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
      className={`fixed z-20 hidden md:flex h-full w-full flex-shrink-0 flex-col border-r dark:border-zinc-800 border-zinc-400 bg-[#15171f] dark:bg-zinc-900 duration-200 ease-in-out sm:w-[220px] ${
        true ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Link href="/" className="flex h-[62px] px-4 mb-4 items-center">
        <Image
          src="/logo.svg"
          width={26}
          height={26}
          alt="logo"
          className="mr-2"
        />
        <span className="text-white font-medium">PitchPerfectAI</span>
      </Link>
      <div className="px-4">
        <Button
          onClick={() => {
            if (
              (user.role === "member" && sideNavData.length < 4) ||
              (user.role !== "member" &&
                user.role !== "admin" &&
                sideNavData.length < 1) ||
              user.role === "admin"
            ) {
              onOpen("buisnessIdeaModal");
            } else if (user.role === "member" && sideNavData.length >= 4) {
              onOpen("contactUs");
            } else {
              onOpen("createMoreReport");
            }
          }}
          className="w-full rounded-lg py-5 bg-blue-600 hover:bg-blue-600/80"
        >
          <Icons.add className="w-4 h-4 mr-2" />
          <span className="">Add Buisness Idea</span>
        </Button>
        <p className="mt-8 text-xs text-[#939aa8] uppercase tracking-widest">
          Your Reports
        </p>
        <div className="mt-3 flex flex-col items-center gap-2">
          {!isSideNavLoading && !isUserLoading ? (
            <>
              {sideNavData &&
                sideNavData.map((item: any) => (
                  <div key={item._id} className="w-full">
                    {item.businessIdeaName && (
                      <Link
                        key={item._id}
                        href={`/dashboard/idea/${item._id}`}
                        className={buttonVariants({
                          variant: "sidenav",
                          className: `w-full rounded-lg flex items-start justify-start text-start text-white hover:text-white capitalize hover:bg-[#373f51] ${
                            pathname === `/dashboard/idea/${item._id}`
                              ? "bg-[#373f51]"
                              : ""
                          }`,
                        })}
                      >
                        <LinkIcon className="mr-2 text-white w-4 h-4" />
                        <span className="mr-auto">
                          {item.businessIdeaName && item.businessIdeaName}
                        </span>
                        {/* <Icons.trash className="bg-red-600 text-white w-6 h-6 p-1 rounded-full ml-auto" /> */}
                      </Link>
                    )}
                  </div>
                ))}
            </>
          ) : (
            <div>Loading</div>
          )}
        </div>
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
      {/* <div className="mt-auto mx-auto mb-2 w-full px-4">
        <SettingsDropdown userData={user} />
      </div> */}
    </div>
  );
}
