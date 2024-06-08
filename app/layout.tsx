import { Kanit as GoogleKanit } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const Kanit = GoogleKanit({
  weight: '500',
  subsets: ["latin"],
});

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
  height: "device-height",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={Kanit.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
