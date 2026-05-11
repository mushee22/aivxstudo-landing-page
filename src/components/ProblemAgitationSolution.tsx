'use client';

import { AlertCircle, TrendingDown, Zap, ArrowRight, CheckCircle2, BarChart3, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';

interface ProblemAgitationSolutionProps {
    industry: 'jewellery' | 'apparel';
}

const content = {
    jewellery: {
        problem: {
            title: "The Traditional Jewellery Photography Problem",
            items: [
                "Studio shoots cost ₹50,000 - ₹2,00,000 per session",
                "Photographer + model expenses add another ₹30,000 - ₹80,000",
                "3-4 weeks turnaround delays your product launches",
                "Limited variations mean fewer marketing options",
                "Inconsistent catalogue quality hurts brand perception"
            ]
        },
        agitation: {
            title: "What This Actually Costs Your Business",
            subtitle: "The hidden cost of traditional shoots",
            impacts: [
                { icon: DollarSign, label: "Lost Revenue", value: "₹5-10L annually", detail: "Delayed launches mean missed sales windows" },
                { icon: Clock, label: "Time Waste", value: "60-90 days/year", detail: "Coordinating shoots instead of growing business" },
                { icon: TrendingDown, label: "Competitor Edge", value: "2-3 months behind", detail: "While you wait, competitors launch faster" },
                { icon: BarChart3, label: "Marketing ROI", value: "40% lower", detail: "Limited creatives reduce campaign performance" }
            ]
        },
        solution: {
            title: "How AIVX Solves This End-to-End",
            features: [
                { title: "AI Image Generation", desc: "Studio-quality images in minutes", credit: "52 credits (4K)" },
                { title: "Instant Variations", desc: "Multiple themes, angles, backgrounds", credit: "Unlimited" },
                { title: "AI Video Reels", desc: "5-15s product videos for social", credit: "62+ credits" },
                { title: "Same-Day Turnaround", desc: "Upload today, launch tomorrow", credit: "Instant" },
                { title: "Consistent Quality", desc: "Every product looks premium", credit: "Guaranteed" },
                { title: "Scale Without Limits", desc: "100 products or 10,000 — same cost efficiency", credit: "Unlimited" }
            ]
        },
        results: {
            title: "Real Results from Jewellery Brands",
            brand: "Premium Jewellery Brand",
            story: "A Mumbai-based jewellery brand was spending ₹8 lakhs annually on traditional photoshoots and struggling to keep up with their product launch schedule.",
            metrics: [
                { label: "Cost Reduction", before: "₹8L/year", after: "₹72K/year", improvement: "91% savings" },
                { label: "Launch Speed", before: "4 weeks", after: "Same day", improvement: "28X faster" },
                { label: "Visual Assets", before: "50/month", after: "500/month", improvement: "10X output" },
                { label: "Campaign ROI", before: "2.3X", after: "5.8X", improvement: "152% improvement" }
            ],
            quote: "AIVX didn't just reduce our costs — it transformed how fast we can move. We've launched 3X more collections this year."
        }
    },
    apparel: {
        problem: {
            title: "The Traditional Fashion Photography Problem",
            items: [
                "Model booking costs ₹20,000 - ₹1,00,000 per shoot",
                "Studio rental adds ₹15,000 - ₹50,000 per session",
                "4-6 weeks from shoot to delivery delays seasonal launches",
                "Limited model availability restricts creative options",
                "Inconsistent styling across campaigns weakens brand identity"
            ]
        },
        agitation: {
            title: "What This Actually Costs Your Business",
            subtitle: "The hidden cost of traditional fashion shoots",
            impacts: [
                { icon: DollarSign, label: "Lost Revenue", value: "₹8-15L annually", detail: "Delayed seasonal launches miss peak demand" },
                { icon: Clock, label: "Time Waste", value: "90-120 days/year", detail: "Coordinating models, studios, and teams" },
                { icon: TrendingDown, label: "Seasonal Lag", value: "1-2 seasons behind", detail: "Competitors capture trends faster" },
                { icon: BarChart3, label: "Ad Performance", value: "50% lower CTR", detail: "Limited creatives reduce campaign effectiveness" }
            ]
        },
        solution: {
            title: "How AIVX Solves This End-to-End",
            features: [
                { title: "AI Model Photography", desc: "Professional model shots without booking anyone", credit: "52 credits (4K)" },
                { title: "Multiple Angles", desc: "Full body, close-ups, back views — all angles", credit: "10 shots/upload" },
                { title: "AI Video Reels", desc: "5-15s fashion videos for Instagram & ads", credit: "62+ credits" },
                { title: "Same-Day Turnaround", desc: "Upload morning, launch evening", credit: "Instant" },
                { title: "Diverse Models", desc: "Indian & international AI models available", credit: "Unlimited" },
                { title: "Unlimited Scaling", desc: "From 10 SKUs to 10,000 — linear pricing", credit: "Unlimited" }
            ]
        },
        results: {
            title: "Real Results from Fashion Brands",
            brand: "D2C Ethnic Wear Brand",
            story: "A Delhi-based fashion brand was struggling with ₹12 lakhs annual shoot costs and missing seasonal launch windows due to 6-week production delays.",
            metrics: [
                { label: "Cost Reduction", before: "₹12L/year", after: "₹98K/year", improvement: "92% savings" },
                { label: "Launch Speed", before: "6 weeks", after: "Same day", improvement: "42X faster" },
                { label: "Collections/Year", before: "4 collections", after: "12 collections", improvement: "3X output" },
                { label: "Ad CTR", before: "1.2%", after: "3.8%", improvement: "217% improvement" }
            ],
            quote: "We went from struggling to launch 4 collections a year to confidently launching 12. AIVX removed our biggest bottleneck."
        }
    }
};

export default function ProblemAgitationSolution({ industry }: ProblemAgitationSolutionProps) {
    const data = content[industry];

    return (
        <section className="relative w-full bg-[#0A0A0A] py-16 md:py-20 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto">

                {/* Main Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                        Stop Losing <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Lakhs</span> on<br className="hidden sm:block" /> Outdated Photography
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here's the real story of why traditional {industry} photography is costing you more than you think.
                    </p>
                </div>

                {/* Step 1: The Problem */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                            <AlertCircle size={24} className="text-red-400" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-red-400 uppercase tracking-wider mb-1">Step 1: The Problem</div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">{data.problem.title}</h3>
                        </div>
                    </div>

                    <div className="pl-16 space-y-3">
                        {data.problem.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 text-gray-300">
                                <span className="text-red-400 mt-1">•</span>
                                <p className="text-lg leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step 2: The Agitation */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                            <TrendingDown size={24} className="text-orange-400" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-1">Step 2: The Real Cost</div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">{data.agitation.title}</h3>
                        </div>
                    </div>

                    <p className="pl-16 text-gray-400 mb-6 text-lg">{data.agitation.subtitle}</p>

                    <div className="pl-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.agitation.impacts.map((impact, i) => {
                            const Icon = impact.icon;
                            return (
                                <div key={i} className="relative bg-gradient-to-br from-orange-500/5 to-transparent p-5 rounded-2xl border border-orange-500/10">
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                                            <Icon size={18} className="text-orange-400" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">{impact.label}</div>
                                            <div className="text-2xl font-bold text-white">{impact.value}</div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed">{impact.detail}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Step 3: The Solution */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
                            <Zap size={24} className="text-neon-green" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-neon-green uppercase tracking-wider mb-1">Step 3: The Solution</div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">{data.solution.title}</h3>
                        </div>
                    </div>

                    <div className="pl-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.solution.features.map((feature, i) => (
                            <div key={i} className="relative bg-gradient-to-br from-neon-green/5 to-transparent p-5 rounded-2xl border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300 group">
                                <div className="flex items-start justify-between gap-3 mb-2">
                                    <h4 className="text-white font-bold text-lg">{feature.title}</h4>
                                    <span className="text-xs font-semibold text-neon-green bg-neon-green/10 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                                        {feature.credit}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step 4: Real Results */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                            <CheckCircle2 size={24} className="text-blue-400" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-1">Step 4: Real Results</div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">{data.results.title}</h3>
                        </div>
                    </div>

                    <div className="pl-16">
                        {/* Story Card */}
                        <div className="bg-gradient-to-br from-blue-500/5 to-transparent p-6 rounded-2xl border border-blue-500/10 mb-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                <h4 className="text-lg font-bold text-white">{data.results.brand}</h4>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">{data.results.story}</p>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                                {data.results.metrics.map((metric, i) => (
                                    <div key={i} className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                                        <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm text-gray-400 line-through">{metric.before}</span>
                                            <ArrowRight size={12} className="text-neon-green" />
                                            <span className="text-sm font-bold text-white">{metric.after}</span>
                                        </div>
                                        <div className="text-xs font-semibold text-neon-green">{metric.improvement}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Quote */}
                            <div className="border-l-2 border-blue-400/30 pl-4 italic text-gray-300">
                                "{data.results.quote}"
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="text-center pt-8 border-t border-white/5">
                    <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl bg-gradient-to-br from-neon-green/10 to-transparent border border-neon-green/20">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Ready to Transform Your {industry === 'jewellery' ? 'Jewellery' : 'Fashion'} Photography?
                            </h3>
                            <p className="text-gray-400">Start creating professional images in minutes, not weeks.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link
                                href="/pricing"
                                className="inline-flex items-center gap-2 bg-neon-green text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-lg shadow-neon-green/20 hover:-translate-y-1"
                            >
                                View Pricing
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-white border border-white/20 hover:bg-white/10 transition-all hover:-translate-y-1"
                            >
                                Talk to Sales
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-green/5 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
}
