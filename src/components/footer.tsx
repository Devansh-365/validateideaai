import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

function Footer() {
  return (
    <footer className="mt-12 border-t px-5 md:px-0 bg-[#26262B] dark:border-zinc-800 border-zinc-200 py-[3.6rem] text-md">
      <div className="mx-auto flex flex-col justify-center items-center">
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="logo"
          className="mb-8"
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white text-center max-w-2xl">
          Make Better Decisions{" "}
        </h1>
        <p className="mt-4 sm:text-sm leading-6 text-[#A5ABB6] sm:leading-8 text-center max-w-2xl">
          In this new AI era, we can now minimize startup risks by leveraging
          GPT-4 to provide businesses with market insights even before they
          launch.
        </p>
        <Link
          className={buttonVariants({
            size: "lg",
            variant: "mentorship",
            className: "rounded-full mx-auto mt-8",
          })}
          href="/login"
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
          <span className="ml-2">Get Started</span>
        </Link>
      </div>
      <div className="mt-12 flex gap-4 mx-auto justify-center items-center text-white">
        <span className="text-[#A5ABB6]">Terms of Service</span>
        <span className="text-[#A5ABB6]">Privacy Policy</span>
        <Link
          href="mailto:devanshtiwari365@gmail.com"
          target="_blank"
          className="text-[#A5ABB6]"
        >
          Contact Us
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
