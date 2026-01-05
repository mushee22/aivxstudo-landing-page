'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 7,
        quote: "AIVX Studio delivers pure luxury in every frame. The craftsmanship, lighting, and detailing are exceptional — exactly what a premium jewellery brand expects. Their visuals add depth, brilliance, and an unmistakable international luxury appeal. Truly elite work.",
        name: "Bhaavin Valah",
        role: "Owner",
        brand: "37 Corporation Jeweller",
        location: "Andheri East, Mumbai"
    },
    {
        id: 6,
        quote: "I have a premium jewellery showroom in Pune, Maharastra. I have been using AIVX Studio for the past one month to generate images for my website which is going to launch soon, I must say this app is absolutely fantastic, user friendly, photorealistic, and with high resolution too. I highly recommend this app to each and every jewellery manufacturer/wholesaler/ retailer to enhance and boost their sale.",
        name: "Sejal Parulekar",
        role: "Owner",
        brand: "Taksh Exclusive",
        location: "Pune, Maharashtra"
    },
    {
        id: 1,
        quote: "Saved more than 70% of our photoshoot cost using AIVX. The quality is indistinguishable from real photography.",
        name: "Arjun Mehta",
        role: "Founder",
        brand: "LuxeJewels"
    },
    {
        id: 2,
        quote: "No studio, no models — perfect for ecommerce. We launched our new collection in days instead of weeks.",
        name: "Sarah Jenkins",
        role: "Marketing Director",
        brand: "Aura Gems"
    },
    {
        id: 3,
        quote: "High-quality jewellery images delivered in minutes. The control over lighting and reflections is unmatched.",
        name: "Rajesh Kumar",
        role: "Ecommerce Manager",
        brand: "Sparkle & Shine"
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [itemsPerView, setItemsPerView] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    // Responsive items per view logic
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setItemsPerView(3);
            else if (window.innerWidth >= 768) setItemsPerView(2);
            else setItemsPerView(1);
        };

        handleResize(); // Initial set
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - itemsPerView);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    return (
        <section
            className="py-24 px-6 bg-dark-bg border-t border-white/5 relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-neon-green/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">What Our Clients Say</h2>
                        <p className="text-gray-400 text-lg">
                            Trusted by jewellery brands and ecommerce sellers worldwide.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-dark-surface border border-white/10 text-white hover:text-neon-green hover:border-neon-green transition-all shadow-lg"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-dark-surface border border-white/10 text-white hover:text-neon-green hover:border-neon-green transition-all shadow-lg"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Carousel Track */}
                <div className="overflow-hidden" ref={containerRef}>
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                        }}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="flex-shrink-0 px-3"
                                style={{ width: `${100 / itemsPerView}%` }}
                            >
                                <div className="bg-dark-surface border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-between hover:border-neon-green/30 transition-colors duration-300">
                                    <div className="mb-6">
                                        <div className="text-neon-green mb-4 opacity-50">
                                            <Quote size={32} />
                                        </div>
                                        <p className="text-lg text-white font-medium leading-relaxed">
                                            "{item.quote}"
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-sm">
                                            {item.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm">{item.name}</h4>
                                            <div className="flex flex-col sm:flex-row sm:gap-2 text-xs text-text-muted">
                                                {/* <span>{item.role}</span> */}
                                                <span className="hidden sm:block text-white/20"></span>
                                            </div>
                                            <div className='flex flex-col text-xs text-text-muted'>
                                                <span className="text-neon-green/80">{item.brand}</span>
                                                {/* @ts-ignore */}
                                                {item.location && (
                                                    <>
                                                        {/* <span className="hidden sm:block text-white/20">•</span> */}
                                                        <span className="text-white/40">{item.location}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Dots */}
                <div className="flex justify-center gap-2 mt-8 md:hidden">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`transition-all rounded-full ${idx === currentIndex ? 'w-8 h-2 bg-neon-green' : 'w-2 h-2 bg-white/20'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
