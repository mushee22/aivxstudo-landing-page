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
    title: 'AI Ring Product Shoot Studio | AIVX',
    description: 'Create studio-quality ring images and short videos using AI. Perfect for ecommerce listings, ads, and jewellery brands.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/jewellery/ring',
    },
    openGraph: {
        title: 'AI Ring Product Shoot Studio | AIVX',
        description: 'Create studio-quality ring images and short videos using AI. Perfect for ecommerce listings, ads, and jewellery brands.',
        type: 'website',
        url: 'https://aivx.in/product-shoot/jewellery/ring',
        images: [
            {
                url: '/images/jewellery-hero.jpg', // Using placeholder as category specific image not provided
                width: 1200,
                height: 630,
                alt: 'AI Ring Product Shoot',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Ring Product Shoot Studio | AIVX',
        description: 'Create studio-quality ring images and short videos using AI. Perfect for ecommerce listings, ads, and jewellery brands.',
        images: ['/images/jewellery-hero.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RingPage() {
    const category = 'ring';
    return (
        <main className="min-h-screen bg-dark-bg">
            <JewelleryCategoryHero category={category} />
            <JewelleryCategoryOverview category={category} />
            <JewelleryCategoryThemes category={category} />
            <JewelleryCategoryGallery category={category} />
            <JewelleryCategoryVideoGallery category={category} />
            <JewelleryCategoryModelVariations category={category} />
            <JewelleryCategoryAspectRatios category={category} />
            <JewelleryCategoryEcommerce category={category} />
            <JewelleryCategoryFinalCTA category={category} />
        </main>
    );
}
