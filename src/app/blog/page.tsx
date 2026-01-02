import HomeLatestArticles from '@/components/HomeLatestArticles';
import BlogListWrapper from '@/components/BlogListWrapper';
import BlogCTA from '@/components/BlogCTA';

export const metadata = {
    title: 'AI Jewellery Product Shoot Blog & Insights | AIVX | Studio',
    description: 'Insights, guides, and case studies on AI-powered jewellery product shoots, ecommerce visuals, and modern jewellery branding.',
    alternates: {
        canonical: 'https://aivx.in/blog',
    },
    openGraph: {
        title: 'AI Jewellery Product Shoot Blog & Insights | AIVX | Studio',
        description: 'Read expert articles on AI jewellery photography, ecommerce visuals, and product shoot innovation.',
        url: 'https://aivx.in/blog',
        type: 'website',
        images: [
            {
                url: '/images/jewellery-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Jewellery Product Shoot Insights',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Jewellery Product Shoot Blog & Insights | AIVX | Studio',
        description: 'Read expert articles on AI jewellery photography, ecommerce visuals, and product shoot innovation.',
        images: ['/images/jewellery-hero.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function BlogPage() {
    return (
        <main className="bg-black min-h-screen">
            <HomeLatestArticles showViewAllLink={false} />
            <BlogListWrapper />
            <BlogCTA />
        </main>
    );
}
