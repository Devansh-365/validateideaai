/* eslint-disable @next/next/no-async-client-component */
"use client";

import Link from "next/link";

import { buttonVariants } from "./ui/button";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

interface MainNavProps {
  children?: React.ReactNode;
}

export default async function Navbar({ children }: MainNavProps) {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-10 w-full backdrop-blur-[12px] ${
        scrolling ? "bg-white text-black" : "bg-[#26262B] text-white"
      }`}
    >
      <div className="flex justify-between items-center px-8 text-center h-12">
        <Link className="flex items-center text-md font-semibold" href="/">
          <Image
            src="/logo.svg"
            width={28}
            height={28}
            alt="logo"
            className="mr-2"
          />
          <span>ValidateIdeaAI</span>
        </Link>
        <div className="flex h-full items-center">
          <Link
            className={buttonVariants({
              size: "sm",
              variant: "mentorship",
              className: "rounded-full bg-[#0A7CFF]",
            })}
            href="/dashboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="23"
              viewBox="0 0 19 23"
              fill="none"
            >
              <path
                d="M0.25 13.0796C0.25 18.0796 4.27944 22.0796 9.25 22.0796C14.2206 22.0796 18.25 18.0796 18.25 13.0796C18.25 6.03194 12.7312 2.0503 10.3368 0.654477C10.0355 0.478817 9.8848 0.390987 9.7183 0.411007C9.5848 0.427047 9.4364 0.518297 9.3619 0.630117C9.2688 0.769707 9.2795 0.949077 9.3009 1.30783C9.4971 4.60034 10.0352 11.0796 6.67857 11.0796C4.52186 11.0796 4.17403 9.35998 4.11793 6.64203C4.10825 6.17323 4.10342 5.93883 3.97461 5.79948C3.87106 5.68746 3.6874 5.62227 3.53639 5.64394C3.34856 5.67091 3.21098 5.83333 2.93582 6.15819C1.80088 7.49809 0.25 9.90908 0.25 13.0796Z"
                fill="white"
              />
            </svg>
            <span className="ml-2">Get Started</span>{" "}
          </Link>
        </div>
      </div>
    </header>
  );
}
