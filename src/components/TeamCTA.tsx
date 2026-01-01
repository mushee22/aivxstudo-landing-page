'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TeamCTA() {
    return (
        <section className="bg-neutral-900 py-24 px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                    Want to Work With Us or Learn More?
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-neon-green text-black font-bold rounded-full hover:bg-neon-green/90 transition-all transform hover:scale-105"
                    >
                        Contact Us
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    <Link
                        href="/about"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all backdrop-blur-sm"
                    >
                        About AIVX
                    </Link>
                </div>
            </div>
        </section>
    );
}
