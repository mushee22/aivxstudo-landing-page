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
            q: "Is AI earring product photography cost-effective compared to traditional studio shoots?",
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
                    Earring product photography requires precision and attention to fine details. Unlike rings or necklace sets, earrings are often smaller in size and highly reflective, making lighting control extremely important. For ecommerce brands, even minor inconsistencies in sparkle, symmetry, or metal tone can affect buyer perception.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    Traditional earring photography typically involves macro lenses, careful shadow control, and extensive retouching. Stud earrings, hoop earrings, and drop earrings each present different challenges. From capturing depth to showcasing gemstone brilliance and texture.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    With AI-powered earring product photography (earring jewelry photography), brands can generate hyper-realistic visuals that replicate studio lighting accuracy without physical setups. AI systems simulate natural reflections, soft shadows, and gemstone sparkle while maintaining consistent presentation across entire collections.
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
                    AI workflows allow brands to generate multiple variations. Including white background catalog images, luxury dark aesthetics, and lifestyle model-based visuals. Without repeated reshoots.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    Another major advantage is scalability. Whether launching 20 SKUs or 200, AI earring product photography ensures consistent lighting and styling across all pieces. This builds stronger brand identity and improves visual harmony throughout your online store.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    If you’re managing multiple jewellery categories beyond earrings, you can explore our <Link href="/product-shoot" className="font-bold text-neon-green hover:underline">AI jewellery product photography services</Link> to see how AI supports full-collection production at scale.
                </p>

                <p className="text-xl font-bold mt-8 text-white">
                    In ecommerce, clarity, speed, and consistency drive performance. AI earring photography enables all three.
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
