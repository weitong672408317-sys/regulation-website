import React from 'react';
import { SectionCard, SubCard } from './SectionCard';

interface SeasonSummaryItem {
  title: string;
  content: React.ReactNode;
}

interface SeasonSummarySectionProps {
  introText?: React.ReactNode;
  items?: SeasonSummaryItem[];
  children?: React.ReactNode;
}

export function SeasonSummarySection({ introText, items, children }: SeasonSummarySectionProps) {
  return (
    <SectionCard title="本季监管动态">
      {introText && (
        <p className="text-[#334155] text-base leading-7 mb-5 text-justify">{introText}</p>
      )}
      {items && items.length > 0 && (
        <div className="space-y-3">
          {items.map((item, index) => (
            <SubCard key={index} className="!p-4">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h4 className="font-bold text-[#373F7A] text-base mb-1">{item.title}</h4>
                  <div className="text-[#334155] text-base leading-7 text-justify">{item.content}</div>
                </div>
              </div>
            </SubCard>
          ))}
        </div>
      )}
      {children}
    </SectionCard>
  );
}
