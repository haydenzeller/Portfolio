import Link from "next/link";
import React from "react";
import Navigation from "@/app/components/Nav";
import { Card } from "@/app/components/Card";
import Particles from "../components/Particles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Hayden Zeller",
  description: "Some of the projects are from work and some are on my own time.",
  keywords: [
    "Projects", "Hayden Zeller Projects", "Hayden Zeller Work", 
    "Hayden Zeller Personal Projects", "Hayden Zeller Projects Work Personal"
  ],
  alternates: {
    canonical: "https://haydenzeller.com/projects",
  },
  twitter: {
    card: "summary",
    site: "@haydenzeller",
  },
  openGraph: {
    type: "website",
    url: "https://haydenzeller.com/projects",
    title: "Projects - Hayden Zeller",
    siteName: "Hayden Zeller",
    description: "Some of the projects are from work and some are on my own time.",
    images: [
      {
        url: "https://haydenzeller.com/icon.svg",
        width: 1200,
        height: 630,
        alt: "Hayden Zeller Logo",
      },
    ],
  },
};

export default function Projects() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Particles className="absolute inset-0 -z-1 bg-black min-h-screen overflow-hidden" quantity={400} />
      <div className="relative pb-16 bg-transparent min-h-screen z-10">
        <Navigation backPath="/"/>
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Projects
            </h2>
            <p className="mt-4 text-zinc-400">
              Some of the projects are from work and some are on my own time.
            </p>
          </div>
          <div className="w-full h-px bg-zinc-800" />
          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    In Development
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    NextJS - Tailwind - TypeScript - Vercel - Directus
                  </span>
                </div>
                <h2 id="featured-post" className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                  AllsCherry.com
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  AllsCherry.com is a website currently in development for a client. Built with NextJS, TailwindCSS, TypeScript, and Directus.
                </p>
                <div className="flex flex-row mt-6 gap-10">
                  <Link href="https://allscherry.com" target="_blank" className="text-zinc-300 hover:text-zinc-100">
                    Visit Site
                  </Link>
                  <Link href="https://github.com/haydenzeller/allscherry-main" target="_blank" className="text-zinc-300 hover:text-zinc-100">
                    Source Code
                  </Link>
                </div>
              </article>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
