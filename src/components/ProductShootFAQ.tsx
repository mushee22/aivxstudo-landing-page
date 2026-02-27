"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "1. What is an AI jewellery product shoot?",
        answer: "An AI jewellery product shoot uses artificial intelligence to generate studio-quality jewellery images and short-form videos without physical studios, photographers, or model shoots."
    },
    {
        question: "2. Are AI-generated jewellery images realistic?",
        answer: "Yes. Advanced AI systems simulate realistic lighting, metal reflections, gemstone sparkle, and texture detailing, producing photorealistic outputs suitable for ecommerce and advertising."
    },
    {
        question: "3. Is AI jewellery photography suitable for ecommerce platforms?",
        answer: "Absolutely. AI-generated visuals are optimized for Shopify, WooCommerce, Amazon, Flipkart, Myntra, and social commerce platforms."
    },
    {
        question: "4. How does AI reduce jewellery photoshoot cost?",
        answer: "AI eliminates studio rental, professional equipment, model fees, and repeated reshoot expenses — significantly lowering recurring production costs."
    },
    {
        question: "5. Can AI generate both images and short videos?",
        answer: "Yes. AI workflows can produce high-resolution product images and short 5s/15s video reels optimized for Instagram, Facebook, and marketplace promotions."
    },
    {
        question: "6. Is AI jewellery photography scalable for large catalogs?",
        answer: "Yes. Brands can generate visuals for hundreds of products while maintaining consistent lighting, themes, and brand identity across all SKUs."
    }
];

export default function ProductShootFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-6 bg-[#0A0A0A] border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-400 text-lg">
                        AI Jewellery Product Shoot
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium text-white pr-8">
                                    {faq.question}
                                </span>
                                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-neon-green text-black' : 'bg-white/5 text-white'}`}>
                                    {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
