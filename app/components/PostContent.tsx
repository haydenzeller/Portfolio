'use client';

import { useEffect, useState } from "react";
import Particles from "./Particles";
import { Card } from "./Card";

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
}

type Params = {
    id:string;
}

export default function PostContent({params}: {params:Params}) {
    const [post, setPost] = useState<Post>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await fetch(`/api/getPostById/${params.id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-store',
                });
                if (!res.ok) {
                    setError(true);
                    setLoading(false);
                    return;
                }
                const responseData = await res.json();
                setPost(responseData.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        getPost();
    }, []);
    return (
    
            <div className="min-h-screen overflow-hidden">
                <Particles className="absolute inset-0 -z-1 bg-black min-h-screen overflow-hidden" quantity={400} />
                <div className="relative pb-16 bg-transparent min-h-screen z-10">
                    {loading ? (
                        <div className="flex flex-col justify-center items-center">
                            <div className="loading spinner bg-base-200"></div>
                        </div>
                    ) : error ? (
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-2xl font-bold text-red-500">Error fetching post</h1>
                        </div>
                    ) : (
                        <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                            <div className="max-w-2xl mx-auto lg:mx-0">
                                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                                    {post?.title}
                                </h2>
                                {/* tags */}
                                <div className="flex flex-wrap mt-4 space-x-2">
                                    {post?.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full h-px bg-zinc-800" />
                            <div className="max-w-2xl mx-auto lg:mx-0">
                                <Card>
                                    <div className="card-body">
                                        {/* body is markdown */}
                                        <div dangerouslySetInnerHTML={{ __html: post?.body || '' }} />
                                    </div>
                                </Card>
                            </div>
                        </div>
                    )}
                </div>
            </div>
    );
}