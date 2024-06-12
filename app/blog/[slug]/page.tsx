import Navigation from "@/app/components/Nav";
import Particles from "@/app/components/Particles";
import PostContent from "@/app/components/PostContent";
import type { Metadata, ResolvingMetadata } from "next";

type Params = {
    slug: string;
}

 
// type Props = {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }
 
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id
 
//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []
 
//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }
 
// export default function Page({ params, searchParams }: Props) {}

export const metadata: Metadata = {
    title: "Blog Post - Hayden Zeller",
    description: "Hayden Zeller Blog Post - Student, Developer, Creator, Problem Solver",
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

export default function Post({ params }: { params: Params }) {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <Navigation backPath="/blog" />
            <div className="absolute inset-0 z-0">
                <Particles className="absolute inset-0 bg-black" quantity={400} />
            </div>
            <div className="relative pb-16 z-10">
                <PostContent params={params} />
            </div>
        </div>
    );
}
