'use client';

import { useEffect, useState } from 'react';
import { X, Check } from 'lucide-react';

interface ContactSuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactSuccessModal({ isOpen, onClose }: ContactSuccessModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                handleClose();
            }, 5000); // Auto-close after 5 seconds

            // Prevent scrolling when modal is open
            document.body.style.overflow = 'hidden';

            return () => {
                clearTimeout(timer);
                document.body.style.overflow = 'unset';
            };
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for fade-out animation
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleClose}
            />

            {/* Modal */}
            <div
                className={`relative bg-[#0A0A0A] border border-white/10 rounded-2xl w-full max-w-md p-8 shadow-2xl transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                role="dialog"
                aria-modal="true"
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <X size={20} />
                </button>

                <div className="flex flex-col items-center text-center">
                    {/* Success Icon */}
                    <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center mb-6">
                        <Check className="w-8 h-8 text-neon-green" strokeWidth={3} />
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl font-bold text-white mb-3">
                        Thank you for reaching out!
                    </h2>

                    {/* Message */}
                    <p className="text-neutral-400 leading-relaxed mb-6">
                        We've received your message and our team will get back to you shortly.
                    </p>

                    {/* Subtext */}
                    <p className="text-xs text-neutral-600">
                        You can safely close this window.
                    </p>
                </div>
            </div>
        </div>
    );
}
