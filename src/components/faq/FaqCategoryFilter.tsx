'use client';

import { FaqCategory } from '@/data/faqs';

interface FaqCategoryFilterProps {
    categories: FaqCategory[];
    selectedCategory: FaqCategory | 'All';
    onSelectCategory: (category: FaqCategory | 'All') => void;
}

export default function FaqCategoryFilter({ categories, selectedCategory, onSelectCategory }: FaqCategoryFilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-3 px-6 py-12 max-w-5xl mx-auto">
            <button
                onClick={() => onSelectCategory('All')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'All'
                        ? 'bg-neon-green text-black'
                        : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
                    }`}
            >
                All
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                            ? 'bg-neon-green text-black'
                            : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
