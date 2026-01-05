import type { Metadata } from 'next';
import JewelleryCategoryGallery from '@/components/JewelleryCategoryGallery';
import JewelleryCategoryVideoGallery from '@/components/JewelleryCategoryVideoGallery';
import JewelleryCategoryModelVariations from '@/components/JewelleryCategoryModelVariations';
import JewelleryCategoryAspectRatios from '@/components/JewelleryCategoryAspectRatios';
import JewelleryCategoryEcommerce from '@/components/JewelleryCategoryEcommerce';
import JewelleryCategoryFinalCTA from '@/components/JewelleryCategoryFinalCTA';
import JewelleryCategoryHero from '@/components/JewelleryCategoryHero';
import JewelleryCategoryOverview from '@/components/JewelleryCategoryOverview';
import JewelleryCategoryThemes from '@/components/JewelleryCategoryThemes';

export const metadata: Metadata = {
    title: 'AI Ear Ring Product Shoot Studio | AIVX',
    description: 'Generate premium ear ring product images and reel videos using AI. Optimized for ecommerce, catalogs, and jewellery marketing.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/jewellery/ear-ring',
    },
    openGraph: {
        title: 'AI Ear Ring Product Shoot Studio | AIVX',
        description: 'Generate premium ear ring product images and reel videos using AI. Optimized for ecommerce, catalogs, and jewellery marketing.',
        type: 'website',
        url: 'https://aivx.in/product-shoot/jewellery/ear-ring',
        images: [
            {
                url: '/images/jewellery-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Ear Ring Product Shoot',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Ear Ring Product Shoot Studio | AIVX',
        description: 'Generate premium ear ring product images and reel videos using AI. Optimized for ecommerce, catalogs, and jewellery marketing.',
        images: ['/images/jewellery-hero.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function EarRingPage() {
    const category = 'ear-ring';
    return (
        <main className="min-h-screen bg-dark-bg">
            <JewelleryCategoryHero
                category={category}
                backgroundImage='/theme/earring/rose-amber-theme.png'
            />
            <JewelleryCategoryOverview category={category} />
            <JewelleryCategoryThemes
                category={category}
                themes={[
                    { name: "PINK", image: "/theme/earring/pink-theme.png" },
                    { name: "BLACK", image: "/theme/earring/black-theme.png" },
                    { name: "WHITE", image: "/theme/earring/white-theme.png" },
                    { name: "BEIGE", image: "/theme/earring/beige-theme.png" },
                    { name: "ROSE AMBER", image: "/theme/earring/rose-amber-theme.png" },
                    { name: "CREAM", image: "/theme/earring/cream-theme.png" },
                    { name: "PASTEL BLUE", image: "/theme/earring/pastel-blue-theme.png" }
                ]}
            />
            {/* <JewelleryCategoryGallery category={category} />
            <JewelleryCategoryVideoGallery category={category} />
            <JewelleryCategoryModelVariations category={category} /> */}
            <JewelleryCategoryAspectRatios category={category} />
            <JewelleryCategoryEcommerce category={category} />
            <JewelleryCategoryFinalCTA category={category} />
        </main>
    );
}
