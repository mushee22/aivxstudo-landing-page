'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface JewelleryCategoryModelVariationsProps {
    category: string;
}

export default function JewelleryCategoryModelVariations({ category }: JewelleryCategoryModelVariationsProps) {
    const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);

    const models = [
        {
            title: "Indian Models",
            description: "Ideal for Indian jewellery brands, traditional designs, and local marketplaces.",
            image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=1200&auto=format&fit=crop", // Elegant Indian model aesthetic
            align: "items-start"
        },
        {
            title: "International Models",
            description: "Perfect for global brands, modern jewellery, and international audiences.",
            image: "https://images.unsplash.com/photo-1549488497-6c2e36785c4a?q=80&w=1200&auto=format&fit=crop", // Modern international aesthetic
            align: "items-end"
        }
    ];

    return (
        <section className="py-24 bg-dark-bg border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Model Variations
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Choose the right model style to match your brand and audience.
                    </p>
                </div>

                {/* Split Panel Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {models.map((model, index) => (
                        <div
                            key={index}
                            className="group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={model.image}
                                alt={`${model.title} for ${displayCategory}`}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="inline-block text-neon-green text-sm font-bold tracking-widest uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    AI Model Style
                                </span>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                                        {model.title}
                                    </h3>
                                    <ArrowUpRight size={32} className="text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 -translate-y-4 group-hover:translate-y-0 transition-all duration-500" />
                                </div>
                                <p className="text-gray-300 text-lg leading-relaxed max-w-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                    {model.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
