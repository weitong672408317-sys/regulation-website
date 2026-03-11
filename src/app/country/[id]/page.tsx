'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { fetchCountries, CountryData } from '../../../../data/mockData';

const productCategories = [
  { key: 'electronicCigarette', name: '电子烟' },
  { key: 'hnb', name: 'HNB' },
  { key: 'nicotinePouch', name: '尼古丁袋' },
  { key: 'cigarette', name: '卷烟' },
  { key: 'otherNovel', name: '其他新型烟草制品' },
];

export default function CountryDetail() {
  const params = useParams();
  const countryId = params.id as string;
  const [country, setCountry] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'prohibited' | 'partiallyProhibited' | 'open'>('prohibited');
  const [activeCategory, setActiveCategory] = useState<string>('electronicCigarette');

  useEffect(() => {
    const loadCountry = async () => {
      try {
        const countries = await fetchCountries();
        const foundCountry = countries.find(c => c.id === countryId);
        setCountry(foundCountry || null);
      } catch (error) {
        console.error('Error loading country:', error);
        setCountry(null);
      } finally {
        setLoading(false);
      }
    };

    loadCountry();
  }, [countryId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-business-orange"></div>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">国家未找到</h1>
          <Link href="/" className="text-blue-600 hover:underline">返回首页</Link>
        </div>
      </div>
    );
  }

  const currentCategoryRestrictions = country.accessRestrictions[activeCategory as keyof typeof country.accessRestrictions];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
            <span>←</span> 返回首页
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{country.name}</h1>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-900"><strong>本季动态摘要：</strong>{country.seasonSummary}</p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm border border-blue-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span>📢</span> 法规动态
            </h2>
            <ul className="space-y-3">
              {country.regulatoryUpdates.map((update, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{update}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">监管体系与定义</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">监管概述</h3>
                <p className="text-gray-700">{country.regulatorySystem.overview}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">品类定义</h3>
                <p className="text-gray-700">{country.regulatorySystem.definition}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">准入与禁令限制</h2>
            
            <div className="flex gap-2 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('prohibited')}
                className={`px-4 py-2 font-medium rounded-t-lg transition-colors ${
                  activeTab === 'prohibited'
                    ? 'bg-red-100 text-red-800 border-b-2 border-red-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                完全禁止
              </button>
              <button
                onClick={() => setActiveTab('partiallyProhibited')}
                className={`px-4 py-2 font-medium rounded-t-lg transition-colors ${
                  activeTab === 'partiallyProhibited'
                    ? 'bg-yellow-100 text-yellow-800 border-b-2 border-yellow-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                部分禁止
              </button>
              <button
                onClick={() => setActiveTab('open')}
                className={`px-4 py-2 font-medium rounded-t-lg transition-colors ${
                  activeTab === 'open'
                    ? 'bg-green-100 text-green-800 border-b-2 border-green-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                开放/无限制
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {productCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                    activeCategory === category.key
                      ? 'bg-business-orange text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div>
              {activeTab === 'prohibited' && (
                <ul className="space-y-2">
                  {currentCategoryRestrictions.prohibited.length > 0 ? (
                    currentCategoryRestrictions.prohibited.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-500">无完全禁止项目</p>
                  )}
                </ul>
              )}
              {activeTab === 'partiallyProhibited' && (
                <ul className="space-y-2">
                  {currentCategoryRestrictions.partiallyProhibited.length > 0 ? (
                    currentCategoryRestrictions.partiallyProhibited.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-500">无部分禁止项目</p>
                  )}
                </ul>
              )}
              {activeTab === 'open' && (
                <ul className="space-y-2">
                  {currentCategoryRestrictions.open.length > 0 ? (
                    currentCategoryRestrictions.open.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-500">无开放项目</p>
                  )}
                </ul>
              )}
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">合规资质</h2>
            <p className="text-gray-700">{country.compliance.licenseRequirements}</p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">税收政策</h2>
            <p className="text-gray-700">{country.tax.exciseTax}</p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">市场运营规范</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">营销限制</h3>
                <p className="text-gray-700">{country.marketOperation.marketingRestrictions}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">陈列与销售</h3>
                <p className="text-gray-700">{country.marketOperation.displaySales}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-red-600 text-2xl">⚠️</span>
              <h2 className="text-2xl font-bold text-red-900">趋势预判与红线警告</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded p-4 border border-red-200">
                <h3 className="text-lg font-medium text-red-900 mb-3">政策趋势分析</h3>
                <p className="text-gray-800">{country.trendsWarnings.trendAnalysis}</p>
              </div>
              <div className="bg-red-100 rounded p-4 border border-red-300">
                <h3 className="text-lg font-medium text-red-900 mb-3">合规红线清单</h3>
                <ul className="space-y-2">
                  {country.trendsWarnings.redLines.map((line, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span className="text-red-900 font-medium">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">参考资料库</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">法规汇编</h3>
                <ul className="space-y-2">
                  {country.references.regulations.map((reg, index) => (
                    <li key={index}>
                      <a href={reg.url} className="text-blue-600 hover:underline">{reg.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">重要资讯</h3>
                <ul className="space-y-2">
                  {country.references.news.map((news, index) => (
                    <li key={index}>
                      <a href={news.url} className="text-blue-600 hover:underline">{news.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">PDF 下载</h3>
              <div className="flex flex-wrap gap-3">
                {country.references.pdfs.map((pdf, index) => (
                  <button
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors"
                  >
                    <span>📄</span>
                    {pdf}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">© 2024 全球法规动态追踪门户. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
