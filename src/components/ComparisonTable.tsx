'use client';

import { useRouter } from 'next/navigation';
import { baseCountries, CountryData } from '../../data/mockData';

export default function ComparisonTable() {
  const router = useRouter();
  const countries: CountryData[] = baseCountries;

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case '极高':
        return 'bg-red-600 text-white';
      case '高':
        return 'bg-orange-500 text-white';
      case '中':
        return 'bg-yellow-400 text-yellow-900';
      case '低至中':
        return 'bg-lime-400 text-lime-900';
      case '低':
        return 'bg-green-400 text-green-900';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatBulletPoints = (text: string) => {
    if (!text) return text;
    const parts = text.split('；').map(s => s.trim()).filter(s => s);
    if (parts.length > 1) {
      return (
        <div className="space-y-1">
          {parts.map((part, index) => (
            <div key={index} className="flex items-start">
              <span className="mr-2 text-gray-400 shrink-0">·</span>
              <span className="text-sm text-gray-700 leading-6">{part}</span>
            </div>
          ))}
        </div>
      );
    }
    return <span className="text-sm text-gray-700 leading-6">{text}</span>;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[10%]">
              国家/地区
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[22%]">
              总体状态
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[28%]">
              产品定性
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[30%]">
              主要限制
            </th>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[10%]">
              监管强度
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
              <td className="px-3 py-3 align-top">
                <div className="text-sm font-bold text-gray-900">{country.name}</div>
              </td>
              <td className="px-3 py-3 align-top">
                <div className="text-sm text-gray-700 leading-6">{country.status}</div>
              </td>
              <td className="px-3 py-3 align-top">
                {formatBulletPoints(country.productQualification)}
              </td>
              <td className="px-3 py-3 align-top">
                {formatBulletPoints(country.restrictions)}
              </td>
              <td className="px-3 py-3 align-top">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded ${getIntensityColor(country.regulatoryIntensity)}`}>
                  {country.regulatoryIntensity}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
