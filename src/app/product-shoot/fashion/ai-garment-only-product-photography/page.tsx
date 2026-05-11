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
    title: "AI Garment Only Product Photography | AIVX Studio",
    description: "Create professional garment-only product images with AI. Perfect for flat-lay, hanger shots, and ghost mannequin styles — ready for ecommerce without models.",
    alternates: {
        canonical: 'https://aivx.in/product-shoot/fashion/ai-garment-only-product-photography',
    },
    openGraph: {
        title: "AI Garment Only Product Photography | AIVX Studio",
        description: "Generate garment-only product images using AI. Built for fashion ecommerce brands that prefer no-model shots.",
        type: 'website',
        url: 'https://aivx.in/product-shoot/fashion/ai-garment-only-product-photography',
        images: [{ url: '/image/hero/fashion/slider-image-five.webp', width: 1200, height: 630, alt: "AI Garment Only Product Photography" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "AI Garment Only Product Photography | AIVX Studio",
        description: "AI-powered garment-only product photography — flat-lay and hanger shots without models.",
        images: ['/image/hero/fashion/slider-image-five.webp'],
    },
    robots: { index: true, follow: true },
};

export default function GarmentOnlyPage() {
    const category = "garment only";

    const faqs = [
        {
            q: "What is garment-only product photography?",
            a: "Garment-only photography showcases clothing without models — using flat-lay, hanger shots, or ghost mannequin techniques. It focuses purely on the product itself with professional styling and lighting.",
        },
        {
            q: "When should I use garment-only vs model photography?",
            a: "Garment-only works well for detail-focused listings, minimalist branding, or when you want customers to focus on fabric, pattern, and construction rather than styling. Model shots work better for showing fit and lifestyle context.",
        },
        {
            q: "Can AI create ghost mannequin effects?",
            a: "Yes. Our AI can generate invisible mannequin effects that show the garment's shape and structure without visible models or forms — perfect for ecommerce platforms.",
        },
        {
            q: "What garment types work best for garment-only shots?",
            a: "All types work well — shirts, dresses, pants, jackets, accessories. Structured garments like jackets and formal wear especially benefit from this style as it highlights construction quality.",
        },
        {
            q: "Is garment-only photography suitable for all ecommerce platforms?",
            a: "Yes. Platforms like Amazon, Flipkart, Myntra, and Meesho all accept and perform well with garment-only images, especially when combined with model shots in a gallery.",
        },
    ];

    return (
        <main className="min-h-screen bg-dark-bg">
            <FashionCategoryHero
                category={category}
                backgroundImage="/image/hero/fashion/slider-image-five.webp"
            />

            <JewelleryCategorySEO title="Why Garment-Only Product Photography Works for Fashion Ecommerce">
                <p className="text-lg text-gray-300 leading-relaxed">
                    Garment-only photography strips away distractions and puts your product front and center. For brands that want to showcase fabric quality, construction details, patterns, and prints — this style delivers clarity that model shots sometimes can&apos;t match.
                </p>
                <div className="text-left">
                    <h3 className="text-xl font-semibold mb-4">Garment-only images excel at:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Highlighting fabric texture, weave, and quality</li>
                        <li>Showing intricate patterns, prints, and embroidery</li>
                        <li>Creating clean, minimalist brand aesthetics</li>
                        <li>Providing consistent product catalog visuals</li>
                    </ul>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                    AI garment-only photography delivers professional flat-lay and hanger shots at scale — without the setup time of traditional studio shoots.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Explore the full <Link href="/product-shoot/fashion" className="font-bold text-neon-green hover:underline">AI fashion product photography</Link> range for all categories we support.
                </p>
                <p className="text-xl font-bold mt-8 text-white">
                    Clean. Professional. Product-focused. That&apos;s garment-only done right.
                </p>
            </JewelleryCategorySEO>

            <FashionCategoryOverview category={category} />

            <JewelleryCategoryAspectRatios category={category} />

            <JewelleryCategorySEO title="How AI Garment-Only Photography Saves Time & Cost">
                <p className="text-lg text-gray-300 leading-relaxed">
                    Traditional garment-only photography requires proper styling, lighting setups, and often specialized equipment like ghost mannequins. Every product needs individual attention, making large catalog shoots expensive and time-consuming.
                </p>
                <div className="text-left mt-4 pt-2">
                    <h3 className="text-xl font-semibold mb-4">Key advantages of AI garment-only photography:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Instant flat-lay and hanger shot generation</li>
                        <li>No physical styling or lighting equipment needed</li>
                        <li>Consistent background and lighting across all products</li>
                        <li>Multiple style variations from a single upload</li>
                    </ul>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mt-6">
                    For brands launching frequent product drops or managing large SKU catalogs, AIVX removes the production overhead entirely while maintaining premium visual quality.
                </p>
                <p className="text-xl font-bold mt-8 text-white">
                    Scale your catalog. Maintain quality. Cut costs dramatically.
                </p>
            </JewelleryCategorySEO>

            <JewelleryCategoryEcommerce category={category} />

            <JewelleryCategoryFAQ
                title="Frequently Asked Questions – AI Garment Only Product Photography"
                faqs={faqs}
            />

            <JewelleryCategoryFinalCTA category={category} />
        </main>
    );
}
