import { blogPosts } from '@/data/blogData';
import BlogDetailHero from '@/components/BlogDetailHero';
import BlogMeta from '@/components/BlogMeta';
import BlogContent from '@/components/BlogContent';
import BlogNavigation from '@/components/BlogNavigation';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogDetailPageProps {
    params: {
        slug: string;
    };
}

// 1. Generate Static Params at Build Time
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// 2. Generate Metadata
export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Article Not Found | AIVX',
        };
    }

    return {
        title: `${post.title} | AIVX Blog`,
        description: post.excerpt,
        alternates: {
            canonical: `https://aivx.in/blog/${post.slug}`,
        },
        openGraph: {
            title: `${post.title} | AIVX Blog`,
            description: post.excerpt,
            url: `https://aivx.in/blog/${post.slug}`,
            type: 'article',
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${post.title} | AIVX Blog`,
            description: post.excerpt,
            images: [post.image],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

// 3. Page Component
export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="bg-black min-h-screen">
            <BlogDetailHero post={post} />
            <BlogMeta post={post} />
            <BlogContent post={post} />
            <BlogNavigation />
        </main>
    );
}
