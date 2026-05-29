import React from 'react';

interface SeasonUpdateCard {
  title: string;
  items: string[];
}

interface SeasonUpdatesProps {
  summary: string;
  cards: SeasonUpdateCard[];
}

export const SeasonUpdates = ({ summary, cards }: SeasonUpdatesProps) => {
  const paragraphs = summary.split(/\n\n/).filter(p => p.trim());

  return (
    <div>
      <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5 mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-7 rounded-full bg-[#4A6290]" />
          <h2 className="text-2xl font-bold text-[#243B63]">本季监管动态</h2>
        </div>
        <div className="text-[#334155] leading-relaxed space-y-4">
          {paragraphs.map((paragraph, pIndex) => {
            const lines = paragraph.split('\n').filter(line => line.trim());
            const hasBullets = lines.some(line => line.trim().startsWith('•'));

            if (hasBullets) {
              return (
                <ul key={pIndex} className="space-y-2 pl-0">
                  {lines.map((line, lIndex) => {
                    const trimmed = line.trim();
                    if (!trimmed) return null;
                    const content = trimmed.replace(/^•\s*/, '');
                    return (
                      <li key={lIndex} className="flex items-start gap-3 list-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span className="text-[#334155]">{content}</span>
                      </li>
                    );
                  })}
                </ul>
              );
            }

            return <p key={pIndex}>{paragraph}</p>;
          })}
        </div>
      </div>

      <div className="space-y-3">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-4">
            <h4 className="font-bold text-[#2E3F73] text-base mb-2">{card.title}</h4>
            <ul className="list-disc pl-5 space-y-1.5">
              {card.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-[#334155] text-base leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};