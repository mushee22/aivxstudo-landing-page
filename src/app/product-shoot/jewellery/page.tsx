import type { Metadata } from 'next';
import JewelleryHero from '@/components/JewelleryHero';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JewelleryOverview from '@/components/JewelleryOverview';
import JewelleryCategories from '@/components/JewelleryCategories';

export const metadata: Metadata = {
    title: 'AI Jewellery Product Shoot Studio | AIVX',
    description: 'AI-powered jewellery product shoot studio for rings, necklaces, bangles, and more. Generate premium ecommerce images and short videos faster and cost-effectively.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/jewellery',
    },
    openGraph: {
        title: 'AI Jewellery Product Shoot Studio | AIVX',
        description: 'Create studio-quality jewellery images and videos using AI. Built for ecommerce and modern jewellery brands.',
        url: 'https://aivx.in/product-shoot/jewellery',
        siteName: 'AIVX',
        images: [
            {
                url: '/images/jewellery-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Jewellery Product Shoot Studio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Jewellery Product Shoot Studio | AIVX',
        description: 'AI-powered jewellery product shoots for ecommerce-ready images and videos.',
        images: ['/images/jewellery-hero.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function JewelleryPage() {
    return (
        <main className="bg-[#0A0A0A] min-h-screen flex flex-col">
            <Header />
            <JewelleryHero />
            <JewelleryOverview />
            <JewelleryCategories />
            <Footer />
        </main>
    );
}
