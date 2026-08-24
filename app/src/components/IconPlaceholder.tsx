interface IconPlaceholderProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function IconPlaceholder({ label, size = 'md', className = '' }: IconPlaceholderProps) {
  const sizes = {
    sm: 'w-10 h-10 text-[10px]',
    md: 'w-14 h-14 text-[11px]',
    lg: 'w-16 h-16 text-xs',
  };

  return (
    <div
      className={`${sizes[size]} rounded-2xl flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 text-gray-400 font-body font-semibold uppercase tracking-wider text-center leading-tight ${className}`}
    >
      {label || 'Icon'}
    </div>
  );
}
