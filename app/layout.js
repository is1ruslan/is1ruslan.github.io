import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "0xLiquidity",
  description:
    "ØxLiquidity is poised to transform into a decentralized venture capital fund, providing crucial support to budding and active developers. By funding liquidity in startup projects, we will be nurturing the growth of innovative ideas and fostering new talent in the DeFi ecosystem.",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={"bg-backingDark text-maintextDark"}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
