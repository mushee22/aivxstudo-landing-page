
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: "Trial Plan",
        price: "999",
        credits: "Standard Credits",
        subtitle: "Try out AIVX capabilities",
        features: [
            "Standard credits included",
            "(No bonus credits)",
            "52 Credits / Image Gen",
            "32 Credits / Regeneration",
            "114 Credits / Video Gen"
        ],
        cta: "Get Started",
        href: "https://studio.primefxt.pro/login",
        popular: false
    },
    {
        name: "Base Plan",
        price: "4,999",
        credits: "Base + 10% Bonus",
        subtitle: "Includes 5,000 base credits",
        features: [
            "Includes 5,000 base credits",
            "500 bonus credits",
            "52 Credits / Image Gen",
            "32 Credits / Regeneration",
            "114 Credits / Video Gen"
        ],
        cta: "Get Started",
        href: "https://studio.primefxt.pro/login",
        popular: false
    },
    {
        name: "Pro Plan",
        price: "9,999",
        credits: "Base + 20% Bonus",
        subtitle: "Includes 10,000 base credits",
        features: [
            "Includes 10,000 base credits",
            "2,000 bonus credits",
            "52 Credits / Image Gen",
            "32 Credits / Regeneration",
            "114 Credits / Video Gen",
            "All jewellery themes",
            "Priority support"
        ],
        cta: "Get Started",
        href: "https://studio.primefxt.pro/login",
        popular: true
    },
    {
        name: "Enterprise Plan",
        price: "Custom",
        credits: "Higher Usage",
        subtitle: "Custom plans & details",
        features: [
            "Custom plans and higher usage",
            "Please connect with our team for details",
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-dark-surface rounded-2xl p-6 border hover:border-neon-green/30 transition-all duration-300 flex flex-col h-full ${plan.popular ? 'border-neon-green/50 shadow-[0_0_30px_rgba(163,230,53,0.1)] z-10' : 'border-white/5'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-neon-green text-black px-3 py-1 rounded-bl-xl rounded-tr-xl text-[10px] font-bold uppercase tracking-wider">
                                    Recommended
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                                <p className="text-gray-400 text-xs">{plan.subtitle}</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-white">
                                        {plan.price === "Custom" ? "Custom" : `₹${plan.price}`}
                                    </span>
                                </div>
                                {plan.price !== "Custom" && (
                                    <div className="mt-2 inline-block bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                                        <span className="text-neon-green font-bold text-xs tracking-wide">
                                            {plan.credits}
                                        </span>
                                    </div>
                                )}
                                {plan.price === "Custom" && (
                                    <div className="text-xs text-gray-500 mt-2">Tailored for your needs</div>
                                )}
                            </div>

                            <ul className="space-y-3 mb-8 grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-gray-300">
                                        <Check size={16} className="text-neon-green shrink-0 mt-0.5" />
                                        <span className="text-xs leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.href}
                                target={plan.href.startsWith('http') ? "_blank" : undefined}
                                rel={plan.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                className={`w-full py-3 rounded-xl font-bold text-sm text-center transition-all ${plan.popular
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
