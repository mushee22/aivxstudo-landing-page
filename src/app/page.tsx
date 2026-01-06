import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import WhyAivx from '@/components/WhyAivx';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import HomeLatestArticles from '@/components/HomeLatestArticles';

import dynamic from 'next/dynamic';

const JewelleryCategories = dynamic(() => import('@/components/JewelleryCategories'));

const BeforeAfter = dynamic(() => import('@/components/BeforeAfter'));

const VideoShowcase = dynamic(() => import('@/components/VideoShowcase'));

export const metadata: Metadata = {
  metadataBase: new URL('https://aivx.in'),
  title: 'AI Jewellery Product Shoot & Video Services | AIVX Studio',
  description: 'Create studio-quality jewellery images and reel videos using AI. AIVX helps jewellery brands generate premium visuals faster and at lower cost.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI Jewellery Product Shoot & Video Services | AIVX Studio',
    description: 'AI-powered jewellery product shoot platform for images and short videos, built for ecommerce brands.',
    url: '/',
    siteName: 'AIVX',
    images: [
      {
        url: '/image/bangle-ai-generated-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Jewellery Product Shoot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Jewellery Product Shoot & Video Services | AIVX Studio',
    description: 'Create high-quality jewellery images and videos using AI. Faster, scalable, and cost-effective.',
    images: ['/image/bangle-ai-generated-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-neon-green selection:text-black font-sans">
      <HeroSection />

      <HowItWorks />

      <JewelleryCategories />

      <WhyAivx />

      <BeforeAfter />

      <VideoShowcase />

      <Testimonials />

      <HomeLatestArticles />
    </main>
  );
}
