'use client';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { countries, mapHighlightColor } from '../../data/mockData';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const countryDataMap: Record<string, any> = {
  'China': { labelPos: [105, 38], countryCenter: [105, 35], name: '中国内地', id: 'china', isoCode: 'CN' },
  'Indonesia': { labelPos: [115, -3], countryCenter: [115, -5], name: '印尼', id: 'indonesia', isoCode: 'ID' },
  'United Arab Emirates': { labelPos: [54, 26], countryCenter: [54, 24], name: '阿联酋', id: 'uae', isoCode: 'AE' },
  'Russia': { labelPos: [100, 62], countryCenter: [100, 60], name: '俄罗斯', id: 'russia', isoCode: 'RU' },
  'Singapore': { labelPos: [108, 8], countryCenter: [103.8, 1.35], name: '新加坡', id: 'singapore', isoCode: 'SG' },
  'Malaysia': { labelPos: [95, 0], countryCenter: [101.9758, 4.2105], name: '马来西亚', id: 'malaysia', isoCode: 'MY' },
  'Paraguay': { labelPos: [-58, -26], countryCenter: [-58, -23], name: '巴拉圭', id: 'paraguay', isoCode: 'PY' },
  'Taiwan': { labelPos: null, countryCenter: [121, 23.5], name: '台湾', id: null, isoCode: 'TW' },
  'Hong Kong': { labelPos: [110, 22], countryCenter: [114.17, 22.32], name: '中国香港', id: 'hongkong', isoCode: 'HK' },
};

const highlightCountryNames = new Set(Object.keys(countryDataMap));

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

  const isCountryHighlighted = (geo: any) => {
    const name = geo.properties?.name;
    if (selectedCountry === 'china') {
      return name === 'China' || name === 'Taiwan';
    }
    return highlightCountryNames.has(name);
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
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => handleCountryClick(geo)}
                      onMouseEnter={() => {
                        const data = countryDataMap[name];
                        if (data) setHoveredCountry(data.name);
                      }}
                      onMouseLeave={() => setHoveredCountry(null)}
                      style={{
                        default: {
                          fill: isHighlighted ? mapHighlightColor : '#e5e7eb',
                          stroke: '#9ca3af',
                          strokeWidth: 0.5,
                          outline: 'none',
                          cursor: isHighlighted ? 'pointer' : 'default',
                          transition: 'all 0.2s ease',
                        },
                        hover: {
                          fill: isHighlighted ? '#d97706' : '#d1d5db',
                          stroke: '#6b7280',
                          strokeWidth: 1,
                          outline: 'none',
                          transition: 'all 0.2s ease',
                        },
                        pressed: {
                          fill: isHighlighted ? '#b45309' : '#9ca3af',
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
                return (
                  <g key={data.id || data.isoCode}>
                    <Marker coordinates={data.countryCenter}>
                      <circle
                        r={4}
                        fill={mapHighlightColor}
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
    </div>
  );
}
