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
  title: 'AIVX Studio | AI Jewelry Product Photography Software',
  description: 'AI jewellery photography software for rings, necklaces, and more. Create studio-quality product images instantly without traditional photoshoots using AIVX Studio',
  keywords: 'AI jewelry photography, jewelry product shoot software, AI jewelry images, ring photography software, bracelet photography AI, necklace product photography, earring photography AI, jewelry photoshoot automation',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AIVX Studio | AI Jewelry Product Photography Software',
    description: 'AI jewellery photography software for rings, necklaces, and more. Create studio-quality product images instantly without traditional photoshoots using AIVX Studio',
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
    title: 'AIVX Studio | AI Jewelry Product Photography Software',
    description: 'AI-powered jewelry photography software for rings, necklaces, and more. Create professional product images instantly without physical photoshoots with AIVX Studio',
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
