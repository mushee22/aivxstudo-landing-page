import { Square, Smartphone, Monitor } from 'lucide-react';

interface JewelleryCategoryAspectRatiosProps {
    category: string;
}

export default function JewelleryCategoryAspectRatios({ category }: JewelleryCategoryAspectRatiosProps) {
    const ratios = [
        {
            label: "Square (1:1)",
            description: "Ecommerce listings, catalogs, marketplaces",
            aspectClass: "aspect-square w-24",
            icon: Square,
            usage: "Ecommerce"
        },
        {
            label: "Portrait (2:3)",
            description: "Product photography, mobile-first layouts",
            aspectClass: "aspect-[2/3] w-20",
            icon: Smartphone,
            usage: "Mobile First"
        },
        {
            label: "Landscape (3:2)",
            description: "Website product galleries, banners",
            aspectClass: "aspect-[3/2] w-24",
            icon: Monitor,
            usage: "Web Gallery"
        },
        {
            label: "Portrait (3:4)",
            description: "Instagram & Facebook ads",
            aspectClass: "aspect-[3/4] w-22",
            icon: Smartphone,
            usage: "Social Ads"
        },
        {
            label: "Standard (4:3)",
            description: "Web, presentations, legacy platforms",
            aspectClass: "aspect-[4/3] w-24",
            icon: Monitor,
            usage: "Web & Pres"
        },
        {
            label: "Vertical (9:16)",
            description: "Instagram Reels, Shorts, Stories",
            aspectClass: "aspect-[9/16] w-16",
            icon: Smartphone,
            usage: "Reels"
        },
        {
            label: "Widescreen (16:9)",
            description: "Website banners, YouTube, video players",
            aspectClass: "aspect-video w-28",
            icon: Monitor,
            usage: "Video"
        },
        {
            label: "Ultra-wide (21:9)",
            description: "Hero banners, cinematic brand visuals",
            aspectClass: "aspect-[21/9] w-32",
            icon: Monitor,
            usage: "Cinematic"
        }
    ];

    return (
        <section className="py-24 bg-dark-surface border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Available Aspect Ratios
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Generate jewellery images and videos optimized for every platform.
                    </p>
                </div>

                {/* Ratio Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {ratios.map((ratio, index) => (
                        <div
                            key={index}
                            className="group bg-dark-bg border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-neon-green/50 transition-colors duration-300"
                        >
                            {/* Visual Frame Container - Fixed Height for alignment */}
                            <div className="h-40 flex items-center justify-center mb-8 w-full">
                                <div
                                    className={`${ratio.aspectClass} bg-white/5 border-2 border-dashed border-white/20 rounded-md group-hover:border-neon-green group-hover:bg-neon-green/5 transition-all duration-300 relative flex items-center justify-center`}
                                >
                                    {/* Dimensions Label inside visual */}
                                    <span className="text-xs font-mono text-white/40 group-hover:text-neon-green/80 transition-colors">
                                        {ratio.label.split('(')[1].replace(')', '')}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                                {ratio.label.split('(')[0].trim()}
                            </h3>

                            <div className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 mb-4 border border-white/5">
                                {ratio.usage}
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {ratio.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
