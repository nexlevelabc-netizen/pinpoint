import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Award, Users, ClipboardCheck } from 'lucide-react';
import PageHero from '../components/PageHero';

const values = [
  { icon: Target, title: 'Accuracy', desc: 'We ensure all financial records, reports and compliance documents are prepared with precision and attention to detail.', color: 'var(--p-blue)' },
  { icon: Eye, title: 'Transparency', desc: 'We maintain clear communication with our clients, ensuring trustees and management understand their financial position.', color: 'var(--p-green)' },
  { icon: Heart, title: 'Commitment', desc: 'We are committed to helping organisations improve their financial control, governance and accountability.', color: 'var(--p-blue)' },
  { icon: Award, title: 'Professionalism', desc: 'We deliver a confidential, professional service built on reliability, practical guidance and sector expertise.', color: 'var(--p-teal)' },
];

const steps = [
  { num: '01', title: 'Understanding Your Organisation', desc: 'We begin by understanding your organisation, your current systems, your reporting requirements and any compliance concerns.', color: 'var(--p-blue)' },
  { num: '02', title: 'Clear Advice & Support', desc: 'We provide clear advice and tailored support based on your specific needs, ensuring practical solutions that work.', color: 'var(--p-green)' },
  { num: '03', title: 'Resolving Issues', desc: 'Where issues are identified, we work with you to resolve them, improve your processes and strengthen your arrangements.', color: 'var(--p-blue)' },
  { num: '04', title: 'Ongoing Improvement', desc: 'Our aim is to provide support that is accurate, useful and relevant, helping your organisation improve over time.', color: 'var(--p-teal)' },
];

export default function About() {
  return (
    <>
      <PageHero title="About Us" subtitle="At Pinpoint Finance and Compliance Ltd, we work with organisations that need more than basic accounting support." variant="blue"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }]} />

      <section className="py-20 md:py-28 bg-white">
        <div className="container-pinpoint">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <img src="images/hero-about.jpg" alt="Professional financial advisor" className="w-full h-auto rounded-3xl shadow-xl" />
            </div>
            <div>
              <p className="section-label">Our Story</p>
              <h2>Professional Support for Purpose Driven Organisations</h2>
              <div className="divider-line mb-6" />
              <div className="space-y-4 font-body leading-relaxed">
                <p>Pinpoint Finance and Compliance Ltd is a company registered in England and Wales, providing professional accounting, financial management and compliance services. Our specialist focus is on charities and non-profit organisations.</p>
                <p>We understand that charities and not-for-profit organisations operate in a highly regulated environment where good governance, accurate financial reporting and strong compliance systems are essential.</p>
                <p>Our role is to support trustees, management teams and staff with practical, reliable and professional services that help organisations remain compliant, financially organised and accountable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #0F7EA5, #1A9BC7, #2DB5E0)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5" />
        </div>
        <div className="container-pinpoint relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/90 mb-4">Our Mission</p>
            <h2 className="font-display text-white text-3xl md:text-4xl mb-8">Supporting organisations that make a difference</h2>
            <p className="font-body text-lg text-white/95 leading-relaxed">
              We believe that charities and purpose-led organisations deserve the same high-quality financial expertise as corporate businesses. Our mission is to make professional accounting and compliance support accessible, practical and tailored to the unique needs of the non-profit sector.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Our Values</p>
            <h2>What We Stand For</h2>
            <div className="divider-line mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 text-center card-hover">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto" style={{ background: v.color }}>
                  <v.icon size={22} />
                </div>
                <h3 className="font-display text-lg mb-3">{v.title}</h3>
                <p className="font-body text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container-pinpoint">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">How We Work</p>
            <h2>Our Approach</h2>
            <div className="divider-line mx-auto mb-6" />
            <p className="font-body">Our approach is simple, professional and practical. We work alongside you to understand your needs and deliver tailored support.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-display text-2xl font-bold text-white" style={{ background: s.color }}>{s.num}</div>
                <h3 className="font-display text-xl mb-3">{s.title}</h3>
                <p className="font-body text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="section-label">Our Expertise</p>
              <h2>Why Organisations Trust Us</h2>
              <div className="divider-line mb-6" />
              <div className="space-y-6">
                {[
                  { icon: ClipboardCheck, title: 'Compliance Knowledge', desc: 'We understand charity law, SORP requirements and Charity Commission regulations.', color: 'var(--p-blue)' },
                  { icon: Users, title: 'Governance Expertise', desc: 'We support trustees in fulfilling their duties with confidence and clarity.', color: 'var(--p-green)' },
                  { icon: Award, title: 'Audit Experience', desc: 'We prepare organisations thoroughly for audit and independent examination.', color: 'var(--p-blue)' },
                  { icon: Target, title: 'Tailored Solutions', desc: 'Every organisation is different. We adapt our services to your specific circumstances.', color: 'var(--p-teal)' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0" style={{ background: item.color }}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-display text-lg mb-1">{item.title}</h4>
                      <p className="font-body text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl p-10 lg:p-12 text-white flex flex-col justify-center" style={{ background: 'linear-gradient(135deg, #0F7EA5, #1A9BC7)' }}>
              <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.95)' }}>Our Commitment</p>
              <h3 className="font-display text-2xl mb-6">We do not simply prepare figures. We help organisations understand their financial position, meet their obligations and improve the way they manage finance and compliance.</h3>
              <Link to="/contact" className="inline-flex items-center gap-2 font-body mt-4" style={{ color: 'var(--p-teal-light)' }}>Work with us <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
