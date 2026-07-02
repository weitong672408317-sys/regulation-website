import React from 'react';
import { SectionCard, SubCard } from './SectionCard';

interface RedLineGroup {
  title: string;
  items: string[];
}

interface RedLineBoxProps {
  id?: string;
  groups?: RedLineGroup[];
  items?: React.ReactNode[];
  children?: React.ReactNode;
}

export function RedLineBox({ id, groups, items, children }: RedLineBoxProps) {
  return (
    <div
      id={id}
      className={`redline-box bg-[#FEF2F2] border border-[#FCA5A5] rounded-xl p-5${id ? ' scroll-mt-4' : ''}`}
    >
      <div className="redline-header flex items-center gap-2 mb-5">
        <h3 className="redline-title text-lg font-bold text-[#DC2626]">
          合规红线清单
        </h3>
      </div>
      {groups && groups.length > 0 && (
        <div className="redline-groups space-y-5">
          {groups.map((group, index) => (
            <div key={index} className="redline-group">
              <h4 className="redline-group-title font-bold text-[#7F1D1D] text-base leading-[1.6] mb-2">
                {group.title}
              </h4>
              <ul className="redline-list space-y-2">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="redline-item flex items-start gap-3">
                    <span className="redline-icon text-[#DC2626] text-sm leading-6 flex-shrink-0 w-4 text-center">
                      ✗
                    </span>
                    <span className="redline-text text-[#334155] text-base leading-[1.6] font-normal flex-1 min-w-0 text-left">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {items && (!groups || groups.length === 0) && (
        <ul className="redline-list space-y-2">
          {items.map((item, index) => (
            <li key={index} className="redline-item flex items-start gap-3">
              <span className="redline-icon text-[#DC2626] text-sm leading-6 flex-shrink-0 w-4 text-center">
                ✗
              </span>
              <span className="redline-text text-[#334155] text-base leading-[1.6] font-normal flex-1 min-w-0 text-left">
                {item}
              </span>
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
  redLineItems?: React.ReactNode[];
  children?: React.ReactNode;
  sectionId?: string;
  trendId?: string;
  redLineId?: string;
}

export function TrendAndRedLinesSection({ title = '监管趋势与合规红线清单', trendTitle = '监管趋势', trendContent, redLineGroups, redLineItems, children, sectionId, trendId, redLineId }: TrendAndRedLinesSectionProps) {
  return (
    <SectionCard title={title} id={sectionId}>
      <div className="space-y-4">
        <SubCard title={trendTitle} id={trendId}>
          {trendContent}
        </SubCard>
        <RedLineBox groups={redLineGroups} items={redLineItems} id={redLineId} />
        {children}
      </div>
    </SectionCard>
  );
}

export type { RedLineGroup };
