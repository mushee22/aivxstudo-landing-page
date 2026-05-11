'use client';

import { Camera, Users, Sparkles, ShoppingBag, BookOpen, Rocket, Megaphone, Share2, Video, Building2 } from 'lucide-react';

const services = [
    {
        icon: Camera,
        title: 'AI Apparel Photography',
        description: 'Transform flat-lay clothing photos into professional model shots with AI-powered photography.',
    },
    {
        icon: Users,
        title: 'Fashion Model Campaigns',
        description: 'Generate diverse AI model campaigns showcasing your apparel without booking models or studios.',
    },
    {
        icon: Sparkles,
        title: 'Lifestyle Product Visuals',
        description: 'Create lifestyle and editorial-style product visuals that tell your brand story.',
    },
    {
        icon: ShoppingBag,
        title: 'Ecommerce Product Photography',
        description: 'Produce marketplace-ready product images optimized for online stores and marketplaces.',
    },
    {
        icon: BookOpen,
        title: 'Catalogue Production',
        description: 'Build comprehensive seasonal catalogues with consistent styling across entire collections.',
    },
    {
        icon: Rocket,
        title: 'Product Launch Campaigns',
        description: 'Create complete visual campaigns for new collection launches and seasonal drops.',
    },
    {
        icon: Megaphone,
        title: 'D2C Ad Creatives',
        description: 'Design high-converting ad creatives optimized for direct-to-consumer marketing campaigns.',
    },
    {
        icon: Share2,
        title: 'Social Media Branding',
        description: 'Create on-brand social media content that drives engagement and builds brand identity.',
    },
    {
        icon: Video,
        title: 'Reels / Video Ads',
        description: 'Generate engaging product reel videos and video ads that showcase your apparel in motion.',
    },
    {
        icon: Building2,
        title: 'Enterprise Fashion Production',
        description: 'Large-scale visual content production with dedicated support for enterprise fashion brands.',
    },
];

export default function ApparelServices() {
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
                        Core Apparel <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-green to-emerald-400">Solutions</span>
                    </h2>
                    <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
                        From AI model photography to complete campaign production — everything your fashion brand needs to scale visual content.
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
