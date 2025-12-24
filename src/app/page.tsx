'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyAivx from '@/components/WhyAivx';
import HowItWorks from '@/components/HowItWorks';
import BeforeAfter from '@/components/BeforeAfter';
import VideoShowcase from '@/components/VideoShowcase';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-neon-green selection:text-black font-sans">
      <Navbar />

      <Hero />

      <HowItWorks />

      <BeforeAfter />

      <VideoShowcase />

      <Features />

      <WhyAivx />

      <Pricing />

      <FAQ />

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link
          href="/contact"
          className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold shadow-2xl transition-all hover:scale-105 cursor-pointer"
        >
          Contact Us
        </Link>
      </div>

      <Footer />
    </main>
  );
}
