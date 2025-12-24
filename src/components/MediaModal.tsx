
'use client';

import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface MediaModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'image' | 'video';
    src: string;
}

export default function MediaModal({ isOpen, onClose, type, src }: MediaModalProps) {
    const [render, setRender] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setRender(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setRender(false), 300); // Wait for transition
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!render) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            >
                <X size={24} />
            </button>

            <div
                className={`relative max-w-7xl max-h-[90vh] w-full p-4 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-95'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {src && (
                    type === 'image' ? (
                        <img
                            src={src}
                            alt="Full View"
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                        />
                    ) : (
                        <video
                            src={src}
                            controls
                            autoPlay
                            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/10 w-full"
                        />
                    )
                )}
            </div>
        </div>
    );
}
