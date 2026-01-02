'use client';

import Link from 'next/link';
import { Linkedin, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">

                    {/* Column 1: Branding */}
                    <div className="lg:col-span-1 space-y-8">
                        <Link href="/" className="inline-block">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg overflow-hidden border border-neon-green/50 flex items-center justify-center bg-black">
                                    <img src="/logo.jpg" alt="AIVX Logo" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xl font-bold tracking-tighter text-white/90 hover:text-white transition-colors">
                                    AIVX
                                </span>
                            </div>
                        </Link>
                        <p className="text-neutral-500 text-sm leading-relaxed font-light max-w-xs">
                            AI-powered studio for jewellery images and videos, built for ecommerce brands.
                        </p>
                    </div>

                    {/* Column 2: Product */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-medium text-white tracking-[0.2em] uppercase">Product</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/product-shoot" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Product Shoot
                                </Link>
                            </li>
                            <li>
                                <Link href="/#pricing" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Jewellery */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-medium text-white tracking-[0.2em] uppercase">Jewellery</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/jewellery/ring" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Ring
                                </Link>
                            </li>
                            <li>
                                <Link href="/jewellery/ear-ring" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Ear Ring
                                </Link>
                            </li>
                            <li>
                                <Link href="/jewellery/necklace" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Necklace
                                </Link>
                            </li>
                            <li>
                                <Link href="/jewellery/necklace-set" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Necklace Set
                                </Link>
                            </li>
                            <li>
                                <Link href="/jewellery/bangle" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Bangle
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-medium text-white tracking-[0.2em] uppercase">Company</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/vision" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Vision
                                </Link>
                            </li>
                            <li>
                                <Link href="/mission" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Mission
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/location" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Location
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Social & Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-medium text-white tracking-[0.2em] uppercase">Social</h4>
                        <div className="flex gap-6">
                            <Link href="https://instagram.com" target="_blank" className="text-neutral-500 hover:text-white transition-colors">
                                <Instagram size={20} strokeWidth={1.5} />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="text-neutral-500 hover:text-white transition-colors">
                                <Linkedin size={20} strokeWidth={1.5} />
                            </Link>
                            <Link href="https://youtube.com" target="_blank" className="text-neutral-500 hover:text-white transition-colors">
                                <Youtube size={20} strokeWidth={1.5} />
                            </Link>
                        </div>

                        <div className="pt-2 space-y-4">
                            <a href="mailto:hello@aivx.ai" className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors group">
                                <Mail size={16} className="text-neutral-500 group-hover:text-white transition-colors" />
                                <span>hello@aivx.ai</span>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-neutral-600 text-xs font-light">
                        &copy; {currentYear} AIVX. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-xs text-neutral-600 font-medium tracking-wide">
                        <Link href="/privacy" className="hover:text-neutral-400 transition-colors">
                            PRIVACY POLICY
                        </Link>
                        <Link href="/terms" className="hover:text-neutral-400 transition-colors">
                            TERMS
                        </Link>
                        <Link href="/sitemap.xml" className="hover:text-neutral-400 transition-colors">
                            SITEMAP
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
