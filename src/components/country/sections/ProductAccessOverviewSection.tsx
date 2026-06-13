import React from 'react';
import { SectionCard } from './SectionCard';
import type { ProductAccessOverviewData, AccessStatusType } from '../../../data/productAccessOverview';

const statusStyles: Record<AccessStatusType, { badge: string; dot: string }> = {
  green: {
    badge: 'bg-[#E8F5ED] text-[#3D7050]',
    dot: 'bg-[#6AAF7C]',
  },
  amber: {
    badge: 'bg-[#F8F3E8] text-[#8B6F2E]',
    dot: 'bg-[#C9A24C]',
  },
  red: {
    badge: 'bg-[#FCEAEA] text-[#B33B3B]',
    dot: 'bg-[#DC6B6B]',
  },
};

interface ProductAccessOverviewSectionProps {
  data: ProductAccessOverviewData;
  sectionId?: string;
}

export function ProductAccessOverviewSection({ data, sectionId }: ProductAccessOverviewSectionProps) {
  const handleClick = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionCard title="产品准入速览" id={sectionId}>
      {data.note && (
        <p className="text-[#334155] text-base leading-7 mb-5 text-justify">{data.note}</p>
      )}
      <div className="overflow-x-auto rounded-xl border border-[#D8DDED]">
        <table className="w-full text-base bg-white">
          <thead>
            <tr className="bg-[#E8EDF5]">
              <th className="px-5 py-4 text-center font-bold text-[#2E3F73] border-b border-r border-[#D8DDED]" style={{ width: '24%' }}>准入状态</th>
              <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]" style={{ width: '76%' }}>产品</th>
            </tr>
          </thead>
          <tbody>
            {data.groups.map((group, groupIdx) => {
              const isEven = groupIdx % 2 === 0;
              return (
                <tr key={groupIdx} className={isEven ? 'bg-white' : 'bg-[#F3F5FB]'}>
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] align-middle text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${statusStyles[group.statusType].badge}`}>
                      {group.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 border-b border-[#D8DDED] align-top">
                    <ul className="space-y-1.5">
                      {group.products.map((product, productIdx) => (
                        <li key={productIdx} className="flex items-start gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${statusStyles[group.statusType].dot} mt-[9px] flex-shrink-0`}></span>
                          <button
                            onClick={() => handleClick(product.targetId)}
                            className="text-[#4A6290] hover:underline text-base leading-7 text-justify cursor-pointer"
                          >
                            {product.productName}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}
