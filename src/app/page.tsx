import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import WhyAivx from '@/components/WhyAivx';
import HowItWorks from '@/components/HowItWorks';
import JewelleryCategories from '@/components/JewelleryCategories';
import BeforeAfter from '@/components/BeforeAfter';
import VideoShowcase from '@/components/VideoShowcase';
import Testimonials from '@/components/Testimonials';
import HomeLatestArticles from '@/components/HomeLatestArticles';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Jewellery Product Shoot | AIVX | Studio',
  description: 'Create studio-quality jewellery images and reel videos using AI. AIVX helps jewellery brands generate premium visuals faster and at lower cost.',
  alternates: {
    canonical: 'https://aivx.in/',
  },
  openGraph: {
    title: 'AI Jewellery Product Shoot | AIVX | Studio',
    description: 'AI-powered jewellery product shoot platform for images and short videos, built for ecommerce brands.',
    url: 'https://aivx.in/',
    siteName: 'AIVX',
    images: [
      {
        url: '/images/jewellery-hero.jpg', // Using a premium jewellery placeholder as requested
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
    title: 'AI Jewellery Product Shoot | AIVX | Studio',
    description: 'Create high-quality jewellery images and videos using AI. Faster, scalable, and cost-effective.',
    images: ['/images/jewellery-hero.jpg'], // Consistent with OG image
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
