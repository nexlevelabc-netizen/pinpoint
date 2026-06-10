import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
  variant?: 'blue' | 'teal' | 'green';
}

const gradientMap = {
  blue:  'linear-gradient(135deg, #0F7EA5 0%, #1A9BC7 50%, #2DB5E0 100%)',
  teal:  'linear-gradient(135deg, #1A7D73 0%, #26A69A 50%, #3DC9BC 100%)',
  green: 'linear-gradient(135deg, #5A8F30 0%, #7CB342 50%, #9CCC65 100%)',
};

export default function PageHero({ title, subtitle, breadcrumbs, variant = 'blue' }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-[100px]" style={{ background: gradientMap[variant] }}>
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute top-1/2 -left-10 w-40 h-40 rounded-full bg-white/5" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 rounded-full bg-white/5" />
      </div>

      <div className="relative z-10 container-pinpoint py-20 md:py-28">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="mb-8 animate-fade-in">
            <ol className="flex items-center gap-2 font-body text-xs text-white/90">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/30">/</span>}
                  <Link to={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl animate-fade-up">
          <h1 className="font-display text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="font-body text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl">{subtitle}</p>
          )}
        </div>

        {/* Decorative dots */}
        <div className="mt-8 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
        </div>
      </div>
    </section>
  );
}
