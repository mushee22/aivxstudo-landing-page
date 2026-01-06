
import { Camera, Video, Layers, Users, ShoppingBag, Download } from 'lucide-react';

interface JewelleryCategoryOverviewProps {
    category: string;
}

export default function JewelleryCategoryOverview({ category }: JewelleryCategoryOverviewProps) {
    const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);

    const features = [
        {
            icon: Camera,
            title: "Studio-Quality AI Images",
            desc: "Photorealistic outputs indistinguishable from traditional photography."
        },
        {
            icon: Video,
            title: "5s & 15s Reel Videos",
            desc: "Engaging motion content optimized for Instagram and TikTok."
        },
        {
            icon: Layers,
            title: "Multiple Jewellery Themes",
            desc: "Choose from various backgrounds, lighting, and aesthetic styles."
        },
        {
            icon: Users,
            title: "Indian & International Models",
            desc: "Diverse model options to match your target audience."
        },
        {
            icon: ShoppingBag,
            title: "Ecommerce-Ready Formats",
            desc: "Perfect aspect ratios and quality for website listings."
        },
        {
            icon: Download,
            title: "High-Resolution Output",
            desc: "Crystal clear details suitable for digital and print marketing."
        }
    ];

    // Placeholder visuals for the strip

    return (
        <section className="py-24 px-6 bg-dark-bg border-b border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* 1. Section Header (Centered) */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-neon-green text-sm font-medium tracking-widest uppercase mb-4 block">
                        AI Jewellery Capabilities
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        What We Generate for {displayCategory}
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Everything you need to sell jewellery online — images and videos generated using AI.
                    </p>
                </div>

                {/* 2. Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-24">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-neon-green/50 group-hover:text-neon-green transition-colors">
                                <feature.icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
