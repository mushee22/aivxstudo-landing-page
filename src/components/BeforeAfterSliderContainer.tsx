'use client';

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function BeforeAfterSliderContainer() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % comparisons.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + comparisons.length) % comparisons.length);
    }, []);

    return (
        <div className="relative group max-w-[600px] mx-auto">
            {/* Navigation Buttons (Desktop) */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 -left-4 md:-left-14 -translate-y-1/2 z-20 p-3 rounded-full bg-dark-surface border border-white/10 text-white hover:text-neon-green hover:border-neon-green transition-all shadow-lg hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 -right-4 md:-right-14 -translate-y-1/2 z-20 p-3 rounded-full bg-dark-surface border border-white/10 text-white hover:text-neon-green hover:border-neon-green transition-all shadow-lg hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100"
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
                            <BeforeAfterSlider
                                before={item.before}
                                after={item.after}
                                title={item.title}
                            />

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
    )
}

const comparisons = [
    {
        title: "Necklace",
        category: "Jewellery",
        before: "/image/raw-input-image.png",
        after: "/image/ai-generated-image.png"
    },
    {
        title: "Ring",
        category: "Jewellery",
        before: "/image/ring-raw-input-image.png",
        after: "/image/ring-ai-generated-image.png"
    },
    {
        title: "Bangle",
        category: "Jewellery",
        before: "/image/bangle-raw-input-image.png",
        after: "/image/bangle-ai-generated-image.png"
    },
    {
        title: "Ear Ring",
        category: "Jewellery",
        before: "/image/earring-raw-input-image.png",
        after: "/image/earring-ai-generated-image.png"
    }
];