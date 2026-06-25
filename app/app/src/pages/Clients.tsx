import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Church, Building2, HandHeart, Briefcase, Quote, Star } from 'lucide-react';

const clientRows = [
  [
    { name: 'Changing Lives Housing Trust', sector: 'Housing', color: 'var(--p-blue)' },
    { name: '25th Avenue Housing', sector: 'Housing', color: 'var(--p-green)' },
    { name: 'Imperial Care HCS Ltd', sector: 'Care Services', color: 'var(--p-teal)' },
    { name: 'The Everlasting Arms Ministries', sector: 'Ministry', color: 'var(--p-purple)' },
    { name: 'The Reality of Grace Ministries International', sector: 'Ministry', color: 'var(--p-blue)' },
    { name: 'Easy Property Perfection Ltd', sector: 'Property', color: 'var(--p-green)' },
  ],
  [
    { name: 'Safe and Sound Solution Ltd', sector: 'Housing', color: 'var(--p-teal)' },
    { name: 'Thames Housing Management Ltd', sector: 'Housing', color: 'var(--p-purple)' },
    { name: 'Birmingham Supported Housing', sector: 'Housing', color: 'var(--p-blue)' },
    { name: 'Escada Housing', sector: 'Housing', color: 'var(--p-green)' },
    { name: 'A1 Houing Services', sector: 'Housing', color: 'var(--p-teal)' },
    { name: 'Luton Supported Hosing', sector: 'Housing', color: 'var(--p-purple)' },
  ],
  [
    { name: 'Zieon Grace Care home', sector: 'Care Home', color: 'var(--p-blue)' },
    { name: 'Rawhairldn Ltd', sector: 'Business', color: 'var(--p-green)' },
    { name: 'Hazibah Logistics Ltd', sector: 'Logistics', color: 'var(--p-teal)' },
    { name: 'Whizz Venture Limited', sector: 'Business', color: 'var(--p-blue)' },
    { name: 'Changing Lives Housing Trust', sector: 'Housing', color: 'var(--p-green)' },
    { name: '25th Avenue Housing', sector: 'Housing', color: 'var(--p-purple)' },
  ],
];

const categories = [
  { icon: Building2, label: 'Housing Providers', count: '10+', color: 'var(--p-blue)' },
  { icon: Church, label: 'Ministries', count: '2', color: 'var(--p-green)' },
  { icon: HandHeart, label: 'Care Services', count: '2', color: 'var(--p-teal)' },
  { icon: Briefcase, label: 'Businesses', count: '3', color: 'var(--p-purple)' },
];

const testimonials = [
  { quote: 'Pinpoint Finance has transformed the way we manage our organisation\'s finances. Their expertise in compliance and governance has given our board complete confidence.', author: 'Director', role: 'Changing Lives Housing Trust' },
  { quote: 'The team at Pinpoint provided invaluable support with our financial reporting. Their professionalism and clear guidance helped us navigate complex regulatory requirements.', author: 'Trustee', role: 'The Everlasting Arms Ministries' },
  { quote: 'Their attention to detail and understanding of the supported housing sector makes them an invaluable partner. We trust them completely with our financial management.', author: 'Managing Director', role: 'Thames Housing Management Ltd' },
];

