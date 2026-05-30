'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { baseCountries, AccessRestrictionsByStatus, EmirateDifferenceRow, ComplianceLicenseCard } from '../../../../data/mockData';

const colors = {
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

const SeasonSummaryCard = ({ title, text }: { title: string; text: string }) => {
  const paragraphs = text.split(/\n\n/).filter(p => p.trim());
  
  return (
    <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-7 rounded-full bg-[#4A6290]" />
        <h2 className="text-2xl font-bold text-[#243B63]">{title}</h2>
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
  );
};

const StatusCard = ({ status, title, subtitle, content, customLabel }: { status: 'green' | 'amber' | 'red'; title: string; subtitle?: string; content: React.ReactNode; customLabel?: string }) => {
  const styles = {
    green: {
      borderLeft: 'border-l-[#6AAF7C]',
      badge: 'bg-[#E8F5ED] text-[#3D7050]',
      dot: 'bg-[#6AAF7C]',
      label: '可合规准入',
    },
    amber: {
      borderLeft: 'border-l-[#C9A24C]',
      badge: 'bg-[#F8F3E8] text-[#8B6F2E]',
      dot: 'bg-[#C9A24C]',
      label: '需拆分判断',
    },
    red: {
      borderLeft: 'border-l-[#DC6B6B]',
      badge: 'bg-[#FCEAEA] text-[#B33B3B]',
      dot: 'bg-[#DC6B6B]',
      label: '完全禁止',
    },
  };
  
  const s = styles[status];
  
  return (
    <div className={`bg-white border border-[#E2E6EF] ${s.borderLeft} border-l-2 rounded-xl p-4 shadow-sm`}>
      <div className="flex items-center gap-2 mb-3">
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${s.badge}`}>{customLabel || s.label}</span>
        {subtitle && <span className="text-[#64748B] text-sm">{subtitle}</span>}
      </div>
      {title && <div className="font-bold text-[#263247] text-base mb-2">{title}</div>}
      <div className="text-[#334155] text-base leading-7">{content}</div>
    </div>
  );
};

const RegulatoryUpdateCard = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="bg-[#F1F3FB] border border-[#CBD2EE] rounded-xl p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-[#4D5F9A] mt-2 flex-shrink-0"></div>
        <div className="flex-1">
          <h4 className="font-bold text-[#373F7A] text-base mb-2">{title}</h4>
          {content && <p className="text-[#334155] leading-relaxed">{content}</p>}
        </div>
      </div>
    </div>
  );
};

const RuleCard = ({ number, title, items }: { number: number; title: string; items: string[] }) => {
  const filteredItems = items.map(i => i.trim()).filter(Boolean);
  
  return (
    <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-4">
      <div className="flex items-start gap-3 mb-3">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#4A6290] text-white text-sm font-bold flex-shrink-0">
          {number}
        </span>
        <h4 className="font-bold text-[#2E3F73] text-base">{title}</h4>
      </div>
      {filteredItems.length > 0 && (
        <ul className="space-y-2 ml-9 pl-5 list-disc">
          {filteredItems.map((item, index) => (
            <li key={index} className="text-[#334155] text-base leading-7">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ProductDefinitionCard = ({ title, sections }: { title: string; sections: { label: string; content: string }[] }) => {
  return (
    <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5 shadow-none">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-2 h-2 rounded-full bg-[#4A6290] flex-shrink-0"></span>
        <h4 className="font-bold text-[#2E3F73] text-base">{title}</h4>
      </div>
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-xs font-semibold mb-2">{section.label}</div>
            <p className="text-[#334155] text-base leading-7">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const cleanFormattingMarkers = (text: string): string => {
  return text
    .replace(/\*\*/g, '')
    .replace(/\[TITLE\]|\[\/TITLE\]|\[ITEM\]|\[\/ITEM\]/g, '');
};

const FormattedOverviewText = ({ text }: { text: string }) => {
  const lines = text.split('\n').filter(line => line.trim());
  
  return (
    <ul className="space-y-3">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return null;
        
        const colonIndex = trimmedLine.indexOf('：');
        if (colonIndex !== -1) {
          const titlePart = trimmedLine.substring(0, colonIndex + 1);
          const contentPart = trimmedLine.substring(colonIndex + 1).trim();
          
          return (
            <li key={index} className="leading-8 text-base text-[#334155]">
              <span className="font-semibold text-[#1F2A44]">{titlePart}</span>
              {contentPart && <span>{contentPart}</span>}
            </li>
          );
        }
        
        return (
          <li key={index} className="leading-8 text-base text-[#334155]">
            {trimmedLine}
          </li>
        );
      })}
    </ul>
  );
};

const parseOverview = (overview: string) => {
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

const InfoBlock = ({ title, children, isRussia = false, variant = 'default' }: { title: string; children: React.ReactNode; isRussia?: boolean; variant?: 'default' | 'blue' | 'teal' | 'indigo' | 'slate' }) => {
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
      <div className={`${v.body} text-base leading-relaxed`}>
        {children}
      </div>
    </div>
  );
};

const OverviewSectionCard = ({ title, content, isRussia = false, variant = 'default' }: { title: string; content: string; isRussia?: boolean; variant?: 'default' | 'blue' | 'teal' | 'indigo' | 'slate' }) => {
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
      <div className={`${v.body} text-base leading-relaxed whitespace-pre-wrap`}>{content}</div>
    </div>
  );
};

const FormattedText = ({ text }: { text: string }) => {
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
            <ul key={pIndex} className="space-y-2">
              {items.map((item, iIndex) => {
                const trimmedItem = item.trim().replace(/^[•·\-]\s*/, '');
                if (!trimmedItem || /^[•·。\-·\s]*$/.test(trimmedItem)) return null;
                
                const colonPos = trimmedItem.indexOf('：');
                if (colonPos !== -1) {
                  const titlePart = trimmedItem.substring(0, colonPos + 1);
                  const contentPart = trimmedItem.substring(colonPos + 1).trim();
                  return (
                    <li key={iIndex} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8AA0B8] mt-1.5 flex-shrink-0"></span>
                      <span>
                        <span className="font-semibold text-[#0F172A]">{titlePart}</span>
                        {contentPart && <span className="text-[#334155]">{contentPart}</span>}
                      </span>
                    </li>
                  );
                }
                
                return (
                  <li key={iIndex} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8AA0B8] mt-1.5 flex-shrink-0"></span>
                    <span className="text-[#334155]">{trimmedItem}</span>
                  </li>
                );
              })}
            </ul>
          );
        }
        
        return <p key={pIndex} className="text-[#334155] leading-relaxed whitespace-pre-wrap">{cleaned}</p>;
      })}
    </div>
  );
};

const TableCellContent = ({ content }: { content: string | string[] }) => {
  if (Array.isArray(content)) {
    return (
      <ul className="space-y-1">
        {content.map((item, index) => (
          <li key={index} className="flex items-start gap-1">
            <span className="w-1 h-1 rounded-full bg-[#8AA0B8] mt-1.5 flex-shrink-0"></span>
            <span className="text-[#334155]">{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <span className="text-[#334155]">{content}</span>;
};

const GenericComplianceTable = ({ data, isRussia = false }: { data: { headers: string[]; rows: (string | string[])[][] }, isRussia?: boolean }) => {
  return (
    <div className={isRussia ? "overflow-x-auto rounded-xl border border-[#D8DDED] shadow-none" : "overflow-x-auto rounded-xl border border-blue-200 shadow-sm"}>
      <table className="w-full text-base min-w-[600px] bg-white">
        <thead>
          <tr className={isRussia ? "bg-[#E8EDF5]" : "bg-blue-50"}>
            {data.headers.map((header, index) => (
              <th key={index} className={`px-5 py-4 text-left font-bold ${isRussia ? "text-[#2E3F73] border-b-2 border-[#D8DDED]" : "text-blue-900 border-b-2 border-blue-200"} ${index === 0 ? 'w-48 min-w-[140px]' : ''}`}>
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

const StatusBadge = ({ status, isRussia = false }: { status: 'prohibited' | 'partial' | 'open'; isRussia?: boolean }) => {
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

const AccessRestrictionsByStatusView = ({ data, isRussia = false }: { data: AccessRestrictionsByStatus; isRussia?: boolean }) => {
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
              <div className="text-gray-700 leading-relaxed">{item.rule}</div>
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
                <div className="text-gray-700 leading-relaxed">{item.rule}</div>
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
              <div className="text-gray-700 leading-relaxed">{item.rule}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EmirateDifferencesTable = ({ data }: { data: EmirateDifferenceRow[] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">酋长国</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">咀嚼烟草制品</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">电子烟</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">水烟</th>
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

const ComplianceLicenseCards = ({ cards, isRussia = false }: { cards: ComplianceLicenseCard[], isRussia?: boolean }) => {
  const renderDescription = (description: string) => {
    const hasSemicolon = description.includes('；');
    if (hasSemicolon) {
      const items = description.split('；').map(item => item.trim()).filter(item => item);
      return (
        <ul className="list-disc pl-5 space-y-2 text-base leading-7 text-[#334155]">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-base leading-7 text-[#334155]">{description}</p>;
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div key={index} className={isRussia ? "bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5 hover:shadow-md transition-shadow" : "bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow"}>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">
              {index + 1}
            </span>
            <div className="flex-1">
              <h4 className={isRussia ? "font-bold text-[#2E3F73] text-base mb-3" : "font-bold text-slate-900 text-lg mb-3"}>{card.title}</h4>
              {isRussia ? renderDescription(card.description) : <p className="text-slate-700 leading-relaxed">{card.description}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SeasonSummaryText = ({ text }: { text: string }) => {
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
            <ul key={blockIndex} className="space-y-3 pl-0">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} className="list-none">
                  <div className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-0.5">•</span>
                    <div className="flex-1">
                      <span className="leading-relaxed">{item.title}</span>
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="leading-relaxed mt-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          );
        }

        return lines.map((line, lineIndex) => (
          <p key={`${blockIndex}-${lineIndex}`} className="leading-relaxed">{line}</p>
        ));
      })}
    </div>
  );
};

const productCategories = [
  { key: 'electronicCigarette', name: '电子烟' },
  { key: 'hnb', name: 'HNB' },
  { key: 'nicotinePouch', name: '尼古丁袋' },
  { key: 'cigarette', name: '卷烟' },
  { key: 'otherNovel', name: '其他新型烟草制品' },
];

export default function CountryDetail() {
  const params = useParams();
  const countryId = params.id as string;
  const [activeTab, setActiveTab] = useState<'prohibited' | 'partiallyProhibited' | 'open'>('prohibited');
  const [activeCategory, setActiveCategory] = useState<string>('electronicCigarette');

  const country = baseCountries.find(c => c.id === countryId) || null;
  const isRussiaStyle = country?.id === 'russia' || country?.id === 'uae';

  if (!country) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">国家未找到</h1>
          <Link href="/" className="text-blue-600 hover:underline">返回首页</Link>
        </div>
      </div>
    );
  }

  const getCategoriesWithContent = (tab: 'prohibited' | 'partiallyProhibited' | 'open') => {
    if (!country.accessRestrictions) return [];
    return productCategories.filter((category) => {
      const restrictions = country.accessRestrictions![category.key as keyof typeof country.accessRestrictions];
      return restrictions[tab].length > 0;
    });
  };

  const categoriesWithContent = country.accessRestrictions ? getCategoriesWithContent(activeTab) : [];
  
  React.useEffect(() => {
    if (country.accessRestrictions) {
      const categories = getCategoriesWithContent(activeTab);
      if (categories.length > 0) {
        setActiveCategory(categories[0].key);
      }
    }
  }, [activeTab]);

  const currentCategoryRestrictions = country.accessRestrictions ? country.accessRestrictions[activeCategory as keyof typeof country.accessRestrictions] : { prohibited: [], partiallyProhibited: [], open: [] };

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <header className="bg-white border-b border-[#D8E0EA] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-[#64748B] hover:text-[#4A6290] flex items-center gap-2 transition-colors">
            <span className="text-lg">←</span> 返回首页
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-8">
          <h1 className="text-5xl font-bold text-[#0F172A] mb-6">{country.name}</h1>
        </section>

        {(country.id === 'russia' || country.id === 'uae') && (
          <section className="mb-8">
            <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
                <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
                本季监管动态
              </h2>
              {country.id === 'russia' && (
                <>
                  <p className="text-[#334155] text-base leading-7 mb-5">
                    2026年以来，俄罗斯监管重点继续集中在产品许可、数字标识、税费和价格监管。烟草和尼古丁产品仍有合法准入空间，但经营端控制持续加强。
                  </p>
                  <div className="space-y-3">
                    <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[#373F7A] text-base mb-1">批发 / 零售许可</h4>
                          <p className="text-[#334155] text-base leading-7">烟草和尼古丁产品批发、零售许可改革继续推进。此前方案曾提出2026年分阶段实施，但实际上改革时间和落地节奏仍在调整，暂无确定时间表。</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[#373F7A] text-base mb-1">数字标识</h4>
                          <ul className="space-y-2 text-[#334155] text-base leading-7 pl-5 list-disc">
                            <li>可重复使用电子烟设备及类似个人电加热雾化设备仍处于标识试验 / 过渡阶段。</li>
                            <li>烟油、含液体烟弹、设备与液体组合产品中的液体部分，应继续按尼古丁液体或无尼古丁液体规则判断，仍需重点关注相关标识和追溯要求。</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[#373F7A] text-base mb-1">税费和最低价格</h4>
                          <ul className="space-y-2 text-[#334155] text-base leading-7 pl-5 list-disc">
                            <li>俄罗斯对烟草、尼古丁及相关制品等列明2026—2028年消费税税率。</li>
                            <li>2026年起至2028年，前述产品的税率继续提高。</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {country.id === 'uae' && (
                <p className="text-[#334155] text-base leading-7">本季无重大监管更新。</p>
              )}
            </div>
          </section>
        )}

        {country.id !== 'russia' && country.id !== 'uae' && (
          <>
            <section className="mb-8">
              <div className="bg-[#EAF2FF] border border-blue-200 border-l-4 border-l-blue-600 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  本季动态摘要
                </h2>
                <div className="text-gray-800">
                  <SeasonSummaryText text={country.seasonSummary} />
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
                  <div className="w-1 h-7 bg-blue-600 rounded-full"></div>
                  法规动态
                </h2>
                <ul className="space-y-4">
                  {country.regulatoryUpdates.map((update, index) => {
                    const parts = update.split('\n\n');
                    const title = parts[0] || '';
                    const content = parts.slice(1).join('\n\n');
                    return (
                      <li key={index} className="flex items-start gap-4 p-5 bg-white border border-blue-200 rounded-xl shadow-sm">
                        <div className="flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-600 rounded-full"></div>
                        <div>
                          <span className="font-bold text-blue-900 text-base">{title}</span>
                          {content && (
                            <>
                              <br />
                              <span className="mt-2 block text-gray-700 leading-relaxed">{content}</span>
                            </>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          </>
        )}

        <section className="mb-8">
          <div className={isRussiaStyle ? "bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
              <div className={isRussiaStyle ? "w-1 h-7 bg-[#4A6290] rounded-full" : "w-1 h-7 bg-blue-600 rounded-full"}></div>
              {isRussiaStyle ? '监管体系' : '监管体系与产品口径'}
            </h2>
            
            {country.id === 'russia' ? (
              <div className="space-y-4">
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">核心特征</h3>
                  <ul className="space-y-3 pl-5 list-disc">
                    <li className="text-base leading-7 text-[#334155]">俄罗斯属于烟草及尼古丁产品强监管市场。</li>
                    <li className="text-base leading-7 text-[#334155]">传统烟草、加热烟草、电子烟制品等产品有合规准入空间，但生产、进口、流通、标识、税费、价格和销售环节均受到较强监管。</li>
                    <li className="text-base leading-7 text-[#334155]">俄罗斯对无烟烟草产品实行分类监管。nasvay、snus、食品型尼古丁产品，以及用于咀嚼、吸吮、鼻吸的尼古丁产品禁止批发和零售；咀嚼烟草、鼻烟等传统非吸烟烟草产品仍有合规准入路径，但适用强监管要求。</li>
                  </ul>
                </div>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">规则体系</h3>
                  <ul className="space-y-3 pl-5 list-disc">
                    <li className="text-base leading-7 text-[#334155]">欧亚经济联盟技术规则主要影响烟草制品的技术要求、包装标签、健康警示、消费者信息和符合性声明。</li>
                    <li className="text-base leading-7 text-[#334155]">俄罗斯国内监管规则主要影响生产流通许可、销售限制、广告展示、数字标识、消费税、最低价格和法律责任。</li>
                    <li className="text-base leading-7 text-[#334155]">对同一产品，通常需要同时判断欧亚经济联盟技术合规要求和俄罗斯国内市场准入、流通及销售规则。</li>
                  </ul>
                </div>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">监管部门</h3>
                  <ul className="list-disc pl-5 space-y-3 text-base leading-7 text-[#334155]">
                    <li><span className="font-semibold text-[#263247]">俄罗斯联邦酒精和烟草市场监管局：</span>负责烟草、尼古丁产品及相关原料的生产流通许可和监管。</li>
                    <li><span className="font-semibold text-[#263247]">俄罗斯联邦消费者权益保护和公益监督局：</span>负责消费者保护、公共卫生、销售端检查、标签、未成年人保护和控烟执法。</li>
                    <li><span className="font-semibold text-[#263247]">俄罗斯联邦税务局：</span>负责消费税、税务申报和涉税监管。</li>
                    <li><span className="font-semibold text-[#263247]">俄罗斯海关机关：</span>负责进口申报、商品归类、边境查验、进口税费和走私查处。</li>
                    <li><span className="font-semibold text-[#263247]">俄罗斯联邦反垄断局：</span>负责广告、促销、赞助和不正当竞争监管。</li>
                  </ul>
                </div>
              </div>
            ) : country.id === 'uae' ? (
              <div className="space-y-4">
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">核心特征</h3>
                  <p className="text-base leading-7 text-[#334155] mb-4">阿联酋整体属于烟草及新型烟草产品可准入的市场。</p>
                  <p className="text-base leading-7 text-[#334155] mb-4">一般而言，在阿联酋，从事烟草相关业务的企业必须首先取得与其经营活动相对应的营业执照。除此之外，部分烟草相关活动还需根据联邦及地方（如迪拜市政厅）相关法规，额外申请专项许可或获得主管部门的批准。例如：</p>
                  <ul className="space-y-3 pl-5 list-disc">
                    <li className="text-base leading-7 text-[#334155]">烟草种植与制造可能需要取得专门的农业或工业许可，并满足一系列合规要求。</li>
                    <li className="text-base leading-7 text-[#334155]">烟草产品的进口、分销和零售需要满足营业许可、产品认证、消费税、数字税票、进口清关和地方销售许可等要求。</li>
                  </ul>
                </div>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">监管体系</h3>
                  <p className="text-base leading-7 text-[#334155] mb-4">阿联酋对烟草制品的监管体系，采取联邦法规与各酋长国地方政策相结合的模式。在联邦控烟法律的统一框架下，各酋长国有权依据自身情况实施更为严格的地方性监管措施。同时，阿联酋境内划分为大陆地区与多个自由贸易区（Free Zones），各自由区在联邦法律基础上，亦可制定自己的行政管理规定和准入标准。</p>
                  <p className="text-base leading-7 text-[#334155] mb-4">其中：</p>
                  <ul className="space-y-3 pl-5 list-disc">
                    <li className="text-base leading-7 text-[#334155]">联邦层面重点管理烟草控制、产品标准、消费税、数字税票、未成年人保护和广告促销限制。</li>
                    <li className="text-base leading-7 text-[#334155]">酋长国规则主要影响销售点许可、水烟场所、距离限制、陈列要求、公共场所使用和实际执法尺度。</li>
                    <li className="text-base leading-7 text-[#334155]">自由区安排主要适合进出口、仓储和转口，不等于可以直接进入阿联酋大陆市场销售。</li>
                  </ul>
                </div>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">监管部门</h3>
                  <ul className="list-disc pl-5 space-y-3 text-base leading-7 text-[#334155]">
                    <li><span className="font-semibold text-[#263247]">阿联酋卫生与预防部：</span>负责公共健康、控烟政策和卫生监管，是烟草控制和公共健康政策的重要主管部门。</li>
                    <li><span className="font-semibold text-[#263247]">阿联酋工业与先进技术部：</span>负责技术法规、产品符合性评估、ECAS认证和CoC符合性证书。电子尼古丁产品、无烟草尼古丁袋等受技术法规管制的产品，通常需要通过其产品认证体系进入市场。</li>
                    <li><span className="font-semibold text-[#263247]">阿联酋联邦税务局：</span>负责消费税、数字税票、税务注册和申报。卷烟、水烟烟草、加热卷烟产品、电子吸烟设备及相关液体等产品进入本地市场时，需要重点确认消费税和数字税票要求。</li>
                    <li><span className="font-semibold text-[#263247]">阿联酋海关机关：</span>负责进口、清关、边境监管、商品查验和申报资料核查。进口烟草、电子烟、烟油、HNB烟支、尼古丁袋及相关配件时，需确保申报品名、HS编码、认证资料和税务资料一致。</li>
                    <li><span className="font-semibold text-[#263247]">各酋长国 / 市政部门：</span>负责销售点、水烟场所、陈列、距离限制、公共场所使用和地方许可。迪拜、阿布扎比、沙迦等酋长国在水烟场所、销售点位置和地方许可方面可能存在执行差异。</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">监管概述</h3>
                <div className="space-y-4">
                  {parseOverview(country.regulatorySystem.overview).map((section, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <h3 className="text-base font-bold text-blue-900 mb-3">{section.title}</h3>
                      <div className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
                        {section.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {(country.id === 'russia' || country.id === 'uae') && (
          <section className="mb-8">
            <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
                <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
                产品准入与监管口径
              </h2>
              {country.id === 'russia' && (
              <div className="space-y-4">
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">1. 传统烟草制品</h3>
                  <div className="mb-4">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">产品定性</div>
                    <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
                      <li>根据 TR CU 035/2014，烟草制品是全部或部分以烟草叶为原料制成，并以消费者包装投放市场的产品。</li>
                      <li>烟草制品主要包括：传统卷烟、雪茄、小雪茄、烟丝、烟斗烟、水烟烟草，以及 papirosy（俄式纸嘴卷烟，即一端为烟草段、另一端为较长中空纸嘴的传统燃烧型烟草制品）。</li>
                    </ul>
                  </div>
                  <StatusCard
                    status="green"
                    title="适用产品：传统卷烟、雪茄、小雪茄、烟丝、烟斗烟、水烟烟草、papirosy。"
                    content="主要合规要点：产品本身可准入，主要关注 TR CU 035/2014 符合性声明、生产或进口投入流通许可、数字标识、消费税、最低价格、包装标签、健康警示和销售限制。"
                  />
                </div>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">2. 加热烟草产品</h3>
                  <div className="mb-4">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">产品定性</div>
                    <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
                      <li>第15-FZ号法将加热烟草产品列入尼古丁产品范围。</li>
                      <li>HNB烟支通常指含烟草材料、通过加热装置加热后供消费者吸入的产品。</li>
                      <li>监管上按加热烟草产品、烟草产品或尼古丁产品判断，不按 snus、nasvay、咀嚼烟草、鼻烟等无烟烟草产品处理。</li>
                    </ul>
                  </div>
                  <StatusCard
                    status="green"
                    title="适用产品：HNB烟支、加热消费用烟草、含加热烟草产品。"
                    content="主要合规要点：产品本身可准入，重点关注生产或进口投入流通许可、数字标识、消费税、最低价格、包装标签和销售限制。"
                  />
                </div>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">3. 电子烟及液体产品</h3>
                  <div className="mb-4">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">分类监管</div>
                    <p className="text-base leading-7 text-[#334155]">俄罗斯法规通常按产品构成拆分判断电子烟相关产品，不使用一个单一概念统一覆盖全部产品。电子烟相关产品可分为设备类、液体类、预灌装 / 组合产品和空组件。</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <StatusCard
                      status="green"
                      title="设备类"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                        <p className="mb-3">电子烟设备、可重复使用电子雾化设备、HNB加热设备。</p>
                        <div className="font-semibold text-[#263247] mb-1">产品定性：</div>
                        <p className="mb-3">根据第15-FZ号法，尼古丁产品使用装置是指用于产生含尼古丁气溶胶、蒸气或气体，并供使用者吸入的电子或其他装置，包括电子尼古丁输送系统和加热烟草系统，但不包括依法注册为医疗器械或药品的产品。</p>
                        <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                        <ul className="space-y-1 text-[#334155]">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>可重复使用电子烟及类似个人电加热雾化设备的数字标识仍处于试验 / 过渡阶段。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>进入零售市场仍需遵守销售地点、展示、远程销售、自动售卖和未成年人保护等限制。</span>
                          </li>
                        </ul>
                      </>}
                    />
                    
                    <StatusCard
                      status="green"
                      title="液体类"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                        <p className="mb-3">烟油、电子烟补充液、尼古丁液体、无尼古丁液体。</p>
                        <div className="font-semibold text-[#263247] mb-1">产品定性：</div>
                        <ul className="space-y-1 text-[#334155] mb-3">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>根据第15-FZ号法，尼古丁液体包括尼古丁含量不低于 0.1 mg/ml 的液体。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>无尼古丁液体包括不含尼古丁或尼古丁含量低于 0.1 mg/ml、并用于电子尼古丁输送系统的液体。</span>
                          </li>
                        </ul>
                        <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                        <ul className="space-y-1 text-[#334155]">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>零售环节不得销售尼古丁浓度超过 20 mg/ml 的尼古丁液体或尼古丁溶液。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>含尼古丁液体涉及消费税、最低价格、数字标识及生产 / 进口投入流通许可。</span>
                          </li>
                        </ul>
                      </>}
                    />
                    
                    <div className="md:col-span-2">
                      <StatusCard
                        status="amber"
                        title="预灌装 / 组合产品和空组件"
                        content={<>
                          <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                          <p className="mb-3">含液体烟弹、设备与液体组合产品、空烟弹、空容器、普通电子烟组件。</p>
                          <div className="font-semibold text-[#263247] mb-1">产品定性：</div>
                          <p className="mb-3">俄罗斯公开法规未见对含液体烟弹、设备与液体组合产品、空烟弹或空容器设置统一单独定义。该类产品需要结合设备部分、液体部分和下游用途拆分判断。</p>
                          <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                          <ul className="space-y-1 text-[#334155]">
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                              <span>含液体烟弹和设备与液体组合产品应同时判断设备部分和液体部分：设备部分按尼古丁产品使用系统 / 装置判断，液体部分按尼古丁液体或无尼古丁液体判断。</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                              <span>空烟弹、空容器或普通不含液体组件，通常不直接按尼古丁液体处理；如与含尼古丁液体、含液体烟弹或组合产品配套销售，应转入对应产品路径判断。</span>
                            </li>
                          </ul>
                        </>}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">4. 无烟烟草及口含 / 鼻吸 / 咀嚼类尼古丁产品</h3>
                  <div className="mb-4">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">产品定性</div>
                    <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
                      <li>无烟烟草产品是一个大类。俄罗斯法规主要根据产品成分、使用方式和具体产品类别区分监管，没有对所有无烟烟草产品适用统一准入规则。</li>
                      <li>nasvay、snus、食品型尼古丁产品，以及用于咀嚼、吸吮、鼻吸的尼古丁产品，属于明确禁售产品。</li>
                      <li>咀嚼烟草、鼻烟等传统非吸烟烟草产品，在俄罗斯法规体系中仍有合规准入路径，但适用强监管要求。</li>
                      <li>HNB烟支 / 加热烟草产品不放在本栏目判断，相关信息请参见“加热烟草产品”栏目。</li>
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <StatusCard
                      status="red"
                      title="法规点名禁售产品"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                        <p className="mb-3">nasvay、snus（吸吮烟草）、食品型尼古丁产品、尼古丁袋、尼古丁口含膜，以及用于咀嚼、吸吮、鼻吸的尼古丁产品。</p>
                        <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                        <ul className="space-y-2 pl-5 list-disc text-[#334155]">
                          <li>nasvay、snus、食品型尼古丁产品，以及用于咀嚼、吸吮、鼻吸的尼古丁产品，禁止批发和零售。</li>
                          <li>尼古丁袋、尼古丁口含膜、尼古丁粉末、尼古丁混合物等产品，如设计用途为口含、吸吮、咀嚼或鼻吸，通常按禁售产品处理。</li>
                        </ul>
                      </>}
                    />
                    
                    <StatusCard
                      status="green"
                      title="传统非吸烟烟草产品"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                        <p className="mb-3">咀嚼烟草、鼻烟，以及不构成 nasvay 或 snus 的其他传统非吸烟烟草产品。</p>
                        <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                        <ul className="space-y-2 pl-5 list-disc text-[#334155]">
                          <li>产品本身有合规准入空间，但需按非吸烟烟草产品的具体类别判断监管要求。</li>
                          <li>进入俄罗斯市场前，通常需要关注技术合规、包装标签、数字标识、最低价格、消费税、生产 / 进口投入流通许可和销售限制。</li>
                        </ul>
                      </>}
                    />
                    
                    <StatusCard
                      status="amber"
                      title="含烟草且另含尼古丁的边界产品"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                        <p className="mb-3">含烟草材料，同时外加尼古丁，或以口含、吸吮、咀嚼、鼻吸方式递送尼古丁的袋状、片状、粉末状、混合物类产品。</p>
                        <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                        <ul className="space-y-2 pl-5 list-disc text-[#334155]">
                          <li>产品含有烟草材料时，仍需结合外加尼古丁、使用方式和产品宣传口径判断具体监管路径。</li>
                          <li>产品构成 nasvay、snus，或实质上属于用于咀嚼、吸吮、鼻吸的尼古丁产品的，应按禁售产品处理。</li>
                          <li>如主张按传统非吸烟烟草产品进入市场，应重点确认产品定义、成分、使用方式、标签标识、生产 / 进口流通许可、最低价格和主管机关口径。</li>
                        </ul>
                      </>}
                    />
                  </div>
                </div>

                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">5. 原料及辅材</h3>
                  <div className="mb-4">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">产品定性</div>
                    <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
                      <li>第203-FZ号法将烟草制品、烟草产品、尼古丁产品及其生产原料纳入生产流通监管。</li>
                      <li>烟叶、reconstituted tobacco、烟草原料、尼古丁原料通常属于生产链条中的原料或半成品，与消费者可直接使用的烟草制品、HNB烟支、电子烟液、尼古丁袋等成品不同。</li>
                      <li>俄罗斯公开法规资料未见将滤嘴棒、爆珠、香精香料等普通烟用辅材统一定义为烟草制品或尼古丁产品。该类产品通常按成分、用途、海关归类和下游产品用途判断。</li>
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <StatusCard
                      status="green"
                      title="烟草及尼古丁原料"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                        <p className="mb-3">烟叶、reconstituted tobacco、烟草原料、尼古丁原料。</p>
                        <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                        <ul className="space-y-1 text-[#334155]">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>可作为原料进入供应链，不宜作为普通消费者成品零售。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>俄罗斯本地生产或加工主体需取得覆盖烟草原料或尼古丁原料的生产许可。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>俄罗斯进口商需取得烟草原料或尼古丁原料进口投入流通许可。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>原料还需关注追溯信息报送。</span>
                          </li>
                        </ul>
                      </>}
                    />
                    
                    <StatusCard
                      status="green"
                      title="普通烟用辅材"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                        <p className="mb-3">滤嘴棒、爆珠、香精香料、普通烟用辅材。</p>
                        <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                        <ul className="space-y-1 text-[#334155]">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>不含尼古丁、不含烟草提取物、仅作为普通辅材的，通常可按普通辅材理解。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>后续重点结合成分、用途、海关归类、进口监管和下游客户产品用途判断具体合规要求。</span>
                          </li>
                        </ul>
                      </>}
                    />
                    
                    <StatusCard
                      status="amber"
                      title="含特殊成分或特定用途辅材"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                        <p className="mb-3">含尼古丁、烟草提取物，或作为烟油、含液体烟弹、HNB烟支、尼古丁产品组件使用的辅材。</p>
                        <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                        <p>应转入对应成品或原料监管路径。</p>
                      </>}
                    />
                  </div>
                </div>
              </div>
              )}
              {country.id === 'uae' && (
              <div className="space-y-4">
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">1. 烟草</h3>
                  <div className="mb-4">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">产品定性</div>
                    <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
                      <li>阿联酋控烟法将烟草界定为各类烟草植物及其根、茎、叶、果实、绿色或干燥种子等部分。烟叶属于典型烟草原料。</li>
                    </ul>
                  </div>
                  <StatusCard
                    status="green"
                    title="烟草原料 / 烟草材料"
                    customLabel="供应链可准入"
                    content={<>
                      <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                      <p className="mb-3">烟叶、reconstituted tobacco、烟草薄片、烟草原料。</p>
                      <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                      <ul className="space-y-1 text-[#334155]">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                          <span>重点关注进口申报、用途、税务、仓储、转口和下游产品合规。</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                          <span>作为工业原料进入生产、加工或转口场景，与作为消费者成品进入本地市场销售，应分别判断。</span>
                        </li>
                      </ul>
                    </>}
                  />
                </div>

                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">2. 燃烧类烟草制品</h3>
                  <div className="mb-4">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">产品定性</div>
                    <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
                      <li>阿联酋控烟法将烟草制品界定为全部或部分以烟叶为原料制成的产品，包括保持原形、切碎、切丁、与其他材料混合、加工成粉末或以其他形态形成的产品，也包括含有烟草成分的复合材料。</li>
                      <li>传统卷烟、水烟烟草、雪茄、烟斗烟草、小雪茄等通过点燃并燃烧方式使用的产品，属于燃烧类烟草制品。</li>
                    </ul>
                  </div>
                  <StatusCard
                    status="green"
                    title="传统卷烟、水烟烟草、雪茄等燃烧类烟草制品"
                    content={<>
                      <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                      <ul className="space-y-1 text-[#334155]">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                          <span>进入阿联酋或在境内交易的烟草及烟草制品，应符合阿联酋相关强制标准、包装标签和健康警示要求。</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                          <span>烟草制品适用100%消费税，进口商及生产商需向联邦税务局（FTA）注册并贴附数字税票；未贴附数字税票的相关产品不得进口进入阿联酋或在本地市场销售。</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                          <span>销售端须遵守所在地酋长国 / 市政部门的销售点许可、未成年人保护、禁售地点、距离限制、陈列和广告促销限制。</span>
                        </li>
                      </ul>
                    </>}
                  />
                </div>

                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">3. 电子尼古丁产品及加热烟草产品</h3>
                  <div className="mb-4">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">产品定性</div>
                    <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
                      <li>UAE.S 5030:2018《电子尼古丁产品（传统烟草产品等同物）》适用于设计成传统烟草产品形式的电子尼古丁产品，例如卷烟、雪茄、烟斗、小雪茄或水烟形式的产品。</li>
                      <li>该标准覆盖两类产品：
                        <br />（1）不含烟草的电子雾化产品，其可能含有尼古丁，也可能不含尼古丁，以及其补充装，例如电子液体容器；
                        <br />（2）含有烟草的加热烟草产品，即经加工或未经加工的烟草，通过电子装置加热但不燃烧的产品。</li>
                      <li>该标准明确载明：其所指电子尼古丁产品并不包括通过点燃并燃烧吸食的产品，也不包括尼古丁贴片等其他含尼古丁产品，以及通过口腔消费的烟草产品。</li>
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <StatusCard
                      status="green"
                      title="电子雾化产品、烟油及补充装"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                        <ul className="space-y-1 text-[#334155]">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>电子雾化产品、电子烟、电子水烟、烟油、补充液、含液体烟弹及补充装产品，应按 UAE.S 5030:2018 办理 ECAS / CoC。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>电子液体中的尼古丁含量不得超过 20mg/ml；一体式电子液体储罐容量不得超过 10ml；电子液体补充装容量每包不得超过 50ml。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>电子吸烟设备及工具、电子吸烟设备及工具所用液体适用 100% 消费税。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>烟油和补充液应符合药用级纯度、禁限用成分、泄漏防护、儿童防护包装、标签警示和进口申报要求。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>特定有害添加物或口味在部分酋长国可能存在限制，需结合地方执行口径确认。</span>
                          </li>
                        </ul>
                      </>}
                    />
                    <StatusCard
                      status="green"
                      title="加热烟草产品 / HNB烟支"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                        <ul className="space-y-1 text-[#334155]">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>HNB等加热烟草产品进入本土市场前，应同时关注 UAE.S 5030:2018、烟草制品规则、消费税、数字税票、包装标签和地方销售许可要求。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>加热卷烟产品属于消费税和数字税票重点品类；未贴附数字税票的相关产品不得进口进入阿联酋或在本地市场销售。</span>
                          </li>
                        </ul>
                      </>}
                    />
                  </div>
                </div>

                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">4. 无烟烟草 / 尼古丁产品</h3>
                  <div className="mb-4">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">产品定性</div>
                    <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
                      <li>在阿联酋，无烟烟草 / 尼古丁产品不宜按单一产品路径处理。</li>
                      <li>结合现有公开规则，可以分为三类：
                        <br />（1）无烟草尼古丁袋；
                        <br />（2）含烟草咀嚼制品；以及
                        <br />（3）其他口腔 / 鼻用烟草或尼古丁产品。</li>
                    </ul>
                  </div>
                  <StatusCard
                      status="green"
                      title="无烟草尼古丁袋"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">产品定义：</div>
                        <p className="mb-3">根据《内阁决议第 2 号（2025 年）》及 UAE.S 5061:2025《无烟草尼古丁袋》，无烟草尼古丁袋是指含有尼古丁和/或尼古丁化合物、调味剂及其他允许成分，且不含烟草的产品；</p>
                        <p className="mb-3">该产品仅限通过口腔使用，即将小袋/囊袋放置于牙龈与口腔黏膜之间一段时间，以便尼古丁通过口腔黏膜吸收，使用后再将小袋丢弃。</p>
                        <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                        <ul className="space-y-1 text-[#334155]">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>未取得主管机关正式批准并提交规定文件的，不得进口、制造或投放市场。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>产品应符合 UAE.S 5061:2025技术要求，例如每袋尼古丁总量不得超过 20mg；最终产品 pH 值不得超过 9.1；水分活度不得超过 0.7。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>包装和标签也应符合 UAE.S 5061:2025 要求，例如每个零售包装应含 15–20 个小袋。</span>
                          </li>
                        </ul>
                      </>}
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                    <StatusCard
                      status="red"
                      title="含烟草咀嚼制品"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">产品定义：</div>
                        <p className="mb-3">公开资料未见阿联酋对“含烟草咀嚼制品”设置单独完整定义。</p>
                        <p className="mb-3">结合现有禁止性口径，该类产品可理解为含有烟草材料、通过咀嚼或口含方式使用的烟草产品，典型产品包括 Paan、Gutkha、Mawa 等。</p>
                        <div className="font-semibold text-[#263247] mb-1">主要限制：</div>
                        <ul className="space-y-1 text-[#334155]">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                            <span>禁止进口、销售、持有或分销。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                            <span>含烟草材料的咀嚼类产品不得套用无烟草尼古丁袋路径。</span>
                          </li>
                        </ul>
                      </>}
                    />
                    <StatusCard
                      status="amber"
                      title="其他口腔/鼻用烟草或尼古丁产品"
                      customLabel="需确认"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                        <p className="mb-3">尼古丁口含膜、尼古丁片、尼古丁粉末、鼻吸尼古丁产品、含烟草鼻吸产品、其他非袋状口腔或鼻用烟草/尼古丁产品。</p>
                        <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                        <ul className="space-y-1 text-[#334155]">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                            <span>公开法规尚未见单独、明确、成熟的定义或准入路径。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                            <span>非袋状口含尼古丁产品不能当然等同于无烟草尼古丁袋，主要原因是 UAE.S 5061:2025 对无烟草尼古丁袋设置了明确的袋状形态和口腔使用方式定义。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                            <span>进入市场前，应结合产品形态、成分、使用方式、是否含烟草材料及主管机关口径确认产品归类和认证要求。</span>
                          </li>
                        </ul>
                      </>}
                    />
                  </div>
                </div>

                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">5. 普通辅材及相关配套材料</h3>
                  <div className="mb-4">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">产品定性</div>
                    <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
                      <li>阿联酋公开资料未见对滤嘴棒、爆珠、香精胶囊、香精香料设置单独产品定义。该类产品应重点核对成分、用途、HS 编码、进口申报和下游客户产品用途。</li>
                    </ul>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <StatusCard
                      status="green"
                      title="普通辅材"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                        <ul className="space-y-1 text-[#334155]">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                            <span>不含尼古丁、不含烟草提取物，且不作为消费者直接使用产品销售的，通常可按普通辅材或配套材料理解；公开资料下未见单独产品准入许可或专项认证要求。</span>
                          </li>
                        </ul>
                      </>}
                    />
                    <StatusCard
                      status="amber"
                      title="含尼古丁、烟草提取物或直接面向消费者使用"
                      customLabel="需确认"
                      content={<>
                        <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                        <ul className="space-y-1 text-[#334155]">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                            <span>如产品含尼古丁、烟草提取物，或对外作为消费者可直接使用产品销售，不能直接按普通辅材处理。</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                            <span>应根据产品成分、使用方式和销售形态，转入烟草制品、电子尼古丁产品、无烟草尼古丁袋或其他对应路径确认准入和认证要求。</span>
                          </li>
                        </ul>
                      </>}
                    />
                  </div>
                </div>

                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">6. 仿烟糖果/玩具</h3>
                  <div className="mb-4">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">产品定性</div>
                    <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
                      <li>仿烟糖果/玩具是指外观、表达或使用方式类似烟草或烟草制品的糖果、游戏或玩具类产品。</li>
                    </ul>
                  </div>
                  <StatusCard
                    status="red"
                    title="仿烟糖果/玩具"
                    content={<>
                      <div className="font-semibold text-[#263247] mb-1">主要限制：</div>
                      <ul className="space-y-1 text-[#334155]">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                          <span>禁止进口。</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                          <span>禁止销售或试图销售。</span>
                        </li>
                      </ul>
                    </>}
                  />
                </div>

                {country.emirateDifferences && (
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <h3 className="text-lg font-bold text-[#2E3F73] mb-4">主要酋长国差异</h3>
                    <div className="overflow-x-auto rounded-xl border border-[#D8DDED]">
                      <table className="w-full text-base min-w-[600px] bg-white">
                        <thead>
                          <tr className="bg-[#E8EDF5]">
                            <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED] border-r border-[#D8DDED] w-[16%]">酋长国</th>
                            <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED] border-r border-[#D8DDED] w-[24%]">咀嚼烟草制品</th>
                            <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED] border-r border-[#D8DDED] w-[30%]">电子烟</th>
                            <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED] w-[30%]">水烟</th>
                          </tr>
                        </thead>
                        <tbody>
                          {country.emirateDifferences.map((row, index) => (
                            <React.Fragment key={index}>
                              <tr className={index % 2 === 0 ? 'bg-white/50' : 'bg-[#F3F5FB]'}>
                                <td className="px-5 py-4 border-b border-[#D8DDED] border-r border-[#D8DDED] font-semibold text-[#1F2A44]">{row.emirate}</td>
                                <td className="px-5 py-4 border-b border-[#D8DDED] border-r border-[#D8DDED] text-[#334155]">{row.chewingTobacco}</td>
                                <td className="px-5 py-4 border-b border-[#D8DDED] border-r border-[#D8DDED] text-[#334155]">{row.electronicCigarette}</td>
                                <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155]">{row.hookah}</td>
                              </tr>
                              {row.note && index === country.emirateDifferences!.length - 1 && (
                                <tr>
                                  <td colSpan={4} className="px-5 py-3 text-[#64748B] text-sm italic border-b border-[#D8DDED]">备注：{row.note}</td>
                                </tr>
                              )}
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
              )}
            </div>
          </section>
        )}

        {country.id !== 'russia' && country.id !== 'uae' && (
          <section className="mb-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-[#1F2A44] mb-6 flex items-center gap-3">
                <div className="w-1 h-7 bg-blue-600 rounded-full"></div>
                准入与禁令限制
              </h2>
              
              {country.accessRestrictionsByStatus ? (
                <AccessRestrictionsByStatusView data={country.accessRestrictionsByStatus} isRussia={false} />
              ) : (
                <>
                  <div className="flex gap-2 mb-6 border-b border-gray-200">
                    <button
                      onClick={() => setActiveTab('prohibited')}
                      className={`px-4 py-2 font-medium rounded-t-lg transition-colors ${
                        activeTab === 'prohibited'
                          ? 'bg-red-100 text-red-800 border-b-2 border-red-500'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      完全禁止
                    </button>
                    <button
                      onClick={() => setActiveTab('partiallyProhibited')}
                      className={`px-4 py-2 font-medium rounded-t-lg transition-colors ${
                        activeTab === 'partiallyProhibited'
                          ? 'bg-yellow-100 text-yellow-800 border-b-2 border-yellow-500'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      部分禁止
                    </button>
                    <button
                      onClick={() => setActiveTab('open')}
                      className={`px-4 py-2 font-medium rounded-t-lg transition-colors ${
                        activeTab === 'open'
                          ? 'bg-green-100 text-green-800 border-b-2 border-green-500'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      开放 / 可准入
                    </button>
                  </div>

                  {categoriesWithContent.length > 0 ? (
                    <>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {categoriesWithContent.map((category) => (
                          <button
                            key={category.key}
                            onClick={() => setActiveCategory(category.key)}
                            className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                              activeCategory === category.key
                                ? 'bg-business-orange text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>

                      <div>
                        {activeTab === 'prohibited' && (
                          <ul className="space-y-2">
                            {currentCategoryRestrictions.prohibited.length > 0 ? (
                              currentCategoryRestrictions.prohibited.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-red-500 mt-1">•</span>
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))
                            ) : (
                              <p className="text-gray-500">无完全禁止项目</p>
                            )}
                          </ul>
                        )}
                        {activeTab === 'partiallyProhibited' && (
                          <ul className="space-y-2">
                            {currentCategoryRestrictions.partiallyProhibited.length > 0 ? (
                              currentCategoryRestrictions.partiallyProhibited.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-yellow-500 mt-1">•</span>
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))
                            ) : (
                              <p className="text-gray-500">无部分禁止项目</p>
                            )}
                          </ul>
                        )}
                        {activeTab === 'open' && (
                          <ul className="space-y-2">
                            {currentCategoryRestrictions.open.length > 0 ? (
                              currentCategoryRestrictions.open.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-green-500 mt-1">•</span>
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))
                            ) : (
                              <p className="text-gray-500">无开放项目</p>
                            )}
                          </ul>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">暂无适用产品</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        )}

        <section className="mb-8">
          <div className={isRussiaStyle ? "bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
              <div className={isRussiaStyle ? "w-1 h-7 bg-[#4A6290] rounded-full" : "w-1 h-7 bg-blue-600 rounded-full"}></div>
              合规资质
            </h2>
            {country.id === 'uae' ? (
              <div className="space-y-4">
                <p className="text-[#334155] text-base leading-7 mb-4">阿联酋烟草及新型烟草产品的合规重点，不在于一般公司设立资质，而在于产品认证、行业许可、税务税票和地方销售许可。</p>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">1</span>
                    <h4 className="font-bold text-[#2E3F73] text-base">产品符合性证书（CoC）</h4>
                  </div>
                  <ul className="space-y-2 ml-9 mb-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                      <span className="text-[#334155] text-base leading-7">烟草产品（包括电子烟）、无烟草尼古丁袋等受管制产品进入阿联酋市场前，必须依法取得由政府认可的产品符合性证书（Certificate of Conformity, CoC）。</span>
                    </li>
                  </ul>
                  <div className="ml-9 space-y-4">
                    <div>
                      <p className="font-semibold text-[#263247] mb-2">为什么要有 CoC？</p>
                      <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
                        <li>是电子烟或烟草产品 合法进入阿联酋市场 的基本条件</li>
                        <li>是产品 清关、贴数字税票（DTS）、销售和接受检查 的唯一有效证书</li>
                        <li>没有 CoC，产品无法清关，不能在阿联酋销售或流通</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-[#263247] mb-2">CoC 谁来发？怎么拿？</p>
                      <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
                        <li>签发单位：阿联酋工业与先进技术部（MoIAT）</li>
                        <li>获取方式：产品需先通过阿联酋的国家认证流程 —— ECAS</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-[#263247] mb-2">CoC 有效期多久？每次进口都需要吗？</p>
                      <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
                        <li>CoC 通常有效期为 一年（或以注册时间为准）</li>
                        <li>每款产品，每次进口或流通前都要重新办理新的 CoC</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">2</span>
                      <h4 className="font-bold text-[#2E3F73] text-base">阿联酋符合性评估计划（ECAS）</h4>
                    </div>
                    <ul className="space-y-2 ml-9 mb-4">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="text-[#334155] text-base leading-7">ECAS（Emirates Conformity Assessment Scheme）是一套强制性产品认证机制，用于检验产品是否符合阿联酋法律和技术标准。</span>
                      </li>
                    </ul>
                    <div className="ml-9">
                      <p className="font-semibold text-[#263247] mb-2">ECAS与CoC的关系：</p>
                      <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
                        <li>ECAS 是认证流程机制，CoC 则是认证完成后出具的正式合格证书。</li>
                        <li>要取得CoC的产品，需先通过阿联酋的ECAS认证。</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">3</span>
                      <h4 className="font-bold text-[#2E3F73] text-base">无异议函（NOC）</h4>
                    </div>
                    <ul className="space-y-2 ml-9">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="text-[#334155] text-base leading-7">NOC 是政府主管部门出具的无异议函，常用于确认相关主管机关对特定受控业务、产品或操作没有异议。</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="text-[#334155] text-base leading-7">含尼古丁、烟油、高浓度尼古丁、香精等敏感产品，在产品注册、仓储、转运、再包装、出口或自由区操作等环节，可能需要主管机关出具 NOC；涉及戒烟、治疗或健康功效表达的，还可能触发卫生主管机关审查。</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">4</span>
                      <h4 className="font-bold text-[#2E3F73] text-base">地方销售许可</h4>
                    </div>
                    <ul className="space-y-2 ml-9">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="text-[#334155] text-base leading-7">阿联酋各酋长国及自由区（如RAKEZ、DMCC、JAFZA等）的市政或经济监管机构，会分别制定其烟草经营许可或活动白名单的申请规则，涵盖场地安全、环境卫生、消防标准等。</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="text-[#334155] text-base leading-7">企业应在目标经营地区的官方平台上查询并依法申办许可。</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="text-[#334155] text-base leading-7">例如，在迪拜，烟草及烟草制品的零售、批发、分销、进口、仓储等活动，需依据《迪拜市政厅烟草及烟具销售许可技术指南》申请专项许可，并满足选址、距离、店面布局、产品合规、广告限制、未成年人保护等一系列要求 。</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : country.compliance.licenseCards && country.compliance.licenseCards.length > 0 ? (
              <>
                {country.compliance.licenseRequirements && (
                  <p className={isRussiaStyle ? "text-[#334155] mb-6" : "text-gray-700 mb-6"}>{country.compliance.licenseRequirements}</p>
                )}
                <ComplianceLicenseCards cards={country.compliance.licenseCards} isRussia={isRussiaStyle} />
              </>
            ) : country.compliance.genericTable ? (
              <>
                {country.compliance.licenseRequirements && (
                  <p className={isRussiaStyle ? "text-[#334155] mb-6" : "text-gray-700 mb-6"}>{country.compliance.licenseRequirements}</p>
                )}
                <GenericComplianceTable data={country.compliance.genericTable} isRussia={isRussiaStyle} />
              </>
            ) : country.compliance.secondGenericTable ? (
              <>
                {country.compliance.licenseRequirements && (
                  <p className={isRussiaStyle ? "text-[#334155] mb-6" : "text-gray-700 mb-6"}>{country.compliance.licenseRequirements}</p>
                )}
                <GenericComplianceTable data={country.compliance.secondGenericTable} isRussia={isRussiaStyle} />
              </>
            ) : country.compliance.table.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={isRussiaStyle ? "bg-[#E8EDF5]" : "bg-gray-50"}>
                      <th className={isRussiaStyle ? "px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>产品</th>
                      <th className={isRussiaStyle ? "px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>NPPBKC</th>
                      <th className={isRussiaStyle ? "px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>PI 进口批准</th>
                      <th className={isRussiaStyle ? "px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>BPOM 注册</th>
                      <th className={isRussiaStyle ? "px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>Halal 认证</th>
                    </tr>
                  </thead>
                  <tbody>
                    {country.compliance.table.map((row, index) => (
                      <tr key={index} className={isRussiaStyle ? "hover:bg-[#F8FBFF]" : "hover:bg-gray-50"}>
                        <td className={isRussiaStyle ? "px-4 py-4 border-b border-[#D8DDED] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}>{row.product}</td>
                        <td className={isRussiaStyle ? "px-4 py-4 border-b border-[#D8DDED] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}><TableCellContent content={row.nppbkc} /></td>
                        <td className={isRussiaStyle ? "px-4 py-4 border-b border-[#D8DDED] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}><TableCellContent content={row.piImportApproval} /></td>
                        <td className={isRussiaStyle ? "px-4 py-4 border-b border-[#D8DDED] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}><TableCellContent content={row.bpomRegistration} /></td>
                        <td className={isRussiaStyle ? "px-4 py-4 border-b border-[#D8DDED] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}><TableCellContent content={row.halalCertification} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : country.compliance.licenseRequirements ? (
              <p className={isRussiaStyle ? "text-[#334155]" : "text-gray-700"}>{country.compliance.licenseRequirements}</p>
            ) : null}
          </div>
        </section>

        <section className="mb-8">
          <div className={isRussiaStyle ? "bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6" : "bg-white rounded-lg shadow-sm border border-gray-200 p-6"}>
            <h2 className={isRussiaStyle ? "text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3" : "text-2xl font-semibold text-gray-900 mb-6"}>
              {isRussiaStyle && <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>}
              税收政策
            </h2>
            
            {country.tax.exciseTax && (
              <div className="mb-6">
                <p className={isRussiaStyle ? "text-[#334155] text-base leading-7" : "text-gray-700 leading-relaxed"}>{country.tax.exciseTax}</p>
              </div>
            )}
            
            {country.id === 'russia' ? (
              <div className="space-y-4">
                {country.tax.policies.find(p => p.title === '消费税说明') && (
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <h3 className="text-lg font-bold text-[#2E3F73] mb-3">消费税说明</h3>
                    <ul className="space-y-3 pl-5 list-disc">
                      <li className="text-base leading-7 text-[#334155]">俄罗斯对烟草及尼古丁相关产品按产品类型适用消费税，税率按年度逐步调整。</li>
                      <li className="text-base leading-7 text-[#334155]">卷烟、papirosy（俄式纸嘴卷烟）适用复合税率；加热消费用烟草、电子尼古丁输送系统液体、尼古丁原料、无烟草尼古丁加热混合物等按固定税额计征。</li>
                      <li className="text-base leading-7 text-[#334155]">单纯电子烟设备和 HNB 加热设备本身不按消费税税目征税，但进口时仍需结合 HS 归类确认关税、进口增值税和清关监管要求。</li>
                    </ul>
                  </div>
                )}
                
                {country.tax.exciseTaxTable && (
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <h3 className="text-lg font-bold text-[#2E3F73] mb-4">消费税税率表</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-base border-collapse border-[#D8DDED]">
                        <thead>
                          <tr className="bg-[#E8EDF5]">
                            {country.tax.exciseTaxTable.headers.map((header, idx) => (
                              <th key={idx} className="px-4 py-4 text-left font-bold text-[#2E3F73] border border-[#D8DDED]" style={idx === 0 ? { width: '28%' } : { width: '24%' }}>
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {country.tax.exciseTaxTable.rows.map((row, rowIdx) => (
                            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white/50' : 'bg-[#F3F5FB]'}>
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="px-4 py-4 border border-[#D8DDED] text-[#334155] leading-7">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                
                {country.id === 'russia' && country.tax.policies.find(p => p.title === '最低价格说明') && (
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <h3 className="text-lg font-bold text-[#2E3F73] mb-3">最低价格说明</h3>
                    <ul className="list-disc pl-5 space-y-2 text-[#334155] text-base leading-7">
                      <li>俄罗斯对卷烟、papirosy、加热烟草产品、电子尼古丁输送系统用液体、雪茄、水烟烟草等主要烟草和尼古丁产品设置最低价格或最低零售价格。</li>
                      <li>最低价格依据主要包括第203-FZ号联邦法第7条、俄罗斯政府批准的最低价格确定规则，以及俄罗斯农业部发布的2026年最低价格信息公告。</li>
                      <li>最低价格公告中的产品分类不等于市场准入许可；具体产品仍需结合禁售规则、技术合规、标识、许可和销售限制要求判断。</li>
                    </ul>
                  </div>
                )}
                
                {country.id === 'russia' && country.tax.minimumPriceTable && (
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <h3 className="text-lg font-bold text-[#2E3F73] mb-4">最低价格表</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-base border-collapse border-[#D8DDED]">
                        <thead>
                          <tr className="bg-[#E8EDF5]">
                            {country.tax.minimumPriceTable.headers.map((header, idx) => (
                              <th key={idx} className="px-4 py-4 text-left font-bold text-[#2E3F73] border border-[#D8DDED]" style={idx === 0 ? { width: '42%' } : { width: '58%' }}>
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {country.tax.minimumPriceTable.rows.map((row, rowIdx) => (
                            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white/50' : 'bg-[#F3F5FB]'}>
                              <td className="px-4 py-4 border border-[#D8DDED] text-[#334155] leading-7 font-medium">
                                {row[0]}
                              </td>
                              <td className="px-4 py-4 border border-[#D8DDED] text-[#334155] leading-7">
                                {row[0] === '水烟烟草' ? (
                                  <ul className="list-disc pl-5 space-y-1">
                                    {String(row[1]).split('；').map((item: string, i: number) => (
                                      <li key={i}>{item}</li>
                                    ))}
                                  </ul>
                                ) : (
                                  String(row[1])
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ) : country.id === 'uae' ? (
              <div className="space-y-4">
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-3">主要税种</h3>
                  <p className="text-[#334155] text-base leading-7 mb-4">烟草制品因其特殊性，在阿联酋涉及多种税务规定。主要包括消费税、增值税和企业所得税三类。</p>
                  <p className="text-[#334155] text-base leading-7 mb-4">下面通过表格汇总对比这三种税种的适用范围、税率和企业的注册义务：</p>
                  <div className="overflow-x-auto rounded-xl border border-[#D8DDED]">
                    <table className="w-full text-base min-w-[800px] bg-white">
                      <thead>
                        <tr className="bg-[#E8EDF5]">
                          <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED] w-[15%]">税种</th>
                          <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED] w-[30%]">适用对象 / 范围</th>
                          <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED] w-[20%]">税率</th>
                          <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED] w-[35%]">注册要求及门槛</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white/50">
                          <td className="px-4 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44]">消费税 (Excise Tax)</td>
                          <td className="px-4 py-4 border-b border-r border-[#D8DDED] text-[#334155] leading-7">针对特定有害商品征收的税，包括：烟草制品、电子烟及其液体、能量饮料、含糖饮料等。征税环节为进口、出仓或本地生产释放到市场时。</td>
                          <td className="px-4 py-4 border-b border-r border-[#D8DDED] text-[#334155] leading-7">100%（针对烟草制品、电子烟装置及烟油）；50%（含糖饮料等）等。</td>
                          <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155] leading-7">无营业额门槛。凡从事应税特定有害商品进口、本地生产或经营指定仓库者，均须向FTA注册为应税人，并履行申报缴税义务。</td>
                        </tr>
                        <tr className="bg-[#F3F5FB]">
                          <td className="px-4 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44]">增值税 (VAT)</td>
                          <td className="px-4 py-4 border-b border-r border-[#D8DDED] text-[#334155] leading-7">对几乎所有商品和服务增值额征收的税（少数豁免项目如部分教育、医疗和金融服务除外）。每一笔应税交易由最终消费者承担税负。</td>
                          <td className="px-4 py-4 border-b border-r border-[#D8DDED] text-[#334155] leading-7">5%（标准税率）</td>
                          <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155] leading-7">年应税营业额 ≥ 375,000 AED须注册为增值税纳税人；年营业额在187,500–375,000 AED之间可选择自愿注册；低于187,500 AED则不可注册为VAT纳税人。</td>
                        </tr>
                        <tr className="bg-white/50">
                          <td className="px-4 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44]">企业所得税 (Corporate Tax)</td>
                          <td className="px-4 py-4 border-b border-r border-[#D8DDED] text-[#334155] leading-7">对阿联酋境内开展营业的公司的净利润征收的税（石油和天然气行业及特定自由区合格企业有特殊豁免）。适用于在阿联酋注册的本土公司、符合条件的自由区公司，以及在阿境内有持续经营场所的外国企业。</td>
                          <td className="px-4 py-4 border-b border-r border-[#D8DDED] text-[#334155] leading-7">0%（对年净利润不超过375,000 AED的部分）；9%（对年净利润超出375,000 AED的部分）。</td>
                          <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155] leading-7">无收入门槛（除特定豁免情形外）。几乎所有在阿联酋境内开展业务的法人实体都须按照规定注册企业税，并在规定时限内申报纳税；逾期注册或申报将面临罚款。</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-3">消费税合规要点</h3>
                  <ul className="space-y-3 pl-5 list-disc text-base leading-7 text-[#334155]">
                    <li><span className="font-semibold text-[#263247]">注册义务：</span>从事烟草制品进口、生产的企业必须在联邦税务局(FTA)注册成为消费税应税人。经营保税仓储的指定仓库运营者也需注册。</li>
                    <li><span className="font-semibold text-[#263247]">申报缴纳：</span>企业需要按规定频率（通常为每月）向FTA申报应税库存和移出量，并在期限内缴纳消费税。进口清关时亦需即时缴纳相应消费税税款。</li>
                    <li><span className="font-semibold text-[#263247]">数字税票(Digital Tax Stamp, DTS)：</span>是阿联酋联邦税务局(FTA)针对特定应税消费品（主要是烟草制品）推行的电子追踪标签。每枚数字税票包含防伪和追踪信息，用于确认该商品已注册并缴纳了消费税。所有在阿联酋境内销售的卷烟类产品（包括传统卷烟、加热不燃烧烟弹等）以及水烟烟草等都必须在包装上贴附数字税票。未贴税票的产品不得在市场上销售，也无法通过海关清关。</li>
                    <li><span className="font-semibold text-[#263247]">指定仓库制度：</span>阿联酋允许经批准的指定仓库（Designated Warehouse）暂缓缴税储存应税商品。企业若希望利用此制度，需要申请仓库许可，并对仓库出入库实行严格的税控管理。一旦货物从仓库释放至市场，须立即申报纳税。</li>
                  </ul>
                </div>

                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-3">自由区税务提示</h3>
                  <ul className="space-y-3 pl-5 list-disc text-base leading-7 text-[#334155]">
                    <li>在自由区营业不意味着必然免税、完全免税。</li>
                    <li>除特定豁免情形外，注册在自由区的企业也需要缴纳企业所得税、增值税。</li>
                    <li>自由区货物进入阿联酋大陆市场后，不免除消费税、数字税票或进口监管要求。</li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                {country.tax.exciseTaxTable && (
                  <InfoBlock title="消费税税率表">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse border border-gray-200">
                        <thead>
                          <tr className="bg-blue-50">
                            {country.tax.exciseTaxTable.headers.map((header, idx) => (
                              <th key={idx} className="px-4 py-3 text-left font-semibold text-gray-900 border border-gray-200" style={idx === 0 ? { width: '28%' } : { width: '24%' }}>
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {country.tax.exciseTaxTable.rows.map((row, rowIdx) => (
                            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="px-4 py-3 border border-gray-200 text-gray-700">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </InfoBlock>
                )}
                
                {country.tax.minimumPriceTable && (
                  <InfoBlock title="最低价格表">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {country.tax.minimumPriceTable.rows.map((row, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 border border-blue-100">
                          <div className="font-medium text-gray-900 mb-1">{row[0]}</div>
                          <div className="text-sm text-gray-700 leading-relaxed">{row[1]}</div>
                        </div>
                      ))}
                    </div>
                  </InfoBlock>
                )}
              </>
            )}
          </div>
        </section>

        <section className="mb-8">
          <div className={isRussiaStyle ? "bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
              <div className={isRussiaStyle ? "w-1 h-7 bg-[#4A6290] rounded-full" : "w-1 h-7 bg-blue-600 rounded-full"}></div>
              市场运营规范
            </h2>
            {country.marketOperation.regulations.length > 0 ? (
              country.id === 'russia' ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {country.marketOperation.regulations.map((regulation, index) => (
                    <RuleCard
                      key={index}
                      number={index + 1}
                      title={regulation.category}
                      items={regulation.items}
                    />
                  ))}
                </div>
              ) : country.id === 'uae' ? (
                <div className="space-y-4">
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">1</span>
                      <h3 className="text-lg font-bold text-[#2E3F73]">全面广告禁令</h3>
                    </div>
                    <p className="text-[#334155] text-base leading-7 mb-4">阿联酋对烟草制品实施极为严格的广告、促销和赞助禁令，主要内容如下：</p>
                    <div className="space-y-4">
                      <div className="bg-white/55 border border-white/70 rounded-lg p-4">
                        <h4 className="font-bold text-[#263247] text-base mb-3">广告媒介禁令</h4>
                        <ul className="space-y-2">
                          <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                            <span><span className="font-semibold">禁止大众媒体广告：</span>禁止在报纸、杂志、书籍以及广播、电视、电影等任何传统媒体上刊登烟草广告。</span>
                          </li>
                          <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                            <span><span className="font-semibold">禁止电子媒介宣传：</span>禁止通过互联网、电子邮件、手机短信、社交媒体和电子游戏等发布烟草广告。</span>
                          </li>
                          <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                            <span><span className="font-semibold">禁止户外和场所广告：</span>禁止使用广告牌、灯箱、海报、传单等形式在公共场所宣传烟草。包括店内也不得放置任何鼓励吸烟的宣传品。</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white/55 border border-white/70 rounded-lg p-4">
                        <h4 className="font-bold text-[#263247] text-base mb-3">促销赞助禁令</h4>
                        <ul className="space-y-2">
                          <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                            <span><span className="font-semibold">禁止品牌延伸和赞助：</span>禁止烟草公司赞助各类活动、组织或个人，从而变相宣传其品牌。禁止以企业社会责任为名由烟草企业对外捐助，这被视为变相促销。</span>
                          </li>
                          <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                            <span><span className="font-semibold">禁止产品嫁接宣传：</span>禁止利用烟草制品为其他商品做广告，或反过来利用其他商品广告来推广烟草（例如绝不允许在香烟包装上宣传抽奖活动，也不允许在非烟商品广告中出现香烟形象）。</span>
                          </li>
                          <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                            <span><span className="font-semibold">禁止公关和免费赠品：</span>禁止在任何比赛、活动中将烟草及其相关物品作为奖品或礼物分发。也不得向公众免费派送样品或通过试用装推广新品。</span>
                          </li>
                          <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                            <span><span className="font-semibold">禁止变相促销和优惠：</span>销售过程中不得采取任何形式的变相促销手段来刺激烟草产品销售。法律严格禁止降价折扣、捆绑赠送、买赠优惠等活动。例如不得推出“第二件半价”或“买二送一”的卷烟促销。</span>
                          </li>
                          <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                            <span>禁止以奖品或礼品形式分发烟草及相关物品。例如不得附赠打火机等赠品。商家亦不可向顾客派发免费样品试用。</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white/55 border border-white/70 rounded-lg p-4">
                        <h4 className="font-bold text-[#263247] text-base mb-3">包装和变相营销限制</h4>
                        <ul className="space-y-2">
                          <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                            <span>包装本身不作为广告，但产品包装本身及其上所印内容亦受限。包装上不能出现公司名称以外的品牌延伸宣传，不能宣称任何健康好处或暗示风险较低。例如禁止标榜“有机烟草”“无害电子烟”等误导性字样。一些国家常见的“低焦油”“薄荷提神”等卖点在阿联酋都是明令禁止印于包装上的。监管部门也禁止包装内附带促销券或积分卡等营销手段。总之，包装只能传递法规许可的信息（品牌、警示、成分等），不可成为广告载体。</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">2</span>
                        <h3 className="text-lg font-bold text-[#2E3F73]">销售与陈列</h3>
                      </div>
                    <ul className="space-y-3">
                      <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span>不得向未满18岁人员销售烟草或烟草制品</span>
                      </li>
                      <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span>不得通过自动售货机销售烟草或烟草制品</span>
                      </li>
                      <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span>不得通过互联网、电商平台或社交媒体等电子渠道销售烟草制品</span>
                      </li>
                      <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span>不得在宗教场所、教育机构、医疗和体育设施等法定禁烟场所内销售或使用烟草产品</span>
                      </li>
                      <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span>不得在距清真寺100米、学校150米范围内开设烟草销售点或水烟提供场所</span>
                      </li>
                    </ul>
                  </div>

                    <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">3</span>
                        <h3 className="text-lg font-bold text-[#2E3F73]">包装与标签</h3>
                      </div>
                    <ul className="space-y-3">
                      <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span>烟草产品包装应包含规定的健康警示和必要产品信息</span>
                      </li>
                      <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span>不得在包装上使用误导性用语或附加促销元素</span>
                      </li>
                      <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span>包装标签应与产品认证、进口申报和销售资料保持一致</span>
                      </li>
                      <li className="text-[#334155] text-base leading-7 flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span>涉及戒烟、治疗、减害或健康功效的表达，应谨慎处理并确认是否需主管机关审批</span>
                      </li>
                    </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {country.marketOperation.regulations.map((regulation, index) => {
                    if (country.emirateDifferences && regulation.category === '主要酋长国差异') {
                      return (
                        <InfoBlock key={index} title={regulation.category} isRussia={country.id === 'russia'}>
                          <EmirateDifferencesTable data={country.emirateDifferences} />
                        </InfoBlock>
                      );
                    }
                    
                    if (country.id === 'russia') {
                      return (
                        <div key={index} className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5 shadow-none">
                          <h3 className="text-base font-bold text-[#2E3F73] mb-3">{regulation.category}</h3>
                          <ul className="space-y-3">
                            {regulation.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-[#334155] text-base leading-7 flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    
                    return (
                      <div key={index} className="bg-white border border-blue-200 border-l-4 border-l-blue-600 rounded-xl p-5 shadow-sm">
                        <h3 className="text-base font-bold text-blue-900 mb-3">{regulation.category}</h3>
                        <ul className="space-y-3">
                          {regulation.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-700 leading-relaxed flex items-start gap-3">
                              <span className="text-blue-600 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )
            ) : (
              <>
                {country.marketOperation.marketingRestrictions && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">营销限制</h3>
                    <p className="text-gray-700">{country.marketOperation.marketingRestrictions}</p>
                  </div>
                )}
                {country.marketOperation.displaySales && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">销售与陈列</h3>
                    <p className="text-gray-700">{country.marketOperation.displaySales}</p>
                  </div>
                )}
                {!country.marketOperation.marketingRestrictions && !country.marketOperation.displaySales && (
                  <p className="text-gray-500 italic">暂无市场运营规范数据</p>
                )}
              </>
            )}
          </div>
        </section>

        <section className="mb-8">
          <div className={isRussiaStyle ? "bg-white border border-[#D8DDED] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <div className="flex items-center gap-3 mb-6">
              {isRussiaStyle ? (
                <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
              ) : (
                <span className="text-red-600 text-2xl">⚠️</span>
              )}
              <h2 className="text-2xl font-bold text-[#243B63]">趋势预判与红线警告</h2>
            </div>
            {country.id === 'uae' ? (
              <div className="space-y-4">
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">趋势预判</h3>
                  <p className="text-[#334155] text-base leading-7 mb-4">目前没有明显信号显示阿联酋将对传统卷烟、HNB烟支或电子烟实施全国性全面禁令。监管方向更偏向于把相关产品纳入许可、产品认证、消费税、数字税票和地方销售管理体系，而不是对全部品类一概封禁。</p>
                  <p className="text-[#334155] text-base leading-7">阿联酋市场的主要风险不是产品原则上不能做，而是合规链条是否完整。特别需要关注：产品认证、数字税票、消费税、自由区与大陆销售边界、地方销售许可、广告促销限制和未成年人保护。尼古丁袋、尼古丁口含膜等边界产品已有新的技术监管方向，但进入市场前仍应按具体产品确认适用路径。</p>
                </div>
                
                <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-bold text-[#DC2626]">合规红线清单</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-[#7F1D1D] text-base mb-2">生产销售</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁未经许可，包括无证或超许可范围，在阿联酋境内生产、销售烟草制品及其替代品，如电子烟、加热不燃烧产品等</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁在未完成 ECAS 认证、未取得 CoC 的情况下，销售烟草制品以及电子烟产品</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#7F1D1D] text-base mb-2">产品类型</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁向阿联酋进口或在阿联酋分销仿制烟草的糖果或玩具等产品，例如糖果烟、玩具烟斗</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁向阿联酋进口或在阿联酋分销含烟草的咀嚼制品</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#7F1D1D] text-base mb-2">销售渠道</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁在未取得主管机关许可的任何场所展示或销售烟草制品，销售点须持证经营</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁通过自动售货机销售烟草制品以及相关产品</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁通过互联网、电商平台或社交媒体等电子渠道销售烟草制品</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁在宗教场所、教育机构、医疗和体育设施等法定禁烟场所内销售或使用烟草产品</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁在距清真寺100米、学校150米范围内开设烟草销售点或水烟提供场所</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#7F1D1D] text-base mb-2">销售对象</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁向未满18岁的未成年人销售或提供任何烟草及含尼古丁产品</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#7F1D1D] text-base mb-2">营销活动</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁任何形式的烟草广告、促销和赞助活动，涵盖平面、广播、户外、网络等媒介</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁通过赠送、抽奖等方式向公众派发烟草制品或相关赠品，如免费样品、比赛奖品</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁对烟草制品进行打折、捆绑销售等促销</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#7F1D1D] text-base mb-2">包装要求</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁在包装上使用误导性用语或附加促销元素，例如“低焦油”“赠券”等</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#DC2626] mt-1.5">✗</span>
                          <span className="text-[#334155] leading-7">严禁未贴附数字税票即在阿联酋销售适用税票要求的烟草制品</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : country.id === 'china' || isRussiaStyle ? (
              <div className="space-y-4">
                <div className={isRussiaStyle ? "bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5" : "bg-blue-50 border border-blue-200 rounded-xl p-5"}>
                  <h3 className={isRussiaStyle ? "text-lg font-bold text-[#2E3F73] mb-4" : "text-lg font-bold text-blue-900 mb-4"}>趋势预判</h3>
                  <div className="space-y-4">
                    {country.trendsWarnings.trendAnalysis.split(/\n\n+/).map((section, index) => {
                      const numberedTitleMatch = section.match(/^(\d+[.、]\s*[^\n]+)(?:\n([\s\S]*))?$/);
                      if (numberedTitleMatch) {
                        const [, title, content] = numberedTitleMatch;
                        return (
                          <div key={index} className="space-y-2">
                            <h4 className={isRussiaStyle ? "font-bold text-[#243B63] text-base" : "font-bold text-gray-900 text-lg"}>{title}</h4>
                            {content && (
                              <div className={isRussiaStyle ? "text-[#334155] space-y-2" : "text-gray-800 space-y-2"}>
                                {content.split('\n').filter(line => line.trim()).map((paragraph, pIndex) => (
                                  <p key={pIndex}>{paragraph}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }
                      return (
                        <p key={index} className={isRussiaStyle ? "text-[#334155] leading-relaxed" : "text-gray-800 leading-relaxed"}>{section}</p>
                      );
                    })}
                  </div>
                </div>
                
                <div className={isRussiaStyle ? "bg-[#FEF2F2] border border-[#FCA5A5] rounded-xl p-5" : "bg-red-50 border-2 border-red-200 rounded-xl p-5"}>
                  <div className="flex items-center gap-2 mb-4">
                    {!isRussiaStyle && <div className="w-1 h-6 bg-red-600 rounded-full"></div>}
                    <h3 className={isRussiaStyle ? "text-lg font-bold text-[#DC2626]" : "text-lg font-bold text-red-800"}>合规红线清单</h3>
                  </div>
                  <ul className="space-y-2">
                    {country.trendsWarnings.redLines.map((line, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className={isRussiaStyle ? "text-[#DC2626] mt-1.5" : "text-red-600 mt-1.5"}>✗</span>
                        <span className={isRussiaStyle ? "text-[#334155] leading-relaxed" : "text-gray-800 leading-relaxed"}>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">趋势预判</h3>
                  <FormattedText text={country.trendsWarnings.trendAnalysis} />
                </div>
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-red-600 rounded-full"></div>
                    <h3 className="text-lg font-bold text-red-800">红线警告</h3>
                  </div>
                  <ul className="space-y-3">
                    {country.trendsWarnings.redLines.map((line, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-red-600 mt-1.5">✗</span>
                        <span className="text-gray-800 leading-relaxed">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mb-8">
          <div className={isRussiaStyle ? "bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
              <div className={isRussiaStyle ? "w-1 h-7 bg-[#4A6290] rounded-full" : "w-1 h-7 bg-blue-600 rounded-full"}></div>
              重要资讯
            </h2>
            
            {country.id === 'russia' && (
              <div className="pb-6">
                <h3 className="text-lg font-bold text-[#2E3F73] mb-4">法规 / 政策文件</h3>
                
                <div className="bg-[#E8EDF5] border border-[#D8DDED] rounded-lg p-4 mb-6">
                  <p className="text-sm text-[#64748B] leading-7">
                    以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。俄罗斯相关法律、政府令和部门公告可能经过后续修订或按年度更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <h4 className="font-bold text-[#2E3F73] text-lg mb-4">市场准入与生产流通监管</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <a href="https://publication.pravo.gov.ru/document/0001202306130005" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          《俄罗斯联邦第203-FZ号法〈关于烟草制品、烟草产品、尼古丁产品及其生产原料的生产和流通国家监管〉》
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          <span className="font-semibold">主要内容：</span>俄罗斯烟草、尼古丁产品及相关原料生产流通的基础法律，主要影响生产、进口、出口、储存、供应、生产流通许可及相关监管要求。页面链接为官方公布文本；后续适用需结合后续修正及现行有效文本确认。
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-[#D8DDED]">
                        <a href="https://publication.pravo.gov.ru/Document/View/0001201302250007" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          《俄罗斯联邦第15-FZ号法〈关于保护公民健康免受环境烟草烟雾影响、烟草消费后果或尼古丁产品消费后果影响〉》
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          <span className="font-semibold">主要内容：</span>俄罗斯控烟和市场销售限制的核心法律，主要影响销售地点、销售方式、产品展示、广告促销、未成年人保护、公共场所使用限制和特定产品禁售。该法后续曾多次修订，页面链接为2013年官方公布文本；涉及尼古丁产品、禁售范围等问题时，应结合后续修正后的现行文本确认。
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <h4 className="font-bold text-[#2E3F73] text-lg mb-4">产品技术合规与分类规则</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <a href="https://eec.eaeunion.org/comission/department/deptexreg/tr/tabac.php" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          《欧亚经济联盟烟草制品技术法规》（TR CU 035/2014）
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          <span className="font-semibold">主要内容：</span>欧亚经济联盟层面的烟草制品技术合规规则，主要影响烟草制品的技术要求、包装标签、健康警示、消费者信息和符合性声明。适用俄罗斯市场时，通常需要与俄罗斯国内生产流通、销售限制、标识追溯、消费税和最低价格规则一并判断。
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-[#D8DDED]">
                        <a href="https://www.kremlin.ru/acts/bank/28603" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          《俄罗斯联邦第268-FZ号法〈无烟烟草产品技术法规〉》
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          <span className="font-semibold">主要内容：</span>无烟烟草产品的技术识别和技术合规规则，主要涉及非吸烟烟草产品的技术要求、识别、标签和合格评定。该技术法规本身不等于市场准入许可；具体产品能否进入俄罗斯市场，还需结合第15-FZ号法的禁售规则、第203-FZ号法的生产流通监管、数字标识、最低价格和销售限制判断。
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <h4 className="font-bold text-[#2E3F73] text-lg mb-4">数字标识与追溯规则</h4>
                    
                    <div>
                      <a href="https://publication.pravo.gov.ru/Document/View/0001201903060010" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                        《俄罗斯联邦政府第224号令〈关于批准烟草产品识别标识规则等〉》
                      </a>
                      <p className="text-sm text-[#334155] leading-6">
                        <span className="font-semibold">主要内容：</span>烟草产品数字标识和追溯规则的基础政府令，主要影响赋码、贴码、流转信息报送及市场追溯。后续俄罗斯对烟草、尼古丁产品及相关原料的标识和追溯规则已有扩展，具体适用品类和操作要求需结合最新修订、Chestny ZNAK系统规则及主管机关口径确认。
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <h4 className="font-bold text-[#2E3F73] text-lg mb-4">消费税规则</h4>
                    
                    <div>
                      <div className="font-semibold text-[#243B63] text-base mb-2">
                        《俄罗斯联邦税法典》消费税规则
                      </div>
                      <p className="text-sm text-[#334155] leading-6">
                        俄罗斯烟草、加热烟草、电子烟液、尼古丁原料、无烟草尼古丁加热混合物等产品的消费税主要依据《俄罗斯联邦税法典》确定。消费税税目和税率按产品类型和年度列明，页面中的2026—2028年税率应以税法典现行有效文本为准。
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <h4 className="font-bold text-[#2E3F73] text-lg mb-4">最低价格规则</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <a href="https://publication.pravo.gov.ru/document/0001202306130005" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          规则依据：第203-FZ号法第7条
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          <span className="font-semibold">主要内容：</span>第203-FZ号法第7条是烟草产品、尼古丁产品最低价格或最低零售价格规则的上位法律依据。具体计算方式和年度数值还需要结合政府规则和农业部年度信息公告确认。
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-[#D8DDED]">
                        <div className="font-semibold text-[#243B63] text-base mb-2">
                          俄罗斯政府最低价格确定规则
                        </div>
                        <p className="text-sm text-[#334155] leading-6">
                          <span className="font-semibold">主要内容：</span>最低价格不是由一个文件单独完成，通常由第203-FZ号法第7条、俄罗斯政府批准的最低价格确定规则，以及俄罗斯农业部年度信息公告共同构成。卷烟、papirosy，其他烟草产品，以及尼古丁产品分别适用不同的最低价格发布口径。
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-[#D8DDED]">
                        <a href="https://mcx.gov.ru/ministry/departments/departament-pishchevoy-i-pererabatyvayushchey-promyshlennosti/industry-information/info-vinogradarstvo-vinodelie-i-tabachnaya-produktsiya/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          俄罗斯农业部2026年最低价格信息公告
                        </a>
                        <p className="text-sm text-[#334155] leading-6 mb-3">
                          <span className="font-semibold">主要内容：</span>该页面为俄罗斯农业部"葡萄种植、葡萄酒和烟草产品"信息页，集中发布烟草及尼古丁产品最低价格相关信息公告。
                        </p>
                        
                        <div className="ml-4 pl-4 border-l-2 border-[#D8DDED] space-y-3">
                          <div>
                            <a href="https://mcx.gov.ru/upload/iblock/f9d/kerwlytu1facd9hpgt98jp71sdtf6ri4.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#263247] text-base mb-1 hover:underline block">
                              1. 卷烟、papirosy 2026年统一最低价格信息公告
                            </a>
                            <p className="text-sm text-[#334155]">
                              <span className="font-semibold">主要内容：</span>确认2026年卷烟、papirosy统一最低价格为153卢布/包。
                            </p>
                          </div>
                          
                          <div>
                            <a href="https://mcx.gov.ru/upload/iblock/987/u63qxprbo9xrcsuayjbfnhn9ed3o3b03.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#263247] text-base mb-1 hover:underline block">
                              2. 尼古丁产品2026年最低价格信息公告
                            </a>
                            <p className="text-sm text-[#334155]">
                              <span className="font-semibold">主要内容：</span>列明加热烟草产品、电子尼古丁输送系统用液体、一次性设备内液体、未列明尼古丁产品等最低价格。
                            </p>
                          </div>
                          
                          <div>
                            <a href="https://mcx.gov.ru/upload/iblock/852/cxse5pvp2iotik4yv28jnma3r33crey5.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#263247] text-base mb-1 hover:underline block">
                              3. 烟草产品2026年最低价格信息公告
                            </a>
                            <p className="text-sm text-[#334155]">
                              <span className="font-semibold">主要内容：</span>列明雪茄、水烟烟草、烟斗烟、鼻烟、咀嚼烟草及其他列明烟草产品的最低价格。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {country.id === 'uae' && (
              <div className="pb-6">
                <h3 className="text-lg font-bold text-[#2E3F73] mb-4">法规 / 政策文件</h3>
                
                <div className="bg-[#E8EDF5] border border-[#D8DDED] rounded-lg p-4 mb-6">
                  <p className="text-sm text-[#64748B] leading-7">
                    以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。阿联酋相关法律、内阁决议和技术标准可能经过后续修订或更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <h4 className="font-bold text-[#2E3F73] text-lg mb-4">烟草控制与产品准入</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <a href="https://uaelegislation.gov.ae/en/legislations/1206" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          《联邦法第 15 号（2009 年）—烟草控制法》
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          阿联酋烟草控制基础法律，覆盖烟草产品、销售限制、广告促销限制、未成年人保护、公共健康要求和违法责任。
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-[#D8DDED]">
                        <a href="https://uaelegislation.gov.ae/en/legislations/1205" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          《内阁决议第 24 号（2013 年）—烟草控制法执行细则》
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          细化烟草控制法的执行规则，覆盖烟草销售点、水烟场所、广告促销、包装标签、公共场所使用和执法要求。
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#D8DDED]">
                        <a href="https://uaelegislation.gov.ae/en/legislations/2310" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          《内阁决议第 98 号（2023 年）—烟草种植和烟草产品制造许可规则》
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          规范烟草种植、烟草产品制造及相关许可要求，影响在阿联酋境内从事烟草种植、制造、加工等活动的主体准入和许可安排。
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#D8DDED]">
                        <a href="https://assets.tobaccocontrollaws.org/uploads/legislation/United%20Arab%20Emirates/United-Arab-Emirates-UAE.S-50302018.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          UAE.S 5030:2018《电子尼古丁产品（传统烟草产品等同物）》
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          阿联酋电子雾化产品、烟油、补充装和含烟草加热烟草产品的重要技术法规，主要影响电子尼古丁产品的认证、包装、标签、成分、进口和销售要求。
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#D8DDED]">
                        <a href="https://uaelegislation.gov.ae/en/legislations/2787" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          《内阁决议第 2 号（2025 年）—无烟草尼古丁袋技术法规》
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          将无烟草尼古丁袋技术法规列为阿联酋强制性技术法规，为无烟草尼古丁袋建立正式技术监管基础。
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#D8DDED]">
                        <a href="https://tobaccointelligence.com/wp-content/uploads/2025/03/UAE.S-5061-2025.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          UAE.S 5061:2025《无烟草尼古丁袋》
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          规范无烟草尼古丁袋的产品定义、技术指标、成分、包装标签、健康警示、儿童防护和上市前文件要求，是无烟草尼古丁袋进入阿联酋市场的重要合规依据。该链接为非官方转载 PDF，用于内部核验；正式适用以 MoIAT/阿联酋官方标准文本为准。
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <h4 className="font-bold text-[#2E3F73] text-lg mb-4">税务与数字税票</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <a href="https://tax.gov.ae/Datafolder/Files/Legislation/2025/Federal%20Decree-Law%20No.%207%20of%202017%20and%20amendments%20-%20publishing%2003%2012%202025.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          《联邦法令第 7 号（2017 年）—消费税法》
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          阿联酋消费税基础法律，规定消费税纳税人、应税货物、税务注册、申报缴纳、记录保存及处罚等基本规则。
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#D8DDED]">
                        <a href="https://uaelegislation.gov.ae/en/legislations/1225" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          《内阁决议第 37 号（2017 年）—消费税法执行条例》
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          细化消费税法的执行规则，涉及应税货物、应税人、注册、申报、缴税、指定区域 / 指定仓库等操作要求。
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#D8DDED]">
                        <a href="https://uaelegislation.gov.ae/en/legislations/3983" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          《内阁决议第 52 号（2019 年）—消费税货物、税率与消费税价格》
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          规定消费税应税货物、适用税率及消费税价格计算机制，覆盖烟草制品、电子吸烟设备及相关液体等应税消费品。
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#D8DDED]">
                        <a href="https://tax.gov.ae/en/taxes/excise.tax/excise.tax.topics/digital.tax.stamps.aspx" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
                          阿联酋联邦税务局数字税票规则
                        </a>
                        <p className="text-sm text-[#334155] leading-6">
                          规范卷烟、水烟烟草、加热卷烟产品等适用数字税票产品的进口和本地销售。适用数字税票要求的产品，未完成数字税票安排通常不得进口进入阿联酋或在本地市场销售。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-bold text-[#2E3F73] mb-4">新闻 / 执法动态</h3>
                  <p className="text-[#64748B] text-base">暂无。</p>
                </div>
              </div>
            )}
            
            {country.id !== 'uae' && (
            <div className={isRussiaStyle ? "mt-6 pt-6 border-t border-[#D8DDED]" : ""}>
              <h3 className={isRussiaStyle ? "text-lg font-bold text-[#2E3F73] mb-3" : "text-lg font-medium text-gray-900 mb-3"}>新闻 / 执法动态</h3>
              {country.id === 'russia' ? (
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-lg p-4">
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-[#334155] text-base">
                      <a href="https://www.2firsts.com/news/russia-approves-law-requiring-sales-permits-for-cigarettes-and-e-cigarettes-starting-march-1-2026" target="_blank" rel="noopener noreferrer" className="hover:underline">俄罗斯推进烟草和尼古丁产品批发 / 零售许可改革</a>
                    </li>
                    <li className="text-[#334155] text-base">
                      <a href="https://interfax.com/newsroom/top-stories/116871/" target="_blank" rel="noopener noreferrer" className="hover:underline">俄罗斯批发 / 零售许可改革时间调整相关报道</a>
                    </li>
                    <li className="text-[#334155] text-base">
                      <a href="https://en.iz.ru/en/2019182/2026-01-01/excise-taxes-tobacco-products-have-been-indexed-russia-january-1" target="_blank" rel="noopener noreferrer" className="hover:underline">俄罗斯2026年烟草产品消费税调整报道</a>
                    </li>
                  </ul>
                </div>
              ) : country.references.news.length > 0 ? (
                <ul className="space-y-2">
                  {country.references.news.map((news, index) => (
                    <li key={index}>
                      <a href={news.url} className={isRussiaStyle ? "text-[#2E3F73] hover:underline" : "text-blue-600 hover:underline"}>{news.title}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">资料收录中...</p>
              )}
            </div>
            )}
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-[#F2F4F7] border border-[#E1E5EA] rounded-xl p-5">
            <p className="text-sm text-[#64748B] leading-relaxed">
              免责声明：本网站所载内容仅供一般信息参考，不构成法律意见、合规意见、税务意见或其他专业意见，也不应作为任何商业决策、市场准入、产品注册、进口、销售或宣传行为的依据。相关法律法规、监管口径和执法实践可能随时调整；如涉及具体产品、交易安排或合规判断，请结合最新法规、主管机关口径及当地专业顾问意见进行确认。
            </p>
          </div>
        </section>

      </main>

      <footer className="bg-white border-t border-[#D8E0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-[#64748B] text-sm">© 2024 全球法规动态追踪. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

