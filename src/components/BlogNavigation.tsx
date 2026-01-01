'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogNavigation() {
    return (
        <div className="max-w-3xl mx-auto px-6 pb-24 text-center">
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors duration-300 group"
            >
                <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="font-medium">Back to All Articles</span>
            </Link>
        </div>
    );
}
