import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Church, Users, Building2, HandHeart, Landmark, Briefcase, User } from 'lucide-react';
import PageHero from '../components/PageHero';

const types = [
  { icon: Heart, title: 'Registered Charities', desc: 'We support registered charities of all sizes with their accounting, compliance and governance needs, including Charity SORP reporting and Charity Commission filings.', color: 'var(--p-blue)' },
  { icon: Building2, title: 'Charitable Companies', desc: 'Charitable companies limited by guarantee receive specialist support for both charity law and company law compliance requirements.', color: 'var(--p-green)' },
  { icon: Users, title: 'Community Organisations', desc: 'Community groups and organisations benefit from our practical approach to financial management and compliance support.', color: 'var(--p-blue)' },
  { icon: Church, title: 'Faith Based Organisations', desc: 'We work with churches, mosques, temples and other faith-based organisations, understanding their unique governance and financial structures.', color: 'var(--p-teal)' },
  { icon: HandHeart, title: 'Social Enterprises', desc: 'Social enterprises with charitable objectives receive tailored support that balances commercial and charitable considerations.', color: 'var(--p-purple)' },
  { icon: Landmark, title: 'Non Profit Organisations', desc: 'Non-profits that are not formally registered charities also benefit from our financial management and compliance expertise.', color: 'var(--p-blue)' },
  { icon: Briefcase, title: 'Small & Medium-Sized Businesses', desc: 'Beyond the charity sector, we provide accounting and financial support to businesses that need clear, dependable services.', color: 'var(--p-green)' },
  { icon: User, title: 'Individuals', desc: 'Individuals requiring accounting or financial support can rely on our professional, confidential service.', color: 'var(--p-blue)' },
];

const needs = [
  { title: 'Ongoing Bookkeeping', desc: 'Regular support to keep your financial records accurate and up to date.' },
  { title: 'Year End Accounts', desc: 'Preparation of annual accounts and financial statements.' },
  { title: 'Compliance Advice', desc: 'Guidance on meeting your regulatory and governance obligations.' },
  { title: 'Training', desc: 'Building knowledge and confidence in your trustees and staff.' },
  { title: 'Regulatory Matters', desc: 'Support with Charity Commission inquiries and other regulatory issues.' },
];

export default function WhoWeSupport() {
  return (
    <>
      <PageHero title="Who We Support" subtitle="We work with a wide range of clients across the charity and non-profit sector, as well as businesses and individuals who need professional financial support." variant="teal"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Who We Support', href: '/who-we-support' }]} />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-pinpoint">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Our Clients</p>
            <h2>Organisations We Work With</h2>
            <div className="divider-line mx-auto mb-6" />
            <p className="font-body">
              Whether your organisation needs ongoing bookkeeping, year end accounts, compliance advice, training or support with regulatory matters, we can provide a service tailored to your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((t) => (
              <div key={t.title} className="p-6 rounded-2xl card-hover" style={{ background: 'var(--p-surface)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4" style={{ background: t.color }}>
                  <t.icon size={20} />
                </div>
                <h3 className="font-display text-lg mb-2">{t.title}</h3>
                <p className="font-body text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #0C7A9E, #1A9BC7, #3CB5E0)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/5" />
        </div>
        <div className="container-pinpoint relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/90 mb-4">How We Can Help</p>
            <h2 className="font-display text-white mb-6">Tailored to Your Needs</h2>
            <p className="font-body text-white/95">We understand that every organisation is different. We adapt our services to meet your specific circumstances.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {needs.map((n) => (
              <div key={n.title} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center border border-white/20 hover:bg-white/20 transition-colors">
                <h3 className="font-display text-lg text-white mb-2">{n.title}</h3>
                <p className="font-body text-xs text-white/95 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label">Getting Started</p>
              <h2>Working With Us</h2>
              <div className="divider-line mb-6" />
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Initial Conversation', desc: 'We begin with a discussion about your organisation, your current needs and the challenges you are facing.' },
                  { step: '2', title: 'Understanding Your Requirements', desc: 'We take the time to understand your current systems, reporting requirements and any compliance concerns.' },
                  { step: '3', title: 'Tailored Proposal', desc: 'We provide a clear proposal outlining the services we can offer, tailored to your organisation\'s specific needs.' },
                  { step: '4', title: 'Ongoing Support', desc: 'We work alongside you as a trusted partner, providing reliable and professional support when you need it.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-display font-bold text-white text-sm" style={{ background: 'var(--p-blue)' }}>{item.step}</div>
                    <div>
                      <h4 className="font-display text-lg">{item.title}</h4>
                      <p className="font-body text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl p-10 lg:p-12 text-white" style={{ background: 'linear-gradient(135deg, #0C7A9E, #1A9BC7)' }}>
              <h3 className="font-display text-2xl mb-4">Ready to discuss your organisation's needs?</h3>
              <p className="font-body text-white/95 leading-relaxed mb-6">
                Whether you are a newly established charity or an organisation looking to improve your financial management and compliance, we are here to help.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body text-sm font-semibold transition-all hover:scale-105" style={{ background: 'white', color: 'var(--p-blue)' }}>
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
