'use client';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// 监管强度颜色映射（清爽、低饱和、现代，与网站蓝灰色系协调）
const intensityColorMap: Record<string, { fill: string; hover: string; pressed: string }> = {
  '极高': { fill: '#E85D75', hover: '#D65369', pressed: '#C4495D' },     // 红色系 - 禁止/高度限制
  '高':   { fill: '#F59E4C', hover: '#E38E40', pressed: '#D17E34' },     // 橙色系 - 强监管市场
  '中':   { fill: '#C8B84E', hover: '#B8A844', pressed: '#A8983A' },     // 黄色系 - 中等监管
  '低至中': { fill: '#5FB879', hover: '#52A86C', pressed: '#459860' },   // 绿色系 - 开放/相对友好
};

// 小国家标记（需要特别突出的小面积国家/地区）
const smallCountries = ['Singapore', 'Malaysia', 'United Arab Emirates', 'Hong Kong'];

const countryDataMap: Record<string, any> = {
  'China': { labelPos: [105, 38], countryCenter: [105, 35], name: '中国内地', id: 'china', isoCode: 'CN', intensity: '极高', isSmall: false },
  'Indonesia': { labelPos: [115, -3], countryCenter: [115, -5], name: '印尼', id: 'indonesia', isoCode: 'ID', intensity: '低至中', isSmall: false },
  'United Arab Emirates': { labelPos: [56, 28], countryCenter: [54, 24], name: '阿联酋', id: 'uae', isoCode: 'AE', intensity: '中', isSmall: true },
  'Russia': { labelPos: [100, 62], countryCenter: [100, 60], name: '俄罗斯', id: 'russia', isoCode: 'RU', intensity: '高', isSmall: false },
  'Singapore': { labelPos: [106, 6], countryCenter: [103.8, 1.35], name: '新加坡', id: 'singapore', isoCode: 'SG', intensity: '极高', isSmall: true },
  'Malaysia': { labelPos: [100, 3], countryCenter: [101.9758, 4.2105], name: '马来西亚', id: 'malaysia', isoCode: 'MY', intensity: '高', isSmall: true },
  'Paraguay': { labelPos: [-58, -26], countryCenter: [-58, -23], name: '巴拉圭', id: 'paraguay', isoCode: 'PY', intensity: '低至中', isSmall: false },
  'Taiwan': { labelPos: null, countryCenter: [121, 23.5], name: '台湾', id: null, isoCode: 'TW', intensity: '极高', isSmall: false },
  'Hong Kong': { labelPos: [113, 23], countryCenter: [114.17, 22.32], name: '中国香港', id: 'hongkong', isoCode: 'HK', intensity: '极高', isSmall: true },
};

const highlightCountryNames = new Set(Object.keys(countryDataMap));

// 图例数据
const legendItems = [
  { color: '#E85D75', label: '禁止 / 高度限制' },
  { color: '#F59E4C', label: '强监管市场' },
  { color: '#C8B84E', label: '中等监管' },
  { color: '#5FB879', label: '开放 / 相对友好' },
];

export default function WorldMap() {
  const router = useRouter();
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

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
      setHoveredMarker(data.name);
    }
  };

  const handleMarkerHover = (name: string) => {
    setHoveredCountry(name);
    setHoveredMarker(name);
    const data = countryDataMap[name];
    if (data?.id) {
      router.prefetch(`/country/${data.id}`);
    }
  };

  const handleMarkerLeave = () => {
    setHoveredCountry(null);
    setHoveredMarker(null);
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
    <div className="w-full bg-[#F8FAFC] rounded-lg p-4">
      <div className="overflow-x-auto">
        <div className="min-w-[800px] h-[550px]">
          <ComposableMap 
            projection="geoMercator" 
            projectionConfig={{ scale: 172, center: [30, 25] }}
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
                      onMouseEnter={() => handleCountryHover(name)}
                      onMouseLeave={() => handleMarkerLeave()}
                      style={{
                        default: {
                          fill: isHighlighted ? colors.fill : '#E5E7EB',
                          stroke: '#CBD5E1',
                          strokeWidth: isHovered && isHighlighted ? 1.5 : 0.5,
                          outline: 'none',
                          cursor: isHighlighted ? 'pointer' : 'default',
                          transition: 'all 0.2s ease',
                        },
                        hover: {
                          fill: isHighlighted ? colors.hover : '#D1D5DB',
                          stroke: isHighlighted ? '#64748B' : '#94A3B8',
                          strokeWidth: 1.5,
                          outline: 'none',
                          cursor: isHighlighted ? 'pointer' : 'default',
                          transition: 'all 0.2s ease',
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

            {Object.values(countryDataMap).map((data) => {
              if (data.isoCode !== 'TW') {
                const colors = getCountryColors(Object.keys(countryDataMap).find(k => countryDataMap[k] === data) || '');
                const isHovered = hoveredMarker === data.name;
                const isSmall = data.isSmall;
                const markerRadius = isSmall ? 7 : 4;
                
                return (
                  <g key={data.id || data.isoCode}>
                    {/* 小国家增强marker */}
                    {isSmall && (
                      <Marker coordinates={data.countryCenter}>
                        <circle
                          r={isHovered ? markerRadius * 1.15 : markerRadius}
                          fill={colors.fill}
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          style={{ 
                            cursor: data.id ? 'pointer' : 'default',
                            transition: 'transform 0.2s ease',
                            filter: 'drop-shadow(0 1px 4px rgba(15, 23, 42, 0.25))',
                          }}
                          onClick={() => handleLabelClick(data.id)}
                          onMouseEnter={() => handleMarkerHover(data.name)}
                          onMouseLeave={() => handleMarkerLeave()}
                        />
                      </Marker>
                    )}
                    
                    {/* 大国家标记点 */}
                    {!isSmall && (
                      <Marker coordinates={data.countryCenter}>
                        <circle
                          r={isHovered ? markerRadius * 1.15 : markerRadius}
                          fill={colors.fill}
                          stroke="white"
                          strokeWidth="2"
                          style={{ 
                            cursor: data.id ? 'pointer' : 'default',
                            transition: 'transform 0.2s ease',
                          }}
                          onClick={() => handleLabelClick(data.id)}
                          onMouseEnter={() => handleMarkerHover(data.name)}
                          onMouseLeave={() => handleMarkerLeave()}
                        />
                      </Marker>
                    )}
                    
                    {/* 标签 */}
                    {data.labelPos && (
                      <Marker coordinates={data.labelPos}>
                        <text
                          textAnchor="middle"
                          dominantBaseline="middle"
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            fill: '#1E293B',
                            textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white',
                            cursor: data.id ? 'pointer' : 'default',
                            transition: 'all 0.2s ease',
                          }}
                          onClick={() => handleLabelClick(data.id)}
                          onMouseEnter={() => handleMarkerHover(data.name)}
                          onMouseLeave={() => handleMarkerLeave()}
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
      <div className="flex items-center justify-center gap-8 mt-6 flex-wrap">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <span
              className="inline-block w-4 h-4 rounded-md border border-gray-300 shadow-sm"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-[#334155] font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
