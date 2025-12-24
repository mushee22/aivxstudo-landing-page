
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Lightbulb, Globe, Users, Zap, Award } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-dark-bg text-white font-sans selection:bg-neon-green selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neon-green">
                        <Users size={14} />
                        <span>About AIVX Studio</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Redefining <span className="text-neon-green">Digital Creativity.</span>
                    </h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                        We are building the engine for the next generation of content creators.
                        Our mission is to democratize professional-grade visual effects through the power of AI.
                    </p>
                </div>
            </section>

            {/* Mission & Vision Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="p-8 rounded-3xl bg-dark-surface border border-white/5 hover:border-white/10 transition-colors space-y-6">
                        <div className="w-12 h-12 rounded-xl bg-neon-green/10 flex items-center justify-center text-neon-green">
                            <Target size={24} />
                        </div>
                        <h2 className="text-3xl font-bold">Our Mission</h2>
                        <p className="text-text-muted leading-relaxed">
                            To empower every creator, markteer, and business owner with the tools to create stunning,
                            professional imagery without the need for expensive equipment or technical expertise.
                            We believe that high-quality visual storytelling should be accessible to everyone.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="p-8 rounded-3xl bg-dark-surface border border-white/5 hover:border-white/10 transition-colors space-y-6">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                            <Lightbulb size={24} />
                        </div>
                        <h2 className="text-3xl font-bold">Our Vision</h2>
                        <p className="text-text-muted leading-relaxed">
                            A future where creativity is limited only by imagination, not resources.
                            We envision a world where AI acts as a collaborative partner, amplifying human
                            creativity rather than replacing it. We are building the infrastructure for this future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-20 px-6 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                        <div className="py-4 md:py-0 px-4">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">1M+</div>
                            <div className="text-sm font-medium text-neon-green uppercase tracking-wider">Images Generated</div>
                        </div>
                        <div className="py-4 md:py-0 px-4">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                            <div className="text-sm font-medium text-neon-green uppercase tracking-wider">Businesses Empowered</div>
                        </div>
                        <div className="py-4 md:py-0 px-4">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
                            <div className="text-sm font-medium text-neon-green uppercase tracking-wider">Uptime Reliability</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">What Drives Us</h2>
                        <p className="text-text-muted">The core values that guide our product and our team.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-4 p-6 rounded-2xl bg-dark-surface/50 border border-white/5">
                            <Globe size={32} className="text-blue-400" />
                            <h3 className="text-xl font-bold">Global Accessibility</h3>
                            <p className="text-sm text-text-muted">Making professional tools available to creators worldwide, regardless of location or budget.</p>
                        </div>
                        <div className="space-y-4 p-6 rounded-2xl bg-dark-surface/50 border border-white/5">
                            <Zap size={32} className="text-amber-400" />
                            <h3 className="text-xl font-bold">Speed & Efficiency</h3>
                            <p className="text-sm text-text-muted">We value your time. Our models are optimized for lightning-fast generation without compromising quality.</p>
                        </div>
                        <div className="space-y-4 p-6 rounded-2xl bg-dark-surface/50 border border-white/5">
                            <Award size={32} className="text-pink-400" />
                            <h3 className="text-xl font-bold">Quality First</h3>
                            <p className="text-sm text-text-muted">We don't settle for "good enough". Our AI is tuned to deliver studio-quality results every time.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
