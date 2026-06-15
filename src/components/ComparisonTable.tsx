'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  countryOverviewData,
  intensityDistribution,
  productCategories,
  productComparisonMap,
  type AccessColor,
  type IntensityLevel,
  type ProductStatusType,
} from '@/data/comparisonData';
import { accessStatusColors, type AccessStatusType } from '@/data/productAccessOverview';

type TabType = 'overview' | 'product';

// ===== 产品准入三分类（用户要求固定三类） =====
type AccessCategory = 'accessible' | 'restricted' | 'prohibited';

const accessCategoryConfig: Record<AccessCategory, { label: string; barColor: string; barTextColor: string }> = {
  accessible: {
    label: '可准入',
    barColor: '#4A9B5A',   // 比badge更深的绿色
    barTextColor: '#ffffff',  // 白色文字
  },
  restricted: {
    label: '部分限制/监管要求不明确',
    barColor: '#B89038',   // 比badge更深的琥珀色
    barTextColor: '#ffffff',  // 白色文字
  },
  prohibited: {
    label: '禁止/未开放',
    barColor: '#C45252',   // 比badge更深的红色
    barTextColor: '#ffffff',  // 白色文字
  },
};

// 将 statusType 映射到三分类
const mapToAccessCategory = (statusType: ProductStatusType): AccessCategory => {
  switch (statusType) {
    case 'green': return 'accessible';
    case 'amber': return 'restricted';
    case 'mixed': return 'restricted';
    case 'red': return 'prohibited';
  }
};

// ===== 监管强度配色 =====

const intensityColorConfig: Record<IntensityLevel, { bg: string; text: string; border: string }> = {
  '极高': { bg: '#DC2626', text: '#ffffff', border: '#B91C1C' },
  '高':   { bg: '#F97316', text: '#ffffff', border: '#EA580C' },
  '中':   { bg: '#FACC15', text: '#78350F', border: '#CA8A04' },
  '低至中': { bg: '#A3E635', text: '#166534', border: '#84CC16' },
};

const getIntensityBadgeClass = (intensity: IntensityLevel) => {
  const c = intensityColorConfig[intensity];
  return { backgroundColor: c.bg, color: c.text };
};

// ===== 辅助函数 =====

const getDotStyle = (color: AccessColor): React.CSSProperties => {
  switch (color) {
    case 'green': return { backgroundColor: accessStatusColors.green.dot };
    case 'amber': return { backgroundColor: accessStatusColors.amber.dot };
    case 'red': return { backgroundColor: accessStatusColors.red.dot };
  }
};

const getAccessCategoryDotStyle = (category: AccessCategory): React.CSSProperties => {
  const colorMap: Record<AccessCategory, AccessStatusType> = { accessible: 'green', restricted: 'amber', prohibited: 'red' };
  return { backgroundColor: accessStatusColors[colorMap[category]].dot };
};

/** 按状态色分组产品准入条目 */
const groupByColor = (items: { color: AccessColor; status: string; products: string[] }[]) => {
  const order: AccessColor[] = ['green', 'amber', 'red'];
  const groups: { color: AccessColor; items: { status: string; products: string[] }[] }[] = [];
  for (const c of order) {
    const filtered = items.filter(i => i.color === c);
    if (filtered.length > 0) groups.push({ color: c, items: filtered });
  }
  return groups;
};

const statusCardStyles: Record<AccessColor, { bg: string; title: string }> = {
  green: { bg: 'bg-[#E8F5ED]', title: 'text-[#3D7050]' },
  amber: { bg: 'bg-[#F8F3E8]', title: 'text-[#8B6F2E]' },
  red:   { bg: 'bg-[#FCEAEA]', title: 'text-[#B33B3B]' },
};

