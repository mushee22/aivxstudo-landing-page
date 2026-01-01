'use client';

import { Search } from 'lucide-react';

interface FaqSearchProps {
    value: string;
    onChange: (value: string) => void;
}

export default function FaqSearch({ value, onChange }: FaqSearchProps) {
    return (
        <div className="relative max-w-2xl mx-auto -mt-8 px-6 z-10">
            <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-neutral-500" />
                </div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search for answers..."
                    className="w-full bg-neutral-900 text-white pl-12 pr-4 py-4 rounded-full border border-white/10 focus:border-neon-green focus:ring-1 focus:ring-neon-green outline-hidden shadow-xl placeholder-neutral-500 transition-all font-light"
                />
            </div>
        </div>
    );
}
