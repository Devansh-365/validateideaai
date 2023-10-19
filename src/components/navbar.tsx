/* eslint-disable @next/next/no-async-client-component */
"use client";

import Link from "next/link";

import { buttonVariants } from "./ui/button";
import React from "react";
import Image from "next/image";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
// import { UserAccountNav } from "./user-account-nav";
// import { getCurrentUser } from "@/lib/session";
// import db from "@/lib/db";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

export default async function Navbar({ items, children }: MainNavProps) {
  const pathname = usePathname();
  //   const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 z-10 w-full backdrop-blur-[12px]">
      <div className="flex justify-between items-center px-8 text-center h-12">
        <Link className="flex items-center text-md" href="/">
          <Image
            src="/logo.webp"
            width={28}
            height={28}
            alt="logo"
            className="mr-2"
          />
          {/* <span className="font-bold">memborship.ai</span> */}
        </Link>
        <div className="ml-auto mr-4 sm:mr-6">
          {items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href == pathname
                      ? "text-foreground"
                      : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
        <div className="flex h-full items-center">
          {true ? (
            <React.Fragment>
              <Link
                className={buttonVariants({
                  size: "sm",
                  className: "rounded-full",
                })}
                href="/dashboard"
              >
                Get Started
                <Icons.arrowRight className="w-4 h-4 ml-2" />
              </Link>
              {/* <Link
                className={buttonVariants({
                  size: "sm",
                  className: "rounded-full",
                })}
                href="/register"
              >
                Sign up
              </Link> */}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* <Link
                className={buttonVariants({
                  size: "md",
                  variant: "swappy",
                  className: "rounded-full mr-2 bg-[#F03D4E]",
                })}
                href="/dashboard"
              >
                Post your Job
              </Link> */}
              {/* <UserAccountNav
                user={{
                  name: user?.name,
                  image: user?.image,
                  email: user?.email,
                }}
              /> */}
            </React.Fragment>
          )}
        </div>
      </div>
    </header>
  );
}
