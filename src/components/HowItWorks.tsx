'use client';

import { Upload, Palette, Sparkles } from 'lucide-react';
import Link from 'next/link';

const steps = [
    {
        icon: Upload,
        title: "Upload Product Image",
        desc: "Upload a simple jewellery product image. No studio, no photographer, no models required."
    },
    {
        icon: Palette,
        title: "Choose Theme & Model",
        desc: "Select jewellery themes, model type (Indian or International), and output type (image or video)."
    },
    {
        icon: Sparkles,
        title: "Generate Image & Video",
        desc: "Get studio-quality images and 5s / 15s reel videos, ready for ecommerce and social media."
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 px-6 bg-zinc-900 relative overflow-hidden">
            {/* Background: Using zinc-900 for "neutral" contrast against the black hero, keeping dark theme consistency */}

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">How AIVX Works</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        From simple product images to studio-quality jewellery visuals in minutes.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col items-center text-center">

                            {/* Step Number */}
                            <div className="absolute top-4 right-6 text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                                {index + 1}
                            </div>

                            {/* Icon */}
                            <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green mb-6 group-hover:scale-110 transition-transform duration-300">
                                <step.icon size={32} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {step.desc}
                            </p>

                        </div>
                    ))}
                </div>

                {/* CTA */}
                {/* <div className="text-center">
                    <Link
                        href="/#pricing"
                        className="inline-block bg-neon-green text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] hover:-translate-y-1"
                    >
                        Get Started
                    </Link>
                </div> */}

            </div>
        </section>
    );
}
