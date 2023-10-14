import React from "react";

import Navbar from "@/components/navbar";
import { navConfig } from "@/config/nav";
import Footer from "@/components/footer";
import { footerConfig } from "@/config/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar items={navConfig} />
      <main className="flex-1 relative">{children}</main>
      <Footer items={footerConfig} />
    </div>
  );
}
