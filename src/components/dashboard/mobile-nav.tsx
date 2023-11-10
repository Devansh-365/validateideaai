"use client";

import { Button, buttonVariants } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useModal } from "@/hooks/use-modal";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Icons } from "@/components/icons";
import Link from "next/link";
import useSideNavs from "@/hooks/use-side-navs";
import { useCurrentUser } from "@/hooks/use-current-user";
import { usePathname } from "next/navigation";
import { Link2, LinkIcon } from "lucide-react";

export default function MobileNav() {
  const { onOpen } = useModal();
  const pathname = usePathname();
  const { data: user, isLoading: isUserLoading } = useCurrentUser();
  const { data: sideNavData, isLoading: isSideNavLoading } = useSideNavs(
    user?._id
  );

  return (
    <div className="grid md:hidden grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="rounded-lg">
            <Menu className="w-3 h-3" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <Link href="/" className="flex h-[62px] px-4 mb-4 items-center">
              <Image
                src="/logo.svg"
                width={26}
                height={26}
                alt="logo"
                className="mr-2"
              />
              <span className="text-black font-medium">ValidateIdeaAI</span>
            </Link>
          </SheetHeader>
          <div className="grid py-4 px-4">
            <Button
              onClick={() => {
                if (
                  (user.role === "member" && sideNavData.length < 4) ||
                  (user.role !== "member" &&
                    user.role !== "admin" &&
                    sideNavData.length < 1) ||
                  user.role === "admin"
                ) {
                  onOpen("buisnessIdeaModal");
                } else if (user.role === "member" && sideNavData.length >= 4) {
                  onOpen("contactUs");
                } else {
                  onOpen("createMoreReport");
                }
              }}
              className="w-full rounded-lg py-5 bg-blue-600 hover:bg-blue-600/80"
            >
              <Icons.add className="w-4 h-4 mr-2" />
              <span className="">Add Buisness Idea</span>
            </Button>
            <p className="mt-8 text-xs text-[#939aa8] uppercase tracking-widest">
              Your Reports
            </p>
            <div className="mt-3 flex flex-col items-center gap-2">
              {!isSideNavLoading && !isUserLoading ? (
                <>
                  {sideNavData &&
                    sideNavData.map((item: any) => (
                      <>
                        {item.businessIdeaName && (
                          <Link
                            key={item._id}
                            href={`/dashboard/idea/${item._id}`}
                            className={buttonVariants({
                              variant: "sidenav",
                              className: `w-full rounded-lg flex items-start justify-start text-start text-black hover:text-white capitalize hover:bg-accent ${
                                pathname === `/dashboard/idea/${item._id}`
                                  ? "bg-accent"
                                  : ""
                              }`,
                            })}
                          >
                            <LinkIcon className="mr-2 text-white w-4 h-4" />
                            <span className="mr-auto">
                              {item.businessIdeaName && item.businessIdeaName}
                            </span>
                            {/* <Icons.trash className="bg-red-600 text-white w-6 h-6 p-1 rounded-full ml-auto" /> */}
                          </Link>
                        )}
                      </>
                    ))}
                </>
              ) : (
                <div>Loading</div>
              )}
            </div>
          </div>
          {/* <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </div>
  );
}
