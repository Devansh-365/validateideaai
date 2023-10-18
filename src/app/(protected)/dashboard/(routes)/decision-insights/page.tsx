import React from "react";
import { Navigation } from "lucide-react";
import Image from "next/image";

type Props = {};

export default function AiPitchPage({}: Props) {
  return (
    <>
      <section className="mx-auto relative flex flex-col min-h-screen justify-between w-full max-w-screen-xl px-2.5 lg:px-20 overflow-hidden">
        <div className="flex flex-col mx-auto py-5 px-5 items-start max-w-screen-lg bg-zinc-800 mt-[102px] rounded-lg">
          <Image src="/logo.webp" width={28} height={28} alt="logo" />
          <p className="mx-auto text-gray-400 mt-4">
            {`Unlock the power of informed decisions for your startup by
              anticipating second-order effects with our platform. Please
              specify the decision for which you'd like to explore its
              second-order effects.`}
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
                  placeholder="What are you looking for?"
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
