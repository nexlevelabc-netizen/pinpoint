import { Link } from 'react-router-dom';
import { ArrowRight, Shield, FileCheck, AlertTriangle, FileText, Gavel, ClipboardList, BookOpen } from 'lucide-react';
import PageHero from '../components/PageHero';

const areas = [
  { icon: Shield, title: 'Charity Governance Advice', desc: 'Practical guidance on charity governance structures, trustee duties and best practices for board effectiveness.', color: 'var(--p-blue)' },
  { icon: FileCheck, title: 'Review of Policies & Procedures', desc: 'Comprehensive review and development of organisational policies to ensure compliance and good governance.', color: 'var(--p-green)' },
  { icon: ClipboardList, title: 'Regulatory Submissions', desc: 'Support with preparing and submitting required documentation to regulators including the Charity Commission.', color: 'var(--p-blue)' },
  { icon: Gavel, title: 'Internal Control Reviews', desc: 'Assessment of internal financial controls to identify strengths and areas for improvement.', color: 'var(--p-teal)' },
  { icon: FileText, title: 'Financial Governance Support', desc: 'Guidance on financial governance arrangements, delegations and authorisation structures.', color: 'var(--p-purple)' },
  { icon: BookOpen, title: 'Trustee Reporting Support', desc: 'Assistance with preparing clear, accurate reports for trustees, regulators and stakeholders.', color: 'var(--p-blue)' },
];

const policies = ['Finance policies', 'Reserves policies', 'Conflict of interest policies', 'Complaints policies', 'Anti-fraud and financial controls policies', 'Trustee governance policies', 'Risk management policies', 'Expenses policies', 'Procurement policies', 'Safeguarding-related procedural support where appropriate'];

const inquiry = ['Reviewing Charity Commission correspondence', 'Preparing draft responses', 'Gathering supporting documents', 'Reviewing compliance gaps', 'Supporting trustees and management during the process', 'Preparing action plans', 'Advising on governance and financial control improvements', 'Helping organisations respond professionally and transparently'];

export default function Compliance() {
  return (
    <>
      <PageHero title="Charity Compliance & Governance" subtitle="Practical compliance consultancy to help charities and non-profit organisations understand and meet their regulatory obligations." variant="green"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Charity Compliance', href: '/compliance' }]} />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-pinpoint">
          <div className="max-w-3xl">
            <p className="section-label">Charity Compliance</p>
            <h2>Navigating Regulatory Requirements with Confidence</h2>
            <div className="divider-line mb-6" />
            <p className="font-body leading-relaxed mb-4">
              Charities and non-profit organisations must comply with a wide range of legal, regulatory and governance requirements. We provide practical compliance consultancy to help organisations understand and meet their obligations.
            </p>
            <p className="font-body leading-relaxed">
              We help organisations strengthen their governance framework and demonstrate accountability to trustees, regulators, funders and stakeholders.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label">Our Expertise</p>
            <h2>Compliance & Governance Support</h2>
            <div className="divider-line mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl p-8 card-hover">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6" style={{ background: a.color }}>
                  <a.icon size={22} />
                </div>
                <h3 className="font-display text-lg mb-3">{a.title}</h3>
                <p className="font-body text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-pinpoint">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="section-label">What We Cover</p>
              <h2>Our Compliance Services Include</h2>
              <div className="divider-line mb-6" />
              <ul className="space-y-4">
                {['Charity governance advice', 'Review of policies and procedures', 'Support with regulatory submissions', 'Internal control reviews', 'Financial governance support', 'Trustee reporting support', 'Risk and compliance reviews', 'Support with Charity Commission guidance and requirements', 'Assistance with preparing documents for trustees and regulators'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FileCheck size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--p-green)' }} />
                    <span className="font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl p-10 text-white" style={{ background: 'linear-gradient(135deg, #5A8F30, #7CB342)' }}>
              <Shield size={32} className="mb-6" style={{ color: 'var(--p-teal-light)' }} />
              <h3 className="font-display text-2xl mb-4">Charity Commission Inquiries & Investigations</h3>
              <p className="font-body text-white/95 leading-relaxed mb-6">
                Responding to Charity Commission inquiries or investigations can be challenging and time-sensitive. We provide support to help organisations prepare clear, structured and appropriate responses.
              </p>
              <div className="space-y-3">
                {inquiry.slice(0, 4).map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: 'var(--p-teal-light)' }} />
                    <span className="font-body text-sm text-white/95">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 font-body mt-6" style={{ color: 'var(--p-teal-light)' }}>Get inquiry support <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label">Governance Framework</p>
              <h2>Policies & Procedures</h2>
              <div className="divider-line mb-6" />
              <p className="font-body leading-relaxed mb-6">
                We assist charities and non-profit organisations with the preparation and review of important policies and procedures required for good governance and compliance.
              </p>
              <p className="font-body leading-relaxed mb-8">
                Well-written policies help organisations operate consistently, manage risk and demonstrate good governance.
              </p>
              <Link to="/contact" className="btn-primary">Discuss Your Policies <ArrowRight size={16} /></Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-display text-lg mb-6 flex items-center gap-2">
                <FileText size={18} style={{ color: 'var(--p-blue)' }} /> Policies We Can Help With
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {policies.map((p) => (
                  <div key={p} className="flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: 'var(--p-surface)' }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--p-green)' }} />
                    <span className="font-body text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-pinpoint">
          <div className="flex flex-col lg:flex-row items-start gap-8 p-8 rounded-2xl border-l-4" style={{ background: 'var(--p-blue-soft)', borderColor: 'var(--p-blue)' }}>
            <AlertTriangle size={40} style={{ color: 'var(--p-blue)' }} className="shrink-0" />
            <div>
              <h3 className="font-display text-xl mb-3">Facing a Charity Commission Inquiry?</h3>
              <p className="font-body leading-relaxed mb-4">
                Our aim is to help clients deal with regulatory matters carefully, clearly and responsibly. We provide structured support to navigate Charity Commission inquiries with professionalism.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 font-body text-sm font-semibold" style={{ color: 'var(--p-blue)' }}>
                Contact us for urgent support <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #5A8F30, #7CB342)' }}>
        <div className="container-pinpoint text-center">
          <h2 className="font-display text-white mb-4">Strengthen your organisation's compliance today</h2>
          <p className="font-body text-white/95 mb-8 max-w-xl mx-auto">Get in touch to discuss how we can support your charity or non-profit organisation with practical compliance guidance.</p>
          <Link to="/contact" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body text-sm font-semibold transition-all hover:scale-105" style={{ background: 'var(--p-blue)', color: 'white' }}>
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
