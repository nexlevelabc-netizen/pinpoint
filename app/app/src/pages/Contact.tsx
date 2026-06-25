import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', organisation: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <PageHero title="Contact Us" subtitle="For professional accounting, bookkeeping, financial reporting or compliance support, please get in touch. We would be pleased to discuss your organisation's needs." variant="blue"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us', href: '/contact' }]} />

      {/* Contact cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-pinpoint">
          <div className="grid md:grid-cols-3 gap-6 -mt-28 relative z-20">
            {[
              { icon: Phone, title: 'Telephone', lines: ['+44 (0) 0000 000 000'], href: 'tel:+440000000000', color: 'var(--p-blue)' },
              { icon: Mail, title: 'Email', lines: ['info@pinpointfinance.co.uk'], href: 'mailto:info@pinpointfinance.co.uk', color: 'var(--p-green)' },
              { icon: MapPin, title: 'Address', lines: ['Registered in England and Wales'], href: '#', color: 'var(--p-blue)' },
            ].map((card) => (
              <a key={card.title} href={card.href} className="rounded-2xl p-8 text-white text-center group transition-all hover:scale-[1.02]" style={{ background: card.color }}>
                <card.icon size={28} className="mx-auto mb-4" />
                <h3 className="font-display text-lg mb-2">{card.title}</h3>
                {card.lines.map((line) => <p key={line} className="font-body text-sm text-white/95">{line}</p>)}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={48} className="mx-auto mb-6" style={{ color: 'var(--p-green)' }} />
                  <h3 className="font-display text-2xl mb-4">Thank You for Your Enquiry</h3>
                  <p className="font-body mb-6">We have received your message and will be in touch shortly.</p>
                  <Link to="/" className="btn-primary">Return to Home <ArrowRight size={16} /></Link>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl mb-2">Send Us a Message</h3>
                  <p className="font-body text-sm mb-8" style={{ color: 'var(--p-slate)' }}>Fill in the form below and we will get back to you as soon as possible.</p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-body text-sm font-semibold mb-2">Full Name <span className="text-red-500">*</span></label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border font-body text-sm focus:outline-none focus:border-[var(--p-blue)] transition-colors" style={{ background: 'var(--p-surface)', borderColor: 'var(--p-border)' }} placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block font-body text-sm font-semibold mb-2">Email Address <span className="text-red-500">*</span></label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border font-body text-sm focus:outline-none focus:border-[var(--p-blue)] transition-colors" style={{ background: 'var(--p-surface)', borderColor: 'var(--p-border)' }} placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-body text-sm font-semibold mb-2">Telephone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border font-body text-sm focus:outline-none focus:border-[var(--p-blue)] transition-colors" style={{ background: 'var(--p-surface)', borderColor: 'var(--p-border)' }} placeholder="Your phone number" />
                      </div>
                      <div>
                        <label className="block font-body text-sm font-semibold mb-2">Organisation Name</label>
                        <input type="text" name="organisation" value={formData.organisation} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border font-body text-sm focus:outline-none focus:border-[var(--p-blue)] transition-colors" style={{ background: 'var(--p-surface)', borderColor: 'var(--p-border)' }} placeholder="Your organisation" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-body text-sm font-semibold mb-2">Service Required</label>
                      <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border font-body text-sm focus:outline-none focus:border-[var(--p-blue)] transition-colors" style={{ background: 'var(--p-surface)', borderColor: 'var(--p-border)' }}>
                        <option value="">Select a service</option>
                        <option value="accounting">Accounting & Bookkeeping</option>
                        <option value="yearend">Year-End Accounts</option>
                        <option value="system">Accounting System Setup</option>
                        <option value="compliance">Charity Compliance & Governance</option>
                        <option value="audit">Audit Support</option>
                        <option value="training">Training</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-body text-sm font-semibold mb-2">Message <span className="text-red-500">*</span></label>
                      <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border font-body text-sm focus:outline-none focus:border-[var(--p-blue)] transition-colors resize-none" style={{ background: 'var(--p-surface)', borderColor: 'var(--p-border)' }} placeholder="Tell us about your organisation and how we can help..." />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">Send Enquiry <Send size={16} /></button>
                  </form>
                </>
              )}
            </div>

            <div>
              <p className="section-label">Get In Touch</p>
              <h2>We Would Be Pleased to Hear From You</h2>
              <div className="divider-line mb-6" />
              <p className="font-body leading-relaxed mb-8">
                Whether your organisation needs ongoing bookkeeping, year-end accounts, compliance advice, training or support with regulatory matters, we can provide a service tailored to your needs.
              </p>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Clock, title: 'Response Time', desc: 'We aim to respond to all enquiries within one working day.' },
                  { icon: MapPin, title: 'Service Area', desc: 'We work with organisations across England and Wales. Online consultations are available for clients further afield.' },
                  { icon: Phone, title: 'Prefer to Call?', desc: 'You can reach us on +44 (0) 0000 000 000 during business hours.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <item.icon size={20} className="mt-1 shrink-0" style={{ color: 'var(--p-blue)' }} />
                    <div>
                      <h4 className="font-display text-lg mb-1">{item.title}</h4>
                      <p className="font-body text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #0F7EA5, #1A9BC7)' }}>
                <h4 className="font-display text-xl mb-3">Pinpoint Finance and Compliance Ltd</h4>
                <p className="font-body text-sm text-white/95 leading-relaxed mb-4">
                  A company registered in England and Wales providing professional accounting, financial management and compliance services to charities, non-profits and purpose-led businesses.
                </p>
                <div className="flex items-center gap-2 font-body text-sm" style={{ color: 'var(--p-teal-light)' }}>
                  <Mail size={14} /> info@pinpointfinance.co.uk
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-pinpoint">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2>Looking for Something Specific?</h2>
            <p className="font-body">Explore our services to find the support your organisation needs.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Accounting & Bookkeeping', 'Year-End Accounts', 'Charity Compliance', 'Training', 'Audit Support'].map((label) => (
              <Link key={label} to="/services" className="px-6 py-3 rounded-full border font-body text-sm transition-all hover:text-white" style={{ borderColor: 'var(--p-border)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--p-blue)'; e.currentTarget.style.borderColor = 'var(--p-blue)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--p-border)'; }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
