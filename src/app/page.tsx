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
  title: 'AI Jewellery Product Shoot Studio | AIVX',
  description: 'Create studio-quality jewellery images and reel videos using AI. AIVX helps jewellery brands generate premium visuals faster and at lower cost.',
  alternates: {
    canonical: 'https://aivx.in/',
  },
  openGraph: {
    title: 'AI Jewellery Product Shoot Studio | AIVX',
    description: 'AI-powered jewellery product shoot platform for images and short videos, built for ecommerce brands.',
    url: 'https://aivx.in/',
    siteName: 'AIVX',
    images: [
      {
        url: '/images/jewellery-hero.jpg', // Using a premium jewellery placeholder as requested
        width: 1200,
        height: 630,
        alt: 'AI Jewellery Product Shoot Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Jewellery Product Shoot Studio | AIVX',
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

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link
          href="/contact"
          className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold shadow-2xl transition-all hover:scale-105 cursor-pointer"
        >
          Contact Us
        </Link>
      </div>

    </main>
  );
}
