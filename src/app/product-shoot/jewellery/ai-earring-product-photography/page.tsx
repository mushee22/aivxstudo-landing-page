import type { Metadata } from 'next';
import Link from 'next/link';
import JewelleryCategoryAspectRatios from '@/components/JewelleryCategoryAspectRatios';
import JewelleryCategoryEcommerce from '@/components/JewelleryCategoryEcommerce';
import JewelleryCategoryFinalCTA from '@/components/JewelleryCategoryFinalCTA';
import JewelleryCategoryHero from '@/components/JewelleryCategoryHero';
import JewelleryCategoryOverview from '@/components/JewelleryCategoryOverview';
import JewelleryCategoryThemes from '@/components/JewelleryCategoryThemes';
import JewelleryCategorySEO from '@/components/JewelleryCategorySEO';
import JewelleryCategoryFAQ from '@/components/JewelleryCategoryFAQ';

export const metadata: Metadata = {
    title: 'AI Earring Product Photography | AIVX Studio',
    description: 'Generate premium earring product images and reel videos using AI. Optimized for ecommerce, catalogs, and jewellery marketing.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/jewellery/ai-earring-product-photography',
    },
    openGraph: {
        title: 'AI Earring Product Photography | AIVX Studio',
        description: 'Generate premium earring product images and reel videos using AI. Optimized for ecommerce, catalogs, and jewellery marketing.',
        type: 'website',
        url: 'https://aivx.in/product-shoot/jewellery/ai-earring-product-photography',
        images: [
            {
                url: '/images/jewellery-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Earring Product Shoot',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Earring Product Photography | AIVX Studio',
        description: 'Generate premium earring product images and reel videos using AI. Optimized for ecommerce, catalogs, and jewellery marketing.',
        images: ['/images/jewellery-hero.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function EarRingPage() {
    const category = 'earring';

    const faqs = [
        {
            q: "How is earring product photography different from other jewellery photography?",
            a: "Earrings are smaller and highly reflective, requiring precise lighting and angle control to capture gemstone sparkle and metal detail. Symmetry is especially important for paired pieces."
        },
        {
            q: "Can AI accurately capture small details in earrings?",
            a: "Yes. AI-powered earring photography simulates macro-level reflections and gemstone clarity, producing high-resolution visuals suitable for ecommerce zoom features."
        },
        {
            q: "Is AI earring photography suitable for ecommerce marketplaces?",
            a: "Absolutely. AI-generated earring images are optimized for Shopify, WooCommerce, Amazon, and other ecommerce platforms in multiple aspect ratios."
        },
        {
            q: "Can I create lifestyle and model-based earring visuals using AI?",
            a: "Yes. AI allows brands to generate model-based visuals and lifestyle themes without organizing physical model shoots."
        },
        {
            q: "Is AI earring product photography cost-effective compared to traditional studio based shoots?",
            a: "In most cases, yes. AI reduces studio rental, setup, retouching, and repeated shoot costs, making it ideal for scaling ecommerce jewellery brands."
        }
    ];

    return (
        <main className="min-h-screen bg-dark-bg">
            <JewelleryCategoryHero
                category={category}
                backgroundImage='/theme/earring/rose-amber-theme.png'
            />

            <JewelleryCategorySEO title="AI Earring Product Photography for Ecommerce Brands">
                <p className="text-lg text-gray-300 leading-relaxed">
                    Earring product photography requires precision and attention to fine details. Unlike rings or necklace sets, earrings are often smaller and highly reflective, making lighting control extremely important. For ecommerce brands, even minor inconsistencies in sparkle, symmetry, or metal tone can affect buyer perception.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    Traditional earring photography typically involves macro lenses, careful shadow control, and extensive retouching. Stud, hoop, and drop earrings each present different challenges, from capturing depth to showcasing gemstone brilliance and texture.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    With AI powered earring product photography, brands can generate studio grade visuals without physical setups. AI systems simulate natural reflections, soft shadows, and gemstone sparkle while keeping presentation consistent across entire collections.
                </p>

                <div className="text-left">
                    <h3 className="text-xl font-semibold mb-4">For ecommerce platforms, earring visuals must:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Highlight front and side angles clearly</li>
                        <li>Showcase gemstone clarity and metal finish</li>
                        <li>Maintain symmetrical alignment</li>
                        <li>Work effectively in small product thumbnails</li>
                        <li>Deliver high-resolution zoom-ready images</li>
                    </ul>
                </div>
            </JewelleryCategorySEO>

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

            <JewelleryCategorySEO title="Scalable Earring Photography Without Reshoots">
                <p className="text-lg text-gray-300 leading-relaxed">
                    AI makes it possible to produce different earring visuals from the same product asset. Brands can create clean catalogue images, premium campaign style compositions, and lifestyle visuals featuring models without arranging a new shoot for every concept.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    This becomes especially useful when managing large jewellery collections. Whether you are introducing a small batch of new earrings or updating hundreds of SKUs, AI helps maintain a uniform visual style across the entire range. Consistent backgrounds, lighting, framing, and presentation create a more cohesive ecommerce storefront.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    For brands managing multiple jewellery categories, explore our AI jewellery product photography services to produce consistent product content at scale.
                </p>

                <p className="text-xl font-bold mt-8 text-white">
                    With faster production, consistent styling, and flexible creative options, AI earring photography makes it easier to keep your ecommerce catalogue visually up to date.

                </p>
            </JewelleryCategorySEO>

            <JewelleryCategoryAspectRatios category={category} />
            <JewelleryCategoryEcommerce category={category} />

            <JewelleryCategoryFAQ
                title="Frequently Asked Questions – AI Earring Product Photography"
                faqs={faqs}
            />

            <JewelleryCategoryFinalCTA category={category} />
        </main>
    );
}
