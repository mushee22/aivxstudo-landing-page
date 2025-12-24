'use client';

import { X } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-dark-surface border border-white/10 rounded-2xl p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
                <p className="text-text-muted mb-6">Need enterprise solutions or custom integrations? Let's talk.</p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors"
                            placeholder="you@company.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-1">Company</label>
                        <input
                            type="text"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors"
                            placeholder="Company name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-1">Message</label>
                        <textarea
                            rows={4}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors"
                            placeholder="How can we help?"
                        />
                    </div>

                    <button className="w-full bg-neon-green text-black font-bold py-4 rounded-lg hover:bg-lime-300 transition-colors mt-2">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
