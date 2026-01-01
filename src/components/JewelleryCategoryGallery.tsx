'use client';

import { useState } from 'react';
import Image from 'next/image';

interface JewelleryCategoryGalleryProps {
    category: string;
}

export default function JewelleryCategoryGallery({ category }: JewelleryCategoryGalleryProps) {
    const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Studio', 'Lifestyle', 'Creative', 'Luxury', 'Minimal'];

    const allImages = [
        {
            src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
            alt: "Studio light ring",
            theme: "Studio"
        },
        {
            src: "https://images.unsplash.com/photo-1629224316810-9d8805b95076?q=80&w=800&auto=format&fit=crop",
            alt: "Lifestyle model wearing necklace",
            theme: "Lifestyle"
        },
        {
            src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
            alt: "Dark luxury theme",
            theme: "Luxury"
        },
        {
            src: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=800&auto=format&fit=crop",
            alt: "Creative gold jewellery",
            theme: "Creative"
        },
        {
            src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop",
            alt: "Minimal white background",
            theme: "Minimal"
        },
        {
            src: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800&auto=format&fit=crop",
            alt: "Sunlight natural",
            theme: "Lifestyle"
        },
        {
            src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
            alt: "Studio sharp focus",
            theme: "Studio"
        },
        {
            src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
            alt: "Luxury diamond detail",
            theme: "Luxury"
        }
    ];

    const filteredImages = activeFilter === 'All'
        ? allImages
        : allImages.filter(img => img.theme === activeFilter);

    return (
        <section id="image-gallery" className="py-24 px-6 bg-dark-bg border-b border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div>
                        <span className="text-neon-green text-sm font-medium tracking-widest uppercase mb-2 block">
                            Lookbook
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white max-w-xl">
                            {displayCategory} Gallery
                        </h2>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Editorial Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/5] overflow-hidden bg-dark-surface animate-fade-in"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="px-4 py-2 border border-white/30 text-white text-sm tracking-widest uppercase font-medium backdrop-blur-sm">
                                    {image.theme}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredImages.length === 0 && (
                    <div className="py-20 text-center text-gray-500">
                        No images found for this theme.
                    </div>
                )}

            </div>
        </section>
    );
}
