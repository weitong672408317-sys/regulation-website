import React from 'react';
import { NewPageProductAccess, NewPageStatusCard } from '../../../data/mockData';

interface ProductAccessProps {
  sections: NewPageProductAccess[];
}

const StatusBadge = ({ status, label }: { status: 'allowed' | 'restricted' | 'prohibited'; label: string }) => {
  const styles = {
    allowed: {
      borderLeft: 'border-l-[#6AAF7C]',
      badge: 'bg-[#E8F5ED] text-[#3D7050]',
    },
    restricted: {
      borderLeft: 'border-l-[#C9A24C]',
      badge: 'bg-[#F8F3E8] text-[#8B6F2E]',
    },
    prohibited: {
      borderLeft: 'border-l-[#DC6B6B]',
      badge: 'bg-[#FCEAEA] text-[#B33B3B]',
    },
  };

  const s = styles[status];

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${s.badge}`}>{label}</span>
  );
};

const ProductStatusCard = ({ card }: { card: NewPageStatusCard }) => {
  const styles = {
    allowed: 'border-l-[#6AAF7C]',
    restricted: 'border-l-[#C9A24C]',
    prohibited: 'border-l-[#DC6B6B]',
  };

  return (
    <div className={`bg-white border border-[#E2E6EF] ${styles[card.status]} border-l-2 rounded-xl p-4 shadow-sm`}>
      <div className="flex items-center gap-2 mb-3">
        <StatusBadge status={card.status} label={card.label} />
      </div>
      {card.title && <div className="font-bold text-[#263247] text-base mb-2">{card.title}</div>}
      {card.applicableProducts && (
        <div className="mb-2">
          <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-xs font-semibold mb-1">适用产品</div>
          <p className="text-[#334155] text-base">{card.applicableProducts}</p>
        </div>
      )}
      {card.definition && (
        <div className="mb-2">
          <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-xs font-semibold mb-1">产品定性</div>
          {Array.isArray(card.definition) ? (
            <ul className="list-disc pl-5 space-y-1 text-[#334155] text-base">
              {card.definition.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-[#334155] text-base">{card.definition}</p>
          )}
        </div>
      )}
      {card.points && card.points.length > 0 && (
        <div>
          <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-xs font-semibold mb-1">主要合规要点</div>
          <ul className="list-disc pl-5 space-y-1 text-[#334155] text-base">
            {card.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const ProductAccess = ({ sections }: ProductAccessProps) => {
  return (
    <div className="space-y-6">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#4A6290] flex-shrink-0"></span>
            <h4 className="font-bold text-[#2E3F73] text-base">{section.title}</h4>
          </div>
          
          {section.description.length > 0 && (
            <div className="space-y-4 mb-4">
              {section.description.map((desc, descIndex) => (
                <div key={descIndex}>
                  <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-xs font-semibold mb-2">
                    {section.descriptionLabel || '产品定性'}
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-[#334155] text-base leading-7">
                    {desc.split('•').filter(p => p.trim()).map((item, idx) => (
                      <li key={idx}>{item.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {section.statusCards && section.statusCards.length > 0 && (
            <div className="grid md:grid-cols-3 gap-4">
              {section.statusCards.map((card, cardIndex) => (
                <ProductStatusCard key={cardIndex} card={card} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};