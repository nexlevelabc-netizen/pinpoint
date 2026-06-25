import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Users, BookOpen, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';

const areas = [
  { title: 'Charity Commission Essentials', desc: 'Understanding the role of the Charity Commission, reporting requirements and what trustees need to know.', color: 'var(--p-blue)' },
  { title: 'Trustee Responsibilities', desc: 'Key duties and legal obligations of charity trustees, including fiduciary duties and governance best practices.', color: 'var(--p-green)' },
  { title: 'Financial Governance', desc: 'How to establish and maintain strong financial governance arrangements within your organisation.', color: 'var(--p-blue)' },
  { title: 'Understanding Charity Accounts', desc: 'Reading and interpreting charity financial statements, understanding the Statement of Financial Activities.', color: 'var(--p-teal)' },
  { title: 'Restricted & Unrestricted Funds', desc: 'Managing different fund types, ensuring compliance with donor restrictions and proper fund reporting.', color: 'var(--p-purple)' },
  { title: 'Internal Financial Controls', desc: 'Implementing effective internal controls to safeguard assets and ensure financial integrity.', color: 'var(--p-blue)' },
  { title: 'Record Keeping & Reporting', desc: 'Best practices for maintaining accurate financial records and preparing management reports.', color: 'var(--p-green)' },
  { title: 'Managing Conflicts of Interest', desc: 'Identifying, declaring and managing conflicts of interest in the charity sector.', color: 'var(--p-blue)' },
  { title: 'Preparing for Audit or Independent Examination', desc: 'What to expect and how to prepare for the audit or independent examination process.', color: 'var(--p-teal)' },
  { title: 'Compliance Awareness for Charity Staff', desc: 'Essential compliance knowledge for staff working in charities and non-profit organisations.', color: 'var(--p-purple)' },
];

const audiences = [
  { icon: Users, title: 'Trustees', desc: 'Training to help trustees carry out their financial and governance responsibilities with confidence.', color: 'var(--p-blue)' },
  { icon: BookOpen, title: 'Management Teams', desc: 'Support for senior managers who oversee financial operations and reporting.', color: 'var(--p-green)' },
  { icon: GraduationCap, title: 'Finance Staff', desc: 'Practical guidance for finance teams handling day-to-day accounting and compliance tasks.', color: 'var(--p-blue)' },
];

export default function Training() {
  return (
    <>
      <PageHero title="Training for Staff & Trustees" subtitle="Practical training on key areas of charity finance, governance and compliance designed to build knowledge and confidence." variant="teal"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Training', href: '/training' }]} />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-pinpoint">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label">Building Knowledge</p>
              <h2>Practical Training for Charities & Non-Profits</h2>
              <div className="divider-line mb-6" />
              <p className="font-body leading-relaxed mb-4">
                We provide practical training for staff, trustees and management teams on key areas of charity finance, governance and compliance.
              </p>
              <p className="font-body leading-relaxed mb-6">
                Our training is designed to be clear, relevant and easy to understand, helping trustees and staff carry out their responsibilities with confidence.
              </p>
              <div className="flex flex-wrap gap-3">
                {['In-house sessions', 'Group workshops', 'One-to-one training', 'Online sessions'].map((type) => (
                  <span key={type} className="px-4 py-2 rounded-full font-body text-sm font-medium" style={{ background: 'var(--p-teal-soft)', color: 'var(--p-teal)' }}>{type}</span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="images/hero-training.jpg" alt="Training session" className="w-full h-auto rounded-3xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label">What We Cover</p>
            <h2>Training Areas</h2>
            <div className="divider-line mx-auto mb-6" />
            <p className="font-body">Our training covers the essential topics that trustees, staff and management need to understand to fulfil their roles effectively.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {areas.map((a) => (
              <div key={a.title} className="flex gap-4 p-6 bg-white rounded-2xl card-hover">
                <CheckCircle size={20} className="mt-0.5 shrink-0" style={{ color: a.color }} />
                <div>
                  <h3 className="font-display text-lg mb-2">{a.title}</h3>
                  <p className="font-body text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-pinpoint">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label">Tailored Delivery</p>
            <h2>Who We Train</h2>
            <div className="divider-line mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((a) => (
              <div key={a.title} className="text-center p-8 rounded-2xl" style={{ background: 'var(--p-surface)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto" style={{ background: a.color }}>
                  <a.icon size={22} />
                </div>
                <h3 className="font-display text-xl mb-3">{a.title}</h3>
                <p className="font-body text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #6B8529, #87A834, #A3C44A)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5" />
        </div>
        <div className="container-pinpoint relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/90 mb-4">Our Method</p>
              <h2 className="font-display text-white text-3xl mb-6">Clear, Relevant & Easy to Understand</h2>
              <p className="font-body text-white/95 leading-relaxed mb-6">
                We believe that effective training should be practical and actionable. Our sessions are designed to give participants the knowledge and tools they need to apply what they have learned directly to their roles.
              </p>
              <div className="space-y-4">
                {['Tailored content based on your organisation\'s needs', 'Real-world examples from the charity sector', 'Interactive sessions with opportunities for questions', 'Takeaway materials and resources', 'Follow-up support available'].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-white/90 shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-white/95">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20">
              <GraduationCap size={40} className="mb-6" style={{ color: 'var(--p-teal-light)' }} />
              <h3 className="font-display text-2xl text-white mb-4">Invest in Your Team's Knowledge</h3>
              <p className="font-body text-white/95 leading-relaxed mb-6">
                Well-trained trustees and staff are the foundation of a well-governed charity. Our training helps organisations build internal capacity and confidence in managing their financial and compliance responsibilities.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body text-sm font-semibold transition-all hover:scale-105" style={{ background: 'var(--p-blue)', color: 'white' }}>
                Arrange Training <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
