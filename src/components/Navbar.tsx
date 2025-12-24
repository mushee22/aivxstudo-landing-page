
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Navbar Container */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 transition-all duration-300">
                {/* Background Layer (Separated to avoid z-index/stacking context issues for children if transformed) */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-10">
                    <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="w-8 h-8 rounded-lg overflow-hidden border border-neon-green/50 flex items-center justify-center bg-black">
                            <img src="/logo.jpg" alt="AIVX Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-lg tracking-tight text-white block">AIVX Studio</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
                        <Link href="/about" className="hover:text-neon-green transition-colors">About</Link>
                        <Link href="/#features" className="hover:text-neon-green transition-colors">Features</Link>
                        <Link href="/#pricing" className="hover:text-neon-green transition-colors">Pricing</Link>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Link href="/contact" className="bg-neon-green text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-lime-300 transition-all shadow-[0_0_15px_rgba(163,230,53,0.3)] hover:shadow-[0_0_20px_rgba(163,230,53,0.5)] cursor-pointer">
                            Book Demo
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white hover:text-neon-green transition-colors p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Rendered conditionally */}
            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-4'
                    }`}
            >
                <Link
                    href="/about"
                    className={`text-2xl font-medium text-white hover:text-neon-green transition-all duration-300 delay-100 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    About
                </Link>
                <Link
                    href="/#features"
                    className={`text-2xl font-medium text-white hover:text-neon-green transition-all duration-300 delay-150 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Features
                </Link>
                <Link
                    href="/#pricing"
                    className={`text-2xl font-medium text-white hover:text-neon-green transition-all duration-300 delay-200 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Pricing
                </Link>
                <Link
                    href="/contact"
                    className={`text-2xl font-medium text-white hover:text-neon-green transition-all duration-300 delay-250 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Contact
                </Link>

                <div className={`mt-8 transition-all duration-300 delay-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <Link
                        href="/contact"
                        className="bg-neon-green text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-[0_0_15px_rgba(163,230,53,0.3)]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Book Demo
                    </Link>
                </div>
            </div>
        </>
    );
}
