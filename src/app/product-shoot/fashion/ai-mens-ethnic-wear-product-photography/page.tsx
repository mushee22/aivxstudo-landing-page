import FashionCategoryHero from '@/components/FashionCategoryHero';
import FashionCategoryOverview from '@/components/FashionCategoryOverview';
import JewelleryCategoryAspectRatios from '@/components/JewelleryCategoryAspectRatios';
import JewelleryCategoryEcommerce from '@/components/JewelleryCategoryEcommerce';
import JewelleryCategoryFAQ from '@/components/JewelleryCategoryFAQ';
import JewelleryCategoryFinalCTA from '@/components/JewelleryCategoryFinalCTA';
import JewelleryCategorySEO from '@/components/JewelleryCategorySEO';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "AI Men's Ethnic Wear Product Photography | AIVX Studio",
    description: "Create studio-quality men's ethnic wear images and reel videos using AI models. Kurtas, sherwanis, dhoti sets, nehru jackets and more — no studio needed.",
    alternates: {
        canonical: 'https://aivx.in/product-shoot/fashion/ai-mens-ethnic-wear-product-photography',
    },
    openGraph: {
        title: "AI Men's Ethnic Wear Product Photography | AIVX Studio",
        description: "Generate model-on men's ethnic wear images and reels using AI. Built for Indian ethnic fashion brands.",
        type: 'website',
        url: 'https://aivx.in/product-shoot/fashion/ai-mens-ethnic-wear-product-photography',
        images: [{ url: '/image/fashion-photography-example.png', width: 1200, height: 630, alt: "AI Men's Ethnic Wear Product Shoot" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "AI Men's Ethnic Wear Product Photography | AIVX Studio",
        description: "AI-powered men's ethnic wear product shoot — model-on images and reels without a studio.",
        images: ['/image/fashion-photography-example.png'],
    },
    robots: { index: true, follow: true },
};

export default function MensEthnicWearPage() {
    const category = "men's ethnic wear";

    const faqs = [
        {
            q: "What types of men's ethnic wear does AIVX support?",
            a: "AIVX supports kurtas, kurta sets, sherwanis, dhoti kurtas, nehru jackets, pathani suits, indo-western sets, and other men's ethnic and festive garments.",
        },
        {
            q: "How does AI handle embroidery and zari work on ethnic wear?",
            a: "Our AI rendering accurately presents thread embroidery, zari borders, sequin work, and block prints — ensuring buyers can evaluate craftsmanship detail clearly.",
        },
        {
            q: "Is AI men's ethnic wear photography suitable for festive and wedding collections?",
            a: "Absolutely. Sherwani and festive ethnic wear are rendered with the elegance and premium aesthetic they require — ideal for wedding season campaign launches.",
        },
        {
            q: "Can I showcase the same sherwani in both wedding and casual styling?",
            a: "Yes. Multiple styling themes allow you to present the same garment in different occasion contexts — from bridal settings to festive casual.",
        },
        {
            q: "Is AI men's ethnic wear photography compatible with ecommerce platforms?",
            a: "Yes. Outputs are optimized for Myntra, Meesho, Amazon, Flipkart, Ajio, and direct-to-customer Shopify stores — with correct resolution and aspect ratios.",
        },
    ];

    return (
        <main className="min-h-screen bg-dark-bg">
            <FashionCategoryHero
                category={category}
                backgroundImage="/image/hero/fashion/slider-image-four.webp"
            />

            <JewelleryCategorySEO title="Why Men's Ethnic Wear Product Photography Matters for Ecommerce">
                <p className="text-lg text-gray-300 leading-relaxed">
                    Men&apos;s ethnic wear — from everyday kurtas to wedding sherwanis — is one of India&apos;s fastest-growing fashion ecommerce segments. As more men shop for ethnic occasions online, the visual presentation of these garments has become critical to purchase decisions.
                </p>
                <div className="text-left">
                    <h3 className="text-xl font-semibold mb-4">Strong men&apos;s ethnic wear visuals directly impact:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Customer ability to assess garment length, fit, and silhouette</li>
                        <li>Visibility of embroidery, print quality, and fabric sheen</li>
                        <li>Occasion-appropriateness and styling context</li>
                        <li>Conversion rates on searches for festive and wedding wear</li>
                    </ul>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                    AI men&apos;s ethnic wear photography provides consistent, premium model visuals across your collection — at the pace your catalog demands.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    View the full <Link href="/product-shoot/fashion" className="font-bold text-neon-green hover:underline">AI fashion product photography</Link> range for all fashion categories we support.
                </p>
                <p className="text-xl font-bold mt-8 text-white">
                    Every sherwani needs its moment. AI gives every garment that moment — at scale.
                </p>
            </JewelleryCategorySEO>

            <FashionCategoryOverview category={category} />

            {/* <JewelleryCategoryThemes
                category={category}
                themes={[
                    { name: 'Heritage Haveli', image: '/image/fashion-photography-example.png' },
                    { name: 'Festive Gold', image: '/image/fashion-photography-example.png' },
                    { name: 'Studio White', image: '/image/fashion-photography-example.png' },
                    { name: 'Regal Dark', image: '/image/fashion-photography-example.png' },
                    { name: 'Garden Courtyard', image: '/image/fashion-photography-example.png' },
                    { name: 'Modern Editorial', image: '/image/fashion-photography-example.png' },
                ]}
            /> */}

            <JewelleryCategoryAspectRatios category={category} />

            <JewelleryCategorySEO title="How AI Men's Ethnic Wear Photography Improves Speed, Cost & Scalability">
                <p className="text-lg text-gray-300 leading-relaxed">
                    Ethnic wear shoots — especially for festive and wedding season collections — require elaborate set designs, experienced stylists, and models who can carry the garments with cultural authenticity. This makes them expensive and slow to produce at scale.
                </p>
                <div className="text-left mt-4 pt-2">
                    <h3 className="text-xl font-semibold mb-4">Key advantages of AI men&apos;s ethnic wear photography:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Launch full festive collections without last-minute shoot logistics</li>
                        <li>No per-session model or studio costs</li>
                        <li>Cultural setting themes available instantly — no prop sourcing</li>
                        <li>Consistent quality across every kurta and sherwani in your catalog</li>
                    </ul>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mt-6">
                    For brands launching Eid, Diwali, or wedding season collections, AIVX removes the production bottleneck — so your collection is live when the occasion demand peaks.
                </p>
                <p className="text-xl font-bold mt-8 text-white">
                    Be ready for every festive season — without the rush of a last-minute shoot.
                </p>
            </JewelleryCategorySEO>

            <JewelleryCategoryEcommerce category={category} />

            <JewelleryCategoryFAQ
                title="Frequently Asked Questions – AI Men's Ethnic Wear Product Photography"
                faqs={faqs}
            />

            <JewelleryCategoryFinalCTA category={category} />
        </main>
    );
}
