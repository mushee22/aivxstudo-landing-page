'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import ContactSuccessModal from './ContactSuccessModal';

const PATH = "https://aivx.primefxt.pro/api/v1/website/leads"
// const LOCAL_PATH = "http://localhost:5000/api/v1/website/leads"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('submitting');

        try {
            const response = await fetch(PATH, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    full_name: formData.name,
                    email: formData.email,
                    company_name: formData.company,
                    phone_number: formData.phone,
                    message: formData.message
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const data = await response.json();

            // Simulate API call
            setTimeout(() => {
                setStatus('success');
                setShowSuccessModal(true);
                setFormData({ name: '', email: '', company: '', phone: '', message: '' });

                // Reset status after a delay to allow re-submission if needed
                setTimeout(() => {
                    setStatus('idle');
                }, 5000);
            }, 1500);
        } catch (error) {
            setStatus('error');
            setTimeout(() => {
                setStatus('idle');
            }, 3000);
            return;
        }

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    return (
        <div className="bg-dark-surface p-8 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6">
                Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                {status === 'error' && (
                    <p className="text-red-500 text-xs flex items-center gap-1">
                        <AlertCircle size={12} /> Sorry, An error occurred while submitting your message. try again
                    </p>
                )}
                <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Full Name <span className="text-neon-green">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-dark-bg border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-all`}
                        placeholder="John Doe"
                        autoFocus
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.name}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email Address <span className="text-neon-green">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-dark-bg border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-all`}
                        placeholder="john@example.com"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.email}
                        </p>
                    )}
                </div>
                <div className="space-y-1.5">
                    <label htmlFor="Phone" className="text-sm font-medium text-gray-300">
                        Phone Number <span className="text-neon-green">*</span>
                    </label>
                    <input
                        type="text"
                        id="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-dark-bg border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-all`}
                        placeholder="Enter your phone number (+91 1234567890)"
                        autoFocus
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-xs flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.phone}
                        </p>
                    )}
                </div>

                {/* Company (Optional) */}
                <div className="space-y-1.5">
                    <label htmlFor="company" className="text-sm font-medium text-gray-300">
                        Company Name <span className="text-gray-500 text-xs ml-1">(Optional)</span>
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-dark-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-all"
                        placeholder="Your Company Ltd"
                    />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Message <span className="text-neon-green">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full bg-dark-bg border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-all resize-none`}
                        placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                        <p className="text-red-500 text-xs flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === 'submitting' || status === 'success'}
                    className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${status === 'success'
                        ? 'bg-green-500 text-white cursor-default'
                        : 'bg-white text-black hover:bg-neon-green hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                        } disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-white`}
                >
                    {status === 'submitting' ? (
                        'Sending...'
                    ) : status === 'success' ? (
                        <>
                            Message Sent <CheckCircle size={20} />
                        </>
                    ) : (
                        <>
                            Submit Message <ArrowRight size={20} />
                        </>
                    )}
                </button>
            </form>

            <ContactSuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
            />
        </div>
    );
}
