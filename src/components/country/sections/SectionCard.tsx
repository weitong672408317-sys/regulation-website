import React from 'react';

export function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
          <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export function SubCard({ title, children, className = '' }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5 ${className}`}>
      {title && <h3 className="text-lg font-bold text-[#2E3F73] mb-4">{title}</h3>}
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

export function BulletList({ items, className = '' }: { items: React.ReactNode[]; className?: string }) {
  return (
    <ul className={`space-y-3 pl-5 list-disc ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="text-base leading-7 text-[#334155]">{item}</li>
      ))}
    </ul>
  );
}

export function DotList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
          <span className="text-[#334155] text-base leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}
