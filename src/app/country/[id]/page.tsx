'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { baseCountries, AccessRestrictionsByStatus, EmirateDifferenceRow, ComplianceLicenseCard } from '../../../../data/mockData';

// 清理格式标记
const cleanFormattingMarkers = (text: string): string => {
  return text
    .replace(/\*\*/g, '')
    .replace(/\[TITLE\]|\[\/TITLE\]|\[ITEM\]|\[\/ITEM\]/g, '');
};

// 文本格式化组件
const FormattedText = ({ text }: { text: string }) => {
  // 处理分段（\n\n）和换行（\n）
  const paragraphs = text.split(/\n\n+/);
  
  // 检查是否是Markdown表格
  const isTable = (p: string): boolean => {
    const lines = p.trim().split('\n').filter(line => line.trim());
    if (lines.length < 2) return false;
    const hasSeparatorLine = lines.some(line => /^\s*\|?\s*[-=]+\s*\|?\s*([-=|]+\s*)?$/.test(line));
    const hasMultiplePipes = lines.some(line => line.includes('|') && line.split('|').length > 2);
    return hasSeparatorLine && hasMultiplePipes;
  };
  
  // 渲染Markdown表格
  const renderTable = (tableText: string) => {
    const lines = tableText.trim().split('\n').filter(line => line.trim());
    // 移除分隔线
    const dataLines = lines.filter(line => !/^\s*\|?\s*[-=]+\s*\|?\s*([-=|]+\s*)?$/.test(line));
    
    if (dataLines.length < 1) return null;
    
    const rows = dataLines.map(line => {
      const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell !== '');
      return cells;
    });
    
    if (rows.length < 1) return null;
    
    const headers = rows[0];
    const bodyRows = rows.slice(1);
    
    return (
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              {headers.map((header, hIndex) => (
                <th key={hIndex} className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyRows.map((row, rIndex) => (
              <tr key={rIndex} className={rIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.map((cell, cIndex) => (
                  <td key={cIndex} className="border border-gray-300 px-4 py-3 text-gray-700 align-top">
                    <FormattedContent content={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  // 二级小标题关键词列表
  const secondaryHeadings = [
    '传统烟草专卖品', '电子烟监管', '新型烟草制品', '传统烟草', 
    'HNB烟支 / 加热烟草产品', '含尼古丁电子烟', '不含尼古丁电子烟及电子烟设备',
    '尼古丁袋 / 尼古丁口含膜', '尼古丁袋/尼古丁口含膜',
    '马来西亚卫生部', '药剂执法司', '毒药委员会', '马来西亚财政部', 
    '马来西亚海关局', '地方政府 / 地方主管机关',
    '香港海关', '香港卫生署', '香港警务处', '香港控烟办公室',
    '新加坡卫生部', '新加坡卫生科学局', '新加坡海关', '新加坡国家环境局',
    'MSPBS（公共卫生和社会福利部）', 'DINAVISA（国家卫生监督局）',
    'DNIT（国家税收收入局）', '其他机关',
    '传统烟草专卖品：', '电子烟及雾化产品：', 'HNB烟支及加热烟草产品：',
    '尼古丁袋 / 尼古丁口含膜：', '烟草薄片、烟叶、爆珠/香精胶囊、滤嘴棒：',
    'MSPBS（公共卫生和社会福利部）：', 'DINAVISA（国家卫生监督局）：',
    'DNIT（国家税收收入局）：', '其他机关：',
    '《第5538/2015号法》', '《第7605/2017号法令》', '《第4624/2020号法令》',
    '《第7508/2025号法》', '选择性消费税规则',
    'ISC（选择性消费税）', 'IVA（增值税）', '进口环节税费',
    '国家烟草专卖局：', '地方烟草专卖主管部门：', '财政部、税务总局：',
    '海关：', '公安、市场监管、网信、邮政等部门：'
  ];
  
  // 判断是否是二级小标题
  const isSecondaryHeading = (text: string): boolean => {
    const trimmed = text.trim();
    // 精确匹配已知的二级标题
    if (secondaryHeadings.includes(trimmed)) return true;
    // 其他短标题判断：长度适中，不含句号，不是bullet，不是数字开头
    if (trimmed.length > 3 && trimmed.length < 50 && !trimmed.includes('。') && 
        !trimmed.startsWith('•') && !trimmed.startsWith('-') && !/^\d/.test(trimmed)) {
      return true;
    }
    return false;
  };
  
  return (
    <div className="space-y-5">
      {paragraphs.map((paragraph, pIndex) => {
        const cleanedParagraph = cleanFormattingMarkers(paragraph);
        const trimmedParagraph = cleanedParagraph.trim();
        
        // 优先检查是否是表格
        if (isTable(cleanedParagraph)) {
          return <div key={pIndex}>{renderTable(cleanedParagraph)}</div>;
        }
        
        // 检查是否是模块内一级小标题
        const primaryHeadings = ['核心特征', '监管部门', '烟草行业主要法律', 
          '新加坡的严格监管主要体现在以下方面', '主要法规', '主要产品口径',
          '主要法规 / 政策', '监管部门', '主要产品口径'];
        if (primaryHeadings.includes(trimmedParagraph)) {
          // 检查下一个段落是否是重点短句
          const nextParagraph = paragraphs[pIndex + 1];
          const isNextShort = nextParagraph && 
            cleanFormattingMarkers(nextParagraph).trim().length < 150 &&
            !cleanFormattingMarkers(nextParagraph).trim().startsWith('•') &&
            !cleanFormattingMarkers(nextParagraph).trim().startsWith('-');
          
          if (isNextShort) {
            const nextCleaned = cleanFormattingMarkers(nextParagraph).trim();
            return (
              <div key={pIndex} className="space-y-2">
                <h3 className="font-bold text-base md:text-lg text-gray-900 mt-5 mb-2 first:mt-0">
                  {trimmedParagraph}
                </h3>
                <p className="font-semibold text-base text-gray-900 leading-relaxed">
                  {nextCleaned}
                </p>
              </div>
            );
          }
          
          return (
            <h3 key={pIndex} className="font-bold text-base md:text-lg text-gray-900 mt-5 mb-3 first:mt-0">
              {trimmedParagraph}
            </h3>
          );
        }
        
        // 如果上一个段落是一级小标题，且当前段落已经被处理作为重点短句，则跳过
        const prevParagraph = paragraphs[pIndex - 1];
        if (prevParagraph && primaryHeadings.includes(cleanFormattingMarkers(prevParagraph).trim())) {
          const prevIsPrimary = primaryHeadings.includes(cleanFormattingMarkers(prevParagraph).trim());
          const isShort = trimmedParagraph.length < 150 && 
            !trimmedParagraph.startsWith('•') && !trimmedParagraph.startsWith('-');
          if (prevIsPrimary && isShort) {
            // 已经在上一个段落的处理中处理过了，跳过
            return null;
          }
        }
        
        // 检查是否是二级小标题
        if (isSecondaryHeading(trimmedParagraph)) {
          return (
            <h4 key={pIndex} className="font-semibold text-base text-gray-900 mt-4 mb-2">
              {trimmedParagraph}
            </h4>
          );
        }
        
        // 检查是否是 • 标记的列表（黑点列表）
        if (trimmedParagraph.startsWith('• ') || trimmedParagraph.startsWith('· ')) {
          const items = cleanedParagraph.split('\n').filter(line => line.trim());
          const renderedItems = [];
          
          for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            const item = items[itemIndex];
            const trimmed = item.trim().replace(/^[•·]\s*/, '');
            if (!trimmed) continue;
            
            // 检查下一个项是否以 • 或 · 开头
            const nextItem = items[itemIndex + 1];
            const nextIsBullet = nextItem && (nextItem.trim().startsWith('• ') || nextItem.trim().startsWith('· '));
            
            // 如果下一个不是 bullet，则当前是标题，下一行是内容
            if (!nextIsBullet && itemIndex < items.length - 1) {
              const content = items[itemIndex + 1]?.trim().replace(/^[•·]\s*/, '') || '';
              if (content && !content.startsWith('• ') && !content.startsWith('· ')) {
                // 处理标题中的冒号分隔
                const colonPos = trimmed.indexOf('：');
                if (colonPos !== -1) {
                  const titlePart = trimmed.substring(0, colonPos + 1);
                  const inlineContent = trimmed.substring(colonPos + 1).trim();
                  renderedItems.push(
                    <div key={itemIndex} className="space-y-1">
                      <div className="text-base text-gray-700 leading-relaxed">
                        <span className="text-gray-500">• </span>
                        <span>
                          <span className="font-semibold text-gray-900">{titlePart}</span>
                          {inlineContent && <span className="text-base text-gray-700">{inlineContent}</span>}
                        </span>
                      </div>
                      <div className="ml-5 text-base text-gray-700 leading-relaxed">
                        {content}
                      </div>
                    </div>
                  );
                } else {
                  renderedItems.push(
                    <div key={itemIndex} className="space-y-1">
                      <div className="text-base text-gray-700 leading-relaxed">
                        <span className="text-gray-500">• </span>
                        <span className="font-semibold text-gray-900">{trimmed}</span>
                      </div>
                      <div className="ml-5 text-base text-gray-700 leading-relaxed">
                        {content}
                      </div>
                    </div>
                  );
                }
                itemIndex++; // 跳过内容行，避免重复
                continue;
              }
            }
            
            // 检查当前项是否有冒号分隔
            const colonPos = trimmed.indexOf('：');
            if (colonPos !== -1) {
              const titlePart = trimmed.substring(0, colonPos + 1);
              const contentPart = trimmed.substring(colonPos + 1).trim();
              renderedItems.push(
                <div key={itemIndex} className="text-base text-gray-700 leading-relaxed">
                  <span className="text-gray-500">• </span>
                  <span>
                    <span className="font-semibold text-gray-900">{titlePart}</span>
                    {contentPart && <span className="text-base text-gray-700 leading-relaxed">{contentPart}</span>}
                  </span>
                </div>
              );
            } else {
              // 单独的列表项
              renderedItems.push(
                <div key={itemIndex} className="text-base text-gray-700 leading-relaxed">
                  <span className="text-gray-500">• </span>
                  <span className="text-base text-gray-700 leading-relaxed">{trimmed}</span>
                </div>
              );
            }
          }
          
          return (
            <div key={pIndex} className="space-y-3">
              {renderedItems}
            </div>
          );
        }
        
        // 检查是否是 * 或 - 标记的列表
        if (trimmedParagraph.startsWith('* ') || trimmedParagraph.startsWith('- ')) {
          const items = cleanedParagraph.split('\n').filter(line => line.trim());
          return (
            <div key={pIndex} className="space-y-3">
              {items.map((item, itemIndex) => {
                const trimmed = item.trim().replace(/^[*-]\s*/, '');
                if (!trimmed) return null;
                const colonPos = trimmed.indexOf('：');
                if (colonPos !== -1) {
                  const title = trimmed.substring(0, colonPos + 1);
                  const content = trimmed.substring(colonPos + 1).trim();
                  return (
                    <div key={itemIndex} className="text-base text-gray-700 leading-relaxed">
                      <span className="text-gray-500">• </span>
                      <span>
                        <span className="font-semibold text-gray-900">{title}</span>
                        {content && <span className="text-base text-gray-700 leading-relaxed">{content}</span>}
                      </span>
                    </div>
                  );
                }
                return (
                  <div key={itemIndex} className="text-base text-gray-700 leading-relaxed">
                    <span className="text-gray-500">• </span>
                    <span className="text-base text-gray-700 leading-relaxed">{trimmed}</span>
                  </div>
                );
              })}
            </div>
          );
        }
        
        // 检查是否是 "数字. 标题" 格式的品类定义
        const numberedTitleMatch = cleanedParagraph.match(/^\d+[.、]\s*([^\n]+)(?:\n([\s\S]*))?$/);
        if (numberedTitleMatch) {
          const [, title, content] = numberedTitleMatch;
          return (
            <div key={pIndex} className="space-y-2">
              <h4 className="font-semibold text-base text-gray-900">{cleanedParagraph.match(/^\d+[.、]\s*[^\n]+/)?.[0]}</h4>
              {content && <FormattedContent content={content} />}
            </div>
          );
        }
        
        // 检查是否是 "标题：内容" 格式
        const titleContentMatch = cleanedParagraph.match(/^([^：\n]+)：([\s\S]*)$/);
        if (titleContentMatch) {
          const [, title, content] = titleContentMatch;
          return (
            <div key={pIndex} className="space-y-2">
              <h4 className="font-semibold text-base text-gray-900">{title}：</h4>
              <FormattedContent content={content} />
            </div>
          );
        }
        
        // 检查是否是 bullet list（以 • 或 - 或数字开头）
        const bulletLines = cleanedParagraph.split('\n');
        const hasBullets = bulletLines.some(line => 
          line.trim().startsWith('•') || 
          line.trim().startsWith('·') ||
          line.trim().startsWith('-') || 
          /^\d+[.、]/.test(line.trim())
        );
        
        if (hasBullets && bulletLines.length > 1) {
          return (
            <ul key={pIndex} className="space-y-2">
              {bulletLines.map((line, lIndex) => {
                const trimmed = line.trim();
                if (!trimmed) return null;
                
                // 移除 bullet 标记
                const content = trimmed.replace(/^[•·]\s*/, '').replace(/^-\s*/, '').replace(/^\d+[.、]\s*/, '');
                if (!content) return null;
                
                // 检查是否有冒号分隔
                const colonPos = content.indexOf('：');
                if (colonPos !== -1) {
                  const titlePart = content.substring(0, colonPos + 1);
                  const contentPart = content.substring(colonPos + 1).trim();
                  return (
                    <li key={lIndex} className="text-base text-gray-700 leading-relaxed">
                      <span className="text-gray-500">• </span>
                      <span>
                        <span className="font-semibold text-gray-900">{titlePart}</span>
                        {contentPart && <span className="text-base text-gray-700 leading-relaxed">{contentPart}</span>}
                      </span>
                    </li>
                  );
                }
                
                return (
                  <li key={lIndex} className="text-base text-gray-700 leading-relaxed">
                    <span className="text-gray-500">• </span>
                    <span className="text-base text-gray-700 leading-relaxed">{content}</span>
                  </li>
                );
              })}
            </ul>
          );
        }
        
        // 普通段落
        return <FormattedContent key={pIndex} content={cleanedParagraph} />;
      })}
    </div>
  );
};

// 处理单段内容的内部换行
const FormattedContent = ({ content }: { content: string }) => {
  const cleanedContent = cleanFormattingMarkers(content);
  const lines = cleanedContent.split('\n').filter(line => line.trim());
  
  return (
    <div className="space-y-2">
      {lines.map((line, index) => (
        <p key={index} className="text-base text-gray-700 leading-relaxed">
          {line.trim()}
        </p>
      ))}
    </div>
  );
};

// 表格单元格内容渲染组件 - 支持字符串和数组
const TableCellContent = ({ content }: { content: string | string[] }) => {
  if (Array.isArray(content)) {
    return (
      <ul className="space-y-1">
        {content.map((item, index) => (
          <li key={index} className="flex items-start gap-1">
            <span className="text-gray-400 text-xs mt-0.5">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <span className="text-gray-700">{content}</span>;
};

// 通用合规表格组件
const GenericComplianceTable = ({ data }: { data: { headers: string[]; rows: (string | string[])[][] } }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-base min-w-[600px]">
        <thead>
          <tr className="bg-gray-100">
            {data.headers.map((header, index) => (
              <th 
                key={index} 
                className={`px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200 ${
                  index === 0 ? 'w-40 min-w-[120px]' : ''
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(data.rows as (string | string[])[]).map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {(row as (string | string[])[]).map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className={`px-4 py-4 border-b border-gray-200 ${
                    cellIndex === 0 ? 'font-medium text-gray-900' : ''
                  }`}
                >
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

// 按状态分组的准入限制展示组件
const AccessRestrictionsByStatusView = ({ data }: { data: AccessRestrictionsByStatus }) => {
  return (
    <div className="space-y-6">
      {/* 完全禁止 */}
      <div className="bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-500 rounded-r-lg p-6">
        <h3 className="font-bold text-red-900 text-xl mb-5 flex items-center gap-3">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          完全禁止
        </h3>
        <div className="space-y-4">
          {data.fullyProhibited.map((item, index) => (
            <div key={index} className="bg-white bg-opacity-70 rounded-lg p-4 border border-red-200">
              <div className="font-semibold text-red-900 text-base mb-2">{item.productName}</div>
              <div className="text-red-800 leading-relaxed">{item.rule}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 部分禁止 / 条件性限制 */}
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-l-4 border-amber-500 rounded-r-lg p-6">
        <h3 className="font-bold text-amber-900 text-xl mb-5 flex items-center gap-3">
          <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
          部分禁止 / 条件性限制
        </h3>
        <div className="space-y-4">
          {data.partiallyRestricted.map((item, index) => (
            <div key={index} className="bg-white bg-opacity-70 rounded-lg p-4 border border-amber-200">
              <div className="font-semibold text-amber-900 text-base mb-2">{item.productName}</div>
              <div className="text-amber-800 leading-relaxed">
                {item.rule.split('\n\n').map((paragraph, pIndex) => (
                  <span key={pIndex}>
                    {paragraph}
                    {pIndex < item.rule.split('\n\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 开放 / 可准入 */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500 rounded-r-lg p-6">
        <h3 className="font-bold text-green-900 text-xl mb-5 flex items-center gap-3">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          开放 / 可准入
        </h3>
        <div className="space-y-4">
          {data.openAccessible.map((item, index) => (
            <div key={index} className="bg-white bg-opacity-70 rounded-lg p-4 border border-green-200">
              <div className="font-semibold text-green-900 text-base mb-2">{item.productName}</div>
              <div className="text-green-800 leading-relaxed">{item.rule}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 酋长国差异表格组件
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
                  <td colSpan={4} className="px-4 py-3 text-gray-600 text-xs italic">
                    备注：{row.note}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 合规资质卡片展示组件
const ComplianceLicenseCards = ({ cards }: { cards: ComplianceLicenseCard[] }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
          <h4 className="font-bold text-slate-900 text-lg mb-3">{card.title}</h4>
          <p className="text-slate-700 leading-relaxed">{card.description}</p>
        </div>
      ))}
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
  
  // 当 activeTab 变化时，自动选中第一个有内容的产品类别
  React.useEffect(() => {
    if (country.accessRestrictions) {
      const categories = getCategoriesWithContent(activeTab);
      if (categories.length > 0) {
        setActiveCategory(categories[0].key);
      }
    }
  }, [activeTab]);

  const currentCategoryRestrictions = country.accessRestrictions 
    ? country.accessRestrictions[activeCategory as keyof typeof country.accessRestrictions]
    : { prohibited: [], partiallyProhibited: [], open: [] };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
            <span>←</span> 返回首页
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{country.name}</h1>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <strong className="text-blue-900">本季动态摘要：</strong>
            {country.id === 'russia' ? (
              <div className="text-blue-900 mt-2 space-y-4">
                {country.seasonSummary.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p className="text-blue-900">{country.seasonSummary}</p>
            )}
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm border border-blue-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span>📢</span> 法规动态
            </h2>
            <ul className="space-y-3">
              {country.regulatoryUpdates.map((update, index) => {
                const parts = update.split('\n\n');
                const title = parts[0] || '';
                const content = parts.slice(1).join('\n\n');
                
                return (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                    <div className="text-gray-700">
                      <span className="font-semibold">{title}</span>
                      {content && (
                        <>
                          <br />
                          <span className="mt-1 block">{content}</span>
                        </>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">监管体系与定义</h2>
            {country.id === 'russia' ? (
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-blue-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    监管概述
                  </h3>
                  <div className="text-blue-800">
                    <FormattedText text={country.regulatorySystem.overview} />
                  </div>
                </div>
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-indigo-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    品类定义
                  </h3>
                  <div className="text-indigo-800">
                    {/* 渲染6之前的内容 */}
                    <FormattedText text={country.regulatorySystem.definition.split('6. 电子烟相关产品的分类监管逻辑')[0]} />
                    
                    {/* 显示第6节标题 */}
                    <h4 className="mt-4 font-semibold text-lg text-gray-900">6. 电子烟相关产品的分类监管逻辑</h4>
                    
                    {/* 表格前说明文字 */}
                    <p className="mt-3 text-gray-700 leading-relaxed">
                      俄罗斯法规没有使用一个单一概念统一覆盖所有电子烟相关产品，而是按产品构成分别使用"尼古丁产品""尼古丁液体"和"尼古丁产品使用系统"三个概念进行监管。
                    </p>
                    
                    {/* 俄罗斯电子烟分类监管逻辑表格 */}
                    <div className="mt-4">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900 w-[22%]">产品形态</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900 w-[38%]">监管路径与法规依据</th>
                              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900 w-[40%]">主要合规规则</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white">
                              <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">电子烟设备 / 电子雾化设备</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">属于"尼古丁产品使用系统 / 装置"。第15-FZ号法第2条将其定义为用于产生可吸入尼古丁气溶胶或蒸气的电子或其他装置，包括电子尼古丁输送系统和加热烟草系统。</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">单纯设备与烟油、含液体烟弹、设备与液体组合产品区分判断；可重复使用电子烟及类似个人电加热雾化设备仍处于标识试验 / 过渡阶段。</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">烟油 / 电子烟补充液</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">属于"尼古丁液体"或"无尼古丁液体"。第15-FZ号法第2条规定，尼古丁含量不低于0.1 mg/ml的液体，以及不含尼古丁或尼古丁低于0.1 mg/ml但用于电子尼古丁输送系统的液体，均纳入该定义。</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">零售环节不得销售尼古丁浓度超过20 mg/ml的尼古丁液体或尼古丁溶液。含尼古丁液体涉及消费税、最低价格、数字标识及生产 / 进口投入流通许可。</td>
                            </tr>
                            <tr className="bg-white">
                              <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">含液体烟弹、设备与液体组合产品</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">俄罗斯公开法规未见对"含液体烟弹"或"设备与液体组合产品"设置单独定义。监管时应拆分看：其中的液体按尼古丁液体或无尼古丁液体判断；其中的设备按尼古丁产品使用系统 / 装置判断。</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">核心看内置或预灌装液体属性。液体含尼古丁且达到0.1 mg/ml的，按尼古丁液体及尼古丁产品相关规则处理；液体不含尼古丁或低于0.1 mg/ml但用于电子尼古丁输送系统的，仍纳入尼古丁液体 / 无尼古丁液体监管口径。</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">空烟弹 / 空容器 / 不含液体组件</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">俄罗斯公开法规未见对空烟弹、空容器或普通不含液体组件设置单独定义。</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">不直接按尼古丁液体处理；如作为电子烟设备组成部分销售，重点按设备或尼古丁产品使用系统 / 装置相关规则判断。</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="mt-4 text-gray-700 leading-relaxed">
                        电子烟设备、尼古丁液体、无尼古丁液体、含液体烟弹、设备与液体组合产品等电子烟相关产品，进入零售市场时通常还需遵守第15-FZ号法项下的销售端限制，包括禁止向未成年人销售、禁止远程销售、禁止自动售货机销售、禁止公开陈列、限制销售地点，以及广告、促销和赞助禁令。
                      </p>
                    </div>
                    
                    {/* 渲染7和8部分的内容 */}
                    <FormattedText text={country.regulatorySystem.definition.split('6. 电子烟相关产品的分类监管逻辑')[1]} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-blue-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    监管概述
                  </h3>
                  <div className="text-blue-800">
                    <FormattedText text={country.regulatorySystem.overview} />
                  </div>
                </div>
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-5">
                  <h3 className="text-lg font-medium text-indigo-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    品类定义
                  </h3>
                  <div className="text-indigo-800">
                    <FormattedText text={country.regulatorySystem.definition} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">准入与禁令限制</h2>
            
            {country.accessRestrictionsByStatus ? (
              // 使用新的按状态分组的展示方式
              <AccessRestrictionsByStatusView data={country.accessRestrictionsByStatus} />
            ) : (
              // 原有的展示方式，保持向后兼容
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

        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">合规资质</h2>
            {country.compliance.licenseCards && country.compliance.licenseCards.length > 0 ? (
              <>
                {country.compliance.licenseRequirements && (
                  <p className="text-gray-700 mb-6">{country.compliance.licenseRequirements}</p>
                )}
                <ComplianceLicenseCards cards={country.compliance.licenseCards} />
              </>
            ) : country.compliance.genericTable ? (
              <>
                {country.compliance.licenseRequirements && (
                  <p className="text-gray-700 mb-6">{country.compliance.licenseRequirements}</p>
                )}
                <GenericComplianceTable data={country.compliance.genericTable} />
              </>
            ) : country.compliance.secondGenericTable ? (
              <>
                {country.compliance.licenseRequirements && (
                  <p className="text-gray-700 mb-6">{country.compliance.licenseRequirements}</p>
                )}
                <GenericComplianceTable data={country.compliance.secondGenericTable} />
              </>
            ) : country.compliance.table.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">产品</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">NPPBKC</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">PI 进口批准</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">BPOM 注册</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">Halal 认证</th>
                    </tr>
                  </thead>
                  <tbody>
                    {country.compliance.table.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 border-b border-gray-200">{row.product}</td>
                        <td className="px-4 py-3 border-b border-gray-200"><TableCellContent content={row.nppbkc} /></td>
                        <td className="px-4 py-3 border-b border-gray-200"><TableCellContent content={row.piImportApproval} /></td>
                        <td className="px-4 py-3 border-b border-gray-200"><TableCellContent content={row.bpomRegistration} /></td>
                        <td className="px-4 py-3 border-b border-gray-200"><TableCellContent content={row.halalCertification} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : country.compliance.licenseRequirements ? (
              <p className="text-gray-700">{country.compliance.licenseRequirements}</p>
            ) : null}
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">税收政策</h2>
            
            {country.tax.exciseTax && (
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{country.tax.exciseTax}</p>
              </div>
            )}
            
            {country.id === 'russia' ? (
              <div className="space-y-6">
                {country.tax.policies.find(p => p.title === '消费税说明') && (
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">消费税说明</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {country.tax.policies.find(p => p.title === '消费税说明')?.description}
                    </p>
                  </div>
                )}
                
                {country.tax.exciseTaxTable && (
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mt-2">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">消费税税率表</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-200">
                            {country.tax.exciseTaxTable.headers.map((header, idx) => (
                              <th 
                                key={idx} 
                                className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-300"
                                style={idx === 0 ? { width: '28%' } : { width: '24%' }}
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {country.tax.exciseTaxTable.rows.map((row, rowIdx) => (
                            <tr key={rowIdx} className="hover:bg-gray-100">
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="px-4 py-3 border-b border-gray-200 text-gray-700">
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
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mt-6">
                    <h4 className="font-semibold text-gray-900 mb-2">最低价格说明</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {country.tax.policies.find(p => p.title === '最低价格说明')?.description}
                    </p>
                  </div>
                )}
                
                {country.tax.minimumPriceTable && (
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mt-2">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">最低价格表</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-200">
                            {country.tax.minimumPriceTable.headers.map((header, idx) => (
                              <th 
                                key={idx} 
                                className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-300"
                                style={idx === 0 ? { width: '30%' } : { width: '70%' }}
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {country.tax.minimumPriceTable.rows.map((row, rowIdx) => (
                            <tr key={rowIdx} className="hover:bg-gray-100">
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="px-4 py-3 border-b border-gray-200 text-gray-700">
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
                  <div className="grid gap-4 mb-8">
                    {country.tax.policies.map((policy, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <h4 className="font-semibold text-gray-900 mb-2">{policy.title}</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{policy.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                
                {country.tax.exciseTaxTable && (
                  <div className="bg-gray-50 rounded-lg p-4 mb-8 border border-gray-100">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">消费税税率表</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-200">
                            {country.tax.exciseTaxTable.headers.map((header, idx) => (
                              <th 
                                key={idx} 
                                className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-300"
                                style={idx === 0 ? { width: '28%' } : { width: '24%' }}
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {country.tax.exciseTaxTable.rows.map((row, rowIdx) => (
                            <tr key={rowIdx} className="hover:bg-gray-100">
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="px-4 py-3 border-b border-gray-200 text-gray-700">
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
                
                {country.tax.minimumPriceTable && (
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">最低价格表</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {country.tax.minimumPriceTable.rows.map((row, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                          <div className="font-medium text-gray-900 mb-1">{row[0]}</div>
                          <div className="text-sm text-gray-700 leading-relaxed">{row[1]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">市场运营规范</h2>
            {country.marketOperation.regulations.length > 0 ? (
              <div className="space-y-6">
                {country.marketOperation.regulations.map((regulation, index) => {
                  // 检查是否是主要酋长国差异并且有表格数据
                  if (country.emirateDifferences && regulation.category === '主要酋长国差异') {
                    return (
                      <div key={index} className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                        <h3 className="text-lg font-medium text-purple-900 mb-3">{regulation.category}</h3>
                        <EmirateDifferencesTable data={country.emirateDifferences} />
                      </div>
                    );
                  }
                  
                  // 为不同分类使用不同的配色
                  let bgClass = 'bg-gray-50 border-gray-200';
                  let textClass = 'text-gray-900';
                  
                  if (country.id === 'russia') {
                    // 俄罗斯页面使用轮起色卡，避免连续同色
                    const colorPalette = [
                      { bg: 'bg-blue-50 border-blue-200', text: 'text-blue-900' },
                      { bg: 'bg-red-50 border-red-200', text: 'text-red-900' },
                      { bg: 'bg-purple-50 border-purple-200', text: 'text-purple-900' },
                      { bg: 'bg-orange-50 border-orange-200', text: 'text-orange-900' },
                      { bg: 'bg-green-50 border-green-200', text: 'text-green-900' },
                      { bg: 'bg-yellow-50 border-yellow-200', text: 'text-yellow-900' }
                    ];
                    const color = colorPalette[index % colorPalette.length];
                    bgClass = color.bg;
                    textClass = color.text;
                  } else {
                    // 其他国家页面按分类固定颜色
                    if (regulation.category === '销售与陈列' || regulation.category === '销售渠道' || regulation.category === '销售与渠道' || regulation.category === '销售场所与销售方式') {
                      bgClass = 'bg-blue-50 border-blue-200';
                      textClass = 'text-blue-900';
                    } else if (regulation.category === '包装与标签' || regulation.category === '包装、陈列与标签' || regulation.category === '陈列、展示与销售清单' || regulation.category === '包装和单支销售限制') {
                      bgClass = 'bg-green-50 border-green-200';
                      textClass = 'text-green-900';
                    } else if (regulation.category === '广告与宣传' || regulation.category === '广告、影视和变相宣传' || regulation.category === '广告、促销与展示' || regulation.category === '广告、促销与赞助') {
                      bgClass = 'bg-amber-50 border-amber-200';
                      textClass = 'text-amber-900';
                    } else if (regulation.category === '主要酋长国差异' || regulation.category === '地方差异' || regulation.category === '主要地区差异') {
                      bgClass = 'bg-purple-50 border-purple-200';
                      textClass = 'text-purple-900';
                    } else if (regulation.category === '未成年人保护') {
                      bgClass = 'bg-pink-50 border-pink-200';
                      textClass = 'text-pink-900';
                    } else if (regulation.category === '口味与产品形态') {
                      bgClass = 'bg-emerald-50 border-emerald-200';
                      textClass = 'text-emerald-900';
                    } else if (regulation.category === '持有、使用与公共场所') {
                      bgClass = 'bg-indigo-50 border-indigo-200';
                      textClass = 'text-indigo-900';
                    } else if (regulation.category === '线上销售' || regulation.category === '平台交易') {
                      bgClass = 'bg-indigo-50 border-indigo-200';
                      textClass = 'text-indigo-900';
                    } else if (regulation.category === '市场流通' || regulation.category === '禁售地点' || regulation.category === '特定产品和浓度要求') {
                      bgClass = 'bg-red-50 border-red-200';
                      textClass = 'text-red-900';
                    }
                  }
                  
                  return (
                    <div key={index} className={`${bgClass} border rounded-lg p-5`}>
                      <h3 className={`text-lg font-medium ${textClass} mb-3`}>{regulation.category}</h3>
                      <ul className="space-y-2">
                        {regulation.items.map((item, itemIndex) => (
                          <li key={itemIndex} className={textClass.replace('900', '700')}>
                            <span className={textClass.replace('900', '500')}>• </span>
                            <span className={textClass.replace('900', '700')}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
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
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-red-600 text-2xl">⚠️</span>
              <h2 className="text-2xl font-bold text-red-900">趋势预判与红线警告</h2>
            </div>
            {country.id === 'china' ? (
              // 中国页面使用上下结构
              <div className="space-y-6">
                {/* 政策趋势分析 - 上方 */}
                <div className="bg-white rounded p-4 border border-red-200">
                  <h3 className="text-lg font-medium text-red-900 mb-4">政策趋势分析</h3>
                  <div className="space-y-6">
                    {country.trendsWarnings.trendAnalysis.split(/\n\n+/).map((section, index) => {
                      const numberedTitleMatch = section.match(/^(\d+[.、]\s*[^\n]+)(?:\n([\s\S]*))?$/);
                      if (numberedTitleMatch) {
                        const [, title, content] = numberedTitleMatch;
                        return (
                          <div key={index} className="space-y-3">
                            <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
                            {content && (
                              <div className="text-gray-700 space-y-2">
                                {content.split('\n').filter(line => line.trim()).map((paragraph, pIndex) => (
                                  <p key={pIndex}>{paragraph}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }
                      return (
                        <p key={index} className="text-gray-700">{section}</p>
                      );
                    })}
                  </div>
                </div>
                {/* 合规红线清单 - 下方 */}
                <div className="bg-red-100 rounded p-4 border border-red-300">
                  <h3 className="text-lg font-medium text-red-900 mb-3">合规红线清单</h3>
                  <ul className="space-y-2">
                    {country.trendsWarnings.redLines.map((line, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span className="text-red-900 font-medium">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              // 其他国家页面使用左右结构
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded p-4 border border-red-200">
                  <h3 className="text-lg font-medium text-red-900 mb-3">政策趋势分析</h3>
                  <FormattedText text={country.trendsWarnings.trendAnalysis} />
                </div>
                <div className="bg-red-100 rounded p-4 border border-red-300">
                  <h3 className="text-lg font-medium text-red-900 mb-3">合规红线清单</h3>
                  <ul className="space-y-2">
                    {country.trendsWarnings.redLines.map((line, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">✗</span>
                        <span className="text-red-900 font-medium">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">参考资料库</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">法规汇编</h3>
                {country.references.regulations.length > 0 ? (
                  <ul className="space-y-2">
                    {country.references.regulations.map((reg, index) => (
                      <li key={index}>
                        <a href={reg.url} className="text-blue-600 hover:underline">{reg.title}</a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">资料收录中...</p>
                )}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">重要资讯</h3>
                {country.references.news.length > 0 ? (
                  <ul className="space-y-2">
                    {country.references.news.map((news, index) => (
                      <li key={index}>
                        <a href={news.url} className="text-blue-600 hover:underline">{news.title}</a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">资料收录中...</p>
                )}
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">PDF 下载</h3>
              {country.references.pdfs.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {country.references.pdfs.map((pdf, index) => (
                    <a
                      key={index}
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors"
                    >
                      <span>📄</span>
                      {pdf.title}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">资料收录中...</p>
              )}
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-500 leading-relaxed">
              免责声明：本网站所载内容仅供一般信息参考，不构成法律意见、合规意见、税务意见或其他专业意见，也不应作为任何商业决策、市场准入、产品注册、进口、销售或宣传行为的依据。相关法律法规、监管口径和执法实践可能随时调整；如涉及具体产品、交易安排或合规判断，请结合最新法规、主管机关口径及当地专业顾问意见进行确认。
            </p>
          </div>
        </section>

      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">© 2024 全球法规动态追踪. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
