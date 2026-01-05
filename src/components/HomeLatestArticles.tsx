// ... imports

import { blogPosts } from "@/data/blogData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HomeLatestArticlesProps {
    showViewAllLink?: boolean;
}

export default function HomeLatestArticles({ showViewAllLink = true }: HomeLatestArticlesProps) {
    // 1. Get latest 3 articles
    const latestPosts = [...blogPosts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <section className="bg-black py-24 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Latest Blogs
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Insights on AI, jewellery product shoots, and ecommerce growth.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group block space-y-4"
                        >
                            {/* Cover Image */}
                            <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xl bg-neutral-900 border border-white/5">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="space-y-2">
                                {/* Meta */}
                                <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider flex items-center gap-2">
                                    <span className="text-neon-green">{post.category}</span>
                                    <span>·</span>
                                    <span>{post.date}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-neon-green transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-sm text-neutral-400 font-light leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>

                                {/* Read Link */}
                                <div className="pt-2">
                                    <span className="text-sm font-bold text-white inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Read blog
                                        <ArrowRight size={14} className="text-neon-green" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Footer CTA */}
                {showViewAllLink && (
                    <div className="text-center pt-8">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-white font-medium hover:text-neon-green transition-colors duration-300"
                        >
                            View All Blogs
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
