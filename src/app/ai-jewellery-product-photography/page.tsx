import type { Metadata } from 'next';
import AIJewelleryHero from '@/components/AIJewelleryHero';
import TrustMetrics from '@/components/TrustMetrics';
import JewelleryClientShowcase from '@/components/JewelleryClientShowcase';
import JewelleryProblemSolution from '@/components/JewelleryProblemSolution';
import JewelleryServices from '@/components/JewelleryServices';
import PricingPlans from '@/components/PricingPlans';
import PricingIndividual from '@/components/PricingIndividual';
import JewelleryCaseStudy from '@/components/JewelleryCaseStudy';
import Testimonials from '@/components/Testimonials';
import JewelleryFAQ from '@/components/JewelleryFAQ';
import JewelleryFinalCTA from '@/components/JewelleryFinalCTA';

export const metadata: Metadata = {
    title: 'AI Jewellery Product Photography | AIVX Studio',
    description: 'AI-powered jewellery product photography for rings, necklaces, bangles, earrings, and more. Generate premium ecommerce images and short videos faster and cost-effectively.',
    alternates: {
        canonical: 'https://aivx.in/ai-jewellery-product-photography',
    },
    openGraph: {
        title: 'AI Jewellery Product Photography | AIVX Studio',
        description: 'Create studio-quality jewellery images and videos using AI. Built for ecommerce and modern jewellery brands.',
        url: 'https://aivx.in/ai-jewellery-product-photography',
        siteName: 'AIVX',
        images: [
            {
                url: '/image/bangle-ai-generated-image.png',
                width: 1200,
                height: 630,
                alt: 'AI Jewellery Product Photography',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Jewellery Product Photography | AIVX Studio',
        description: 'AI-powered jewellery product photography for ecommerce-ready images and videos.',
        images: ['/image/bangle-ai-generated-image.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AIJewelleryProductPhotography() {
    return (
        <main className="bg-[#0A0A0A] min-h-screen flex flex-col">
            <AIJewelleryHero />
            <TrustMetrics />
            <JewelleryClientShowcase />
            <JewelleryProblemSolution />
            <JewelleryServices />
            <PricingPlans />
            <PricingIndividual />
            <JewelleryCaseStudy />
            <Testimonials />
            <JewelleryFAQ />
            <JewelleryFinalCTA />
        </main>
    );
}
