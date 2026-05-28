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
    <div className="bg-[#EEF5FC] border border-[#BFD3E8] border-l-4 border-l-[#2F5F93] rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-7 rounded-full bg-[#2F5F93]" />
        <h2 className="text-2xl font-bold text-[#1E3A5F]">{title}</h2>
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

const StatusCard = ({ status, title, subtitle, content }: { status: 'green' | 'amber' | 'red'; title: string; subtitle?: string; content: React.ReactNode }) => {
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
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${s.badge}`}>{s.label}</span>
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
    <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5 shadow-none hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-3">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#4A6290] text-white text-sm font-bold flex-shrink-0">
          {number}
        </span>
        <h4 className="font-bold text-[#2E3F73] text-base">{title}</h4>
      </div>
      {filteredItems.length > 0 && (
        <ul className="space-y-2 ml-10">
          {filteredItems.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
              <span className="text-[#334155] text-base leading-7">{item}</span>
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
    blue: { bg: 'bg-[#EEF5FC] border-[#BFD3E8]', title: 'text-[#1E3A5F]', body: 'text-[#334155]', borderLeft: 'border-l-[#2F5F93]' },
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
    blue: { bg: 'bg-[#EEF5FC] border-[#BFD3E8]', title: 'text-[#1E3A5F]', body: 'text-[#334155]' },
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
    <div className={isRussia ? "overflow-x-auto rounded-xl border border-[#D8E3F0] shadow-none" : "overflow-x-auto rounded-xl border border-blue-200 shadow-sm"}>
      <table className="w-full text-base min-w-[600px] bg-white">
        <thead>
          <tr className={isRussia ? "bg-[#E6EEF8]" : "bg-blue-50"}>
            {data.headers.map((header, index) => (
              <th key={index} className={`px-5 py-4 text-left font-bold ${isRussia ? "text-[#1F4E79] border-b-2 border-[#D8E3F0]" : "text-blue-900 border-b-2 border-blue-200"} ${index === 0 ? 'w-48 min-w-[140px]' : ''}`}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(data.rows as (string | string[])[]).map((row, rowIndex) => (
            <tr key={rowIndex} className={isRussia ? (rowIndex % 2 === 0 ? 'bg-white/50' : 'bg-[#F8FBFF]') : (rowIndex % 2 === 0 ? 'bg-white' : 'bg-blue-50/50')}>
              {(row as (string | string[])[]).map((cell, cellIndex) => (
                <td key={cellIndex} className={`px-5 py-4 border-b ${isRussia ? "border-[#D8E3F0]" : "border-blue-100"} ${cellIndex === 0 ? (isRussia ? "font-semibold text-[#1F2A44]" : "font-semibold text-gray-900") : ''}`}>
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
          <Link href="/" className="text-[#64748B] hover:text-[#2F5F93] flex items-center gap-2 transition-colors">
            <span className="text-lg">←</span> 返回首页
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-8">
          <h1 className="text-5xl font-bold text-[#0F172A] mb-6">{country.name}</h1>
        </section>

        {country.id === 'russia' && (
          <section className="mb-8">
            <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
                <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
                本季监管动态
              </h2>
              <p className="text-[#334155] text-base leading-7 mb-6">
                2026年以来，俄罗斯监管重点继续集中在产品许可、数字标识、税费和价格监管。烟草和尼古丁产品仍有合法准入空间，但经营端控制持续加强。
              </p>
              <div className="space-y-4">
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#373F7A] text-base mb-2">批发 / 零售许可</h4>
                      <p className="text-[#334155] text-base leading-7">烟草和尼古丁产品批发、零售许可改革继续推进。此前方案曾提出2026年分阶段实施，但实际上改革时间和落地节奏仍在调整，暂无确定时间表。</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#373F7A] text-base mb-2">数字标识</h4>
                      <ul className="space-y-2 text-[#334155] text-base leading-7">
                        <li className="flex items-start gap-2">
                          <span className="text-[#64748B]">•</span>
                          <span>可重复使用电子烟设备及类似个人电加热雾化设备仍处于标识试验 / 过渡阶段。</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#64748B]">•</span>
                          <span>烟油、含液体烟弹、设备与液体组合产品中的液体部分，应继续按尼古丁液体或无尼古丁液体规则判断，仍需重点关注相关标识和追溯要求。</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#373F7A] text-base mb-2">税费和最低价格</h4>
                      <ul className="space-y-2 text-[#334155] text-base leading-7">
                        <li className="flex items-start gap-2">
                          <span className="text-[#64748B]">•</span>
                          <span>俄罗斯对烟草、尼古丁及相关制品等列明2026—2028年消费税税率。</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#64748B]">•</span>
                          <span>2026年起至2028年，前述产品的税率继续提高。</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {country.id !== 'russia' && (
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
          <div className={country.id === 'russia' ? "bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
              <div className={country.id === 'russia' ? "w-1 h-7 bg-[#4A6290] rounded-full" : "w-1 h-7 bg-blue-600 rounded-full"}></div>
              {country.id === 'russia' ? '监管体系' : '监管体系与产品口径'}
            </h2>
            
            {country.id === 'russia' ? (
              <div className="space-y-6">
                <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#4A6290]"></span>
                    <h3 className="text-lg font-bold text-[#2E3F73]">核心特征</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-base leading-7 text-[#334155]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                      <span>俄罗斯属于烟草及尼古丁产品强监管市场。</span>
                    </li>
                    <li className="flex items-start gap-2 text-base leading-7 text-[#334155]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5E82A8] mt-1.5 flex-shrink-0"></span>
                      <span>传统烟草、加热烟草、电子烟制品等产品有合规准入空间，但生产、进口、流通、标识、税费、价格和销售环节均受到较强监管。</span>
                    </li>
                    <li className="flex items-start gap-2 text-base leading-7 text-[#334155]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5E82A8] mt-1.5 flex-shrink-0"></span>
                      <span>无烟烟草产品，以及口含、吮吸、鼻吸、咀嚼类尼古丁产品，禁止批发和零售。</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#4A6290]"></span>
                    <h3 className="text-lg font-bold text-[#2E3F73]">规则体系</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-base leading-7 text-[#334155]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                      <span>欧亚经济联盟技术规则主要影响烟草制品的技术要求、包装标签、健康警示、消费者信息和符合性声明。</span>
                    </li>
                    <li className="flex items-start gap-2 text-base leading-7 text-[#334155]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                      <span>俄罗斯国内监管规则主要影响生产流通许可、销售限制、广告展示、数字标识、消费税、最低价格和法律责任。</span>
                    </li>
                    <li className="flex items-start gap-2 text-base leading-7 text-[#334155]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                      <span>对同一产品，通常需要同时判断欧亚经济联盟技术合规要求和俄罗斯国内市场准入、流通及销售规则。</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#4A6290]"></span>
                    <h3 className="text-lg font-bold text-[#2E3F73]">监管部门</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="text-base leading-7 text-[#334155]">
                      <span className="font-semibold text-[#263247]">俄罗斯联邦酒精和烟草市场监管局：</span>负责烟草、尼古丁产品及相关原料的生产流通许可和监管。
                    </li>
                    <li className="text-base leading-7 text-[#334155]">
                      <span className="font-semibold text-[#263247]">俄罗斯联邦消费者权益保护和公益监督局：</span>负责消费者保护、公共卫生、销售端检查、标签、未成年人保护和控烟执法。
                    </li>
                    <li className="text-base leading-7 text-[#334155]">
                      <span className="font-semibold text-[#263247]">俄罗斯联邦税务局：</span>负责消费税、税务申报和涉税监管。
                    </li>
                    <li className="text-base leading-7 text-[#334155]">
                      <span className="font-semibold text-[#263247]">俄罗斯海关机关：</span>负责进口申报、商品归类、边境查验、进口税费和走私查处。
                    </li>
                    <li className="text-base leading-7 text-[#334155]">
                      <span className="font-semibold text-[#263247]">俄罗斯联邦反垄断局：</span>负责广告、促销、赞助和不正当竞争监管。
                    </li>
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

        {country.id === 'russia' && (
          <section className="mb-8">
            <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
                <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
                产品准入与监管口径
              </h2>
              
              <div className="space-y-6">
                <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#4A6290]"></span>
                    <h3 className="text-lg font-bold text-[#2E3F73]">1. 传统烟草制品</h3>
                  </div>
                  <div className="mb-4">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">产品定性</div>
                    <ul className="space-y-2 text-base leading-7 text-[#334155]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span>根据 TR CU 035/2014，烟草制品是全部或部分以烟草叶为原料制成，并以消费者包装投放市场的产品。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span>烟草制品主要包括：传统卷烟、雪茄、小雪茄、烟丝、烟斗烟、水烟烟草，以及 papirosy（俄式纸嘴卷烟，即一端为烟草段、另一端为较长中空纸嘴的传统燃烧型烟草制品）。</span>
                      </li>
                    </ul>
                  </div>
                  <StatusCard
                    status="green"
                    title="适用产品：传统卷烟、雪茄、小雪茄、烟丝、烟斗烟、水烟烟草、papirosy。"
                    content="主要合规要点：产品本身可准入，主要关注 TR CU 035/2014 符合性声明、生产或进口投入流通许可、数字标识、消费税、最低价格、包装标签、健康警示和销售限制。"
                  />
                </div>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#4A6290]"></span>
                    <h3 className="text-lg font-bold text-[#2E3F73]">2. 加热烟草产品</h3>
                  </div>
                  <div className="mb-4">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">产品定性</div>
                    <ul className="space-y-2 text-base leading-7 text-[#334155]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span>第15-FZ号法将加热烟草产品列入尼古丁产品范围。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span>HNB烟支通常指含烟草材料、通过加热装置加热后供消费者吸入的产品。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span>监管上按加热烟草产品、烟草产品或尼古丁产品判断，不按 snus、nasvay、咀嚼烟草、鼻烟等无烟烟草产品处理。</span>
                      </li>
                    </ul>
                  </div>
                  <StatusCard
                    status="green"
                    title="适用产品：HNB烟支、加热消费用烟草、含加热烟草产品。"
                    content="主要合规要点：产品本身可准入，重点关注生产或进口投入流通许可、数字标识、消费税、最低价格、包装标签和销售限制。"
                  />
                </div>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#4A6290]"></span>
                    <h3 className="text-lg font-bold text-[#2E3F73]">3. 电子烟及液体产品</h3>
                  </div>
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
                            <span>单纯电子烟设备本身的消费税已经取消。</span>
                          </li>
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
                              <span>含液体烟弹和设备与液体组合产品的核心风险在液体部分，液体部分按尼古丁液体或无尼古丁液体判断。</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                              <span>设备部分按尼古丁产品使用系统 / 装置判断。</span>
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
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#4A6290]"></span>
                    <h3 className="text-lg font-bold text-[#2E3F73]">4. 无烟烟草及口含 / 鼻吸 / 咀嚼类尼古丁产品</h3>
                  </div>
                  <div className="mb-4">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">产品定性</div>
                    <ul className="space-y-2 text-base leading-7 text-[#334155]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span>根据第268-FZ号法，无烟烟草产品是通过吮吸、咀嚼或鼻吸等方式使用的烟草产品，典型产品包括 snus（湿润口含烟草制品）、nasvay（中亚地区常见的口含 / 咀嚼型无烟烟草制品）、咀嚼烟草和鼻烟。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span>尼古丁袋、尼古丁口含膜、食品型尼古丁产品以及含尼古丁粉末、混合物等产品，通常属于通过口含、吮吸、咀嚼或鼻吸方式摄入尼古丁的产品。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span>该类产品与 HNB烟支不同，不通过加热装置产生可吸入气溶胶。</span>
                      </li>
                    </ul>
                  </div>
                  <StatusCard
                    status="red"
                    title="适用产品：snus、nasvay、咀嚼烟草、鼻烟、尼古丁袋、尼古丁口含膜、食品型尼古丁产品，以及其他口含、吮吸、鼻吸、咀嚼类烟草 / 尼古丁产品。"
                    content="主要限制：禁止批发和零售。第268-FZ号法下的技术识别规则不改变第15-FZ号法项下的禁售结论。"
                  />
                </div>
                
                <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#4A6290]"></span>
                    <h3 className="text-lg font-bold text-[#2E3F73]">5. 原料及辅材</h3>
                  </div>
                  <div className="mb-5">
                    <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-sm font-semibold mb-3">产品定性</div>
                    <ul className="space-y-2 text-base leading-7 text-[#334155]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span>第203-FZ号法将烟草制品、烟草产品、尼古丁产品及其生产原料纳入生产流通监管。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span>烟叶、reconstituted tobacco、烟草原料、尼古丁原料通常属于生产链条中的原料或半成品，与消费者可直接使用的烟草制品、HNB烟支、电子烟液、尼古丁袋等成品不同。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span>俄罗斯公开法规资料未见将滤嘴棒、爆珠、香精香料等普通烟用辅材统一定义为烟草制品或尼古丁产品。该类产品通常按成分、用途、海关归类和下游产品用途判断。</span>
                      </li>
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
            </div>
          </section>
        )}

        {country.id !== 'russia' && (
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
          <div className={country.id === 'russia' ? "bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
              <div className={country.id === 'russia' ? "w-1 h-7 bg-[#4A6290] rounded-full" : "w-1 h-7 bg-blue-600 rounded-full"}></div>
              合规资质
            </h2>
            {country.compliance.licenseCards && country.compliance.licenseCards.length > 0 ? (
              <>
                {country.compliance.licenseRequirements && (
                  <p className={country.id === 'russia' ? "text-[#334155] mb-6" : "text-gray-700 mb-6"}>{country.compliance.licenseRequirements}</p>
                )}
                <ComplianceLicenseCards cards={country.compliance.licenseCards} isRussia={country.id === 'russia'} />
              </>
            ) : country.compliance.genericTable ? (
              <>
                {country.compliance.licenseRequirements && (
                  <p className={country.id === 'russia' ? "text-[#334155] mb-6" : "text-gray-700 mb-6"}>{country.compliance.licenseRequirements}</p>
                )}
                <GenericComplianceTable data={country.compliance.genericTable} isRussia={country.id === 'russia'} />
              </>
            ) : country.compliance.secondGenericTable ? (
              <>
                {country.compliance.licenseRequirements && (
                  <p className={country.id === 'russia' ? "text-[#334155] mb-6" : "text-gray-700 mb-6"}>{country.compliance.licenseRequirements}</p>
                )}
                <GenericComplianceTable data={country.compliance.secondGenericTable} isRussia={country.id === 'russia'} />
              </>
            ) : country.compliance.table.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={country.id === 'russia' ? "bg-[#E8EDF5]" : "bg-gray-50"}>
                      <th className={country.id === 'russia' ? "px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>产品</th>
                      <th className={country.id === 'russia' ? "px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>NPPBKC</th>
                      <th className={country.id === 'russia' ? "px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>PI 进口批准</th>
                      <th className={country.id === 'russia' ? "px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>BPOM 注册</th>
                      <th className={country.id === 'russia' ? "px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>Halal 认证</th>
                    </tr>
                  </thead>
                  <tbody>
                    {country.compliance.table.map((row, index) => (
                      <tr key={index} className={country.id === 'russia' ? "hover:bg-[#F8FBFF]" : "hover:bg-gray-50"}>
                        <td className={country.id === 'russia' ? "px-4 py-4 border-b border-[#D8DDED] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}>{row.product}</td>
                        <td className={country.id === 'russia' ? "px-4 py-4 border-b border-[#D8DDED] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}><TableCellContent content={row.nppbkc} /></td>
                        <td className={country.id === 'russia' ? "px-4 py-4 border-b border-[#D8DDED] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}><TableCellContent content={row.piImportApproval} /></td>
                        <td className={country.id === 'russia' ? "px-4 py-4 border-b border-[#D8DDED] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}><TableCellContent content={row.bpomRegistration} /></td>
                        <td className={country.id === 'russia' ? "px-4 py-4 border-b border-[#D8DDED] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}><TableCellContent content={row.halalCertification} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : country.compliance.licenseRequirements ? (
              <p className={country.id === 'russia' ? "text-[#334155]" : "text-gray-700"}>{country.compliance.licenseRequirements}</p>
            ) : null}
          </div>
        </section>

        <section className="mb-8">
          <div className={country.id === 'russia' ? "bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6" : "bg-white rounded-lg shadow-sm border border-gray-200 p-6"}>
            <h2 className={country.id === 'russia' ? "text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3" : "text-2xl font-semibold text-gray-900 mb-6"}>
              {country.id === 'russia' && <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>}
              税收政策
            </h2>
            
            {country.tax.exciseTax && (
              <div className="mb-6">
                <p className={country.id === 'russia' ? "text-[#334155] text-base leading-7" : "text-gray-700 leading-relaxed"}>{country.tax.exciseTax}</p>
              </div>
            )}
            
            {country.id === 'russia' ? (
              <div className="space-y-6">
                {country.tax.policies.find(p => p.title === '消费税说明') && (
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5">
                    <h3 className="text-lg font-bold text-[#2E3F73] mb-3">消费税说明</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-base leading-7 text-[#334155]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span>俄罗斯对烟草及尼古丁相关产品按产品类型适用消费税，税率按年度逐步调整。</span>
                      </li>
                      <li className="flex items-start gap-2 text-base leading-7 text-[#334155]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span>卷烟、papirosy（俄式纸嘴卷烟）适用复合税率；加热消费用烟草、电子尼古丁输送系统液体、尼古丁原料、无烟草尼古丁加热混合物等按固定税额计征。</span>
                      </li>
                      <li className="flex items-start gap-2 text-base leading-7 text-[#334155]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-1.5 flex-shrink-0"></span>
                        <span>单纯电子烟设备和 HNB 加热设备本身不按消费税税目征税，但进口时仍需结合 HS 归类确认关税、进口增值税和清关监管要求。</span>
                      </li>
                    </ul>
                  </div>
                )}
                
                {country.tax.exciseTaxTable && (
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5">
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
                            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white/50' : 'bg-[#F8FBFF]'}>
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
                
                {country.tax.policies.find(p => p.title === '最低价格说明') && (
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5">
                    <h3 className="text-lg font-bold text-[#2E3F73] mb-3">最低价格说明</h3>
                    <p className="text-[#334155] text-base leading-7">
                      {country.tax.policies.find(p => p.title === '最低价格说明')?.description}
                    </p>
                  </div>
                )}
                
                {country.tax.minimumPriceTable && (
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] border-l-4 border-l-[#4A6290] rounded-xl p-5">
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
                            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white/50' : 'bg-[#F8FBFF]'}>
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
              </div>
            ) : (
              <>
                {country.tax.policies.length > 0 && (
                  <div className="space-y-4 mb-8">
                    {country.tax.policies.map((policy, index) => (
                      <InfoBlock key={index} title={policy.title}>
                        <p className="text-gray-700 text-base leading-relaxed">{policy.description}</p>
                      </InfoBlock>
                    ))}
                  </div>
                )}
                
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
          <div className={country.id === 'russia' ? "bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
              <div className={country.id === 'russia' ? "w-1 h-7 bg-[#4A6290] rounded-full" : "w-1 h-7 bg-blue-600 rounded-full"}></div>
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
                                <span className="text-[#4A6290] mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"></span>
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
          <div className={country.id === 'russia' ? "bg-white border border-[#D8DDED] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <div className="flex items-center gap-3 mb-6">
              {country.id === 'russia' ? (
                <div className="w-1 h-7 bg-[#4D5F9A] rounded-full"></div>
              ) : (
                <span className="text-red-600 text-2xl">⚠️</span>
              )}
              <h2 className="text-2xl font-bold text-[#1F2A44]">趋势预判与红线警告</h2>
            </div>
            {country.id === 'china' || country.id === 'russia' ? (
              <div className="space-y-6">
                <div className={country.id === 'russia' ? "bg-[#F1F3FB] border border-[#CBD2EE] rounded-xl p-5" : "bg-blue-50 border border-blue-200 rounded-xl p-5"}>
                  <h3 className={country.id === 'russia' ? "text-lg font-bold text-[#373F7A] mb-4" : "text-lg font-bold text-blue-900 mb-4"}>趋势预判</h3>
                  <div className="space-y-6">
                    {country.trendsWarnings.trendAnalysis.split(/\n\n+/).map((section, index) => {
                      const numberedTitleMatch = section.match(/^(\d+[.、]\s*[^\n]+)(?:\n([\s\S]*))?$/);
                      if (numberedTitleMatch) {
                        const [, title, content] = numberedTitleMatch;
                        return (
                          <div key={index} className="space-y-3">
                            <h4 className={country.id === 'russia' ? "font-bold text-[#1F2A44] text-base" : "font-bold text-gray-900 text-lg"}>{title}</h4>
                            {content && (
                              <div className={country.id === 'russia' ? "text-[#334155] space-y-3" : "text-gray-800 space-y-3"}>
                                {content.split('\n').filter(line => line.trim()).map((paragraph, pIndex) => (
                                  <p key={pIndex}>{paragraph}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }
                      return (
                        <p key={index} className={country.id === 'russia' ? "text-[#334155] leading-relaxed" : "text-gray-800 leading-relaxed"}>{section}</p>
                      );
                    })}
                  </div>
                </div>
                
                <div className={country.id === 'russia' ? "bg-[#FEF2F2] border border-[#FCA5A5] border-l-4 border-l-[#DC2626] rounded-xl p-5" : "bg-red-50 border-2 border-red-200 rounded-xl p-5"}>
                  <div className="flex items-center gap-2 mb-4">
                    {country.id !== 'russia' && <div className="w-1 h-6 bg-red-600 rounded-full"></div>}
                    <h3 className={country.id === 'russia' ? "text-lg font-bold text-[#DC2626]" : "text-lg font-bold text-red-800"}>合规红线清单</h3>
                  </div>
                  <ul className="space-y-3">
                    {country.trendsWarnings.redLines.map((line, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className={country.id === 'russia' ? "text-[#DC2626] mt-1.5" : "text-red-600 mt-1.5"}>✗</span>
                        <span className={country.id === 'russia' ? "text-[#334155] leading-relaxed" : "text-gray-800 leading-relaxed"}>{line}</span>
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
          <div className={country.id === 'russia' ? "bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
              <div className={country.id === 'russia' ? "w-1 h-7 bg-[#4A6290] rounded-full" : "w-1 h-7 bg-blue-600 rounded-full"}></div>
              重要资讯
            </h2>
            
            {country.id === 'russia' && (
              <div className="mb-8">
                <h3 className="text-base font-bold text-[#2E3F73] mb-4">法规 / 政策文件</h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-[#D8DDED]">
                    <a href="#" className="font-semibold text-[#2E3F73] hover:underline text-base">《俄罗斯联邦第203-FZ号法〈关于烟草制品、烟草产品、尼古丁产品及其生产原料的生产和流通国家监管〉》</a>
                    <p className="text-[#334155] text-base leading-7 mt-1">俄罗斯烟草、尼古丁产品及相关原料生产流通的基础法律，主要影响生产、进口、出口、储存、供应及相应许可。</p>
                  </div>
                  
                  <div className="pb-4 border-b border-[#D8DDED]">
                    <a href="#" className="font-semibold text-[#2E3F73] hover:underline text-base">《俄罗斯联邦第15-FZ号法〈关于保护公民健康免受环境烟草烟雾影响、烟草消费后果或尼古丁产品消费后果影响〉》</a>
                    <p className="text-[#334155] text-base leading-7 mt-1">俄罗斯控烟和市场销售限制的核心法律，主要影响销售地点、销售方式、展示、广告促销、未成年人保护、公共场所使用和特定产品禁售。</p>
                  </div>
                  
                  <div className="pb-4 border-b border-[#D8DDED]">
                    <a href="#" className="font-semibold text-[#2E3F73] hover:underline text-base">《欧亚经济联盟烟草制品技术法规》（TR CU 035/2014）</a>
                    <p className="text-[#334155] text-base leading-7 mt-1">传统烟草制品技术合规的基础规则，主要影响技术要求、包装标签、健康警示、消费者信息和符合性声明。</p>
                  </div>
                  
                  <div className="pb-4 border-b border-[#D8DDED]">
                    <a href="#" className="font-semibold text-[#2E3F73] hover:underline text-base">《俄罗斯联邦第268-FZ号法〈无烟烟草产品技术法规〉》</a>
                    <p className="text-[#334155] text-base leading-7 mt-1">无烟烟草产品的技术识别和技术合规规则。该技术法规主要涉及 snus、nasvay、咀嚼烟草、鼻烟等无烟烟草产品，不改变第15-FZ号法项下相关产品禁售结论。</p>
                  </div>
                  
                  <div className="pb-4 border-b border-[#D8DDED]">
                    <a href="#" className="font-semibold text-[#2E3F73] hover:underline text-base">《俄罗斯联邦政府第224号令〈关于批准烟草和尼古丁产品识别标识及追溯规则〉》</a>
                    <p className="text-[#334155] text-base leading-7 mt-1">烟草和尼古丁产品数字标识及追溯规则，主要影响赋码、贴码、流转信息报送和原料追溯信息报送。</p>
                  </div>
                  
                  <div>
                    <a href="#" className="font-semibold text-[#2E3F73] hover:underline text-base">《俄罗斯联邦税法典》及最低价格规则</a>
                    <p className="text-[#334155] text-base leading-7 mt-1">俄罗斯烟草、加热烟草、电子烟液、尼古丁原料等产品消费税和最低价格规则的主要依据。</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className={country.id === 'russia' ? "mt-6" : ""}>
              <h3 className={country.id === 'russia' ? "text-base font-bold text-[#2E3F73] mb-3" : "text-lg font-medium text-gray-900 mb-3"}>新闻 / 执法动态</h3>
              {country.references.news.length > 0 ? (
                <ul className="space-y-2">
                  {country.references.news.map((news, index) => (
                    <li key={index}>
                      <a href={news.url} className={country.id === 'russia' ? "text-[#2E3F73] hover:underline" : "text-blue-600 hover:underline"}>{news.title}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">资料收录中...</p>
              )}
            </div>
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

