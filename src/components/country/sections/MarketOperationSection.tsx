import React from 'react';
import { SectionCard, SubCard } from './SectionCard';

interface RuleModuleCardProps {
  number: number;
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

export function RuleModuleCard({ number, title, children, className = '', bodyClassName = 'ml-9' }: RuleModuleCardProps) {
  return (
    <SubCard className={className}>
      <div className="flex items-start gap-3 mb-4">
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-sm font-bold flex-shrink-0">
          {number}
        </span>
        <h3 className="text-base leading-6 font-bold text-[#2E3F73]">{title}</h3>
      </div>
      <div className={bodyClassName}>{children}</div>
    </SubCard>
  );
}

interface MarketOperationSectionProps {
  children?: React.ReactNode;
}

export function MarketOperationSection({ children, sectionId }: MarketOperationSectionProps & { sectionId?: string }) {
  return (
    <SectionCard title="市场运营规范" id={sectionId}>
      <div className="space-y-4 market-operation-content">
        {children}
      </div>
    </SectionCard>
  );
}
