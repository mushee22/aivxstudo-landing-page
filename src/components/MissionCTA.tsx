import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MissionCTA() {
    return (
        <section className="bg-neutral-900 py-24 px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                    Ready to See Our Mission in Action?
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-neon-green text-black font-bold rounded-full hover:bg-neon-green/90 transition-all transform hover:scale-105"
                    >
                        Contact Sales
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
