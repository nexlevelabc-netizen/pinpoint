import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, FileCheck, Target, Shield, Clock, MessageSquare, Lock } from 'lucide-react';
import PageHero from '../components/PageHero';

const reasons = [
  { icon: Target, title: 'Specialist Understanding', desc: 'We have specialist understanding of charity and non-profit accounting, including Charity SORP, restricted funds and the unique regulatory environment.', color: 'var(--p-blue)' },
  { icon: Shield, title: 'Compliance Knowledge', desc: 'Our practical knowledge of compliance and governance requirements helps organisations meet their obligations confidently.', color: 'var(--p-green)' },
  { icon: Lock, title: 'Professional & Confidential', desc: 'We deliver a professional and confidential service, respecting the sensitive nature of our clients\' financial and operational information.', color: 'var(--p-blue)' },
  { icon: MessageSquare, title: 'Clear Communication', desc: 'We explain complex financial matters in clear, understandable language, ensuring trustees and staff are well informed.', color: 'var(--p-teal)' },
  { icon: Users, title: 'Tailored Support', desc: 'Every organisation is different. We provide tailored support based on each client\'s needs, size and complexity.', color: 'var(--p-purple)' },
  { icon: FileCheck, title: 'Comprehensive Service', desc: 'From routine bookkeeping to complex regulatory matters, we support organisations across the full range of financial and compliance needs.', color: 'var(--p-blue)' },
  { icon: Award, title: 'Commitment to Improvement', desc: 'We are committed to helping organisations improve their financial control, governance and accountability over time.', color: 'var(--p-green)' },
  { icon: Clock, title: 'Responsive & Reliable', desc: 'We respond to our clients\' needs promptly and deliver our services reliably, meeting agreed deadlines and commitments.', color: 'var(--p-blue)' },
];

const steps = [
  { num: '01', title: 'Understand', desc: 'We begin by understanding your organisation, your current systems, your reporting requirements and any compliance concerns.', color: 'var(--p-blue)' },
  { num: '02', title: 'Assess', desc: 'We assess your current financial and compliance arrangements, identifying strengths and areas for improvement.', color: 'var(--p-green)' },
  { num: '03', title: 'Advise', desc: 'We provide clear advice and practical recommendations based on your specific circumstances.', color: 'var(--p-blue)' },
  { num: '04', title: 'Support', desc: 'We work with you to implement changes, improve processes and strengthen your arrangements going forward.', color: 'var(--p-teal)' },
];

export default function WhyChooseUs() {
  return (
    <>
      <PageHero title="Why Choose Us" subtitle="Choosing the right finance and compliance support is important. At Pinpoint Finance and Compliance Ltd, we provide a professional service built around accuracy, reliability and practical guidance." variant="blue"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Why Choose Us', href: '/why-choose-us' }]} />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-pinpoint">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label">Our Difference</p>
            <h2>More Than Just Accounting</h2>
            <div className="divider-line mx-auto mb-6" />
            <p className="font-body leading-relaxed">
              We do not simply prepare figures. We help organisations understand their financial position, meet their obligations and improve the way they manage finance and compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label">What Sets Us Apart</p>
            <h2>Reasons to Work With Us</h2>
            <div className="divider-line mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl p-8 card-hover">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5" style={{ background: r.color }}>
                  <r.icon size={20} />
                </div>
                <h3 className="font-display text-lg mb-2">{r.title}</h3>
                <p className="font-body text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #0F7EA5, #1A9BC7, #2DB5E0)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5" />
        </div>
        <div className="container-pinpoint relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/90 mb-4">Our Process</p>
            <h2 className="font-display text-white mb-4">How We Work With You</h2>
            <p className="font-body text-white/95">Our approach is simple, professional and practical. We aim to provide support that is accurate, useful and relevant.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-display text-2xl font-bold text-white" style={{ background: s.color }}>{s.num}</div>
                <h3 className="font-display text-xl text-white mb-3">{s.title}</h3>
                <p className="font-body text-sm text-white/95 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-pinpoint">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label">Our Promise</p>
              <h2>A Partnership You Can Rely On</h2>
              <div className="divider-line mb-6" />
              <div className="space-y-4 font-body leading-relaxed">
                <p>At Pinpoint Finance and Compliance Ltd, we see ourselves as an extension of your team. We take the time to understand your organisation's mission, values and challenges.</p>
                <p>We are committed to building long term relationships with our clients, providing consistent support that grows and adapts as your organisation evolves.</p>
              </div>
              <Link to="/contact" className="btn-primary mt-8">Start a Conversation <ArrowRight size={16} /></Link>
            </div>
            <div className="rounded-2xl p-10" style={{ background: 'var(--p-surface)' }}>
              <h3 className="font-display text-2xl mb-6">What Our Clients Value</h3>
              <div className="space-y-4">
                {['Responsive communication and clear explanations', 'Attention to detail and accuracy in all work', 'Understanding of the charity sector and its challenges', 'Practical advice that can be implemented', 'Support that goes beyond basic accounting', 'Consistency and reliability in service delivery'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--p-green)' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" /></svg>
                    </div>
                    <span className="font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint text-center">
          <h2>Ready to experience the Pinpoint difference?</h2>
          <p className="font-body mb-8 max-w-xl mx-auto">Contact us to discuss how we can support your organisation with professional finance and compliance services.</p>
          <Link to="/contact" className="btn-primary">Get in Touch <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
