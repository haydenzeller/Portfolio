import LatestPosts from "../components/LatestPosts";
import Navigation from "@/app/components/Nav";
import Particles from "../components/Particles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Hayden Zeller",
  description: "Hayden Zeller Blog - Student, Developer, Creator, Problem Solver",
  keywords: [
    "Blog",
    "Hayden Zeller Blog",
    "Tech Blog",
    "Student Blog",
    "Software Blog",
    "Developer Blog",
    "Creator Blog",
    "Hayden Zeller",
    "Tech News",
    "Developer Updates",
    "Software Projects",
  ],
  alternates: {
    canonical: "https://haydenzeller.com/blog",
  },
  twitter: {
    card: "summary",
    site: "@haydenzeller",
  },
  openGraph: {
    type: "website",
    url: "https://haydenzeller.com/blog",
    title: "Blog - Hayden Zeller",
    siteName: "Hayden Zeller",
    description: "Hayden Zeller Blog - Student, Developer, Creator, Problem Solver",
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

export default function Blog() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Particles className="absolute inset-0 -z-1 bg-black" quantity={400} />
      <div className="relative pb-16 min-h-screen z-10">
        <Navigation backPath="/" />
        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Blog
            </h2>
            <p className="mt-4 text-zinc-400">
              Welcome to the Hayden Zeller Blog - where I share insights, projects, and updates on technology, development, and more.
            </p>
          </div>
          <div className="w-full h-px bg-zinc-800" />
          <div className="grid">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">Latest Posts</h2>
              <LatestPosts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
