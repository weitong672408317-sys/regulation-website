'use client';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// 监管强度颜色映射 - 与 ComparisonTable 的 getIntensityColor 保持一致
// 极高: bg-red-600 (#DC2626) | 高: bg-orange-500 (#F97316) | 中: bg-yellow-400 (#FACC15) | 低至中: bg-lime-400 (#A3E635)
const intensityColorMap: Record<string, { fill: string; hover: string; pressed: string }> = {
  '极高': { fill: '#DC2626', hover: '#B91C1C', pressed: '#991B1B' },
  '高':   { fill: '#F97316', hover: '#EA580C', pressed: '#C2410C' },
  '中':   { fill: '#FACC15', hover: '#EAB308', pressed: '#CA8A04' },
  '低至中': { fill: '#A3E635', hover: '#84CC16', pressed: '#65A30D' },
};

// 小国家/地区标记
const smallCountrySet = new Set(['Singapore', 'Malaysia', 'United Arab Emirates', 'Hong Kong']);

const countryDataMap: Record<string, any> = {
  'China': { labelPos: [105, 38], countryCenter: [105, 35], name: '中国内地', id: 'china', isoCode: 'CN', intensity: '极高', isSmall: false },
  'Indonesia': { labelPos: [115, -3], countryCenter: [115, -5], name: '印尼', id: 'indonesia', isoCode: 'ID', intensity: '低至中', isSmall: false },
  'United Arab Emirates': { labelPos: [52, 28], countryCenter: [54, 24], name: '阿联酋', id: 'uae', isoCode: 'AE', intensity: '中', isSmall: true },
  'Russia': { labelPos: [100, 62], countryCenter: [100, 60], name: '俄罗斯', id: 'russia', isoCode: 'RU', intensity: '高', isSmall: false },
  'Singapore': { labelPos: [108, 0], countryCenter: [103.8, 1.35], name: '新加坡', id: 'singapore', isoCode: 'SG', intensity: '极高', isSmall: true },
  'Malaysia': { labelPos: [97, 8], countryCenter: [101.9758, 4.2105], name: '马来西亚', id: 'malaysia', isoCode: 'MY', intensity: '高', isSmall: true },
  'Paraguay': { labelPos: [-58, -26], countryCenter: [-58, -23], name: '巴拉圭', id: 'paraguay', isoCode: 'PY', intensity: '低至中', isSmall: false },
  'Taiwan': { labelPos: null, countryCenter: [121, 23.5], name: '台湾', id: null, isoCode: 'TW', intensity: '极高', isSmall: false },
  'Hong Kong': { labelPos: [118, 22], countryCenter: [114.17, 22.32], name: '中国香港', id: 'hongkong', isoCode: 'HK', intensity: '极高', isSmall: true },
};

const highlightCountryNames = new Set(Object.keys(countryDataMap));

// 图例数据 - 颜色与 intensityColorMap 一致
const legendItems = [
  { color: '#DC2626', label: '禁止 / 高度限制' },
  { color: '#F97316', label: '强监管市场' },
  { color: '#FACC15', label: '中等监管' },
  { color: '#A3E635', label: '开放 / 相对友好' },
];

