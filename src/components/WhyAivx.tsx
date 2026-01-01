'use client';

import { Image as ImageIcon, Video, Gem, Users, ShoppingBag, Zap } from 'lucide-react';

const features = [
    {
        icon: ImageIcon,
        title: "AI Image Generation",
        desc: "Generate studio-quality jewellery images using AI."
    },
    {
        icon: Video,
        title: "AI Video Generation",
        desc: "Create high-quality 5s and 15s product reel videos."
    },
    {
        icon: Gem,
        title: "Jewellery-Focused AI",
        desc: "Optimized lighting, reflections, and detailing for jewellery."
    },
    {
        icon: Users,
        title: "Multiple Ethnicity Models",
        desc: "Indian and international models available."
    },
    {
        icon: ShoppingBag,
        title: "Ecommerce-Ready Outputs",
        desc: "Images optimized for websites, marketplaces, and ads."
    },
    {
        icon: Zap,
        title: "Low Cost & Fast Delivery",
        desc: "Significantly cheaper and faster than traditional photoshoots."
    }
];

export default function WhyAivx() {
    return (
        <section className="py-24 px-6 bg-dark-bg relative overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Why AIVX</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Built specifically for jewellery brands, ecommerce sellers, and marketers.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-dark-surface border border-white/10 hover:border-neon-green/30 transition-all duration-300 hover:bg-white/5 h-full"
                        >
                            <div className="w-12 h-12 rounded-lg bg-neon-green/10 flex items-center justify-center text-neon-green mb-6 group-hover:bg-neon-green group-hover:text-black transition-colors duration-300">
                                <feature.icon size={24} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