export default function ComparisonTable() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [selectedIntensity, setSelectedIntensity] = useState<IntensityLevel | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string>('traditional-tobacco');
  const [selectedAccessCategory, setSelectedAccessCategory] = useState<AccessCategory | null>(null);

  const totalCountries = countryOverviewData.length;

  // Tab 1: 按监管强度筛选国家
  const filteredOverviewCountries = useMemo(() => {
    if (!selectedIntensity) return countryOverviewData;
    return countryOverviewData.filter(c => c.intensity === selectedIntensity);
  }, [selectedIntensity]);

  // Tab 2: 当前产品的对比数据
  const currentProductData = useMemo(() => {
    return productComparisonMap[selectedProduct] || [];
  }, [selectedProduct]);

  // Tab 2: 计算三分类分布
  const accessDistribution = useMemo(() => {
    const dist: Record<AccessCategory, number> = { accessible: 0, restricted: 0, prohibited: 0 };
    const names: Record<AccessCategory, string[]> = { accessible: [], restricted: [], prohibited: [] };
    currentProductData.forEach(c => {
      const cat = mapToAccessCategory(c.statusType);
      dist[cat]++;
      names[cat].push(c.countryName);
    });
    return { dist, names };
  }, [currentProductData]);

  // Tab 2: 按准入分类筛选
  const filteredProductCountries = useMemo(() => {
    if (!selectedAccessCategory) return currentProductData;
    return currentProductData.filter(c => mapToAccessCategory(c.statusType) === selectedAccessCategory);
  }, [currentProductData, selectedAccessCategory]);

  const handleIntensityClick = (intensity: IntensityLevel) => {
    setSelectedIntensity(prev => prev === intensity ? null : intensity);
  };

  const handleAccessCategoryClick = (category: AccessCategory) => {
    setSelectedAccessCategory(prev => prev === category ? null : category);
  };

  const handleProductChange = (productId: string) => {
    setSelectedProduct(productId);
    setSelectedAccessCategory(null);
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSelectedIntensity(null);
    setSelectedAccessCategory(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* ===== 选项卡 ===== */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        <button
          className={`px-5 sm:px-6 py-3 text-sm font-medium transition-colors relative ${
            activeTab === 'overview'
              ? 'text-indigo-600 bg-white'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => handleTabChange('overview')}
        >
          国家监管概览
          {activeTab === 'overview' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
          )}
        </button>
        <button
          className={`px-5 sm:px-6 py-3 text-sm font-medium transition-colors relative ${
            activeTab === 'product'
              ? 'text-indigo-600 bg-white'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => handleTabChange('product')}
        >
          产品准入对比
          {activeTab === 'product' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
          )}
        </button>
      </div>

      {/* ===== 选项卡一：国家监管概览 ===== */}
      {activeTab === 'overview' && (
        <div className="p-4 sm:p-6">
          {/* 区域标题 */}
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="text-sm font-semibold text-gray-800">监管强度分布</h3>
            <span className="text-xs text-slate-400">共 {totalCountries} 个国家/地区</span>
          </div>

          {/* 操作说明 */}
          <p className="text-xs text-slate-400 mb-3">
            点击监管强度色块，可筛选对应强度的国家/地区。
          </p>

          {/* 监管强度分布条 */}
          <div className="mb-3">
            <div className="flex h-9 rounded-lg overflow-hidden border border-gray-200">
              {intensityDistribution.map(seg => {
                const config = intensityColorConfig[seg.label];
                const isSelected = selectedIntensity === seg.label;
                return (
                  <div
                    key={seg.label}
                    className="flex items-center justify-center text-xs cursor-pointer transition-all duration-200 select-none"
                    style={{
                      width: `${(seg.count / totalCountries) * 100}%`,
                      minWidth: '2.5rem',
                      backgroundColor: config.bg,
                      color: config.text,
                      boxShadow: isSelected ? `inset 0 0 0 2px rgba(0,0,0,0.25)` : 'none',
                      fontWeight: isSelected ? 700 : 500,
                    }}
                    onClick={() => handleIntensityClick(seg.label)}
                    title={`${seg.label}：${seg.count}个（${seg.countries.join('、')}）`}
                  >
                    <span className="px-1 whitespace-nowrap">{seg.label} {seg.count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 当前显示范围 / 当前筛选条件 */}
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
            {selectedIntensity ? (
              <>
                <span>
                  当前筛选：监管强度 = <span className="font-medium text-gray-700">{selectedIntensity}</span>
                  ｜显示 {filteredOverviewCountries.length} 个国家/地区
                </span>
                <button
                  className="text-indigo-600 hover:underline text-sm"
                  onClick={() => setSelectedIntensity(null)}
                >
                  清除筛选
                </button>
              </>
            ) : (
              <span>当前显示：全部国家/地区（共 {totalCountries} 个）</span>
            )}
          </div>

          {/* 国家监管概览表 - 桌面端 */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ width: '12%' }}>
                    国家/地区
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ width: '28%' }}>
                    监管特征
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ width: '48%' }}>
                    产品准入速览
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ width: '12%' }}>
                    监管强度
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOverviewCountries.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-8 text-center text-sm text-gray-400">
                      暂无国家/地区属于该状态。
                    </td>
                  </tr>
                ) : (
                  filteredOverviewCountries.map(country => (
                    <tr key={country.countryId} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 align-middle">
                        <Link
                          href={`/country/${country.countryId}`}
                          className="group inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer"
                        >
                          {country.countryName}
                          <svg className="w-3 h-3 ml-0.5 opacity-0 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </td>
                      <td className="px-4 py-4 align-middle">
                        <Link
                          href={`/country/${country.countryId}#regulatory-system`}
                          className="text-sm text-gray-700 leading-relaxed text-justify hover:text-indigo-600"
                        >
                          {country.coreFeature}
                        </Link>
                      </td>
                      <td className="px-4 py-4 align-middle">
                        <Link
                          href={`/country/${country.countryId}#product-access-overview`}
                          className="block hover:text-indigo-600"
                        >
                          <div className="space-y-1">
                            {groupByColor(country.productAccessSummary).map((group, gIdx) => {
                              const cardStyle = statusCardStyles[group.color];
                              return (
                                <div key={gIdx} className={`rounded px-2 py-1 ${cardStyle.bg}`}>
                                  <div className="space-y-0.5">
                                    {group.items.map((item, iIdx) => (
                                      <div key={iIdx} className="flex items-start gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-[7px]" style={getDotStyle(group.color)} />
                                        <div className="min-w-0">
                                          <span className={`font-semibold ${cardStyle.title}`}>{item.status}</span>
                                          <span className="text-sm leading-relaxed text-gray-700">：{item.products.join('、')}</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </Link>
                      </td>
                      <td className="px-4 py-4 align-middle text-center">
                        <span
                          className="inline-flex px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap"
                          style={getIntensityBadgeClass(country.intensity)}
                        >
                          {country.intensity}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* 国家监管概览 - 移动端卡片 */}
          <div className="md:hidden space-y-4">
            {filteredOverviewCountries.length === 0 ? (
              <div className="py-8 text-center text-sm text-gray-400">
                暂无国家/地区属于该状态。
              </div>
            ) : (
              filteredOverviewCountries.map(country => (
                <div key={country.countryId} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Link
                      href={`/country/${country.countryId}`}
                      className="group inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                    >
                      {country.countryName}
                      <svg className="w-3 h-3 ml-0.5 opacity-0 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <span
                      className="inline-flex px-2 py-1 text-xs font-medium rounded whitespace-nowrap"
                      style={getIntensityBadgeClass(country.intensity)}
                    >
                      {country.intensity}
                    </span>
                  </div>
                  <div className="mb-3">
                    <Link
                      href={`/country/${country.countryId}#regulatory-system`}
                      className="text-sm text-gray-700 leading-6 text-justify hover:text-indigo-600"
                    >
                      {country.coreFeature}
                    </Link>
                  </div>
                  <Link
                    href={`/country/${country.countryId}#product-access-overview`}
                    className="block hover:text-indigo-600"
                  >
                    <div className="space-y-1">
                      {groupByColor(country.productAccessSummary).map((group, gIdx) => {
                        const cardStyle = statusCardStyles[group.color];
                        return (
                          <div key={gIdx} className={`rounded px-2 py-1 ${cardStyle.bg}`}>
                            <div className="space-y-0.5">
                              {group.items.map((item, iIdx) => (
                                <div key={iIdx} className="flex items-start gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-[7px]" style={getDotStyle(group.color)} />
                                  <div className="min-w-0">
                                    <span className={`font-semibold ${cardStyle.title}`}>{item.status}</span>
                                    <span className="text-sm leading-relaxed text-gray-700">：{item.products.join('、')}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* ===== 选项卡二：产品准入对比 ===== */}
      {activeTab === 'product' && (
        <div className="p-4 sm:p-6">
          {/* 选择产品标题 */}
          <div className="mb-1">
            <label className="block text-sm font-semibold text-gray-800 mb-1">选择产品</label>
            
            {/* 操作说明 - 移到下拉框上方，使用深色文字 */}
            <p className="text-sm text-gray-600 mb-2">
              选择产品后，点击"准入状态"色块查看对应状态的国家；点击表格中的国家名称，可查看详情。
            </p>
            
            <select
              value={selectedProduct}
              onChange={(e) => handleProductChange(e.target.value)}
              className="w-full sm:w-auto max-w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {productCategories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>

            {/* 爆珠、香精香料及辅材的统一口径说明 */}
            {selectedProduct === 'ordinary-material' && (
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                普通辅材是指不含烟草、尼古丁或烟草提取物的爆珠、香精香料及其他辅材；含有上述成分的产品，需结合产品特性和当地监管口径个案判断。
              </p>
            )}
          </div>

          {/* 产品准入状态分布条标题 */}
          <div className="flex items-baseline justify-between mb-1 mt-4">
            <h3 className="text-sm font-semibold text-gray-800">所选产品的准入状态分布</h3>
          </div>

          {/* 产品状态分布条 - 三类状态始终在同一容器内 */}
          <div className="mb-3">
            {(() => {
              const MIN_WIDTH_PCT = 20; // 每个状态最小占比(%)，确保长文字完整显示
              const cats: AccessCategory[] = ['accessible', 'restricted', 'prohibited'];
              const nonZeroTotal = cats.reduce((s, c) => s + accessDistribution.dist[c], 0);
              
              // 计算有数量的状态数
              const nonZeroCount = cats.filter(c => accessDistribution.dist[c] > 0).length;
              
              // 计算可分配给有数量状态的最大宽度（扣除零值状态的最小宽度）
              const zeroCount = cats.filter(c => accessDistribution.dist[c] === 0).length;
              const zeroWidth = zeroCount * MIN_WIDTH_PCT;
              const availablePct = Math.max(0, 100 - zeroWidth);
              
              // 计算每个有数量状态的基础宽度（按比例）和最小宽度
              const getWidth = (count: number) => {
                if (count === 0) return MIN_WIDTH_PCT;
                const proportionalWidth = (count / nonZeroTotal) * availablePct;
                const minWidthForNonZero = Math.max(MIN_WIDTH_PCT, proportionalWidth);
                return minWidthForNonZero;
              };
              
              // 计算总宽度，如果超出100%则按比例缩减
              const totalWidth = cats.reduce((sum, c) => sum + getWidth(accessDistribution.dist[c]), 0);
              const scaleFactor = totalWidth > 100 ? 100 / totalWidth : 1;

              return (
                <div className="flex h-9 rounded-lg overflow-hidden border border-gray-200" style={{ boxSizing: 'border-box', width: '100%', maxWidth: '100%' }}>
                  {cats.map((category, idx) => {
                    const config = accessCategoryConfig[category];
                    const count = accessDistribution.dist[category];
                    const isSelected = selectedAccessCategory === category;
                    const hasCount = count > 0;

                    const rawWidth = getWidth(count);
                    const widthPct = rawWidth * scaleFactor;

                    const borderLeft = idx > 0 ? '1px solid rgba(0,0,0,0.08)' : 'none';

                    const boxShadow = isSelected
                      ? `inset 0 0 0 2px ${config.barTextColor}44`
                      : 'none';
                    const fontWeight = isSelected ? 700 : 500;

                    // 深色背景，零值状态用浅色版本
                    const bgColor = hasCount
                      ? config.barColor
                      : `${config.barColor}44`;
                    const textColor = hasCount
                      ? config.barTextColor
                      : `${config.barColor}`;

                    return (
                      <div
                        key={category}
                        className="flex items-center justify-center cursor-pointer transition-all duration-200 select-none"
                        style={{
                          width: `${widthPct}%`,
                          minWidth: 0,
                          boxSizing: 'border-box',
                          backgroundColor: bgColor,
                          color: textColor,
                          boxShadow,
                          fontWeight,
                          borderLeft,
                          padding: '0 4px',
                          fontSize: '11px',
                          lineHeight: '1.2',
                        }}
                        onClick={() => handleAccessCategoryClick(category)}
                        title={hasCount
                          ? `${config.label}：${count}个（${accessDistribution.names[category].join('、')}）`
                          : `${config.label}：0个`}
                      >
                        <span style={{ whiteSpace: 'nowrap' }}>{config.label} {count}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </div>

          {/* 当前显示范围 / 当前筛选条件 */}
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
            {selectedAccessCategory ? (
              <>
                <span>
                  当前筛选：准入状态 = <span className="font-medium text-gray-700">{accessCategoryConfig[selectedAccessCategory].label}</span>
                  ｜显示 {filteredProductCountries.length} 个国家/地区
                </span>
                <button
                  className="text-indigo-600 hover:underline text-sm"
                  onClick={() => setSelectedAccessCategory(null)}
                >
                  清除筛选
                </button>
              </>
            ) : (
              <span>当前显示：全部国家/地区（共 {currentProductData.length} 个）</span>
            )}
          </div>

          {/* 产品准入对比表 - 桌面端 */}
          <div className="hidden md:block">
            <table className="w-full" style={{ tableLayout: 'fixed' }}>
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ width: '20%' }}>
                    国家/地区
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ width: '80%' }}>
                    准入结论
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProductCountries.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="px-4 py-8 text-center text-sm text-gray-400">
                      暂无国家/地区属于该状态。
                    </td>
                  </tr>
                ) : (
                  filteredProductCountries.map(entry => {
                    const category = mapToAccessCategory(entry.statusType);
                    return (
                      <tr key={entry.countryId} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-4 align-top">
                          <Link
                            href={`/country/${entry.countryId}#${entry.targetId}`}
                            className="group inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer"
                          >
                            {entry.countryName}
                            <svg className="w-3 h-3 ml-0.5 opacity-0 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </td>
                        <td className="px-4 py-4 align-top" style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                          {/* 第一行：总体状态 */}
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={getAccessCategoryDotStyle(category)} />
                            <span className={`text-sm ${
                              entry.statusType === 'mixed' ? 'text-gray-500' : 'text-gray-700'
                            }`}>
                              {entry.status}
                            </span>
                          </div>
                          
                          {/* 子项说明或备注 */}
                          {(entry.subStatuses && entry.subStatuses.length > 0) || entry.note ? (
                            <div className="ml-[18px] mt-2 space-y-1.5">
                              {/* 显示子项 */}
                              {entry.subStatuses && entry.subStatuses.length > 0 && (
                                entry.subStatuses.map((sub, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-[6px]" style={getDotStyle(sub.color)} />
                                    <span className="text-sm text-gray-600">
                                      {sub.product}：<span className="font-medium">{sub.status}</span>
                                    </span>
                                  </div>
                                ))
                              )}
                              
                              {/* 显示备注 */}
                              {entry.note && !entry.subStatuses && (
                                <p className="text-sm text-gray-500 leading-relaxed">{entry.note}</p>
                              )}
                            </div>
                          ) : null}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* 产品准入对比 - 移动端卡片 */}
          <div className="md:hidden space-y-4">
            {filteredProductCountries.length === 0 ? (
              <div className="py-8 text-center text-sm text-gray-400">
                暂无国家/地区属于该状态。
              </div>
            ) : (
              filteredProductCountries.map(entry => {
                const category = mapToAccessCategory(entry.statusType);
                return (
                  <div key={entry.countryId} className="border border-gray-200 rounded-lg p-4">
                    <div className="mb-2">
                      <Link
                        href={`/country/${entry.countryId}#${entry.targetId}`}
                        className="group inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                      >
                        {entry.countryName}
                        <svg className="w-3 h-3 ml-0.5 opacity-0 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                    
                    {/* 总体状态 */}
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={getAccessCategoryDotStyle(category)} />
                      <span className={`text-sm ${
                        entry.statusType === 'mixed' ? 'text-gray-500' : 'text-gray-700'
                      }`}>
                        {entry.status}
                      </span>
                    </div>
                    
                    {/* 子项说明或备注 */}
                    {(entry.subStatuses && entry.subStatuses.length > 0) || entry.note ? (
                      <div className="ml-[18px] mt-2 space-y-1.5">
                        {/* 显示子项 */}
                        {entry.subStatuses && entry.subStatuses.length > 0 && (
                          entry.subStatuses.map((sub, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-[6px]" style={getDotStyle(sub.color)} />
                              <span className="text-sm text-gray-600">
                                {sub.product}：<span className="font-medium">{sub.status}</span>
                              </span>
                            </div>
                          ))
                        )}
                        
                        {/* 显示备注 */}
                        {entry.note && !entry.subStatuses && (
                          <p className="text-sm text-gray-500 leading-relaxed">{entry.note}</p>
                        )}
                      </div>
                    ) : null}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
