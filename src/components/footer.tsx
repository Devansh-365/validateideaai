import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icons } from "@/components/icons";

type FooterLink = {
  href: string;
  label: string;
};

export type FooterItem = {
  title: string;
  links: FooterLink[];
};

interface FooterProps {
  items?: FooterItem[];
  children?: React.ReactNode;
}

export default function Footer({ items, children }: FooterProps) {
  return (
    <footer className="mt-12 border-t border-gray-100 py-[5.6rem] text-md">
      <div className="mx-auto max-w-[120rem] px-[2.4rem] flex flex-col justify-between lg:flex-row">
        <div>
          <div className="flex h-full flex-row justify-between lg:flex-col">
            <div className="flex items-center text-gray-400">
              <Image
                src="/logo.webp"
                width={28}
                height={28}
                alt="logo"
                className="mr-4"
              />
              PitchPerfectAI
            </div>
            <div className="mt-auto flex space-x-4 text-gray-400">
              {/* <TwitterIcon />
              <GithubIcon />
              <SlackIcon /> */}
              <Icons.gitHub className="w-5 h-5 cursor-pointer" />
              <Icons.twitter className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {items &&
            items.map((column) => (
              <div
                key={column.title}
                className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[16rem]"
              >
                <h3 className="mb-3 font-medium">{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label} className="[&_a]:last:mb-0">
                      <Link
                        href={link.href}
                        className="mb-3 block text-gray-400 transition-colors hover:text-gray-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </footer>
  );
}
