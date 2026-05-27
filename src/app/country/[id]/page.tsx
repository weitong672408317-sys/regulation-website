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

// 解析监管概述内容，提取核心特征、主要法规/政策、主要产品口径
const parseOverview = (overview: string) => {
  const sections: { title: string; content: string }[] = [];
  
  // 按标题分割
  const parts = overview.split(/(核心特征|主要法规\s*\/?\s*政策|主要产品口径|监管部门)/g);
  
  for (let i = 1; i < parts.length; i += 2) {
    let title = parts[i].trim();
    let content = (parts[i + 1] || '').trim();
    
    // 去掉标题后面的冒号
    if (title.endsWith('：')) {
      title = title.slice(0, -1);
    }
    if (title.endsWith(':')) {
      title = title.slice(0, -1);
    }
    
    // 清理内容开头可能的冒号和换行
    content = content.replace(/^[：:]\s*/, '');
    
    // 清理内容中单独出现的冒号行
    content = content.replace(/\n\s*[：:]\s*$/gm, '');
    content = content.replace(/\n\s*[：:]\s*\n/g, '\n');
    
    // 清理开头和结尾的空行
    content = content.trim();
    
    if (title && content) {
      sections.push({ title, content });
    }
  }
  
  return sections;
};

// 统一的二级内容块组件（InfoBlock）- 蓝灰色系统一
const InfoBlock = ({ title, children, isRussia = false }: { title: string; children: React.ReactNode; isRussia?: boolean }) => {
  return (
    <div className={isRussia ? "bg-[#F2F7FD] border border-[#D8E3F0] border-l-4 border-l-[#5E82A8] rounded-xl p-5 shadow-none" : "bg-white border border-blue-200 border-l-4 border-l-blue-600 rounded-xl p-5 shadow-sm"}>
      {title && <h3 className={isRussia ? "text-base font-bold text-[#1F4E79] mb-3" : "text-lg font-bold text-blue-900 mb-4"}>{title}</h3>}
      <div className={isRussia ? "text-[#334155] text-base leading-relaxed" : "text-gray-700 leading-relaxed"}>
        {children}
      </div>
    </div>
  );
};

// 监管概述卡片组件 - 蓝灰色系统一
const OverviewSectionCard = ({ title, content, isRussia = false }: { title: string; content: string; isRussia?: boolean }) => {
  return (
    <div className={isRussia ? "bg-[#F2F7FD] border border-[#D8E3F0] rounded-xl p-5" : "bg-blue-50 border border-blue-200 rounded-xl p-5"}>
      <h3 className={isRussia ? "text-base font-bold text-[#1F4E79] mb-3" : "text-base font-bold text-blue-900 mb-3"}>
        {title}
      </h3>
      <div className={isRussia ? "text-[#334155] text-base leading-relaxed" : "text-gray-800 text-base leading-relaxed"}>
        <FormattedText text={content} />
      </div>
    </div>
  );
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
          const items = cleanedParagraph.split('\n').filter(line => {
            const trimmedLine = line.trim();
            // 过滤空行和无意义符号行
            if (!trimmedLine) return false;
            // 检查是否仅包含无意义符号
            const isOnlySymbols = /^[•·。\-·\s]*$/.test(trimmedLine);
            if (isOnlySymbols) return false;
            return true;
          });
          const renderedItems = [];
          
          for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            const item = items[itemIndex];
            const trimmed = item.trim().replace(/^[•·]\s*/, '');
            if (!trimmed) continue;
            // 再次检查是否仅包含无意义符号
            if (/^[•·。\-·\s]*$/.test(trimmed)) continue;
            
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

const cardSubheadingClass = "text-base font-semibold leading-6 text-gray-900 mb-3";

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
                        <p key={detailIndex} className="leading-relaxed mt-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          );
        }

        return lines.map((line, lineIndex) => (
          <p key={`${blockIndex}-${lineIndex}`} className="leading-relaxed">
            {line}
          </p>
        ));
      })}
    </div>
  );
};

