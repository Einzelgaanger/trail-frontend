import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/index.scss";
import "./globals.scss";

import StyledComponentsRegistry from "@/lib/AntdRegistry";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trail",
  description: "Monitoring and evaluation app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
