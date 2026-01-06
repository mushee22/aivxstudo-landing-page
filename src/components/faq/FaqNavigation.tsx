import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function FaqNavigation() {
    return (
        <nav className="max-w-3xl mx-auto px-6 pt-12">
            <Link
                href="/faq"
                className="inline-flex items-center text-neutral-400 hover:text-white transition-colors group"
            >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 group-hover:bg-white/10 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Back to Help Center</span>
            </Link>
        </nav>
    );
}