// 通用合规表格组件 - 蓝灰系统一
const GenericComplianceTable = ({ data, isRussia = false }: { data: { headers: string[]; rows: (string | string[])[][] }, isRussia?: boolean }) => {
  return (
    <div className={isRussia ? "overflow-x-auto rounded-xl border border-[#D8E3F0] shadow-none" : "overflow-x-auto rounded-xl border border-blue-200 shadow-sm"}>
      <table className="w-full text-base min-w-[600px] bg-white">
        <thead>
          <tr className={isRussia ? "bg-[#E6EEF8]" : "bg-blue-50"}>
            {data.headers.map((header, index) => (
              <th 
                key={index} 
                className={`px-5 py-4 text-left font-bold ${isRussia ? "text-[#1F4E79] border-b-2 border-[#D8E3F0]" : "text-blue-900 border-b-2 border-blue-200"} ${
                  index === 0 ? 'w-48 min-w-[140px]' : ''
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(data.rows as (string | string[])[]).map((row, rowIndex) => (
            <tr key={rowIndex} className={isRussia ? (rowIndex % 2 === 0 ? 'bg-white/50' : 'bg-[#F8FBFF]') : (rowIndex % 2 === 0 ? 'bg-white' : 'bg-blue-50/50')}>
              {(row as (string | string[])[]).map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className={`px-5 py-4 border-b ${isRussia ? "border-[#D8E3F0]" : "border-blue-100"} ${
                    cellIndex === 0 ? (isRussia ? "font-semibold text-[#1F2A44]" : "font-semibold text-gray-900") : ''
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

// 状态标签组件 - 蓝灰系统一（俄罗斯页面用低饱和色）
const StatusBadge = ({ status, isRussia = false }: { status: 'prohibited' | 'partial' | 'open'; isRussia?: boolean }) => {
  const styles = isRussia ? {
    prohibited: 'bg-[#F7E4E4] text-[#8F4F4F] border border-[#E8CFCF]',
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

// 按状态分组的准入限制展示组件 - 蓝灰系统一
const AccessRestrictionsByStatusView = ({ data, isRussia = false }: { data: AccessRestrictionsByStatus; isRussia?: boolean }) => {
  return (
    <div className="space-y-6">
      {/* 完全禁止 */}
      <div className={isRussia ? "bg-[#FCF2F2] border border-[#E8CFCF] border-l-4 border-l-[#B56B6B] rounded-xl p-5 shadow-none" : "bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"}>
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
        <>
          {/* 部分禁止 / 条件性限制 */}
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
                  <div className="text-gray-700 leading-relaxed">
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
        </>
      )}
      
      {/* 开放 / 可准入 */}
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
const ComplianceLicenseCards = ({ cards, isRussia = false }: { cards: ComplianceLicenseCard[], isRussia?: boolean }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div key={index} className={isRussia ? "bg-[#F2F7FD] border border-[#D8E3F0] rounded-xl p-5 hover:shadow-sm transition-shadow" : "bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow"}>
          <h4 className={isRussia ? "font-bold text-[#1F4E79] text-base mb-3" : "font-bold text-slate-900 text-lg mb-3"}>{card.title}</h4>
          <p className={isRussia ? "text-[#334155] leading-relaxed" : "text-slate-700 leading-relaxed"}>{card.description}</p>
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

  const currentCategoryRestrictions = country.accessRestrictions ? country.accessRestrictions[activeCategory as keyof typeof country.accessRestrictions] : { prohibited: [], partiallyProhibited: [], open: [] };

  return (
    <div className="min-h-screen bg-[#F6F8FC]">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600 flex items-center gap-2 transition-colors">
            <span className="text-lg">←</span> 返回首页
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{country.name}</h1>
          {/* 本季动态摘要 - 俄罗斯用蓝灰色系 */}
          <div className={country.id === 'russia' ? "bg-[#F2F7FD] border border-[#D8E3F0] border-l-4 border-l-[#5E82A8] rounded-xl p-6 shadow-none" : "bg-[#EAF2FF] border border-blue-200 border-l-4 border-l-blue-600 rounded-xl p-6 shadow-sm"}>
            <h2 className={country.id === 'russia' ? "text-xl font-bold text-[#1F2A44] mb-4 flex items-center gap-2" : "text-xl font-bold text-blue-900 mb-4 flex items-center gap-2"}>
              <span className={country.id === 'russia' ? "w-2 h-2 bg-[#5E82A8] rounded-full" : "w-2 h-2 bg-blue-600 rounded-full"}></span>
              本季动态摘要
            </h2>
            <div className={country.id === 'russia' ? "text-[#334155]" : "text-gray-800"}>
              <SeasonSummaryText text={country.seasonSummary} />
            </div>
          </div>
        </section>

        <section className="mb-8">
          {/* 法规动态 */}
          <div className={country.id === 'russia' ? "bg-white border border-[#D8E3F0] rounded-2xl shadow-sm p-6" : "bg-white border border-gray-200 rounded-xl shadow-md p-6"}>
            <h2 className="text-2xl font-bold text-[#1F2A44] mb-6 flex items-center gap-3">
              <div className={country.id === 'russia' ? "w-1 h-7 bg-[#5E82A8] rounded-full" : "w-1 h-7 bg-blue-600 rounded-full"}></div>
              法规动态
            </h2>
            <ul className="space-y-4">
              {country.regulatoryUpdates.map((update, index) => {
                const parts = update.split('\n\n');
                const title = parts[0] || '';
                const content = parts.slice(1).join('\n\n');
                
                return (
                  <li key={index} className={country.id === 'russia' ? "flex items-start gap-4 p-5 bg-[#F2F7FD] border border-[#D8E3F0] rounded-xl shadow-none" : "flex items-start gap-4 p-5 bg-white border border-blue-200 rounded-xl shadow-sm"}>
                    <div className={country.id === 'russia' ? "flex-shrink-0 w-2 h-2 mt-2.5 bg-[#5E82A8] rounded-full" : "flex-shrink-0 w-2 h-2 mt-2.5 bg-blue-600 rounded-full"}></div>
                    <div>
                      <span className={country.id === 'russia' ? "font-bold text-[#1F4E79] text-base" : "font-bold text-blue-900 text-base"}>{title}</span>
                      {content && (
                        <>
                          <br />
                          <span className={country.id === 'russia' ? "mt-2 block text-[#334155] leading-relaxed" : "mt-2 block text-gray-700 leading-relaxed"}>{content}</span>
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
          <div className={country.id === 'russia' ? "bg-white border border-[#D8E3F0] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <h2 className="text-2xl font-bold text-[#1F2A44] mb-6 flex items-center gap-3">
              <div className={country.id === 'russia' ? "w-1 h-7 bg-[#5E82A8] rounded-full" : "w-1 h-7 bg-blue-600 rounded-full"}></div>
              监管体系与产品口径
            </h2>
            <div className="space-y-6">
              {/* 监管概述 - 俄罗斯用统一浅蓝灰 */}
              <div className={country.id === 'russia' ? "space-y-4" : "bg-blue-50 border border-blue-200 rounded-xl p-6"}>
                {country.id !== 'russia' && <h3 className="text-lg font-bold text-blue-900 mb-4">监管概述</h3>}
                <div className="space-y-4">
                  {parseOverview(country.regulatorySystem.overview).map((section, index) => (
                    <OverviewSectionCard
                      key={index}
                      title={section.title}
                      content={section.content}
                      isRussia={country.id === 'russia'}
                    />
                  ))}
                </div>
              </div>
              
              {/* 产品定义与监管口径 */}
              {country.id === 'russia' ? (
                <div className="bg-[#F2F7FD] border border-[#D8E3F0] border-l-4 border-l-[#5E82A8] rounded-xl p-5 shadow-none">
                  <h3 className="text-base font-bold text-[#1F4E79] mb-4">产品定义与监管口径</h3>
                  <div className="space-y-6">
                    {/* 产品组1 */}
                    <div className="border-t border-[#D8E3F0] pt-6 first:border-t-0 first:pt-0 first:mt-0">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="w-2 h-2 bg-[#5E82A8] rounded-full mt-2 flex-shrink-0"></span>
                        <h4 className="text-base font-bold text-[#1F2A44]">传统卷烟、雪茄、烟丝、papirosy（俄式纸嘴卷烟）</h4>
                      </div>
                      <div className="ml-5 space-y-4">
                        <div>
                          <div className="inline-flex px-2.5 py-1 rounded-md bg-[#E6EEF8] text-[#1F4E79] text-sm font-semibold mb-2">产品定性：</div>
                          <p className="text-[#334155] leading-relaxed">
                            根据 TR CU 035/2014，烟草制品是全部或部分以烟草叶为原料制成，并以消费者包装投放市场的产品。传统卷烟、雪茄、小雪茄、烟丝、烟斗烟、水烟烟草，以及 papirosy（俄式纸嘴卷烟，即一端为烟草段、另一端为较长中空纸嘴的传统燃烧型烟草制品）通常属于烟草制品。
                          </p>
                        </div>
                        <div>
                          <div className="inline-flex px-2.5 py-1 rounded-md bg-[#E6EEF8] text-[#1F4E79] text-sm font-semibold mb-2">合规重点：</div>
                          <p className="text-[#334155] leading-relaxed">
                            产品本身可准入，主要关注 TR CU 035/2014 符合性声明、生产或进口投入流通许可、数字标识、消费税、最低价格、包装标签、健康警示和销售限制。
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 产品组2 */}
                    <div className="border-t border-[#D8E3F0] pt-6">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="w-2 h-2 bg-[#5E82A8] rounded-full mt-2 flex-shrink-0"></span>
                        <h4 className="text-base font-bold text-[#1F2A44]">HNB烟支 / 加热烟草产品</h4>
                      </div>
                      <div className="ml-5 space-y-4">
                        <div>
                          <div className="inline-flex px-2.5 py-1 rounded-md bg-[#E6EEF8] text-[#1F4E79] text-sm font-semibold mb-2">产品定性：</div>
                          <p className="text-[#334155] leading-relaxed">
                            第15-FZ号法将加热烟草产品列入尼古丁产品范围。HNB烟支通常指含烟草材料、通过加热装置加热后供消费者吸入的产品，监管上按加热烟草产品、烟草产品或尼古丁产品判断，不按 snus、nasvay、咀嚼烟草、鼻烟等无烟烟草产品处理。
                          </p>
                        </div>
                        <div>
                          <div className="inline-flex px-2.5 py-1 rounded-md bg-[#E6EEF8] text-[#1F4E79] text-sm font-semibold mb-2">合规重点：</div>
                          <p className="text-[#334155] leading-relaxed">
                            产品本身可准入，重点关注生产或进口投入流通许可、数字标识、消费税、最低价格、包装标签和销售限制。
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 产品组3 */}
                    <div className="border-t border-[#D8E3F0] pt-6">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="w-2 h-2 bg-[#5E82A8] rounded-full mt-2 flex-shrink-0"></span>
                        <h4 className="text-base font-bold text-[#1F2A44]">无烟烟草产品</h4>
                      </div>
                      <div className="ml-5 space-y-4">
                        <div>
                          <div className="inline-flex px-2.5 py-1 rounded-md bg-[#E6EEF8] text-[#1F4E79] text-sm font-semibold mb-2">产品定性：</div>
                          <p className="text-[#334155] leading-relaxed">
                            根据第268-FZ号法，无烟烟草产品是通过吮吸、咀嚼或鼻吸等方式使用的烟草产品，典型产品包括 snus（湿润口含烟草制品）、nasvay（中亚地区常见的口含 / 咀嚼型无烟烟草制品）、咀嚼烟草和鼻烟。该类产品与 HNB烟支不同，不通过加热装置产生可吸入气溶胶。
                          </p>
                        </div>
                        <div>
                          <div className="inline-flex px-2.5 py-1 rounded-md bg-[#E6EEF8] text-[#1F4E79] text-sm font-semibold mb-2">合规重点：</div>
                          <p className="text-[#334155] leading-relaxed">
                            snus、nasvay 及相关口含、鼻吸、咀嚼类无烟烟草产品禁止批发和零售；第268-FZ号法下的技术识别规则不改变第15-FZ号法项下的禁售结论。
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 产品组4 */}
                    <div className="border-t border-[#D8E3F0] pt-6">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="w-2 h-2 bg-[#5E82A8] rounded-full mt-2 flex-shrink-0"></span>
                        <h4 className="text-base font-bold text-[#1F2A44]">口含 / 鼻吸类尼古丁产品</h4>
                      </div>
                      <div className="ml-5 space-y-4">
                        <div>
                          <div className="inline-flex px-2.5 py-1 rounded-md bg-[#E6EEF8] text-[#1F4E79] text-sm font-semibold mb-2">产品定性：</div>
                          <p className="text-[#334155] leading-relaxed">
                            该类产品含尼古丁或尼古丁衍生物，并通过口含、吮吸、咀嚼或鼻吸方式摄入尼古丁。典型产品包括尼古丁袋、尼古丁口含膜、食品型尼古丁产品，以及含尼古丁粉末、混合物等。
                          </p>
                        </div>
                        <div>
                          <div className="inline-flex px-2.5 py-1 rounded-md bg-[#E6EEF8] text-[#1F4E79] text-sm font-semibold mb-2">合规重点：</div>
                          <p className="text-[#334155] leading-relaxed">
                            尼古丁袋、尼古丁口含膜、食品型尼古丁产品，以及其他通过口含、吮吸、咀嚼或鼻吸方式摄入尼古丁的产品，适用第15-FZ号法下尼古丁产品禁售规则，禁止批发和零售。
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 产品组5 - 电子烟相关产品 */}
                    <div className="border-t border-[#D8E3F0] pt-6">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="w-2 h-2 bg-[#5E82A8] rounded-full mt-2 flex-shrink-0"></span>
                        <h4 className="text-base font-bold text-[#1F2A44]">电子烟相关产品</h4>
                      </div>
                      <div className="ml-5 space-y-4">
                        <div>
                          <div className="inline-flex px-2.5 py-1 rounded-md bg-[#E6EEF8] text-[#1F4E79] text-sm font-semibold mb-2">总体口径：</div>
                          <p className="text-[#334155] leading-relaxed">
                            俄罗斯法规通常按产品构成拆分判断电子烟相关产品，不使用一个单一概念统一覆盖全部产品。页面展示上可分为设备类、液体类、预灌装 / 组合 / 空组件三类。
                          </p>
                        </div>

                        {/* 三个编号子项 */}
                        <div className="bg-[#EEF5FC] border border-[#D8E3F0] rounded-lg p-4 space-y-5">
                          {/* 子项1 */}
                          <div className="border-b border-[#D8E3F0] pb-5 last:border-b-0 last:pb-0">
                            <div className="font-semibold text-[#1F2A44] mb-3">1. 设备类：电子烟设备 / 电子雾化设备 / HNB加热设备</div>
                            <div className="space-y-3">
                              <div>
                                <div className="inline-flex px-2 py-0.5 rounded bg-[#E6EEF8] text-[#1F4E79] text-xs font-semibold mb-2">法规定义：</div>
                                <p className="text-[#334155] leading-relaxed text-sm">
                                  根据第15-FZ号法，尼古丁产品使用装置是指用于产生含尼古丁气溶胶、蒸气或气体，并供使用者吸入的电子或其他装置，包括电子尼古丁输送系统和加热烟草系统，但不包括依法注册为医疗器械或药品的产品。
                                </p>
                                <p className="text-[#334155] leading-relaxed text-sm mt-2">
                                  电子烟设备、可重复使用电子雾化设备、HNB加热设备通常按尼古丁产品使用系统 / 装置理解。
                                </p>
                              </div>
                              <div>
                                <div className="inline-flex px-2 py-0.5 rounded bg-[#E6EEF8] text-[#1F4E79] text-xs font-semibold mb-2">监管与合规重点：</div>
                                <p className="text-[#334155] leading-relaxed text-sm">
                                  单纯电子烟设备本身的消费税已经取消；可重复使用电子烟及类似个人电加热雾化设备的数字标识仍处于试验 / 过渡阶段。进入零售市场仍需遵守销售地点、展示、远程销售、自动售卖和未成年人保护等限制。
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* 子项2 */}
                          <div className="border-b border-[#D8E3F0] pb-5 last:border-b-0 last:pb-0">
                            <div className="font-semibold text-[#1F2A44] mb-3">2. 液体类：烟油 / 电子烟补充液</div>
                            <div className="space-y-3">
                              <div>
                                <div className="inline-flex px-2 py-0.5 rounded bg-[#E6EEF8] text-[#1F4E79] text-xs font-semibold mb-2">法规定义：</div>
                                <p className="text-[#334155] leading-relaxed text-sm">
                                  根据第15-FZ号法，尼古丁液体包括尼古丁含量不低于 0.1 mg/ml 的液体；无尼古丁液体包括不含尼古丁或尼古丁含量低于 0.1 mg/ml、并用于电子尼古丁输送系统的液体。
                                </p>
                              </div>
                              <div>
                                <div className="inline-flex px-2 py-0.5 rounded bg-[#E6EEF8] text-[#1F4E79] text-xs font-semibold mb-2">监管与合规重点：</div>
                                <p className="text-[#334155] leading-relaxed text-sm">
                                  烟油、电子烟补充液通常按尼古丁液体或无尼古丁液体管理，判断重点是尼古丁含量和用途。零售环节不得销售尼古丁浓度超过 20 mg/ml 的尼古丁液体或尼古丁溶液；含尼古丁液体涉及消费税、最低价格、数字标识及生产 / 进口投入流通许可。
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* 子项3 */}
                          <div>
                            <div className="font-semibold text-[#1F2A44] mb-3">3. 预灌装 / 组合 / 空组件：含液体烟弹、设备与液体组合产品、空烟弹、空容器</div>
                            <div className="space-y-3">
                              <div>
                                <div className="inline-flex px-2 py-0.5 rounded bg-[#E6EEF8] text-[#1F4E79] text-xs font-semibold mb-2">法规定义：</div>
                                <p className="text-[#334155] leading-relaxed text-sm">
                                  俄罗斯公开法规未见对含液体烟弹、设备与液体组合产品、空烟弹或空容器设置统一单独定义。该类产品通常需拆分适用第15-FZ号法下的尼古丁产品使用装置、尼古丁液体或无尼古丁液体规则。
                                </p>
                              </div>
                              <div>
                                <div className="inline-flex px-2 py-0.5 rounded bg-[#E6EEF8] text-[#1F4E79] text-xs font-semibold mb-2">监管与合规重点：</div>
                                <p className="text-[#334155] leading-relaxed text-sm">
                                  含液体烟弹和设备与液体组合产品的核心风险在液体部分；设备部分按尼古丁产品使用系统 / 装置判断，液体部分按尼古丁液体或无尼古丁液体判断。空烟弹、空容器或普通不含液体组件，通常不直接按尼古丁液体处理，重点结合设备组件、海关归类和下游用途判断。
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 产品组6 */}
                    <div className="border-t border-[#D8E3F0] pt-6">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="w-2 h-2 bg-[#5E82A8] rounded-full mt-2 flex-shrink-0"></span>
                        <h4 className="text-base font-bold text-[#1F2A44]">烟叶、烟草薄片、烟草原料、尼古丁原料</h4>
                      </div>
                      <div className="ml-5 space-y-4">
                        <div>
                          <div className="inline-flex px-2.5 py-1 rounded-md bg-[#E6EEF8] text-[#1F4E79] text-sm font-semibold mb-2">产品定性：</div>
                          <p className="text-[#334155] leading-relaxed">
                            第203-FZ号法将烟草制品、烟草产品、尼古丁产品及其生产原料纳入生产流通监管。烟叶、烟草薄片、烟草原料、尼古丁原料通常属于生产链条中的原料或半成品，与消费者可直接使用的烟草制品、HNB烟支、电子烟液、尼古丁袋等成品不同。
                          </p>
                        </div>
                        <div>
                          <div className="inline-flex px-2.5 py-1 rounded-md bg-[#E6EEF8] text-[#1F4E79] text-sm font-semibold mb-2">合规重点：</div>
                          <p className="text-[#334155] leading-relaxed">
                            俄罗斯本地生产或加工主体需取得覆盖烟草原料或尼古丁原料的生产许可；俄罗斯进口商需取得烟草原料或尼古丁原料进口投入流通许可；原料不得作为普通消费者成品零售。
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 产品组7 */}
                    <div className="border-t border-[#D8E3F0] pt-6">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="w-2 h-2 bg-[#5E82A8] rounded-full mt-2 flex-shrink-0"></span>
                        <h4 className="text-base font-bold text-[#1F2A44]">滤嘴棒、爆珠、香精香料、普通烟用辅材</h4>
                      </div>
                      <div className="ml-5 space-y-4">
                        <div>
                          <div className="inline-flex px-2.5 py-1 rounded-md bg-[#E6EEF8] text-[#1F4E79] text-sm font-semibold mb-2">产品定性：</div>
                          <p className="text-[#334155] leading-relaxed">
                            俄罗斯公开法规资料未见将滤嘴棒、爆珠、香精香料等普通烟用辅材统一定义为烟草制品或尼古丁产品。该类产品通常按成分、用途、海关归类和下游产品用途判断。
                          </p>
                        </div>
                        <div>
                          <div className="inline-flex px-2.5 py-1 rounded-md bg-[#E6EEF8] text-[#1F4E79] text-sm font-semibold mb-2">合规重点：</div>
                          <p className="text-[#334155] leading-relaxed">
                            不含尼古丁、不含烟草提取物、仅作为普通辅材的，通常可按普通辅材理解；含尼古丁、烟草提取物，或作为烟油、含液体烟弹、HNB烟支、尼古丁产品组件使用的，应转入对应成品或原料监管路径。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <InfoBlock title="品类定义">
                  <FormattedText text={country.regulatorySystem.definition} />
                </InfoBlock>
              )}
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className={country.id === 'russia' ? "bg-white border border-[#D8E3F0] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <h2 className="text-2xl font-bold text-[#1F2A44] mb-6 flex items-center gap-3">
              <div className={country.id === 'russia' ? "w-1 h-7 bg-[#5E82A8] rounded-full" : "w-1 h-7 bg-blue-600 rounded-full"}></div>
              准入与禁令限制
            </h2>
            
            {country.accessRestrictionsByStatus ? (
              // 使用新的按状态分组的展示方式
              <AccessRestrictionsByStatusView data={country.accessRestrictionsByStatus} isRussia={country.id === 'russia'} />
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
          <div className={country.id === 'russia' ? "bg-white border border-[#D8E3F0] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <h2 className="text-2xl font-bold text-[#1F2A44] mb-6 flex items-center gap-3">
              <div className={country.id === 'russia' ? "w-1 h-7 bg-[#5E82A8] rounded-full" : "w-1 h-7 bg-blue-600 rounded-full"}></div>
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
                    <tr className={country.id === 'russia' ? "bg-[#E6EEF8]" : "bg-gray-50"}>
                      <th className={country.id === 'russia' ? "px-4 py-3 text-left font-semibold text-[#1F4E79] border-b border-[#D8E3F0]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>产品</th>
                      <th className={country.id === 'russia' ? "px-4 py-3 text-left font-semibold text-[#1F4E79] border-b border-[#D8E3F0]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>NPPBKC</th>
                      <th className={country.id === 'russia' ? "px-4 py-3 text-left font-semibold text-[#1F4E79] border-b border-[#D8E3F0]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>PI 进口批准</th>
                      <th className={country.id === 'russia' ? "px-4 py-3 text-left font-semibold text-[#1F4E79] border-b border-[#D8E3F0]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>BPOM 注册</th>
                      <th className={country.id === 'russia' ? "px-4 py-3 text-left font-semibold text-[#1F4E79] border-b border-[#D8E3F0]" : "px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"}>Halal 认证</th>
                    </tr>
                  </thead>
                  <tbody>
                    {country.compliance.table.map((row, index) => (
                      <tr key={index} className={country.id === 'russia' ? "hover:bg-[#F8FBFF]" : "hover:bg-gray-50"}>
                        <td className={country.id === 'russia' ? "px-4 py-3 border-b border-[#D8E3F0] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}>{row.product}</td>
                        <td className={country.id === 'russia' ? "px-4 py-3 border-b border-[#D8E3F0] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}><TableCellContent content={row.nppbkc} /></td>
                        <td className={country.id === 'russia' ? "px-4 py-3 border-b border-[#D8E3F0] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}><TableCellContent content={row.piImportApproval} /></td>
                        <td className={country.id === 'russia' ? "px-4 py-3 border-b border-[#D8E3F0] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}><TableCellContent content={row.bpomRegistration} /></td>
                        <td className={country.id === 'russia' ? "px-4 py-3 border-b border-[#D8E3F0] text-[#334155]" : "px-4 py-3 border-b border-gray-200"}><TableCellContent content={row.halalCertification} /></td>
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
          <div className={country.id === 'russia' ? "bg-white border border-[#D8E3F0] rounded-2xl shadow-sm p-6" : "bg-white rounded-lg shadow-sm border border-gray-200 p-6"}>
            <h2 className={country.id === 'russia' ? "text-2xl font-bold text-[#1F2A44] mb-6 flex items-center gap-3" : "text-2xl font-semibold text-gray-900 mb-6"}>
              {country.id === 'russia' && <div className="w-1 h-7 bg-[#5E82A8] rounded-full"></div>}
              税收政策
            </h2>
            
            {country.tax.exciseTax && (
              <div className="mb-6">
                <p className={country.id === 'russia' ? "text-[#334155] leading-relaxed" : "text-gray-700 leading-relaxed"}>{country.tax.exciseTax}</p>
              </div>
            )}
            
            {country.id === 'russia' ? (
              <div className="space-y-6">
                {country.tax.policies.find(p => p.title === '消费税说明') && (
                  <InfoBlock title="消费税说明" isRussia={true}>
                    <div className="space-y-3 text-[#334155] text-base leading-relaxed">
                      {country.tax.policies.find(p => p.title === '消费税说明')?.description
                        .split(/\n\n+/)
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                  </InfoBlock>
                )}
                
                {country.tax.exciseTaxTable && (
                  <InfoBlock title="消费税税率表" isRussia={true}>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse border-[#D8E3F0]">
                        <thead>
                          <tr className="bg-[#E6EEF8]">
                            {country.tax.exciseTaxTable.headers.map((header, idx) => (
                              <th 
                                key={idx} 
                                className="px-4 py-3 text-left font-semibold text-[#1F4E79] border border-[#D8E3F0]"
                                style={idx === 0 ? { width: '28%' } : { width: '24%' }}
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {country.tax.exciseTaxTable.rows.map((row, rowIdx) => (
                            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white/50' : 'bg-[#F8FBFF]'}>
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="px-4 py-3 border border-[#D8E3F0] text-[#334155]">
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
                
                {country.tax.policies.find(p => p.title === '最低价格说明') && (
                  <InfoBlock title="最低价格说明" isRussia={true}>
                    <p className="text-[#334155] text-base leading-relaxed">
                      {country.tax.policies.find(p => p.title === '最低价格说明')?.description}
                    </p>
                  </InfoBlock>
                )}
                
                {country.tax.minimumPriceTable && (
                  <InfoBlock title="最低价格表" isRussia={true}>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse border-[#D8E3F0]">
                        <thead>
                          <tr className="bg-[#E6EEF8]">
                            {country.tax.minimumPriceTable.headers.map((header, idx) => (
                              <th 
                                key={idx} 
                                className="px-4 py-3 text-left font-semibold text-[#1F4E79] border border-[#D8E3F0]"
                                style={idx === 0 ? { width: '30%' } : { width: '70%' }}
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {country.tax.minimumPriceTable.rows.map((row, rowIdx) => (
                            <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white/50' : 'bg-[#F8FBFF]'}>
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="px-4 py-3 border border-[#D8E3F0] text-[#334155]">
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
                              <th 
                                key={idx} 
                                className="px-4 py-3 text-left font-semibold text-gray-900 border border-gray-200"
                                style={idx === 0 ? { width: '28%' } : { width: '24%' }}
                              >
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
          <div className={country.id === 'russia' ? "bg-white border border-[#D8E3F0] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <h2 className="text-2xl font-bold text-[#1F2A44] mb-6 flex items-center gap-3">
              <div className={country.id === 'russia' ? "w-1 h-7 bg-[#5E82A8] rounded-full" : "w-1 h-7 bg-blue-600 rounded-full"}></div>
              市场运营规范
            </h2>
            {country.marketOperation.regulations.length > 0 ? (
              <div className="space-y-4">
                  {country.marketOperation.regulations.map((regulation, index) => {
                  // 检查是否是主要酋长国差异并且有表格数据
                  if (country.emirateDifferences && regulation.category === '主要酋长国差异') {
                    return (
                      <InfoBlock key={index} title={regulation.category} isRussia={country.id === 'russia'}>
                        <EmirateDifferencesTable data={country.emirateDifferences} />
                      </InfoBlock>
                    );
                  }
                  
                  // 俄罗斯页面统一使用浅蓝灰色，其他国家保持原样
                  if (country.id === 'russia') {
                    return (
                      <div key={index} className="bg-[#F2F7FD] border border-[#D8E3F0] border-l-4 border-l-[#5E82A8] rounded-xl p-5 shadow-none">
                        <h3 className="text-base font-bold text-[#1F4E79] mb-3">{regulation.category}</h3>
                        <ul className="space-y-3">
                          {regulation.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-[#334155] leading-relaxed flex items-start gap-3">
                              <span className="text-[#5E82A8] mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  
                  // 其他国家统一使用白底+左侧蓝色粗竖线样式
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
          <div className={country.id === 'russia' ? "bg-white border border-[#D8E3F0] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <div className="flex items-center gap-3 mb-6">
              {country.id === 'russia' ? (
                <div className="w-1 h-7 bg-[#B56B6B] rounded-full"></div>
              ) : (
                <span className="text-red-600 text-2xl">⚠️</span>
              )}
              <h2 className="text-2xl font-bold text-[#1F2A44]">趋势预判与红线警告</h2>
            </div>
            {country.id === 'china' || country.id === 'russia' ? (
              // 长文本趋势分析使用上下结构，避免左右栏压缩正文
              <div className="space-y-6">
                {/* 政策趋势分析 - 上方 */}
                <div className={country.id === 'russia' ? "bg-[#F2F7FD] border border-[#D8E3F0] rounded-xl p-5 shadow-none" : "bg-blue-50 border border-blue-200 rounded-xl p-5"}>
                  <h3 className={country.id === 'russia' ? "text-base font-bold text-[#1F4E79] mb-4" : "text-lg font-bold text-blue-900 mb-4"}>趋势预判</h3>
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
                {/* 合规红线清单 - 下方 */}
                <div className={country.id === 'russia' ? "bg-[#FCF5F5] border border-[#E8D3D3] border-l-4 border-l-[#B56B6B] rounded-xl p-5 shadow-none" : "bg-red-50 border-2 border-red-200 rounded-xl p-5"}>
                  <div className="flex items-center gap-2 mb-4">
                    {country.id !== 'russia' && <div className="w-1 h-6 bg-red-600 rounded-full"></div>}
                    <h3 className={country.id === 'russia' ? "text-base font-bold text-[#B56B6B]" : "text-lg font-bold text-red-800"}>合规红线清单</h3>
                  </div>
                  <ul className="space-y-3">
                    {country.trendsWarnings.redLines.map((line, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className={country.id === 'russia' ? "text-[#B56B6B] mt-1.5" : "text-red-600 mt-1.5"}>✗</span>
                        <span className={country.id === 'russia' ? "text-[#334155] leading-relaxed" : "text-gray-800 leading-relaxed"}>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              // 其他国家页面使用左右结构
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
          <div className={country.id === 'russia' ? "bg-white border border-[#D8E3F0] rounded-2xl shadow-sm p-6" : "bg-white rounded-xl shadow-md border border-gray-200 p-6"}>
            <h2 className="text-2xl font-bold text-[#1F2A44] mb-6 flex items-center gap-3">
              <div className={country.id === 'russia' ? "w-1 h-7 bg-[#5E82A8] rounded-full" : "w-1 h-7 bg-blue-600 rounded-full"}></div>
              参考资料库
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className={country.id === 'russia' ? "text-base font-bold text-[#1F4E79] mb-3" : "text-lg font-medium text-gray-900 mb-3"}>法规汇编</h3>
                {country.references.regulations.length > 0 ? (
                  <ul className="space-y-2">
                    {country.references.regulations.map((reg, index) => (
                      <li key={index}>
                        <a href={reg.url} className={country.id === 'russia' ? "text-[#1F4E79] hover:underline" : "text-blue-600 hover:underline"}>{reg.title}</a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">资料收录中...</p>
                )}
              </div>
              <div>
                <h3 className={country.id === 'russia' ? "text-base font-bold text-[#1F4E79] mb-3" : "text-lg font-medium text-gray-900 mb-3"}>重要资讯</h3>
                {country.references.news.length > 0 ? (
                  <ul className="space-y-2">
                    {country.references.news.map((news, index) => (
                      <li key={index}>
                        <a href={news.url} className={country.id === 'russia' ? "text-[#1F4E79] hover:underline" : "text-blue-600 hover:underline"}>{news.title}</a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">资料收录中...</p>
                )}
              </div>
            </div>
            {(country.id !== 'russia' || country.references.pdfs.length > 0) && (
              <div className="mt-6">
                <h3 className={country.id === 'russia' ? "text-base font-bold text-[#1F4E79] mb-3" : "text-lg font-medium text-gray-900 mb-3"}>PDF 下载</h3>
                {country.references.pdfs.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {country.references.pdfs.map((pdf, index) => (
                      <a
                        key={index}
                        href={pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={country.id === 'russia' ? "inline-flex items-center gap-2 px-4 py-2 bg-[#E6EEF8] hover:bg-[#D8E3F0] text-[#1F4E79] rounded-lg transition-colors" : "inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors"}
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
            )}
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
