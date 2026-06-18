import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, Handshake, BookOpen, Globe, Users, Heart, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';

const bodies = [
  { icon: Award, name: 'ICAEW', fullName: 'Institute of Chartered Accountants in England and Wales', desc: 'We adhere to the professional standards and ethical guidelines set by the ICAEW, ensuring the highest quality of accountancy services.', color: 'var(--p-blue)' },
  { icon: Shield, name: 'ACCA', fullName: 'Association of Chartered Certified Accountants', desc: 'Our ACCA affiliation reflects our commitment to global accounting standards and continuous professional development.', color: 'var(--p-green)' },
  { icon: BookOpen, name: 'AAT', fullName: 'Association of Accounting Technicians', desc: 'We support the AAT\'s mission to promote the highest standards of accounting technician practice.', color: 'var(--p-blue)' },
  { icon: Award, name: 'CIMA', fullName: 'Chartered Institute of Management Accountants', desc: 'Our CIMA connection ensures we bring management accounting expertise to support organisational decision-making.', color: 'var(--p-teal)' },
];

const affiliations = [
  { icon: Heart, name: 'Charity Finance Group', desc: 'Members of the leading network for charity finance professionals, keeping us at the forefront of sector developments.', color: 'var(--p-blue)' },
  { icon: Users, name: 'NCVO', fullName: 'National Council for Voluntary Organisations', desc: 'We align with NCVO\'s vision for a thriving voluntary sector, supporting their guidance and best practice frameworks.', color: 'var(--p-green)' },
  { icon: Globe, name: 'NAVCA', fullName: 'National Association for Voluntary and Community Action', desc: 'Our connection with NAVCA strengthens our understanding of local infrastructure and community-level support.', color: 'var(--p-blue)' },
  { icon: Handshake, name: 'Charity Commission', desc: 'We work within the Charity Commission\'s regulatory framework, supporting our clients to meet all compliance requirements.', color: 'var(--p-teal)' },
];

const partnerships = [
  { title: 'Independent Examiners', desc: 'We work closely with qualified independent examiners to ensure smooth and efficient examination processes for our clients.' },
  { title: 'Charity Auditors', desc: 'Our established relationships with specialist charity auditors help us prepare our clients thoroughly for the audit process.' },
  { title: 'Software Providers', desc: 'We partner with leading accounting software providers to deliver efficient, cloud-based financial management solutions.' },
  { title: 'Legal Advisors', desc: 'Our network includes specialist charity law firms, enabling us to refer clients for legal matters when required.' },
  { title: 'Governance Consultants', desc: 'We collaborate with governance specialists to provide comprehensive support for trustee boards and management committees.' },
  { title: 'Fundraising Advisors', desc: 'Our partnerships with fundraising consultants help ensure our clients\' financial systems support their income generation activities.' },
];

const commitments = [
  'Continuous professional development for all team members',
  'Regular attendance at charity sector conferences and events',
  'Active participation in professional body working groups',
  'Contributing to charity sector publications and guidance',
  'Maintaining up-to-date knowledge of regulatory changes',
  'Adhering to the highest ethical and professional standards',
];

export default function Partners() {
  return (
    <>
      <PageHero title="Partners & Accreditations" subtitle="We are proud to be affiliated with leading professional bodies and organisations in the accountancy and charity sectors." variant="blue"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Partners', href: '/partners' }]} />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-pinpoint">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label">Our Network</p>
            <h2>Trusted Professional Connections</h2>
            <div className="divider-line mx-auto mb-6" />
            <p className="font-body leading-relaxed">
              Our professional memberships and partnerships ensure we stay at the forefront of industry developments, regulatory changes and best practice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Professional Bodies</p>
            <h2>Accountancy & Professional Memberships</h2>
            <div className="divider-line mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {bodies.map((b) => (
              <div key={b.name} className="bg-white rounded-2xl p-8 card-hover">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0" style={{ background: b.color }}>
                    <b.icon size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-xl">{b.name}</h3>
                      <span className="px-3 py-0.5 rounded-full font-body text-[10px] uppercase tracking-wider text-white" style={{ background: b.color }}>Member</span>
                    </div>
                    <p className="font-body text-xs mb-3" style={{ color: 'var(--p-slate)' }}>{b.fullName}</p>
                    <p className="font-body text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-pinpoint">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Charity Sector</p>
            <h2>Charity & Voluntary Sector Affiliations</h2>
            <div className="divider-line mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {affiliations.map((a) => (
              <div key={a.name} className="p-8 rounded-2xl text-center card-hover" style={{ background: 'var(--p-surface)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 mx-auto" style={{ background: a.color }}>
                  <a.icon size={22} />
                </div>
                <h3 className="font-display text-lg mb-2">{a.name}</h3>
                {a.fullName && <p className="font-body text-[10px] uppercase tracking-wider mb-3" style={{ color: 'var(--p-slate)' }}>{a.fullName}</p>}
                <p className="font-body text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            <section className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #111C38 40%, #1A2A4A 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(26,155,199,0.08) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full" style={{ background: 'radial-gradient(circle, rgba(45,170,122,0.06) 0%, transparent 70%)' }} />
        </div>
        <div className="container-pinpoint relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-body text-[11px] font-bold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--p-teal-light)' }}>Collaboration</p>
            <h2 className="font-display text-white mb-4">Our Partnership Network</h2>
            <p className="font-body" style={{ color: 'rgba(255,255,255,0.85)' }}>We work alongside a trusted network of specialists to ensure our clients receive comprehensive support.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((p, i) => (
              <div key={p.title} className="p-8 rounded-3xl transition-all hover:-translate-y-1" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm" style={{ background: 'var(--p-blue)', color: 'white' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-display text-lg" style={{ color: '#FFFFFF' }}>{p.title}</h3>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="section-label">Our Pledge</p>
              <h2>Commitment to Professional Excellence</h2>
              <div className="divider-line mb-6" />
              <p className="font-body leading-relaxed mb-8">
                Our professional memberships are more than credentials. They represent our ongoing commitment to excellence, ethical practice and staying at the cutting edge of accounting and charity sector developments.
              </p>
              <div className="space-y-4">
                {commitments.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--p-green)' }} />
                    <span className="font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl p-10" style={{ background: 'var(--p-blue-soft)' }}>
              <Award size={40} className="mb-6" style={{ color: 'var(--p-blue)' }} />
              <h3 className="font-display text-2xl mb-4">Why Our Memberships Matter to You</h3>
              <div className="space-y-4 font-body leading-relaxed">
                <p>When you work with Pinpoint Finance and Compliance Ltd, you benefit from our collective professional knowledge and the rigorous standards set by our accrediting bodies.</p>
                <p>Our memberships ensure we are bound by professional codes of ethics, maintain appropriate insurance, and undertake mandatory continuing professional development.</p>
                <p>This means you can have confidence that the advice and services you receive are backed by recognised professional standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-pinpoint text-center">
          <h2>Work with a professionally accredited team</h2>
          <p className="font-body mb-8 max-w-xl mx-auto">Contact us to discuss how our professional expertise can support your organisation's financial and compliance needs.</p>
          <Link to="/contact" className="btn-primary">Get in Touch <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
