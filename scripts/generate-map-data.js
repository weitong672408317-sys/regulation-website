const topojson = require('topojson-client');
const d3 = require('d3-geo');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('public/data/countries-110m.json', 'utf8'));
const countries = topojson.feature(data, data.objects.countries);

const projection = d3.geoMercator().scale(160).center([0, 20]).translate([480, 275]);

const countryDataMap = {
  'China': { name: '中国内地', id: 'china', intensity: '极高', labelLonLat: [105, 38], centerLonLat: [105, 35] },
  'Indonesia': { name: '印尼', id: 'indonesia', intensity: '低至中', labelLonLat: [123, -2.6], centerLonLat: [115, -5], labelAnchor: 'middle' },
  'United Arab Emirates': { name: '阿联酋', id: 'uae', intensity: '中', labelLonLat: [54, 26], centerLonLat: [54, 24] },
  'Russia': { name: '俄罗斯', id: 'russia', intensity: '高', labelLonLat: [100, 62], centerLonLat: [100, 60] },
  'Singapore': { name: '新加坡', id: 'singapore', intensity: '极高', labelLonLat: [106.2, 2.6], centerLonLat: [103.8, 1.35], labelAnchor: 'start', labelLine: true },
  'Malaysia': { name: '马来西亚', id: 'malaysia', intensity: '高', labelLonLat: [99.2, 8.5], centerLonLat: [100.8, 4.5], labelAnchor: 'middle' },
  'Paraguay': { name: '巴拉圭', id: 'paraguay', intensity: '低至中', labelLonLat: [-58, -26], centerLonLat: [-58, -23] },
  'Hong Kong': { name: '中国香港', id: 'hongkong', intensity: '极高', labelLonLat: [110, 22], centerLonLat: [114.17, 22.32] },
};

const labels = Object.entries(countryDataMap).map(([key, val]) => {
  const labelPos = projection(val.labelLonLat);
  const centerPos = projection(val.centerLonLat);
  return {
    name: val.name,
    id: val.id,
    intensity: val.intensity,
    labelX: Math.round(labelPos[0] * 10) / 10,
    labelY: Math.round(labelPos[1] * 10) / 10,
    centerX: Math.round(centerPos[0] * 10) / 10,
    centerY: Math.round(centerPos[1] * 10) / 10,
    labelAnchor: val.labelAnchor || 'middle',
    labelLine: val.labelLine || false,
    countryName: key,
  };
});

fs.writeFileSync('public/data/map-labels.json', JSON.stringify(labels));
console.log('Generated labels:');
labels.forEach(l => console.log(l.id, l.labelX, l.labelY, l.centerX, l.centerY));
