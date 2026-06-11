import React from 'react';

export function SectionCard({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className={`mb-10${id ? ' scroll-mt-4' : ''}`}>
      <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-[#243B63] mb-8 flex items-center gap-3">
          <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export function SubCard({ title, children, className = '', id }: { title?: string; children: React.ReactNode; className?: string; id?: string }) {
  return (
    <div id={id} className={`bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-6 ${className}${id ? ' scroll-mt-4' : ''}`}>
      {title && <h3 className="text-lg font-bold text-[#2E3F73] mb-5">{title}</h3>}
      {children}
    </div>
  );
}

export function ProductLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">
        {children}
      </div>
    </div>
  );
}

/**
 * Unified bullet point component with proper hanging indent.
 * Use this for all bullet point lists across country pages.
 * - Bullet dot: w-1.5 h-1.5, rounded-full, color bg-[#4A6290]
 * - Gap between dot and text: gap-2 (8px)
 * - Text wraps with hanging indent (second line aligns with first line text)
 */
export function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-[9px] flex-shrink-0"></span>
      <span className="text-[#334155] text-base leading-relaxed text-justify flex-1 min-w-0">{children}</span>
    </div>
  );
}

/**
 * Unified bullet list using BulletPoint with proper hanging indent.
 * Use this for all bullet lists across country pages.
 */
export function BulletList({ items, className = '' }: { items: React.ReactNode[]; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <BulletPoint key={index}>{item}</BulletPoint>
      ))}
    </div>
  );
}

/**
 * DotList is now an alias for BulletList with consistent styling.
 * Kept for backward compatibility.
 */
export function DotList({ items }: { items: React.ReactNode[] }) {
  return <BulletList items={items} />;
}
