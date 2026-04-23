'use client';

import { ShoppingBag, BookOpen, Library, Share2, Megaphone, MessageSquare, UserPlus } from 'lucide-react';

const useCases = [
    { icon: ShoppingBag,   title: "Product Listing Photos", detail: "Shopify · Etsy · Amazon · Meesho · Nykaa Fashion" },
    { icon: BookOpen,      title: "Fashion Lookbooks",       detail: "Seasonal collections & campaign launches" },
    { icon: Library,       title: "Jewellery Catalogues",    detail: "Retail · Wholesale · Export" },
    { icon: Share2,        title: "Social Media Content",    detail: "Instagram · Pinterest · Facebook" },
    { icon: Megaphone,     title: "Ad Creatives",            detail: "Meta · Google · Marketplace advertising" },
    { icon: MessageSquare, title: "WhatsApp Business",       detail: "Catalogue images for direct sales" },
    { icon: UserPlus,      title: "AI Model Photos",         detail: "Indian & international models, no booking needed" },
];

export default function UseCases() {
    return (
        <section className="py-20 px-6 bg-dark-bg border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-1">
                        <p className="text-xs font-semibold text-neon-green uppercase tracking-[0.2em] mb-3">Use Cases</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            What You Can<br />Create with AIVX
                        </h2>
                    </div>
                    <div className="lg:col-span-2 flex items-end">
                        <p className="text-gray-400 text-base leading-relaxed border-l-2 border-white/10 pl-6">
                            Generate product visuals for every channel your brand uses — from marketplace listing photos and fashion lookbooks to social media content and AI model images.
                        </p>
                    </div>
                </div>

                {/* Table-style list */}
                <div className="border border-white/10 rounded-2xl overflow-hidden">
                    {useCases.map((uc, index) => (
                        <div
                            key={index}
                            className={`group flex items-center gap-5 px-6 py-5 hover:bg-white/[0.02] transition-colors duration-200 ${
                                index < useCases.length - 1 ? 'border-b border-white/8' : ''
                            }`}
                        >
                            <span className="text-xs font-mono text-gray-600 group-hover:text-neon-green transition-colors w-6 flex-shrink-0">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-neon-green group-hover:bg-neon-green/10 transition-all duration-200 flex-shrink-0">
                                <uc.icon size={17} />
                            </div>
                            <span className="text-base font-semibold text-white group-hover:text-neon-green transition-colors flex-1">
                                {uc.title}
                            </span>
                            <span className="hidden sm:block text-sm text-gray-600 group-hover:text-gray-400 transition-colors text-right">
                                {uc.detail}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
