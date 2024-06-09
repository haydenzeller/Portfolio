import Navigation from "@/app/components/Nav";
import Particles from "@/app/components/Particles";
import PostContent from "@/app/components/PostContent";
type Params = {
    id:string;
}
export default function Post({params}: {params: Params}) {
    return (
        <div className="min-h-screen overflow-hidden">
            <Navigation backPath={"/blog"}/>
            <Particles className="absolute inset-0 -z-1 bg-black min-h-screen overflow-hidden" quantity={400} />
            <div className="relative pb-16 bg-transparent min-h-screen z-10">
                <PostContent params={params} />
            </div>
        </div>
    );
}