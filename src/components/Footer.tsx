
import Link from 'next/link';
import { Linkedin, Instagram, Phone, MapPin, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 px-6 bg-dark-bg border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Brand & Socials */}
                <div className="flex flex-col items-start gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg overflow-hidden border border-neon-green/50 flex items-center justify-center bg-black">
                            <img src="/logo.jpg" alt="AIVX Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-lg text-white">AIVX Studio</span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">
                        Transform your images with AI-powered themes. Create professional marketing assets in seconds.
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://linkedin.com" target="_blank" className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-neon-green hover:text-black hover:scale-110 transition-all">
                            <Linkedin size={18} />
                        </Link>
                        <Link href="https://wa.me/1234567890" target="_blank" className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-neon-green hover:text-black hover:scale-110 transition-all">
                            <MessageCircle size={18} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-neon-green hover:text-black hover:scale-110 transition-all">
                            <Instagram size={18} />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="font-bold text-white text-lg">Product</h4>
                    <div className="flex flex-col gap-3 text-sm text-text-muted">
                        <Link href="#features" className="hover:text-neon-green transition-colors w-fit">Features</Link>
                        <Link href="#pricing" className="hover:text-neon-green transition-colors w-fit">Pricing</Link>
                        <Link href="#showcase" className="hover:text-neon-green transition-colors w-fit">Showcase</Link>
                        <Link href="#faq" className="hover:text-neon-green transition-colors w-fit">FAQ</Link>
                    </div>
                </div>

                {/* Company Links */}
                <div className="space-y-4">
                    <h4 className="font-bold text-white text-lg">Company</h4>
                    <div className="flex flex-col gap-3 text-sm text-text-muted">
                        <Link href="/about" className="hover:text-neon-green transition-colors w-fit">About</Link>
                        <Link href="/contact" className="hover:text-neon-green transition-colors w-fit">Contact</Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h4 className="font-bold text-white text-lg">Contact Us</h4>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3 text-sm text-text-muted group">
                            <MapPin size={18} className="shrink-0 text-neon-green mt-0.5 group-hover:scale-110 transition-transform" />
                            <span>
                                123 AI Boulevard, <br />
                                Tech District, <br />
                                San Francisco, CA 94105
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-text-muted group">
                            <Phone size={18} className="shrink-0 text-neon-green group-hover:scale-110 transition-transform" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-text-muted group">
                            <Mail size={18} className="shrink-0 text-neon-green group-hover:scale-110 transition-transform" />
                            <span>hello@aivx.ai</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
                <p>© 2025 AIVX Studio. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
