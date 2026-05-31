import React from 'react';
import { SectionCard, SubCard } from './SectionCard';

interface RegulatorySubCard {
  title: string;
  content: React.ReactNode;
}

interface RegulatorySystemSectionProps {
  cards?: RegulatorySubCard[];
  children?: React.ReactNode;
}

export function RegulatorySystemSection({ cards, children }: RegulatorySystemSectionProps) {
  return (
    <SectionCard title="监管体系">
      <div className="space-y-4">
        {cards && cards.map((card, index) => (
          <SubCard key={index} title={card.title}>
            {card.content}
          </SubCard>
        ))}
        {children}
      </div>
    </SectionCard>
  );
}
