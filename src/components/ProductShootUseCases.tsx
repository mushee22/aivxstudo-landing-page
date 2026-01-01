'use client';

import { ShoppingBag, Instagram, Megaphone, Layout, Store, ArrowRight, Video } from 'lucide-react';
import Link from 'next/link';

const useCases = [
    {
        icon: ShoppingBag,
        title: "Ecommerce Product Images",
        desc: "High-quality images for product listing pages, catalogs, and marketplaces."
    },
    {
        icon: Instagram,
        title: "Instagram Reels & Social Media",
        desc: "5s and 15s reel videos optimized for social platforms."
    },
    {
        icon: Megaphone,
        title: "Paid Ads & Campaigns",
        desc: "Visually rich creatives for Meta, Google, and display ads."
    },
    {
        icon: Layout,
        title: "Website Banners & Branding",
        desc: "Premium jewellery visuals for homepages and landing pages."
    },
    {
        icon: Store,
        title: "Marketplace Listings",
        desc: "Optimized images for Amazon, Shopify, and other platforms."
    }
];

export default function ProductShootUseCases() {
    return (
        <section className="py-24 px-6 bg-dark-bg border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Jewellery Use Cases
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        How AIVX jewellery product shoots are used across ecommerce, marketing, and sales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {useCases.map((item, index) => (
                        <div key={index} className="bg-dark-surface border border-white/5 rounded-2xl p-8 hover:border-neon-green/30 transition-all group flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-neon-green group-hover:text-black transition-colors">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* CTA Card (6th slot) */}
                    <div className="bg-gradient-to-br from-neon-green/10 to-transparent border border-neon-green/20 rounded-2xl p-8 flex flex-col justify-center items-center text-center space-y-6 hover:border-neon-green/50 transition-all">
                        <h3 className="text-2xl font-bold text-white">Ready to Start?</h3>
                        <Link
                            href="#categories"
                            className="inline-flex items-center gap-2 bg-neon-green text-black px-6 py-3 rounded-full font-bold hover:bg-lime-300 transition-colors shadow-lg"
                        >
                            View Jewellery Examples
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
