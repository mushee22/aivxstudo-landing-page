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
    title: 'AI Necklace Product Shoot Studio | AIVX',
    description: 'Create stunning necklace product images and videos using AI. Fast, scalable, and optimized for ecommerce jewellery brands.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/jewellery/necklace',
    },
    openGraph: {
        title: 'AI Necklace Product Shoot Studio | AIVX',
        description: 'Create stunning necklace product images and videos using AI. Fast, scalable, and optimized for ecommerce jewellery brands.',
        type: 'website',
        url: 'https://aivx.in/product-shoot/jewellery/necklace',
        images: [
            {
                url: '/images/jewellery-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Necklace Product Shoot',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Necklace Product Shoot Studio | AIVX',
        description: 'Create stunning necklace product images and videos using AI. Fast, scalable, and optimized for ecommerce jewellery brands.',
        images: ['/images/jewellery-hero.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function NecklacePage() {
    const category = 'necklace';
    return (
        <main className="min-h-screen bg-dark-bg">
            <JewelleryCategoryHero
                category={category}
                backgroundImage='/theme/necklace/white-theme.png'
            />
            <JewelleryCategoryOverview category={category} />
            <JewelleryCategoryThemes
                category={category}
                themes={[
                    { name: "RED", image: "/theme/necklace/red-theme.png" },
                    { name: "BROWN", image: "/theme/necklace/brown-theme.png" },
                    { name: "GREEN", image: "/theme/necklace/green-theme.png" },
                    { name: "WHITE", image: "/theme/necklace/white-theme.png" },
                    { name: "WHITE BG", image: "/theme/necklace/white-bg-theme.png" }
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
