interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
  variant?: 'blue' | 'teal' | 'green';
  bgImage?: string;
}

const gradientMap = {
  blue:  'linear-gradient(135deg, #0F7EA5 0%, #1A9BC7 50%, #2DB5E0 100%)',
  teal:  'linear-gradient(135deg, #1A7D73 0%, #26A69A 50%, #3DC9BC 100%)',
  green: 'linear-gradient(135deg, #5A8F30 0%, #7CB342 50%, #9CCC65 100%)',
};

export default function PageHero({ variant = 'blue', bgImage }: PageHeroProps) {
  const hasImage = !!bgImage;

  return (
    <section className="relative overflow-hidden" style={{ height: '420px' }}>
      {/* Background: image if available, otherwise gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: hasImage
            ? `url(${bgImage}) center/cover no-repeat`
            : gradientMap[variant],
        }}
      />
    </section>
  );
}
