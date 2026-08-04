import { useEffect, useRef, useState } from 'react';

const TECH_ITEMS = [
  { name: 'Python', category: 'Language' },
  { name: 'R Programming', category: 'Language' },
  { name: 'Metagenomics', category: 'Bioinformatics' },
  { name: 'QIIME2', category: 'Microbiome' },
  { name: 'LightGBM', category: 'ML' },
  { name: 'XGBoost', category: 'ML' },
  { name: 'Random Forest', category: 'ML' },
  { name: 'SHAP Explainability', category: 'ML' },
  { name: 'React', category: 'Web' },
  { name: 'Vite', category: 'Web' },
  { name: 'Next.js', category: 'Web' },
  { name: 'AutoDock Vina', category: 'Docking' },
  { name: 'PyRx', category: 'Virtual Screening' },
  { name: 'KEGG Database', category: 'In silico' },
  { name: 'Reactome Pathways', category: 'In silico' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS (VPC)', category: 'Cloud' },
  { name: 'Google Cloud Platform', category: 'Cloud' },
];

export default function Marquee() {
  // Triple the array to feel seamlessly infinite even on ultrawide screens
  const marqueeItems = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="w-full overflow-hidden py-4 border-y border-clinical-border bg-white select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {marqueeItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="inline-flex items-center space-x-2 mx-6 px-4 py-2 border border-clinical-border rounded bg-neutral-50/50 hover:bg-neutral-900 hover:text-white transition-colors duration-200 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-clinical-text-main hover:bg-white shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider">{item.name}</span>
            <span className="font-mono text-[9px] text-clinical-text-muted hover:text-neutral-300">[{item.category}]</span>
          </div>
        ))}
      </div>
    </div>
  );
}
