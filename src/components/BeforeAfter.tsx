'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const comparisons = [
    {
        title: "Ring",
        category: "Jewellery",
        before: "https://placehold.co/800x800/1a1a1a/ffffff?text=Raw+Ring",
        after: "https://placehold.co/800x800/black/a3e635?text=Studio+Ring"
    },
    {
        title: "Necklace",
        category: "Jewellery",
        before: "https://placehold.co/800x800/1a1a1a/ffffff?text=Raw+Necklace",
        after: "https://placehold.co/800x800/black/a3e635?text=Studio+Necklace"
    },
    {
        title: "Bangle",
        category: "Jewellery",
        before: "https://placehold.co/800x800/1a1a1a/ffffff?text=Raw+Bangle",
        after: "https://placehold.co/800x800/black/a3e635?text=Studio+Bangle"
    },
    {
        title: "Ear Ring",
        category: "Jewellery",
        before: "https://placehold.co/800x800/1a1a1a/ffffff?text=Raw+Earring",
        after: "https://placehold.co/800x800/black/a3e635?text=Studio+Earring"
    }
];

export default function BeforeAfter() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % comparisons.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + comparisons.length) % comparisons.length);
    }, []);

    // Auto-play logic
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextSlide, 5000); // 5s interval for smooth reading
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    return (
        <section
            className="py-24 px-6 bg-dark-bg border-t border-white/5"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Before & After</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        See how AIVX transforms simple product images into studio-quality jewellery visuals.
                    </p>
                </div>

                <div className="relative group">
                    {/* Navigation Buttons (Desktop) */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20 p-3 rounded-full bg-dark-surface border border-white/10 text-white hover:text-neon-green hover:border-neon-green transition-all shadow-lg hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20 p-3 rounded-full bg-dark-surface border border-white/10 text-white hover:text-neon-green hover:border-neon-green transition-all shadow-lg hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Carousel Track */}
                    <div className="overflow-hidden rounded-2xl bg-dark-surface border border-white/10 shadow-2xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {comparisons.map((item, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div className="flex flex-col md:flex-row h-[500px] md:h-[600px]">

                                        {/* Before Side */}
                                        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10 p-2">
                                            <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                                <span className="text-xs font-bold text-white uppercase tracking-wider">Before</span>
                                            </div>
                                            <div className="w-full h-full relative rounded-xl overflow-hidden">
                                                <img
                                                    src={item.before}
                                                    alt={`Before ${item.title}`}
                                                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
                                                />
                                            </div>
                                        </div>

                                        {/* After Side */}
                                        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden p-2">
                                            <div className="absolute top-4 right-4 z-10 bg-neon-green/90 backdrop-blur-md px-3 py-1 rounded-full border border-neon-green/20">
                                                <span className="text-xs font-bold text-black uppercase tracking-wider">After</span>
                                            </div>
                                            <div className="w-full h-full relative rounded-xl overflow-hidden">
                                                <img
                                                    src={item.after}
                                                    alt={`After ${item.title}`}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                                {/* Subtle inner shadow for depth */}
                                                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none" />
                                            </div>
                                        </div>

                                    </div>

                                    {/* Caption/Title Bar */}
                                    <div className="p-4 border-t border-white/10 bg-dark-surface flex justify-between items-center text-white">
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <span className="text-sm text-neon-green font-medium">
                                            Slide {index + 1} / {comparisons.length}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Dots */}
                    <div className="flex justify-center gap-2 mt-6 md:hidden">
                        {comparisons.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`transition-all rounded-full ${idx === currentIndex ? 'w-8 h-2 bg-neon-green' : 'w-2 h-2 bg-white/20'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
