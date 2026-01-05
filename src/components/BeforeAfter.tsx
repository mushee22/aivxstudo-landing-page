'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeftRight } from 'lucide-react';

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

function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;

        let position = ((clientX - containerRect.left) / containerRect.width) * 100;
        position = Math.max(0, Math.min(100, position));

        setSliderPosition(position);
    }, [isDragging]);

    const handleInteractionStart = () => setIsDragging(true);
    const handleInteractionEnd = () => setIsDragging(false);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mouseup', handleInteractionEnd);
            window.addEventListener('touchend', handleInteractionEnd);
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('touchmove', handleMove);
        }

        return () => {
            window.removeEventListener('mouseup', handleInteractionEnd);
            window.removeEventListener('touchend', handleInteractionEnd);
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
        };
    }, [isDragging, handleMove]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden cursor-ew-resize select-none group"
            onMouseDown={handleInteractionStart}
            onTouchStart={handleInteractionStart}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={after}
                    alt={`After ${title}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                <div className="absolute top-4 right-4 z-10 bg-neon-green/90 backdrop-blur-md px-3 py-1 rounded-full border border-neon-green/20 pointer-events-none">
                    <span className="text-xs font-bold text-black uppercase tracking-wider">After</span>
                </div>
            </div>

            {/* Before Image (Foreground - Clipped) */}
            <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={before}
                    alt={`Before ${title}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 pointer-events-none">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Before</span>
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-neon-green z-20 cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-neon-green rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.5)] border-4 border-black transition-transform group-hover:scale-110">
                    <ChevronsLeftRight size={20} className="text-black" />
                </div>
            </div>

            {/* Subtle inner shadow overlay */}
            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none" />
        </div>
    );
}

export default function BeforeAfter() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % comparisons.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + comparisons.length) % comparisons.length);
    }, []);

    return (
        <section className="py-24 px-6 bg-dark-bg border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Before & After</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Drag the slider to see how AIVX transforms simple product images into studio-quality visuals.
                    </p>
                </div>

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
            </div>
        </section>
    );
}
