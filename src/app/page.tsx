import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ProductSolution from '@/components/ProductSolution';
import BuiltFor from '@/components/BuiltFor';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import HomeLatestArticles from '@/components/HomeLatestArticles';

import dynamic from 'next/dynamic';

const AIShowcase = dynamic(() => import('@/components/AIShowcase'));

const UseCases = dynamic(() => import('@/components/UseCases'));

const WhySwitch = dynamic(() => import('@/components/WhySwitch'));

const SearchIntent = dynamic(() => import('@/components/SearchIntent'));

const FAQ = dynamic(() => import('@/components/FAQ'));

const FinalCTA = dynamic(() => import('@/components/FinalCTA'));

export const metadata: Metadata = {
  metadataBase: new URL('https://aivx.in'),
  title: 'AI Product Photography for Fashion and Jewellery | AIVX',
  description: 'Create AI product photography for fashion and jewellery brands without a studio. Generate AI model photos, lookbooks, and marketplace-ready images for your brand — faster and for less cost than a traditional shoot.',
  keywords: 'AI jewellery photography · AI fashion photography · product photos without studio · AI model photos · jewellery photo editing · fashion lookbook generator',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI Product Photography for Fashion and Jewellery | AIVX',
    description: 'Create AI product photography for fashion and jewellery brands without a studio. Generate AI model photos, lookbooks, and marketplace-ready images for your brand — faster and for less cost than a traditional shoot.',
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
    title: 'AI Product Photography for Fashion and Jewellery | AIVX',
    description: 'Create AI product photography for fashion and jewellery brands without a studio. Generate AI model photos, lookbooks, and marketplace-ready images for your brand — faster and for less cost than a traditional shoot',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AIVX Studio",
            "url": "https://aivx.in",
            "applicationCategory": "PhotographyApplication",
            "operatingSystem": "Web",
            "description": "AI product photography platform for fashion and jewellery brands. Generate product photos, AI model images, and lookbooks without booking a studio.",
            "offers": { "@type": "Offer", "price": "999", "priceCurrency": "INR", "description": "Trial plan starting at ₹999. Base and Pro plans available at ₹4,999 and ₹9,999. Custom Enterprise pricing available." },
            "provider": { "@type": "Organization", "name": "AIVX", "url": "https://aivx.in" }
          })
        }}
      />

      <HeroSection />
      <ProductSolution />
      <HowItWorks />
      <BuiltFor />
      <AIShowcase />
      <UseCases />
      <WhySwitch />
      <SearchIntent />
      <Testimonials />
      <HomeLatestArticles />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

