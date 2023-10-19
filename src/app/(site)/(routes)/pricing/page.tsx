import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

export default function PricingPage({}: Props) {
  return (
    <>
      <section className="mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-28 lg:pb-40 max-w-5xl">
        <div className="flex flex-col items-center mx-auto mb-12">
          <h1 className="text-3xl text-gray-50 font-medium tracking-tight text-center sm:text-7xl">
            Pricing
          </h1>
          <p className="mt-6 sm:text-lg leading-6 sm:leading-8 text-gray-400 text-center">
            Start today, no credit card required.
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-6">
          <div className="w-full flex flex-1 flex-col items-start p-8 border dark:border-zinc-800 border-zinc-200 rounded-lg">
            <div className="pb-4 flex flex-col gap-2 mb-2">
              <h3 className="text-2xl">Free</h3>
              <p className="text-sm">
                <span className="text-4xl font-semibold mr-2">$0</span>per month
              </p>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
          <div className="w-full flex flex-1 flex-col items-start p-8 border dark:border-zinc-800 border-zinc-200 rounded-lg">
            <div className="pb-4 flex flex-col gap-2 mb-2">
              <h3 className="text-2xl">Free</h3>
              <p className="text-sm">
                <span className="text-4xl font-semibold mr-2">$0</span>per month
              </p>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
          <div className="w-full flex flex-1 flex-col items-start p-8 border dark:border-zinc-800 border-zinc-200 rounded-lg">
            <div className="pb-4 flex flex-col gap-2 mb-2">
              <h3 className="text-2xl">Free</h3>
              <p className="text-sm">
                <span className="text-4xl font-semibold mr-2">$0</span>per month
              </p>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> Unlimited Posts
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </section>
    </>
  );
}
