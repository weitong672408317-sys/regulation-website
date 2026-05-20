'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { baseCountries, AccessRestrictionsByStatus, EmirateDifferenceRow, ComplianceLicenseCard } from '../../../../data/mockData';

// 文本格式化组件
const FormattedText = ({ text }: { text: string }) => {
  // 处理分段（\n\n）和换行（\n）
  const paragraphs = text.split(/\n\n+/);
  
  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph, pIndex) => {
        // 检查是否是 * 标记的列表（监管概述中的标题格式）
        if (paragraph.trim().startsWith('* ') || paragraph.trim().startsWith('- ')) {
          const items = paragraph.split('\n').filter(line => line.trim());
          return (
            <div key={pIndex} className="space-y-3">
              {items.map((item, itemIndex) => {
                const trimmed = item.trim().replace(/^[*-]\s*/, '');
                const colonPos = trimmed.indexOf('：');
                if (colonPos !== -1) {
                  const title = trimmed.substring(0, colonPos + 1);
                  const content = trimmed.substring(colonPos + 1).trim();
                  return (
                    <div key={itemIndex} className="space-y-1">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1">•</span>
                        <span className="font-semibold text-gray-900">{title}</span>
                      </div>
                      {content && (
                        <div className="ml-5 text-gray-700">
                          {content}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <div key={itemIndex} className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">•</span>
                    <span className="text-gray-700">{trimmed}</span>
                  </div>
                );
              })}
            </div>
          );
        }
        
        // 检查是否是 "数字. 标题" 格式的品类定义
        const numberedTitleMatch = paragraph.match(/^\d+[.、]\s*([^\n]+)(?:\n([\s\S]*))?$/);
        if (numberedTitleMatch) {
          const [, title, content] = numberedTitleMatch;
          return (
            <div key={pIndex} className="space-y-2">
              <h4 className="font-bold text-gray-900 text-lg">{paragraph.match(/^\d+[.、]\s*[^\n]+/)?.[0]}</h4>
              {content && <FormattedContent content={content} />}
            </div>
          );
        }
        
        // 检查是否是 "标题：内容" 格式
        const titleContentMatch = paragraph.match(/^([^：\n]+)：([\s\S]*)$/);
        if (titleContentMatch) {
          const [, title, content] = titleContentMatch;
          return (
            <div key={pIndex} className="space-y-2">
              <h4 className="font-semibold text-gray-900">{title}：</h4>
              <FormattedContent content={content} />
            </div>
          );
        }
        
        // 检查是否是 bullet list（以 • 或 - 或数字开头）
        const bulletLines = paragraph.split('\n');
        const hasBullets = bulletLines.some(line => 
          line.trim().startsWith('•') || 
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
                const content = trimmed.replace(/^•\s*/, '').replace(/^-\s*/, '').replace(/^\d+[.、]\s*/, '');
                return (
                  <li key={lIndex} className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">•</span>
                    <span className="text-gray-700">{content}</span>
                  </li>
                );
              })}
            </ul>
          );
        }
        
        // 普通段落，处理内部换行
        return <FormattedContent key={pIndex} content={paragraph} />;
      })}
    </div>
  );
};

// 处理单段内容的内部换行
const FormattedContent = ({ content }: { content: string }) => {
  const lines = content.split('\n');
  return (
    <div className="space-y-2">
      {lines.map((line, index) => {
        const trimmed = line.trim();
        if (!trimmed) return null;
        return <p key={index} className="text-gray-700">{trimmed}</p>;
      })}
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
              <div className="text-amber-800 leading-relaxed">{item.rule}</div>
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
            <p className="text-blue-900"><strong>本季动态摘要：</strong>{country.seasonSummary}</p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm border border-blue-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span>📢</span> 法规动态
            </h2>
            <ul className="space-y-3">
              {country.regulatoryUpdates.map((update, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{update}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">监管体系与定义</h2>
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
            {country.tax.policies.length > 0 ? (
              <>
                {country.tax.exciseTax && (
                  <p className="text-gray-700 mb-6">{country.tax.exciseTax}</p>
                )}
                <div className="space-y-6">
                  {country.tax.policies.map((policy, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1">•</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">{policy.title}</h4>
                          <p className="text-gray-700 mt-1">{policy.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : country.tax.exciseTax ? (
              <FormattedText text={country.tax.exciseTax} />
            ) : null}
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
                  
                  if (regulation.category === '销售与陈列' || regulation.category === '销售渠道' || regulation.category === '销售与渠道') {
                    bgClass = 'bg-blue-50 border-blue-200';
                    textClass = 'text-blue-900';
                  } else if (regulation.category === '包装与标签' || regulation.category === '包装、陈列与标签') {
                    bgClass = 'bg-green-50 border-green-200';
                    textClass = 'text-green-900';
                  } else if (regulation.category === '广告与宣传' || regulation.category === '广告、影视和变相宣传' || regulation.category === '广告、促销与展示') {
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
                  } else if (regulation.category === '市场流通') {
                    bgClass = 'bg-cyan-50 border-cyan-200';
                    textClass = 'text-cyan-900';
                  }
                  
                  return (
                    <div key={index} className={`${bgClass} border rounded-lg p-5`}>
                      <h3 className={`text-lg font-medium ${textClass} mb-3`}>{regulation.category}</h3>
                      <ul className="space-y-2">
                        {regulation.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span className={`mt-1 ${textClass.replace('900', '500')}`}>•</span>
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
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">© 2024 全球法规动态追踪门户. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