export default function WorldMap() {
  const router = useRouter();
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const handleCountryClick = (geo: any) => {
    const name = geo.properties?.name;
    const data = countryDataMap[name];
    if (data && data.id) {
      if (data.id === 'china') {
        setSelectedCountry('china');
      } else {
        setSelectedCountry(null);
      }
      router.push(`/country/${data.id}`);
    }
  };

  const handleLabelClick = (countryId: string | null) => {
    if (countryId) {
      router.push(`/country/${countryId}`);
    }
  };

  const handleHover = (name: string | null) => {
    setHoveredCountry(name);
    if (name) {
      const data = countryDataMap[name];
      if (data?.id) {
        router.prefetch(`/country/${data.id}`);
      }
    }
  };

  const isCountryHighlighted = (geo: any) => {
    const name = geo.properties?.name;
    if (selectedCountry === 'china') {
      return name === 'China' || name === 'Taiwan';
    }
    return highlightCountryNames.has(name);
  };

  const getCountryColors = (name: string) => {
    const data = countryDataMap[name];
    if (data && data.intensity) {
      return intensityColorMap[data.intensity] || intensityColorMap['中'];
    }
    return intensityColorMap['中'];
  };

  // 缓存标记点数据，避免每次渲染重复计算
  const markerEntries = useMemo(() => {
    return Object.entries(countryDataMap).filter(([, data]) => data.isoCode !== 'TW');
  }, []);

  return (
    <div className="w-full bg-[#F8FAFC] rounded-lg p-4">
      <div className="overflow-x-auto">
        <div className="min-w-[800px] h-[520px]">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 170, center: [30, 25] }}
            style={{ width: '100%', height: '100%' }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isHighlighted = isCountryHighlighted(geo);
                  const name = geo.properties?.name;
                  const colors = getCountryColors(name);
                  const isHovered = hoveredCountry === countryDataMap[name]?.name;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => handleCountryClick(geo)}
                      onMouseEnter={() => isHighlighted && handleHover(countryDataMap[name]?.name || null)}
                      onMouseLeave={() => handleHover(null)}
                      style={{
                        default: {
                          fill: isHighlighted ? colors.fill : '#E5E7EB',
                          stroke: '#CBD5E1',
                          strokeWidth: isHovered && isHighlighted ? 1.5 : 0.5,
                          outline: 'none',
                          cursor: isHighlighted ? 'pointer' : 'default',
                        },
                        hover: {
                          fill: isHighlighted ? colors.hover : '#D1D5DB',
                          stroke: isHighlighted ? '#475569' : '#94A3B8',
                          strokeWidth: 1.5,
                          outline: 'none',
                          cursor: isHighlighted ? 'pointer' : 'default',
                        },
                        pressed: {
                          fill: isHighlighted ? colors.pressed : '#9CA3AF',
                          stroke: '#64748B',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {markerEntries.map(([key, data]) => {
              const colors = getCountryColors(key);
              const isHovered = hoveredCountry === data.name;
              const isSmall = data.isSmall;
              const markerRadius = isSmall ? 7 : 4;

              return (
                <g key={data.id || data.isoCode}>
                  {/* 标记点 */}
                  <Marker coordinates={data.countryCenter}>
                    <circle
                      r={isHovered ? markerRadius * 1.15 : markerRadius}
                      fill={colors.fill}
                      stroke="#FFFFFF"
                      strokeWidth={isSmall ? 2.5 : 2}
                      style={{
                        cursor: data.id ? 'pointer' : 'default',
                        transition: 'r 0.15s ease',
                        filter: isSmall ? 'drop-shadow(0 1px 3px rgba(15, 23, 42, 0.3))' : 'none',
                      }}
                      onClick={() => handleLabelClick(data.id)}
                      onMouseEnter={() => handleHover(data.name)}
                      onMouseLeave={() => handleHover(null)}
                    />
                  </Marker>

                  {/* 标签 */}
                  {data.labelPos && (
                    <Marker coordinates={data.labelPos}>
                      <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{
                          fontSize: isSmall ? '11px' : '12px',
                          fontWeight: '600',
                          fill: '#1E293B',
                          textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 0 0 3px white',
                          cursor: data.id ? 'pointer' : 'default',
                        }}
                        onClick={() => handleLabelClick(data.id)}
                        onMouseEnter={() => handleHover(data.name)}
                        onMouseLeave={() => handleHover(null)}
                      >
                        {data.name}
                      </text>
                    </Marker>
                  )}
                </g>
              );
            })}
          </ComposableMap>
        </div>
      </div>
      {hoveredCountry && (
        <div className="text-center mt-2 text-gray-700 font-medium text-lg">
          {hoveredCountry} - 点击查看详情
        </div>
      )}
      {/* 图例 */}
      <div className="flex items-center justify-center gap-8 mt-6 flex-wrap">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <span
              className="inline-block w-4 h-4 rounded border border-gray-300 shadow-sm"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-[#334155] font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
