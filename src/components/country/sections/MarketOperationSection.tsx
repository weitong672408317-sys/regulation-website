import React from 'react';
import { SectionCard, SubCard } from './SectionCard';

interface RuleModuleCardProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export function RuleModuleCard({ number, title, children }: RuleModuleCardProps) {
  return (
    <SubCard>
      <div className="flex items-start gap-3 mb-4">
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">
          {number}
        </span>
        <h3 className="text-lg font-bold text-[#2E3F73]">{title}</h3>
      </div>
      {children}
    </SubCard>
  );
}

interface MarketOperationSectionProps {
  children?: React.ReactNode;
}

export function MarketOperationSection({ children }: MarketOperationSectionProps) {
  return (
    <SectionCard title="市场运营规范">
      <div className="space-y-4">
        {children}
      </div>
    </SectionCard>
  );
}
