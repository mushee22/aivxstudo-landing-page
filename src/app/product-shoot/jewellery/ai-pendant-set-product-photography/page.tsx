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
    title: 'AI Pendant Set Product Photography | AIVX Studio',
    description: 'AI-powered pendant set product shoot for high-quality images and videos. Designed for ecommerce-ready jewellery visuals.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/jewellery/ai-pendant-set-product-photography',
    },
    openGraph: {
        title: 'AI Pendant Set Product Photography | AIVX Studio',
        description: 'AI-powered pendant set product shoot for high-quality images and videos. Designed for ecommerce-ready jewellery visuals.',
        type: 'website',
        url: 'https://aivx.in/product-shoot/jewellery/ai-pendant-set-product-photography',
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
        title: 'AI Pendant Set Product Photography | AIVX Studio',
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

    const faqs = [
        {
            q: "How is pendant-set product photography different from ring photography?",
            a: "Pendant-set photography requires special attention to chain placement, necklace fall, and coordinated styling between matching pieces. Unlike rings, pendants must be displayed in a way that clearly shows length, proportion, and balance. Especially for ecommerce listings."
        },
        {
            q: "Can AI accurately show chain length and pendant detailing?",
            a: "Yes. AI-powered pendant-set product photography simulates realistic chain drape, gemstone reflections, and metal textures. This ensures buyers can clearly see how the pendant sits and how design details appear in close-up views."
        },
        {
            q: "Is AI pendant photography suitable for ecommerce platforms?",
            a: "Absolutely. AI-generated pendant-set visuals are optimized for Shopify, WooCommerce, Amazon, and other marketplaces. Images are delivered in platform-ready aspect ratios for product pages, ads, and social commerce."
        },
        {
            q: "Can I generate multiple background themes for the same pendant set?",
            a: "Yes. AI workflows allow you to create white background catalog images, luxury dark themes, pastel lifestyle setups, and seasonal aesthetics. Without reshooting the product physically."
        },
        {
            q: "Is AI pendant-set photography cost-effective compared to traditional studio shoots?",
            a: "In most cases, yes. AI reduces costs associated with studio rental, model coordination, and repeated retouching. This makes it easier for jewellery (jewelry) brands to scale pendant collections quickly and efficiently."
        }
    ];

    return (
        <main className="min-h-screen bg-dark-bg">
            <JewelleryCategoryHero category={category}
                backgroundImage='/theme/pendant-set/pink-theme.png'
            />

            <JewelleryCategorySEO title="AI Pendant-Set Product Photography for Ecommerce Brands">
                <p className="text-lg text-gray-300 leading-relaxed">
                    Pendant-set product photography requires a different visual approach compared to rings or earrings. Unlike single-piece jewellery, pendant sets often include coordinated elements such as chains, matching earrings, layered designs, and gemstone arrangements. Capturing these details clearly is essential for ecommerce success.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    In traditional pendant-set photography, studios must carefully manage chain placement, neckline positioning, reflections, and background contrast. Small shifts in lighting can change how gold tones or gemstones appear. This often leads to multiple reshoots and complex retouching work.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    With AI-powered pendant-set product photography (jewelry photography), brands can generate hyper-realistic visuals that maintain consistency across entire collections. AI systems simulate accurate light reflections on metal surfaces, gemstone sparkle, and natural shadow fall. Ensuring every detail is clearly visible for online shoppers.
                </p>

                <div className="text-left">
                    <h3 className="text-xl font-semibold mb-4">For ecommerce brands, pendant-set visuals must do more than look beautiful. They must:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Clearly showcase chain length and fall</li>
                        <li>Highlight gemstone settings and detailing</li>
                        <li>Maintain contrast between pendant and background</li>
                        <li>Present matching sets in cohesive styling</li>
                        <li>Work across product listing and advertising formats</li>
                    </ul>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                    AI workflows allow brands to generate multiple theme variations instantly. From minimal white background catalog images to luxury dark editorial styles. This flexibility helps jewellery (jewelry) brands test aesthetics across marketplaces, social ads, and brand websites without additional production cost.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    Another advantage of AI pendant-set photography is scalability. Whether launching 10 SKUs or 200 coordinated designs, brands can maintain identical lighting styles, model consistency, and background themes across all products. This creates a professional, cohesive brand identity. something that directly impacts buyer trust in ecommerce.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    For brands expanding beyond pendant sets, you can also explore our <Link href="/product-shoot" className="font-bold text-neon-green hover:underline">AI jewellery product photography services</Link> to see how AI supports complete collection production, including rings, earrings, bangles, and necklace sets.
                </p>

                <p className="text-xl font-bold mt-8 text-white">
                    In modern ecommerce, visual clarity, speed, and scalability define competitive advantage. AI pendant-set product photography enables all three. Without studio limitations.
                </p>
            </JewelleryCategorySEO>

            <JewelleryCategoryOverview category={category} />
            <JewelleryCategoryThemes
                category={category}
                themes={[
                    { name: "NAVY BLUE", image: "/theme/pendant-set/navy-blue-theme.png" },
                    { name: "EMERALD GREEN", image: "/theme/pendant-set/emerald-green-theme.png" },
                    { name: "WHITE BG", image: "/theme/pendant-set/white-theme.png" },
                    { name: "BROWN", image: "/theme/pendant-set/brown-theme.png" },
                    { name: "PINK", image: "/theme/pendant-set/pink-theme.png" },
                    { name: "BLACK", image: "/theme/pendant-set/black-new-theme.png" },
                    { name: "PASTEL BLUE", image: "/theme/pendant-set/pastel-blue-new-theme.png" },
                ]}
            />
            {/* <JewelleryCategoryGallery category={category} /> */}
            {/* <JewelleryCategoryVideoGallery category={category} /> */}
            {/* <JewelleryCategoryModelVariations category={category} /> */}
            <JewelleryCategoryAspectRatios category={category} />
            <JewelleryCategoryEcommerce category={category} />

            <JewelleryCategoryFAQ
                title="Frequently Asked Questions – AI Pendant-Set Product Photography"
                faqs={faqs}
            />

            <JewelleryCategoryFinalCTA category={category} />
        </main>
    );
}
