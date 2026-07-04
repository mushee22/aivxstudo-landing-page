'use client';

import { X, Check, ArrowRight, DollarSign, Clock, Sparkles, Image as ImageIcon, Zap, Users, Layers, Target } from 'lucide-react';
import CTAbtn from './CTAbtn';

const problems = [
    { icon: DollarSign, label: 'High studio costs', text: '₹30K-1.5L per shoot session' },
    { icon: Users, label: 'Photographer + model expenses', text: '₹25K-60K additional costs' },
    { icon: Clock, label: 'Slow campaign turnaround', text: '3-4 weeks delay launches' },
    { icon: X, label: 'Poor scalability', text: 'Limited variations per shoot' },
    { icon: Layers, label: 'Limited visual variations', text: 'Few marketing options' },
    { icon: ImageIcon, label: 'Inconsistent catalogue quality', text: 'Hurts brand perception' },
    { icon: Sparkles, label: 'Weak ad creatives', text: 'Reduced campaign performance' },
];

const solutions = [
    { icon: Sparkles, label: 'AI image generation', text: '52 credits (4K)', highlight: true },
    { icon: Zap, label: 'AI regeneration', text: '32 credits (4K)', highlight: true },
    { icon: ImageIcon, label: 'AI video generation', text: 'Starting 62 credits', highlight: true },
    { icon: Target, label: 'Luxury context & styling', text: 'Place products in elegant backdrops instantly', highlight: false },
    { icon: Check, label: 'Ecommerce-ready exports', text: 'Perfect for Shopify, Amazon, and marketplaces', highlight: false },
    { icon: Layers, label: 'Unlimited themes & variations', text: 'Infinite creative options for matching trends', highlight: false },
    { icon: DollarSign, label: 'Subscription credit packages', text: '90% cost savings', highlight: false },
    { icon: Clock, label: 'Faster product launches', text: 'Same-day turnaround', highlight: false },
];

export default function AccessoriesProblemSolution() {
    return (
        <section className="relative w-full bg-[#0A0A0A] py-16 md:py-20 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Traditional Shoots vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">AI Photography</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        See why brands are switching from expensive studios to AI-powered accessories photography.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10">

                    {/* Problems */}
                    <div className="relative">
                        <div className="sticky top-24">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                                    <X size={20} className="text-red-400" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">Traditional Problems</h3>
                            </div>

                            <div className="space-y-3">
                                {problems.map((problem, i) => {
                                    const Icon = problem.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="group bg-gradient-to-br from-red-500/5 to-transparent rounded-xl p-5 border border-red-500/10 hover:border-red-500/20 transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                                                    <Icon size={18} className="text-red-400" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-white font-semibold mb-1">{problem.label}</p>
                                                    <p className="text-sm text-gray-400">{problem.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="relative">
                        <div className="sticky top-24">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
                                    <Check size={20} className="text-neon-green" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">AIVX Solutions</h3>
                            </div>

                            <div className="space-y-3">
                                {solutions.map((solution, i) => {
                                    const Icon = solution.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="group bg-gradient-to-br from-neon-green/5 to-transparent rounded-xl p-5 border border-neon-green/10 hover:border-neon-green/25 hover:shadow-lg hover:shadow-neon-green/5 transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-neon-green/10 flex items-center justify-center shrink-0 group-hover:bg-neon-green/20 transition-colors">
                                                    <Icon size={18} className="text-neon-green" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <p className="text-white font-semibold">{solution.label}</p>
                                                        {solution.highlight && (
                                                            <span className="text-[10px] font-bold text-neon-green bg-neon-green/10 px-2 py-0.5 rounded-full">CREDIT</span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-gray-400">{solution.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>

                {/* CTA */}
                <div className="text-center pt-8 border-t border-white/5">
                    <CTAbtn
                        href="https://studio.aivx.in/signup"
                        className="inline-flex items-center gap-2 bg-neon-green text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-lg shadow-neon-green/20 hover:-translate-y-1"
                    >
                        Start Saving 90% Today
                        <ArrowRight size={20} />
                    </CTAbtn>
                    <p className="text-sm text-gray-500 mt-4">No credit card required · Start with free credits</p>
                </div>

            </div>

            {/* Background */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-green/5 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
}
