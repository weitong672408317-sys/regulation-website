import React from 'react';
import { SectionCard, SubCard } from './SectionCard';

interface RegulatorySubCard {
  title: string;
  content: React.ReactNode;
  id?: string;
}

interface RegulatorySystemSectionProps {
  cards?: RegulatorySubCard[];
  children?: React.ReactNode;
  sectionId?: string;
}

export function RegulatorySystemSection({ cards, children, sectionId }: RegulatorySystemSectionProps) {
  return (
    <SectionCard title="监管体系" id={sectionId}>
      <div className="space-y-4">
        {cards && cards.map((card, index) => (
          <SubCard key={index} title={card.title} id={card.id}>
            {card.content}
          </SubCard>
        ))}
        {children}
      </div>
    </SectionCard>
  );
}
