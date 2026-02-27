'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
    q: string;
    a: string;
}

interface JewelleryCategoryFAQProps {
    title: string;
    faqs: FAQItem[];
}

export default function JewelleryCategoryFAQ({ title, faqs }: JewelleryCategoryFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-6 bg-dark-bg text-white">
            <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
                    {title}
                </h2>

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
                                    {i + 1}. {faq.q}
                                </span>
                                <div className={`p-1 rounded-full border transition-all ${openIndex === i ? 'bg-neon-green text-black border-neon-green rotate-180' : 'border-white/10 text-text-muted'}`}>
                                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>

                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-text-muted leading-relaxed border-t border-white/5 mt-2">
                                        {faq.a}
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
