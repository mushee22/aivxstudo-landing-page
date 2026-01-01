'use client';

import Link from 'next/link';
import { FaqItem } from '@/data/faqs';
import { ArrowRight } from 'lucide-react';

interface FaqListProps {
    faqs: FaqItem[];
}

export default function FaqList({ faqs }: FaqListProps) {
    if (faqs.length === 0) {
        return (
            <div className="text-center py-12 text-neutral-500">
                <p>No results found. Try adjusting your search.</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-6 space-y-6 pb-24">
            {faqs.map((faq) => (
                <div
                    key={faq.id}
                    className="group bg-neutral-900/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-neon-green/30 transition-colors"
                >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="space-y-3 flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-bold text-neon-green uppercase tracking-wider bg-neon-green/10 px-2 py-1 rounded-sm">
                                    {faq.category}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">
                                {faq.question}
                            </h3>
                            <p className="text-neutral-400 font-light line-clamp-2 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                        <div className="shrink-0 pt-1">
                            <Link
                                href={`/faq/${faq.slug}`}
                                className="inline-flex items-center text-sm font-bold text-white hover:text-neon-green transition-colors"
                            >
                                Read more
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
