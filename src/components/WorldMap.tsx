'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useCallback, useEffect } from 'react';

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

const highlightCountryNames = new Set(mapLabels.map((l: LabelItem) => l.countryName));

const legendItems = [
  { color: '#DC2626', label: '极高' },
  { color: '#F97316', label: '高' },
  { color: '#FACC15', label: '中' },
  { color: '#A3E635', label: '低至中' },
];

export default function WorldMap() {
  const router = useRouter();
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  useEffect(() => {
    // Prefetch country pages one at a time when idle, to avoid network congestion
    const labels = mapLabels as LabelItem[];
    let index = 0;
    const prefetchNext = () => {
      if (index < labels.length) {
        router.prefetch(`/country/${labels[index].id}`);
        index++;
        setTimeout(prefetchNext, 300);
      }
    };
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => setTimeout(prefetchNext, 500));
    } else {
      setTimeout(prefetchNext, 1000);
    }
  }, [router]);

  const handleCountryClick = useCallback((countryName: string) => {
    const label = (mapLabels as LabelItem[]).find((l) => l.countryName === countryName);
    if (label) {
      router.push(`/country/${label.id}`);
    }
  }, [router]);

  const handleLabelClick = useCallback((countryId: string) => {
    router.push(`/country/${countryId}`);
  }, [router]);

  const handleCountryHover = useCallback((countryName: string) => {
    const label = (mapLabels as LabelItem[]).find((l) => l.countryName === countryName);
    if (label) {
      setHoveredCountry(label.name);
      router.prefetch(`/country/${label.id}`);
    }
  }, [router]);

  return (
    <div className="w-full bg-gray-100 rounded-lg p-4">
      {/* Prefetch links for country pages */}
      {(mapLabels as LabelItem[]).map((label) => (
        <Link
          key={label.id}
          href={`/country/${label.id}`}
          prefetch={true}
          className="hidden"
        />
      ))}

      <div className="overflow-x-auto">
        <div className="min-w-[800px] h-[550px]">
          <svg viewBox="0 0 960 550" width="100%" height="100%">
            {/* Country paths */}
            {(worldPaths as PathItem[]).map((item, index) => {
              const isHighlighted = highlightCountryNames.has(item.name);
              const label = (mapLabels as LabelItem[]).find((l) => l.countryName === item.name);
              const fillColor = isHighlighted && label
                ? intensityColorMap[label.intensity] || '#FACC15'
                : '#e5e7eb';

              return (
                <path
                  key={index}
                  d={item.path}
                  fill={fillColor}
                  stroke="#9ca3af"
                  strokeWidth={0.5}
                  style={{
                    cursor: isHighlighted ? 'pointer' : 'default',
                    transition: 'fill 0.2s ease',
                  }}
                  onClick={() => isHighlighted && handleCountryClick(item.name)}
                  onMouseEnter={() => isHighlighted && handleCountryHover(item.name)}
                  onMouseLeave={() => setHoveredCountry(null)}
                />
              );
            })}

            {/* Country markers and labels */}
            {(mapLabels as LabelItem[]).map((label) => {
              const color = intensityColorMap[label.intensity] || '#FACC15';
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
                    onClick={() => handleLabelClick(label.id)}
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
                    onClick={() => handleLabelClick(label.id)}
                  >
                    {label.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {hoveredCountry && (
        <div className="text-center mt-2 text-gray-700 font-medium text-lg">
          {hoveredCountry} - 点击查看详情
        </div>
      )}

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
