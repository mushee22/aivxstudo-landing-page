
'use client';

import { Check, CreditCard, Sparkles } from 'lucide-react';

const packages = [
    {
        credits: 100,
        price: 99,
        tag: "Starter",
        features: [
            "Credits Never Expire",
            "Broad Commercial License",
            "Access to All Themes",
            "Standard Support"
        ]
    },
    {
        credits: 500,
        price: 399,
        tag: "Most Popular",
        popular: true,
        features: [
            "Credits Never Expire",
            "Broad Commercial License",
            "Access to All Themes",
            "Priority Processing"
        ]
    },
    {
        credits: 2000,
        price: 1499,
        tag: "Business",
        features: [
            "Credits Never Expire",
            "Broad Commercial License",
            "Access to All Themes",
            "Dedicated Support"
        ]
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-6 bg-dark-bg relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neon-green mb-2">
                        <CreditCard size={14} />
                        <span>Simple Pricing</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Pay as you go</h2>
                    <p className="text-text-muted text-lg">
                        No subscriptions. No hidden fees. Credits generally never expire.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`
                                relative p-8 rounded-3xl border flex flex-col gap-6 group transition-all duration-300
                                ${pkg.popular
                                    ? 'bg-white/5 border-neon-green/50 shadow-[0_0_30px_rgba(163,230,53,0.1)] scale-105 z-10'
                                    : 'bg-dark-surface border-white/5 hover:border-white/10'
                                }
                            `}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-neon-green text-black text-xs font-bold uppercase tracking-wider shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div>
                                <h3 className={`text-lg font-medium mb-2 ${pkg.popular ? 'text-neon-green' : 'text-white'}`}>{pkg.tag}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">₹{pkg.price}</span>
                                    <span className="text-text-muted">/ {pkg.credits} Credits</span>
                                </div>
                            </div>

                            <div className="space-y-4 border-t border-white/5 pt-6">
                                {pkg.features.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-text-muted">
                                        <div className={`p-1 rounded-full ${pkg.popular ? 'bg-neon-green/10 text-neon-green' : 'bg-white/5 text-white'}`}>
                                            <Check size={12} />
                                        </div>
                                        {feat}
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`
                                    w-full py-4 rounded-xl font-bold transition-all cursor-pointer
                                    ${pkg.popular
                                        ? 'bg-neon-green text-black hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.4)]'
                                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'
                                    }
                                `}
                            >
                                Get Credits
                            </button>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
