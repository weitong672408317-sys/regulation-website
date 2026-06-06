'use client';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// 监管强度颜色映射（柔和协调的低饱和版本，与网站蓝灰色系搭配）
const intensityColorMap: Record<string, { fill: string; hover: string; pressed: string }> = {
  '极高': { fill: '#D4A5A5', hover: '#C48888', pressed: '#B47070' },   // 红色系 - 禁止/高度限制
  '高':   { fill: '#D4B595', hover: '#C4A080', pressed: '#B48868' },   // 橙色系 - 强监管市场
  '中':   { fill: '#D4C895', hover: '#C4B480', pressed: '#B4A068' },   // 黄色系 - 中等监管
  '低至中': { fill: '#A5C4A0', hover: '#90B488', pressed: '#78A070' }, // 绿色系 - 开放/相对友好
};

const countryDataMap: Record<string, any> = {
  'China': { labelPos: [105, 38], countryCenter: [105, 35], name: '中国内地', id: 'china', isoCode: 'CN', intensity: '极高' },
  'Indonesia': { labelPos: [115, -3], countryCenter: [115, -5], name: '印尼', id: 'indonesia', isoCode: 'ID', intensity: '低至中' },
  'United Arab Emirates': { labelPos: [56, 22], countryCenter: [54, 24], name: '阿联酋', id: 'uae', isoCode: 'AE', intensity: '中' },
  'Russia': { labelPos: [100, 62], countryCenter: [100, 60], name: '俄罗斯', id: 'russia', isoCode: 'RU', intensity: '高' },
  'Singapore': { labelPos: [108, 8], countryCenter: [103.8, 1.35], name: '新加坡', id: 'singapore', isoCode: 'SG', intensity: '极高' },
  'Malaysia': { labelPos: [95, 0], countryCenter: [101.9758, 4.2105], name: '马来西亚', id: 'malaysia', isoCode: 'MY', intensity: '高' },
  'Paraguay': { labelPos: [-58, -26], countryCenter: [-58, -23], name: '巴拉圭', id: 'paraguay', isoCode: 'PY', intensity: '低至中' },
  'Taiwan': { labelPos: null, countryCenter: [121, 23.5], name: '台湾', id: null, isoCode: 'TW', intensity: '极高' },
  'Hong Kong': { labelPos: [110, 22], countryCenter: [114.17, 22.32], name: '中国香港', id: 'hongkong', isoCode: 'HK', intensity: '极高' },
};

const highlightCountryNames = new Set(Object.keys(countryDataMap));

// 图例数据
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
                          stroke: '#6b7280',
                          strokeWidth: 1,
                          outline: 'none',
                          transition: 'all 0.2s ease',
                        },
                        pressed: {
                          fill: isHighlighted ? colors.pressed : '#9ca3af',
                          stroke: '#4b5563',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {Object.values(countryDataMap).map((data) => {
              // 跳过台湾的标记点
              if (data.isoCode !== 'TW') {
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
                          style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fill: '#1f2937',
                            textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white',
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
              }
              return null;
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
