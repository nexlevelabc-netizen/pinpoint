import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Search } from 'lucide-react';
import { useContactPanel } from './ContactPanelContext';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Our Services', href: '/services' },
      { label: 'Charity Compliance', href: '/compliance' },
      { label: 'Training', href: '/training' },
    ],
  },
  { label: 'Who We Support', href: '/who-we-support' },
  { label: 'Clients', href: '/clients' },
  { label: 'Partners', href: '/partners' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const { openPanel } = useContactPanel();

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(null);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDropdownOpen(label);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(null), 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_1px_10px_rgba(0,0,0,0.06)]">
      {/* Top bar */}
      <div className="hidden lg:block" style={{ background: 'var(--p-blue)' }}>
        <div className="container-pinpoint flex items-center justify-between h-8">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-xs font-body text-white/90 hover:text-white transition-colors" aria-label="Search">
              <Search size={12} />
              <span className="font-body text-[11px] tracking-wide">Search</span>
            </button>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+440000000000" className="flex items-center gap-1.5 text-xs font-body text-white/90 hover:text-white transition-colors">
              <Phone size={11} /> <span>+44 (0) 0000 000 000</span>
            </a>
            <a href="mailto:info@pinpointfinance.co.uk" className="flex items-center gap-1.5 text-xs font-body text-white/90 hover:text-white transition-colors">
              <Mail size={11} /> <span>info@pinpointfinance.co.uk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-pinpoint">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="images/logo-navbar.png" alt="Pinpoint Finance and Compliance Ltd" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                {link.children ? (
                  <>
                    <button className="group/nav relative flex items-center gap-1 cursor-pointer font-display text-sm font-bold tracking-wide pb-1"
                      style={isActive(link.href) ? { color: 'var(--p-blue)' } : { color: 'var(--p-charcoal)' }}>
                      {link.label}
                      <ChevronDown size={13} className={`transition-transform duration-300 ${dropdownOpen === link.label ? 'rotate-180' : ''}`} />
                      {/* Animated underline */}
                      <span className="absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ease-out w-0 group-hover/nav:w-full" style={{ background: 'var(--p-blue)' }} />
                      {/* Active underline */}
                      {isActive(link.href) && <span className="absolute bottom-0 left-0 h-0.5 rounded-full w-full" style={{ background: 'var(--p-blue)' }} />}
                    </button>
                    <div
                      className={`absolute top-full left-0 w-56 bg-white rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] py-2 border border-[var(--p-border)] z-50 transition-all duration-200 ${
                        dropdownOpen === link.label ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-1 pointer-events-none invisible'
                      }`}
                      onMouseEnter={() => { if (dropdownTimer.current) clearTimeout(dropdownTimer.current); }}
                      onMouseLeave={handleMouseLeave}
                    >
                      {link.children.map((child) => (
                        <Link key={child.href} to={child.href}
                          className="block px-5 py-2.5 text-sm font-body transition-colors rounded-lg mx-1 font-medium"
                          style={isActive(child.href) ? { color: 'var(--p-blue)', fontWeight: 600, background: 'var(--p-blue-soft)' } : { color: 'var(--p-charcoal)' }}
                          onMouseEnter={(e) => { if (!isActive(child.href)) { e.currentTarget.style.background = 'var(--p-blue-soft)'; e.currentTarget.style.color = 'var(--p-blue)'; }}}
                          onMouseLeave={(e) => { if (!isActive(child.href)) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--p-charcoal)'; }}}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={link.href} className="group/nav relative font-display text-sm font-bold tracking-wide pb-1 inline-block"
                    style={isActive(link.href) ? { color: 'var(--p-blue)' } : { color: 'var(--p-charcoal)' }}>
                    {link.label}
                    {/* Animated underline — slides in from left on hover */}
                    <span className="absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ease-out w-0 group-hover/nav:w-full" style={{ background: 'var(--p-blue)' }} />
                    {/* Active underline — always visible for current page */}
                    {isActive(link.href) && <span className="absolute bottom-0 left-0 h-0.5 rounded-full w-full" style={{ background: 'var(--p-blue)' }} />}
                  </Link>
                )}
              </div>
            ))}
            <button onClick={openPanel} className="btn-primary text-xs px-5 py-2.5">Get in Touch</button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2" style={{ color: 'var(--p-charcoal)' }} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`xl:hidden absolute top-full left-0 right-0 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] border-t border-[var(--p-border)] transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="container-pinpoint py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.href} className="py-1">
              {link.children ? (
                <>
                  <span className="font-body text-sm font-bold block py-2" style={{ color: 'var(--p-blue)' }}>{link.label}</span>
                  <div className="ml-4 flex flex-col gap-1 border-l-2 border-[var(--p-border)] pl-4">
                    {link.children.map((child) => (
                      <Link key={child.href} to={child.href} className="text-sm font-body py-2 font-medium" style={{ color: 'var(--p-charcoal)' }}>{child.label}</Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={link.href} className="font-body text-sm font-semibold py-2 block"
                  style={isActive(link.href) ? { color: 'var(--p-blue)' } : { color: 'var(--p-charcoal)' }}>{link.label}</Link>
              )}
            </div>
          ))}
          <button onClick={() => { openPanel(); setIsOpen(false); }} className="btn-primary mt-4 justify-center text-xs w-full">Get in Touch</button>
        </div>
      </div>
    </header>
  );
}