function ClientCard({ client }: { client: typeof clientRows[0][0] }) {
  const initials = client.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-2xl p-6 mx-3 shadow-sm hover:shadow-lg transition-all duration-500 border" style={{ borderColor: 'var(--p-border)' }}>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center font-display text-xl font-bold text-white" style={{ background: client.color }}>{initials}</div>
        <div>
          <h4 className="font-display text-lg leading-tight">{client.name}</h4>
          <span className="font-body text-[10px] uppercase tracking-wider" style={{ color: 'var(--p-slate)' }}>{client.sector}</span>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ clients, direction = 'left' }: { clients: typeof clientRows[0]; direction?: 'left' | 'right' }) {
  const rowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    let animationId: number;
    let progress = 0;
    const totalWidth = row.scrollWidth / 2;
    const animate = () => {
      progress += direction === 'left' ? 0.5 : -0.5;
      if (direction === 'left' && progress >= totalWidth) progress = 0;
      if (direction === 'right' && progress <= -totalWidth) progress = 0;
      row.style.transform = `translateX(${-progress}px)`;
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [direction]);

  return (
    <div className="overflow-hidden py-2">
      <div ref={rowRef} className="flex" style={{ willChange: 'transform' }}>
        {[...clients, ...clients].map((client, i) => <ClientCard key={`${client.name}-${i}`} client={client} />)}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <>
      <section className="relative overflow-hidden pt-[100px]" style={{ background: 'linear-gradient(135deg, #0F7EA5 0%, #1A9BC7 50%, #2DB5E0 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute bottom-10 left-[10%] w-48 h-48 rounded-full bg-white/5" />
        </div>
        <div className="relative z-10 container-pinpoint py-20 md:py-28">
          <nav className="mb-8"><ol className="flex items-center gap-2 font-body text-xs text-white/90"><li><Link to="/" className="hover:text-white transition-colors">Home</Link></li><span className="text-white/30">/</span><li className="text-white/95">Our Clients</li></ol></nav>
          <div className="max-w-3xl">
            <h1 className="font-display text-white mb-4">Our Clients</h1>
            <p className="font-body text-lg text-white/95 leading-relaxed max-w-2xl">We are proud to support a diverse range of charities, non-profit organisations and purpose-led businesses across England and Wales.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-pinpoint">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ value: '16+', label: 'Organisations Supported' }, { value: '4', label: 'Client Sectors' }, { value: '100%', label: 'Client Retention' }, { value: '5+', label: 'Years of Service' }].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="font-display text-4xl md:text-5xl font-semibold" style={{ color: 'var(--p-blue)' }}>{s.value}</span>
                <span className="font-body text-xs mt-2 uppercase tracking-wider" style={{ color: 'var(--p-slate)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="section-label">Organisations We Serve</p>
            <h2>A Diverse Range of Clients</h2>
            <div className="divider-line mx-auto mb-6" />
            <p className="font-body">We support charities, community organisations, social enterprises, faith-based groups and businesses across England and Wales.</p>
          </div>
        </div>
        <div className="space-y-4">
          <MarqueeRow clients={clientRows[0]} direction="left" />
          <MarqueeRow clients={clientRows[1]} direction="right" />
          <MarqueeRow clients={clientRows[2]} direction="left" />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-pinpoint">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">By Sector</p>
            <h2>Clients by Category</h2>
            <div className="divider-line mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.label} className="text-center p-8 rounded-2xl card-hover" style={{ background: 'var(--p-surface)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: cat.color }}>
                  <cat.icon size={20} className="text-white" />
                </div>
                <span className="font-display text-3xl font-semibold">{cat.count}</span>
                <p className="font-body text-sm mt-2">{cat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #0F7EA5, #1A9BC7, #2DB5E0)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/5" />
        </div>
        <div className="container-pinpoint relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/90 mb-4">Testimonials</p>
            <h2 className="font-display text-white mb-4">What Our Clients Say</h2>
            <p className="font-body text-white/95">We value the long-term relationships we build with our clients.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                <Quote size={24} className="mb-4" style={{ color: 'var(--p-teal-light)' }} />
                <p className="font-body text-white/90 leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-1 mb-2">{[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#D4A843] fill-current" />)}</div>
                <p className="font-display text-white font-medium">{t.author}</p>
                <p className="font-body text-xs text-white/90">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--p-surface)' }}>
        <div className="container-pinpoint text-center">
          <h2>Join our growing list of satisfied clients</h2>
          <p className="font-body mb-8 max-w-xl mx-auto">Whether you are a small charity or a larger non-profit organisation, we can provide the financial and compliance support you need.</p>
          <Link to="/contact" className="btn-primary">Become a Client <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
