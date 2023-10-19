import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative">
        <Image
          src="/hero.png"
          alt=""
          layout="fill"
          objectFit="cover"
          className="absolute -top-20 w-screen h-[calc(100vh+162px)] md:h-[calc(100vh+120px)] -z-[10]"
        />
        <div className="flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-28 lg:pb-40 max-w-4xl">
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
            href="/login"
          >
            Get Started
            <Icons.arrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
      {/* <div className="relative mx-auto hidden sm:block max-w-4xl z-50">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 pb-16 w-full h-full">
          <Image
            src="/sc.png"
            alt=""
            height={600}
            width={800}
            objectFit="cover"
            className="w-full absolute -top-20 rounded-lg z-50 border"
          />
        </div>
      </div> */}
      <section className="relative flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:py-16 lg:pb-32 max-w-6xl">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl text-center py-1 -my-1">
          Features
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          <div className="relative overflow-hidden rounded-lg border p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.check />
              <div className="space-y-2">
                <h3 className="font-bold">Next.js 13</h3>
                <p className="text-sm text-muted-foreground">
                  App dir, Routing, Layouts, Loading UI and API routes.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.check />
              <div className="space-y-2">
                <h3 className="font-bold">Next.js 13</h3>
                <p className="text-sm text-muted-foreground">
                  App dir, Routing, Layouts, Loading UI and API routes.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.check />
              <div className="space-y-2">
                <h3 className="font-bold">Next.js 13</h3>
                <p className="text-sm text-muted-foreground">
                  App dir, Routing, Layouts, Loading UI and API routes.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.check />
              <div className="space-y-2">
                <h3 className="font-bold">Next.js 13</h3>
                <p className="text-sm text-muted-foreground">
                  App dir, Routing, Layouts, Loading UI and API routes.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.check />
              <div className="space-y-2">
                <h3 className="font-bold">Next.js 13</h3>
                <p className="text-sm text-muted-foreground">
                  App dir, Routing, Layouts, Loading UI and API routes.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Icons.check />
              <div className="space-y-2">
                <h3 className="font-bold">Next.js 13</h3>
                <p className="text-sm text-muted-foreground">
                  App dir, Routing, Layouts, Loading UI and API routes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:py-16 lg:pb-32 max-w-6xl">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl text-center py-1 -my-1 mb-12">
          FAQ
        </h3>
        <Accordion type="single" collapsible className="w-full space-y-3">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
