import React from 'react';
import { SectionCard, SubCard, ProductLabel } from './SectionCard';
import { StatusCard, StatusBulletPoint } from '../CountryComponents';

interface ProductModuleCardProps {
  title: string;
  label?: string;
  children: React.ReactNode;
}

export function ProductModuleCard({ title, label, children, id }: ProductModuleCardProps & { id?: string }) {
  return (
    <SubCard id={id}>
      <h3 className="text-lg font-bold text-[#2E3F73] mb-4">{title}</h3>
      {label && <ProductLabel>{label}</ProductLabel>}
      {children}
    </SubCard>
  );
}

interface ProductAccessSectionProps {
  children?: React.ReactNode;
}

export function ProductAccessSection({ children, sectionId }: ProductAccessSectionProps & { sectionId?: string }) {
  return (
    <SectionCard title="产品监管口径" id={sectionId}>
      <div className="space-y-4">
        {children}
      </div>
    </SectionCard>
  );
}

export { StatusCard, StatusBulletPoint };
