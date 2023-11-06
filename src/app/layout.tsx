import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/modal-provider";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/components/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PitchPerfectAI",
  description: "Smart Decision-Making with AI for Entrepreneurs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <ModalProvider />
          <Toaster />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
