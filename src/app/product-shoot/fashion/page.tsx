import type { Metadata } from 'next';
import FashionHero from '@/components/FashionHero';
import FashionOverview from '@/components/FashionOverview';
import FashionArticle from '@/components/FashionArticle';
import FashionCategories from '@/components/FashionCategories';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'AI Fashion Product Photography | AIVX Studio',
    description: 'AI fashion photography studio for clothing, sarees, kurtas, lehengas, ethnic wear, and accessories. Generate premium ecommerce images and short videos without booking a model.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/fashion',
    },
    openGraph: {
        title: 'AI Fashion Product Photography | AIVX Studio',
        description: 'Create studio-quality fashion images and videos using AI models. Built for ecommerce and modern fashion brands.',
        url: 'https://aivx.in/product-shoot/fashion',
        siteName: 'AIVX',
        images: [
            {
                url: '/image/fashion-photography-example.png',
                width: 1200,
                height: 630,
                alt: 'AI Fashion Product Shoot Studio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Fashion Product Photography | AIVX Studio',
        description: 'AI-powered fashion product shoots for ecommerce-ready images and videos — no models needed.',
        images: ['/image/fashion-photography-example.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function FashionPage() {
    return (
        <main className="bg-[#0A0A0A] min-h-screen flex flex-col">
            <FashionHero />
            <FashionOverview />
            <FashionArticle />
            <FashionCategories />
        </main>
    );
}
