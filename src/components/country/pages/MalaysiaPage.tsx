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
  BulletList,
} from '../sections';

interface MalaysiaPageProps {
  country: CountryData;
}

export default function MalaysiaPage({ country }: MalaysiaPageProps) {
  return (
    <CountryPageTemplate>
      <SeasonSummarySection
        items={country.regulatoryUpdates?.map(update => {
          const numberedMatch = update.match(/^(\d+\.\s*[^\n]+)(?:\n([\s\S]*))?$/);
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
              <p className="text-[#334155] text-base leading-7">
                马来西亚对烟草及相关吸烟产品采取分层监管。传统烟草和 HNB烟支仍有合法市场空间，但受到产品注册、包装标签、税务、销售限制、广告限制和禁烟场所规则约束；电子烟已被纳入吸烟产品监管；含尼古丁电子烟受到液体 / 凝胶尼古丁毒物管制影响，普通商业上市路径明显受阻；尼古丁袋、尼古丁口含膜等口含类尼古丁产品尚未形成清晰、稳定的专门分类。
              </p>
            ),
          },
          {
            title: '主要法规 / 政策',
            content: (
              <BulletList items={[
                '《公共健康吸烟产品管制法》（Act 852）：马来西亚吸烟产品监管的核心法律，覆盖烟草产品、吸烟物质、替代烟草产品的注册、广告、销售、购买、包装标签、禁烟场所、未成年人保护和执法。',
                '《公共健康吸烟产品管制（包装和标签）规例》：细化传统卷烟、雪茄、HNB烟支、电子烟液、烟弹、一次性电子烟、电子烟设备及相关吸烟产品的包装、标签、健康警示、容量、尼古丁浓度和禁止性包装表述。',
                '《毒药法》（Poisons Act 1952）：影响液体 / 凝胶尼古丁、含尼古丁电子烟液、含尼古丁烟弹、一次性含尼古丁电子烟及其他含尼古丁产品的毒物及药剂监管。2026年液体尼古丁判决后，液体 / 凝胶尼古丁继续涉及该法管制。',
                '海关、消费税、销售税和进口税相关规则：规范传统烟草、加热烟草产品、电子烟设备、电子烟液及相关产品的进口申报、海关归类、进口税、消费税、销售税和完税安排。',
                '2026年预算及2025年加热烟草产品税务调整：影响加热烟草产品消费税安排。自2025年11月1日起，加热烟草产品消费税按每公斤烟草含量增加RM20。'
              ]} />
            ),
          },
          {
            title: '监管部门',
            content: (
              <ul className="list-disc pl-5 space-y-2 text-base leading-7 text-[#334155]">
                <li><span className="font-semibold text-[#263247]">马来西亚卫生部：</span>负责烟草、HNB烟支、电子烟、吸烟物质和替代烟草产品监管，是 Act 852 项下产品注册、包装标签、销售限制、广告促销限制、禁烟场所、未成年人保护和执法的核心主管机关。</li>
                <li><span className="font-semibold text-[#263247]">药剂执法司：</span>负责药品、毒物、液体 / 凝胶尼古丁相关执法。含尼古丁电子烟液、含尼古丁烟弹和一次性含尼古丁电子烟涉及《毒药法》管制时，由其负责相关执法。</li>
                <li><span className="font-semibold text-[#263247]">毒药委员会：</span>负责就毒物分类、毒物清单调整、毒物移出清单等事项提供专业意见。液体 / 凝胶尼古丁是否列入毒物清单，属于其职能相关事项。</li>
                <li><span className="font-semibold text-[#263247]">马来西亚财政部：</span>负责烟草、加热烟草产品、电子烟相关产品的税收政策，包括进口税、消费税和销售税政策。</li>
                <li><span className="font-semibold text-[#263247]">马来西亚海关局：</span>负责进口申报、海关编码、进口税、消费税、销售税征管、完税管理、仓储和边境执法。</li>
              </ul>
            ),
          },
        ]}
      />

      <ProductAccessSection>
        <ProductModuleCard title="1. 传统烟草产品" label="产品定性">
          <StatusCard
            status="green"
            title="传统卷烟、雪茄、烟丝及其他制成烟草"
            content="可准入，属于强监管烟草产品。主要受产品注册、税务、包装警示、销售限制、广告禁令和禁烟场所规则约束。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="2. HNB烟支 / 加热烟草产品" label="产品定性">
          <StatusCard
            status="green"
            title="HNB烟支/加热烟草产品"
            content="可准入，按含烟草加热产品处理。马来西亚已将加热产品纳入包装标签规则，并将加热烟草产品纳入税务安排。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="3. 含尼古丁电子烟" label="产品定性">
          <StatusCard
            status="red"
            title="含尼古丁电子烟液、含尼古丁烟弹、一次性含尼古丁电子烟"
            content="当前无普通商业上市路径。不得作为消费型电子烟产品，通过电子烟店、电商平台、经销商、社交媒体、递样、试用或商业推广方式进入市场。2026年5月高等法院判决后，液体/凝胶尼古丁继续涉及《毒药法》管制。消费型含尼古丁电子烟产品通常难以满足药品/制剂注册、主管机关批准、持牌药剂师或注册医疗从业者供应等要求。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="4. 不含尼古丁电子烟及设备" label="产品定性">
          <StatusCard
            status="amber"
            customLabel="部分限制 / 需确认"
            title="不含尼古丁电子烟液、电子烟设备及组件"
            content="不受液体尼古丁判决直接影响，但仍属于Act 852管控范围。不得按普通电子消费品销售或推广，需进入吸烟产品注册、标签、销售和广告限制框架。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="5. 尼古丁袋 / 尼古丁口含膜" label="产品定性">
          <StatusCard
            status="amber"
            customLabel="部分限制 / 需确认"
            title="尼古丁袋/尼古丁口含膜"
            content="尚无清晰专门准入路径。含烟草的按烟草产品判断；不含烟草但含尼古丁的重点进入毒物或药剂监管；普通消费品路径缺乏稳定依据。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="6. 烟草原料及普通辅材" label="产品定性">
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="amber"
              customLabel="部分限制 / 需确认"
              title="烟草薄片、烟叶"
              content="公开资料未见全国性全面禁止规则。含烟草或由烟草加工形成的，需按烟草产品、烟草原料、进口和税务规则判断。"
            />
            <StatusCard
              status="amber"
              customLabel="部分限制 / 需确认"
              title="爆珠/香精胶囊、滤嘴棒"
              content="公开资料未见其本身被单独列为禁止类吸烟产品。含烟草、尼古丁、烟草提取物或液体/凝胶成分的，需结合烟草产品、吸烟物质、替代烟草产品或毒物/药剂规则判断。"
            />
          </div>
        </ProductModuleCard>
      </ProductAccessSection>

      <ComplianceSection country={country}>
        <p className="text-[#334155] text-base leading-7 mb-4">{country.compliance.licenseRequirements}</p>
        {country.compliance.genericTable && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-[#D8DDED]">
              <thead>
                <tr className="bg-[#E8EDF5]">
                  {country.compliance.genericTable.headers.map((header, idx) => (
                    <th key={idx} className="px-4 py-4 text-left font-bold text-[#2E3F73] border border-[#D8DDED]">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {country.compliance.genericTable.rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white/50' : 'bg-[#F3F5FB]'}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="px-4 py-4 border border-[#D8DDED] text-[#334155] leading-7">
                        {Array.isArray(cell) ? (
                          <ul className="list-disc pl-5 space-y-2">
                            {cell.map((item, itemIdx) => (
                              <li key={itemIdx}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </ComplianceSection>

      <TaxSection introText={country.tax.exciseTax}>
        {country.tax.policies.map((policy, index) => (
          <TaxTableCard key={index} title={policy.title}>
            <p className="text-[#334155] text-base leading-7">{policy.description}</p>
          </TaxTableCard>
        ))}
      </TaxSection>

      <MarketOperationSection>
        <div className="grid md:grid-cols-2 gap-4">
          {country.marketOperation.regulations.map((regulation, index) => (
            <RuleModuleCard key={index} number={index + 1} title={regulation.category}>
              <ul className="space-y-2">
                {regulation.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                    <span className="text-[#334155] text-sm leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </RuleModuleCard>
          ))}
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
        tipText="以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。马来西亚相关法律、政府条例和主管机关口径可能经过后续修订或更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。"
        regulationContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="公共健康与吸烟产品监管">
              <ReferenceItem
                url="https://seatca.org/dmdocuments/Control%20of%20Smoking%20Products%20for%20Public%20Health%20Act%202024.pdf"
                title="马来西亚《公共健康吸烟产品管制法》（Act 852）"
                description="马来西亚吸烟产品监管的核心法律，覆盖烟草产品、吸烟物质、替代烟草产品的注册、广告、销售、购买、包装标签、禁烟场所、未成年人保护和执法。"
              />
              <ReferenceItem
                showSeparator
                url="https://assets.tobaccocontrollaws.org/uploads/legislation/Malaysia/Malaysia-TC-Regs-2024-PL.pdf"
                title="《公共健康吸烟产品管制（包装和标签）规例》"
                description="细化传统卷烟、雪茄、HNB烟支、电子烟液、烟弹、一次性电子烟、电子烟设备及相关吸烟产品的包装、标签、健康警示、容量、尼古丁浓度和禁止性包装表述。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="税务与海关监管">
              <ReferenceItem
                url="https://assets.kpmg.com/content/dam/kpmg/my/pdf/budget2026-tl-indirect-tax-perspective.pdf"
                title="马来西亚财政部2026年预算税务措施"
                description="影响加热烟草产品消费税安排。自2025年11月1日起，加热烟草产品消费税按每公斤烟草含量增加RM20。"
              />
            </ReferenceGroupCard>
          </div>
        }
        newsContent={
          <ReferenceGroupCard title="执法与司法动态">
            <ReferenceItem
              url="https://codeblue.galencentre.org/2026/05/high-court-rules-liquid-nicotine-was-delisted-unlawfully/"
              title="CodeBlue：2026年5月高等法院认定液体尼古丁移出毒物清单的决定违法"
              description="高等法院认定，2023年将电子烟用液体/凝胶尼古丁从《毒药法》毒物清单中移除的决定违法。判决后，液体/凝胶尼古丁继续涉及《毒药法》管制。"
            />
            <ReferenceItem
              showSeparator
              url="https://codeblue.galencentre.org/2026/05/analysis-court-decision-marks-de-facto-ban-on-nicotine-vape/"
              title="CodeBlue：2026年5月液体尼古丁判决对含尼古丁电子烟构成事实性禁止影响的分析"
              description="分析认为，高等法院判决使含尼古丁电子烟失去进入普通商业流通的前置基础，消费型含尼古丁电子烟产品通常难以满足药剂上市路径。"
            />
            <ReferenceItem
              showSeparator
              url="https://thesun.my/news/malaysia-news/people-issues/health-ministry-issues-over-160000-compounds-under-new-smoking-act/"
              title="The Sun：2026年1月卫生部披露Act 852执法数据"
              description="马来西亚卫生部披露，Act 852生效后已开展大规模执法行动，并发出大量处罚通知。处罚事项包括禁烟区吸烟、未成年人购买或使用吸烟产品等。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.businesstoday.com.my/2026/01/08/law-in-place-as-influencer-charged-for-promoting-smoking-products/"
              title="BusinessToday：2026年1月吸烟产品推广处罚案例"
              description="相关人员因违反Act 852关于禁止广告、促销或赞助吸烟产品的规定，被处以罚款。"
            />
            <ReferenceItem
              showSeparator
              url="https://codeblue.galencentre.org/2024/10/tobacco-vape-regulations-enforced-bans-on-retail-display-online-and-vending-machine-sale/"
              title="CodeBlue：2024年10月Act 852销售控制规则执行说明"
              description="Act 852销售控制规则执行说明，涵盖禁止公开陈列、线上销售和自动售货机销售吸烟产品等规定。"
            />
          </ReferenceGroupCard>
        }
      />
    </CountryPageTemplate>
  );
}
