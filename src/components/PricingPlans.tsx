'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: "Starter",
        price: "99",
        credits: "100 Credits",
        subtitle: "Perfect for testing",
        features: [
            "100 Credits (No Expiry)",
            "52 Credits / Image Gen",
            "32 Credits / Regeneration",
            "102 Credits / Video Gen",
            // "Basic themes"
        ],
        cta: "Contact Sales",
        href: "/contact",
        popular: false
    },
    {
        name: "Pro",
        price: "999",
        credits: "1250 Credits",
        subtitle: "Best value for brands",
        features: [
            "1250 Credits (No Expiry)",
            "52 Credits / Image Gen",
            "32 Credits / Regeneration",
            "102 Credits / Video Gen",
            "All jewellery themes",
            "Priority support"
        ],
        cta: "Contact Sales",
        href: "/contact",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        credits: "Unlimited",
        subtitle: "For agencies & large catalogs",
        features: [
            "Custom Credit Volume",
            "Dedicated support",
            "Custom workflows",
            "API access"
        ],
        cta: "Contact Sales",
        href: "/contact",
        popular: false
    }
];

export default function PricingPlans() {
    return (
        <section id="plans" className="pb-24 px-6 bg-dark-bg border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Pricing Plans
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Choose a plan that fits your jewellery business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-dark-surface rounded-3xl p-8 border hover:border-neon-green/30 transition-all duration-300 flex flex-col h-full ${plan.popular ? 'border-neon-green/50 shadow-[0_0_30px_rgba(163,230,53,0.1)] scale-100 lg:scale-105 z-10' : 'border-white/5'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-green text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Recommended
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-sm">{plan.subtitle}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">
                                        {plan.price === "Custom" ? "Custom" : `₹${plan.price}`}
                                    </span>

                                </div>
                                {plan.price !== "Custom" && (
                                    <div className="mt-2 inline-block bg-white/10 px-3 py-1 rounded-full border border-white/10">
                                        <span className="text-neon-green font-bold text-sm tracking-wide">
                                            {plan.credits}
                                        </span>
                                    </div>
                                )}
                                {plan.price === "Custom" && (
                                    <div className="text-sm text-gray-500 mt-2">Tailored for your needs</div>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <Check size={18} className="text-neon-green flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.href}
                                className={`w-full py-3.5 rounded-full font-bold text-center transition-all ${plan.popular
                                    ? 'bg-neon-green text-black hover:bg-lime-300 shadow-lg'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
