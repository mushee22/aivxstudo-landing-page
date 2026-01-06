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
                        <div>
                            <p className="text-neutral-500 text-sm leading-relaxed font-light max-w-xs">
                                AI-powered studio for jewellery images and videos, built for ecommerce brands.
                            </p>
                            <br />
                            <p className="text-sm text-neutral-500 font-light leading-relaxed">
                                2nd Floor UL Cyberpark<br />
                                Nellikode, Kozhikode<br />
                                Kerala, 673016
                            </p>
                        </div>
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
                                <Link href="/product-shoot/jewellery/ring" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Ring
                                </Link>
                            </li>
                            <li>
                                <Link href="/product-shoot/jewellery/ear-ring" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Ear Ring
                                </Link>
                            </li>
                            <li>
                                <Link href="/product-shoot/jewellery/necklace" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Necklace
                                </Link>
                            </li>
                            <li>
                                <Link href="/product-shoot/jewellery/necklace-set" className="text-neutral-400 hover:text-white transition-colors text-sm">
                                    Necklace Set
                                </Link>
                            </li>
                            <li>
                                <Link href="/product-shoot/jewellery/bangle" className="text-neutral-400 hover:text-white transition-colors text-sm">
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
                            <Link href="https://www.instagram.com/aivx.studio/" target="_blank" className="text-neutral-500 hover:text-white transition-colors">
                                <Instagram size={20} strokeWidth={1.5} />
                            </Link>
                            <Link href="https://www.linkedin.com/company/aivx-studio/" target="_blank" className="text-neutral-500 hover:text-white transition-colors">
                                <Linkedin size={20} strokeWidth={1.5} />
                            </Link>
                            <Link href="https://wa.me/9072020601" target="_blank" className="text-neutral-500 hover:text-white transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="lucide lucide-whatsapp"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </Link>
                        </div>

                        <div className="pt-2 space-y-4">
                            <a href="mailto:aivxproductions@gmail.com" className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors group">
                                <Mail size={16} className="group-hover:text-neon-green transition-colors" />
                                <span>aivxproductions@gmail.com</span>
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
                        <Link href="/privacy-policy" className="hover:text-neutral-400 transition-colors">
                            PRIVACY POLICY
                        </Link>
                        <Link href="/terms-and-conditions" className="hover:text-neutral-400 transition-colors">
                            TERMS & CONDITIONS
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
