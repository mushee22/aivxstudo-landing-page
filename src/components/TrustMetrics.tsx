'use client';

import { Clock, DollarSign, Layers, TrendingUp, Users, Zap } from 'lucide-react';

const metrics = [
    {
        icon: TrendingUp,
        value: '2Cr+',
        label: 'Revenue Generated',
        highlight: true,
    },
    {
        icon: Layers,
        value: '500+',
        label: 'Campaigns Managed',
    },
    {
        icon: Users,
        value: '1000+',
        label: 'Clients Served',
    },
    {
        icon: DollarSign,
        value: 'Up to 90%',
        label: 'Cost Savings',
        highlight: true,
    },
    {
        icon: Zap,
        value: '20X',
        label: 'More Visual Variations',
    },
    {
        icon: Clock,
        value: 'Minutes',
        label: 'Instead of Weeks',
    },
];

export default function TrustMetrics() {
    return (
        <section className="relative w-full bg-[#0A0A0A] py-12 md:py-16 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-8 md:mb-10">
                    <div className="inline-flex items-center gap-2 mb-3">
                        <span className="h-px w-8 bg-neon-green"></span>
                        <span className="text-neon-green font-medium tracking-widest uppercase text-xs">
                            Trusted Performance
                        </span>
                        <span className="h-px w-8 bg-neon-green"></span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        Results That <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-green to-emerald-400">Speak</span>
                    </h2>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                                    metric.highlight
                                        ? 'border-neon-green/30 hover:border-neon-green/50 hover:shadow-neon-green/20'
                                        : 'border-white/10 hover:border-white/20'
                                }`}
                            >
                                {/* Background Glow Effect */}
                                {metric.highlight && (
                                    <div className="absolute inset-0 bg-neon-green/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                )}

                                {/* Icon */}
                                <div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300 ${
                                    metric.highlight
                                        ? 'bg-neon-green/10 text-neon-green group-hover:bg-neon-green/20'
                                        : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'
                                }`}>
                                    <Icon size={24} />
                                </div>

                                {/* Value */}
                                <div className={`text-4xl md:text-5xl font-bold mb-2 transition-colors duration-300 ${
                                    metric.highlight
                                        ? 'text-neon-green'
                                        : 'text-white group-hover:text-neon-green'
                                }`}>
                                    {metric.value}
                                </div>

                                {/* Label */}
                                <div className="text-gray-400 text-base font-medium leading-snug">
                                    {metric.label}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Optional Bottom Text */}
                <div className="text-center mt-12 md:mt-16">
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                        Join <strong className="text-white">1000+</strong> brands that are scaling their product photography with AI — faster, better, and more cost-effective.
                    </p>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
