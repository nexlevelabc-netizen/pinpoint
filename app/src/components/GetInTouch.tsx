import { useState, useEffect } from 'react';
import { X, Send, User, Mail, Phone, CheckCircle } from 'lucide-react';
import { useContactPanel } from './ContactPanelContext';

export function GetInTouch() {
  const { isOpen, closePanel } = useContactPanel();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePanel();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, closePanel]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', organisation: '', subject: '', message: '' });
      closePanel();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={closePanel}
        />
      )}

      {/* Slide-out Panel */}
      <div
        className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-lg shadow-2xl transition-transform duration-500 ease-in-out flex flex-col overflow-hidden"
        style={{
          background: '#FFFFFF',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'var(--p-border)' }}>
          <div className="flex items-center gap-3">
            <img
              src="images/logo-navbar.png"
              alt="Pinpoint Finance"
              className="h-8 w-auto object-contain"
            />
            <div>
              <h3 className="font-display text-lg font-bold" style={{ color: 'var(--p-charcoal)' }}>
                Get in Touch
              </h3>
              <p className="font-body text-xs" style={{ color: 'var(--p-slate-muted)' }}>
                We'd love to hear from you
              </p>
            </div>
          </div>
          <button
            onClick={closePanel}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-body text-xs font-semibold transition-colors"
            style={{ background: '#DC2626', color: 'white' }}
          >
            <X size={14} />
            Close
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, #2DAA7A 0%, #87A834 100%)' }}
              >
                <CheckCircle size={32} className="text-white" />
              </div>
              <h4 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--p-charcoal)' }}>
                Message Sent!
              </h4>
              <p className="font-body" style={{ color: 'var(--p-slate)' }}>
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Intro text */}
              <p className="font-body text-sm mb-4" style={{ color: 'var(--p-slate-muted)' }}>
                Whether you need accounting support, compliance advice, or training for your team — send us a message and we'll be in touch shortly.
              </p>

              {/* Name */}
              <div>
                <label className="block font-body text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--p-slate)' }}>
                  Full Name *
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--p-slate-muted)' }} />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border font-body text-sm outline-none transition-colors focus:ring-2"
                    style={{
                      borderColor: 'var(--p-border)',
                      background: '#F8FAFC',
                      color: 'var(--p-charcoal)',
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block font-body text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--p-slate)' }}>
                  Email Address *
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--p-slate-muted)' }} />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border font-body text-sm outline-none transition-colors focus:ring-2"
                    style={{
                      borderColor: 'var(--p-border)',
                      background: '#F8FAFC',
                      color: 'var(--p-charcoal)',
                    }}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block font-body text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--p-slate)' }}>
                  Phone Number
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--p-slate-muted)' }} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 7123 456789"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border font-body text-sm outline-none transition-colors focus:ring-2"
                    style={{
                      borderColor: 'var(--p-border)',
                      background: '#F8FAFC',
                      color: 'var(--p-charcoal)',
                    }}
                  />
                </div>
              </div>

              {/* Organisation */}
              <div>
                <label className="block font-body text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--p-slate)' }}>
                  Organisation
                </label>
                <input
                  type="text"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="Your charity or organisation name"
                  className="w-full px-4 py-3 rounded-xl border font-body text-sm outline-none transition-colors focus:ring-2"
                  style={{
                    borderColor: 'var(--p-border)',
                    background: '#F8FAFC',
                    color: 'var(--p-charcoal)',
                  }}
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block font-body text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--p-slate)' }}>
                  Subject *
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border font-body text-sm outline-none transition-colors focus:ring-2 appearance-none"
                  style={{
                    borderColor: 'var(--p-border)',
                    background: '#F8FAFC',
                    color: 'var(--p-charcoal)',
                  }}
                >
                  <option value="">Select a subject</option>
                  <option value="accounting">Accounting & Bookkeeping</option>
                  <option value="compliance">Charity Compliance</option>
                  <option value="training">Training & Workshops</option>
                  <option value="consultation">General Consultation</option>
                  <option value="partnership">Partnership Enquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block font-body text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--p-slate)' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border font-body text-sm outline-none transition-colors focus:ring-2 resize-none"
                  style={{
                    borderColor: 'var(--p-border)',
                    background: '#F8FAFC',
                    color: 'var(--p-charcoal)',
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-body font-semibold text-sm text-white transition-all hover:opacity-90 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #2DAA7A 0%, #87A834 100%)',
                }}
              >
                <Send size={16} />
                Send Message
              </button>

              <p className="font-body text-xs text-center" style={{ color: 'var(--p-slate-muted)' }}>
                Or email us directly at{' '}
                <a href="mailto:info@pinpointfinance.co.uk" className="underline" style={{ color: 'var(--p-blue)' }}>
                  info@pinpointfinance.co.uk
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
