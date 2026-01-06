'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Palette } from 'lucide-react';

interface JewelleryCategoryHeroProps {
    category: string;
    backgroundImage?: string;
}

export default function JewelleryCategoryHero({ category, backgroundImage }: JewelleryCategoryHeroProps) {
    const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);

    // Default image if none provided
    const heroImage = backgroundImage || "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop";

    return (
        <section className="relative w-full bg-dark-bg overflow-hidden border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 lg:py-32">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content (60%) */}
                    <div className="w-full lg:w-3/5 flex flex-col items-start text-left z-10">
                        <span className="text-neon-green font-medium tracking-widest text-sm mb-6 uppercase">
                            AI Jewellery Product Shoot
                        </span>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Studio-Quality <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
                                {displayCategory} Visuals
                            </span> <br />
                            Generated Using AI
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                            High-end images and reel videos for ecommerce, ads, and social media — without studios, models, or long shoots.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                            <Link
                                href="/contact"
                                className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            >
                                Contact Sales
                                <ArrowRight size={20} />
                            </Link>
                            <button
                                onClick={() => {
                                    const gallerySection = document.getElementById('theme-gallery');
                                    gallerySection?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all hover:-translate-y-1 cursor-pointer"
                            >
                                View Themes
                                <Palette size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right Visual (40%) */}
                    <div className="w-full lg:w-2/5 relative">
                        {/* Soft Gradient Backdrop */}
                        <div className="absolute inset-0 bg-linear-to-tr from-neon-green/20 to-purple-500/20 rounded-[2rem] blur-3xl opacity-30 transform scale-110" />

                        <div className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src={heroImage}
                                alt={`${displayCategory} product shoot example`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />

                            {/* Visual Overlay Gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
