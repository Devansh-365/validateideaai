"use client";

import React from "react";

import Link from "next/link";

import useScrollingEffect from "@/hooks/use-scroll";
import { Icons } from "@/components/icons";
import { usePathname } from "next/navigation";

const BottomNav = () => {
  const scrollDirection = useScrollingEffect();
  const pathname = usePathname();

  const navClass = scrollDirection === "up" ? "" : "opacity-25 duration-500";

  return (
    <div
      className={`fixed bottom-0 w-full py-4 z-10 bg-zinc-100 dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg sm:hidden ${navClass}`}
    >
      <div className="flex flex-row justify-around items-center bg-transparent w-full">
        <Link href="/" className="flex items-center relative">
          <Icons.overview
            className={`w-7 h-7 ${
              pathname == "/dashboard" ? "text-white" : "text-gray-500"
            }`}
          />
        </Link>
        <Link
          href="/explore"
          className={`w-7 h-7 ${
            pathname == "/dashboard/ds" ? "text-white" : "text-gray-500"
          }`}
        >
          <Icons.add className="w-7 h-7 " />
        </Link>
        <Link href="/notifications" className="flex items-center">
          <Icons.add
            className={`w-7 h-7 ${
              pathname == "/dashboard/sd" ? "text-white" : "text-gray-500"
            }`}
          />
        </Link>
        <Link href="/messages" className="flex items-center">
          <Icons.settings
            className={`w-7 h-7 ${
              pathname == "/dashboard/sd" ? "text-white" : "text-gray-500"
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
