import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Charity Compliance', href: '/compliance' },
  { label: 'Training', href: '/training' },
  { label: 'Contact Us', href: '/contact' },
];

const services = [
  'Accounting & Bookkeeping',
  'Year-End Accounts',
  'Charity Compliance',
  'Governance Support',
  'Audit Support',
  'Training',
];

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(180deg, #0D1219 0%, #070A0F 100%)' }}>
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="container-pinpoint py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <p className="font-display text-[11px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--p-teal-light)' }}>Get Started</p>
              <h3 className="font-display text-3xl md:text-4xl text-white max-w-2xl">
                Ready to strengthen your organisation&apos;s financial foundation?
              </h3>
            </div>
            <Link to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-display font-bold text-sm tracking-wide whitespace-nowrap transition-all hover:scale-105"
              style={{ background: 'var(--p-green)', color: 'white' }}>
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-pinpoint py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-6">
              <div className="inline-block bg-white rounded-2xl px-5 py-3">
                <img src="images/logo-navbar.png" alt="Pinpoint Finance and Compliance Ltd" className="h-12 w-auto object-contain" />
              </div>
            </Link>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
              Professional accounting, financial management and compliance services for charities, non-profits and purpose-led businesses.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+440000000000" className="flex items-center gap-2 text-sm font-body text-white/60 hover:text-white transition-colors">
                <Phone size={14} /> +44 (0) 0000 000 000
              </a>
              <a href="mailto:info@pinpointfinance.co.uk" className="flex items-center gap-2 text-sm font-body text-white/60 hover:text-white transition-colors">
                <Mail size={14} /> info@pinpointfinance.co.uk
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 rounded-full" style={{ background: 'var(--p-teal)' }} />
              <h4 className="font-display text-xs font-bold tracking-[0.2em] uppercase text-white/90">Quick Links</h4>
            </div>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="font-body text-sm text-white/60 hover:text-white transition-colors pl-3 border-l border-white/10 hover:border-white/40">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 rounded-full" style={{ background: 'var(--p-green)' }} />
              <h4 className="font-display text-xs font-bold tracking-[0.2em] uppercase text-white/90">Our Services</h4>
            </div>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="font-body text-sm text-white/60 hover:text-white transition-colors pl-3 border-l border-white/10 hover:border-white/40">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Registration */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 rounded-full" style={{ background: 'var(--p-blue-light)' }} />
              <h4 className="font-display text-xs font-bold tracking-[0.2em] uppercase text-white/90">Registration</h4>
            </div>
            <div className="flex items-start gap-3 pl-3 border-l border-white/10">
              <MapPin size={14} className="mt-1 shrink-0" style={{ color: 'var(--p-teal-light)' }} />
              <div>
                <p className="font-body text-sm text-white/60">Registered in England and Wales</p>
                <p className="font-body text-sm text-white/60">Company Number: [Insert Number]</p>
              </div>
            </div>
            <p className="font-body text-xs text-white/40 leading-relaxed mt-6 pl-3 border-l border-white/10">
              Pinpoint Finance and Compliance Ltd provides professional accounting and compliance services to charities, non-profit organisations and businesses across the UK.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-pinpoint py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            &copy; {new Date().getFullYear()} Pinpoint Finance and Compliance Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-body text-xs text-white/40 hover:text-white/60 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="font-body text-xs text-white/40 hover:text-white/60 transition-colors cursor-pointer">Terms of Service</span>
            <span className="font-body text-xs text-white/40 hover:text-white/60 transition-colors cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
