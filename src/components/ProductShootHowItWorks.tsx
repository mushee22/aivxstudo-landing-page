'use client';

import { Upload, Tag, Palette, Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
    {
        num: "01",
        icon: Upload,
        title: "Upload Product Image",
        desc: "Upload a basic jewellery product image. No studio setup, no professional camera required."
    },
    {
        num: "02",
        icon: Tag,
        title: "Select Jewellery Type",
        desc: "Choose from categories like Ring, Ear Ring, Necklace, or Bangle for correct AI styling."
    },
    {
        num: "03",
        icon: Palette,
        title: "Choose Theme & Model",
        desc: "Select a visual theme (Studio, Lifestyle) and choose between Indian or International models."
    },
    {
        num: "04",
        icon: Download,
        title: "Generate & Download",
        desc: "Get studio-quality images and 5s/15s video reels instantly ready for ecommerce."
    }
];

export default function ProductShootHowItWorks() {
    return (
        <section className="py-24 px-6 bg-zinc-900 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        How AI Jewellery Product Shoot Works
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A simple, repeatable workflow designed for jewellery brands and ecommerce teams.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-white/10 -z-0 w-[80%] mx-auto" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            {/* Icon Circle */}
                            <div className="w-20 h-20 rounded-full bg-dark-surface border-4 border-zinc-800 flex items-center justify-center mb-6 shadow-xl group-hover:border-neon-green/50 group-hover:scale-110 transition-all duration-300">
                                <step.icon size={32} className="text-white" />
                            </div>

                            {/* Number */}
                            <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-neon-green mb-4">
                                Step {step.num}
                            </div>

                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <Link
                        href="#categories"
                        className="inline-flex items-center gap-2 bg-neon-green text-black px-8 py-4 rounded-full font-bold hover:bg-lime-300 transition-colors shadow-[0_0_20px_rgba(163,230,53,0.3)]"
                    >
                        Explore Jewellery Examples
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
