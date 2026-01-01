'use client';

import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-dark-bg">

            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                >
                    {/* Placeholder for video file. Ensure 'hero-video.mp4' exists in public folder */}
                    <source src="/hero-video.mp4" type="video/mp4" />
                    <div className="absolute inset-0 bg-dark-bg flex items-center justify-center text-white/20">
                        Video Background (Add /public/hero-video.mp4)
                    </div>
                </video>

                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-black/40" /> {/* General darkening */}
                <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" /> {/* Left-side text legibility */}
                <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-transparent to-transparent h-32 bottom-0" /> {/* Bottom fade */}
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
                <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]">
                        AI Jewellery <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-green to-emerald-400">
                            Product Shoot Studio
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                        Turn simple product photos into premium studio-quality images and reel videos using AI — without studios, models, or high cost.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                        <Link
                            href="/"
                            className="w-full sm:w-auto text-center bg-neon-green text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-lime-300 transition-all shadow-lg shadow-neon-green/20 hover:shadow-neon-green/40 hover:-translate-y-1 transform duration-200"
                        >
                            View Studio
                        </Link>

                        <Link
                            href="/#pricing"
                            className="w-full sm:w-auto text-center px-8 py-4 rounded-full text-lg font-bold text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-1"
                        >
                            Get Pricing
                        </Link>
                    </div>

                    {/* Trust Indicators / Social Proof (Optional Addition based on "Luxury feel") */}
                    <div className="pt-8 flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-white/10 border border-black backdrop-blur-md flex items-center justify-center">
                                    <span className="text-xs">U{i}</span>
                                </div>
                            ))}
                        </div>
                        <p>Trusted by 200+ Jewellery Brands</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
