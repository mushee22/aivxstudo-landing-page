'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "What is AI product photography?",
            a: "AI product photography is a method of creating professional product and model images using software, without needing a physical studio, photographer, or models. You upload a photo of your product, and the AI generates multiple finished images with different backgrounds, lighting styles, and contexts — ready for websites, ads, and marketplaces."
        },
        {
            q: "Can AI create both fashion and jewellery images?",
            a: "Yes. AIVX supports both categories in one platform. For jewellery, it handles rings, earrings, necklaces, bangles, and pendant sets with lighting and detailing optimised for metal and gemstone surfaces. For fashion, it supports clothing items including Indian ethnic wear such as sarees, kurtas, and lehengas — with AI model placement and lifestyle background generation."
        },
        {
            q: "Do I need a studio to use AIVX?",
            a: "No. You do not need a studio, lighting equipment, or a photographer. A basic photo of your product taken on a clean surface with a smartphone is enough. AIVX handles all background removal, lighting enhancement, and professional styling through AI."
        },
        {
            q: "What kind of brands use AIVX?",
            a: "AIVX is used by jewellery brands, fashion labels, D2C clothing businesses, Etsy sellers, Shopify store owners, Meesho resellers, and Instagram boutiques. It is particularly popular with Indian brands that carry both jewellery and clothing and need consistent, professional product images across multiple platforms."
        },
        {
            q: "How much does AIVX cost compared to a traditional photoshoot?",
            a: "A traditional jewellery or fashion photoshoot in India typically costs ₹15,000 to ₹80,000 per session, plus editing time and model fees. AIVX starts with a free plan and paid subscriptions that cost a fraction of a single photoshoot. Most brands using AIVX report saving more than 70% of their previous photography budget."
        },
        {
            q: "Can AIVX generate AI model photos for Indian clothing?",
            a: "Yes. AIVX includes Indian and international AI models. For Indian fashion sellers, this means you can generate model images wearing your sarees, kurtas, lehengas, or salwar suits without booking a model or scheduling a shoot. The platform is specifically built to handle the draping and styling requirements of Indian ethnic wear."
        },
        {
            q: "Is AIVX good for Meesho or Amazon sellers?",
            a: "Yes. AIVX exports images at the correct specifications for Meesho, Amazon, Etsy, Shopify, and other major marketplaces. This includes white background options for main listing images and lifestyle versions for secondary images. Sellers can process entire catalogues in a single session rather than editing photos individually."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Schema.org JSON-LD for Google FAQ Snippets
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <section id="faq" className="py-24 px-6 bg-dark-bg">
            {/* Add FAQ Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-3xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-2">
                        <HelpCircle size={14} />
                        <span>Support</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h2>
                    <p className="text-gray-400 text-lg">Everything you need to know about the product and how it works.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === i ? 'bg-white/5 border-neon-green/30 shadow-[0_0_15px_-5px_var(--neon-glow)]' : 'bg-dark-surface border-white/5 hover:border-white/10'}`}
                        >
                            <button
                                onClick={() => toggleFAQ(i)}
                                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                            >
                                <span className={`font-bold text-lg transition-colors ${openIndex === i ? 'text-white' : 'text-white/80'}`}>
                                    {faq.q}
                                </span>
                                <div className={`p-1 rounded-full border transition-all ${openIndex === i ? 'bg-neon-green text-black border-neon-green rotate-180' : 'border-white/10 text-gray-400'}`}>
                                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>

                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-8 rounded-3xl bg-linear-to-r from-dark-surface to-white/5 border border-white/10 text-center space-y-4">
                    <h3 className="text-xl font-bold text-white">Still have questions?</h3>
                    <p className="text-gray-400">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    <Link href="/contact" className="inline-block bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-neon-green transition-colors mt-2">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}
