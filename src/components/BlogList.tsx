'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/data/blogData';

interface BlogListProps {
    posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
    if (posts.length === 0) {
        return (
            <div className="text-center py-24 text-neutral-500 font-light">
                <p>No articles found in this category.</p>
            </div>
        );
    }

    return (
        <section className="bg-black py-16 px-6 pb-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {posts.toReversed().map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`}>
                            <article className="group cursor-pointer flex flex-col space-y-6">

                                {/* 1. Cover Image */}
                                <div className={`relative w-full rounded-xl bg-neutral-900 border border-white/5 overflow-hidden`}
                                    style={{
                                        aspectRatio: '3/4'
                                    }}
                                >
                                    {post.image ? (
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"

                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 text-neutral-500 group-hover:text-neutral-400 transition-colors">
                                            <svg className="w-12 h-12 mb-3 opacity-40 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-center">No Image</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="space-y-4">

                                    {/* 2. Meta Row */}
                                    <div className="flex items-center text-xs font-medium text-neutral-500 uppercase tracking-wider space-x-2">
                                        {/* <span className="text-neon-green">{post.category}</span> */}
                                        {/* <span>·</span> */}
                                        <span>{post.date}</span>
                                    </div>

                                    {/* 3. Title */}
                                    <h3 className="text-2xl font-bold text-white leading-tight group-hover:underline decoration-neon-green decoration-2 underline-offset-4 transition-all">
                                        {post.title}
                                    </h3>

                                    {/* 4. Excerpt */}
                                    <p className="text-neutral-400 font-light leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* 5. Read Link */}
                                    <div className="pt-2">
                                        <span className="text-sm font-bold text-white group-hover:text-neon-green transition-colors inline-flex items-center">
                                            Read article
                                            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
