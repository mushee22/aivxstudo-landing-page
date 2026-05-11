'use client';

import { Check, RefreshCcw, Sparkles, Video } from 'lucide-react';

export default function PricingIndividual() {
    return (
        <section className="pb-24 px-6 bg-dark-bg border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="h-px w-8 bg-neon-green"></span>
                        <span className="text-neon-green font-medium tracking-widest uppercase text-xs">
                            Pay Per Use
                        </span>
                        <span className="h-px w-8 bg-neon-green"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Individual Pricing
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Flexible credit-based pricing for images and videos without subscriptions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

                    {/* AI Image Generation */}
                    <div className="relative p-6 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-neon-green/40 transition-all duration-300 group overflow-hidden">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                        <div className="relative">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-neon-green/10 flex items-center justify-center shrink-0">
                                    <Sparkles size={24} className="text-neon-green" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">AI Image Generation</h3>
                                    <p className="text-gray-400 text-xs mt-0.5">Studio-quality images</p>
                                </div>
                            </div>

                            {/* Compact pricing table */}
                            <div className="mb-6 overflow-hidden rounded-xl border border-neon-green/20">
                                <div className="grid grid-cols-2 divide-x divide-white/10">
                                    <div className="p-4 bg-gradient-to-br from-neon-green/10 to-neon-green/5 text-center">
                                        <div className="text-2xl font-bold text-white mb-1">52</div>
                                        <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Credits</div>
                                        <span className="inline-block px-2 py-0.5 rounded-full bg-neon-green/20 text-neon-green text-[10px] font-bold">4K</span>
                                    </div>
                                    <div className="p-4 bg-white/[0.02] text-center">
                                        <div className="text-2xl font-bold text-white mb-1">32</div>
                                        <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Credits</div>
                                        <span className="inline-block px-2 py-0.5 rounded-full bg-white/10 text-gray-300 text-[10px] font-bold">2K</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {[
                                    "Multiple themes available",
                                    "Ecommerce-ready output",
                                    "High resolution download",
                                    "Instant generation"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-300 text-xs">
                                        <Check size={12} className="text-neon-green shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* AI Video Generation */}
                    <div className="relative p-6 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-purple-500/40 transition-all duration-300 group overflow-hidden">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                        <div className="relative">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                                    <Video size={24} className="text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">AI Video Generation</h3>
                                    <p className="text-gray-400 text-xs mt-0.5">Multi-duration videos</p>
                                </div>
                            </div>

                            {/* Compact pricing table - single unified table */}
                            <div className="mb-6 overflow-hidden rounded-xl border border-purple-500/20">
                                <table className="w-full text-center">
                                    <thead>
                                        <tr className="bg-purple-500/10 border-b border-purple-500/10">
                                            <th className="px-2 py-2 text-[10px] font-bold text-purple-300 uppercase tracking-wider text-left">Model</th>
                                            <th className="px-2 py-2 text-[10px] font-bold text-purple-300 uppercase tracking-wider">5s</th>
                                            <th className="px-2 py-2 text-[10px] font-bold text-purple-300 uppercase tracking-wider">10s</th>
                                            <th className="px-2 py-2 text-[10px] font-bold text-purple-300 uppercase tracking-wider">15s</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        <tr className="bg-white/[0.02]">
                                            <td className="px-2 py-2.5 text-xs font-medium text-white text-left">Standard</td>
                                            <td className="px-2 py-2.5 text-base font-bold text-white">62 <span className="text-[10px] font-light uppercase text-gray-500">Credits</span></td>
                                            <td className="px-2 py-2.5 text-base font-bold text-white">104 <span className="text-[10px] font-light uppercase text-gray-500">Credits</span></td>
                                            <td className="px-2 py-2.5 text-xs text-gray-600">N/A</td>
                                        </tr>
                                        <tr className="bg-white/[0.02]">
                                            <td className="px-2 py-2.5 text-xs font-medium text-white text-left">Pro</td>
                                            <td className="px-2 py-2.5 text-base font-bold text-white">82 <span className="text-[10px] font-light uppercase text-gray-500">Credits</span></td>
                                            <td className="px-2 py-2.5 text-base font-bold text-white">164 <span className="text-[10px] font-light uppercase text-gray-500">Credits</span></td>
                                            <td className="px-2 py-2.5 text-xs text-gray-600">N/A</td>
                                        </tr>
                                        <tr className="bg-gradient-to-br from-purple-500/5 to-transparent">
                                            <td className="px-2 py-2.5 text-xs font-medium text-white text-left">Multishot</td>
                                            <td className="px-2 py-2.5 text-base font-bold text-white">119 <span className="text-[10px] font-light uppercase text-gray-500">Credits</span></td>
                                            <td className="px-2 py-2.5 text-base font-bold text-white">199 <span className="text-[10px] font-light uppercase text-gray-500">Credits</span></td>
                                            <td className="px-2 py-2.5 text-base font-bold text-white">249 <span className="text-[10px] font-light uppercase text-gray-500">Credits</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <ul className="space-y-2">
                                {[
                                    "Reel-friendly vertical format",
                                    "Multiple angles & styles",
                                    "Social media ready",
                                    "Smooth motion AI"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-300 text-xs">
                                        <Check size={12} className="text-purple-400 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* AI Regeneration */}
                    <div className="relative p-6 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all duration-300 group overflow-hidden">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                        <div className="relative">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <RefreshCcw size={24} className="text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">AI Regeneration</h3>
                                    <p className="text-gray-400 text-xs mt-0.5">Refine & iterate</p>
                                </div>
                            </div>

                            {/* Compact pricing table */}
                            <div className="mb-6 overflow-hidden rounded-xl border border-blue-500/20">
                                <div className="grid grid-cols-2 divide-x divide-white/10">
                                    <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 text-center">
                                        <div className="text-2xl font-bold text-white mb-1">32</div>
                                        <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Credits</div>
                                        <span className="inline-block px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold">4K</span>
                                    </div>
                                    <div className="p-4 bg-white/[0.02] text-center">
                                        <div className="text-2xl font-bold text-white mb-1">22</div>
                                        <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Credits</div>
                                        <span className="inline-block px-2 py-0.5 rounded-full bg-white/10 text-gray-300 text-[10px] font-bold">2K</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {[
                                    "Refine details",
                                    "Background changes",
                                    "Quick iterations",
                                    "Maintain consistency"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-300 text-xs">
                                        <Check size={12} className="text-blue-400 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
