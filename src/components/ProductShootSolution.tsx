import { CheckCircle2, Wand2 } from 'lucide-react';
import Image from 'next/image';

const benefits = [
    {
        title: "AI-Powered Product Shoot",
        desc: "Replace studios, photographers, and models with AI."
    },
    {
        title: "Jewellery-Specific Intelligence",
        desc: "Optimized for jewellery lighting, reflections, and detailing."
    },
    {
        title: "Image & Video Generation",
        desc: "Generate studio-quality images and 5s / 15s reel videos."
    },
    {
        title: "Multiple Themes & Models",
        desc: "Choose from various themes and Indian / International models."
    },
    {
        title: "Instant & Scalable",
        desc: "Create visuals for hundreds of products without repeated shoots."
    }
];

export default function ProductShootSolution() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-dark-bg to-black border-b border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-sm font-medium">
                                <Wand2 size={16} />
                                <span>The Solution</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                The <span className="text-neon-green">AIVX</span> Solution
                            </h2>
                            <p className="text-gray-400 text-lg max-w-xl">
                                A smarter, faster, and cost-effective way to create jewellery product visuals using AI.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green mt-1 group-hover:scale-110 transition-transform">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visuals */}
                    <div className="relative">
                        {/* Abstract Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 space-y-6">
                            {/* Main AI Result Card */}
                            <div className="bg-dark-surface rounded-2xl p-3 border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                                    <Image
                                        src="/image/ai-generated-image.png"
                                        alt="AI Generated Result"
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                        <div className="text-white font-bold text-sm">AI Generated Result</div>
                                        <div className="text-xs text-neon-green">Studio Lighting • Model • 4K</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Input Card (Simulating 'Before' state) */}
                            <div className="absolute -left-4 -bottom-4 md:-left-12 md:bottom-12 w-48 p-2 bg-dark-bg rounded-xl border border-white/10 shadow-xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
                                <div className="aspect-square rounded-lg overflow-hidden bg-white/5 relative">
                                    <Image
                                        src="/image/raw-input-image.png"
                                        alt="Raw Product"
                                        fill
                                        className="w-full h-full object-cover opacity-70"
                                    />
                                </div>
                                <div className="mt-2 text-center">
                                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Input Image</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
