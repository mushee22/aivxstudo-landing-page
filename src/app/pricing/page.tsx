import PricingHero from '@/components/PricingHero';
import PricingPlans from '@/components/PricingPlans';
import PricingIndividual from '@/components/PricingIndividual';
import PricingComparison from '@/components/PricingComparison';
import PricingFAQ from '@/components/PricingFAQ';

export const metadata = {
    title: 'AI Jewellery Product Shoot Pricing | AIVX',
    description: 'Transparent pricing for AI-powered jewellery product shoots. Create premium jewellery images and videos at a fraction of traditional shoot costs.',
    alternates: {
        canonical: 'https://aivx.in/pricing',
    },
    openGraph: {
        title: 'AI Jewellery Product Shoot Pricing | AIVX',
        description: 'Affordable AI jewellery product shoot pricing for ecommerce-ready images and videos.',
        url: 'https://aivx.in/pricing',
        type: 'website',
        images: [
            {
                url: '/images/jewellery-hero.jpg', // Using premium visual as requested
                width: 1200,
                height: 630,
                alt: 'AI Jewellery Product Shoot Pricing',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Jewellery Product Shoot Pricing | AIVX',
        description: 'Low-cost AI jewellery product shoots for premium ecommerce visuals.',
        images: ['/images/jewellery-hero.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PricingPage() {
    return (
        <main className="bg-dark-bg min-h-screen">
            <PricingHero />

            <PricingPlans />

            <PricingIndividual />

            <PricingComparison />

            <PricingFAQ />
        </main>
    );
}
