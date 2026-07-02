import React from 'react';
import { AccessRestrictionsByStatus, EmirateDifferenceRow, ComplianceLicenseCard } from '../../../data/mockData';
import { BulletPoint } from './sections/SectionCard';

export const colors = {
  pageBg: '#F7F9FC',
  cardBg: '#FFFFFF',
  textMain: '#0F172A',
  textBody: '#334155',
  textMuted: '#64748B',
  border: '#D8E0EA',
  borderStrong: '#C7D3E2',

  blueDark: '#243B63',
  blue: '#2E3F73',
  blueSoft: '#F1F3FA',
  blueBorder: '#D4DAEA',

  tealDark: '#155E75',
  teal: '#2B7A8B',
  tealSoft: '#EEF8FA',
  tealBorder: '#BFDDE3',

  indigoDark: '#373F7A',
  indigo: '#4A6290',
  indigoSoft: '#F3F5FB',
  indigoBorder: '#D8DDED',

  slateDark: '#334155',
  slate: '#64748B',
  slateSoft: '#F8FAFC',
  slateBorder: '#D8E0EA',

  green: '#3F7A50',
  greenSoft: '#EEF7F0',
  greenBorder: '#BFDCC7',

  red: '#DC2626',
  redDark: '#991B1B',
  redSoft: '#FEF2F2',
  redBorder: '#FCA5A5',

  warm: '#8A5A2B',
  warmSoft: '#F8F1E7',
  warmBorder: '#E8D7BE',
};

