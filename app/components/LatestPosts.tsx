'use client';
import { useEffect, useState } from "react";
import { Card } from "./Card";
import Link from "next/link";

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
}
export default function LatestPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await fetch('/api/getAllPosts', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-store'
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const responseData = await res.json();
                setPosts(responseData.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        getPosts();
    }, []);
    return (
        <div className="">
            {posts.length > 0 ? posts.map((post: Post, index: number) => (
                <Card key={index}>
                    <article className="relative w-full h-full p-4 md:p-8">
                        <div className="flex items-center justify-between gap-2">
                            <div className="text-xs text-zinc-100 badge bg-purple-900">
                                {post.tags.join(", ")}
                            </div>
                        </div>
                        <h2 id={`post-${post.id}`} className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                            {post.title}
                        </h2>
                        <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                            {post.body.length > 200 ? post.body.substring(0, 200) + '...' : post.body}
                        </p>
                        <Link href={`/blog/${post.id}`} className="mt-4 text-purple-900 underline group-hover:text-purple-800">
                            Read more
                        </Link>
                    </article>
                </Card>
            )) : (
                <div className="flex flex-col justify-center items-center">
                    <div className="loading spinner bg-base-200"></div>
                </div>
            )}
        </div>
    );
}