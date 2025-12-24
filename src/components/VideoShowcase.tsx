
'use client';

import { Play, Sparkles } from 'lucide-react';
import { useState } from 'react';
import MediaModal from './MediaModal';

export default function VideoShowcase() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    // Placeholder video URL (using a reliable sample)
    const SAMPLE_VIDEO = "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

    return (
        <section className="py-24 px-6 bg-dark-bg relative overflow-hidden">
            <MediaModal
                isOpen={!!selectedVideo}
                onClose={() => setSelectedVideo(null)}
                type="video"
                src={selectedVideo || ''}
            />

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neon-green mb-4">
                        <Sparkles size={14} />
                        <span>Showcase</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Made with AIVX</h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        Explore what's possible. All videos generated from single image inputs.
                    </p>
                </div>

                {/* 3x3 Grid Pattern */}
                <div className="grid grid-cols-1 md:grid-cols-3 aspect-auto md:aspect-3/2 w-full max-w-5xl mx-auto gap-1 bg-white/5 border border-white/5 p-1">

                    {/* Item 1: Video Placeholder */}
                    <div
                        className="relative group bg-dark-surface overflow-hidden min-h-[200px] flex items-center justify-center cursor-pointer"
                        onClick={() => setSelectedVideo(SAMPLE_VIDEO)}
                    >
                        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                        <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform bg-black/20 backdrop-blur">
                                <Play size={20} fill="currentColor" />
                            </div>
                            <span className="text-xs font-mono text-white/50">SAMPLE 01</span>
                        </div>
                    </div>

                    {/* Item 2: Video Placeholder */}
                    <div
                        className="relative group bg-dark-surface overflow-hidden min-h-[200px] flex items-center justify-center cursor-pointer"
                        onClick={() => setSelectedVideo(SAMPLE_VIDEO)}
                    >
                        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                        <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform bg-black/20 backdrop-blur">
                                <Play size={20} fill="currentColor" />
                            </div>
                            <span className="text-xs font-mono text-white/50">SAMPLE 02</span>
                        </div>
                    </div>

                    {/* Item 3: Typography Card */}
                    <div className="relative bg-white flex items-center justify-center p-8">
                        <h3 className="text-3xl font-bold text-black tracking-tighter">
                            Cinematic.
                        </h3>
                    </div>

                    {/* Item 4: Video Placeholder (Visual Abstract) */}
                    <div
                        className="relative group bg-dark-surface overflow-hidden min-h-[200px] flex items-center justify-center cursor-pointer"
                        onClick={() => setSelectedVideo(SAMPLE_VIDEO)}
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 to-blue-900/20" />
                        <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform bg-black/20 backdrop-blur">
                                <Play size={20} fill="currentColor" />
                            </div>
                            <span className="text-xs font-mono text-white/50">FASHION.MP4</span>
                        </div>
                    </div>

                    {/* Item 5: Center Text/Brand Block */}
                    <div className="relative bg-neon-green flex flex-col items-center justify-center p-6 text-center">
                        <p className="text-2xl md:text-3xl font-bold text-black leading-tight">
                            Your Brand <br /> in Motion.
                        </p>
                    </div>

                    {/* Item 6: Video Placeholder */}
                    <div
                        className="relative group bg-dark-surface overflow-hidden min-h-[200px] flex items-center justify-center cursor-pointer"
                        onClick={() => setSelectedVideo(SAMPLE_VIDEO)}
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-emerald-900/20 to-teal-900/20" />
                        <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform bg-black/20 backdrop-blur">
                                <Play size={20} fill="currentColor" />
                            </div>
                            <span className="text-xs font-mono text-white/50">PRODUCT.MP4</span>
                        </div>
                    </div>

                    {/* Item 7: Text/Info Card */}
                    <div className="relative bg-[#1a1a1a] flex flex-col justify-end p-6">
                        <p className="text-sm text-text-muted mb-2">Capabilities</p>
                        <p className="text-lg font-medium text-white leading-snug">
                            4K Resolution, <br />
                            60 FPS Support, <br />
                            Depth Control.
                        </p>
                    </div>

                    {/* Item 8: Video Placeholder */}
                    <div
                        className="relative group bg-dark-surface overflow-hidden min-h-[200px] flex items-center justify-center cursor-pointer"
                        onClick={() => setSelectedVideo(SAMPLE_VIDEO)}
                    >
                        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                        <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform bg-black/20 backdrop-blur">
                                <Play size={20} fill="currentColor" />
                            </div>
                            <span className="text-xs font-mono text-white/50">SAMPLE 05</span>
                        </div>
                    </div>

                    {/* Item 9: Video Placeholder or Abstract */}
                    <div
                        className="relative group bg-dark-surface overflow-hidden min-h-[200px] flex items-center justify-center cursor-pointer"
                        onClick={() => setSelectedVideo(SAMPLE_VIDEO)}
                    >
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                        <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform bg-black/20 backdrop-blur">
                                <Play size={20} fill="currentColor" />
                            </div>
                            <span className="text-xs font-mono text-white/50">EXPERIMENTAL</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
