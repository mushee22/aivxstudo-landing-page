'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface JewelleryCategoryThemesProps {
    category: string;
    themes?: { name: string; image: string }[];
}

export default function JewelleryCategoryThemes({ category, themes: customThemes }: JewelleryCategoryThemesProps) {
    const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const defaultThemes = [
        { name: "Studio Light", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop" },
        { name: "Luxury Black", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop" },
        { name: "Festive Gold", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=800&auto=format&fit=crop" },
        { name: "Lifestyle Casual", image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800&auto=format&fit=crop" },
        { name: "Minimal White", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop" },
        { name: "Premium Editorial", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" },
    ];

    const themes = customThemes || defaultThemes;

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="theme-gallery" className="py-24 bg-dark-bg border-b border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Themes for {displayCategory}
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Choose from a wide range of studio and lifestyle themes.
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => scroll('left')}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 transition-all"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {themes.map((theme, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] md:min-w-[400px] aspect-[4/5] relative rounded-3xl overflow-hidden group snap-center cursor-pointer border border-white/5"
                    >
                        <Image
                            src={theme.image}
                            alt={`${theme.name} theme example`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {theme.name}
                            </h3>
                            {/* <span className="text-neon-green text-sm font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 block">
                                View Theme
                            </span> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
