

import { Check } from 'lucide-react';

export default function AboutDifferentiation() {
    return (
        <section className="bg-black py-24 px-6 md:py-32 border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Context & Differentiators */}
                    <div className="space-y-16">
                        {/* Header */}
                        <div className="space-y-6">
                            <span className="text-neon-green font-medium tracking-widest text-xs uppercase bg-white/5 px-3 py-1 rounded-full">
                                Why AIVX
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                                What Makes AIVX Different
                            </h2>
                            <p className="text-xl text-neutral-400 font-light leading-relaxed">
                                Built exclusively for jewellery brands that need speed, quality, and scale — without the complexity of traditional shoots.
                            </p>
                        </div>

                        {/* Stacked Highlight Blocks */}
                        <div className="space-y-10">
                            <div className="pl-6 border-l-2 border-white/10 hover:border-neon-green transition-colors duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Jewellery-First AI</h3>
                                <p className="text-lg text-neutral-400 font-light">
                                    AIVX is trained specifically for jewellery lighting, reflections, and detailing — not generic products.
                                </p>
                            </div>

                            <div className="pl-6 border-l-2 border-white/10 hover:border-neon-green transition-colors duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Image + Video in One Workflow</h3>
                                <p className="text-lg text-neutral-400 font-light">
                                    Generate studio-quality images and reel-ready videos from a single product input.
                                </p>
                            </div>

                            <div className="pl-6 border-l-2 border-white/10 hover:border-neon-green transition-colors duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Built for Ecommerce</h3>
                                <p className="text-lg text-neutral-400 font-light">
                                    Every output is optimized for marketplaces, ads, and brand websites.
                                </p>
                            </div>

                            <div className="pl-6 border-l-2 border-white/10 hover:border-neon-green transition-colors duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">Scalable & Cost-Efficient</h3>
                                <p className="text-lg text-neutral-400 font-light">
                                    Create visuals for hundreds of products without repeated shoots or rising costs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Comparison Summary */}
                    <div className="lg:pt-24">
                        <div className="bg-neutral-900/50 rounded-3xl p-10 md:p-12 border border-white/5 space-y-8">
                            <h3 className="text-2xl font-bold text-white">
                                AIVX vs Traditional Product Shoots
                            </h3>

                            <ul className="space-y-6">
                                <li className="flex items-start md:items-center space-x-4">
                                    <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center shrink-0 mt-1 md:mt-0">
                                        <Check className="w-3.5 h-3.5 text-neon-green" strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-neutral-300 font-light">No studio or photographer required</span>
                                </li>
                                <li className="flex items-start md:items-center space-x-4">
                                    <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center shrink-0 mt-1 md:mt-0">
                                        <Check className="w-3.5 h-3.5 text-neon-green" strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-neutral-300 font-light">No model dependency</span>
                                </li>
                                <li className="flex items-start md:items-center space-x-4">
                                    <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center shrink-0 mt-1 md:mt-0">
                                        <Check className="w-3.5 h-3.5 text-neon-green" strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-neutral-300 font-light">Results in minutes, not weeks</span>
                                </li>
                                <li className="flex items-start md:items-center space-x-4">
                                    <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center shrink-0 mt-1 md:mt-0">
                                        <Check className="w-3.5 h-3.5 text-neon-green" strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-neutral-300 font-light">Multiple themes & formats instantly</span>
                                </li>
                                <li className="flex items-start md:items-center space-x-4">
                                    <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center shrink-0 mt-1 md:mt-0">
                                        <Check className="w-3.5 h-3.5 text-neon-green" strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-neutral-300 font-light">Predictable, low cost</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
