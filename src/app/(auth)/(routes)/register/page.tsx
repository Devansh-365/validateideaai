import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import RegisterAuthForm from "@/components/forms/register-form";

import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="z-10 my-auto h-fit w-full max-w-sm overflow-hidden">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8 rounded-md"
        )}
      >
        <>
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="flex flex-col items-center justify-center space-y-3 px-4 py-6 pt-8 text-center sm:px-16">
        <Image
          src="/logo.svg"
          width={28}
          height={28}
          alt="logo"
          className="mr-4"
        />{" "}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
          Sign in to PitchPerfectAI
        </h3>
        <p className="text-sm text-gray-500">
          Smart Decision-Making with AI for Entrepreneurs
        </p>
      </div>
      <div className="flex flex-col space-y-3 px-4 py-6 sm:px-16">
        <RegisterAuthForm />

        <p className="text-center text-sm text-gray-500">
          {`Already have an account?`}{" "}
          <Link
            href="/login"
            className="font-semibold text-gray-500 transition-colors"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
