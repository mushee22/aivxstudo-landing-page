'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Desktop hover state
    const [isProductShootOpen, setIsProductShootOpen] = useState(false);

    // Mobile accordion states
    const [isMobileProductShootOpen, setIsMobileProductShootOpen] = useState(false);
    const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);

    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const jewelleryCategories = [
        { name: 'Ring', href: '/product-shoot/jewellery/ring' },
        { name: 'Ear Ring', href: '/product-shoot/jewellery/ear-ring' },
        { name: 'Pendant Set', href: '/product-shoot/jewellery/pendant-set' },
        { name: 'Necklace', href: '/product-shoot/jewellery/necklace' },
        { name: 'Necklace Set', href: '/product-shoot/jewellery/necklace-set' },
        { name: 'Bangle', href: '/product-shoot/jewellery/bangle' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                    // Base (Mobile + Defaults)
                    'bg-[#0A0A0A] py-4'
                    } ${
                    // Desktop Defaults (Top State)
                    'lg:bg-transparent lg:py-6'
                    } ${
                    // Scrolled State (Mobile + Desktop)
                    isScrolled
                        ? 'lg:bg-black/80 lg:backdrop-blur-md lg:py-4 shadow-sm shadow-black/50'
                        : ''
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-16 lg:h-auto flex items-center justify-between">

                    {/* 1. Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 z-50 relative group"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <div className="w-8 h-8 rounded-lg overflow-hidden border border-neon-green/50 flex items-center justify-center bg-black">
                            <img src="/logo.jpg" alt="AIVX Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xl lg:text-2xl font-bold tracking-tighter text-white group-hover:text-neon-green transition-colors duration-300">
                            AIVX
                        </span>
                    </Link>

                    {/* 2. Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">
                        <Link href="/" className={`text-sm font-medium transition-colors duration-300 ${pathname === '/' ? 'text-neon-green' : 'text-neutral-300 hover:text-white'}`}>
                            Studio
                        </Link>
                        {/* Product Shoot Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsProductShootOpen(true)}
                            onMouseLeave={() => setIsProductShootOpen(false)}
                        >
                            <button className={`flex items-center gap-1.5 text-sm font-medium transition-all duration-300 ${isProductShootOpen || pathname.startsWith('/product-shoot') ? 'text-neon-green' : 'text-neutral-300 hover:text-white'}`}>
                                Product Shoot
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-300 ${isProductShootOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {/* Mega Menu Panel */}
                            <div
                                className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px] transition-all duration-300 transform origin-top ${isProductShootOpen
                                    ? 'opacity-100 visible translate-y-0 scale-100'
                                    : 'opacity-0 invisible translate-y-4 scale-95 pointer-events-none'
                                    }`}
                            >
                                <div className="bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6 grid grid-cols-12 gap-8 overflow-hidden">
                                    {/* Left Column: Context */}
                                    <div className="col-span-5 flex flex-col justify-between border-r border-white/5 pr-6">
                                        <div className="space-y-4">
                                            <span className="text-xs font-bold text-neon-green uppercase tracking-widest">
                                                Jewellery Product Shoot
                                            </span>
                                            <p className="text-sm text-neutral-400 leading-relaxed font-light">
                                                AI-powered studio-quality images and videos tailored for modern jewellery brands.
                                            </p>
                                        </div>
                                        <div className="pt-8">
                                            <Link href="/product-shoot" className="text-xs font-bold text-white flex items-center gap-2 hover:gap-3 transition-all">
                                                Overview
                                                <ArrowRight size={12} className="text-neon-green" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right Column: Categories Grid */}
                                    <div className="col-span-7">
                                        <div className="grid grid-cols-2 gap-3">
                                            {jewelleryCategories.map((category) => (
                                                <Link
                                                    key={category.name}
                                                    href={category.href}
                                                    className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item"
                                                >
                                                    <span className="block text-sm font-medium text-neutral-300 group-hover/item:text-white transition-colors">
                                                        {category.name}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                        {/* <div className="mt-6 pt-4 border-t border-white/5 text-center">
                                            <Link
                                                href="/product-shoot/jewellery"
                                                className="text-xs text-neutral-500 hover:text-neon-green transition-colors duration-300 flex items-center justify-center gap-1"
                                            >
                                                View All Jewellery Categories
                                                <ArrowRight size={10} />
                                            </Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Simple Links */}
                        <Link href="/pricing" className={`text-sm font-medium transition-colors duration-300 ${pathname === '/pricing' ? 'text-neon-green' : 'text-neutral-300 hover:text-white'}`}>
                            Pricing
                        </Link>
                        <Link href="/blog" className={`text-sm font-medium transition-colors duration-300 ${pathname.startsWith('/blog') ? 'text-neon-green' : 'text-neutral-300 hover:text-white'}`}>
                            Blog
                        </Link>
                        <div className="group relative">
                            <span className="text-sm font-medium text-neutral-300 cursor-default hover:text-white transition-colors">Company</span>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="bg-dark-surface border border-white/10 rounded-xl p-2 w-40 flex flex-col gap-1 shadow-xl">
                                    <Link href="/about" className="block px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg">About</Link>
                                    <Link href="/mission" className="block px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg">Mission</Link>
                                    <Link href="/vision" className="block px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg">Vision</Link>
                                    <Link href="/team" className="block px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg">Team</Link>
                                    <Link href="/location" className="block px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg">Location</Link>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* 3. CTA Button (Desktop) */}
                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            className="bg-neon-green text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-lime-300 transition-all shadow-lg shadow-neon-green/20 hover:shadow-neon-green/40 hover:-translate-y-0.5"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-white p-2 -mr-2 z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} className="text-white" />
                        ) : (
                            <div className="flex flex-col gap-1.5 w-6">
                                <span className="h-0.5 w-full bg-white rounded-full"></span>
                                <span className="h-0.5 w-3/4 bg-white rounded-full ml-auto"></span>
                                <span className="h-0.5 w-full bg-white rounded-full"></span>
                            </div>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Backdrop */}
            <div
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Bottom Sheet Navigation */}
            <div
                className={`fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A] rounded-t-[32px] border-t border-white/10 overflow-hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
                    }`}
                style={{ height: '85vh' }}
            >
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto pt-8 pb-32 px-6">
                    <nav className="flex flex-col space-y-6">
                        <Link
                            href="/"
                            className={`text-2xl font-medium py-2 transition-colors ${pathname === '/' ? 'text-neon-green' : 'text-white hover:text-neon-green'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Studio
                        </Link>

                        {/* 1. Product Shoot Accordion */}
                        <div>
                            <button
                                onClick={() => setIsMobileProductShootOpen(!isMobileProductShootOpen)}
                                className="w-full flex items-center justify-between text-2xl font-medium text-white py-2 group"
                            >
                                Product Shoot
                                <ChevronDown
                                    size={24}
                                    className={`text-neutral-500 group-hover:text-white transition-transform duration-300 ${isMobileProductShootOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileProductShootOpen ? 'max-h-[500px] opacity-100 mt-2 mb-4' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="flex flex-col gap-3 pl-4 border-l border-white/10 ml-2">
                                    {jewelleryCategories.map((category) => (
                                        <Link
                                            key={category.name}
                                            href={category.href}
                                            className="text-neutral-400 hover:text-neon-green text-lg transition-colors py-1"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {category.name}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/product-shoot"
                                        className="text-neon-green font-medium text-base pt-2 flex items-center gap-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        View Overview <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 2. Simple Links */}
                        <Link
                            href="/pricing"
                            className="text-2xl font-medium text-white py-2 hover:text-neon-green transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/blog"
                            className="text-2xl font-medium text-white py-2 hover:text-neon-green transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Blog
                        </Link>

                        {/* 3. Company Accordion */}
                        <div>
                            <button
                                onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
                                className="w-full flex items-center justify-between text-2xl font-medium text-white py-2 group"
                            >
                                Company
                                <ChevronDown
                                    size={24}
                                    className={`text-neutral-500 group-hover:text-white transition-transform duration-300 ${isMobileCompanyOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileCompanyOpen ? 'max-h-[300px] opacity-100 mt-2 mb-4' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="flex flex-col gap-3 pl-4 border-l border-white/10 ml-2">
                                    <Link href="/about" className="text-neutral-400 hover:text-neon-green text-lg py-1" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                                    <Link href="/mission" className="text-neutral-400 hover:text-neon-green text-lg py-1" onClick={() => setIsMobileMenuOpen(false)}>Mission</Link>
                                    <Link href="/vision" className="text-neutral-400 hover:text-neon-green text-lg py-1" onClick={() => setIsMobileMenuOpen(false)}>Vision</Link>
                                    <Link href="/team" className="text-neutral-400 hover:text-neon-green text-lg py-1" onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
                                    <Link href="/location" className="text-neutral-400 hover:text-neon-green text-lg py-1" onClick={() => setIsMobileMenuOpen(false)}>Location</Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="text-2xl font-medium text-white py-2 hover:text-neon-green transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>

                    </nav>
                </div>

                {/* Fixed Bottom CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#0A0A0A] border-t border-white/10">
                    <Link
                        href="/contact"
                        className="block w-full bg-neon-green text-black py-4 rounded-xl text-center text-lg font-bold hover:bg-lime-300 transition-colors shadow-lg shadow-neon-green/20"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    );
}
