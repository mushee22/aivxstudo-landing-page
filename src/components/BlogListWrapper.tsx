'use client';

import { useState } from 'react';
import { BlogCategory, BlogPost } from '@/data/blogData';
import BlogFilter from '@/components/BlogFilter';
import BlogList from '@/components/BlogList';

interface BlogListWrapperProps {
    initialPosts: BlogPost[];
}

export default function BlogListWrapper({ initialPosts }: BlogListWrapperProps) {
    const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');

    // Filter Posts
    const filteredPosts = selectedCategory === 'All'
        ? initialPosts
        : initialPosts.filter(post => post.category === selectedCategory);

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
