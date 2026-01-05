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

export default function TeamGrid() {
    return (
        <section className="bg-black pb-24 px-6 md:pb-32 border-b border-white/5 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group flex flex-col items-center text-center space-y-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-green/30 transition-all duration-300 hover:-translate-y-1">
                            {/* Image Container */}
                            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-neon-green/50 transition-colors duration-500">
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
                                <p className="text-neutral-400 font-light text-sm pt-2 min-h-[40px]">
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
