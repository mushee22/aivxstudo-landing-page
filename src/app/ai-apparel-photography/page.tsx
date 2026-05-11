import AIApparelHero from '@/components/AIApparelHero';
import ApparelCaseStudy from '@/components/ApparelCaseStudy';
import ApparelClientShowcase from '@/components/ApparelClientShowcase';
import ApparelFAQ from '@/components/ApparelFAQ';
import ApparelFinalCTA from '@/components/ApparelFinalCTA';
import ApparelProblemSolution from '@/components/ApparelProblemSolution';
import ApparelServices from '@/components/ApparelServices';
import FashionTestimonials from '@/components/FashionTestimonials';
import PricingIndividual from '@/components/PricingIndividual';
import PricingPlans from '@/components/PricingPlans';
import TrustMetrics from '@/components/TrustMetrics';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Apparel Photography | AIVX Studio',
    description: 'AI-powered apparel product photography for clothing, ethnic wear, western wear, and fashion accessories. Generate premium ecommerce images and short videos without booking a model.',
    alternates: {
        canonical: 'https://aivx.in/ai-apparel-photography',
    },
    openGraph: {
        title: 'AI Apparel Photography | AIVX Studio',
        description: 'Create studio-quality apparel and fashion images with AI models. Built for ecommerce and modern fashion brands.',
        url: 'https://aivx.in/ai-apparel-photography',
        siteName: 'AIVX',
        images: [
            {
                url: '/image/fashion-photography-example.png',
                width: 1200,
                height: 630,
                alt: 'AI Apparel Photography',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Apparel Photography | AIVX Studio',
        description: 'AI-powered apparel photography for ecommerce-ready images and videos — no models needed.',
        images: ['/image/fashion-photography-example.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AIApparelPhotography() {
    return (
        <main className="bg-[#0A0A0A] min-h-screen flex flex-col">
            <AIApparelHero />
            <TrustMetrics />
            <ApparelClientShowcase />
            <ApparelProblemSolution />
            <ApparelServices />
            <PricingPlans />
            <PricingIndividual />
            <ApparelCaseStudy />
            <FashionTestimonials />
            <ApparelFAQ />
            <ApparelFinalCTA />
        </main>
    );
}
