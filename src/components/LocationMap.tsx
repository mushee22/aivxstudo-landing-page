'use client';

export default function LocationMap() {
    return (
        <section className="bg-black pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <iframe
                        title="AIVX Office Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112102.68415715978!2d77.1086053!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1714589000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
}
