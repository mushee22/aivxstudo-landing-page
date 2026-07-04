import type { Metadata } from 'next';
import AccessoriesHero from '@/components/AccessoriesHero';
import AccessoriesOverview from '@/components/AccessoriesOverview';
import AccessoriesArticle from '@/components/AccessoriesArticle';
import AccessoriesCategories from '@/components/AccessoriesCategories';

export const metadata: Metadata = {
    title: 'AI Accessories Product Photography | AIVX Studio',
    description: 'AI-powered accessories product shoot studio for bags, watches, perfumes, and cosmetics. Generate premium ecommerce images faster and cost-effectively.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/accessories',
    },
    openGraph: {
        title: 'AI Accessories Product Photography | AIVX Studio',
        description: 'Create studio-quality accessories images using AI. Built for ecommerce and modern accessories brands.',
        url: 'https://aivx.in/product-shoot/accessories',
        siteName: 'AIVX',
        images: [
            {
                url: '/image/hero/accessories/bag-3.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Accessories Product Shoot Studio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Accessories Product Photography | AIVX Studio',
        description: 'AI-powered accessories product shoots for ecommerce-ready images.',
        images: ['/image/hero/accessories/bag-3.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AccessoriesPage() {
    return (
        <main className="bg-[#0A0A0A] min-h-screen flex flex-col">
            <AccessoriesHero />
            <AccessoriesOverview />
            <AccessoriesArticle />
            <AccessoriesCategories />
        </main>
    );
}
