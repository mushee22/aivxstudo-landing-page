'use client';

import { BlogPost } from '@/data/blogData';

interface BlogContentProps {
    post: BlogPost;
}

export default function BlogContent({ post }: BlogContentProps) {
    return (
        <article className="max-w-3xl mx-auto px-6 py-16">
            <div
                className="prose prose-invert prose-lg max-w-none 
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
                prose-p:text-neutral-300 prose-p:font-light prose-p:leading-relaxed
                prose-strong:text-white prose-strong:font-semibold
                prose-li:text-neutral-300
                prose-a:text-neon-green prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
