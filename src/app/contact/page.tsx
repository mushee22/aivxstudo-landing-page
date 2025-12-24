
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin, MessageSquare, Send, User, Building2 } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-dark-bg text-white selection:bg-neon-green selection:text-black font-sans flex flex-col relative overflow-hidden">
            <Navbar />

            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <main className="grow pt-32 pb-20 px-6 relative z-10 flex items-center justify-center">
                <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Info */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neon-green mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                                </span>
                                Available for New Projects
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                                Let's Build <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">Something Epic.</span>
                            </h1>
                            <p className="text-xl text-text-muted max-w-lg leading-relaxed">
                                Ready to transform your product marketing with AI? We're here to help you scale your creative workflow.
                            </p>
                        </div>

                        <div className="space-y-6 pt-4 border-t border-white/5">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-neon-green group-hover:bg-neon-green/10 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Email Us</h3>
                                    <p className="text-text-muted">hello@aivx.ai</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-neon-green group-hover:bg-neon-green/10 transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">HQ</h3>
                                    <p className="text-text-muted">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-100">
                        {/* Glow highlight behind form */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-green to-emerald-600 rounded-2xl blur opacity-20 pointer-events-none" />

                        <div className="relative bg-dark-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-text-muted uppercase tracking-wider">Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-neon-green transition-colors" size={18} />
                                            <input
                                                type="text"
                                                className="w-full bg-black/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green/50 transition-all placeholder:text-white/20"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-text-muted uppercase tracking-wider">Company</label>
                                        <div className="relative group">
                                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-neon-green transition-colors" size={18} />
                                            <input
                                                type="text"
                                                className="w-full bg-black/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green/50 transition-all placeholder:text-white/20"
                                                placeholder="Acme Inc."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-text-muted uppercase tracking-wider">Email</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-neon-green transition-colors" size={18} />
                                        <input
                                            type="email"
                                            className="w-full bg-black/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green/50 transition-all placeholder:text-white/20"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-text-muted uppercase tracking-wider">Message</label>
                                    <div className="relative group">
                                        <MessageSquare className="absolute left-3 top-4 text-text-muted group-focus-within:text-neon-green transition-colors" size={18} />
                                        <textarea
                                            rows={4}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green/50 transition-all placeholder:text-white/20 resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>
                                </div>

                                <button className="w-full group bg-neon-green text-black font-bold py-4 rounded-xl hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] flex items-center justify-center gap-2 cursor-pointer">
                                    <span>Send Message</span>
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
