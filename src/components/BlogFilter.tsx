'use client';

import { BlogCategory, blogCategories } from '@/data/blogData';

interface BlogFilterProps {
    selectedCategory: BlogCategory;
    onSelectCategory: (category: BlogCategory) => void;
}

export default function BlogFilter({ selectedCategory, onSelectCategory }: BlogFilterProps) {
    return (
        <section className="bg-black pt-12 pb-6 px-6 border-b border-white/5">
            <div className="max-w-4xl mx-auto space-y-8 text-center">

                {/* Section Label */}
                <span className="text-neon-green font-bold tracking-widest text-2xl uppercase inline-block">
                    Latest Blogs
                </span>


                {/* <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-8">
                    {blogCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onSelectCategory(category)}
                            className={`text-lg transition-all duration-300 relative group font-light ${selectedCategory === category
                                ? 'text-white font-medium'
                                : 'text-neutral-500 hover:text-white'
                                }`}
                        >
                           
                            {category}

                        
                            <span
                                className={`absolute -bottom-2 left-0 w-full h-px bg-neon-green transition-transform duration-300 origin-left ${selectedCategory === category ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                                    }`}
                            />
                        </button>
                    ))}
                </div> */}
            </div>
        </section>
    );
}
