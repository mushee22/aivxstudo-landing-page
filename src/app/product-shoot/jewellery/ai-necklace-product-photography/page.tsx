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
    title: 'AI Necklace Product Photography | AIVX Studio',
    description: 'Create stunning necklace product images and videos using AI. Fast, scalable, and optimized for ecommerce jewellery brands.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/jewellery/ai-necklace-product-photography',
    },
    openGraph: {
        title: 'AI Necklace Product Photography | AIVX Studio',
        description: 'Create stunning necklace product images and videos using AI. Fast, scalable, and optimized for ecommerce jewellery brands.',
        type: 'website',
        url: 'https://aivx.in/product-shoot/jewellery/ai-necklace-product-photography',
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
        title: 'AI Necklace Product Photography | AIVX Studio',
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

    const faqs = [
        {
            q: "How is necklace product photography different from pendant-set photography?",
            a: "Necklace photography focuses on individual chain flow, proportion, and pendant positioning, while pendant-set photography involves coordinating multiple matching pieces. Both require precise lighting and composition."
        },
        {
            q: "Can AI accurately show necklace length and chain detailing?",
            a: "Yes. AI-powered necklace photography simulates realistic chain drape and metal texture, ensuring buyers can clearly visualize product proportions."
        },
        {
            q: "Is AI necklace photography suitable for ecommerce platforms?",
            a: "Absolutely. AI-generated necklace visuals are optimized for Shopify, WooCommerce, Amazon, and social commerce platforms in multiple aspect ratios."
        },
        {
            q: "Can I generate different themes for the same necklace?",
            a: "Yes. AI allows brands to instantly create white background catalog images, luxury dark aesthetics, lifestyle model visuals, and seasonal themes without additional production costs."
        },
        {
            q: "Is AI necklace product photography more cost-effective than traditional studio shoots?",
            a: "In most cases, yes. AI reduces recurring expenses related to studio rental, models, setup time, and retouching. Making it ideal for scaling jewellery brands globally."
        }
    ];

    return (
        <main className="min-h-screen bg-dark-bg">
            <JewelleryCategoryHero
                category={category}
                backgroundImage='/theme/necklace/white-theme.png'
            />

            <JewelleryCategorySEO title="AI Necklace Product Photography for Ecommerce Brands">
                <p className="text-lg text-gray-300 leading-relaxed">
                    Necklace product photography requires a careful balance between detail, proportion, and styling. Unlike rings or earrings, necklaces occupy more visual space and often interact with the neckline, background, and overall composition of the frame.
                </p>

                <div className="text-left">
                    <h3 className="text-xl font-semibold mb-4">Capturing necklace designs effectively involves:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Showing accurate chain length and drape</li>
                        <li>Highlighting pendant positioning</li>
                        <li>Ensuring gemstone brilliance is visible</li>
                        <li>Maintaining metal tone consistency</li>
                        <li>Creating balanced composition for ecommerce thumbnails</li>
                    </ul>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                    In traditional studio shoots, necklaces can be difficult to position naturally. Chains may twist, reflections can vary, and lighting inconsistencies can affect gemstone sparkle. Achieving the perfect angle often requires multiple adjustments and retouching sessions.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    With AI-powered necklace product photography (necklace jewelry photography), brands can generate hyper-realistic visuals with consistent lighting, controlled reflections, and natural chain flow. AI systems simulate realistic shadow depth and sparkle behavior while maintaining uniform styling across entire collections.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    For ecommerce brands, necklace visuals must perform across multiple platforms. Product listing pages, social media ads, marketplace thumbnails, and homepage banners. AI workflows allow brands to generate white background catalog images, editorial dark themes, or lifestyle-inspired aesthetics instantly without reshooting the physical product.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    If you’re managing a full jewellery catalog beyond necklaces, you can also explore our <Link href="/product-shoot/jewellery" className="font-bold text-neon-green hover:underline">AI jewellery product photography services</Link> to see how AI supports rings, earrings, pendants, and complete collection scaling.
                </p>

                <p className="text-xl font-bold mt-8 text-white">
                    In modern ecommerce, clarity and consistency influence buying decisions. AI necklace product photography enables brands to scale production while maintaining premium presentation.
                </p>
            </JewelleryCategorySEO>

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

            <JewelleryCategoryFAQ
                title="Frequently Asked Questions – AI Necklace Product Photography"
                faqs={faqs}
            />

            <JewelleryCategoryFinalCTA category={category} />
        </main>
    );
}
