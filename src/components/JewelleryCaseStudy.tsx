'use client';

import { TrendingDown, Zap, TrendingUp, CheckCircle2, Layers, Award, Target } from 'lucide-react';
import CTAbtn from './CTAbtn';

const results = [
    {
        icon: TrendingDown,
        title: '70–90% lower production costs',
        description: 'Eliminate studio rentals, photographer fees, and model expenses while scaling your visual content.',
        stat: '70–90%',
        statLabel: 'Cost Reduction',
    },
    {
        icon: Zap,
        title: 'Faster launches',
        description: 'Launch new collections in days instead of weeks with AI-powered photography workflows.',
        stat: '10X',
        statLabel: 'Faster',
    },
    {
        icon: TrendingUp,
        title: 'Increased ad creative performance',
        description: 'Test more creative variations and improve campaign ROI with unlimited visual content.',
        stat: '3X',
        statLabel: 'More Creatives',
    },
    {
        icon: CheckCircle2,
        title: 'Better ecommerce consistency',
        description: 'Maintain consistent visual quality across your entire product catalogue and marketplace listings.',
        stat: '100%',
        statLabel: 'Consistency',
    },
    {
        icon: Layers,
        title: 'More catalogue scalability',
        description: 'Scale from 100 to 10,000 product images without proportional cost increases.',
        stat: 'Unlimited',
        statLabel: 'Scalability',
    },
    {
        icon: Award,
        title: 'Higher brand trust',
        description: 'Professional, consistent visuals build customer confidence and reduce returns.',
        stat: '↑25%',
        statLabel: 'Trust Score',
    },
    {
        icon: Target,
        title: 'Improved premium positioning',
        description: 'Elevate your brand perception with luxury-quality visuals that match premium jewellery standards.',
        stat: 'Premium',
        statLabel: 'Quality',
    },
];

export default function JewelleryCaseStudy() {
    return (
        <section className="relative w-full bg-[#0A0A0A] py-12 md:py-16 px-6 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-8 md:mb-10">
                    <div className="inline-flex items-center gap-2 mb-3">
                        <span className="h-px w-8 bg-neon-green"></span>
                        <span className="text-neon-green font-medium tracking-widest uppercase text-xs">
                            Results That Matter
                        </span>
                        <span className="h-px w-8 bg-neon-green"></span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                        Jewellery Brands That Scale <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-green to-emerald-400">Faster</span> with AIVX
                    </h2>
                    <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
                        Real results from jewellery brands using AIVX to transform their visual content production and accelerate growth.
                    </p>
                </div>

                {/* Results Grid - Staggered Layout */}
                <div className="space-y-6">

                    {/* Row 1: First 3 cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {results.slice(0, 3).map((result, index) => {
                            const Icon = result.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-neon-green/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="absolute inset-0 bg-neon-green/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-start justify-between mb-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neon-green/10 text-neon-green group-hover:bg-neon-green group-hover:text-black transition-all duration-300">
                                            <Icon size={24} />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-neon-green">{result.stat}</div>
                                            <div className="text-xs text-gray-500">{result.statLabel}</div>
                                        </div>
                                    </div>
                                    <h3 className="relative text-lg font-bold text-white mb-2">
                                        {result.title}
                                    </h3>
                                    <p className="relative text-gray-400 text-sm leading-relaxed">
                                        {result.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Row 2: Next 4 cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {results.slice(3, 7).map((result, index) => {
                            const Icon = result.icon;
                            return (
                                <div
                                    key={index + 3}
                                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-neon-green/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="absolute inset-0 bg-neon-green/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-start justify-between mb-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neon-green/10 text-neon-green group-hover:bg-neon-green group-hover:text-black transition-all duration-300">
                                            <Icon size={24} />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-neon-green">{result.stat}</div>
                                            <div className="text-xs text-gray-500">{result.statLabel}</div>
                                        </div>
                                    </div>
                                    <h3 className="relative text-lg font-bold text-white mb-2">
                                        {result.title}
                                    </h3>
                                    <p className="relative text-gray-400 text-sm leading-relaxed">
                                        {result.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
