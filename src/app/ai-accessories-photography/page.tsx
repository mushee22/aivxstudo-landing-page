import type { Metadata } from 'next';
import AIAccessoriesHero from '@/components/AIAccessoriesHero';
import TrustMetrics from '@/components/TrustMetrics';
import AccessoriesClientShowcase from '@/components/AccessoriesClientShowcase';
import AccessoriesProblemSolution from '@/components/AccessoriesProblemSolution';
import AccessoriesServices from '@/components/AccessoriesServices';
import PricingPlans from '@/components/PricingPlans';
import PricingIndividual from '@/components/PricingIndividual';
import AccessoriesCaseStudy from '@/components/AccessoriesCaseStudy';
import Testimonials from '@/components/Testimonials';
import AccessoriesFAQ from '@/components/AccessoriesFAQ';
import AccessoriesFinalCTA from '@/components/AccessoriesFinalCTA';

export const metadata: Metadata = {
    title: 'AI Accessories Product Photography | AIVX Studio',
    description: 'AI-powered accessories product photography for bags, watches, perfumes, and more. Generate premium ecommerce images faster and cost-effectively.',
    alternates: {
        canonical: 'https://aivx.in/ai-accessories-photography',
    },
    openGraph: {
        title: 'AI Accessories Product Photography | AIVX Studio',
        description: 'Create studio-quality accessories images using AI. Built for ecommerce and modern accessories brands.',
        url: 'https://aivx.in/ai-accessories-photography',
        siteName: 'AIVX',
        images: [
            {
                url: '/image/hero/accessories/bag-hero.png',
                width: 1200,
                height: 630,
                alt: 'AI Accessories Product Photography',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Accessories Product Photography | AIVX Studio',
        description: 'AI-powered accessories product photography for ecommerce-ready images and videos.',
        images: ['/image/hero/accessories/bag-hero.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AIAccessoriesProductPhotography() {
    return (
        <main className="bg-[#0A0A0A] min-h-screen flex flex-col">
            <AIAccessoriesHero />
            <TrustMetrics />
            <AccessoriesClientShowcase />
            <AccessoriesProblemSolution />
            <AccessoriesServices />
            <PricingPlans />
            <PricingIndividual />
            <AccessoriesCaseStudy />
            <Testimonials />
            <AccessoriesFAQ />
            <AccessoriesFinalCTA />
        </main>
    );
}
