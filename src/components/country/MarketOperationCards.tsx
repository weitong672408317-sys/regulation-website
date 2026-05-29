import React from 'react';

interface MarketOperationCard {
  title: string;
  items: string[];
}

interface MarketOperationCardsProps {
  cards: MarketOperationCard[];
}

export const MarketOperationCards = ({ cards }: MarketOperationCardsProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-4">
          <div className="flex items-start gap-3 mb-3">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#4A6290] text-white text-sm font-bold flex-shrink-0">
              {index + 1}
            </span>
            <h4 className="font-bold text-[#2E3F73] text-base">{card.title}</h4>
          </div>
          {card.items.length > 0 && (
            <ul className="list-disc pl-5 space-y-2 ml-9">
              {card.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-[#334155] text-base leading-7">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};