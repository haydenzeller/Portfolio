import Image from "next/image";
import Particles from "./components/Particles";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black  to-transparent">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link
              href="/projects"
              className="text-zinc-300 hover:text-zinc-100"
            >Projects</Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-zinc-300 hover:text-zinc-100"
            >Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 bg-black"
        quantity={1000}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text pb-1">
        Hayden
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Student - Developer - Creator - Problem Solver
        </h2>
      </div>
    </div>
  );
}
