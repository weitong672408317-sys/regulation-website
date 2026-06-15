'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';

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

// Pre-compute static path rendering data (does not change between renders)
type PathRenderData = {
  name: string;
  path: string;
  isHighlighted: boolean;
  fillColor: string;
};

const pathRenderData: PathRenderData[] = (worldPaths as PathItem[]).map((item) => {
  const isHighlighted = highlightCountryNames.has(item.name);
  const label = countryNameToLabel.get(item.name);
  const fillColor = isHighlighted && label
    ? intensityColorMap[label.intensity] || '#FACC15'
    : '#e5e7eb';
  return { name: item.name, path: item.path, isHighlighted, fillColor };
});

const legendItems = [
  { color: '#DC2626', label: '极高' },
  { color: '#F97316', label: '高' },
  { color: '#FACC15', label: '中' },
  { color: '#A3E635', label: '低至中' },
];

export default function WorldMap() {
  const router = useRouter();
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const handleCountryClick = useCallback((countryName: string) => {
    const label = countryNameToLabel.get(countryName);
    if (label) {
      router.push(`/country/${label.id}`);
    }
  }, [router]);

  const handleLabelClick = useCallback((countryId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/country/${countryId}`);
  }, [router]);

  const handleCountryHover = useCallback((countryName: string) => {
    const label = countryNameToLabel.get(countryName);
    if (label) {
      setHoveredCountry(label.name);
      router.prefetch(`/country/${label.id}`);
    }
  }, [router]);

  return (
    <div className="w-full bg-gray-100 rounded-lg p-4">
      {/* Prefetch links for country pages */}
      {labels.map((label) => (
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
            {pathRenderData.map((item, index) => (
              <path
                key={index}
                d={item.path}
                fill={item.fillColor}
                stroke="#9ca3af"
                strokeWidth={0.5}
                style={{
                  cursor: item.isHighlighted ? 'pointer' : 'default',
                  transition: 'fill 0.2s ease',
                }}
                onClick={() => item.isHighlighted && handleCountryClick(item.name)}
                onMouseEnter={() => item.isHighlighted && handleCountryHover(item.name)}
                onMouseLeave={() => setHoveredCountry(null)}
              />
            ))}

            {/* Country markers and labels */}
            {labels.map((label) => {
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
                    onClick={(e) => handleLabelClick(label.id, e)}
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
                    onClick={(e) => handleLabelClick(label.id, e)}
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
