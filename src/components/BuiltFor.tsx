'use client';

import { Shirt, Gem, ShoppingBag, BarChart3, Store, Instagram, MessageCircle } from 'lucide-react';

const audiences = [
    { icon: Shirt,         title: "Fashion Brands",        desc: "Launching new collections without photoshoot budgets." },
    { icon: Gem,           title: "Jewellery Businesses",   desc: "Creating consistent catalogue images at scale." },
    { icon: ShoppingBag,   title: "Shopify & Etsy Owners",  desc: "Need platform-ready product photos instantly." },
    { icon: BarChart3,     title: "D2C Brands",             desc: "Scaling visual content for clothing and accessories." },
    { icon: Store,         title: "Marketplace Sellers",    desc: "Building professional listings for Amazon and Meesho." },
    { icon: Instagram,     title: "Instagram Boutiques",    desc: "Need fresh content regularly to engage followers." },
    { icon: MessageCircle, title: "WhatsApp Sellers",       desc: "Want their products to look like a professional brand." },
];

export default function BuiltFor() {
    return (
        <section className="py-20 px-6 bg-dark-bg border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/8">
                    <div>
                        <p className="text-xs font-semibold text-neon-green uppercase tracking-[0.2em] mb-3">Who It Is Built For</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Built for Fashion and<br />Jewellery Brands
                        </h2>
                    </div>
                    <p className="text-gray-400 text-base md:text-right md:max-w-xs leading-relaxed">
                        AIVX is used by businesses of every size — from solo resellers to established fashion labels.
                    </p>
                </div>

                {/* Numbered list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {audiences.map((audience, index) => (
                        <div
                            key={index}
                            className={`group flex items-start gap-5 py-5 px-2 hover:bg-white/[0.02] transition-colors duration-200 border-b border-white/5 ${
                                index % 2 === 0 && index < audiences.length - 1 ? 'md:border-r md:border-white/5' : ''
                            }`}
                        >
                            <span className="text-sm font-mono text-gray-600 group-hover:text-neon-green transition-colors pt-0.5 w-6 flex-shrink-0">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div className="flex items-start gap-3 flex-1">
                                <audience.icon size={18} className="mt-0.5 text-gray-500 group-hover:text-neon-green transition-colors flex-shrink-0" />
                                <div>
                                    <h3 className="text-base font-semibold text-white group-hover:text-neon-green transition-colors leading-tight">
                                        {audience.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                                        {audience.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
