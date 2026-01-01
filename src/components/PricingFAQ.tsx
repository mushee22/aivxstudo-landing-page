'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "What is included in image pricing?",
        answer: "AI-generated studio-quality jewellery images with selected themes and formats, ready for ecommerce and marketing use."
    },
    {
        question: "What video lengths are supported?",
        answer: "We support high-quality 5-second and 15-second jewellery product videos optimized for reels and ads."
    },
    {
        question: "Can I use the images and videos for commercial purposes?",
        answer: "Yes. All generated images and videos can be used for ecommerce, ads, and branding."
    },
    {
        question: "Do I need professional product photos to start?",
        answer: "No. A simple product image is enough to generate high-quality outputs."
    },
    {
        question: "Are there any hidden costs?",
        answer: "No. Pricing is transparent with no hidden charges."
    },
    {
        question: "Can I upgrade or switch plans later?",
        answer: "Yes. You can upgrade, downgrade, or switch to individual pricing anytime."
    }
];

export default function PricingFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-6 bg-dark-bg/50 border-t border-white/5">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-400">
                        Everything you need to know about AIVX pricing and usage.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-xl transition-all duration-300 ${openIndex === index
                                    ? 'bg-dark-surface border-neon-green/30 shadow-[0_4px_20px_-10px_rgba(163,230,53,0.1)]'
                                    : 'bg-transparent border-white/10 hover:border-white/20'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-hidden"
                                aria-expanded={openIndex === index}
                            >
                                <span className={`text-lg font-medium pr-8 transition-colors ${openIndex === index ? 'text-white' : 'text-gray-200'
                                    }`}>
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 transition-transform duration-300 text-neon-green ${openIndex === index ? 'rotate-180' : ''
                                    }`}>
                                    <ChevronDown />
                                </span>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
