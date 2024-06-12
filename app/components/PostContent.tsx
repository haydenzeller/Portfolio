'use client';
import { useEffect, useState } from "react";
import Particles from "./Particles";
import { Card } from "./Card";
import Markdown from "react-markdown";

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    date_created: string;
    slug:string;
}

type Params = {
    slug: string;
}

const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
}


export default function PostContent({ params }: { params: Params }) {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`/api/getPostById/${params.slug}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-store',
                });

                if (!res.ok) throw new Error('Failed to fetch post');

                const { data } = await res.json();
                if (!data || data.length === 0) throw new Error('Post not found');

                setPost(data[0]);
            } catch (err) {
                console.error('Error fetching post:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [params.slug]);

    // Function to handle copy button click
    const handleCopyClick = (content: string) => {
        copyToClipboard(content);
        alert('Content copied to clipboard!');
    }

    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <Particles className="absolute inset-0 -z-1" quantity={400} />
            <div className="relative pb-16 min-h-screen z-10">
                {loading ? (
                    <div className="flex justify-center items-center min-h-screen">
                        <div className="loading spinner bg-base-200"></div>
                    </div>
                ) : error ? (
                    <div className="flex justify-center items-center min-h-screen">
                        <h1 className="text-2xl font-bold text-red-500">Error fetching post</h1>
                    </div>
                ) : (
                    <div className="px-6 pt-20 mx-auto space-y-8 w-full lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                        <div className="max-w-2xl mx-auto lg:mx-0">
                            <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                                {post?.title}
                            </h1>
                            {/* Date */}
                            <p className="mt-2 text-zinc-400">
                                {post?.date_created.split('T')[0]}
                            </p>
                            {/* Tags */}
                            <div className="flex flex-wrap mt-4 space-x-2">
                                {post?.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-sm font-medium text-zinc-100 bg-zinc-800 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Separator */}
                        <div className="w-full h-px bg-zinc-800" />
                        <div className="w-full mx-auto lg:mx-0">
                            <Card>
                                <article className="relative w-full h-full p-4 md:p-8 prose prose-xl text-white">
                                    <Markdown components= {{
                                        h1: ({node, ...props}) => <h1 {...props} className="hidden" />,
                                    }} >
                                        {post?.body}
                                    </Markdown>
                                </article>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
