import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <Image
        src="/hero.png"
        alt=""
        layout="fill"
        objectFit="cover"
        className="absolute -top-20 w-screen h-[calc(100vh+162px)] md:h-[calc(100vh+120px)] -z-[10]"
      />
      <section className="relative flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-28 lg:pb-40 max-w-4xl">
        <h1 className="text-3xl text-gray-50 font-medium tracking-tight text-center sm:text-7xl">
          Smart Decision-Making with AI for Entrepreneurs
        </h1>
        <p className="mt-6 sm:text-lg leading-6 sm:leading-8 text-gray-400 text-center">
          Leverage the Advanced Capabilities of Artificial Intelligence to
          Enhance Your Entrepreneurial Decision-Making Process and Achieve
          Optimal Outcomes
        </p>
        <Link
          className={buttonVariants({
            size: "lg",
            className: "rounded-full mt-12 mx-auto",
          })}
          href="/dashboard"
        >
          Get Started
          {/* <Icons.arrowRight className="w-4 h-4 ml-2" /> */}
        </Link>
      </section>
      <section className="relative flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 pb-32 lg:pb-40 max-w-4xl">
        <p className="text-sky-400 text-xs sm:text-sm uppercase tracking-widest mb-6">Features</p>
      </section>
    </div>
  );
}
