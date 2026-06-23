import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { baseCountries } from '../../../../data/mockData';
import {
  InfoBlock, FormattedText, parseOverview,
  ComplianceLicenseCards, GenericComplianceTable,
  TableCellContent, EmirateDifferencesTable
} from '../../../components/country/CountryComponents';
import ScrollToTop from '../../../components/country/ScrollToTop';
import SidebarNav from '../../../components/country/SidebarNav';

// Dynamic imports - each country page is loaded as a separate chunk
// for faster initial page load and navigation
const RussiaPage = dynamic(() => import('../../../components/country/pages/RussiaPage'));
const UaePage = dynamic(() => import('../../../components/country/pages/UaePage'));
const ParaguayPage = dynamic(() => import('../../../components/country/pages/ParaguayPage'));
const IndonesiaPage = dynamic(() => import('../../../components/country/pages/IndonesiaPage'));
const MalaysiaPage = dynamic(() => import('../../../components/country/pages/MalaysiaPage'));
const SingaporePage = dynamic(() => import('../../../components/country/pages/SingaporePage'));
const ChinaPage = dynamic(() => import('../../../components/country/pages/ChinaPage'));
const HongkongPage = dynamic(() => import('../../../components/country/pages/HongkongPage'));

const countryPageMap: Record<string, React.ComponentType<{ country: any }>> = {
  russia: RussiaPage,
  uae: UaePage,
  paraguay: ParaguayPage,
  indonesia: IndonesiaPage,
  malaysia: MalaysiaPage,
  singapore: SingaporePage,
  hongkong: HongkongPage,
  china: ChinaPage,
};

const russiaMobileNavItems = [
  { id: 'home', label: '返回首页' },
  { id: 'product-access-overview', label: '准入速览' },
  { id: 'overview', label: '监管动态' },
  { id: 'regulatory-system', label: '监管体系' },
  { id: 'product-access', label: '产品口径' },
  { id: 'licenses', label: '合规资质' },
  { id: 'tax', label: '税收政策' },
  { id: 'operation-rules', label: '运营规范' },
  { id: 'trend', label: '监管趋势' },
  { id: 'red-lines', label: '合规红线' },
  { id: 'resources', label: '重要资讯' },
];

