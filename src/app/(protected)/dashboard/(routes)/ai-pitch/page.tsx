import React from "react";
import { Navigation } from "lucide-react";
import Image from "next/image";

type Props = {};

export default function AiPitchPage({}: Props) {
  return (
    <>
      <section className="mx-auto relative flex flex-col min-h-screen justify-between w-full max-w-screen-xl px-2.5 lg:px-20 overflow-hidden">
        <div className="flex flex-col mr-auto w-2/3 py-5 px-5 items-start max-w-screen-lg bg-zinc-800 mt-[102px] rounded-lg">
          <Image src="/logo.webp" width={28} height={28} alt="logo" />
          <p className="mx-auto text-gray-400 mt-4">
            Summarize your startup, refine your pitch, and master tough
            questions from angel investors with our platform. Receive AI-driven
            feedback to improve.
          </p>
        </div>
        <div className="flex flex-col ml-auto w-2/3 py-5 px-5 items-start max-w-screen-lg bg-zinc-700 mt-4 rounded-lg">
          <p className="mr-auto text-gray-400 mt-4">
            what is this pitching about?
          </p>
        </div>
        <div className="flex flex-col mr-auto w-2/3 py-5 px-5 items-start max-w-screen-lg bg-zinc-800 mt-4 rounded-lg">
          <p className="mx-auto text-gray-400 mt-4">
            Pitching in business refers to presenting business ideas to another
            party. For example, you may pitch your startup business to potential
            investors or your products to potential customers.
          </p>
        </div>
        {/* search bar */}
        <div className="w-full mb-12 mx-auto max-w-screen-lg mt-auto grid grid-cols-6">
          <div className="col-span-6 flex justify-center items-center w-full">
            <div className="w-full px-3 bg-gray-800 border border-gray-700 rounded-lg flex justify-center items-center">
              <form className="flex w-full shadow-2xl">
                <input
                  type="text"
                  className="w-full py-3 bg-transparent focus:outline-none text-lg"
                  // autoFocus="autofocus"
                  placeholder="Search"
                />
                <button type="submit" className="">
                  <Navigation className="text-2xl hover:text-[#10a37f]" />
                  {/* <BiNavigation className="text-2xl hover:text-[#10a37f]"></BiNavigation> */}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
