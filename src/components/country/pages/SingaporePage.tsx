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
  PolicyCard,
  MarketOperationSection,
  RuleModuleCard,
  TrendAndRedLinesSection,
  ReferencesSection,
  ReferenceGroupCard,
  ReferenceItem,
  BulletList,
} from '../sections';

interface SingaporePageProps {
  country: CountryData;
}

export default function SingaporePage({ country }: SingaporePageProps) {
  return (
    <CountryPageTemplate>
      <SeasonSummarySection
        introText={country.seasonSummary}
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
                新加坡对烟草及新型尼古丁产品采取严格监管，整体特点可以概括为：传统烟草产品可以有限经营，但展示、宣传和使用受到严格限制；电子烟、HNB烟支、尼古丁袋等新型产品原则上禁止；禁烟场所覆盖日常生活场景，个人购买、持有、使用禁止类产品也可能直接面临处罚，场所方还需承担管理责任。
              </p>
            ),
          },
          {
            title: '主要法规 / 政策',
            content: (
              <BulletList items={[
                '《Tobacco and Vaporisers Control Act 1993》：新加坡烟草和雾化器监管的核心法律，覆盖烟草产品、雾化器、仿烟产品、禁止类烟草产品及相关组件的广告、销售、供应、购买、持有、使用、进口、场所责任和处罚等事项。',
                '2026年修法和更名：2026年5月1日起，原《Tobacco Control of Advertisements and Sale Act》更名并修订为《Tobacco and Vaporisers Control Act 1993》，监管重点进一步扩展到雾化器、新型烟草产品、仿烟产品及相关组件。',
                '传统烟草产品进口、税务和包装规则：传统烟草产品还涉及新加坡海关、关税、烟草消费税、GST、标准化包装和健康警示要求。',
                '禁烟场所规则：公共场所吸烟主要由禁烟场所相关规则和新加坡国家环境局（NEA）执法体系管理。',
                '禁止类产品有限豁免规则：《Tobacco and Vaporisers Control (Prohibited Tobacco Products and Imitation Tobacco Products) (Exemption) Order 2018》及其2026年修订，对部分禁止类产品在非临床研究、产品开发、供应链相关活动等特定目的下设置有限豁免。'
              ]} />
            ),
          },
          {
            title: '监管部门',
            content: (
              <ul className="list-disc pl-5 space-y-2 text-base leading-7 text-[#334155]">
                <li><span className="font-semibold text-[#263247]">新加坡卫生部（MOH）：</span>负责控烟政策和法规框架。</li>
                <li><span className="font-semibold text-[#263247]">新加坡卫生科学局（HSA）：</span>负责烟草许可管理，并负责电子烟、雾化器等禁止类产品执法。</li>
                <li><span className="font-semibold text-[#263247]">新加坡海关（Singapore Customs）：</span>负责烟草产品进口、关税和税务监管。</li>
                <li><span className="font-semibold text-[#263247]">新加坡国家环境局（NEA）：</span>负责禁烟场所和公共场所吸烟执法。</li>
              </ul>
            ),
          },
        ]}
      />

      <ProductAccessSection>
        <ProductModuleCard title="传统烟草产品" label="产品定性">
          <StatusCard
            status="amber"
            title="传统卷烟、雪茄、小雪茄及其他制成烟草产品"
            content="可在新加坡烟草许可和税务监管框架下经营。主要监管集中在进口、批发、零售、包装标签、广告促销、销售对象和使用场所。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="电子烟 / 雾化器 / 烟油" label="产品定性">
          <StatusCard
            status="red"
            title="电子烟 / 雾化器 / 烟油"
            content="原则上禁止进口、销售、供应、购买、持有和使用。包括雾化器、烟弹、烟油、补充液及相关组件。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="HNB烟支 / 加热不燃烧产品" label="产品定性">
          <StatusCard
            status="red"
            title="HNB烟支 / 加热不燃烧产品"
            content="原则上禁止进口、销售、供应、购买、持有和使用。包括HNB烟支、加热烟草产品、加热设备及相关组件。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="尼古丁袋 / 口含类产品" label="产品定性">
          <StatusCard
            status="red"
            title="尼古丁袋 / 尼古丁口含膜 / 口含烟 / 鼻烟 / snus"
            content="原则上禁止进口、销售、供应、购买、持有和使用。尼古丁口含膜应与尼古丁袋、口含类或无烟类尼古丁产品一并审慎判断。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="水烟烟草 / 仿烟产品" label="产品定性">
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="red"
              title="Shisha tobacco / 水烟烟草"
              content="列入禁止类产品范围，原则上禁止进口、销售、供应、购买、持有和使用。"
            />
            <StatusCard
              status="red"
              title="仿烟产品"
              content="原则上禁止进口、销售、供应、购买、持有和使用。包括模仿烟草产品、电子烟或吸烟行为的产品、装置或相关组件。"
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="烟草原料及普通辅材" label="产品定性">
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="amber"
              customLabel="部分限制 / 需确认"
              title="烟草薄片、烟叶"
              content="公开资料未见单独禁止口径。应结合进口品名、成分、形态、申报路径及监管归类判断。"
            />
            <StatusCard
              status="amber"
              customLabel="部分限制 / 需确认"
              title="爆珠 / 香精胶囊、滤嘴棒"
              content="公开资料未见单独禁止口径。应结合成分、形态、进口申报品名及是否构成烟草产品、雾化器组件、仿烟产品或其他受管制物品判断。"
            />
          </div>
        </ProductModuleCard>
      </ProductAccessSection>

      <ComplianceSection country={country} />

      <TaxSection introText={country.tax.exciseTax}>
        {country.tax.policies.map((policy, index) => (
          <PolicyCard key={index} title={policy.title}>
            <p className="text-[#334155] text-base leading-7">{policy.description}</p>
          </PolicyCard>
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
        tipText="以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。新加坡相关法律、政府条例和主管机关口径可能经过后续修订或更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。"
        regulationContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="核心法律与修法">
              <ReferenceItem
                url="https://sso.agc.gov.sg/Act/TVCA1993"
                title="《Tobacco and Vaporisers Control Act 1993》"
                description="新加坡烟草和雾化器监管的核心法律，覆盖烟草产品、雾化器、仿烟产品、禁止类烟草产品及相关组件。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.moh.gov.sg/newsroom/tobacco-control-of-advertisements-and-sale-amendment-and-other-matters-bill-to-strengthen-enforcement-against-vaping-and-etomidate-abuse/"
                title="新加坡卫生部MOH：Tobacco and Vaporisers Control Amendment Bill"
                description="2026年修法，强化电子烟、雾化器和依托咪酯滥用执法，加重处罚，扩展场所管理义务。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.moh.gov.sg/newsroom/tobacco-control-of-advertisements-and-sale-amendment-and-other-matters-bill-second-reading-opening-speech-by-dr-koh-poh-koon-senior-minister-of-state-ministry-of-health-and-ministry-of-manpower-6-march-2026/"
                title="新加坡卫生部MOH：Second Reading Speech on Amendment Bill"
                description="2026年3月二读发言，说明修法背景、处罚加重及场所管理义务。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="许可与执法">
              <ReferenceItem
                url="https://www.hsa.gov.sg/tobacco-regulation/overview"
                title="新加坡卫生科学局HSA：Overview of tobacco control"
                description="HSA烟草监管概览，涵盖许可、执法和合规要求。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.hsa.gov.sg/tobacco-regulation/tobacco-licences"
                title="新加坡卫生科学局HSA：Tobacco licences"
                description="烟草进口商、批发商和零售许可申请及管理规则。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.hsa.gov.sg/tobacco-regulation/vaping-enforcement"
                title="新加坡卫生科学局HSA：Vaping enforcement"
                description="电子烟、雾化器等禁止类产品执法信息和处罚安排。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="包装与禁烟场所">
              <ReferenceItem
                url="https://www.moh.gov.sg/newsroom/standardised-packaging-enlarged-graphic-health-warnings-mandatory-for-all-tobacco-products-in-singapore-from-1-july-2020/"
                title="新加坡卫生部MOH：Standardised packaging and enlarged graphic health warnings"
                description="自2020年7月1日起，所有烟草产品必须使用标准化包装和放大图形健康警示。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.nea.gov.sg/our-services/smoking-prohibition/smoking-legislation"
                title="新加坡国家环境局NEA：Smoking Legislation"
                description="禁烟场所立法和执法规则。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.nea.gov.sg/our-services/smoking-prohibition/overview"
                title="新加坡国家环境局NEA：Smoking Prohibition"
                description="禁烟场所概览，覆盖全岛超过49,000个地点。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="进口与税务">
              <ReferenceItem
                url="https://ask.gov.sg/customs/questions/cm7lx1tgh01kelrwzodkkt22n"
                title="新加坡海关Singapore Customs：Importing cigarettes or tobacco products into Singapore"
                description="传统烟草产品进口申报、关税和消费税要求。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="有限豁免">
              <ReferenceItem
                url="https://sso.agc.gov.sg/SL/TVCA1993-S70-2018"
                title="《Tobacco and Vaporisers Control (Exemption) Order 2018》"
                description="对部分禁止类产品在非临床研究、产品开发、供应链相关活动等特定目的下设置有限豁免。"
              />
              <ReferenceItem
                showSeparator
                url="https://assets.egazette.gov.sg/2026/Legislative%20Supplements/Subsidiary%20Legislation%20Supplement/254.pdf"
                title="《Tobacco and Vaporisers Control (Exemption) (Amendment) Order 2026》"
                description="2026年修订版有限豁免令。"
              />
            </ReferenceGroupCard>
          </div>
        }
        newsContent={
          <ReferenceGroupCard title="执法与政策动态">
            <ReferenceItem
              url="https://www.moh.gov.sg/newsroom/over-2-500-caught-vaping-in-first-3-months-of-2026/"
              title="2026年5月：新加坡公布2026年第一季度电子烟执法情况，超过2,500人被查获"
              description="新加坡公布2026年第一季度电子烟执法数据，显示相关监管已进入持续性高压治理阶段。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.moh.gov.sg/newsroom/tobacco-control-of-advertisements-and-sale-amendment-and-other-matters-bill-to-strengthen-enforcement-against-vaping-and-etomidate-abuse/"
              title="2026年3月：新加坡通过修法，强化电子烟、雾化器和依托咪酯滥用执法"
              description="修法进一步强化对进口、销售、供应、购买、持有和使用相关产品的处罚，并将监管延伸至储存和场所管理。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.channelnewsasia.com/singapore/budget-2026-tobacco-cigarettes-duty-tax-smoking-5925896"
              title="2026年2月：新加坡所有烟草产品消费税提高20%"
              description="自2026年2月12日起，新加坡所有烟草产品消费税提高20%。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.moh.gov.sg/newsroom/whole-of-government-efforts-to-tackle-vaping/"
              title="2025年8月：新加坡跨部门强化电子烟及依托咪酯相关执法"
              description="新加坡跨部门开展电子烟及含依托咪酯等特定精神活性物质的产品执法。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.moh.gov.sg/newsroom/moh-and-hsa-continue-to-intensify-enforcement-on-e-vaporiser-offences/"
              title="2025年8月：MOH与HSA继续加强电子雾化器违法行为执法"
              description="卫生部与卫生科学局继续加强电子雾化器违法行为执法力度。"
            />
          </ReferenceGroupCard>
        }
      />
    </CountryPageTemplate>
  );
}
