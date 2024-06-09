import Navigation from "@/app/components/Nav";
import Particles from "@/app/components/Particles";
import PostContent from "@/app/components/PostContent";

type Params = {
    slug: string;
}

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
