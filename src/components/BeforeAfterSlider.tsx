'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

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

export default BeforeAfterSlider;
