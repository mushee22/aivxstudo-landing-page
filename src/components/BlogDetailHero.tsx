'use client';

import Image from 'next/image';
import { BlogPost } from '@/data/blogData';

interface BlogDetailHeroProps {
    post: BlogPost;
}

export default function BlogDetailHero({ post }: BlogDetailHeroProps) {
    return (
        <section className="bg-black pt-32 pb-16 px-6 border-b border-white/5">
            <div className="max-w-4xl mx-auto space-y-8 text-center">

                {/* Category */}
                <span className="text-neon-green text-sm font-bold tracking-widest uppercase">
                    {post.category}
                </span>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                    {post.title}
                </h1>

                {/* Excerpt */}
                <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
                    {post.excerpt}
                </p>

                {/* Cover Image */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mt-12 bg-neutral-900 border border-white/5">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 896px) 100vw, 896px"
                        className="object-cover"
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
