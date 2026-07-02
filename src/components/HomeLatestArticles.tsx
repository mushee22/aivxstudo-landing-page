import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fetchAllBlogs } from "@/lib/strapi";

interface HomeLatestArticlesProps {
    showViewAllLink?: boolean;
}

export default async function HomeLatestArticles({ showViewAllLink = true }: HomeLatestArticlesProps) {
    // 1. Get latest 3 articles
    const posts = await fetchAllBlogs();
    const latestPosts = [...posts]
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
                            <div className="relative w-full aspect-2/3 h-[520px] overflow-hidden rounded-xl bg-neutral-900 border border-white/5">
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        unoptimized
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
