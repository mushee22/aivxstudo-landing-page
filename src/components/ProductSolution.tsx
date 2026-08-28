'use client';

import { Sparkles, ShoppingBag } from 'lucide-react';

export default function ProductSolution() {
    return (
        <section className="py-20 px-6 bg-dark-bg border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                <p className="text-xs font-semibold text-neon-green uppercase tracking-[0.2em] mb-8">What Is This</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden">

                    {/* Left: Main statement */}
                    <div className="p-8 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between gap-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                            Create AI Product Photos<br />
                            <span className="text-neon-green">Without a Photoshoot</span>
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed">
                            AIVX is an AI product photography platform built for fashion brands and jewellery businesses. Instead of arranging a studio, booking models, and waiting weeks for edited images, you generate product photos directly from a single image of your item.
                        </p>
                        <div className="pt-6 border-t border-white/5">
                            <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Marketplace Ready</p>
                            <div className="flex flex-wrap gap-2">
                                {['Shopify', 'Etsy', 'Amazon', 'Meesho', 'Instagram', 'WhatsApp'].map(p => (
                                    <span key={p} className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/8 hover:border-neon-green/30 hover:text-white transition-colors cursor-default">
                                        {p}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Two product types */}
                    <div className="flex flex-col divide-y divide-white/10">

                        <div className="p-8 md:p-10 lg:p-12 group hover:bg-white/[0.02] transition-colors duration-300 flex flex-col gap-5">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-neon-green/10 flex items-center justify-center text-neon-green">
                                    <Sparkles size={18} />
                                </div>
                                <h3 className="text-lg font-semibold text-white">AI Jewellery Photography</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Optimised for metal and gemstone surfaces. Handles rings, earrings, necklaces, bangles, pendants, and sets with realistic studio-quality lighting and reflections.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Rings', 'Earrings', 'Necklaces', 'Bangles', 'Pendants', 'Sets'].map(i => (
                                    <span key={i} className="text-xs text-gray-500 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">{i}</span>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 md:p-10 lg:p-12 group hover:bg-white/[0.02] transition-colors duration-300 flex flex-col gap-5">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                    <ShoppingBag size={18} />
                                </div>
                                <h3 className="text-lg font-semibold text-white">AI Fashion Photography</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Clothing, ethnic wear, sarees, kurtas, lehengas, and accessories — on AI models, Indian and international, without booking anyone.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Clothing', 'Ethnic Wear', 'Sarees', 'Kurtas', 'Lehengas', 'Accessories'].map(i => (
                                    <span key={i} className="text-xs text-gray-500 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">{i}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
