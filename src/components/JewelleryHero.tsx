'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function JewelleryHero() {

    const handleViewCategories = () => {
        const section = document.getElementById('categories');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section className="relative w-full bg-[#0A0A0A] text-white pt-32 lg:pt-40 pb-16 lg:pb-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Content */}
                <div className="space-y-8 z-10 order-2 lg:order-1">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-neon-green"></span>
                        <span className="text-neon-green font-medium tracking-widest uppercase text-xs lg:text-sm">
                            Jewellery Product Shoot
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
                        AI Jewellery <br />
                        <span className="text-neutral-500">Product Shoot Studio</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg text-neutral-400 max-w-xl leading-relaxed font-light">
                        Create studio-quality jewellery images and reel videos using AI — faster, scalable, and cost-effective.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button
                            onClick={handleViewCategories}
                            className="inline-flex cursor-pointer items-center justify-center gap-2 bg-neon-green text-black px-8 py-4 rounded-full font-bold text-base hover:bg-lime-300 transition-all shadow-lg shadow-neon-green/20 hover:-translate-y-0.5"
                        >
                            View Jewellery Categories
                            <ArrowRight size={18} />
                        </button>
                        <Link
                            href="/pricing"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base border border-white/20 hover:bg-white hover:text-black transition-all"
                        >
                            Get Pricing
                        </Link>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden border border-white/10 group order-1 lg:order-2">
                    <div className="absolute inset-0 bg-neutral-900 animate-pulse" /> {/* Placeholder loading state */}
                    <Image
                        src="/images/jewellery-hero.jpg"
                        alt="AI Jewellery Product Shoot"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority
                    />
                    {/* Subtle Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
