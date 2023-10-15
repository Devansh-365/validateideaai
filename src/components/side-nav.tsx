"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icons } from "./icons";
import { usePathname } from "next/navigation";

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
        active ? "bg-zinc-800 font-medium" : "hover:bg-zinc-800 text-white/80"
      }`}
    >
      {icon}
      <span className="">{label}</span>
    </div>
  </Link>
);

type Props = {};

export default function SideNav({}: Props) {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/dashboard",
      icon: <Icons.overview className="w-4 h-4 mr-2" />,
      label: "Overview",
      active: pathname == "/dashboard",
    },
    {
      title: "Tools",
      items: [
        {
          href: "/dashboard/",
          icon: <Icons.bulb className="w-4 h-4 mr-2" />,
          label: "AI Pitch",
          active: pathname == "/dashboard/ai-pitch",
        },
        {
          href: "/dashboard/",
          icon: <Icons.bulb className="w-4 h-4 mr-2" />,
          label: "Decision Insights",
          active: pathname == "/dashboard/decision-insights",
        },
        {
          href: "/dashboard/",
          icon: <Icons.bulb className="w-4 h-4 mr-2" />,
          label: "Sales Chat",
          active: pathname == "/dashboard/sales-chat",
        },
        {
          href: "/dashboard/",
          icon: <Icons.bulb className="w-4 h-4 mr-2" />,
          label: "Conflict AI",
          active: pathname == "/dashboard/conflict-ai",
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          href: "/dashboard/",
          icon: <Icons.user className="w-4 h-4 mr-2" />,
          label: "Profile",
          active: pathname == "/dashboard/profile",
        },
        {
          href: "/dashboard/",
          icon: <Icons.billing className="w-4 h-4 mr-2" />,
          label: "Billing",
          active: pathname == "/dashboard/billing",
        },
      ],
    },
  ];

  return (
    <div
      className={`absolute z-10 hidden md:flex h-full w-full flex-shrink-0 flex-col border-r dark:border-zinc-800 border-zinc-200 bg-zinc-100 dark:bg-zinc-900 duration-200 ease-in-out sm:w-[220px] ${
        true ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Link
        href="/"
        className="flex h-[62px] px-4 mb-2 items-center border-b dark:border-zinc-800 border-zinc-200"
      >
        <Image
          src="/logo.webp"
          width={20}
          height={20}
          alt="logo"
          className="mr-2"
        />
        <span>PitchPerfectAI</span>
      </Link>
      <div className="px-4">
        {navItems.map((item, index) => (
          <>
            {item.title ? (
              <div key={index} className="mt-4">
                <span className="mb-2 text-zinc-300/80 text-xs uppercase tracking-widest">
                  {item.title}
                </span>
                {item.items.map((item, index) => (
                  <NavItem key={index} {...item} />
                ))}
              </div>
            ) : (
              <NavItem key={index} {...item} />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
