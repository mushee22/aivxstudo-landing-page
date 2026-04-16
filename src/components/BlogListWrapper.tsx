'use client';

import { useState } from 'react';
import { BlogCategory, blogPosts } from '@/data/blogData';
import BlogFilter from '@/components/BlogFilter';
import BlogList from '@/components/BlogList';

export default function BlogListWrapper() {
    const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');

    // Filter Posts
    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div className='py-24'>
            <BlogFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <BlogList posts={filteredPosts} />
        </div>
    );
}