export const SeasonSummaryCard = ({ title, text }: { title: string; text: string }) => {
  const paragraphs = text.split(/\n\n/).filter(p => p.trim());

  return (
    <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-7 rounded-full bg-[#4A6290]" />
        <h2 className="text-2xl font-bold text-[#243B63]">{title}</h2>
      </div>
      <div style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-sm leading-[1.55] space-y-2">
        {paragraphs.map((paragraph, pIndex) => {
          const lines = paragraph.split('\n').filter(line => line.trim());
          const hasBullets = lines.some(line => line.trim().startsWith('•'));

          if (hasBullets) {
            return (
              <div key={pIndex} className="space-y-2">
                {lines.map((line, lIndex) => {
                  const trimmed = line.trim();
                  if (!trimmed) return null;
                  const content = trimmed.replace(/^•\s*/, '');
                  return (
                    <BulletPoint key={lIndex}>{content}</BulletPoint>
                  );
                })}
              </div>
            );
          }

          return <p key={pIndex}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
};

export const StatusCard = ({ status, title, subtitle, content, customLabel, id, className }: { status: 'green' | 'amber' | 'red'; title: string; subtitle?: string; content: React.ReactNode; customLabel?: string; id?: string; className?: string }) => {
  const styles = {
    green: {
      borderLeftColor: '#6AAF7C',
      badgeBg: '#E8F5ED',
      badgeText: '#3D7050',
      label: '可合规准入',
    },
    amber: {
      borderLeftColor: '#C9A24C',
      badgeBg: '#F8F3E8',
      badgeText: '#8B6F2E',
      label: '需拆分判断',
    },
    red: {
      borderLeftColor: '#DC6B6B',
      badgeBg: '#FCEAEA',
      badgeText: '#B33B3B',
      label: '完全禁止',
    },
  };

  const s = styles[status];

  return (
    <div
      id={id}
      data-status={status}
      className={`product-status-card bg-white border border-[#E2E6EF] rounded-xl p-6 shadow-sm w-full${id ? ' scroll-mt-4' : ''}${className ? ` ${className}` : ''}`}
      style={{ borderLeft: `2px solid ${s.borderLeftColor}` }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span
          className="product-status-badge px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap w-fit"
          style={{ backgroundColor: s.badgeBg, color: s.badgeText }}
        >{customLabel || s.label}</span>
        {subtitle && <span className="text-[#64748B] text-sm">{subtitle}</span>}
      </div>
      {title && <div className="font-bold text-[#263247] text-base mb-3">{title}</div>}
      <div style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-sm leading-[1.55]">{content}</div>
    </div>
  );
};

/** Colored bullet point for use inside StatusCard content areas */
export const StatusBulletPoint = ({ status, children }: { status: 'green' | 'amber' | 'red'; children: React.ReactNode }) => {
  const dotColors = {
    green: '#6AAF7C',
    amber: '#C9A24C',
    red: '#DC6B6B',
  };
  return (
    <div className="flex items-start gap-3">
      <span
        className="w-1.5 h-1.5 rounded-full mt-[9px] flex-shrink-0"
        style={{ backgroundColor: dotColors[status] }}
      ></span>
      <span style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-sm leading-[1.55] flex-1 min-w-0">{children}</span>
    </div>
  );
};

export const RegulatoryUpdateCard = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="bg-[#F1F3FB] border border-[#CBD2EE] rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-[#4D5F9A] mt-2 flex-shrink-0"></div>
        <div className="flex-1">
          <h4 className="font-bold text-[#373F7A] text-base mb-3">{title}</h4>
          {content && <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6]">{content}</p>}
        </div>
      </div>
    </div>
  );
};

export const RuleCard = ({ number, title, items, className }: { number: number; title: string; items: string[]; className?: string }) => {
  const filteredItems = items.map(i => i.trim()).filter(Boolean);

  return (
    <div className={`bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5 hover:shadow-md transition-shadow${className ? ` ${className}` : ''}`}>
      <div className="flex items-start gap-3">
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">
          {number}
        </span>
        <div className="flex-1">
          <h4 className="font-bold text-[#2E3F73] text-base mb-3">{title}</h4>
          {filteredItems.length > 0 && (
            <div className="space-y-2">
              {filteredItems.map((item, index) => (
                <BulletPoint key={index}>{item}</BulletPoint>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProductDefinitionCard = ({ title, sections }: { title: string; sections: { label: string; content: string }[] }) => {
  return (
    <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-6 shadow-none">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-2 h-2 rounded-full bg-[#4A6290] flex-shrink-0"></span>
        <h4 className="font-bold text-[#2E3F73] text-base">{title}</h4>
      </div>
      <div className="space-y-5">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-xs font-semibold mb-3">{section.label}</div>
            <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-sm leading-[1.55]">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const cleanFormattingMarkers = (text: string): string => {
  return text
    .replace(/\*\*/g, '')
    .replace(/\[TITLE\]|\[\/TITLE\]|\[ITEM\]|\[\/ITEM\]/g, '');
};

export const FormattedOverviewText = ({ text }: { text: string }) => {
  const lines = text.split('\n').filter(line => line.trim());

  return (
    <div className="space-y-2">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return null;

        const colonIndex = trimmedLine.indexOf('：');
        if (colonIndex !== -1) {
          const titlePart = trimmedLine.substring(0, colonIndex + 1);
          const contentPart = trimmedLine.substring(colonIndex + 1).trim();

          return (
            <BulletPoint key={index}>
              <span className="font-semibold text-[#1F2A44]">{titlePart}</span>
              {contentPart && <span>{contentPart}</span>}
            </BulletPoint>
          );
        }

        return (
          <BulletPoint key={index}>{trimmedLine}</BulletPoint>
        );
      })}
    </div>
  );
};

export const parseOverview = (overview: string) => {
  const sections: { title: string; content: string }[] = [];
  const parts = overview.split(/(核心特征|主要法规\s*\/?\s*政策|监管部门)/g);

  for (let i = 1; i < parts.length; i += 2) {
    let title = parts[i].trim();
    let content = (parts[i + 1] || '').trim();

    if (title.endsWith('：')) title = title.slice(0, -1);
    if (title.endsWith(':')) title = title.slice(0, -1);

    content = content.replace(/^[：:]\s*/, '');
    content = content.replace(/\n\s*[：:]\s*$/gm, '');
    content = content.replace(/\n\s*[：:]\s*\n/g, '\n');
    content = content.trim();

    if (title && content) {
      sections.push({ title, content });
    }
  }

  return sections;
};

export const InfoBlock = ({ title, children, isRussia = false, variant = 'default' }: { title: string; children: React.ReactNode; isRussia?: boolean; variant?: 'default' | 'blue' | 'teal' | 'indigo' | 'slate' }) => {
  const variants = {
    default: { bg: 'bg-white border-gray-200', title: 'text-blue-900', body: 'text-gray-700', borderLeft: 'border-l-blue-600' },
    blue: { bg: 'bg-[#F3F5FB] border-[#D8DDED]', title: 'text-[#2E3F73]', body: 'text-[#334155]', borderLeft: 'border-l-[#4A6290]' },
    teal: { bg: 'bg-[#EEF8FA] border-[#BFDDE3]', title: 'text-[#155E75]', body: 'text-[#334155]', borderLeft: 'border-l-[#2B7A8B]' },
    indigo: { bg: 'bg-[#F1F3FB] border-[#CBD2EE]', title: 'text-[#373F7A]', body: 'text-[#334155]', borderLeft: 'border-l-[#4D5F9A]' },
    slate: { bg: 'bg-[#F8FAFC] border-[#D8E0EA]', title: 'text-[#334155]', body: 'text-[#334155]', borderLeft: 'border-l-[#64748B]' },
  };

  const v = isRussia ? variants[variant] : variants.default;

  return (
    <div className={`${v.bg} border border-l-4 ${v.borderLeft} rounded-xl p-5 shadow-none`}>
      {title && <h3 className={`text-base font-bold ${v.title} mb-3`}>{title}</h3>}
      <div style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className={`${v.body} text-sm leading-[1.55]`}>
        {children}
      </div>
    </div>
  );
};

export const OverviewSectionCard = ({ title, content, isRussia = false, variant = 'default' }: { title: string; content: string; isRussia?: boolean; variant?: 'default' | 'blue' | 'teal' | 'indigo' | 'slate' }) => {
  const variants = {
    default: { bg: 'bg-blue-50 border-blue-200', title: 'text-blue-900', body: 'text-gray-800' },
    blue: { bg: 'bg-[#F3F5FB] border-[#D8DDED]', title: 'text-[#2E3F73]', body: 'text-[#334155]' },
    teal: { bg: 'bg-[#EEF8FA] border-[#BFDDE3]', title: 'text-[#155E75]', body: 'text-[#334155]' },
    indigo: { bg: 'bg-[#F1F3FB] border-[#CBD2EE]', title: 'text-[#373F7A]', body: 'text-[#334155]' },
    slate: { bg: 'bg-[#F8FAFC] border-[#D8E0EA]', title: 'text-[#334155]', body: 'text-[#334155]' },
  };

  const v = isRussia ? variants[variant] : variants.default;

  return (
    <div className={`${v.bg} border rounded-xl p-5`}>
      <h3 className={`text-base font-bold ${v.title} mb-3`}>{title}</h3>
      <div style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className={`${v.body} text-sm leading-[1.55] whitespace-pre-wrap`}>{content}</div>
    </div>
  );
};

export const FormattedText = ({ text }: { text: string }) => {
  const paragraphs = text.split(/\n\n+/);

  return (
    <div className="space-y-5">
      {paragraphs.map((paragraph, pIndex) => {
        const cleaned = cleanFormattingMarkers(paragraph);
        const trimmed = cleaned.trim();

        if (!trimmed) return null;

        const isBulletList = trimmed.startsWith('• ') || trimmed.startsWith('· ') ||
                           trimmed.startsWith('- ') || trimmed.split('\n').some(l => l.trim().startsWith('•') || l.trim().startsWith('-'));

        if (isBulletList) {
          const items = cleaned.split('\n').filter(line => {
            const tl = line.trim();
            if (!tl) return false;
            if (/^[•·。\-·\s]*$/.test(tl)) return false;
            return true;
          });

          return (
            <div key={pIndex} className="space-y-2">
              {items.map((item, iIndex) => {
                const trimmedItem = item.trim().replace(/^[•·\-]\s*/, '');
                if (!trimmedItem || /^[•·。\-·\s]*$/.test(trimmedItem)) return null;

                const colonPos = trimmedItem.indexOf('：');
                if (colonPos !== -1) {
                  const titlePart = trimmedItem.substring(0, colonPos + 1);
                  const contentPart = trimmedItem.substring(colonPos + 1).trim();
                  return (
                    <BulletPoint key={iIndex}>
                      <span className="font-semibold text-[#0F172A]">{titlePart}</span>
                      {contentPart && <span>{contentPart}</span>}
                    </BulletPoint>
                  );
                }

                return (
                  <BulletPoint key={iIndex}>{trimmedItem}</BulletPoint>
                );
              })}
            </div>
          );
        }

        return <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} key={pIndex} className="text-[#334155] leading-[1.6] whitespace-pre-wrap">{cleaned}</p>;
      })}
    </div>
  );
};

export const TableCellContent = ({ content }: { content: string | string[] }) => {
  if (Array.isArray(content)) {
    return (
      <div className="space-y-1">
        {content.map((item, index) => (
          <BulletPoint key={index}>{item}</BulletPoint>
        ))}
      </div>
    );
  }
  return <span style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155]">{content}</span>;
};

export const GenericComplianceTable = ({ data, isRussia = false }: { data: { headers: string[]; rows: (string | string[])[][] }, isRussia?: boolean }) => {
  return (
    <div className={isRussia ? "overflow-x-auto rounded-xl border border-[#D8DDED] shadow-none" : "overflow-x-auto rounded-xl border border-blue-200 shadow-sm"}>
      <table className="w-full text-sm min-w-[600px] bg-white">
        <thead>
          <tr className={isRussia ? "bg-[#E8EDF5]" : "bg-blue-50"}>
            {data.headers.map((header, index) => (
              <th key={index} className={`px-5 py-4 text-justify font-bold ${isRussia ? "text-[#2E3F73] border-b-2 border-[#D8DDED]" : "text-blue-900 border-b-2 border-blue-200"} ${index === 0 ? 'w-48 min-w-[140px]' : ''}`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(data.rows as (string | string[])[]).map((row, rowIndex) => (
            <tr key={rowIndex} className={isRussia ? (rowIndex % 2 === 0 ? 'bg-white/50' : 'bg-[#F3F5FB]') : (rowIndex % 2 === 0 ? 'bg-white' : 'bg-blue-50/50')}>
              {(row as (string | string[])[]).map((cell, cellIndex) => (
                <td key={cellIndex} className={`px-5 py-4 border-b ${isRussia ? "border-[#D8DDED]" : "border-blue-100"} ${cellIndex === 0 ? (isRussia ? "font-semibold text-[#1F2A44]" : "font-semibold text-gray-900") : ''}`}>
                  <TableCellContent content={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const StatusBadge = ({ status, isRussia = false }: { status: 'prohibited' | 'partial' | 'open'; isRussia?: boolean }) => {
  const styles = isRussia ? {
    prohibited: 'bg-[#FEE2E2] text-[#DC2626] border border-[#FCA5A5]',
    partial: 'bg-[#FBF4E6] text-[#9E793E] border border-[#E5D8B8]',
    open: 'bg-[#E6F0EA] text-[#51705D] border border-[#D4E4D9]',
  } : {
    prohibited: 'bg-red-50 text-red-700 border-2 border-red-300',
    partial: 'bg-amber-50 text-amber-700 border-2 border-amber-300',
    open: 'bg-green-50 text-green-700 border-2 border-green-300',
  };

  const labels = {
    prohibited: '完全禁止',
    partial: '部分限制',
    open: '可准入',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
};

export const AccessRestrictionsByStatusView = ({ data, isRussia = false }: { data: AccessRestrictionsByStatus; isRussia?: boolean }) => {
  return (
    <div className="space-y-6">
      <div className={isRussia ? "bg-[#FEF2F2] border border-[#FCA5A5] border-l-4 border-l-[#DC2626] rounded-xl p-5 shadow-none" : "bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"}>
        {!isRussia ? (
          <div className="bg-red-50 border-b-2 border-red-300 px-5 py-3 flex items-center gap-3">
            <div className="w-1 h-6 bg-red-600 rounded-full"></div>
            <StatusBadge status="prohibited" />
          </div>
        ) : (
          <div className="flex items-center gap-3 mb-4">
            <StatusBadge status="prohibited" isRussia={true} />
          </div>
        )}
        <div className="space-y-4">
          {data.fullyProhibited.map((item, index) => (
            <div key={index} className={isRussia ? "bg-white/55 border border-white/70 rounded-lg p-4 shadow-none" : "bg-white border border-gray-200 rounded-lg p-4 shadow-sm"}>
              <div className="font-bold text-gray-900 text-base mb-2">{item.productName}</div>
              <div style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-gray-700 leading-[1.55]">{item.rule}</div>
            </div>
          ))}
        </div>
      </div>

      {data.partiallyRestricted.length > 0 && (
        <div className={isRussia ? "bg-[#FBF8EF] border border-[#E5D8B8] border-l-4 border-l-[#B39B62] rounded-xl p-5 shadow-none" : "bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"}>
          {!isRussia ? (
            <div className="bg-amber-50 border-b-2 border-amber-300 px-5 py-3 flex items-center gap-3">
              <div className="w-1 h-6 bg-amber-600 rounded-full"></div>
              <StatusBadge status="partial" />
            </div>
          ) : (
            <div className="flex items-center gap-3 mb-4">
              <StatusBadge status="partial" isRussia={true} />
            </div>
          )}
          <div className="space-y-4">
            {data.partiallyRestricted.map((item, index) => (
              <div key={index} className={isRussia ? "bg-white/55 border border-white/70 rounded-lg p-4 shadow-none" : "bg-white border border-gray-200 rounded-lg p-4 shadow-sm"}>
                <div className="font-bold text-gray-900 text-base mb-2">{item.productName}</div>
                <div style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-gray-700 leading-[1.55]">{item.rule}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={isRussia ? "bg-[#F2F8F4] border border-[#D4E4D9] border-l-4 border-l-[#6F927D] rounded-xl p-5 shadow-none" : "bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"}>
        {!isRussia ? (
          <div className="bg-green-50 border-b-2 border-green-300 px-5 py-3 flex items-center gap-3">
            <div className="w-1 h-6 bg-green-600 rounded-full"></div>
            <StatusBadge status="open" />
          </div>
        ) : (
          <div className="flex items-center gap-3 mb-4">
            <StatusBadge status="open" isRussia={true} />
          </div>
        )}
        <div className="space-y-4">
          {data.openAccessible.map((item, index) => (
            <div key={index} className={isRussia ? "bg-white/55 border border-white/70 rounded-lg p-4 shadow-none" : "bg-white border border-gray-200 rounded-lg p-4 shadow-sm"}>
              <div className="font-bold text-gray-900 text-base mb-2">{item.productName}</div>
              <div style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-gray-700 leading-[1.55]">{item.rule}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const EmirateDifferencesTable = ({ data }: { data: EmirateDifferenceRow[] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-3 text-justify font-semibold text-gray-900 border-b border-gray-200">酋长国</th>
            <th className="px-4 py-3 text-justify font-semibold text-gray-900 border-b border-gray-200">咀嚼烟草制品</th>
            <th className="px-4 py-3 text-justify font-semibold text-gray-900 border-b border-gray-200">电子烟</th>
            <th className="px-4 py-3 text-justify font-semibold text-gray-900 border-b border-gray-200">水烟</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 border-b border-gray-200 font-medium text-gray-900">{row.emirate}</td>
                <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row.chewingTobacco}</td>
                <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row.electronicCigarette}</td>
                <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row.hookah}</td>
              </tr>
              {row.note && index === data.length - 1 && (
                <tr>
                  <td colSpan={4} className="px-4 py-3 text-gray-600 text-xs italic">备注：{row.note}</td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const ComplianceLicenseCards = ({ cards, isRussia = false, isRussiaLicense = false }: { cards: ComplianceLicenseCard[], isRussia?: boolean, isRussiaLicense?: boolean }) => {
  const renderDescription = (description: string) => {
    const hasSemicolon = description.includes('；');
    if (hasSemicolon) {
      const items = description.split('；').map(item => item.trim()).filter(item => item);
      return (
        <div className="space-y-1">
          {items.map((item, idx) => (
            <BulletPoint key={idx} textClassName="text-base">{item}</BulletPoint>
          ))}
        </div>
      );
    }
    return <BulletPoint textClassName="text-base">{description}</BulletPoint>;
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {cards.map((card, index) => {
        if (isRussiaLicense) {
          return (
            <React.Fragment key={index}>
              <div className="russia-license-card md:hidden bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="russia-license-heading">
                  <span className="russia-license-index w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <h4 className="russia-license-title font-bold text-[#2E3F73] text-base">
                    {card.title}
                  </h4>
                </div>
                <div className="russia-license-body">
                  {renderDescription(card.description)}
                </div>
              </div>
              <div className="hidden md:block bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#2E3F73] text-base mb-3">{card.title}</h4>
                    {renderDescription(card.description)}
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }

        return (
          <div key={index} className={isRussia ? "bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5 hover:shadow-md transition-shadow" : "bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow"}>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">
                {index + 1}
              </span>
              <div className="flex-1">
                <h4 className={isRussia ? "font-bold text-[#2E3F73] text-base mb-3" : "font-bold text-slate-900 text-lg mb-3"}>{card.title}</h4>
                {isRussia ? renderDescription(card.description) : <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-slate-700 leading-[1.6]">{card.description}</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const SeasonSummaryText = ({ text }: { text: string }) => {
  const blocks = text.split(/\n\n+/).map((block) => block.trim()).filter(Boolean);

  return (
    <div className="space-y-4 text-blue-900">
      {blocks.map((block, blockIndex) => {
        const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
        if (lines.length === 0) return null;

        const isBulletLine = (line: string) => /^[•·*-]\s+/.test(line);

        if (lines.some(isBulletLine)) {
          const items: { marker: string; title: string; details: string[] }[] = [];
          lines.forEach((line) => {
            const bulletMatch = line.match(/^([•·*-])\s+(.*)$/);
            if (bulletMatch) {
              items.push({ marker: bulletMatch[1], title: bulletMatch[2], details: [] });
              return;
            }
            const lastItem = items[items.length - 1];
            if (lastItem) {
              lastItem.details.push(line);
            } else {
              items.push({ marker: '', title: line, details: [] });
            }
          });

          return (
            <div key={blockIndex} className="space-y-2">
              {items.map((item, itemIndex) => (
                <BulletPoint key={itemIndex}>
                  <span style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="leading-[1.6]">{item.title}</span>
                  {item.details.map((detail, detailIndex) => (
                    <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} key={detailIndex} className="leading-[1.6] mt-1">{detail}</p>
                  ))}
                </BulletPoint>
              ))}
            </div>
          );
        }

        return lines.map((line, lineIndex) => (
          <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} key={`${blockIndex}-${lineIndex}`} className="leading-[1.6]">{line}</p>
        ));
      })}
    </div>
  );
};

export const productCategories = [
  { key: 'electronicCigarette', name: '电子烟' },
  { key: 'hnb', name: 'HNB' },
  { key: 'nicotinePouch', name: '尼古丁袋' },
  { key: 'cigarette', name: '卷烟' },
  { key: 'otherNovel', name: '其他新型烟草制品' },
];
