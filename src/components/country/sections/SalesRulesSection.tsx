import React from 'react';
import { SectionCard } from './SectionCard';

interface SalesRulesSectionProps {
  introText?: React.ReactNode;
  children?: React.ReactNode;
  sectionId?: string;
}

export function SalesRulesSection({ introText, children, sectionId }: SalesRulesSectionProps) {
  return (
    <SectionCard title="主要销售规则对比" id={sectionId}>
      {introText && (
        <div className="mb-4">
          {typeof introText === 'string' ? (
            <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6]">{introText}</p>
          ) : (
            introText
          )}
        </div>
      )}
      {children}
    </SectionCard>
  );
}
