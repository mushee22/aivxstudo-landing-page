import Link from 'next/link';

export default function AccessoriesArticle() {
    return (
        <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
            <div className="max-w-4xl mx-auto space-y-20">

                {/* Section 1 */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        AI Accessories Product Photography Across Every Category
                    </h2>
                    <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                        <p>
                            Accessories product photography demands precision, texture representation, and specific lighting control to showcase fine leather grains, watch complications, glass transparency, and cosmetic packaging. Unlike basic product shoots, premium accessories require specialized lighting and settings to bring out high-end reflections and material details.
                        </p>
                        <p>
                            At AIVX, our AI-powered accessories product shoot studio is optimized for lifestyle brands. From luxury designer bags to premium watch lines and fragrance bottles, our system simulates authentic environments, materials, and lighting styles.
                        </p>
                        <p>
                            Whether you are launching a new line of bags or scaling an entire catalog of fragrances, AI accessories product photography allows you to produce high-resolution, consistent images without booking studios, hiring photographers, or handling shipping logistics.
                        </p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Designed for Every Accessory Category
                    </h2>
                    <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                        <p>
                            Each accessory category presents distinct creative and visual challenges. Our workflows address these detailing requirements directly:
                        </p>
                        <ul className="space-y-5 bg-[#0a0a0a] p-8 rounded-2xl border border-white/10 shadow-lg">
                            <li className="flex gap-4">
                                <span className="text-neon-green mt-1 text-xl">•</span>
                                <span><strong className="text-white font-medium">Bag product photography</strong> requires accurate leather grains, structure hold, and hardware shine detailing.</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-neon-green mt-1 text-xl">•</span>
                                <span><strong className="text-white font-medium">Watch product photography</strong> demands macro-level glass clarity, metal reflections, and dial detail sharpness.</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-neon-green mt-1 text-xl">•</span>
                                <span><strong className="text-white font-medium">Perfume product photography</strong> requires glass transparency, liquid color accuracy, and botanical context environments.</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-neon-green mt-1 text-xl">•</span>
                                <span><strong className="text-white font-medium">Cosmetics product photography</strong> needs clean packaging details, swatches, and cosmetic lifestyle styling.</span>
                            </li>
                        </ul>
                        <p>
                            By optimizing visual generation specifically to each accessory type, we ensure premium, commercially-ready outputs that look consistent across your listings.
                        </p>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="space-y-8 pt-10 border-t border-white/10">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Explore Accessories Categories
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Browse our AI-powered accessories product photography services by category:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Link href="/product-shoot/accessories/ai-bag-product-photography" className="bg-[#0a0a0a] border border-white/10 hover:border-neon-green p-6 rounded-2xl text-center flex items-center justify-center text-white font-medium hover:bg-neon-green/5 transition-all shadow-md hover:shadow-neon-green/10 group">
                            <span className="group-hover:-translate-y-1 transition-transform">Bag product photography</span>
                        </Link>
                        <Link href="/product-shoot/accessories/ai-watch-product-photography" className="bg-[#0a0a0a] border border-white/10 hover:border-neon-green p-6 rounded-2xl text-center flex items-center justify-center text-white font-medium hover:bg-neon-green/5 transition-all shadow-md hover:shadow-neon-green/10 group">
                            <span className="group-hover:-translate-y-1 transition-transform">Watch product photography</span>
                        </Link>
                        <Link href="/product-shoot/accessories/ai-perfume-product-photography" className="bg-[#0a0a0a] border border-white/10 hover:border-neon-green p-6 rounded-2xl text-center flex items-center justify-center text-white font-medium hover:bg-neon-green/5 transition-all shadow-md hover:shadow-neon-green/10 group">
                            <span className="group-hover:-translate-y-1 transition-transform">Perfume product photography</span>
                        </Link>
                        <Link href="/product-shoot/accessories/ai-cosmetics-product-photography" className="bg-[#0a0a0a] border border-white/10 hover:border-neon-green p-6 rounded-2xl text-center flex items-center justify-center text-white font-medium hover:bg-neon-green/5 transition-all shadow-md hover:shadow-neon-green/10 group">
                            <span className="group-hover:-translate-y-1 transition-transform">Cosmetics product photography</span>
                        </Link>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
                        <p className="text-gray-300 font-light italic">
                            Each category page explains how AI simulates lighting, styling, and setups specifically for that accessory type.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
