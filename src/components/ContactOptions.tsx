import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactOptions() {
    const contactMethods = [
        {
            icon: Mail,
            label: "Email Us",
            value: "aivxproductions@gmail.com",
            description: "For general inquiries, pricing, and support.",
            action: "mailto:aivxproductions@gmail.com"
        },
        {
            icon: Phone,
            label: "Call Us",
            value: "+91 90720 20601",
            description: "Available during business hours (Mon-Fri).",
            action: "tel:+919072020601"
        }
    ];

    return (
        <div className="space-y-8">
            <div className="prose prose-invert">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Let's Create Something <span className="text-neon-green">Amazing</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Ready to elevate your jewellery brand with AI-powered visuals?
                    Reach out to us directly or fill out the form, and we'll get back to you within 24 hours.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {contactMethods.map((method, index) => (
                    <a
                        key={index}
                        href={method.action}
                        className="group flex items-start gap-4 p-6 bg-dark-surface border border-white/5 rounded-2xl hover:border-neon-green/30 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="w-12 h-12 shrink-0 bg-neon-green/10 rounded-full flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                            <method.icon className="text-neon-green w-5 h-5" />
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">
                                {method.label}
                            </h3>
                            <p className="text-white font-medium mb-1">
                                {method.value}
                            </p>
                            <p className="text-gray-500 text-sm">
                                {method.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            {/* Location Section */}
            <div className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-neon-green/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-neon-green" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg">Our Office</h3>
                        <p className="text-gray-400 text-sm">2nd Floor UL cyber Park, Nellikode</p>
                        <p className="text-gray-400 text-sm">Kozhikode, Kerala, 673016</p>
                    </div>
                </div>

                {/* Map Container */}
                <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-dark-bg group">
                    <iframe
                        title="AIVX Studio Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.086364600087!2d75.82563447605968!3d11.255056988924375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bec9f0a11f3%3A0xcc58526bc982c22d!2sKerala%20Startup%20Mission%20kozhikode!5e0!3m2!1sen!2sin!4v1767592962259!5m2!1sen!2sin%22"
                        className="absolute inset-0 w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    {/* Overlay for better text readability if needed, usually map is distinct enough */}

                </div>
            </div>
        </div>
    );
}
