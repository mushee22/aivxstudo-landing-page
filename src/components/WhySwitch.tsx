'use client';

import { CameraOff, IndianRupee, Layers, Zap, UserMinus, Expand } from 'lucide-react';

const benefits = [
    { icon: CameraOff,   title: "No Studio Required",    desc: "A plain smartphone photo on any surface is all you need to start." },
    { icon: IndianRupee, title: "Lower Monthly Spend",   desc: "Spend significantly less than the ₹15,000–₹80,000 a traditional shoot costs." },
    { icon: Layers,      title: "Catalogue Consistency", desc: "Every image looks like it came from the same shoot, across your entire range." },
    { icon: Zap,         title: "Hours, Not Weeks",      desc: "Update photos for new seasons and platforms the same day, not after weeks of editing." },
    { icon: UserMinus,   title: "No Model Booking",      desc: "Generate model images without briefing, booking, or paying anyone." },
    { icon: Expand,      title: "Multi-Format Output",   desc: "Square, portrait, landscape — all from one upload, for every platform you sell on." },
];

export default function WhySwitch() {
    return (
        <section className="py-20 px-6 bg-dark-bg border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div>
                        <p className="text-xs font-semibold text-neon-green uppercase tracking-[0.2em] mb-3">Why Switch</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            What Changes When You Stop Using a Traditional Photoshoot
                        </h2>
                    </div>
                    <div className="flex items-end">
                        <p className="text-gray-400 text-base leading-relaxed border-l-2 border-white/10 pl-6">
                            Traditional product photography is slow, expensive, and hard to repeat consistently. A single shoot for an Indian jewellery or fashion brand typically costs{' '}
                            <span className="text-white font-semibold">₹15,000–₹80,000</span>{' '}
                            and takes days to deliver.
                        </p>
                    </div>
                </div>

                {/* Benefits mosaic grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8 rounded-2xl overflow-hidden mb-px">
                    {benefits.map((b, i) => (
                        <div
                            key={i}
                            className="group flex items-start gap-5 p-7 bg-dark-bg hover:bg-white/[0.025] transition-colors duration-200"
                        >
                            <div className="w-10 h-10 mt-0.5 rounded-xl bg-neon-green/10 flex items-center justify-center text-neon-green flex-shrink-0 group-hover:bg-neon-green group-hover:text-black transition-all duration-200">
                                <b.icon size={20} />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-white group-hover:text-neon-green transition-colors">
                                    {b.title}
                                </h3>
                                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                                    {b.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stat strip */}
                <div className="grid grid-cols-3 divide-x divide-white/8 border border-white/8 rounded-xl overflow-hidden mt-4">
                    {[
                        { value: '90%', label: 'average cost reduction' },
                        { value: '70%', label: 'of brands save on photography' },
                        { value: '< 1 day', label: 'turnaround vs. weeks traditionally' },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center py-5 px-4 bg-dark-surface text-center">
                            <span className="text-2xl md:text-3xl font-bold text-neon-green">{stat.value}</span>
                            <span className="text-xs text-gray-500 mt-1.5 leading-tight">{stat.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
