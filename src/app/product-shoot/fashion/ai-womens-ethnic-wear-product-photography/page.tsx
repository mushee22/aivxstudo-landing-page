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
    title: "AI Women's Ethnic Wear Product Photography | AIVX Studio",
    description: "Create studio-quality women's ethnic wear images and reel videos using AI models. Sarees, lehengas, salwar suits, anarkalis and more — no studio needed.",
    alternates: {
        canonical: 'https://aivx.in/product-shoot/fashion/ai-womens-ethnic-wear-product-photography',
    },
    openGraph: {
        title: "AI Women's Ethnic Wear Product Photography | AIVX Studio",
        description: "Generate model-on women's ethnic wear images and reels using AI. Built for Indian ethnic fashion and bridal brands.",
        type: 'website',
        url: 'https://aivx.in/product-shoot/fashion/ai-womens-ethnic-wear-product-photography',
        images: [{ url: '/image/fashion-photography-example.png', width: 1200, height: 630, alt: "AI Women's Ethnic Wear Product Shoot" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "AI Women's Ethnic Wear Product Photography | AIVX Studio",
        description: "AI-powered women's ethnic wear product shoot — model-on images and reels without a studio.",
        images: ['/image/fashion-photography-example.png'],
    },
    robots: { index: true, follow: true },
};

export default function WomensEthnicWearPage() {
    const category = "women's ethnic wear";

    const faqs = [
        {
            q: "What types of women's ethnic wear does AIVX support?",
            a: "AIVX supports sarees, lehengas, salwar kameez, anarkalis, churidars, palazzo sets, sharara suits, co-ord ethnic sets, and other Indian women's ethnic garments.",
        },
        {
            q: "How does AI handle saree drape and lehenga volume accurately?",
            a: "Our system digitally simulates saree draping with accurate pallu fall, and renders lehenga volume and flare realistically — giving customers a true sense of the final look.",
        },
        {
            q: "Is AI women's ethnic wear photography suitable for bridal collections?",
            a: "Yes. Bridal lehengas, heavy sarees, and embroidered suits are rendered with the premium quality and detail they require — ideal for wedding season launches.",
        },
        {
            q: "Can I showcase the same ethnic outfit across different occasion themes?",
            a: "Yes. The same garment can be presented in festive, casual, bridal, or editorial themes — giving you multiple market-ready visuals from a single product upload.",
        },
        {
            q: "Is AI women's ethnic wear photography compatible with major marketplaces?",
            a: "Absolutely. Outputs are fully optimized for Myntra, Meesho, Nykaa Fashion, Ajio, Amazon India, and Flipkart image requirements.",
        },
    ];

    return (
        <main className="min-h-screen bg-dark-bg">
            <FashionCategoryHero
                category={category}
                backgroundImage="/image/fashion/women-ethinic-wear/women-ethinic-wear.jpg"
            />

            <JewelleryCategorySEO title="Why Women's Ethnic Wear Product Photography Matters for Ecommerce">
                <p className="text-lg text-gray-300 leading-relaxed">
                    Women&apos;s ethnic wear is the single largest category in Indian fashion ecommerce. Sarees, lehengas, suits, and anarkalis represent not just everyday purchases but high-consideration, high-value buys for festivals, weddings, and special occasions — where visual presentation is everything.
                </p>
                <div className="text-left">
                    <h3 className="text-xl font-semibold mb-4">Strong women&apos;s ethnic wear visuals directly influence:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Customer ability to judge drape, fit, and fabric quality</li>
                        <li>Visibility of embroidery, print, and detailing</li>
                        <li>Occasion-appropriate styling and presentation</li>
                        <li>Conversion rates across marketplace and D2C platforms</li>
                    </ul>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                    AI women&apos;s ethnic wear photography provides model-on quality for every garment in your catalog — at the scale your collection demands and at a fraction of traditional shoot costs.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Explore the full <Link href="/product-shoot/fashion" className="font-bold text-neon-green hover:underline">AI fashion product photography</Link> range for all categories we support.
                </p>
                <p className="text-xl font-bold mt-8 text-white">
                    India&apos;s largest fashion category deserves the best visual production. AIVX delivers it.
                </p>
            </JewelleryCategorySEO>

            <FashionCategoryOverview category={category} />

            {/* <JewelleryCategoryThemes
                category={category}
                themes={[
                    { name: 'Textured Plaster Studio Gradient', image: '/image/fashion/women-ethinic-wear/theme/textured-plaster-studio-gradient.png' },
                    { name: 'Sage Gradient Studio Spotlight', image: '/image/fashion/women-ethinic-wear/theme/sage-gradient-studio-spotlight.png' },
                    { name: 'Cool Light Grey Minimal Studio', image: '/image/fashion/women-ethinic-wear/theme/cool-light-grey-minimal-studio.png' },
                    { name: 'Dusty Coral Plaster Corner Studio', image: '/image/fashion/women-ethinic-wear/theme/dusty-coral-plaster-corner-studio.png' },
                    { name: 'Studio White BG', image: '/image/fashion/women-ethinic-wear/theme/studio-white-bg.png' },
                    // { name: 'Night Gala', image: '/image/fashion-photography-example.png' },
                ]}
            /> */}

            <JewelleryCategoryAspectRatios category={category} />

            <JewelleryCategorySEO title="How AI Women's Ethnic Wear Photography Improves Speed, Cost & Scalability">
                <p className="text-lg text-gray-300 leading-relaxed">
                    Ethnic wear shoots — especially bridal and festive collections — traditionally require elaborate setups, professional stylists, experienced makeup artists, and full shoot days. For brands releasing multiple collections per season, this becomes a significant operational and financial constraint.
                </p>
                <div className="text-left mt-4 pt-2">
                    <h3 className="text-xl font-semibold mb-4">Key advantages of AI women&apos;s ethnic wear photography:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>Launch bridal and festive collections on time, every time</li>
                        <li>No per-shoot model, stylist, or makeup artists costs</li>
                        <li>Multiple occasion themes available instantly</li>
                        <li>Consistent premium quality across hundreds of ethnic SKUs</li>
                    </ul>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mt-6">
                    Whether you sell 20 sarees or 2,000 lehengas, AIVX scales your visual production without scaling your overhead — so every garment gets the photography it deserves.
                </p>
                <p className="text-xl font-bold mt-8 text-white">
                    From everyday suits to bridal lehengas — every ethnic garment deserves model-quality photography.
                </p>
            </JewelleryCategorySEO>

            <JewelleryCategoryEcommerce category={category} />

            <JewelleryCategoryFAQ
                title="Frequently Asked Questions – AI Women's Ethnic Wear Product Photography"
                faqs={faqs}
            />

            <JewelleryCategoryFinalCTA category={category} />
        </main>
    );
}
