'use client';


import { Linkedin, User } from 'lucide-react';

const teamMembers = [
    {
        name: "Manu Rashid",
        role: "Founder",
        description: "Visionary leader driving AIVX's mission to revolutionize product photography.",
        linkedin: "https://www.linkedin.com/in/manu-rashid-39b1b7338/"
    },
    {
        name: "Mubarak",
        role: "Co-founder",
        description: "Building the core technology and strategy for scalable AI solutions.",
        linkedin: "https://www.linkedin.com/in/mubarak-k-k-9a790560/"
    },
    {
        name: "Risham KC",
        role: "CFO",
        description: "Managing financial strategy and sustainable growth for the studio.",
        linkedin: "https://www.linkedin.com/in/risham-kc-67119724b/"
    }
];

export default function AboutTeam() {
    return (
        <section className="bg-black py-24 px-6 md:py-32 border-b border-white/5 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-purple-900/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* 1. Section Header */}
                <div className="text-center space-y-4 max-w-2xl mx-auto mb-20 md:mb-24">
                    <span className="text-neon-green font-medium tracking-widest text-xs uppercase bg-white/5 px-3 py-1 rounded-full">
                        Our Team
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        People Behind AIVX
                    </h2>
                    <p className="text-xl text-neutral-400 font-light leading-relaxed">
                        A small, focused team building the future of jewellery product visualization using AI.
                    </p>
                </div>

                {/* 2. Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group flex flex-col items-center text-center space-y-6">
                            {/* Image Container */}
                            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-white/5 group-hover:border-neon-green/50 transition-colors duration-500">
                                <div className="w-full h-full bg-neutral-900 flex items-center justify-center group-hover:bg-neutral-800 transition-colors duration-500">
                                    <User className="w-1/2 h-1/2 text-neutral-600 group-hover:text-neutral-400 transition-colors duration-500" strokeWidth={1.5} />
                                </div>

                                {/* Overlay / Social Icon on Hover */}
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    aria-label={`LinkedIn profile for ${member.name}`}
                                >
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        <Linkedin className="w-5 h-5 text-black" />
                                    </div>
                                </a>
                            </div>

                            {/* Info */}
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                                    {member.role}
                                </p>
                                <p className="text-neutral-400 font-light text-sm max-w-xs mx-auto pt-2">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
