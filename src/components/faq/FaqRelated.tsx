'use client';

import Link from 'next/link';
import { FaqItem } from '@/data/faqs';
import { ArrowRight } from 'lucide-react';

interface FaqRelatedProps {
    relatedFaqs: FaqItem[];
}

export default function FaqRelated({ relatedFaqs }: FaqRelatedProps) {
    if (relatedFaqs.length === 0) return null;

    return (
        <section className="bg-neutral-900 border-t border-white/5 py-16 px-6">
            <div className="max-w-3xl mx-auto space-y-8">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                    Related Questions
                </h3>

                <div className="grid grid-cols-1 gap-4">
                    {relatedFaqs.map((faq) => (
                        <Link
                            key={faq.id}
                            href={`/faq/${faq.slug}`}
                            className="group block bg-black border border-white/5 rounded-xl p-6 hover:border-neon-green/30 transition-all duration-300"
                        >
                            <div className="flex justify-between items-center gap-4">
                                <span className="text-lg font-medium text-white group-hover:text-neon-green transition-colors">
                                    {faq.question}
                                </span>
                                <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-neon-green transition-colors shrink-0" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
