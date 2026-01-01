'use client';

import { DollarSign, UserX, Clock, CameraOff, BarChart3, ShoppingBag } from 'lucide-react';

const problems = [
    {
        icon: DollarSign,
        title: "High Cost",
        desc: "Studio rent, photographers, models, and equipment increase cost."
    },
    {
        icon: UserX,
        title: "Model Dependency",
        desc: "Difficult to find the right jewellery models consistently."
    },
    {
        icon: Clock,
        title: "Long Turnaround Time",
        desc: "Days or weeks to plan, shoot, and edit."
    },
    {
        icon: CameraOff,
        title: "Limited Variations",
        desc: "Hard to shoot multiple themes, angles, and formats."
    },
    {
        icon: BarChart3,
        title: "Not Scalable",
        desc: "Repeating shoots for new products is costly and slow."
    },
    {
        icon: ShoppingBag,
        title: "Ecommerce Pressure",
        desc: "Marketplaces require frequent image updates."
    }
];

export default function ProductShootProblems() {
    return (
        <section className="py-24 px-6 bg-dark-bg border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Problems with <span className="text-red-400">Traditional</span> Shoots
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Why traditional jewellery photoshoots are expensive, slow, and inefficient.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <div key={index} className="bg-dark-surface border border-white/5 p-8 rounded-2xl hover:bg-white/5 hover:border-white/10 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-red-400/10 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
