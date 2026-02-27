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
    title: 'AI Necklace Set Product Photography | AIVX Studio',
    description: 'Generate studio-quality necklace set images and short videos using AI. Ideal for ecommerce, ads, and jewellery catalogs.',
    alternates: {
        canonical: 'https://aivx.in/product-shoot/jewellery/ai-necklace-set-product-photography',
    },
    openGraph: {
        title: 'AI Necklace Set Product Photography | AIVX Studio',
        description: 'Generate studio-quality necklace set images and short videos using AI. Ideal for ecommerce, ads, and jewellery catalogs.',
        type: 'website',
        url: 'https://aivx.in/product-shoot/jewellery/ai-necklace-set-product-photography',
        images: [
            {
                url: '/images/jewellery-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'AI Necklace Set Product Photography',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Necklace Set Product Photography | AIVX Studio',
        description: 'Generate studio-quality necklace set images and short videos using AI. Ideal for ecommerce, ads, and jewellery catalogs.',
        images: ['/images/jewellery-hero.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function NecklaceSetPage() {
    const category = 'necklace-set';

    const faqs = [
        {
            q: "How is necklace-set photography different from single necklace photography?",
            a: "Necklace-set photography involves coordinating multiple matching pieces, ensuring symmetry, balanced lighting, and consistent styling across the entire set. This requires precise control over reflections and positioning."
        },
        {
            q: "Can AI accurately capture gemstone sparkle and metal finishes?",
            a: "Yes. AI-powered necklace-set product photography simulates realistic reflections, gemstone brilliance, and detailed metal textures suitable for ecommerce platforms."
        },
        {
            q: "Is AI necklace-set photography suitable for marketplaces like Amazon?",
            a: "Absolutely. AI-generated visuals are optimized for ecommerce platforms including Shopify, WooCommerce, Amazon, and other marketplaces, with proper aspect ratios and high-resolution output."
        },
        {
            q: "Can I create multiple themes for the same necklace set?",
            a: "Yes. AI allows you to generate multiple background styles, lighting moods, and aesthetic variations without physically reshooting the jewellery."
        },
        {
            q: "Is AI necklace-set photography cost-effective compared to traditional studio shoots?",
            a: "In most cases, yes. AI reduces costs related to studio rental, models, setup time, and repeated retouching. Making it ideal for growing jewellery brands scaling online."
        }
    ];

    return (
        <main className="min-h-screen bg-dark-bg">
            <JewelleryCategoryHero
                category={category}
                backgroundImage='/theme/necklace-set/light-green-theme.png'
            />

            <JewelleryCategorySEO title="AI Necklace-Set Product Photography for Ecommerce Brands">
                <p className="text-lg text-gray-300 leading-relaxed">
                    Necklace-set product photography requires careful visual balance, especially when showcasing coordinated pieces such as a central necklace paired with matching earrings. Unlike single-piece jewellery, necklace sets must be styled to highlight proportion, symmetry, and gemstone alignment across multiple elements.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    In traditional studio environments, photographing necklace sets can be challenging. Chains must be positioned naturally, pendants must sit correctly, and matching pieces need cohesive lighting to avoid inconsistent reflections. Even small shifts in angle can change how gemstones sparkle or how gold tones appear.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    With AI-powered necklace-set product photography (jewelry photography), brands can generate hyper-realistic visuals that maintain consistent lighting, shadows, and detailing across every piece in the set. This ensures that customers clearly see how the full collection looks together. Not just as individual components.
                </p>

                <div className="text-left">
                    <h3 className="text-xl font-semibold mb-4">For ecommerce brands, necklace-set visuals must:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Highlight symmetry between matching pieces</li>
                        <li>Show natural chain fall and neckline positioning</li>
                        <li>Capture gemstone brilliance and metal texture</li>
                        <li>Maintain consistent styling across SKUs</li>
                        <li>Work across catalog, marketplace, and ad formats</li>
                    </ul>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                    AI workflows allow instant theme variation. From white background catalog images to luxury editorial aesthetics. Without reshooting the physical product. This flexibility enables jewellery (jewelry) brands to scale collections quickly while maintaining premium presentation.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    If you are managing full-collection production beyond necklace sets, you can explore our <Link href="/product-shoot" className="font-bold text-neon-green hover:underline">AI jewellery product photography services</Link> to see how AI supports rings, earrings, pendants, and bangles at scale.
                </p>

                <p className="text-xl font-bold mt-8 text-white">
                    In modern ecommerce, clarity and consistency drive conversions. AI necklace-set product photography delivers both. Without studio limitations.
                </p>
            </JewelleryCategorySEO>

            <JewelleryCategoryOverview category={category} />
            <JewelleryCategoryThemes
                category={category}
                themes={[
                    { name: "LIGHT GREEN", image: "/theme/necklace-set/light-green-theme.png" },
                    { name: "BEIGE", image: "/theme/necklace-set/beige-theme.png" },
                    { name: "PASTEL BLUE", image: "/theme/necklace-set/pastel-blue-theme.png" },
                    { name: "RED", image: "/theme/necklace-set/red-theme.png" },
                    { name: "WHITE BG", image: "/theme/necklace-set/white-bg-theme.png" },
                    { name: "BLACK", image: "/theme/necklace-set/black-theme.png" },
                    { name: "GREEN", image: "/theme/necklace-set/green-theme.png" }
                ]}
            />
            {/* <JewelleryCategoryGallery category={category} />
            <JewelleryCategoryVideoGallery category={category} />
            <JewelleryCategoryModelVariations category={category} /> */}

            <JewelleryCategoryAspectRatios category={category} />
            <JewelleryCategoryEcommerce category={category} />

            <JewelleryCategoryFAQ
                title="Frequently Asked Questions – AI Necklace-Set Product Photography"
                faqs={faqs}
            />

            <JewelleryCategoryFinalCTA category={category} />
        </main>
    );
}
