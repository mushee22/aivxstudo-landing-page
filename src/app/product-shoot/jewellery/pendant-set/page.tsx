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
    title: 'AI Pendant Set Product Shoot | AIVX',
    description: 'AI-powered pendant set product shoot for high-quality images and videos. Designed for ecommerce-ready jewellery visuals.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/jewellery/pendant-set',
    },
    openGraph: {
        title: 'AI Pendant Set Product Shoot | AIVX',
        description: 'AI-powered pendant set product shoot for high-quality images and videos. Designed for ecommerce-ready jewellery visuals.',
        type: 'website',
        url: 'https://aivx.in/product-shoot/jewellery/pendant-set',
        images: [
            {
                url: '/images/jewellery-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Pendant Set Product Shoot',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Pendant Set Product Shoot | AIVX',
        description: 'AI-powered pendant set product shoot for high-quality images and videos. Designed for ecommerce-ready jewellery visuals.',
        images: ['/images/jewellery-hero.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PendantSetPage() {
    const category = 'pendant-set';
    return (
        <main className="min-h-screen bg-dark-bg">
            <JewelleryCategoryHero category={category}
                backgroundImage='/theme/pendant-set/navy-blue-theme.png'
            />
            <JewelleryCategoryOverview category={category} />
            <JewelleryCategoryThemes
                category={category}
                themes={[
                    { name: "NAVY BLUE", image: "/theme/pendant-set/navy-blue-theme.png" },
                    { name: "PASTEL BLUE", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop" },
                    { name: "BLACK", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop" },
                    { name: "EMERALD GREEN", image: "/theme/pendant-set/emerald-green-theme.png" },
                    { name: "WHITE BG", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop" },
                    { name: "BROWN", image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800&auto=format&fit=crop" },
                    { name: "PINK", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" }
                ]}
            />
            {/* <JewelleryCategoryGallery category={category} /> */}
            {/* <JewelleryCategoryVideoGallery category={category} /> */}
            {/* <JewelleryCategoryModelVariations category={category} /> */}
            <JewelleryCategoryAspectRatios category={category} />
            <JewelleryCategoryEcommerce category={category} />
            <JewelleryCategoryFinalCTA category={category} />
        </main>
    );
}
