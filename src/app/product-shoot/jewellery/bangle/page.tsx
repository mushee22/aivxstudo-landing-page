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
    title: 'AI Bangle Product Shoot Studio | AIVX',
    description: 'AI-powered bangle product shoot for premium images and videos. Built for ecommerce jewellery listings and marketing.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/jewellery/bangle',
    },
    openGraph: {
        title: 'AI Bangle Product Shoot Studio | AIVX',
        description: 'AI-powered bangle product shoot for premium images and videos. Built for ecommerce jewellery listings and marketing.',
        type: 'website',
        url: 'https://aivx.in/product-shoot/jewellery/bangle',
        images: [
            {
                url: '/images/jewellery-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Bangle Product Shoot',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Bangle Product Shoot Studio | AIVX',
        description: 'AI-powered bangle product shoot for premium images and videos. Built for ecommerce jewellery listings and marketing.',
        images: ['/images/jewellery-hero.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function BanglePage() {
    const category = 'bangle';
    return (
        <main className="min-h-screen bg-dark-bg">
            <JewelleryCategoryHero
                category={category}
                backgroundImage='/theme/bangle/brown-theme.png'
            />
            <JewelleryCategoryOverview category={category} />
            <JewelleryCategoryThemes
                category={category}
                themes={[
                    { name: "BLUE", image: "/theme/bangle/blue-theme.png" },
                    { name: "RUBY RED", image: "/theme/bangle/ruby-red-theme.png" },
                    { name: "WHITE BG", image: "/theme/bangle/white-bg-theme.png" },
                    { name: "SAND", image: "/theme/bangle/sand-theme.png" },
                    { name: "BEIGE", image: "/theme/bangle/beige-theme.png" },
                    { name: "BLACK", image: "/theme/bangle/black-theme.png" },
                    { name: "BROWN", image: "/theme/bangle/brown-theme.png" },
                    { name: "GREY", image: "/theme/bangle/grey-theme.png" },
                    { name: "WHITE", image: "/theme/bangle/white-theme.png" },
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
