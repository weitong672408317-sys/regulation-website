import React from 'react';
import { SectionCard, SubCard, ProductLabel } from './SectionCard';
import { StatusCard } from '../CountryComponents';

interface ProductModuleCardProps {
  title: string;
  label?: string;
  children: React.ReactNode;
}

export function ProductModuleCard({ title, label, children }: ProductModuleCardProps) {
  return (
    <SubCard>
      <h3 className="text-lg font-bold text-[#2E3F73] mb-4">{title}</h3>
      {label && <ProductLabel>{label}</ProductLabel>}
      {children}
    </SubCard>
  );
}

interface ProductAccessSectionProps {
  children?: React.ReactNode;
}

export function ProductAccessSection({ children }: ProductAccessSectionProps) {
  return (
    <SectionCard title="产品准入与监管口径">
      <div className="space-y-4">
        {children}
      </div>
    </SectionCard>
  );
}

export { StatusCard };
