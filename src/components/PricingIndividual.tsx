
import { Check, RefreshCcw } from 'lucide-react';

export default function PricingIndividual() {
    return (
        <section className="pb-24 px-6 bg-dark-bg border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Individual Pricing
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Flexible pricing for single images and videos without subscriptions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">


                    <div className="p-8 rounded-3xl bg-dark-surface border border-white/5 hover:border-neon-green/30 transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">AI Image Generation</h3>
                                <p className="text-gray-400 text-sm max-w-xs">
                                    Studio-quality jewellery images generated using AI.
                                </p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                                <span className="text-2xl">📸</span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-bold text-white">52</span>
                            <span className="text-gray-500 ml-2">Credits / image</span>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Multiple themes available",
                                "Ecommerce-ready output",
                                "High resolution download",
                                "Instant generation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <Check size={18} className="text-neon-green shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* <Link
                            href="/contact"
                            className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-full font-bold transition-all group-hover:bg-neon-green group-hover:text-black"
                        >
                            Contact Sales
                            <ArrowRight size={18} />
                        </Link> */}
                    </div>

                    <div className="p-8 rounded-3xl bg-dark-surface border border-white/5 hover:border-purple-500/30 transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">AI Video Generation</h3>
                                <p className="text-gray-400 text-sm max-w-xs">
                                    High-quality 5s and 15s jewellery product videos.
                                </p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                <span className="text-2xl">🎥</span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-bold text-white">102</span>
                            <span className="text-gray-500 ml-2">Credits / video</span>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Reel-friendly vertical format",
                                "Multiple angles & styles",
                                "Social media ready",
                                "Smooth motion AI"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <Check size={18} className="text-purple-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* <Link
                            href="/contact"
                            className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-full font-bold transition-all group-hover:bg-purple-500 group-hover:text-white"
                        >
                            Contact Sales
                            <ArrowRight size={18} />
                        </Link> */}
                    </div>


                    <div className="p-8 rounded-3xl bg-dark-surface border border-white/5 hover:border-blue-500/30 transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">AI Regeneration</h3>
                                <p className="text-gray-400 text-sm max-w-xs">
                                    Refine and iterate on your generated images.
                                </p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                <RefreshCcw size={24} className="text-white" />
                            </div>
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-bold text-white">32</span>
                            <span className="text-gray-500 ml-2">Credits / regen</span>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Refine details",
                                "Background changes",
                                "Quick iterations",
                                "Maintain consistency"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <Check size={18} className="text-blue-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
