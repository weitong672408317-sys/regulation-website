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

interface ChinaPageProps {
  country: CountryData;
}

export default function ChinaPage({ country }: ChinaPageProps) {
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
                国家烟草专卖、强证照、强计划、强渠道和强执法。中国内地对烟草专卖品的生产、销售、运输、进出口实行专卖管理，并通过许可证、生产计划、准运、销售渠道、进出口审批和执法检查等方式控制全链条经营活动。电子烟已经被纳入烟草监管体系，但电子烟与传统卷烟的证照、产品审评、交易平台和渠道规则并不相同。HNB烟支 / 加热卷烟、尼古丁袋 / 尼古丁口含膜 / 口含烟等新型烟草制品目前尚未形成面向中国境内消费者市场的开放销售路径。
              </p>
            ),
          },
          {
            title: '主要法规 / 政策',
            content: (
              <BulletList items={[
                '《中华人民共和国烟草专卖法》：中国烟草专卖制度的基础法律，确立烟草专卖品生产、销售、运输、进出口和监督管理的基本框架。',
                '《中华人民共和国烟草专卖法实施条例》：细化烟草专卖许可证、烟草专卖品生产经营、运输、进出口、监督检查和法律责任等规则。',
                '《电子烟管理办法》：电子烟监管的核心部门规章，规范电子烟生产、销售、运输、进出口、交易管理平台、产品要求、未成年人保护和监督管理。',
                '《电子烟固定资产投资管理细则》：规范电子烟相关固定资产投资，重点控制电子烟产能无序扩张、重复建设和不符合产业政策的投资行为。',
                '《电子烟产品技术审评实施细则》：规范电子烟产品技术审评申请、受理、审查和产品变更管理。境内上市销售的电子烟产品应通过技术审评。',
                '《电子烟交易管理细则》：规范电子烟产品、雾化物、电子烟用烟碱、电子烟用烟碱原料等交易活动，明确交易主体、交易平台、合同管理、总量管理和交易秩序要求。',
                '《国务院办公厅关于全链条打击涉烟违法活动的意见》：要求全链条打击涉烟违法活动，覆盖烟草制假售假、走私、互联网违法销售、电子烟违法生产经营、电子烟出口回流，以及未经许可生产销售口含烟、尼古丁袋、烟膏等涉烟产品。',
                '国家烟草专卖局2026年第1号公告：将尼古丁袋、尼古丁片、尼古丁贴、含烟、嚼烟、膏烟、溶烟、嗅烟等纳入无烟气烟草制品监管口径，相关产品按照卷烟或烟丝管理。'
              ]} />
            ),
          },
          {
            title: '监管部门',
            content: (
              <ul className="list-disc pl-5 space-y-2 text-base leading-7 text-[#334155]">
                <li><span className="font-semibold text-[#263247]">国家烟草专卖局：</span>负责全国烟草专卖和电子烟监督管理，制定电子烟产业政策，管理许可证、交易管理平台、产品审评、产能秩序和市场执法。</li>
                <li><span className="font-semibold text-[#263247]">地方烟草专卖主管部门：</span>负责地方烟草专卖许可、电子烟零售监管、市场检查、违法行为查处和日常执法。</li>
                <li><span className="font-semibold text-[#263247]">财政部、税务总局：</span>负责烟草和电子烟相关消费税、增值税、出口退税等税收政策。</li>
                <li><span className="font-semibold text-[#263247]">海关：</span>负责烟草及电子烟相关产品进出口申报、商品归类、口岸监管、查验和走私打击。</li>
                <li><span className="font-semibold text-[#263247]">公安、市场监管、网信、邮政等部门：</span>在打击涉烟违法犯罪、网络销售、假冒伪劣、寄递运输等场景中参与协同执法。</li>
              </ul>
            ),
          },
        ]}
      />

      <ProductAccessSection>
        <ProductModuleCard title="传统卷烟 / 烟草专卖品" label="产品定性">
          <StatusCard
            status="green"
            title="传统卷烟、雪茄烟、烟丝及其他烟草专卖品"
            content="传统卷烟本身属于可准入产品，但只能在烟草专卖体系内依法生产、批发、零售、运输、进口或出口。相关主体需要取得对应烟草专卖许可证，并遵守计划管理、准运管理、包装警示、税务监管、销售对象限制、广告限制和渠道管理要求。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="电子烟" label="产品定性">
          <StatusCard
            status="amber"
            customLabel="部分限制 / 需确认"
            title="电子烟"
            content="电子烟不是完全禁止品类，但只能在取得对应烟草专卖许可证、符合强制性国家标准、通过产品审评，并符合渠道、口味、包装、警语和未成年人保护要求的前提下经营。境内销售电子烟限于烟草口味；禁止销售非烟草口味调味电子烟；禁止销售可自行添加雾化物的电子烟；不含烟碱的电子烟产品不得进入市场销售。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="HNB烟支 / 加热卷烟" label="产品定性">
          <StatusCard
            status="red"
            title="HNB烟支 / 加热卷烟"
            content="中国目前禁止销售HNB烟支 / 加热卷烟。2026年《加热卷烟》强制性国家标准拟立项，仅说明监管标准建设正在推进，不等于市场已经开放。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="尼古丁袋 / 口含类产品" label="产品定性">
          <StatusCard
            status="red"
            title="尼古丁袋 / 尼古丁口含膜 / 口含烟"
            content="中国目前禁止生产、销售或流通尼古丁袋、尼古丁口含膜、口含烟等无烟气烟草制品。2026年《尼古丁袋》强制性国家标准拟立项，体现未来可能存在监管框架完善和政策开放趋势，但在正式准入规则落地前，仍应按禁止处理。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="烟草原料及普通辅材" label="产品定性">
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="green"
              title="烟草薄片、烟叶"
              content="烟叶属于烟草专卖品，依法纳入烟草专卖体系管理。烟草薄片如以烟草原料、半成品或烟草制品组成部分形式存在，应结合成分、用途、流通环节和下游产品判断是否触发烟草专卖许可、准运、生产计划、税务或进出口监管要求。"
            />
            <StatusCard
              status="green"
              title="爆珠 / 香精胶囊"
              content="不含尼古丁、烟草原料或烟草提取物的爆珠 / 香精胶囊，原则上不属于烟草专卖品，可按普通香精胶囊或辅材处理。若产品含有尼古丁、烟草原料或烟草提取物，则需结合具体成分和用途另行判断。"
            />
            <StatusCard
              status="green"
              title="滤嘴棒"
              content="滤嘴棒属于烟草专卖品。涉及生产、销售、运输、进出口的，应按烟草专卖品路径判断许可、准运和流向管理要求。"
            />
            <StatusCard
              status="amber"
              customLabel="部分限制 / 需确认"
              title="烟草专用机械"
              content="烟草专用机械属于烟草专卖品。涉及整机生产、销售、运输、进出口的，应按烟草专卖品路径判断是否需要取得烟草专卖生产企业许可证、准运手续或进出口相关审批。"
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
        tipText="以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。中国相关法律、行政法规、部门规章和主管机关口径可能经过后续修订或更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。"
        regulationContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="烟草专卖法律与行政法规">
              <ReferenceItem
                url="https://flk.npc.gov.cn/flk/index.html"
                title="《中华人民共和国烟草专卖法》"
                description="中国烟草专卖制度的基础法律，确立烟草专卖品生产、销售、运输、进出口和监督管理的基本框架。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.tobacco.gov.cn/gjyc/zcfg/gf/202203/t20220309_239126.html"
                title="《中华人民共和国烟草专卖法实施条例》"
                description="细化烟草专卖许可证、烟草专卖品生产经营、运输、进出口、监督检查和法律责任等规则。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="电子烟监管规则">
              <ReferenceItem
                url="https://www.tobacco.gov.cn/gjyc/zcfg/gf/202203/t20220311_239164.html"
                title="《电子烟管理办法》"
                description="电子烟监管的核心部门规章，规范电子烟生产、销售、运输、进出口、交易管理平台、产品要求和未成年人保护。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.sac.gov.cn/standard/single/standard_detail?standard_id=66343"
                title="GB 41700-2022《电子烟》"
                description="电子烟强制性国家标准，规定电子烟产品技术要求、安全要求和检测方法。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.tobacco.gov.cn/gjyc/zcfg/gf/202206/t20220617_240253.html"
                title="《电子烟警语标识规定》"
                description="规范电子烟产品包装警语标识要求。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="新型烟草制品与产业政策">
              <ReferenceItem
                url="https://www.tobacco.gov.cn/gjyc/tzgg/202601/t20260115_260567.html"
                title="《国家烟草专卖局公告2026年第1号》"
                description="将尼古丁袋、尼古丁片、尼古丁贴、含烟、嚼烟、膏烟、溶烟、嗅烟等纳入无烟气烟草制品监管口径。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.tobacco.gov.cn/gjyc/tzgg/202603/t20260320_261089.html"
                title="《国家烟草专卖局关于落实电子烟产业政策进一步推动供需动态平衡的通知》"
                description="强调落实电子烟限制类产业政策，推动电子烟产业供需动态平衡。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="税务与广告规则">
              <ReferenceItem
                url="https://www.chinatax.gov.cn/chinatax/n358/c5173161/content.html"
                title="《财政部 税务总局关于调整光伏等产品出口退税政策的公告》（财政部 税务总局公告2026年第2号）"
                description="自2026年4月1日起，部分产品取消增值税出口退税，其中包括含尼古丁的非经燃烧吸用产品。"
              />
              <ReferenceItem
                showSeparator
                url="https://flk.npc.gov.cn/flk/index.html"
                title="《中华人民共和国广告法》"
                description="禁止利用大众传播媒介发布烟草广告。"
              />
              <ReferenceItem
                showSeparator
                url="https://flk.npc.gov.cn/flk/index.html"
                title="《中华人民共和国未成年人保护法》"
                description="禁止向未成年人销售烟草和电子烟产品。"
              />
            </ReferenceGroupCard>
          </div>
        }
        newsContent={
          <ReferenceGroupCard title="政策与执法动态">
            <ReferenceItem
              url="https://politics.people.com.cn/n1/2025/1218/c1001-40627463.html"
              title="2025年12月：国务院办公厅印发《关于全链条打击涉烟违法活动的意见》"
              description="要求全链条打击涉烟违法活动，覆盖制假售假、走私、互联网违法销售、电子烟违法生产经营和出口回流。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.chinatax.gov.cn/chinatax/n358/c5173161/content.html"
              title="2026年1月：财政部、税务总局发布出口退税调整公告"
              description="自2026年4月1日起，含尼古丁的非经燃烧吸用产品取消增值税出口退税。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.tobacco.gov.cn/gjyc/tzgg/202601/t20260115_260567.html"
              title="2026年1月：国家烟草专卖局发布2026年第1号公告"
              description="明确无烟气烟草制品范围，将尼古丁袋等纳入监管口径。"
            />
            <ReferenceItem
              showSeparator
              url="https://cn.2firsts.com/news/du-jia-zhong-guo-qi-dong-jia-re-juan-yan-yu-ni-gu-ding-dai-qiang-zhi-xing-guo-jia-biao-zhun-zhi-ding-cheng-xu"
              title="2026年4月：《加热卷烟》和《尼古丁袋》两项拟立项强制性国家标准公开征求意见"
              description="说明监管部门正在为HNB烟支和尼古丁袋建立技术规则基础，但标准推进不等于中国市场已经开放。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.eccc-china.com/category/develop/supervise/"
              title="2026年4月：电子烟监管政策继续围绕供需动态平衡展开"
              description="监管口径强调落实电子烟限制类产业政策，推动电子烟产业供需动态平衡。"
            />
          </ReferenceGroupCard>
        }
      />
    </CountryPageTemplate>
  );
}
