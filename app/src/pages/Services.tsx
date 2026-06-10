import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, FileText, Settings, BarChart3 } from 'lucide-react';
import PageHero from '../components/PageHero';

const serviceColors = ['var(--p-blue)', 'var(--p-green)', 'var(--p-blue)', 'var(--p-teal)'];

const categories = [
  {
    icon: Calculator, title: 'Accounting and Bookkeeping',
    desc: 'Reliable accounting and bookkeeping support to help organisations maintain accurate and up-to-date financial records.',
    items: ['Day-to-day bookkeeping', 'Bank reconciliations', 'Management accounts', 'Financial reporting', 'Payroll support', 'VAT support where applicable', 'Review of income and expenditure', 'Monitoring of restricted and unrestricted funds', 'Support with financial records and audit preparation'],
  },
  {
    icon: FileText, title: 'Year-End Accounts and Financial Statements',
    desc: 'Support with the preparation of year-end accounts and financial statements in line with Charity SORP, Companies House and Charity Commission requirements.',
    items: ['Preparation of annual accounts', 'Charity accounts in line with SORP where applicable', 'Trustee annual report support', 'Independent examination preparation', 'Audit file preparation', 'Liaison with accountants, independent examiners or auditors', 'Review of financial disclosures', 'Support with Companies House and Charity Commission filing requirements'],
  },
  {
    icon: Settings, title: 'Accounting System Setup and Support',
    desc: 'Help organisations set up, review and improve their accounting platforms for more effective financial management.',
    items: ['Setting up accounting software', 'Creating chart of accounts', 'Setting up departments, funds and projects', 'Designing reporting structures', 'Training staff on accounting systems', 'Reviewing existing accounting processes', 'Improving bookkeeping workflows', 'Supporting cloud-based accounting solutions'],
  },
  {
    icon: BarChart3, title: 'Audit Support for Year-End Financial Statements',
    desc: 'Support to help charities and organisations prepare for the year-end audit or independent examination process.',
    items: ['Preparing year-end financial statements', 'Preparing audit schedules and supporting documents', 'Reviewing accounting records before audit', 'Reconciling bank accounts, control accounts and key balances', 'Preparing fixed asset registers and depreciation schedules', 'Supporting restricted and unrestricted fund reporting', 'Preparing working papers for auditors or independent examiners', 'Liaising with auditors, independent examiners and accountants', 'Responding to audit queries', 'Helping management and trustees address audit findings and recommendations'],
  },
];

export default function Services() {
  return (
    <>
      <PageHero title="Our Services" subtitle="Professional accounting, financial management and compliance services tailored to charities, non-profits and purpose-led businesses." variant="blue"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our Services', href: '/services' }]} />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-pinpoint">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label">How We Help</p>
            <h2>Comprehensive Financial Support</h2>
            <div className="divider-line mx-auto mb-6" />
            <p className="font-body leading-relaxed">We provide a combination of financial expertise, compliance knowledge and practical guidance to help clients meet their statutory, regulatory and internal reporting obligations.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint">
          <div className="space-y-16">
            {categories.map((cat, i) => (
              <div key={cat.title} className="grid lg:grid-cols-2 gap-10 items-start">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6" style={{ background: serviceColors[i % 4] }}>
                    <cat.icon size={24} />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl mb-4">{cat.title}</h2>
                  <div className="divider-line mb-6" />
                  <p className="font-body leading-relaxed mb-6">{cat.desc}</p>
                  <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #0F7EA5, #1A9BC7)' }}>
                    <p className="font-body text-sm text-white/90 leading-relaxed">
                      {cat.title.includes('Accounting and Bookkeeping') ? 'We help organisations keep their financial information organised, transparent and ready for review by trustees, auditors, funders and regulators.' :
                       cat.title.includes('Year-End') ? 'We support charities, non-profit organisations and other clients with the preparation of year-end accounts and financial statements that meet all regulatory requirements.' :
                       cat.title.includes('System') ? 'We aim to make accounting systems easier to use, more accurate and better aligned with the organisation\'s reporting needs.' :
                       'Our aim is to make the audit process smoother, more organised and less stressful by ensuring that financial records, reports and supporting documents are properly prepared before submission.'}
                    </p>
                  </div>
                </div>
                <div className={`bg-white rounded-2xl p-8 shadow-sm ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-display text-lg mb-6 flex items-center gap-2">
                    <span className="w-6 h-0.5 rounded-full" style={{ background: serviceColors[i % 4] }} />
                    What we provide
                  </h3>
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: serviceColors[i % 4] }} />
                        <span className="font-body text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-pinpoint">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label">Explore More</p>
            <h2>Related Services</h2>
            <div className="divider-line mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Charity Compliance & Governance', desc: 'Governance advice, regulatory submissions, internal control reviews and Charity Commission inquiry support.', href: '/compliance', color: 'var(--p-blue)' },
              { title: 'Policies & Procedures', desc: 'Preparation and review of finance policies, reserves policies, conflict of interest policies and more.', href: '/compliance', color: 'var(--p-green)' },
              { title: 'Training', desc: 'Practical training for staff, trustees and management on charity finance, governance and compliance.', href: '/training', color: 'var(--p-purple)' },
            ].map((s) => (
              <Link key={s.title} to={s.href} className="group p-8 rounded-2xl transition-all hover:shadow-lg" style={{ background: 'var(--p-surface)' }}>
                <h3 className="font-display text-xl mb-3">{s.title}</h3>
                <p className="font-body text-sm mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-2 font-body text-sm font-semibold" style={{ color: s.color }}>
                  Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #0F7EA5, #1A9BC7)' }}>
        <div className="container-pinpoint text-center">
          <h2 className="font-display text-white mb-4">Need support with your organisation's finances?</h2>
          <p className="font-body text-white/95 mb-8 max-w-xl mx-auto">Contact us to discuss how we can help with your accounting, compliance and financial reporting needs.</p>
          <Link to="/contact" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body text-sm font-semibold transition-all hover:scale-105" style={{ background: 'var(--p-blue)', color: 'white' }}>
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
