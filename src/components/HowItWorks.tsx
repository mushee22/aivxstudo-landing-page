
import { Upload, FolderOpen, Palette, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
    {
        icon: Upload,
        title: "Upload",
        desc: "Drop your raw product image."
    },
    {
        icon: FolderOpen,
        title: "Select",
        desc: "Choose a campaign category."
    },
    {
        icon: Palette,
        title: "Style",
        desc: "Pick an artistic theme."
    },
    {
        icon: Sparkles,
        title: "Generate",
        desc: "Get 4K results instantly."
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 px-6 bg-dark-bg relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Streamlined Workflow</h2>
                        <p className="text-text-muted text-lg">
                            Go from zero to hero. We've simplified the professional design process into four intuitive steps.
                        </p>
                    </div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-linear-to-r from-neon-green/0 via-neon-green/50 to-neon-green/0 z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Step Number Watermark */}
                            <div className="absolute -top-10 -right-4 text-9xl font-bold text-white/5 select-none -z-10 transition-colors group-hover:text-white/10">
                                0{index + 1}
                            </div>

                            <div className="pt-8">
                                <div className="relative w-16 h-16 rounded-2xl bg-dark-surface border border-neon-green/30 flex items-center justify-center text-neon-green shadow-[0_0_20px_rgba(163,230,53,0.2)] group-hover:scale-110 group-hover:bg-neon-green group-hover:text-black transition-all duration-300 z-10 mx-auto md:mx-0">
                                    <step.icon size={28} />
                                </div>
                            </div>

                            <div className="mt-8 relative p-6 rounded-2xl border border-transparent group-hover:border-white/5 group-hover:bg-white/[0.02] transition-colors text-center md:text-left">
                                <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-8 w-px bg-gradient-to-b from-transparent to-neon-green/50" />

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">{step.title}</h3>
                                <p className="text-text-muted text-sm">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
