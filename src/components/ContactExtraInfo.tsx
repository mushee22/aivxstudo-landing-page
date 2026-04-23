'use client';

import { CheckCircle2, Package, Globe, Search, MessageSquare, Mail, Phone } from 'lucide-react';

export default function ContactExtraInfo() {
    const brandsUseCases = [
        "AI jewellery product photography — rings, earrings, necklaces, bangles, and pendant sets",
        "AI fashion model photos — clothing on Indian and international AI models without hiring anyone",
        "Ecommerce product images for Shopify, Etsy, Amazon, Meesho, and WhatsApp catalogues",
        "Fashion lookbooks and seasonal campaign visuals",
        "Bulk catalogue production for large collections",
        "Launch visuals for new products and collections within hours"
    ];

    const customSetupItems = [
        "Jewellery brands with large collections or wholesale catalogues",
        "Fashion labels launching new collections regularly across multiple platforms",
        "Clothing and accessories stores that carry both fashion and jewellery",
        "Ecommerce agencies managing photography for multiple clients",
        "D2C brands that need platform-specific image sets at scale"
    ];



    const searchIntents = [
        "AI jewellery photography service or support — help getting started with AI product photos for rings, necklaces, and earrings",
        "AI fashion photography tool contact — reaching the team behind a fashion AI photo platform",
        "Product photography for ecommerce without a studio — replacing expensive shoots with AI-generated images",
        "AI model photoshoot support — setting up virtual model photography for clothing or jewellery",
        "Jewellery photo editing service — retouching, background removal, and enhancement for jewellery images",
        "Custom plan or agency pricing — arranging a volume deal or multi-client workflow"
    ];

    return (
        <div className="space-y-24 pb-20">
            {/* Section: What Brands Use AIVX For */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                What <span className="text-neon-green">Brands</span> Use AIVX For
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                AIVX is used by jewellery brands, fashion labels, and ecommerce sellers to create professional visuals that convert.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {brandsUseCases.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-green/30 transition-all">
                                    <CheckCircle2 className="text-neon-green w-6 h-6 shrink-0 mt-0.5" />
                                    <p className="text-gray-300 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Custom Setup Section */}
            <section className="px-6 py-20 bg-dark-surface border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-xs font-semibold text-neon-green uppercase tracking-wider mb-6">
                            <Package size={14} />
                            <span>Enterprise Solutions</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            Working With a Large Catalogue or Multiple Product Categories?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            If your brand manages a large volume of products, runs seasonal collections across jewellery and fashion, or needs a consistent workflow for multiple clients, the AIVX team can help you set up a custom arrangement.
                        </p>
                        <div className="space-y-4 mb-10">
                            <p className="text-white font-bold text-lg">This includes:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {customSetupItems.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neon-green shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <p className="text-gray-300">
                                Enterprise and agency enquiries receive a tailored response with plan options, credit estimates, and workflow recommendations — <strong>usually within one business day.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Section 8: Search Intent Block */}
            <section className="px-6 py-20 bg-linear-to-b from-dark-surface to-black border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
                                <Search size={14} />
                                <span>Specific Support</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                Looking for AI Photography Support for Your Jewellery or Fashion Brand?
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                If any of the following describes what you are looking for, the AIVX team can help directly.
                            </p>

                            <div className="space-y-8 mt-12">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center">
                                        <Mail className="text-neon-green w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">Email Support</p>
                                        <p className="text-white font-medium">aivxproductions@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center">
                                        <MessageSquare className="text-neon-green w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">WhatsApp Support</p>
                                        <p className="text-white font-medium">+91 90720 20601</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {searchIntents.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all">
                                    <div className="w-2 h-2 rounded-full bg-neon-green mt-2.5 shrink-0" />
                                    <p className="text-gray-300 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
