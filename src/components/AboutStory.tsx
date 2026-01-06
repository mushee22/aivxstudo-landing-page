
import { Sparkles, Zap, Layers, BarChart } from 'lucide-react';

export default function AboutStory() {
    return (
        <section className="bg-black py-24 px-6 md:py-32 border-b border-white/5 relative overflow-hidden">
            {/* Background Texture for anchoring */}
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none opacity-20" />

            <div className="max-w-7xl mx-auto space-y-24 relative z-10">

                {/* 1. Section Header */}
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <span className="text-neon-green font-medium tracking-widest text-xs uppercase bg-white/5 px-3 py-1 rounded-full">
                        Our Journey
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        The Story Behind AIVX
                    </h2>
                    <p className="text-xl text-neutral-400 font-light">
                        How we rethought jewellery product shoots using AI.
                    </p>
                </div>

                {/* 2. Story Timeline (3-Column Grid) */}
                <div className="relative">
                    {/* Continuous Vertical Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">

                        {/* Step 01 (Left Content) */}
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-x-8 lg:gap-x-16">
                            {/* Left: Content */}
                            <div className="order-2 md:order-1 md:text-right p-6 md:p-0">
                                <span className="text-neon-green font-bold text-xs tracking-widest uppercase mb-2 block">01 — The Problem</span>
                                <h3 className="text-2xl font-bold text-white mb-4">Traditional Friction</h3>
                                <p className="text-neutral-400 leading-relaxed font-light text-lg">
                                    Traditional jewellery shoots are expensive, slow, and difficult to scale. Coordinating studios, photographers, and retouching creates endless bottlenecks.
                                </p>
                            </div>
                            {/* Center: Dot */}
                            <div className="hidden md:flex order-1 md:order-2 relative z-10 justify-center">
                                <div className="w-4 h-4 rounded-full bg-black border-2 border-neon-green shadow-[0_0_10px_rgba(204,255,0,0.4)]" />
                            </div>
                            {/* Right: Empty */}
                            <div className="hidden md:block order-3" />
                        </div>

                        {/* Step 02 (Right Content) */}
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-x-8 lg:gap-x-16">
                            {/* Left: Empty */}
                            <div className="hidden md:block order-1" />
                            {/* Center: Dot */}
                            <div className="hidden md:flex order-1 md:order-2 relative z-10 justify-center">
                                <div className="w-4 h-4 rounded-full bg-black border-2 border-neon-green shadow-[0_0_10px_rgba(204,255,0,0.4)]" />
                            </div>
                            {/* Right: Content */}
                            <div className="order-2 md:order-3 md:text-left p-6 md:p-0">
                                <span className="text-neon-green font-bold text-xs tracking-widest uppercase mb-2 block">02 — The Insight</span>
                                <h3 className="text-2xl font-bold text-white mb-4">Digital Replication</h3>
                                <p className="text-neutral-400 leading-relaxed font-light text-lg">
                                    AI can replicate studio lighting and reflections without physical shoots. We realized virtual photography offers infinite flexibility and speed.
                                </p>
                            </div>
                        </div>

                        {/* Step 03 (Left Content) */}
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-x-8 lg:gap-x-16">
                            {/* Left: Content */}
                            <div className="order-2 md:order-1 md:text-right p-6 md:p-0">
                                <span className="text-neon-green font-bold text-xs tracking-widest uppercase mb-2 block">03 — The Build</span>
                                <h3 className="text-2xl font-bold text-white mb-4">Jewellery-First Engine</h3>
                                <p className="text-neutral-400 leading-relaxed font-light text-lg">
                                    AIVX was designed specifically for jewellery. We trained our models on the physics of metal and gemstones to ensure gemological accuracy.
                                </p>
                            </div>
                            {/* Center: Dot */}
                            <div className="hidden md:flex order-1 md:order-2 relative z-10 justify-center">
                                <div className="w-4 h-4 rounded-full bg-black border-2 border-neon-green shadow-[0_0_10px_rgba(204,255,0,0.4)]" />
                            </div>
                            {/* Right: Empty */}
                            <div className="hidden md:block order-3" />
                        </div>

                        {/* Step 04 (Right Content) */}
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-x-8 lg:gap-x-16">
                            {/* Left: Empty */}
                            <div className="hidden md:block order-1" />
                            {/* Center: Dot */}
                            <div className="hidden md:flex order-1 md:order-2 relative z-10 justify-center">
                                <div className="w-4 h-4 rounded-full bg-black border-2 border-neon-green shadow-[0_0_10px_rgba(204,255,0,0.4)]" />
                            </div>
                            {/* Right: Content */}
                            <div className="order-2 md:order-3 md:text-left p-6 md:p-0">
                                <span className="text-neon-green font-bold text-xs tracking-widest uppercase mb-2 block">04 — Today</span>
                                <h3 className="text-2xl font-bold text-white mb-4">Democratizing Access</h3>
                                <p className="text-neutral-400 leading-relaxed font-light text-lg">
                                    AIVX powers studio-quality images and videos for brands at a fraction of the cost, making premium visual storytelling accessible to everyone.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 3. Visual / Brand Highlight Strip */}
                <div className="pt-20 border-t border-white/10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <Sparkles className="w-8 h-8 text-neutral-400" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Jewellery-First AI</span>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <Layers className="w-8 h-8 text-neutral-400" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Ecommerce Ready</span>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <Zap className="w-8 h-8 text-neutral-400" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Image & Video</span>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                            <BarChart className="w-8 h-8 text-neutral-400" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Cost Efficient</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
