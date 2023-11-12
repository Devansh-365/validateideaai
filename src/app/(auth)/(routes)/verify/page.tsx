"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import Link from "next/link";
import React from "react";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { setCookie, getCookies } from "cookies-next";

export default function VerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams?.get("id");

  React.useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/v1/fine_tuning/jobs/verify",
          {
            id: userId,
          }
        );

        if (response.data.success) {
          setCookie("token", response.data.token);
          router.push("/dashboard");
        } else {
          console.log("Something went wrong");
        }
      } catch (error) {
        console.log("Error : ", error);
      }
    };

    verifyEmail();
  }, [userId]);

  return (
    <div className="z-10 my-auto h-fit w-full max-w-sm overflow-hidden">
      <Link
        href="/register"
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
          Verify your email
        </h3>
        <p className="text-sm text-gray-500">
          Please check your inbox for a verification email
        </p>
      </div>
      {/* <div className="flex flex-col space-y-3 px-4 py-6 sm:px-16">
        <p className="text-center text-sm text-gray-500">
          {`Already have an account?`}{" "}
          <Link
            href="/login"
            className="font-semibold text-gray-500 transition-colors"
          >
            Login
          </Link>
        </p>
      </div> */}
    </div>
  );
}
