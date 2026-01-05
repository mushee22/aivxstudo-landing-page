'use client';

import { BlogPost } from '@/data/blogData';

interface BlogContentProps {
    post: BlogPost;
}

export default function BlogContent({ post }: BlogContentProps) {
    return (
        <article className="max-w-3xl mx-auto px-6 pb-16">
            <div
                className="prose prose-invert prose-lg max-w-none 
                
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white prose-headings:mb-6 prose-headings:mt-12
                prose-h2:text-3xl prose-h2:border-l-4 prose-h2:border-neon-green/50 prose-h2:pl-4
                prose-h3:text-2xl prose-h3:text-white/90

                prose-p:text-neutral-300 prose-p:font-light prose-p:leading-relaxed prose-p:mb-6
                
                prose-strong:text-white prose-strong:font-semibold
                
                prose-ul:text-neutral-300 prose-ul:my-6 prose-ul:list-disc
                prose-li:marker:text-neon-green prose-li:mb-2
                
                prose-a:text-neon-green prose-a:no-underline hover:prose-a:underline prose-a:transition-colors
                
                prose-blockquote:border-l-neon-green prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-neutral-200 prose-blockquote:font-medium prose-blockquote:not-italic
                
                prose-img:rounded-2xl prose-img:shadow-2xl prose-img:border prose-img:border-white/10 prose-img:my-10
                
                prose-hr:border-white/10 prose-hr:my-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
