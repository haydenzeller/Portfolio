import Link from "next/link";
import { Navigation } from "@/app/components/Nav";
import { Card } from "@/app/components/Card";

import Image from "next/image";
import githubLogo from "@/public/github.png";
import xLogo from "@/public/x.png";
import mailLogo from "@/public/mail.png";
import Particles from "../components/Particles";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact - Hayden Zeller",
	description: "Contact Hayden Zeller - Student - Developer - Creator - Problem Solver",
	keywords: [
		"Contact",
		"Hayden Zeller Contact",
		"Hayden Zeller Email",
		"Hayden Zeller X",
		"Hayden Zeller GitHub",
		"Hayden Zeller Contact Email X GitHub",
	],
	alternates: {
		canonical: "https://haydenzeller.com/contact",
	},
	twitter: {
		card: "summary",
		site: "@haydenzeller",
	},
	openGraph: {
		type: "website",
		url: "https://haydenzeller.com/contact",
		title: "Contact - Hayden Zeller",
		siteName: "Hayden Zeller",
		description: "Contact Hayden Zeller - Student - Developer - Creator - Problem Solver",
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



export default function Contact() {
	return (
		<div className=" bg-gradient-to-tl from-transparent to-black min-h-screen overflow-hidden">
			<Particles
				className="absolute inset-0 -z-1 bg-black min-h-screen overflow-hidden"
				quantity={400}
			/>
			<Navigation />
			<div className="flex items-center justify-center px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					<Card>
						<Link
							href="https://x.com/haydendevs"
							target="_blank"
							className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
						>
							<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
								<Image src={xLogo} alt="X" width={100} height={100} className="w-4 h-4"/>
							</span>{" "}
							<div className="z-10 flex flex-col items-center">
								<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
									@haydendevs
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									X
								</span>
							</div>
						</Link>
					</Card>
					<Card>
						<Link
							href="https://github.com/haydenzeller"
							target="_blank"
							className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
						>
							<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
								<Image src={githubLogo} alt="Github" width={1000} height={1000} className="w-7 h-7"/>
							</span>{" "}
							<div className="z-10 flex flex-col items-center">
								<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
									haydenzeller
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									GitHub
								</span>
							</div>
						</Link>
					</Card>
					<Card>
						<Link
							href="mailto:hayden@haydenzeller.com"
							target="_blank"
							className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
						>
							<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
								<Image src={mailLogo} alt="X" width={100} height={100} className="w-7 h-5 aspect-auto"/>
							</span>{" "}
							<div className="z-10 flex flex-col items-center">
								<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
									hayden@haydenzeller.com
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									Email
								</span>
							</div>
						</Link>
					</Card>
				</div>
			</div>
		</div>
	);
}