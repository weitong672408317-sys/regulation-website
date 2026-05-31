import React from 'react';
import { SectionCard } from './SectionCard';

interface SalesRulesSectionProps {
  introText?: React.ReactNode;
  children?: React.ReactNode;
}

export function SalesRulesSection({ introText, children }: SalesRulesSectionProps) {
  return (
    <SectionCard title="主要销售规则对比">
      {introText && (
        <div className="mb-4">
          {typeof introText === 'string' ? (
            <p className="text-[#334155] text-base leading-7">{introText}</p>
          ) : (
            introText
          )}
        </div>
      )}
      {children}
    </SectionCard>
  );
}
