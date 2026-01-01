'use client';

import { X, Check } from 'lucide-react';
import Link from 'next/link';

export default function PricingComparison() {
    return (
        <section className="py-24 px-6 bg-dark-bg border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Cost Comparison
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        See how much you save by switching from traditional jewellery photoshoots to AIVX.
                    </p>
                </div>

                {/* Comparison Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

                    {/* Traditional Jewellery Product Shoot */}
                    <div className="p-8 rounded-3xl bg-dark-bg border border-white/5 relative overflow-hidden group hover:border-red-400/30 transition-colors">
                        <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />
                        <h3 className="text-2xl font-bold text-white mb-6">Traditional Jewellery Product Shoot</h3>

                        <ul className="space-y-6">
                            {[
                                "High studio rental cost",
                                "Photographer & equipment charges",
                                "Model hiring & coordination",
                                "Editing & retouching cost",
                                "Turnaround time: days or weeks",
                                "Limited variations per shoot"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-red-400/10 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                                        <X size={14} />
                                    </div>
                                    <span className="text-gray-400 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* AIVX AI Product Shoot */}
                    <div className="p-8 rounded-3xl bg-linear-to-br from-neon-green/5 to-transparent border border-neon-green/30 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(163,230,53,0.1)] transition-shadow">
                        <div className="absolute top-0 left-0 w-full h-1 bg-neon-green" />
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-white">AIVX AI Product Shoot</h3>
                            <span className="px-3 py-1 bg-neon-green text-black text-xs font-bold rounded-full">RECOMMENDED</span>
                        </div>

                        <ul className="space-y-6">
                            {[
                                "Very low cost per image & video",
                                "No studio or photographer required",
                                "No models needed",
                                "Instant image & video generation",
                                "Unlimited themes & variations",
                                "Scales easily for large catalogs"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-neon-green flex items-center justify-center text-black shrink-0 mt-0.5">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-white text-lg font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/5">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-neon-green mb-2">70-80%</div>
                        <div className="text-gray-400">Cost Savings</div>
                    </div>
                    <div className="text-center border-l-0 border-r-0 sm:border-l sm:border-r border-white/5 py-4 sm:py-0">
                        <div className="text-4xl md:text-5xl font-bold text-neon-green mb-2">Minutes</div>
                        <div className="text-gray-400">vs Days</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-neon-green mb-2">10×</div>
                        <div className="text-gray-400">More Variations</div>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/dashboard"
                        className="bg-neon-green text-black px-8 py-3.5 rounded-full font-bold hover:bg-lime-300 transition-colors shadow-lg text-center"
                    >
                        Switch to AIVX
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-transparent border border-white/20 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/5 transition-colors text-center"
                    >
                        Contact Sales
                    </Link>
                </div>
            </div>
        </section>
    );
}
