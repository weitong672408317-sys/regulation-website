'use client';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// 地图填充色：表格标签色的 90% 强度版本
// 表格标签色：极高=#DC2626 | 高=#F97316 | 中=#FACC15 | 低至中=#A3E635
const intensityColorMap: Record<string, { fill: string; hover: string; pressed: string }> = {
  '极高': { fill: '#E05A5A', hover: '#D44848', pressed: '#C03838' },
  '高':   { fill: '#F38A38', hover: '#E87828', pressed: '#D06018' },
  '中':   { fill: '#F0D040', hover: '#E0C030', pressed: '#C0A020' },
  '低至中': { fill: '#8FC850', hover: '#7FB840', pressed: '#6FA830' },
};

// 国家数据：marker 锚定真实位置，label 只做轻微偏移避免重叠
const countryDataMap: Record<string, any> = {
  'China': {
    labelPos: [105, 38],
    countryCenter: [105, 35],
    name: '中国内地',
    id: 'china',
    isoCode: 'CN',
    intensity: '极高',
    isSmall: false,
  },
  'Indonesia': {
    labelPos: [118, -6],
    countryCenter: [115, -5],
    name: '印尼',
    id: 'indonesia',
    isoCode: 'ID',
    intensity: '低至中',
    isSmall: false,
  },
  'United Arab Emirates': {
    labelPos: [56, 26],
    countryCenter: [54, 24],
    name: '阿联酋',
    id: 'uae',
    isoCode: 'AE',
    intensity: '中',
    isSmall: true,
  },
  'Russia': {
    labelPos: [100, 62],
    countryCenter: [100, 60],
    name: '俄罗斯',
    id: 'russia',
    isoCode: 'RU',
    intensity: '高',
    isSmall: false,
  },
  'Singapore': {
    labelPos: [106, -1],
    countryCenter: [103.8, 1.35],
    name: '新加坡',
    id: 'singapore',
    isoCode: 'SG',
    intensity: '极高',
    isSmall: true,
  },
  'Malaysia': {
    labelPos: [102, 7],
    countryCenter: [101.9758, 4.2105],
    name: '马来西亚',
    id: 'malaysia',
    isoCode: 'MY',
    intensity: '高',
    isSmall: true,
  },
  'Paraguay': {
    labelPos: [-58, -26],
    countryCenter: [-58, -23],
    name: '巴拉圭',
    id: 'paraguay',
    isoCode: 'PY',
    intensity: '低至中',
    isSmall: false,
  },
  'Taiwan': {
    labelPos: null,
    countryCenter: [121, 23.5],
    name: '台湾',
    id: null,
    isoCode: 'TW',
    intensity: '极高',
    isSmall: false,
  },
  'Hong Kong': {
    labelPos: [116, 23],
    countryCenter: [114.17, 22.32],
    name: '中国香港',
    id: 'hongkong',
    isoCode: 'HK',
    intensity: '极高',
    isSmall: true,
  },
};

const highlightCountryNames = new Set(Object.keys(countryDataMap));

// 图例色块与地图填充色一致
const legendItems = [
  { color: intensityColorMap['极高'].fill, label: '禁止 / 高度限制' },
  { color: intensityColorMap['高'].fill, label: '强监管市场' },
  { color: intensityColorMap['中'].fill, label: '中等监管' },
  { color: intensityColorMap['低至中'].fill, label: '开放 / 相对友好' },
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
                      onClick={() => isHighlighted && handleCountryClick(geo)}
                      onMouseEnter={() => isHighlighted && handleHover(countryDataMap[name]?.name || null)}
                      onMouseLeave={() => handleHover(null)}
                      style={{
                        default: {
                          fill: isHighlighted ? colors.fill : '#E5E7EB',
                          stroke: '#CBD5E1',
                          strokeWidth: 0.5,
                          outline: 'none',
                          cursor: isHighlighted ? 'pointer' : 'default',
                        },
                        hover: {
                          fill: isHighlighted ? colors.hover : '#E5E7EB',
                          stroke: isHighlighted ? '#475569' : '#CBD5E1',
                          strokeWidth: isHighlighted ? 1.5 : 0.5,
                          outline: 'none',
                          cursor: isHighlighted ? 'pointer' : 'default',
                        },
                        pressed: {
                          fill: isHighlighted ? colors.pressed : '#E5E7EB',
                          stroke: isHighlighted ? '#64748B' : '#CBD5E1',
                          strokeWidth: 0.5,
                          outline: 'none',
                          cursor: isHighlighted ? 'pointer' : 'default',
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
              const markerRadius = data.isSmall ? 7 : 5;

              return (
                <g key={data.id || data.isoCode}>
                  {/* Marker - 锚定真实地理位置 */}
                  <Marker coordinates={data.countryCenter}>
                    <circle
                      r={isHovered ? markerRadius * 1.2 : markerRadius}
                      fill={colors.fill}
                      stroke="#FFFFFF"
                      strokeWidth={2.5}
                      style={{
                        cursor: data.id ? 'pointer' : 'default',
                        transition: 'r 0.15s ease',
                        filter: 'drop-shadow(0 1px 3px rgba(15, 23, 42, 0.25))',
                      }}
                      onClick={() => handleLabelClick(data.id)}
                      onMouseEnter={() => handleHover(data.name)}
                      onMouseLeave={() => handleHover(null)}
                    />
                  </Marker>

                  {/* 标签 - 小国家轻微偏移 */}
                  {data.labelPos && (
                    <Marker coordinates={data.labelPos}>
                      <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{
                          fontSize: data.isSmall ? '11px' : '12px',
                          fontWeight: '600',
                          fill: '#1E293B',
                          textShadow: '0 1px 3px rgba(255,255,255,0.95), 0 0 6px rgba(255,255,255,0.6)',
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
