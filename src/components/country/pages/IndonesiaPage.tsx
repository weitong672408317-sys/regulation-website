'use client';
import React from 'react';
import { CountryData } from '../../../../data/mockData';
import {
  CountryPageTemplate,
  SeasonSummarySection,
  RegulatorySystemSection,
  ProductAccessSection,
  ProductModuleCard,
  StatusCard,
  ComplianceSection,
  TaxSection,
  TaxTableCard,
  MarketOperationSection,
  RuleModuleCard,
  TrendAndRedLinesSection,
  ReferencesSection,
  ReferenceGroupCard,
  ReferenceItem,
  SubCard,
  BulletList,
  DotList
} from '../sections';

interface IndonesiaPageProps {
  country: CountryData;
}

export default function IndonesiaPage({ country }: IndonesiaPageProps) {
  return (
    <CountryPageTemplate>
      <SeasonSummarySection
        introText={country.seasonSummary}
        items={country.regulatoryUpdates?.map(update => {
          const numberedMatch = update.match(/^(\d+[.、]\s*[^\n]+)(?:\n([\s\S]*))?$/);
          if (numberedMatch) {
            const [, title, content] = numberedMatch;
            return { title, content };
          }
          return { title: '', content: update };
        }) || []}
      />

      <RegulatorySystemSection
        cards={[
          {
            title: '核心特征',
            content: (
              <>
                <p className="text-[#334155] text-base leading-7 mb-4">印尼整体属于烟草及新型烟草产品可准入、监管相对友好但重税务合规的市场。传统卷烟、HNB烟支、电子烟、烟草薄片、烟叶、爆珠、香精胶囊、滤嘴棒等产品原则上没有全国性全面禁令；监管重点集中在公共健康要求、应税消费品管理、NPPBKC、进口批准、消费税、税票、包装健康警示、销售限制和广告限制。</p>
                <p className="text-[#334155] text-base leading-7 mb-3">印尼监管的核心逻辑，是将烟草、电子烟和其他烟草加工产品纳入公共健康监管和消费税监管。传统卷烟和 HNB烟支的重点风险在 NPPBKC、消费税、税票和进口申报；电子烟的重点风险在产品成分、尼古丁含量、包装标签、流通监管和非法烟液；尼古丁袋 / 尼古丁口含膜目前缺乏清晰专门定义，产品定性和主管机关口径仍需进入市场前确认。</p>
              </>
            ),
          },
          {
            title: '主要法规 / 政策',
            content: (
              <BulletList items={[
                '《健康法》（2023年第17号法）：将烟草制品和相关成瘾性物质纳入公共健康监管框架，为生产、流通、销售、广告、使用和健康保护措施提供法律基础。',
                '《2024年第28号政府条例》（PP 28/2024）：细化烟草制品、电子烟、成瘾性物质、包装健康警示、销售限制、广告限制和公共健康监管要求，是当前印尼烟草及电子烟市场运营监管的重要依据。',
                '《消费税法》（1995年第11号法）及2007年修订：确立应税消费品、消费税征收、税票、NPPBKC 和消费税执法的基础规则，是传统卷烟、HNB烟支、电子烟及其他 BKC 产品税务和流通合规的基础法律。',
                '《财政部第96/2024号部长规章》（PMK 96/2024）：调整电子烟及其他烟草加工产品的消费税税率和税务规则，影响电子烟、HNB烟支及其他烟草加工产品的税负和价格体系。',
              ]} />
            ),
          },
          {
            title: '监管部门',
            content: (
              <ul className="space-y-3 pl-5 list-disc text-[#334155] text-base leading-7">
                <li><span className="font-bold text-[#1F2A44]">印尼卫生部：</span>负责烟草、电子烟、成瘾性物质、健康警示、销售限制、广告限制和公共健康监管。</li>
                <li><span className="font-bold text-[#1F2A44]">印尼食品药品监督管理局（BPOM）：</span>负责电子烟流通、产品安全、成分风险、非法烟液和含违禁成分产品监管。</li>
                <li><span className="font-bold text-[#1F2A44]">印尼海关及消费税总局：</span>负责 NPPBKC、消费税、税票、进口监管、税务稽查和非法卷烟执法。</li>
                <li><span className="font-bold text-[#1F2A44]">印尼财政部：</span>负责烟草、电子烟及其他烟草加工产品的消费税政策、税率结构和财政政策安排。</li>
                <li><span className="font-bold text-[#1F2A44]">印尼贸易部：</span>负责烟草、烟叶、烟草制品及相关产品进口管理、进口批准和贸易流通规则。</li>
              </ul>
            ),
          },
        ]}
      />

      <ProductAccessSection>
        <ProductModuleCard title="1. 传统卷烟" label="产品定性">
          <StatusCard
            status="amber"
            title="传统卷烟"
            content={
              <>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>生产及本土流通需取得 NPPBKC，并依法完成消费税、税票、烟草税、包装标签等要求。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>成品卷烟进口虽非绝对禁止，但实务中进口批准较难取得，通常仅特定主体获批，数量受到严格限制。</span>
                  </li>
                </ul>
              </>
            }
          />
        </ProductModuleCard>

        <ProductModuleCard title="2. HNB烟支" label="产品定性">
          <StatusCard
            status="amber"
            title="HNB烟支"
            content={
              <>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>可准入，不存在全国性全面禁令。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>成品按 BKC 管理，生产及本土流通需取得 NPPBKC，并完成消费税、税票、包装标签及相关税务要求。</span>
                  </li>
                </ul>
              </>
            }
          />
        </ProductModuleCard>

        <ProductModuleCard title="3. 电子烟" label="产品定性">
          <StatusCard
            status="amber"
            title="电子烟"
            content={
              <>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>可准入，但需要遵守营业许可、消费税、包装标签、成分、尼古丁含量、健康警示和流通监管要求。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>2026年以来，BPOM 对电子烟流通监管的角色受到更多关注，非法或含违禁成分电子烟液是重点执法风险。</span>
                  </li>
                </ul>
              </>
            }
          />
        </ProductModuleCard>

        <ProductModuleCard title="4. 尼古丁袋 / 尼古丁口含膜" label="产品定性">
          <StatusCard
            status="amber"
            customLabel="部分限制 / 需确认"
            title="尼古丁袋 / 尼古丁口含膜"
            content={
              <>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>原则上未见全国性全面禁令，但现行法规缺乏清晰专门定义，生产标准、销售规则和主管机关口径仍不够稳定。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>使用烟草来源尼古丁：稳妥起见，应按其他烟草加工产品或 BKC 路径处理，并取得 NPPBKC。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>使用非烟草来源尼古丁：目前资料显示不强制要求取得 NPPBKC，但仍建议在实际生产或销售前确认主管机关口径。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>如宣称戒烟、治疗或药品功效：可能触发 BPOM 药品路径，需另行确认。</span>
                  </li>
                </ul>
              </>
            }
          />
        </ProductModuleCard>

        <ProductModuleCard title="5. 烟草原料及普通辅材" label="产品定性">
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="amber"
              title="烟草薄片、烟叶"
              content={
                <>
                  <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                  <ul className="space-y-1 text-[#334155]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                      <span>烟草薄片作为工业原材料使用时，按非 BKC 处理，不需要 NPPBKC；进口一般限于具备生产资质的工厂自用。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                      <span>烟叶进口需要 PI 进口批准，受政府对进口总量和国内烟叶供需平衡的管理。</span>
                    </li>
                  </ul>
                </>
              }
            />
            <StatusCard
              status="green"
              title="爆珠 / 香精胶囊、滤嘴棒"
              content={
                <>
                  <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                  <ul className="space-y-1 text-[#334155]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                      <span>爆珠 / 香精胶囊：含烟草提取物或尼古丁的需要取得 NPPBKC；不含的不需要。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                      <span>滤嘴棒：不需要 NPPBKC，不需要 PI 进口批准，也不需要 BPOM 产品注册。</span>
                    </li>
                  </ul>
                </>
              }
            />
          </div>
        </ProductModuleCard>
      </ProductAccessSection>

      <ComplianceSection country={country} />

      <TaxSection introText="印尼税务判断的核心是区分产品是否属于 BKC（应税消费品），以及产品是否进入印尼本土市场流通。烟草薄片作为工业原材料使用时，按非 BKC 处理；HNB烟支、传统卷烟、尼古丁口含膜等成品按 BKC 处理。">
        {country.tax.policies.map((policy, index) => (
          <TaxTableCard key={index} title={policy.title}>
            <p className="text-[#334155] text-base leading-7">{policy.description}</p>
          </TaxTableCard>
        ))}
      </TaxSection>

      <MarketOperationSection>
        <div className="grid md:grid-cols-2 gap-4">
          <RuleModuleCard number={1} title="销售与陈列">
            <DotList items={country.marketOperation.regulations.find(r => r.category === '销售与陈列')?.items || []} />
          </RuleModuleCard>
          <RuleModuleCard number={2} title="包装与标签">
            <DotList items={country.marketOperation.regulations.find(r => r.category === '包装与标签')?.items || []} />
          </RuleModuleCard>
          <RuleModuleCard number={3} title="广告与宣传">
            <DotList items={country.marketOperation.regulations.find(r => r.category === '广告与宣传')?.items || []} />
          </RuleModuleCard>
          <RuleModuleCard number={4} title="赞助、促销与CSR">
            <DotList items={country.marketOperation.regulations.find(r => r.category === '赞助、促销与CSR')?.items || []} />
          </RuleModuleCard>
        </div>
      </MarketOperationSection>

      <TrendAndRedLinesSection
        trendContent={
          <div className="space-y-4">
            {country.trendsWarnings.trendAnalysis.split(/\n\n+/).map((paragraph, index) => (
              <p key={index} className="text-[#334155] text-base leading-7">{paragraph}</p>
            ))}
          </div>
        }
        redLineItems={country.trendsWarnings.redLines}
      />

      <ReferencesSection
        tipText="以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。印尼相关法律、政府条例和主管机关口径可能经过后续修订或更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。"
        regulationContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="公共健康监管">
              <ReferenceItem
                url="https://peraturan.bpk.go.id/Download/314883/UU%20Nomor%2017%20Tahun%202023.pdf"
                title="《健康法》（2023年第17号法）"
                description={<><span className="font-semibold">主要内容：</span>将烟草制品和相关成瘾性物质纳入公共健康监管框架，为生产、流通、销售、广告、使用和健康保护措施提供法律基础。</>}
              />
              <ReferenceItem
                showSeparator
                url="https://peraturan.bpk.go.id/details/294077/pp-no-28-tahun-2024"
                title="《2024年第28号政府条例》（PP 28/2024）"
                description={<><span className="font-semibold">主要内容：</span>细化烟草制品、电子烟、成瘾性物质、包装健康警示、销售限制、广告限制和公共健康监管要求，是当前印尼烟草及电子烟市场运营监管的重要依据。</>}
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="消费税监管">
              <ReferenceItem
                url="https://peraturan.bpk.go.id/Details/46203/uu-no-11-tahun-1995"
                title="《消费税法》（1995年第11号法，经2007年修订）"
                description={<><span className="font-semibold">主要内容：</span>确立应税消费品、消费税征收、税票、NPPBKC 和消费税执法的基础规则，是传统卷烟、HNB烟支、电子烟及其他 BKC 产品税务和流通合规的基础法律。</>}
              />
              <ReferenceItem
                showSeparator
                url="https://peraturan.bpk.go.id/Details/311451/pmk-no-96-tahun-2024"
                title="财政部第96/2024号部长规章（PMK 96/2024）"
                description={<><span className="font-semibold">主要内容：</span>调整电子烟及其他烟草加工产品的消费税税率和税务规则，影响电子烟、HNB烟支及其他烟草加工产品的税负和价格体系。</>}
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="地方控烟条例">
              <ReferenceItem
                url="https://ktr.kemkes.go.id/regulasi"
                title="地方性无烟区 / 控烟条例"
                description={<><span className="font-semibold">主要内容：</span>印尼卫生部控烟信息平台，汇总全国及地方控烟相关法规、政策和实施细则。</>}
              />
            </ReferenceGroupCard>
          </div>
        }
        newsContent={
          <ReferenceGroupCard title="新闻动态">
            {country.references.news.map((news, index) => (
              <ReferenceItem
                key={index}
                title={news.title}
                url={news.url}
                showSeparator={index > 0}
              />
            ))}
          </ReferenceGroupCard>
        }
      />
    </CountryPageTemplate>
  );
}
