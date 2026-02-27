import React from 'react';

interface JewelleryCategorySEOProps {
    title: string;
    children: React.ReactNode;
}

export default function JewelleryCategorySEO({ title, children }: JewelleryCategorySEOProps) {
    return (
        <section className="py-20 px-6 bg-black text-white">
            <div className="max-w-4xl mx-auto space-y-8 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {title}
                </h2>
                {children}
            </div>
        </section>
    );
}
