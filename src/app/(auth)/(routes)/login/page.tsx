import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

import Link from "next/link";
import React from "react";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import LoginAuthForm from "@/components/forms/login-form";

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
          Login to ValidateIdeaAI
        </h3>
        <p className="text-sm text-gray-500">
          Validate your idea and turn your dream into reality
        </p>
      </div>
      <div className="flex flex-col space-y-3 px-4 py-6 sm:px-16">
        <LoginAuthForm />

        <p className="text-center text-sm text-gray-500">
          {`Don't have an account?`}{" "}
          <Link
            href="/register"
            className="font-semibold text-gray-500 transition-colors"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
