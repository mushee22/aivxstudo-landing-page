'use client';

import dynamic from 'next/dynamic';

const BeforeAfterSliderContainer = dynamic(() => import('./BeforeAfterSliderContainer'), { ssr: false });

export default function BeforeAfter() {


    return (
        <section className="py-24 px-6 bg-dark-bg border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Before & After</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Drag the slider to see how AIVX transforms simple product images into studio-quality visuals.
                    </p>
                </div>
                <BeforeAfterSliderContainer />
            </div>
        </section>
    );
}
