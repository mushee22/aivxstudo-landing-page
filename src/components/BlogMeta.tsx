'use client';

import { BlogPost } from '@/data/blogData';

interface BlogMetaProps {
    post: BlogPost;
}

export default function BlogMeta({ post }: BlogMetaProps) {
    return (
        <div className="py-8 border-b border-white/5">
            <div className="max-w-3xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm text-neutral-500 font-medium tracking-wide">

                <div className="flex items-center gap-2">
                    <span className="text-white">Author:</span>
                    <span>{post.author}</span>
                </div>

                <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />

                <div className="flex items-center gap-2">
                    <span className="text-white">Published:</span>
                    <span>{post.date}</span>
                </div>

                <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />

                <div className="flex items-center gap-2">
                    <span className="text-white">Read Time:</span>
                    <span>{post.readTime}</span>
                </div>

            </div>
        </div>
    );
}