function MobileSectionNav() {
  return (
    <nav className="lg:hidden sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-[#D8E0EA]">
      <div className="russia-mobile-nav-scroll flex gap-2 overflow-x-auto px-4 py-2">
        {russiaMobileNavItems.map(item => (
          <a
            key={item.id}
            href={item.id === 'home' ? '/' : `#${item.id}`}
            className="flex-shrink-0 rounded-full border border-[#D8DDED] bg-[#F7F9FC] px-3 py-1.5 text-sm font-medium text-[#2E3F73]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function generateStaticParams() {
  return baseCountries.map(c => ({ id: c.id }));
}

export default async function CountryDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id: countryId } = await params;
  const country = baseCountries.find(c => c.id === countryId) || null;

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

  const CountryPageComponent = countryPageMap[country.id];
  const isRussia = country.id === 'russia';
  const pagePaddingClass = isRussia
    ? 'px-4 md:px-12 xl:px-16 2xl:pl-20 2xl:pr-24'
    : 'px-8 md:px-12 xl:px-16 2xl:pl-20 2xl:pr-24';

  // Countries with dedicated page components use sidebar layout
  if (CountryPageComponent) {
    return (
      <div className={`min-h-screen bg-[#F7F9FC]${isRussia ? ' russia-page' : ''}`}>
        <ScrollToTop countryId={country.id} />
        <header className={`bg-white border-b border-[#D8E0EA] shadow-sm${isRussia ? ' hidden lg:block' : ''}`}>
          <div className={`max-w-7xl lg:max-w-[1800px] mx-auto ${pagePaddingClass} py-4`}>
            <Link href="/" prefetch={true} className="text-[#64748B] hover:text-[#4A6290] flex items-center gap-2 transition-colors">
              <span className="text-lg">←</span> 返回首页
            </Link>
          </div>
        </header>
        {isRussia && <MobileSectionNav />}

        <main className={`max-w-7xl lg:max-w-[1920px] mx-auto ${pagePaddingClass} py-8`}>
          <div className="flex gap-6">
            <SidebarNav countryId={country.id} />
            <div className="flex-1 min-w-0">
              <section className="mb-8">
                <h1 className="text-5xl font-bold text-[#0F172A] mb-6">{country.name}</h1>
              </section>

              <CountryPageComponent country={country} />

              <section className="mb-8">
                <div className="bg-[#F2F4F7] border border-[#E1E5EA] rounded-xl p-5">
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    免责声明：本网站所载内容仅供一般信息参考，不构成法律意见、合规意见、税务意见或其他专业意见，也不应作为任何商业决策、市场准入、产品注册、进口、销售或宣传行为的依据。相关法律法规、监管口径和执法实践可能随时调整；如涉及具体产品、交易安排或合规判断，请结合最新法规、主管机关口径及当地专业顾问意见进行确认。
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        <footer className="bg-white border-t border-[#D8E0EA]">
          <div className="max-w-7xl lg:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-[#64748B] text-sm">© 2024 全球法规动态追踪. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <ScrollToTop countryId={country.id} />
      <header className="bg-white border-b border-[#D8E0EA] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-[#64748B] hover:text-[#4A6290] flex items-center gap-2 transition-colors">
            <span className="text-lg">←</span> 返回首页
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-8">
          <h1 className="text-5xl font-bold text-[#0F172A] mb-6">{country.name}</h1>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
              <div className="w-1 h-7 bg-blue-600 rounded-full"></div>
              监管体系与产品口径
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4">监管概述</h3>
              <div className="space-y-4">
                {parseOverview(country.regulatorySystem.overview).map((section, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <h3 className="text-base font-bold text-blue-900 mb-3">{section.title}</h3>
                    <div className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
              <div className="w-1 h-7 bg-blue-600 rounded-full"></div>
              合规资质
            </h2>
            {country.compliance.licenseCards && country.compliance.licenseCards.length > 0 ? (
              <>
                {country.compliance.licenseRequirements && (
                  <p className="text-gray-700 mb-6">{country.compliance.licenseRequirements}</p>
                )}
                <ComplianceLicenseCards cards={country.compliance.licenseCards} isRussia={false} />
              </>
            ) : country.compliance.genericTable ? (
              <>
                {country.compliance.licenseRequirements && (
                  <p className="text-gray-700 mb-6">{country.compliance.licenseRequirements}</p>
                )}
                <GenericComplianceTable data={country.compliance.genericTable} isRussia={false} />
              </>
            ) : country.compliance.secondGenericTable ? (
              <>
                {country.compliance.licenseRequirements && (
                  <p className="text-gray-700 mb-6">{country.compliance.licenseRequirements}</p>
                )}
                <GenericComplianceTable data={country.compliance.secondGenericTable} isRussia={false} />
              </>
            ) : country.compliance.table.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">产品</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">NPPBKC</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">PI进口批准</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">BPOM注册</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">清真认证</th>
                    </tr>
                  </thead>
                  <tbody>
                    {country.compliance.table.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 border-b border-gray-200 font-medium text-gray-900">{row.product}</td>
                        <td className="px-4 py-3 border-b border-gray-200 text-gray-700">
                          <TableCellContent content={row.nppbkc} />
                        </td>
                        <td className="px-4 py-3 border-b border-gray-200 text-gray-700">
                          <TableCellContent content={row.piImportApproval} />
                        </td>
                        <td className="px-4 py-3 border-b border-gray-200 text-gray-700">
                          <TableCellContent content={row.bpomRegistration} />
                        </td>
                        <td className="px-4 py-3 border-b border-gray-200 text-gray-700">
                          <TableCellContent content={row.halalCertification} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 italic">暂无合规资质数据</p>
            )}
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
              <div className="w-1 h-7 bg-blue-600 rounded-full"></div>
              税费与价格
            </h2>
            {country.tax.exciseTax && (
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{country.tax.exciseTax}</p>
              </div>
            )}
            {country.tax.exciseTaxTable && (
              <InfoBlock title="消费税税率表">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-blue-50">
                        {country.tax.exciseTaxTable.headers.map((header, idx) => (
                          <th key={idx} className="px-4 py-3 text-left font-semibold text-gray-900 border border-gray-200" style={idx === 0 ? { width: '28%' } : { width: '24%' }}>
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {country.tax.exciseTaxTable.rows.map((row, rowIdx) => (
                        <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx} className="px-4 py-3 border border-gray-200 text-gray-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </InfoBlock>
            )}
            {country.tax.minimumPriceTable && (
              <InfoBlock title="最低价格表">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {country.tax.minimumPriceTable.rows.map((row, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border border-blue-100">
                      <div className="font-medium text-gray-900 mb-1">{row[0]}</div>
                      <div className="text-sm text-gray-700 leading-relaxed">{row[1]}</div>
                    </div>
                  ))}
                </div>
              </InfoBlock>
            )}
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
              <div className="w-1 h-7 bg-blue-600 rounded-full"></div>
              市场运营规范
            </h2>
            {country.marketOperation.regulations.length > 0 ? (
              <div className="space-y-4">
                {country.marketOperation.regulations.map((regulation, index) => {
                  if (country.emirateDifferences && regulation.category === '主要酋长国差异') {
                    return (
                      <InfoBlock key={index} title={regulation.category} isRussia={false}>
                        <EmirateDifferencesTable data={country.emirateDifferences} />
                      </InfoBlock>
                    );
                  }
                  return (
                    <div key={index} className="bg-white border border-blue-200 border-l-4 border-l-blue-600 rounded-xl p-5 shadow-sm">
                      <h3 className="text-base font-bold text-blue-900 mb-3">{regulation.category}</h3>
                      <ul className="space-y-3">
                        {regulation.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700 leading-relaxed flex items-start gap-3">
                            <span className="text-blue-600 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            ) : (
              <>
                {country.marketOperation.marketingRestrictions && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">营销限制</h3>
                    <p className="text-gray-700">{country.marketOperation.marketingRestrictions}</p>
                  </div>
                )}
                {country.marketOperation.displaySales && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">销售与陈列</h3>
                    <p className="text-gray-700">{country.marketOperation.displaySales}</p>
                  </div>
                )}
                {!country.marketOperation.marketingRestrictions && !country.marketOperation.displaySales && (
                  <p className="text-gray-500 italic">暂无市场运营规范数据</p>
                )}
              </>
            )}
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-red-600 text-2xl">⚠️</span>
              <h2 className="text-2xl font-bold text-[#243B63]">趋势预判与红线警告</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="text-lg font-bold text-blue-900 mb-4">趋势预判</h3>
                <FormattedText text={country.trendsWarnings.trendAnalysis} />
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-red-600 rounded-full"></div>
                  <h3 className="text-lg font-bold text-red-800">红线警告</h3>
                </div>
                <ul className="space-y-3">
                  {country.trendsWarnings.redLines.map((line, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-600 text-base leading-7 flex-shrink-0 w-4 text-center">✗</span>
                      <span className="text-gray-800 leading-7">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
              <div className="w-1 h-7 bg-blue-600 rounded-full"></div>
              重要资讯
            </h2>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">法规 / 政策文件</h3>
              {country.references.regulations.length > 0 ? (
                <ul className="space-y-2">
                  {country.references.regulations.map((reg, index) => (
                    <li key={index}>
                      <a href={reg.url} className="text-blue-600 hover:underline">{reg.title}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">资料收录中...</p>
              )}
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">新闻 / 执法动态</h3>
              {country.references.news.length > 0 ? (
                <ul className="space-y-2">
                  {country.references.news.map((news, index) => (
                    <li key={index}>
                      <a href={news.url} className="text-blue-600 hover:underline">{news.title}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">资料收录中...</p>
              )}
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-[#F2F4F7] border border-[#E1E5EA] rounded-xl p-5">
            <p className="text-sm text-[#64748B] leading-relaxed">
              免责声明：本网站所载内容仅供一般信息参考，不构成法律意见、合规意见、税务意见或其他专业意见，也不应作为任何商业决策、市场准入、产品注册、进口、销售或宣传行为的依据。相关法律法规、监管口径和执法实践可能随时调整；如涉及具体产品、交易安排或合规判断，请结合最新法规、主管机关口径及当地专业顾问意见进行确认。
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-[#D8E0EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-[#64748B] text-sm">© 2024 全球法规动态追踪. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
