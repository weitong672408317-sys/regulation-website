'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { baseCountries, CountryData } from '../../data/mockData';
import { getCountries } from '../app/admin/actions';

export default function ComparisonTable() {
  const router = useRouter();
  const [countries, setCountries] = useState<CountryData[]>(baseCountries);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data.length > 0 ? data : baseCountries);
      } catch (error) {
        console.error('Error loading countries:', error);
        setCountries(baseCountries);
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case '高':
        return 'bg-red-100 text-red-800';
      case '中':
        return 'bg-yellow-100 text-yellow-800';
      case '低':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-business-orange"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                国家
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                总体状态
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                产品定性
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                主要限制
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                监管强度
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{country.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">{country.status}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700">{country.productQualification}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-700 max-w-xs">{country.restrictions}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getIntensityColor(country.regulatoryIntensity)}`}>
                    {country.regulatoryIntensity}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
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
