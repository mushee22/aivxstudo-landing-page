'use client';

import { Camera, Sparkles, Users, ShoppingBag, BookOpen, Megaphone, Video, Share2, Package, Building2 } from 'lucide-react';

const services = [
    {
        icon: Camera,
        title: 'AI Jewellery Photography',
        description: 'Transform plain jewellery photos into studio-quality product images with AI-powered backgrounds and lighting.',
    },
    {
        icon: Sparkles,
        title: 'CAD Render Enhancement',
        description: 'Convert CAD files into photorealistic luxury product visuals ready for marketing and sales.',
    },
    {
        icon: Users,
        title: 'AI Model Campaigns',
        description: 'Generate professional model shots showcasing your jewellery pieces without booking models or studios.',
    },
    {
        icon: ShoppingBag,
        title: 'Product Listing Visuals',
        description: 'Create marketplace-ready product images optimized for Amazon, Flipkart, and other ecommerce platforms.',
    },
    {
        icon: BookOpen,
        title: 'Jewellery Catalogue Generation',
        description: 'Build comprehensive product catalogues with consistent styling across all jewellery pieces.',
    },
    {
        icon: Megaphone,
        title: 'Ad Creative Production',
        description: 'Design high-converting ad creatives for Facebook, Instagram, and Google campaigns.',
    },
    {
        icon: Video,
        title: 'Reels / Video Ads',
        description: 'Generate engaging product reel videos and video ads that showcase your jewellery in motion.',
    },
    {
        icon: Share2,
        title: 'Social Media Branding',
        description: 'Create scroll-stopping social media content that builds brand identity and engagement.',
    },
    {
        icon: Package,
        title: 'Wholesale Catalogue Assets',
        description: 'Produce professional B2B catalogues and lookbooks for wholesale buyers and distributors.',
    },
    {
        icon: Building2,
        title: 'Enterprise Visual Production',
        description: 'Large-scale visual content production with dedicated support for enterprise jewellery brands.',
    },
];

export default function JewelleryServices() {
    return (
        <section className="relative w-full bg-[#0A0A0A] py-12 md:py-16 px-6 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-8 md:mb-10">
                    <div className="inline-flex items-center gap-2 mb-3">
                        <span className="h-px w-8 bg-neon-green"></span>
                        <span className="text-neon-green font-medium tracking-widest uppercase text-xs">
                            What We Offer
                        </span>
                        <span className="h-px w-8 bg-neon-green"></span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                        Core Jewellery <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-green to-emerald-400">Solutions</span>
                    </h2>
                    <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
                        From product photography to complete catalogue production — everything your jewellery brand needs to scale visual content.
                    </p>
                </div>

                {/* Services Grid - Staggered Layout */}
                <div className="space-y-6">

                    {/* Row 1: First 3 cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.slice(0, 3).map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-neon-green/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neon-green/10"
                                >
                                    <div className="absolute inset-0 bg-neon-green/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-neon-green/10 text-neon-green group-hover:bg-neon-green group-hover:text-black transition-all duration-300">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="relative text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="relative text-gray-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Row 2: Next 4 cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.slice(3, 7).map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index + 3}
                                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-neon-green/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neon-green/10"
                                >
                                    <div className="absolute inset-0 bg-neon-green/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-neon-green/10 text-neon-green group-hover:bg-neon-green group-hover:text-black transition-all duration-300">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="relative text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="relative text-gray-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Row 3: Last 3 cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.slice(7, 10).map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index + 7}
                                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-neon-green/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neon-green/10"
                                >
                                    <div className="absolute inset-0 bg-neon-green/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-neon-green/10 text-neon-green group-hover:bg-neon-green group-hover:text-black transition-all duration-300">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="relative text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="relative text-gray-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* Bottom Text */}
                <div className="text-center mt-12 md:mt-16">
                    <p className="text-gray-400 text-sm md:text-base">
                        Need a custom solution? <a href="/contact" className="text-neon-green hover:underline font-semibold">Contact our team</a> for enterprise packages.
                    </p>
                </div>

            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
