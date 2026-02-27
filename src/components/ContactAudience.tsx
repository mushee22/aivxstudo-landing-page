import React from 'react';
import Link from 'next/link';

export default function ContactAudience() {
    return (
        <section className="py-20 px-6 bg-black text-white">
            <div className="max-w-4xl mx-auto space-y-8 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Work With AIVX Studio – AI Jewellery Photography Experts
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed">
                    AIVX Studio specializes in AI-powered jewellery (jewelry) product photography for ecommerce brands worldwide. Whether you need ring photography, necklace catalog visuals, pendant-set campaigns, or full jewellery collection production, our AI workflows are designed to deliver studio-quality results without traditional production delays.
                </p>

                <div className="text-left">
                    <h3 className="text-xl font-semibold mb-4">We work with:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-300">
                        <li>D2C jewellery brands</li>
                        <li>Ecommerce startups</li>
                        <li>Marketplace sellers</li>
                        <li>Growing international jewellery labels</li>
                        <li>Luxury-inspired digital brands</li>
                    </ul>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                    From concept to final output, our team ensures high-resolution, ecommerce-ready visuals optimized for websites, social commerce, paid advertising, and digital catalogs.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    If you’re exploring scalable visual production for your jewellery brand, you can also review our <Link href="/product-shoot/jewellery" className="font-bold text-neon-green hover:underline">AI jewellery product photography services</Link> to understand our full capabilities.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    We respond to all inquiries within 24 hours and are happy to guide you through pricing, themes, and custom production requirements.
                </p>

                <p className="text-xl font-bold mt-8 text-white">
                    Let’s build something exceptional.
                </p>
            </div>
        </section>
    );
}
