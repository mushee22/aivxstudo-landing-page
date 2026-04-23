import { Camera, Video, Layers, Users, ShoppingBag, Download } from 'lucide-react';

interface FashionCategoryOverviewProps {
    category: string;
}

export default function FashionCategoryOverview({ category }: FashionCategoryOverviewProps) {
    const displayCategory = category
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

    const features = [
        {
            icon: Camera,
            title: 'Studio-Quality AI Images',
            desc: 'Photorealistic model-on outputs indistinguishable from traditional photography.',
        },
        {
            icon: Video,
            title: '5s & 15s Reel Videos',
            desc: 'Engaging motion content optimized for Instagram Reels and YouTube Shorts.',
        },
        {
            icon: Layers,
            title: 'Multiple Fashion Themes',
            desc: 'Choose from lifestyle, editorial, studio, and campaign backgrounds.',
        },
        {
            icon: Users,
            title: 'Indian & International Models',
            desc: 'Diverse AI model options to match your target audience and market.',
        },
        {
            icon: ShoppingBag,
            title: 'Ecommerce-Ready Formats',
            desc: 'Perfect aspect ratios and resolution for marketplace and website listings.',
        },
        {
            icon: Download,
            title: 'High-Resolution Output',
            desc: 'Crystal-clear detail suitable for digital, print, and large-format marketing.',
        },
    ];

    return (
        <section className="py-24 px-6 bg-dark-bg border-b border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-neon-green text-sm font-medium tracking-widest uppercase mb-4 block">
                        AI Fashion Capabilities
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        What We Generate for {displayCategory}
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Everything you need to sell fashion online — model-on images and videos generated using AI.
                    </p>
                </div>

                {/* Feature Grid */}
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
