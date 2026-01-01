'use client';

import { ShoppingBag, Store, Smartphone, Layout, BookOpen, Megaphone } from 'lucide-react';

interface JewelleryCategoryEcommerceProps {
    category: string;
}

export default function JewelleryCategoryEcommerce({ category }: JewelleryCategoryEcommerceProps) {
    const useCases = [
        {
            title: "Product Listing Pages",
            description: "High-quality images for product detail pages that improve conversion.",
            icon: ShoppingBag
        },
        {
            title: "Marketplace Listings",
            description: "Optimized visuals for Amazon, Flipkart, Myntra, and similar platforms.",
            icon: Store
        },
        {
            title: "Social Commerce",
            description: "Reel-ready videos and images for Instagram Shopping and ads.",
            icon: Smartphone
        },
        {
            title: "Brand Website Banners",
            description: "Premium visuals for homepages, category pages, and campaigns.",
            icon: Layout
        },
        {
            title: "Catalogs & Lookbooks",
            description: "Consistent imagery for digital catalogs and PDFs.",
            icon: BookOpen
        },
        {
            title: "Ads & Promotions",
            description: "Creatives for Meta, Google, and display ad campaigns.",
            icon: Megaphone
        }
    ];

    return (
        <section className="py-24 bg-dark-bg border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Ecommerce Ready Visuals
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Use AI-generated jewellery images and videos seamlessly across all ecommerce platforms.
                    </p>
                </div>

                {/* Usage Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="bg-dark-surface border border-white/5 rounded-2xl p-8 hover:border-neon-green/30 hover:bg-white/5 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-neon-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-green/20 transition-colors">
                                <useCase.icon className="text-neon-green w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">
                                {useCase.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                {useCase.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
