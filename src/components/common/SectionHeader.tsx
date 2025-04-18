
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

export function SectionHeader({ title, subtitle, alignment = 'center' }: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };
  
  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses[alignment]}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-sbc-gray-dark mb-4">{title}</h2>
      {subtitle && <p className="text-sbc-gray text-lg">{subtitle}</p>}
    </div>
  );
}
