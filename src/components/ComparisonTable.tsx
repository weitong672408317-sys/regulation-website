'use client';

import { useRouter } from 'next/navigation';
import { baseCountries, CountryData } from '../../data/mockData';

export default function ComparisonTable() {
  const router = useRouter();
  const countries: CountryData[] = baseCountries;

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case '极高':
      case '高':
        return 'bg-red-100 text-red-800';
      case '中':
      case '低至中':
        return 'bg-yellow-100 text-yellow-800';
      case '低':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatText = (text: string) => {
    if (!text) return text;
    // 按分号或换行符分割，然后渲染为列表或段落
    const parts = text.split(/;|。/g).map(s => s.trim()).filter(s => s);
    if (parts.length > 1) {
      return (
        <ul className="list-disc list-inside space-y-1 text-xs">
          {parts.map((part, index) => (
            <li key={index}>{part}</li>
          ))}
        </ul>
      );
    }
    // 处理单个换行的文本
    return text.split('\n').map((line, index) => (
      <p key={index} className="mb-1 last:mb-0">{line}</p>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                国家
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-64">
                总体状态
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-96">
                产品定性
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-96">
                主要限制
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                监管强度
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20">
                本季变化
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {countries.map((country) => (
              <tr
                key={country.id}
                onClick={() => router.push(`/country/${country.id}`)}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{country.name}</div>
                </td>
                <td className="px-4 py-4 align-top">
                  <div className="text-sm text-gray-700 leading-relaxed">{country.status}</div>
                </td>
                <td className="px-4 py-4 align-top">
                  <div className="text-sm text-gray-700 leading-relaxed">{formatText(country.productQualification)}</div>
                </td>
                <td className="px-4 py-4 align-top">
                  <div className="text-sm text-gray-700 leading-relaxed">{formatText(country.restrictions)}</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getIntensityColor(country.regulatoryIntensity)}`}>
                    {country.regulatoryIntensity}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {country.hasChangesThisSeason ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      有变化
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      无变化
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
