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
    title: 'AI Perfume Product Photography | AIVX Studio',
    description: 'Create studio-quality perfume images using AI. Generate visuals highlighting glass bottles, liquid texture, and luxury contexts.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/accessories/ai-perfume-product-photography',
    },
    openGraph: {
        title: 'AI Perfume Product Photography | AIVX Studio',
        description: 'Create studio-quality perfume images using AI. Generate visuals highlighting glass bottles, liquid texture, and luxury contexts.',
        type: 'website',
        url: 'https://aivx.in/product-shoot/accessories/ai-perfume-product-photography',
        images: [
            {
                url: '/image/hero/accessories/perfume-4.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Perfume Product Shoot',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Perfume Product Photography | AIVX Studio',
        description: 'Create studio-quality perfume images using AI. Generate visuals highlighting glass bottles, liquid texture, and luxury contexts.',
        images: ['/image/hero/accessories/perfume-4.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PerfumePage() {
    const category = 'perfume';

    const faqs = [
        {
            q: "How does AI perfume product photography work?",
            a: "AI perfume photography focuses on rendering translucent glass, refraction effects of the fragrance liquid, and details of custom caps. It places your bottle in premium settings like water ripples or stone pedestals."
        },
        {
            q: "Can AI render glass transparency and liquid colors accurately?",
            a: "Yes. Our lighting engines simulate realistic light passing through glass and liquid, capturing the exact transparency, refraction patterns, and hue of your perfume."
        },
        {
            q: "What types of lifestyle backdrops can I choose?",
            a: "You can select from themes containing marble, water ripples, botanical ingredients (like flower petals, citrus slices), or minimalist plaster walls with shadows."
        },
        {
            q: "How fast can I generate fragrance visuals?",
            a: "Within a few hours, AIVX can deliver multiple lifestyle setups, saving you from setting up complex water tanks or floral arrangements in a studio."
        },
        {
            q: "Can I use these images for print packaging?",
            a: "Yes. The AI outputs high-resolution files suitable for digital storefronts, social campaigns, and print lookbooks."
        }
    ];

    return (
        <main className="min-h-screen bg-dark-bg">
            <AccessoriesCategoryHero
                category={category}
                backgroundImage='/image/hero/accessories/perfume-4.jpg'
            />

            <AccessoriesCategorySEO title="Why Perfume Product Photography Matters for Ecommerce Brands">
                <p className="text-lg text-gray-300 leading-relaxed font-sans">
                    Fragrance and perfume product photography is about selling an experience, a scent, and a lifestyle. Since customers online cannot smell the perfume, your visual presentation must evoke the mood, notes, and luxury positioning of the fragrance. Reflective glass bottles, custom cap materials, and liquid transparency are notoriously difficult to photograph in studios without glare.
                </p>

                <div className="text-left font-sans">
                    <h3 className="text-xl font-semibold mb-4 text-white">High-quality perfume product photography helps:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Suggest fragrance notes (using botanical, woody, or fresh themes)</li>
                        <li>Showcase transparent glass bottles, labels, and liquid clarity</li>
                        <li>Elevate the overall brand aesthetic with premium editorial lighting</li>
                    </ul>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed font-sans">
                    AIVX automates this setup, using advanced AI models to place perfume bottles on marble basins, sunlit stone blocks, or floating on water ripples.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed font-sans">
                    If you are launching a fragrance, check out our full <Link href="/product-shoot/accessories" className="font-bold text-neon-green hover:underline">AI accessories product shoot studio</Link> to view other matching categories.
                </p>
            </AccessoriesCategorySEO>

            <AccessoriesCategoryOverview category={category} />


            <AccessoriesCategoryAspectRatios category={category} />

            <AccessoriesCategorySEO title="Bring Fragrances to Life Virtually">
                <p className="text-lg text-gray-300 leading-relaxed font-sans">
                    With AIVX, you can quickly test different lifestyle themes to find what highlights your fragrance notes best. Instantly change styling elements without paying for physical resets or scheduling delays.
                </p>
            </AccessoriesCategorySEO>

            <AccessoriesCategoryEcommerce category={category} />

            <AccessoriesCategoryFAQ
                title="Frequently Asked Questions – AI Perfume Product Photography"
                faqs={faqs}
            />

            <AccessoriesCategoryFinalCTA category={category} />
        </main>
    );
}
