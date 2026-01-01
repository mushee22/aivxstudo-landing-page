'use client';

import { MapPin, Mail, Clock } from 'lucide-react';

export default function LocationDetails() {
    return (
        <section className="bg-black pb-24 px-6 md:pb-32">
            <div className="max-w-3xl mx-auto text-center space-y-12">

                {/* Company & Address */}
                <div className="space-y-4">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                            <MapPin className="text-neon-green w-6 h-6" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">AIVX</h3>
                    <p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Street / Area<br />
                        City, State<br />
                        Country
                    </p>
                </div>

                {/* Divider */}
                <div className="w-24 h-px bg-white/10 mx-auto" />

                {/* Contact */}
                <div className="space-y-4">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                            <Mail className="text-neon-green w-6 h-6" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">Contact Us</h3>
                    <a href="mailto:support@aivx.in" className="text-lg text-neutral-400 font-light hover:text-neon-green transition-colors block">
                        support@aivx.in
                    </a>
                </div>

                {/* Divider */}
                <div className="w-24 h-px bg-white/10 mx-auto" />

                {/* Business Hours */}
                <div className="space-y-4">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                            <Clock className="text-neon-green w-6 h-6" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">Business Hours</h3>
                    <p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Monday – Friday<br />
                        10:00 AM – 6:00 PM (IST)
                    </p>
                </div>

            </div>
        </section>
    );
}
