'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProductShootHero() {
    return (
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black border-b border-white/5">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1629224316810-9d8805b95076?q=80&w=2070&auto=format&fit=crop"
                    alt="Jewellery Product Shoot Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="max-w-3xl space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-sm font-medium">
                        <span>For Jewellery Brands</span>
                    </div>

                    {/* Content */}
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        AI Jewellery <br />
                        <span className="text-neon-green">Product Shoot</span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                        Create studio-quality jewellery images and videos using AI — faster and at a fraction of traditional photoshoot cost.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="#categories"
                            className="bg-neon-green text-black px-8 py-3.5 rounded-full font-bold hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] flex items-center justify-center gap-2"
                        >
                            Explore Jewellery
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/#pricing"
                            className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center"
                        >
                            Get Pricing
                        </Link>
                    </div>
                </div>
            </div>

            {/* Subtle SEO-friendly bottom keywords */}
            <div className="absolute bottom-6 left-0 right-0 text-center opacity-20 pointer-events-none">
                <p className="text-xs text-white">
                    Jewellery Product Photography • AI Jewellery Product Shoot • Low Cost Jewellery Photoshoot
                </p>
            </div>
        </section>
    );
}
