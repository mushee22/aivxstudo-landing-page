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
    title: 'AI Necklace Set Product Shoot | AIVX',
    description: 'Generate studio-quality necklace set images and short videos using AI. Ideal for ecommerce, ads, and jewellery catalogs.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/jewellery/necklace-set',
    },
    openGraph: {
        title: 'AI Necklace Set Product Shoot | AIVX',
        description: 'Generate studio-quality necklace set images and short videos using AI. Ideal for ecommerce, ads, and jewellery catalogs.',
        type: 'website',
        url: 'https://aivx.in/product-shoot/jewellery/necklace-set',
        images: [
            {
                url: '/images/jewellery-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Necklace Set Product Shoot',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Necklace Set Product Shoot | AIVX',
        description: 'Generate studio-quality necklace set images and short videos using AI. Ideal for ecommerce, ads, and jewellery catalogs.',
        images: ['/images/jewellery-hero.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function NecklaceSetPage() {
    const category = 'necklace-set';
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
