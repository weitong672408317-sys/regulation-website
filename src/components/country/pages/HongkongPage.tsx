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

interface HongkongPageProps {
  country: CountryData;
}

export default function HongkongPage({ country }: HongkongPageProps) {
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
                香港烟草监管以公共健康、控烟管理和打击非法烟草流通为主要政策背景。整体监管强度较高，传统卷烟、雪茄、中国熟烟及其他制成烟草保留有限合法市场空间，电子烟、加热烟、草本烟等另类吸烟产品已经形成明确禁止框架，无烟烟草产品也受到专门禁令限制。含尼古丁但不含烟草的口含类产品，需要结合毒药及药剂制品监管进一步判断。
              </p>
            ),
          },
          {
            title: '主要法规 / 政策',
            content: (
              <BulletList items={[
                '《吸烟（公众卫生）条例》（第371章）：香港控烟监管的核心法律，覆盖法定禁烟区、烟草广告、包装健康警示、传统卷烟、雪茄、中国熟烟及其他制成烟草销售限制、另类吸烟产品禁令和相关执法安排。',
                '《2021年吸烟（公众卫生）（修订）条例》：在第371章下引入另类吸烟产品禁令。电子烟、加热烟、草本烟等另类吸烟产品，原则上不得进口、制造、售卖、为商业目的管有、推广或广告宣传。',
                '《2025年控烟法例（修订）条例》：进一步扩大控烟和另类吸烟产品监管，包括排队吸烟禁令、指定处所出入口3米范围禁烟、吸烟罪行定额罚款提高至港币3,000元，以及自2026年4月30日起禁止公众地方管有指定另类吸烟产品。',
                '《应课税品条例》：传统卷烟、雪茄、中国熟烟及其他制成烟草税务和海关监管的核心法规，规范烟草税、应课税品许可证、进口、出口、仓储、移离、完税管理和私烟执法。',
                '《无烟烟草产品（禁止）规例》（第132BW章）：专门规制无烟烟草产品，禁止输入、制造、售卖、为出售而管有、要约出售、为出售而展示、托付或交付无烟烟草产品。',
                '《药剂业及毒药条例》：影响含尼古丁但不含烟草产品的毒药及药剂制品监管。尼古丁袋、尼古丁口含膜、含尼古丁口含烟等产品，需要结合该条例判断是否构成第1部毒药或药剂制品。'
              ]} />
            ),
          },
          {
            title: '监管部门',
            content: (
              <ul className="list-disc pl-5 space-y-2 text-base leading-7 text-[#334155]">
                <li><span className="font-semibold text-[#263247]">卫生署控烟酒办公室：</span>负责控烟政策、禁烟场所、排队吸烟禁令、另类吸烟产品禁令、烟草广告限制、传统卷烟、雪茄、中国熟烟及其他制成烟草销售限制和相关执法。</li>
                <li><span className="font-semibold text-[#263247]">香港海关：</span>负责应课税品、烟草税、完税管理、私烟执法、边境执法，以及另类吸烟产品走私和非法进口查缉。</li>
                <li><span className="font-semibold text-[#263247]">食物环境卫生署 / 食物安全中心：</span>负责无烟烟草产品禁令相关执法。</li>
                <li><span className="font-semibold text-[#263247]">卫生署药物办公室 / 药剂业及毒药管理局相关机制：</span>负责毒药及药剂制品监管，重点影响含尼古丁但不含烟草的口含类产品、含尼古丁物质和可能具有药剂属性的产品。</li>
              </ul>
            ),
          },
        ]}
      />

      <ProductAccessSection>
        <ProductModuleCard title="传统卷烟 / 雪茄 / 中国熟烟及其他制成烟草" label="产品定性">
          <StatusCard
            status="green"
            title="传统卷烟、雪茄、中国熟烟及其他制成烟草"
            content="可以依法进入香港市场，但属于高监管品类。企业需要同时处理应课税品许可证、完税证明、包装警示、广告限制、销售对象限制、禁烟场所规则及私烟执法风险。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="电子烟 / 加热烟 / 草本烟" label="产品定性">
          <StatusCard
            status="red"
            title="电子烟 / 加热烟 / 电子烟油 / 烟弹 / 加热烟支 / 草本烟"
            content="禁止进口、制造、售卖、推广及为商业目的管有。进口禁令包括包裹、货物和个人携带入境。自2026年4月30日起，公众地方管有指明另类吸烟产品也被禁止。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="无烟烟草产品" label="产品定性">
          <StatusCard
            status="red"
            title="无烟烟草产品"
            content="禁止输入、制造、售卖、为出售而管有、要约出售、为出售而展示、托付或交付。适用对象包括含烟草并拟供人口服的咀嚼烟草、口嚼卷烟、口嚼搓烟、湿鼻烟等。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="尼古丁袋 / 尼古丁口含膜" label="产品定性">
          <StatusCard
            status="amber"
            customLabel="部分限制 / 需确认"
            title="不含烟草但含尼古丁的尼古丁袋 / 尼古丁口含膜"
            content="不得按普通消费品处理。进口、携带、销售、供应、递样或管有前，应先确认是否构成第1部毒药或药剂制品，并确认是否具备许可、注册或其他合法依据。香港已有查获含怀疑第1部毒药尼古丁的口含烟案例。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="烟草原料及普通辅材" label="产品定性">
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="amber"
              customLabel="部分限制 / 需确认"
              title="烟草薄片、烟叶"
              content="香港公开资料未见单独产品定义或单独禁令。已经构成香烟、中国熟烟、其他制成烟草或其他应课税烟草的，按应课税品及烟草税规则处理；已经制成或包装为加热烟支等另类吸烟产品的，按另类吸烟产品禁令处理。"
            />
            <StatusCard
              status="amber"
              customLabel="部分限制 / 需确认"
              title="爆珠 / 香精胶囊、滤嘴棒"
              content="香港公开资料未见单独产品定义或单独禁令。产品本身如属于另类吸烟产品的零件配件，或用于另类吸烟产品器具产生气雾的物质，按另类吸烟产品处理；普通传统烟草配套材料应结合最终产品的包装、标签、加味产品管控和销售规则审查。"
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
            {country.trendsWarnings.trendAnalysis.split(/\n\n+/).map((paragraph, index) => {
              const numberedMatch = paragraph.match(/^(\d+\.\s*[^\n]+)(?:\n([\s\S]*))?$/);
              if (numberedMatch) {
                const [, title, content] = numberedMatch;
                return (
                  <div key={index} className="space-y-2">
                    <h4 className="font-bold text-[#243B63] text-base">{title}</h4>
                    {content && (
                      <div className="text-[#334155] space-y-2">
                        {content.split('\n').filter((line: string) => line.trim()).map((p: string, pIndex: number) => (
                          <p key={pIndex} className="leading-7">{p}</p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <p key={index} className="text-[#334155] text-base leading-7">{paragraph}</p>
              );
            })}
          </div>
        }
        redLineItems={country.trendsWarnings.redLines}
      />

      <ReferencesSection
        tipText="以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。香港相关法例、附属法例和主管机关口径可能经过后续修订或更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。"
        regulationContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="控烟法律与修订条例">
              <ReferenceItem
                url="https://www.taco.gov.hk/t/tc_chi/legislation/legislation_asp.html"
                title="香港卫生署控烟酒办公室：另类吸烟产品的禁令"
                description="另类吸烟产品禁令说明，涵盖电子烟、加热烟、草本烟等产品的进口、制造、售卖、管有和推广禁止规则。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.taco.gov.hk/t/tc_chi/legislation/legislation_tcl.html"
                title="香港卫生署控烟酒办公室：《2025年控烟法例（修订）条例》说明页面"
                description="2025年修订条例说明，涵盖排队吸烟禁令、禁烟区扩展、定额罚款提高及公众地方管有另类吸烟产品禁令。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.taco.gov.hk/t/sc_chi/legislation/legislation_sa.html"
                title="香港卫生署控烟酒办公室：法定禁烟区"
                description="法定禁烟区范围和执法规则说明。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="税务与海关监管">
              <ReferenceItem
                url="https://www.customs.gov.hk/tc/service-enforcement-information/trade-facilitation/dutiable-commodities/types-and-duty-rates/index.html"
                title="香港海关：应课税品类别及烟草税率"
                description="传统卷烟、雪茄、中国熟烟及其他制成烟草的应课税品类别和烟草税率。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.customs.gov.hk/tc/service-enforcement-information/trade-facilitation/ASP/ATCS/index.html"
                title="香港海关：另类吸烟产品转运监管计划"
                description="另类吸烟产品有限物流豁免安排，仅适用于特定转运场景，不构成本地销售或仓储准入。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="无烟烟草产品与毒药监管">
              <ReferenceItem
                url="https://www.elegislation.gov.hk/hk/cap132BW"
                title="香港法例：《无烟烟草产品（禁止）规例》（第132BW章）"
                description="专门规制无烟烟草产品，禁止输入、制造、售卖、为出售而管有、要约出售、为出售而展示、托付或交付无烟烟草产品。"
              />
            </ReferenceGroupCard>
          </div>
        }
        newsContent={
          <ReferenceGroupCard title="政策与执法动态">
            <ReferenceItem
              url="https://www.info.gov.hk/gia/general/202504/25/P2025042500383.htm"
              title="香港政府：《2025年控烟法例（修订）条例草案》刊宪"
              description="提出完税烟标签、提高未完税烟草罚则、禁烟区扩展、禁止公众地方管有指明另类吸烟产品、统一包装设计及加味传统吸烟产品管控等措施。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.news.gov.hk/chi/2026/03/20260312/20260312_214452_431.html"
              title="香港政府新闻网：医务卫生局说明统一包装设计与完税标签制度的不同功能"
              description="说明统一包装设计与完税烟标签制度的不同政策目的和实施时间表。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.customs.gov.hk/tc/customs-announcement/press-release/index_id_5002.html"
              title="香港海关：完税标签制度先导计划顺利完成"
              description="完税标签制度先导计划已完成，第一阶段计划于2026年第四季度推出。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.customs.gov.hk/sc/customs-announcement/press-release/index_id_5276.html"
              title="香港海关：在天水围进行跨部门反私烟宣传活动"
              description="海关持续开展反私烟执法和公众宣传。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.customs.gov.hk/sc/customs-announcement/press-release/index.html"
              title="香港海关：2026年5月持续就入境旅客进口或管有未完税香烟作出检控"
              description="海关持续就旅客携带和个人层面的私烟执法，并有判囚案例。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.customs.gov.hk/sc/customs-announcement/press-release/index.html?m=&p=9&y="
              title="香港海关：2026年5月侦破以远洋船走私怀疑另类吸烟产品案件"
              description="海关查获以远洋船走私另类吸烟产品案件。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.customs.gov.hk/sc/customs-announcement/press-release/index_id_4730.html"
              title="香港海关：查获含怀疑第1部毒药尼古丁的口含烟及怀疑另类吸烟产品"
              description="海关查获含怀疑第1部毒药尼古丁的口含烟，说明不含烟草但含尼古丁的口含类产品涉及毒药监管。"
            />
          </ReferenceGroupCard>
        }
      />
    </CountryPageTemplate>
  );
}
