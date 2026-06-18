import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Calculator, FileText, BarChart3, GraduationCap, HeartHandshake } from 'lucide-react';

const serviceColors = [
  { bg: 'var(--p-blue)', icon: Calculator, title: 'Accounting & Bookkeeping', desc: 'Day-to-day bookkeeping, bank reconciliations, management accounts, payroll support and VAT.' },
  { bg: 'var(--p-green)', icon: FileText, title: 'Year-End Accounts', desc: 'Annual accounts prepared in line with Charity SORP, Companies House and Charity Commission requirements.' },
  { bg: 'var(--p-blue)', icon: Shield, title: 'Charity Compliance', desc: 'Governance advice, regulatory submissions, internal control reviews and Charity Commission support.' },
  { bg: 'var(--p-teal)', icon: BarChart3, title: 'Audit Support', desc: 'Preparing financial statements, audit schedules and liaising with auditors and independent examiners.' },
  { bg: 'var(--p-purple)', icon: GraduationCap, title: 'Training', desc: 'Practical training for trustees and staff on charity finance, governance and compliance.' },
  { bg: 'var(--p-blue)', icon: HeartHandshake, title: 'Governance Support', desc: 'Policy development, procedure reviews and strengthening your governance framework.' },
];

const sectors = [
  { label: 'Registered Charities', color: 'var(--p-blue)' },
  { label: 'Charitable Companies', color: 'var(--p-green)' },
  { label: 'Community Organisations', color: 'var(--p-blue)' },
  { label: 'Faith-Based Organisations', color: 'var(--p-teal)' },
  { label: 'Social Enterprises', color: 'var(--p-purple)' },
  { label: 'Non-Profit Organisations', color: 'var(--p-blue)' },
];

export default function Home() {
  return (
    <>
      {/* Hero — bright blue gradient */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-[100px]" style={{ background: 'linear-gradient(135deg, #0F7EA5 0%, #1A9BC7 40%, #2DB5E0 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute bottom-10 left-[10%] w-48 h-48 rounded-full bg-white/5" />
        </div>

        <div className="relative z-10 container-pinpoint py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-up">
              <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.95)' }}>
                Pinpoint Finance and Compliance Ltd
              </p>
              <h1 className="font-display text-white mb-6">
                Accounting, Finance & Compliance Support for Charities
              </h1>
              <p className="font-body text-lg leading-relaxed mb-8 max-w-xl" style={{ color: 'rgba(255,255,255,0.95)' }}>
                Professional accounting, financial management and compliance services, with a specialist focus on charities and non-profit organisations across England and Wales.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body text-sm font-semibold transition-all hover:scale-105" style={{ background: 'var(--p-blue)', color: 'white' }}>
                  Our Services <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-white">Get in Touch</Link>
              </div>
            </div>

            <div className="hidden lg:block animate-fade-in">
              <div className="relative">
                <img src="images/hero-home.jpg" alt="Professional accounting services" className="w-full h-auto rounded-3xl shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                  <p className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--p-blue)' }}>Trusted by Charities</p>
                  <p className="font-body text-sm" style={{ color: 'var(--p-slate)' }}>
                    Supporting trustees, management teams and staff with practical, reliable and professional services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-b" style={{ borderColor: 'var(--p-border)' }}>
        <div className="container-pinpoint py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 'Charity SORP', label: 'Compliant Reporting' },
              { value: 'England & Wales', label: 'Registered Company' },
              { value: 'Trustees', label: 'Governance Support' },
              { value: 'Charity Commission', label: 'Regulatory Guidance' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <span className="font-display text-xl md:text-2xl font-semibold" style={{ color: 'var(--p-blue)' }}>{item.value}</span>
                <span className="font-body text-xs mt-1" style={{ color: 'var(--p-slate)' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">What We Do</p>
            <h2>Comprehensive Financial & Compliance Services</h2>
            <div className="divider-line mx-auto mb-6" />
            <p className="font-body">
              We provide a full range of accounting, financial management and compliance services tailored to charities and non-profit organisations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceColors.map((service, i) => (
              <Link key={service.title} to={i === 4 ? '/training' : i === 2 ? '/compliance' : '/services'} className="bg-white rounded-2xl p-8 card-hover group" style={{ borderTop: `4px solid ${service.bg}` }}>
                <div className="service-icon rounded-xl mb-6 transition-transform group-hover:scale-105" style={{ background: service.bg }}>
                  <service.icon size={24} />
                </div>
                <h3 className="font-display text-xl mb-3">{service.title}</h3>
                <p className="font-body text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center gap-2 font-body text-sm font-semibold transition-colors" style={{ color: service.bg }}>
                  Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-pinpoint">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label">Who We Support</p>
              <h2>Serving Charities, Non-Profits & Purpose-Led Businesses</h2>
              <div className="divider-line mb-6" />
              <p className="font-body leading-relaxed mb-8">
                We work with a wide range of organisations that need more than basic accounting support. From registered charities to social enterprises, we provide tailored financial and compliance services.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {sectors.map((sector) => (
                  <div key={sector.label} className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: 'var(--p-surface)' }}>
                    <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: sector.color }} />
                    <span className="font-body text-sm font-medium">{sector.label}</span>
                  </div>
                ))}
              </div>
              <Link to="/who-we-support" className="btn-primary mt-8">See All Sectors <ArrowRight size={16} /></Link>
            </div>
            <div className="relative">
              <img src="images/hero-who-we-support.jpg" alt="Charities and organisations we support" className="w-full h-auto rounded-3xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Why Choose Us</p>
            <h2>Professional, Reliable & Client-Focused</h2>
            <div className="divider-line mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Specialist Charity Knowledge', desc: 'Deep understanding of charity accounting, SORP requirements, and the unique regulatory environment charities operate in.', color: 'var(--p-blue)' },
              { num: '02', title: 'Practical & Professional', desc: 'We take a hands-on, client-focused approach ensuring our advice is practical, understandable and tailored to your needs.', color: 'var(--p-green)' },
              { num: '03', title: 'Full Compliance Support', desc: 'From governance advice to Charity Commission inquiries, we help you meet your obligations and demonstrate accountability.', color: 'var(--p-blue)' },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 font-display text-lg font-bold text-white" style={{ background: item.color }}>{item.num}</div>
                <h3 className="font-display text-xl mb-4">{item.title}</h3>
                <p className="font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/why-choose-us" className="btn-outline">Learn More About Us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: 'var(--p-blue)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="container-pinpoint relative z-10 text-center">
          <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/90 mb-4">Get In Touch</p>
          <h2 className="font-display text-white mb-6 max-w-3xl mx-auto">
            Let us help your organisation stay compliant, financially organised and accountable
          </h2>
          <p className="font-body text-white/95 mb-8 max-w-xl mx-auto">
            Whether you need ongoing bookkeeping, year-end accounts, compliance advice or training, we can provide a service tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body text-sm font-semibold transition-all hover:scale-105" style={{ background: 'white', color: 'var(--p-blue)' }}>
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-white">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
