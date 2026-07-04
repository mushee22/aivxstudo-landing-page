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
    title: 'AI Watch Product Photography | AIVX Studio',
    description: 'Create studio-quality watch images using AI. Render details, metals, dials, and bezels for luxury watch brands and ecommerce.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/accessories/ai-watch-product-photography',
    },
    openGraph: {
        title: 'AI Watch Product Photography | AIVX Studio',
        description: 'Create studio-quality watch images using AI. Render details, metals, dials, and bezels for luxury watch brands and ecommerce.',
        type: 'website',
        url: 'https://aivx.in/product-shoot/accessories/ai-watch-product-photography',
        images: [
            {
                url: '/image/hero/accessories/watch-4.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Watch Product Shoot',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Watch Product Photography | AIVX Studio',
        description: 'Create studio-quality watch images using AI. Render details, metals, dials, and bezels for luxury watch brands and ecommerce.',
        images: ['/image/hero/accessories/watch-4.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function WatchPage() {
    const category = 'watch';

    const faqs = [
        {
            q: "How does AI watch product photography work?",
            a: "AI watch photography uses lighting and reflection models designed for metal and glass. It simulates high-contrast studio lights to highlight watch dials, hands, bezels, and straps."
        },
        {
            q: "Can AI render glass refractions and watch face details?",
            a: "Yes. Our AI models are configured to render clear glass faces without glare while keeping dial indicators, sub-dials, and hands extremely sharp."
        },
        {
            q: "Is it suitable for luxury wristwatches?",
            a: "Absolutely. AIVX creates premium, high-resolution lifestyle setups that place your watches on slate, dark oak, or leather pedestals matching luxury design codes."
        },
        {
            q: "How long does a watch campaign setup take?",
            a: "Visuals are ready within hours, allowing you to run digital campaigns, change background themes, and update listings rapidly."
        },
        {
            q: "Do you support different strap materials?",
            a: "Yes. The AI handles leather straps, steel bracelets, rubber sports bands, and fabric loops, rendering correct textures and color finishes."
        }
    ];

    return (
        <main className="min-h-screen bg-dark-bg">
            <AccessoriesCategoryHero
                category={category}
                backgroundImage='/image/hero/accessories/watch-4.jpg'
            />

            <AccessoriesCategorySEO title="Why Watch Product Photography Matters for Ecommerce Brands">
                <p className="text-lg text-gray-300 leading-relaxed font-sans">
                    Watches are complex, detailed items where micro-level details define value. Buyers closely inspect dial alignments, indices clarity, hands, bezel finishes, and strap textures. Studio-grade watch photography requires complex polarized lighting setups to manage glare on the watch crystal face and metal bezel.
                </p>

                <div className="text-left font-sans">
                    <h3 className="text-xl font-semibold mb-4 text-white">Premium watch photography helps brands:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Showcase complex dial details and subdials clearly</li>
                        <li>Highlight steel, gold, or titanium metal finishes accurately</li>
                        <li>Maintain consistent angles and dials alignment across product catalog pages</li>
                    </ul>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed font-sans">
                    AIVX replaces complex polarized studio lighting setups with digital rendering algorithms. Get consistent watch photography for Shopify, social ads, and wholesale line sheets.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed font-sans">
                    If you are launching watches, explore our full range of <Link href="/product-shoot/accessories" className="font-bold text-neon-green hover:underline">AI accessories product shoot options</Link> to build cohesive branding.
                </p>
            </AccessoriesCategorySEO>

            <AccessoriesCategoryOverview category={category} />



            <AccessoriesCategoryAspectRatios category={category} />

            <AccessoriesCategorySEO title="Fast Campaign Launch for Watch Brands">
                <p className="text-lg text-gray-300 leading-relaxed font-sans">
                    AIVX generates multiple aspect ratios, background themes, and crop levels in parallel. Run watch ads on social media, update your banner sliders, and sync Amazon listings in a single workflow.
                </p>
            </AccessoriesCategorySEO>

            <AccessoriesCategoryEcommerce category={category} />

            <AccessoriesCategoryFAQ
                title="Frequently Asked Questions – AI Watch Product Photography"
                faqs={faqs}
            />

            <AccessoriesCategoryFinalCTA category={category} />
        </main>
    );
}
