'use client';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// 监管强度颜色映射 - 与 ComparisonTable 的 Tailwind badge 颜色完全一致
// 极高=bg-red-600(#DC2626) 高=bg-orange-500(#F97316) 中=bg-yellow-400(#FACC15) 低至中=bg-lime-400(#A3E635)
const intensityColorMap: Record<string, { fill: string; hover: string; pressed: string; solid: string }> = {
  '极高': { fill: '#DC2626', hover: '#DC2626', pressed: '#DC2626', solid: '#DC2626' },   // 红色系
  '高':   { fill: '#F97316', hover: '#F97316', pressed: '#F97316', solid: '#F97316' },   // 橙色系
  '中':   { fill: '#FACC15', hover: '#FACC15', pressed: '#FACC15', solid: '#FACC15' },   // 黄色系
  '低至中': { fill: '#A3E635', hover: '#A3E635', pressed: '#A3E635', solid: '#A3E635' }, // 绿色系
};

// 恢复自 82bd244 版本的国家位置配置，删除台湾
const countryDataMap: Record<string, any> = {
  'China': { labelPos: [105, 38], countryCenter: [105, 35], name: '中国内地', id: 'china', isoCode: 'CN', intensity: '极高' },
  'Indonesia': { labelPos: [115, -3], countryCenter: [115, -5], name: '印尼', id: 'indonesia', isoCode: 'ID', intensity: '低至中' },
  'United Arab Emirates': { labelPos: [54, 26], countryCenter: [54, 24], name: '阿联酋', id: 'uae', isoCode: 'AE', intensity: '中' },
  'Russia': { labelPos: [100, 62], countryCenter: [100, 60], name: '俄罗斯', id: 'russia', isoCode: 'RU', intensity: '高' },
  'Singapore': { labelPos: [105, 0], countryCenter: [103.8, 1.35], name: '新加坡', id: 'singapore', isoCode: 'SG', intensity: '极高' },
  'Malaysia': { labelPos: [100, 6], countryCenter: [101.69, 3.14], name: '马来西亚', id: 'malaysia', isoCode: 'MY', intensity: '高' },
  'Paraguay': { labelPos: [-58, -26], countryCenter: [-58, -23], name: '巴拉圭', id: 'paraguay', isoCode: 'PY', intensity: '低至中' },
  'Hong Kong': { labelPos: [110, 22], countryCenter: [114.17, 22.32], name: '中国香港', id: 'hongkong', isoCode: 'HK', intensity: '极高' },
};

const highlightCountryNames = new Set(Object.keys(countryDataMap));

// 图例数据
const legendItems = [
  { color: intensityColorMap['极高'].solid, label: '禁止 / 高度限制' },
  { color: intensityColorMap['高'].solid, label: '强监管市场' },
  { color: intensityColorMap['中'].solid, label: '中等监管' },
  { color: intensityColorMap['低至中'].solid, label: '开放 / 相对友好' },
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

  const handleCountryHover = (name: string) => {
    const data = countryDataMap[name];
    if (data?.id) {
      router.prefetch(`/country/${data.id}`);
    }
    if (data) {
      setHoveredCountry(data.name);
    }
  };

  const isCountryHighlighted = (geo: any) => {
    const name = geo.properties?.name;
    if (selectedCountry === 'china') {
      return name === 'China';
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

  return (
    <div className="w-full bg-gray-100 rounded-lg p-4">
      <div className="overflow-x-auto">
        <div className="min-w-[800px] h-[550px]">
          <ComposableMap 
            projection="geoMercator" 
            projectionConfig={{ scale: 160, center: [0, 20] }}
            style={{ width: '100%', height: '100%' }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isHighlighted = isCountryHighlighted(geo);
                  const name = geo.properties?.name;
                  const colors = getCountryColors(name);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => handleCountryClick(geo)}
                      onMouseEnter={() => handleCountryHover(name)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      style={{
                        default: {
                          fill: isHighlighted ? colors.fill : '#e5e7eb',
                          stroke: '#9ca3af',
                          strokeWidth: 0.5,
                          outline: 'none',
                          cursor: isHighlighted ? 'pointer' : 'default',
                          transition: 'all 0.2s ease',
                        },
                        hover: {
                          fill: isHighlighted ? colors.hover : '#d1d5db',
                          stroke: '#9ca3af',
                          strokeWidth: 0.5,
                          outline: 'none',
                          cursor: isHighlighted ? 'pointer' : 'default',
                          transition: 'all 0.2s ease',
                        },
                        pressed: {
                          fill: isHighlighted ? colors.pressed : '#9ca3af',
                          stroke: '#9ca3af',
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

            {Object.values(countryDataMap).map((data) => {
              const colors = getCountryColors(Object.keys(countryDataMap).find(k => countryDataMap[k] === data) || '');
              return (
                <g key={data.id || data.isoCode}>
                  <Marker coordinates={data.countryCenter}>
                    <circle
                      r={4}
                      fill={colors.fill}
                      stroke="white"
                      strokeWidth="2"
                      style={{ cursor: data.id ? 'pointer' : 'default' }}
                      onClick={() => handleLabelClick(data.id)}
                    />
                  </Marker>
                  
                  {data.labelPos && (
                    <Marker coordinates={data.labelPos}>
                      <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#1f2937"
                        fontSize={12}
                        fontWeight="bold"
                        paintOrder="stroke"
                        stroke="#FFFFFF"
                        strokeWidth={2}
                        strokeLinejoin="round"
                        style={{
                          cursor: data.id ? 'pointer' : 'default',
                        }}
                        onClick={() => handleLabelClick(data.id)}
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
      <div className="flex items-center justify-center gap-6 mt-4 flex-wrap">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span
              className="inline-block w-4 h-4 rounded-sm border border-gray-300"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
