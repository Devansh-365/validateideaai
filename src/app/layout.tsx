import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Spline_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const splinesans = Spline_Sans({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={splinesans.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
