'use client';

export default function LocationMap() {
    return (
        <section className="bg-black pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.086364600087!2d75.82563447605968!3d11.255056988924375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bec9f0a11f3%3A0xcc58526bc982c22d!2sKerala%20Startup%20Mission%20kozhikode!5e0!3m2!1sen!2sin!4v1767592962259!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
}
