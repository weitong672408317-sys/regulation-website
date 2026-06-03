import React from 'react';
import { SectionCard, SubCard } from './SectionCard';

interface RedLineGroup {
  title: string;
  items: string[];
}

interface RedLineBoxProps {
  groups?: RedLineGroup[];
  items?: string[];
  children?: React.ReactNode;
}

export function RedLineBox({ groups, items, children }: RedLineBoxProps) {
  return (
    <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-bold text-[#DC2626]">合规红线清单</h3>
      </div>
      {groups && groups.length > 0 && (
        <div className="space-y-5">
          {groups.map((group, index) => (
            <div key={index}>
              <h4 className="font-bold text-[#7F1D1D] text-base mb-2">{group.title}</h4>
              <ul className="space-y-2">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="text-[#DC2626] mt-1.5">✗</span>
                    <span className="text-[#334155] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {items && (!groups || groups.length === 0) && (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-[#DC2626] mt-1.5">✗</span>
              <span className="text-[#334155] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
}

interface TrendAndRedLinesSectionProps {
  title?: string;
  trendTitle?: string;
  trendContent?: React.ReactNode;
  redLineGroups?: RedLineGroup[];
  redLineItems?: string[];
  children?: React.ReactNode;
}

export function TrendAndRedLinesSection({ title = '趋势预判与红线警告', trendTitle = '趋势预判', trendContent, redLineGroups, redLineItems, children }: TrendAndRedLinesSectionProps) {
  return (
    <SectionCard title={title}>
      <div className="space-y-4">
        <SubCard title={trendTitle}>
          {trendContent}
        </SubCard>
        <RedLineBox groups={redLineGroups} items={redLineItems} />
        {children}
      </div>
    </SectionCard>
  );
}

export type { RedLineGroup };
