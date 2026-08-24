import { ArrowRight } from 'lucide-react';
import { useContactPanel } from '../components/ContactPanelContext';
import PageHero from '../components/PageHero';

const areas = [
  { title: 'Charity Governance Advice', desc: 'Practical guidance on charity governance structures, trustee duties and best practices for board effectiveness.', color: 'var(--p-blue)' },
  { title: 'Review of Policies & Procedures', desc: 'Comprehensive review and development of organisational policies to ensure compliance and good governance.', color: 'var(--p-green)' },
  { title: 'Regulatory Submissions', desc: 'Support with preparing and submitting required documentation to regulators including the Charity Commission.', color: 'var(--p-blue)' },
  { title: 'Internal Control Reviews', desc: 'Assessment of internal financial controls to identify strengths and areas for improvement.', color: 'var(--p-teal)' },
  { title: 'Financial Governance Support', desc: 'Guidance on financial governance arrangements, delegations and authorisation structures.', color: 'var(--p-purple)' },
  { title: 'Trustee Reporting Support', desc: 'Assistance with preparing clear, accurate reports for trustees, regulators and stakeholders.', color: 'var(--p-blue)' },
];

const policies = ['Finance policies', 'Reserves policies', 'Conflict of interest policies', 'Complaints policies', 'Anti-fraud and financial controls policies', 'Trustee governance policies', 'Risk management policies', 'Expenses policies', 'Procurement policies', 'Safeguarding-related procedural support where appropriate'];

const inquiry = ['Reviewing Charity Commission correspondence', 'Preparing draft responses', 'Gathering supporting documents', 'Reviewing compliance gaps', 'Supporting trustees and management during the process', 'Preparing action plans', 'Advising on governance and financial control improvements', 'Helping organisations respond professionally and transparently'];

function ContactUsButton() {
  const { openPanel } = useContactPanel();
  return (
    <button
      onClick={openPanel}
      className="inline-flex items-center gap-2 font-body mt-6"
      style={{ color: 'var(--p-teal-light)' }}
    >
      Get inquiry support <ArrowRight size={16} />
    </button>
  );
}

function UrgentSupportButton() {
  const { openPanel } = useContactPanel();
  return (
    <button
      onClick={openPanel}
      className="inline-flex items-center gap-2 font-body text-sm font-semibold"
      style={{ color: 'var(--p-blue)' }}
    >
      Contact us for urgent support <ArrowRight size={14} />
    </button>
  );
}

function DiscussPoliciesButton() {
  const { openPanel } = useContactPanel();
  return (
    <button
      onClick={openPanel}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body text-sm font-semibold transition-all hover:scale-105"
      style={{ background: 'var(--p-blue)', color: 'white' }}
    >
      Discuss Your Policies <ArrowRight size={16} />
    </button>
  );
}

function ContactUsCTA() {
  const { openPanel } = useContactPanel();
  return (
    <button
      onClick={openPanel}
      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body text-sm font-semibold transition-all hover:scale-105"
      style={{ background: 'var(--p-blue)', color: 'white' }}
    >
      Contact Us <ArrowRight size={16} />
    </button>
  );
}

export default function Compliance() {
  return (
    <>
      <PageHero title="Charity Compliance & Governance" subtitle="Practical compliance consultancy to help charities and non-profit organisations understand and meet their regulatory obligations." variant="green" bgImage="images/hero-compliance.png"
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
            {areas.map((a, i) => (
              <div key={a.title} className="bg-white rounded-2xl p-8 card-hover">
                <div className="mb-6">
                  {i === 0 && <img src="images/compliance-governance.png" alt="Governance" className="w-26 h-26 object-contain" />}
                  {i === 1 && <img src="images/compliance-policies.png" alt="Policies" className="w-26 h-26 object-contain" />}
                  {i === 2 && <img src="images/compliance-regulatory.png" alt="Regulatory" className="w-26 h-26 object-contain" />}
                  {i === 3 && <img src="images/compliance-control.png" alt="Control" className="w-26 h-26 object-contain" />}
                  {i === 4 && <img src="images/compliance-financial.png" alt="Financial" className="w-26 h-26 object-contain" />}
                  {i === 5 && <img src="images/compliance-reporting.png" alt="Reporting" className="w-26 h-26 object-contain" />}
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
                    <div className="w-4 h-4 rounded-full mt-0.5 shrink-0" style={{ background: 'var(--p-green)' }} />
                    <span className="font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl p-10 text-white" style={{ background: 'linear-gradient(135deg, #5A8F30, #7CB342)' }}>
              <div className="mb-6">
                <img src="images/compliance-inquiry.png" alt="Inquiry" className="w-26 h-26 object-contain" />
              </div>
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
              <ContactUsButton />
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
              <DiscussPoliciesButton />
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-display text-lg mb-6 flex items-center gap-2">
                Policies We Can Help With
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
            <div className="shrink-0">
              <img src="images/compliance-inquiry.png" alt="Inquiry" className="w-20 h-20 object-contain" />
            </div>
            <div>
              <h3 className="font-display text-xl mb-3">Facing a Charity Commission Inquiry?</h3>
              <p className="font-body leading-relaxed mb-4">
                Our aim is to help clients deal with regulatory matters carefully, clearly and responsibly. We provide structured support to navigate Charity Commission inquiries with professionalism.
              </p>
              <UrgentSupportButton />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #5A8F30, #7CB342)' }}>
        <div className="container-pinpoint text-center">
          <h2 className="font-display text-white mb-4">Strengthen your organisation's compliance today</h2>
          <p className="font-body text-white/95 mb-8 max-w-xl mx-auto">Get in touch to discuss how we can support your charity or non-profit organisation with practical compliance guidance.</p>
          <ContactUsCTA />
        </div>
      </section>
    </>
  );
}
