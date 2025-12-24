
'use client';

import { Check } from 'lucide-react';

export default function WhyAivx() {
    return (
        <section className="py-24 px-6 bg-dark-bg relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Main Card Container */}
                <div className="bg-dark-surface border border-white/5 rounded-[2.5rem] p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center shadow-2xl relative overflow-hidden">

                    {/* Subtle Gradient Overlay inside card */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-neon-green via-blue-500 to-purple-500 opacity-50" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

                    {/* Left Side: Headings */}
                    <div className="space-y-6 relative z-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                            Create Assets That <br />
                            <span className="text-neon-green">Actually Convert.</span>
                        </h2>
                        <p className="text-xl font-medium text-white/90">
                            Professional Grade. Production Ready.
                        </p>
                    </div>

                    {/* Right Side: Checkmark List */}
                    <div className="space-y-8 relative z-10">
                        {[
                            "Precision Control with Depth Maps & ControlNets.",
                            "Train custom LoRAs for 100% Brand Consistency.",
                            "Upscaled to 4K, ready for print and digital ads.",
                            "No artifacts, no weird hands - just clean results.",
                            "API-first architecture for batched processing."
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4 items-start group">
                                <div className="mt-1 w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green shrink-0 group-hover:bg-neon-green group-hover:text-black transition-colors duration-300">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <p className="text-lg text-text-muted group-hover:text-white transition-colors duration-300">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
