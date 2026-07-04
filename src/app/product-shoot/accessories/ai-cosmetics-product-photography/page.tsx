import type { Metadata } from 'next';
import Link from 'next/link';
import AccessoriesCategoryAspectRatios from '@/components/AccessoriesCategoryAspectRatios';
import AccessoriesCategoryEcommerce from '@/components/AccessoriesCategoryEcommerce';
import AccessoriesCategoryFinalCTA from '@/components/AccessoriesCategoryFinalCTA';
import AccessoriesCategoryHero from '@/components/AccessoriesCategoryHero';
import AccessoriesCategoryOverview from '@/components/AccessoriesCategoryOverview';
import AccessoriesCategoryThemes from '@/components/AccessoriesCategoryThemes';
import AccessoriesCategorySEO from '@/components/AccessoriesCategorySEO';
import AccessoriesCategoryFAQ from '@/components/AccessoriesCategoryFAQ';

export const metadata: Metadata = {
    title: 'AI Cosmetics Product Photography | AIVX Studio',
    description: 'Create studio-quality cosmetics images using AI. Optimize lighting and lifestyle backdrops for makeup, skincare, and beauty brands.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/accessories/ai-cosmetics-product-photography',
    },
    openGraph: {
        title: 'AI Cosmetics Product Photography | AIVX Studio',
        description: 'Create studio-quality cosmetics images using AI. Optimize lighting and lifestyle backdrops for makeup, skincare, and beauty brands.',
        type: 'website',
        url: 'https://aivx.in/product-shoot/accessories/ai-cosmetics-product-photography',
        images: [
            {
                url: '/image/hero/accessories/cosmetic-1.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Cosmetics Product Shoot',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Cosmetics Product Photography | AIVX Studio',
        description: 'Create studio-quality cosmetics images using AI. Optimize lighting and lifestyle backdrops for makeup, skincare, and beauty brands.',
        images: ['/image/hero/accessories/cosmetic-1.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function CosmeticsPage() {
    const category = 'cosmetics';

    const faqs = [
        {
            q: "How does AI cosmetics product photography work?",
            a: "AI cosmetics photography places skincare jars, lipstick tubes, and makeup palettes in clean, modern settings. It preserves packaging labels while adding realistic shadow gradients and reflections."
        },
        {
            q: "Can AI handle color accuracy for cosmetics swatches?",
            a: "Yes. Our AI models are optimized to render clean, color-accurate product finishes, helping beauty brands maintain consistency with physical product shades."
        },
        {
            q: "What types of backdrops work best for skincare products?",
            a: "Minimalist plaster pedestals, pastel cycloramas, stone plates, or botanical ingredients are highly popular for skincare and organic beauty visual shoots."
        },
        {
            q: "Is it suitable for high-resolution e-commerce zoom?",
            a: "Yes. Every output is rendered in high resolution (up to 4K), showing packaging textures, fonts, and bottle finishes clearly."
        },
        {
            q: "Do I need to send physical cosmetic products to a studio?",
            a: "No. You only need to upload basic smartphone photos of your cosmetics products, and our platform handles the rest."
        }
    ];

    return (
        <main className="min-h-screen bg-dark-bg">
            <AccessoriesCategoryHero
                category={category}
                backgroundImage='/image/hero/accessories/cosmetic-1.jpg'
            />

            <AccessoriesCategorySEO title="Why Cosmetics Product Photography Matters for Ecommerce Brands">
                <p className="text-lg text-gray-300 leading-relaxed font-sans">
                    Cosmetics and beauty product photography requires a clean, hygienic, and highly aesthetic look. Beauty buyers look for clean typography, correct product shades, and premium packaging finishes. Studio photography of cosmetics requires precise softbox lighting to avoid harsh glares on glass bottles, metallic gold foils, and tubes.
                </p>

                <div className="text-left font-sans">
                    <h3 className="text-xl font-semibold mb-4 text-white">Premium cosmetics photography helps beauty brands:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Showcase clean labels, prints, and branding details</li>
                        <li>Style bottles, jars, and palettes in organic lifestyle environments</li>
                        <li>Deliver a uniform, modern brand identity across entire skincare lines</li>
                    </ul>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed font-sans">
                    AIVX delivers premium visual production for beauty and skincare brands. We replace physical studio logistics with high-volume, cost-effective AI rendering pipelines.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed font-sans">
                    If you are launching a skincare or makeup line, check out our full <Link href="/product-shoot/accessories" className="font-bold text-neon-green hover:underline">AI accessories product shoot options</Link> to build cohesive catalogs.
                </p>
            </AccessoriesCategorySEO>

            <AccessoriesCategoryOverview category={category} />


            <AccessoriesCategoryAspectRatios category={category} />

            <AccessoriesCategorySEO title="High-Volume Beauty Catalogs Made Easy">
                <p className="text-lg text-gray-300 leading-relaxed font-sans">
                    AIVX makes it easy to generate consistent catalog visual assets for entire skincare lines. Launch new products, test ads on Instagram, and populate Amazon storefronts with premium visuals in parallel.
                </p>
            </AccessoriesCategorySEO>

            <AccessoriesCategoryEcommerce category={category} />

            <AccessoriesCategoryFAQ
                title="Frequently Asked Questions – AI Cosmetics Product Photography"
                faqs={faqs}
            />

            <AccessoriesCategoryFinalCTA category={category} />
        </main>
    );
}
