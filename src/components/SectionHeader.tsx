interface SectionHeaderProps {
  serial: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function SectionHeader({ serial, title, subtitle, badge }: SectionHeaderProps) {
  return (
    <div className="border-b border-clinical-border pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <div className="flex items-center space-x-2 font-mono text-xs text-clinical-text-muted mb-2">
          <span>[{serial}]</span>
          <span>//</span>
          <span>CORE_NODE_SPECIFICATION</span>
        </div>
        <h2 className="font-sans text-3xl font-bold tracking-tight text-clinical-text-main flex items-center gap-3">
          {title}
          {badge && (
            <span className="font-mono text-[9px] font-normal tracking-widest px-2 py-0.5 border border-clinical-border text-clinical-text-muted bg-neutral-100 uppercase rounded">
              {badge}
            </span>
          )}
        </h2>
      </div>
      {subtitle && (
        <p className="font-mono text-xs text-clinical-text-muted max-w-md md:text-right">
          {subtitle}
        </p>
      )}
    </div>
  );
}
