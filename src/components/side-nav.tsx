import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icons } from "./icons";

type Props = {};

export default function SideNav({}: Props) {
  return (
    <div
      className={`absolute z-10 hidden md:flex h-full w-full flex-shrink-0 flex-col border-r dark:border-zinc-800 border-zinc-200 bg-zinc-100 dark:bg-zinc-900 duration-200 ease-in-out sm:w-[220px] px-4 ${
        true ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-[62px] items-center border-b dark:border-zinc-800 border-zinc-200">
        <Image
          src="/logo.webp"
          width={20}
          height={20}
          alt="logo"
          className="mr-2"
        />
        <span>PitchPerfectAI</span>
        {/* <div className="mr-4 cursor-pointer p-1" onClick={() => setOpen(false)}>
          <ChevronDoubleLeftIcon className="h-5 w-5" />
        </div> */}
      </div>
      <Link href="/dashboard/feed">
        <div
          className={`mt-4 flex py-1 cursor-pointer flex-row items-center rounded pl-2 transition-colors ${
            true ? "bg-zinc-800" : "hover:bg-[#f1f3f9]"
          }`}
        >
          <Icons.overview className="w-4 h-4 mr-2" />
          <span className="font-medium">Overview</span>
        </div>
      </Link>
      <span className="mt-4 text-zinc-300/80 text-xs uppercase tracking-widest">
        Tools
      </span>
      <Link href="/dashboard/feed">
        <div
          className={`my-2 flex py-1 cursor-pointer flex-row items-center rounded pl-2 transition-colors ${
            false
              ? "bg-zinc-800 font-medium"
              : "hover:bg-zinc-800 text-white/80"
          }`}
        >
          <Icons.bulb className="w-4 h-4 mr-2" />
          <span className="">AI Pitch</span>
        </div>
      </Link>
      <Link href="/dashboard/feed">
        <div
          className={`my-2 flex py-1 cursor-pointer flex-row items-center rounded pl-2 transition-colors ${
            false
              ? "bg-zinc-800 font-medium"
              : "hover:bg-zinc-800 text-white/80"
          }`}
        >
          <div className="mr-2 h-4 w-4">{/* <InboxIcon /> */}</div>
          <span className="">Decision Insights</span>
        </div>
      </Link>
      <Link href="/dashboard/feed">
        <div
          className={`my-2 flex py-1 cursor-pointer flex-row items-center rounded pl-2 transition-colors ${
            false
              ? "bg-zinc-800 font-medium"
              : "hover:bg-zinc-800 text-white/80"
          }`}
        >
          <div className="mr-2 h-4 w-4">{/* <InboxIcon /> */}</div>
          <span className="">Sales Chat</span>
        </div>
      </Link>
      <Link href="/dashboard/feed">
        <div
          className={`my-2 flex py-1 cursor-pointer flex-row items-center rounded pl-2 transition-colors ${
            false
              ? "bg-zinc-800 font-medium"
              : "hover:bg-zinc-800 text-white/80"
          }`}
        >
          <div className="mr-2 h-4 w-4">{/* <InboxIcon /> */}</div>
          <span className="">Conflict AI</span>
        </div>
      </Link>
      <span className="mt-4 text-zinc-300/80 text-xs uppercase tracking-widest">
        Settings
      </span>
      <Link href="/dashboard/feed">
        <div
          className={`my-2 flex py-1 cursor-pointer flex-row items-center rounded pl-2 transition-colors ${
            false
              ? "bg-zinc-800 font-medium"
              : "hover:bg-zinc-800 text-white/80"
          }`}
        >
          <Icons.user className="w-4 h-4 mr-2" />
          <span className="">Profile</span>
        </div>
      </Link>
      <Link href="/dashboard/feed">
        <div
          className={`my-2 flex py-1 cursor-pointer flex-row items-center rounded pl-2 transition-colors ${
            false
              ? "bg-zinc-800 font-medium"
              : "hover:bg-zinc-800 text-white/80"
          }`}
        >
          <Icons.billing className="w-4 h-4 mr-2" />
          <span className="">Billing</span>
        </div>
      </Link>
    </div>
  );
}
