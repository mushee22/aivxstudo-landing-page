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
            <JewelleryCategoryHero
                category={category}
                backgroundImage='/theme/ring/cream-theme.jpg'
            />
            <JewelleryCategoryOverview category={category} />
            <JewelleryCategoryThemes
                category={category}
                themes={[
                    { name: "BLUE", image: "/theme/ring/blue-theme.png" }, // Approximated Blue
                    { name: "WHITE BG", image: "/theme/ring/white-theme.png" }, // Minimal White image
                    { name: "DARK BLUE", image: "/theme/ring/dark-blue-theme.jpg" }, // Dark placeholder
                    { name: "WHITE SAND", image: "/theme/ring/white-sand-theme.jpg" }, // Beige image
                    { name: "CREAM", image: "/theme/ring/cream-theme.jpg" }, // Gold/Cream image
                    { name: "PASTEL BLUE", image: "/theme/ring/pastel-blue.png" }, // Light Silver/Blueish
                    { name: "BLACK", image: "/theme/ring/black.png" }, // Luxury Black
                    { name: "BEIGE", image: "/theme/ring/beige-theme.jpeg" }, // Beige image
                    { name: "GREEN", image: "/theme/ring/green-theme.jpg" }, // Approximated Green
                ]}
            />
            {/* <JewelleryCategoryGallery category={category} /> */}
            {/* <JewelleryCategoryVideoGallery
                category={category}
                videos={[
                    {
                        id: 1,
                        src: "",
                        poster: "",
                        duration: ""
                    }
                ]}
            /> */}
            {/* <JewelleryCategoryModelVariations category={category} /> */}
            <JewelleryCategoryAspectRatios category={category} />
            <JewelleryCategoryEcommerce category={category} />
            <JewelleryCategoryFinalCTA category={category} />
        </main>
    );
}
