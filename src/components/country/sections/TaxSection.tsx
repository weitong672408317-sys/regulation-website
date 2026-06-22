import React from 'react';
import { SectionCard, SubCard } from './SectionCard';

interface TaxTableCardProps {
  title: string;
  children: React.ReactNode;
}

export function TaxTableCard({ title, children }: TaxTableCardProps) {
  return (
    <SubCard title={title}>
      {children}
    </SubCard>
  );
}

interface PolicyCardProps {
  title: string;
  children: React.ReactNode;
}

export function PolicyCard({ title, children }: PolicyCardProps) {
  return (
    <div className="bg-white border border-[#D8DDED] rounded-xl p-5">
      <h4 className="font-bold text-[#2E3F73] text-base mb-3">{title}</h4>
      {children}
    </div>
  );
}

interface TaxSectionProps {
  introText?: React.ReactNode;
  children?: React.ReactNode;
}

export function TaxSection({ introText, children, sectionId }: TaxSectionProps & { sectionId?: string }) {
  return (
    <SectionCard title="税收政策" id={sectionId}>
      {introText && (
        <div className="mb-6">
          {typeof introText === 'string' ? (
            <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6]">{introText}</p>
          ) : (
            introText
          )}
        </div>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </SectionCard>
  );
}
