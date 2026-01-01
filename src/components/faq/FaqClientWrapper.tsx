'use client';

import { useState } from 'react';
import { faqs, faqCategories, FaqCategory } from '@/data/faqs';
import FaqHero from '@/components/faq/FaqHero';
import FaqSearch from '@/components/faq/FaqSearch';
import FaqCategoryFilter from '@/components/faq/FaqCategoryFilter';
import FaqList from '@/components/faq/FaqList';

export default function FaqClientWrapper() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<FaqCategory | 'All'>('All');

    // Filter Logic
    const filteredFaqs = faqs.filter((faq) => {
        // 1. Filter by Category
        const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;

        // 2. Filter by Search (Question or Answer)
        const query = searchQuery.toLowerCase();
        const matchesSearch =
            faq.question.toLowerCase().includes(query) ||
            faq.answer.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });

    return (
        <main className="bg-black min-h-screen">
            <FaqHero />

            <div className="relative z-20">
                <FaqSearch
                    value={searchQuery}
                    onChange={setSearchQuery}
                />
            </div>

            <FaqCategoryFilter
                categories={faqCategories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <FaqList faqs={filteredFaqs} />
        </main>
    );
}
