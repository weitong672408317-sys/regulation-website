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

interface TaxSectionProps {
  introText?: React.ReactNode;
  children?: React.ReactNode;
}

export function TaxSection({ introText, children }: TaxSectionProps) {
  return (
    <SectionCard title="税收政策">
      {introText && (
        <div className="mb-6">
          {typeof introText === 'string' ? (
            <p className="text-[#334155] text-base leading-7">{introText}</p>
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
