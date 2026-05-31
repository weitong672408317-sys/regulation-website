import React from 'react';
import { SectionCard, SubCard } from './SectionCard';
import { ComplianceLicenseCards, GenericComplianceTable, TableCellContent } from '../CountryComponents';
import { CountryData } from '../../../../data/mockData';

interface ComplianceSectionProps {
  country: CountryData;
  isRussiaStyle?: boolean;
  overview?: React.ReactNode;
  children?: React.ReactNode;
}

export function ComplianceSection({ country, isRussiaStyle = true, overview, children }: ComplianceSectionProps) {
  return (
    <SectionCard title="合规资质">
      {children ? (
        children
      ) : (
        <>
          {country.compliance.licenseCards && country.compliance.licenseCards.length > 0 ? (
            <>
              {(overview || country.compliance.licenseRequirements) && (
                <p className="text-[#334155] mb-6">{overview || country.compliance.licenseRequirements}</p>
              )}
              <ComplianceLicenseCards cards={country.compliance.licenseCards} isRussia={isRussiaStyle} />
            </>
          ) : country.compliance.genericTable ? (
            <>
              {(overview || country.compliance.licenseRequirements) && (
                <p className="text-[#334155] mb-6">{overview || country.compliance.licenseRequirements}</p>
              )}
              <GenericComplianceTable data={country.compliance.genericTable} isRussia={isRussiaStyle} />
            </>
          ) : country.compliance.secondGenericTable ? (
            <>
              {(overview || country.compliance.licenseRequirements) && (
                <p className="text-[#334155] mb-6">{overview || country.compliance.licenseRequirements}</p>
              )}
              <GenericComplianceTable data={country.compliance.secondGenericTable} isRussia={isRussiaStyle} />
            </>
          ) : country.compliance.table.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#E8EDF5]">
                    <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]">产品</th>
                    <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]">NPPBKC</th>
                    <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]">PI 进口批准</th>
                    <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]">BPOM 注册</th>
                    <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]">Halal 认证</th>
                  </tr>
                </thead>
                <tbody>
                  {country.compliance.table.map((row, index) => (
                    <tr key={index} className="hover:bg-[#F8FBFF]">
                      <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155]">{row.product}</td>
                      <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155]"><TableCellContent content={row.nppbkc} /></td>
                      <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155]"><TableCellContent content={row.piImportApproval} /></td>
                      <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155]"><TableCellContent content={row.bpomRegistration} /></td>
                      <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155]"><TableCellContent content={row.halalCertification} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (overview || country.compliance.licenseRequirements) ? (
            <p className="text-[#334155]">{overview || country.compliance.licenseRequirements}</p>
          ) : null}
        </>
      )}
    </SectionCard>
  );
}
