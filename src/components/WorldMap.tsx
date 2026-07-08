'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useRef } from 'react';

// Pre-generated SVG path data (no runtime d3-geo dependency)
import worldPaths from '@/data/world-paths.json';
import mapLabels from '@/data/map-labels.json';

type PathItem = { name: string; path: string };
type LabelItem = {
  name: string;
  id: string;
  intensity: string;
  labelX: number;
  labelY: number;
  centerX: number;
  centerY: number;
  labelAnchor: string;
  labelLine: boolean;
  countryName: string;
};

const intensityColorMap: Record<string, string> = {
  '极高': '#DC2626',
  '高': '#F97316',
  '中': '#FACC15',
  '低至中': '#A3E635',
};

const labels = mapLabels as LabelItem[];
const highlightCountryNames = new Set(labels.map((l) => l.countryName));

// Module-level Map for O(1) countryName → label lookup (replaces per-render .find())
const countryNameToLabel = new Map<string, LabelItem>();
labels.forEach((l) => countryNameToLabel.set(l.countryName, l));

// 预先把每个高亮国家的跳转 href 算好，避免每次渲染重复拼接字符串
const labelToHref = new Map<string, string>();
labels.forEach((l) => labelToHref.set(l.countryName, `/country/${l.id}`));

// Pre-compute static path rendering data (does not change between renders)
type PathRenderData = {
  name: string;
  path: string;
  isHighlighted: boolean;
  fillColor: string;
  href: string | null;
};

const pathRenderData: PathRenderData[] = (worldPaths as PathItem[]).map((item) => {
  const isHighlighted = highlightCountryNames.has(item.name);
  const label = isHighlighted ? countryNameToLabel.get(item.name) : undefined;
  const fillColor = label
    ? intensityColorMap[label.intensity] || '#FACC15'
    : '#e5e7eb';
  return {
    name: item.name,
    path: item.path,
    isHighlighted,
    fillColor,
    href: label ? `/country/${label.id}` : null,
  };
});

const legendItems = [
  { color: '#DC2626', label: '极高' },
  { color: '#F97316', label: '高' },
  { color: '#FACC15', label: '中' },
  { color: '#A3E635', label: '低至中' },
];

export default function WorldMap() {
  const router = useRouter();

  // 已预取过的国家 id 集合，避免每次 hover 重复调用 router.prefetch + 重复状态更新
  const prefetchedRef = useRef<Set<string>>(new Set());

  const prefetchCountry = useCallback((countryId: string) => {
    if (prefetchedRef.current.has(countryId)) return;
    prefetchedRef.current.add(countryId);
    try {
      router.prefetch(`/country/${countryId}`);
    } catch (_e) {
      // prefetch 失败不应影响导航
    }
  }, [router]);

  const handleCountryHover = useCallback((countryName: string) => {
    const label = countryNameToLabel.get(countryName);
    if (label) prefetchCountry(label.id);
  }, [prefetchCountry]);

  // 单一、统一的点击处理器 —— 没有重复绑定，也不触发多余的 setState
  const handleNavigate = useCallback((href: string) => {
    router.push(href);
  }, [router]);

  return (
    <div className="w-full bg-gray-100 rounded-lg p-4">
      <div className="overflow-x-auto">
        <div className="min-w-[800px] h-[550px]">
          <svg viewBox="0 0 960 550" width="100%" height="100%">
            {/* Country paths */}
            {pathRenderData.map((item, index) => {
              if (item.isHighlighted && item.href) {
                return (
                  <path
                    key={index}
                    d={item.path}
                    fill={item.fillColor}
                    stroke="#9ca3af"
                    strokeWidth={0.5}
                    style={{
                      cursor: 'pointer',
                      transition: 'fill 0.2s ease',
                    }}
                    // 统一的悬停预取 + 点击跳转 —— 只在高亮路径上绑定
                    onMouseEnter={() => handleCountryHover(item.name)}
                    onClick={() => handleNavigate(item.href!)}
                  />
                );
              }
              // 非高亮国家：纯展示，不做交互，避免无意义的事件处理
              return (
                <path
                  key={index}
                  d={item.path}
                  fill={item.fillColor}
                  stroke="#9ca3af"
                  strokeWidth={0.5}
                />
              );
            })}

            {/* Country markers and labels */}
            {labels.map((label) => {
              const color = intensityColorMap[label.intensity] || '#FACC15';
              const href = `/country/${label.id}`;
              return (
                <g key={label.id}>
                  {/* Center marker */}
                  <circle
                    cx={label.centerX}
                    cy={label.centerY}
                    r={4}
                    fill={color}
                    stroke="white"
                    strokeWidth={2}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => prefetchCountry(label.id)}
                    onClick={() => handleNavigate(href)}
                  />

                  {/* Label line (for Singapore) */}
                  {label.labelLine && (
                    <line
                      x1={label.centerX}
                      y1={label.centerY}
                      x2={label.labelX}
                      y2={label.labelY}
                      stroke="#111827"
                      strokeWidth={1.2}
                      strokeLinecap="round"
                      opacity={0.9}
                    />
                  )}

                  {/* Label text */}
                  <text
                    x={label.labelX + (label.labelAnchor === 'start' ? 6 : 0)}
                    y={label.labelY}
                    textAnchor={label.labelAnchor as 'start' | 'middle' | 'end'}
                    dominantBaseline="middle"
                    fill="#1f2937"
                    fontSize={12}
                    fontWeight="bold"
                    paintOrder="stroke"
                    stroke="#FFFFFF"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleNavigate(href)}
                  >
                    {label.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Legend - single line */}
      <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
        <span className="text-sm text-gray-500">监管强度：</span>
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <span
              className="inline-block w-3.5 h-3.5 rounded-sm border border-gray-300"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
