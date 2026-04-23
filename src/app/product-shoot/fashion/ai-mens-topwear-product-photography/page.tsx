import type { Metadata } from 'next';
import Link from 'next/link';
import FashionCategoryHero from '@/components/FashionCategoryHero';
import FashionCategoryOverview from '@/components/FashionCategoryOverview';
import JewelleryCategoryThemes from '@/components/JewelleryCategoryThemes';
import JewelleryCategoryAspectRatios from '@/components/JewelleryCategoryAspectRatios';
import JewelleryCategoryEcommerce from '@/components/JewelleryCategoryEcommerce';
import JewelleryCategoryFAQ from '@/components/JewelleryCategoryFAQ';
import JewelleryCategoryFinalCTA from '@/components/JewelleryCategoryFinalCTA';
import JewelleryCategorySEO from '@/components/JewelleryCategorySEO';

export const metadata: Metadata = {
    title: "AI Men's Topwear Product Photography | AIVX Studio",
    description: "Create studio-quality men's topwear images and reel videos using AI models. T-shirts, shirts, polos, hoodies and more — no studio or model booking needed.",
    alternates: {
        canonical: 'https://aivx.in/product-shoot/fashion/ai-mens-topwear-product-photography',
    },
    openGraph: {
        title: "AI Men's Topwear Product Photography | AIVX Studio",
        description: "Generate model-on men's topwear images and reels using AI. Built for fashion ecommerce brands.",
        type: 'website',
        url: 'https://aivx.in/product-shoot/fashion/ai-mens-topwear-product-photography',
        images: [{ url: '/image/fashion-photography-example.png', width: 1200, height: 630, alt: "AI Men's Topwear Product Shoot" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "AI Men's Topwear Product Photography | AIVX Studio",
        description: "AI-powered men's topwear product shoot — model-on images and reels without a studio.",
        images: ['/image/fashion-photography-example.png'],
    },
    robots: { index: true, follow: true },
};

export default function MensTopwearPage() {
    const category = "men's topwear";

    const faqs = [
        {
            q: "How does AI men's topwear product photography work?",
            a: "Upload a flat-lay or hanger image of your garment and our AI places it on a realistic male model with studio-quality lighting, backgrounds, and styling — ready for ecommerce.",
        },
        {
            q: "What types of men's topwear does AIVX support?",
            a: "We support T-shirts, casual shirts, formal shirts, polos, hoodies, sweatshirts, jackets, and other men's tops across all fabric types and fits.",
        },
        {
            q: "Is AI men's topwear photography compatible with ecommerce platforms?",
            a: "Yes. Outputs meet the image standards of Myntra, Meesho, Amazon, Flipkart, and Ajio — with correct resolution, aspect ratios, and clean backgrounds.",
        },
        {
            q: "Can AI show how a t-shirt fits across different body types?",
            a: "Our AI models are available in multiple body proportions and heights, giving you flexibility to showcase how garments fit different customer profiles.",
        },
        {
            q: "Is AI topwear photography more cost-effective than traditional shoots?",
            a: "Significantly. It removes model booking, studio rental, and retouching costs — making it scalable for brands with large SKU counts or frequent new arrivals.",
        },
    ];

    return (
        <main className="min-h-screen bg-dark-bg">
            <FashionCategoryHero
                category={category}
                backgroundImage="/image/fashion/mens-top-wear/shot-1.jpg"
            />

            <JewelleryCategorySEO title="Why Men's Topwear Product Photography Matters for Ecommerce">
                <p className="text-lg text-gray-300 leading-relaxed">
                    Men&apos;s topwear is one of the highest-volume categories in fashion ecommerce — and one where visual differentiation directly determines which brands win the sale. A model-on image that clearly shows fit, fabric texture, and styling converts at significantly higher rates than a flat-lay alone.
                </p>
                <div className="text-left">
                    <h3 className="text-xl font-semibold mb-4">High-quality men&apos;s topwear photography directly impacts:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Click-through rates on marketplace search results</li>
                        <li>Customer confidence in fit and fabric</li>
                        <li>Add-to-cart and conversion performance</li>
                        <li>Return rates from size and fit mismatches</li>
                    </ul>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                    AI men&apos;s topwear photography delivers model-on quality at catalog scale — without the cost of repeated shoots per collection drop.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Explore the full <Link href="/product-shoot/fashion" className="font-bold text-neon-green hover:underline">AI fashion product photography</Link> range for all categories we support.
                </p>
                <p className="text-xl font-bold mt-8 text-white">
                    In men&apos;s fashion, the model makes the difference. AI gives you that model at scale.
                </p>
            </JewelleryCategorySEO>

            <FashionCategoryOverview category={category} />

            {/* <JewelleryCategoryThemes
                category={category}
                themes={[
                    { name: 'Studio White', image: '/image/fashion-photography-example.png' },
                    { name: 'Urban Street', image: '/image/fashion-photography-example.png' },
                    { name: 'Minimal Dark', image: '/image/fashion-photography-example.png' },
                    { name: 'Outdoor Lifestyle', image: '/image/fashion-photography-example.png' },
                    { name: 'Editorial Grey', image: '/image/fashion-photography-example.png' },
                    { name: 'Campaign Splash', image: '/image/fashion-photography-example.png' },
                ]}
            /> */}

            <JewelleryCategoryAspectRatios category={category} />

            <JewelleryCategorySEO title="How AI Men's Topwear Photography Improves Speed, Cost & Scalability">
                <p className="text-lg text-gray-300 leading-relaxed">
                    Men&apos;s topwear brands — especially those on Meesho, Myntra, or D2C Shopify — release new designs frequently. Traditional photography simply can&apos;t keep pace without significant per-shoot investment.
                </p>
                <div className="text-left mt-4 pt-2">
                    <h3 className="text-xl font-semibold mb-4">Key advantages of AI topwear photography:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Same-day turnaround for new drops and collections</li>
                        <li>No recurring model or studio expenses</li>
                        <li>Consistent visual quality across all SKUs</li>
                        <li>Multiple styling and theme variations per design</li>
                    </ul>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mt-6">
                    For brands operating on high-frequency product launches, AIVX removes the visual production bottleneck entirely.
                </p>
                <p className="text-xl font-bold mt-8 text-white">
                    Ship faster. Look better. Spend less per shoot.
                </p>
            </JewelleryCategorySEO>

            <JewelleryCategoryEcommerce category={category} />

            <JewelleryCategoryFAQ
                title="Frequently Asked Questions – AI Men's Topwear Product Photography"
                faqs={faqs}
            />

            <JewelleryCategoryFinalCTA category={category} />
        </main>
    );
}
