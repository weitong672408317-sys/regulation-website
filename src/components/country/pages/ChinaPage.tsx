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
  DotList,
} from '../sections';

interface ChinaPageProps {
  country: CountryData;
}

export default function ChinaPage({ country }: ChinaPageProps) {
  return (
    <CountryPageTemplate>
      <SeasonSummarySection
        introText="2026年以来，中国内地烟草及新型烟草监管重点继续向产业秩序、出口合规和新型产品规则建设延伸。电子烟监管更关注产能、订单、供应链和出口真实性；加热卷烟、尼古丁袋等产品的标准建设正在推进，但中国市场尚未开放。"
        items={[
          {
            title: '1. 电子烟监管继续向生产端、供应链和出口端延伸',
            content: '电子烟监管不再只关注门店销售、口味限制和产品标准，而是进一步关注生产端产能、产能利用率、订单真实性、无证代工、出口回流和落后产能出清，并对产能利用率较低、存在违法违规或失信行为的企业实施更严格监管。',
          },
          {
            title: '2. 电子烟出口退税政策收紧',
            content: '自2026年4月1日起，部分含尼古丁、非经燃烧吸用产品取消增值税出口退税。出口型电子烟企业的税务成本、报价空间和订单利润将受到影响。',
          },
          {
            title: '3. 无烟气烟草制品被明确纳入监管',
            content: '国家烟草专卖局已明确无烟气烟草制品范围，包括尼古丁袋、尼古丁片、尼古丁贴、含烟、嚼烟、膏烟、溶烟、嗅烟等。相关产品按照卷烟或烟丝管理，严禁未经许可生产销售。',
          },
          {
            title: '4. 加热卷烟和尼古丁袋强制性国家标准拟立项',
            content: '2026年4月，《加热卷烟》《尼古丁袋》两项拟立项强制性国家标准项目公开征求意见，公示期至2026年5月7日。该动态体现出监管规则正在向HNB烟支 / 加热卷烟、尼古丁袋等新型产品延伸，但在正式准入规则、产品标准和销售渠道安排落地前，相关产品不能据此直接进入中国市场。',
          },
        ]}
      />

      <RegulatorySystemSection
        cards={[
          {
            title: '核心特征',
            content: (
              <>
                <p className="text-base leading-7 text-[#334155] mb-4">国家烟草专卖、强证照、强计划、强渠道和强执法</p>
                <BulletList items={[
                  '中国内地对烟草专卖品的生产、销售、运输、进出口实行专卖管理，并通过许可证、生产计划、准运证、专门销售渠道、进出口审批和执法检查等方式控制全链条经营活动。',
                  '电子烟已经纳入烟草监管体系，但电子烟与传统卷烟在许可证类型、产品技术审评、交易平台、批发零售渠道和产品标准方面适用不同规则。',
                  'HNB烟支 / 加热卷烟、尼古丁袋 / 尼古丁口含膜 / 口含烟等新型烟草制品，目前尚未形成面向中国境内消费者市场的开放销售路径。',
                ]} />
              </>
            ),
          },
          {
            title: '监管部门',
            content: (
              <ul className="list-disc pl-5 space-y-3 text-base leading-7 text-[#334155]">
                <li><span className="font-semibold text-[#263247]">国家烟草专卖局：</span>负责全国烟草专卖监督管理，统筹烟草专卖许可证、烟草专卖品生产经营、专卖执法、产业政策、电子烟监管及新型烟草制品监管规则。</li>
                <li><span className="font-semibold text-[#263247]">地方烟草专卖主管部门：</span>负责本行政区域内烟草专卖日常监管，办理相关许可，开展市场检查、零售端监管和违法行为查处。</li>
                <li><span className="font-semibold text-[#263247]">海关：</span>负责烟草专卖品、电子烟、新型烟草制品、烟草原料及相关辅材的进出口申报、商品归类、税费征收、监管证件核验、口岸查验和走私打击。</li>
                <li><span className="font-semibold text-[#263247]">税务、市场监管、公安等部门：</span>分别在税收征管、市场主体登记、产品质量、广告价格监管、消费者权益保护、无证无照经营查处和涉烟违法犯罪打击等环节参与监管或协同执法。</li>
              </ul>
            ),
          },
        ]}
      />

      <ProductAccessSection>
        <ProductModuleCard title="1. 烟草专卖品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>《中华人民共和国烟草专卖法》将烟草专卖品定义为卷烟、雪茄烟、烟丝、复烤烟叶、烟叶、卷烟纸、滤嘴棒、烟用丝束和烟草专用机械；其中，卷烟、雪茄烟、烟丝、复烤烟叶统称烟草制品。</li>
          </ul>
          <StatusCard
            status="amber"
            customLabel="可准入，但严格限制"
            title="卷烟、雪茄烟、烟丝、复烤烟叶、烟叶、烟草薄片、卷烟纸、滤嘴棒、烟用丝束"
            content={<>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <ul className="space-y-1 text-[#334155]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>烟草专卖品的生产、批发、零售、运输和进出口均实行专卖管理，核心监管工具包括烟草专卖许可证、计划管理、准运证、购销渠道和产品流向控制。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>卷烟、雪茄烟、烟丝、复烤烟叶等烟草制品的生产和批发主要由取得相应烟草专卖许可证的烟草制品生产企业、烟草专卖批发企业承担；社会主体取得烟草专卖零售许可证后，可以在许可地点和许可范围内从事零售。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>烟叶、烟草薄片、卷烟纸、滤嘴棒、烟用丝束等原料和配套材料，通常围绕持证烟草制品生产企业、持证批发企业、依法获准进出口主体及其合规供应链流转。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>烟草专卖品不得脱离许可范围、计划安排、准运要求和合法购销渠道流通；向无资质主体销售、无证运输、跨许可范围经营或流向不明，均属于重点监管风险。</span>
                </li>
              </ul>
            </>}
          />
        </ProductModuleCard>

        <ProductModuleCard title="2. 电子烟及电子烟用烟碱" label="产品范围">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>本类产品包括电子烟产品、雾化物和电子烟用烟碱。其中，电子烟产品包括电子烟、烟弹、烟具以及组合销售产品；雾化物和电子烟用烟碱属于电子烟监管体系内的上游原料或组成部分。</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="amber"
              customLabel="可准入，但严格限制"
              title="电子烟产品"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：电子烟、烟弹、烟具、电子烟与烟弹 / 烟具组合销售的产品</div>
                <div className="text-base text-[#334155] mb-3">产品定性：《电子烟管理办法》规定，电子烟包括烟弹、烟具以及烟弹与烟具组合销售的产品等。GB 41700-2022《电子烟》规定，烟弹是含有雾化物的电子烟组件，烟具是不含雾化物的电子烟组件。</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>生产、代加工、品牌持有、批发和零售主体均需取得对应烟草专卖许可，实际经营内容应与许可范围一致，不得超范围经营。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>境内上市销售的电子烟产品应通过技术审评，符合强制性国家标准、包装警语、追溯管理和质量安全要求。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>电子烟产品经营主体之间的购销交易，应按规定通过电子烟交易管理平台进行；进出口电子烟产品，应按规定通过电子烟交易管理平台备案。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>零售主体通过平台向电子烟批发企业或电子烟进口经营企业购进电子烟产品后，在持证门店向消费者销售。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>不得通过电子烟交易管理平台以外的信息网络销售电子烟产品。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>在中国内地只能销售烟草口味的电子烟，不得销售其他任何口味的调味电子烟。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>不得销售可自行添加雾化物的电子烟。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="amber"
              customLabel="可准入，但严格限制"
              title="雾化物 / 电子烟用烟碱"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：用于电子烟产品的雾化物、电子烟用烟碱</div>
                <div className="text-base text-[#334155] mb-3">产品定性：《电子烟管理办法》将雾化物定义为可被电子装置等全部或部分雾化为气溶胶的混合物及辅助物质。电子烟用烟碱即用于电子烟产品的尼古丁；医疗、药用或其他非电子烟用途的尼古丁产品，另按药品、化学品等相应监管要求判断。</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>雾化物生产企业、电子烟用烟碱生产企业应取得烟草专卖生产企业许可证，实际生产、销售内容应与许可范围一致，不得超范围经营。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>雾化物、电子烟用烟碱的经营主体之间交易，应按规定通过电子烟交易管理平台进行；进出口雾化物、电子烟用烟碱，应按规定通过电子烟交易管理平台备案。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>雾化物和电子烟用烟碱主要流向电子烟产品、雾化物等合规生产环节，不得作为普通原料自由销售或流通。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>不得通过电子烟交易管理平台以外的信息网络销售雾化物和电子烟用烟碱。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="red"
              title="不含烟碱的电子烟产品"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：不含烟碱的电子烟产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                    <span>不含烟碱的电子烟也属于电子烟监管范围。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                    <span>GB 41700-2022《电子烟》要求雾化物应含有烟碱，因此不含烟碱的电子烟产品不得进入中国市场销售。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="amber"
              customLabel="可准入，但严格限制"
              title="出口电子烟产品及相关产品"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：出口电子烟产品、雾化物、电子烟用烟碱及相关产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>电子烟用烟碱，即电子烟产品中的尼古丁，纳入电子烟监管体系；生产、销售、进口和出口均受电子烟相关许可、备案、交易和流向管理约束。医疗、药用或其他非电子烟用途的尼古丁产品，另按药品、化学品等相应监管要求判断。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>出口电子烟产品不当然适用境内销售口味规则，但仍受生产许可、出口备案、目的地合规证明、海关监管和税务政策影响。</span>
                  </li>
                </ul>
              </>}
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="3. 新型烟草 / 尼古丁制品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>新型烟草 / 尼古丁制品主要包括 HNB烟支 / 加热卷烟、尼古丁袋、尼古丁口含膜、口含烟等产品。</li>
            <li>相关产品目前尚未形成中国境内公开销售路径。2026年以来，相关标准和监管文件释放出规则建设信号，但正式准入政策、许可路径、产品标准和销售渠道安排尚未落地。</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="red"
              title="HNB烟支 / 加热卷烟"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：HNB烟支、加热卷烟及面向中国境内销售的相关产品</div>
                <div className="text-base text-[#334155] mb-3">产品定性：该类产品通常指通过专门加热装置加热烟草材料，产生气溶胶供消费者吸用的产品，监管上不能直接按已开放销售的传统卷烟或一般电子烟处理。</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                    <span>中国目前尚未开放 HNB烟支 / 加热卷烟在境内生产、销售或流通。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                    <span>2026年《加热卷烟》强制性国家标准拟立项，说明监管标准建设正在推进；在正式准入规则、许可路径和销售渠道安排落地前，相关产品不能进入中国市场销售。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="red"
              title="无烟气烟草制品 / 其他口含尼古丁制品"
              content={<>
                <div className="text-base text-[#334155] mb-2 text-justify">适用产品：尼古丁袋、尼古丁口含膜、口含烟、尼古丁片、尼古丁贴、含烟、嚼烟、膏烟、溶烟、嗅烟等无烟气烟草制品</div>
                <div className="text-base text-[#334155] mb-3 text-justify">产品定性：国家烟草专卖局2026年第1号公告将无烟气烟草制品定义为含有烟碱成分，通过口用、鼻用或外用等方式使用，且不产生烟气的烟草制品。</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155] text-justify">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                    <span>中国目前尚未开放无烟气烟草制品 / 尼古丁制品在境内生产、销售或流通。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                    <span>无烟气烟草制品按照卷烟或烟丝管理，并严格执行国家限制类产业政策。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                    <span>严禁未经许可生产销售无烟气烟草制品。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                    <span>2026年《尼古丁袋》强制性国家标准拟立项，说明监管标准建设正在推进；在正式准入规则落地前，相关产品不得在中国境内生产、销售或流通。</span>
                  </li>
                </ul>
              </>}
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="4. 烟草专用机械" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>《中华人民共和国烟草专卖法》将烟草专用机械列入烟草专卖品。</li>
            <li>《中华人民共和国烟草专卖法实施条例》规定，烟草专用机械是指烟草专用机械的整机，具体范围以国务院烟草专卖行政主管部门公布的烟草专用机械名录为准。</li>
          </ul>
          <StatusCard
            status="amber"
            customLabel="可准入，但严格限制"
            title="烟草专用机械"
            content={<>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <ul className="space-y-1 text-[#334155]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>烟草专用机械实行烟草专卖管理，生产、销售、运输、进口、购进、转让和使用均受许可、批准、准运和流向管理约束。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>生产烟草专用机械应取得烟草专卖生产企业许可证；购进、出售、转让烟草专用机械，通常需纳入主管部门批准和设备流向管理。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>烟草专用机械的实际客户通常为持证烟草制品生产企业或依法获准使用相关设备的主体，不得作为普通机械设备自由销售和流通。</span>
                </li>
              </ul>
            </>}
          />
        </ProductModuleCard>

        <ProductModuleCard title="5. 爆珠 / 香精胶囊" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>中国现行公开烟草专卖法规未对爆珠 / 香精胶囊设置专门定义。</li>
            <li>爆珠 / 香精胶囊通常是含有香精香料或其他内容物，可在使用过程中释放香气或风味的胶囊类辅材。</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="green"
              customLabel="可准入"
              title="普通爆珠 / 香精胶囊"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：不含尼古丁、烟草原料或烟草提取物的爆珠 / 香精胶囊</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>爆珠 / 香精胶囊本身不是烟草专卖品；不含尼古丁、烟草原料或烟草提取物的产品，可按普通香精胶囊或辅材处理。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>产品进入烟草制品、电子烟或新型烟草制品供应链时，应受下游产品监管路径、客户资质、用途控制和质量合规要求约束。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="amber"
              customLabel="可准入，但严格限制"
              title="含尼古丁 / 烟草成分或用于涉烟产品的爆珠、胶囊及类似辅材"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：含尼古丁、烟草原料、烟草提取物，或用于烟草制品、电子烟、新型烟草制品的爆珠、香精胶囊及类似辅材</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>含尼古丁、烟草原料或烟草提取物的产品，应纳入烟草专卖、电子烟或新型烟草制品监管框架判断。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>如实际作为电子烟、HNB烟支、无烟气烟草制品或其他受限产品的组成部分使用，应同步适用最终产品的准入状态、客户资质、生产许可和流向限制。</span>
                  </li>
                </ul>
              </>}
            />
          </div>
        </ProductModuleCard>
      </ProductAccessSection>

      <ComplianceSection country={country}>
        <p className="text-[#334155] text-base leading-7 mb-6">中国烟草及新型烟草业务的合规资质应按产品品类和经营活动分别判断。一般营业执照不足以开展涉烟业务，不同产品、不同环节需要不同类型和不同范围的烟草专卖许可证。</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">1</span>
              <h4 className="font-bold text-[#2E3F73] text-base">烟草制品及烟草专卖品</h4>
            </div>
            <p className="ml-9 text-[#334155] text-base leading-7 mb-3">涉及卷烟、雪茄烟、烟丝、复烤烟叶、烟叶、卷烟纸、滤嘴棒、烟用丝束、烟草专用机械等烟草专卖品的生产、批发、零售、运输和进出口，应按烟草专卖体系取得相应许可或纳入相应管理。</p>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6"><span className="font-semibold text-[#263247]">烟草专卖生产企业许可证：</span>适用于烟草制品、卷烟纸、滤嘴棒、烟用丝束、烟草专用机械等生产环节。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6"><span className="font-semibold text-[#263247]">烟草专卖批发企业许可证：</span>适用于烟草制品批发环节。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6"><span className="font-semibold text-[#263247]">烟草专卖零售许可证：</span>适用于卷烟等烟草制品零售环节。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6"><span className="font-semibold text-[#263247]">烟草专卖品准运相关要求：</span>适用于烟草专卖品运输、跨区域流转等环节。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6"><span className="font-semibold text-[#263247]">进出口相关审批和监管：</span>适用于烟草专卖品进口、出口及海关监管。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">2</span>
              <h4 className="font-bold text-[#2E3F73] text-base">电子烟</h4>
            </div>
            <p className="ml-9 text-[#334155] text-base leading-7 mb-3">电子烟与传统卷烟虽然同属烟草监管体系，但证照和监管路径是分开的。电子烟相关主体应根据实际角色取得对应烟草专卖许可证，不能用传统卷烟相关许可当然覆盖电子烟业务。</p>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">电子烟产品生产企业许可</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">电子烟品牌持有企业许可</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">雾化物生产企业许可</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">电子烟用烟碱生产企业许可</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">电子烟批发企业许可</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">电子烟零售许可</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">3</span>
              <h4 className="font-bold text-[#2E3F73] text-base">烟草专用机械</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">烟草专用机械属于烟草专卖品。涉及烟草专用机械整机生产、销售、运输、进出口的，应按烟草专卖品路径判断。</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">相关主体通常需结合生产、经营、运输、进出口等具体活动，确认是否需要取得烟草专卖生产企业许可证、烟草专卖品准运手续或进出口相关审批。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">4</span>
              <h4 className="font-bold text-[#2E3F73] text-base">电子烟交易管理平台</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">电子烟交易管理平台是电子烟供应链交易和监管平台。生产企业、品牌持有企业、批发企业、零售主体均应按规定通过平台完成相应交易或购进安排。</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">零售主体的核心要求是通过平台向当地电子烟批发企业购进产品，并在持证门店销售。</span>
              </div>
            </div>
          </div>
        </div>
      </ComplianceSection>

      <TaxSection>
        <TaxTableCard title="消费税">
          <p className="text-[#334155] text-base leading-7 mb-4">中国对卷烟、雪茄烟、烟丝、电子烟等产品征收消费税。卷烟税负结构较复杂；电子烟、雪茄烟、烟丝的主要税率较明确。</p>
          <div className="overflow-x-auto rounded-xl border border-[#D8DDED]">
            <table className="w-full text-base min-w-[600px] bg-white">
              <thead>
                <tr className="bg-[#E8EDF5]">
                  <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED]">产品</th>
                  <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED]">征税环节</th>
                  <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED]">税率口径</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/50">
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44]">卷烟</td>
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155]">生产 / 进口、批发环节</td>
                  <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155]">按卷烟类别和交易环节适用不同税率，并叠加从量税</td>
                </tr>
                <tr className="bg-[#F3F5FB]">
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44]">雪茄烟</td>
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155]">生产 / 进口环节</td>
                  <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155]">36%</td>
                </tr>
                <tr className="bg-white/50">
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44]">烟丝</td>
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155]">生产 / 进口环节</td>
                  <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155]">30%</td>
                </tr>
                <tr className="bg-[#F3F5FB]">
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44]">电子烟</td>
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155]">生产 / 进口环节</td>
                  <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155]">36%，按销售额或进口计税价格计征</td>
                </tr>
                <tr className="bg-white/50">
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44]">电子烟</td>
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155]">批发环节</td>
                  <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155]">11%，按销售额计征</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#334155] text-base leading-6 mt-3">电子烟代加工、品牌持有、进口和批发安排，会影响纳税主体和计税价格；代加工方式生产电子烟的，由持有商标的企业缴纳消费税。</p>
        </TaxTableCard>

        <TaxTableCard title="增值税">
          <p className="text-[#334155] text-base leading-7">烟草制品、电子烟、雾化物、电子烟用烟碱及相关辅材的境内销售，通常按照增值税一般规则处理。境内销售通常涉及销项税额、进项抵扣和发票管理；出口业务需区分退税、免税、征税或取消退税等不同情形。</p>
        </TaxTableCard>

        <TaxTableCard title="电子烟出口退税">
          <p className="text-[#334155] text-base leading-7">自2026年4月1日起，商品编码2404120000项下"不含烟草或再造烟草、含尼古丁的非经燃烧吸用的产品"取消增值税出口退税。本次调整针对增值税出口退税；对其中征收消费税的产品，出口消费税政策不作调整，继续适用消费税退（免）税政策。</p>
        </TaxTableCard>
      </TaxSection>

      <MarketOperationSection>
        <div className="grid md:grid-cols-2 gap-4">
          <RuleModuleCard number={1} title="销售渠道与平台交易">
            <DotList items={[
              '烟草专卖品、电子烟应在烟草专卖许可范围和规定渠道内经营',
              '电子烟经营主体之间的购销交易，应依法通过电子烟交易管理平台进行',
              '零售主体应通过电子烟交易管理平台向电子烟批发 / 进口经营企业购进产品，并在持证门店销售',
              '进出口电子烟应按规定通过电子烟交易管理平台备案',
              '不得通过电子烟交易管理平台以外的信息网络销售电子烟和电子烟用烟碱',
            ]} />
          </RuleModuleCard>

          <RuleModuleCard number={2} title="产品销售与品类限制">
            <DotList items={[
              '中国内地只能销售烟草口味电子烟，不得销售其他任何口味的调味电子烟',
              '不得销售可自行添加雾化物的电子烟；不含烟碱的电子烟产品不得进入市场销售',
              'HNB烟支、加热卷烟、尼古丁袋、尼古丁口含膜、口含烟等未开放品类，不得在中国境内生产、销售或流通',
            ]} />
          </RuleModuleCard>

          <RuleModuleCard number={3} title="广告与宣传限制">
            <DotList items={[
              '烟草广告受到严格限制，广播、电影、电视、报纸、期刊及法定公共场所不得发布或设置烟草广告',
              '不得通过广播、电视、电影节目以及报纸、期刊文章变相发布烟草广告',
              '不得通过大众传播媒介、公共场所、网络平台、展会、论坛、博览会等方式违规宣传或推介电子烟产品',
            ]} />
          </RuleModuleCard>

          <RuleModuleCard number={4} title="出口合规与回流管控">
            <DotList items={[
              '电子烟出口产品应符合目的地国家或地区的法律法规和标准要求，并按中国监管要求完成出口备案和相关证明',
              '不得通过虚假报关、错报品名、错报用途、拆分流转、虚报价格等方式规避中国监管要求',
              '严禁出口回流，严禁以出口名义将不符合中国境内销售要求的电子烟产品变相投入中国市场',
            ]} />
          </RuleModuleCard>
        </div>
      </MarketOperationSection>

      <TrendAndRedLinesSection
        trendContent={
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-bold text-[#243B63] text-base">1. 整体趋势：从规则补齐转向产业秩序治理</h4>
              <p className="text-[#334155] text-base leading-7">中国烟草及新型烟草监管正在从"产品纳管"转向"全链条治理"。卷烟等传统烟草制品长期纳入烟草专卖体系，电子烟已形成许可证、国家标准、交易平台和税收管理框架；HNB烟支 / 加热卷烟、尼古丁袋 / 口含烟等新型产品，也正在通过监管公告和强制性国家标准进入更清晰的规则体系。</p>
              <p className="text-[#334155] text-base leading-7">后续监管重点预计集中在三方面：维护烟草专卖秩序，防止新型产品绕开既有监管体系；治理产业端无序扩张、低效产能和低价竞争；强化税收、出口、线上销售、未成年人保护等高风险环节。</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#243B63] text-base">2. 新型烟草制品：标准先行，开放节奏谨慎</h4>
              <p className="text-[#334155] text-base leading-7">《加热卷烟》《尼古丁袋》强制性国家标准拟立项，说明监管部门正在为相关产品建立定义、技术要求和质量安全边界。</p>
              <p className="text-[#334155] text-base leading-7">但标准建设不等于短期商业化开放。HNB烟支 / 加热卷烟涉及与现有卷烟专卖体系的衔接；尼古丁袋 / 口含烟涉及尼古丁成瘾性、使用隐蔽性、线上传播和未成年人保护。后续更可能采取"先标准、后许可、再有限准入或试点"的谨慎路径。</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#243B63] text-base">3. 电子烟：税务和产能监管推动行业结构调整</h4>
              <p className="text-[#334155] text-base leading-7">电子烟出口退税取消、产能利用率监管、供需动态平衡、落后产能出清、出口回流治理等政策信号，指向同一趋势：电子烟行业将从"低成本制造、快速扩产、低价出口竞争"转向"产能受控、订单真实、合规出口、税务规范"。</p>
              <p className="text-[#334155] text-base leading-7">依赖退税摊薄成本、低价抢单、无证代工或拆分工序的模式将受到压缩。后续行业更可能出现合规产能集中、低效产线退出、订单向规范企业集中和出口利润重新分配。</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#243B63] text-base">4. 全链条监管：从单点审批转向持续合规</h4>
              <p className="text-[#334155] text-base leading-7">涉烟监管正在覆盖产品、主体、渠道、税务、物流、出口和线上销售等多个环节。未来风险不只来自产品本身，也来自订单来源、生产安排、物流路径、出口目的地、客户用途、平台交易和税务处理。</p>
              <p className="text-[#334155] text-base leading-7">即使主体持有许可证、产品通过审评或符合标准，如果下游流向、出口回流、网络销售或税务处理存在断点，仍可能形成重大合规风险。</p>
            </div>
          </div>
        }
        redLineGroups={[
          {
            title: '产品上市与经营资质',
            items: [
              '严禁未取得相应烟草专卖许可证，生产、批发、零售、进出口烟草专卖品、电子烟产品、雾化物或电子烟用烟碱。',
              '严禁销售未通过技术审评、不符合强制性国家标准、未按要求使用注册商标、来源不明或伪劣电子烟产品。',
              '严禁将 HNB烟支、加热卷烟、尼古丁袋、尼古丁口含膜、口含烟等未开放销售路径的新型产品投入中国内地市场。',
            ]
          },
          {
            title: '销售渠道与流通',
            items: [
              '严禁通过普通电商平台、社交媒体、自动售货机、未持证门店或其他非合规渠道销售电子烟产品、雾化物和电子烟用烟碱。',
              '严禁电子烟零售主体脱离电子烟交易管理平台、电子烟批发企业或电子烟进口经营企业购进电子烟产品。',
              '严禁无准运手续运输烟草专卖品，或通过设备、辅材、样品、体验活动、组合销售等方式变相推动未开放产品进入消费场景。',
            ]
          },
          {
            title: '包装、标签与宣传',
            items: [
              '严禁销售包装、标签、警语、追溯或产品标准不符合中国监管要求的烟草及电子烟产品。',
              '严禁在包装、标签、说明书、销售展示或宣传材料中使用"减害""健康""戒烟""治疗""不成瘾""更安全"等未经批准的功效性、治疗性或降低风险表述。',
              '严禁违法开展烟草、电子烟及相关产品广告、促销、赞助、免费样品、试用、递样、折扣、抽奖、会员积分或面向未成年人的营销活动。',
            ]
          },
          {
            title: '出口、产能与供应链',
            items: [
              '严禁违规新增电子烟生产线、扩大产能、规避固定资产投资审批，或将主要生产工序委托至无证企业代工。',
              '严禁以出口名义规避国内电子烟生产许可、质量安全、产能管理、监管检查或目的地合规要求。',
              '严禁合同、发票、包装标签、海关申报、目的地合规文件和实际流向不一致，严禁出口回流或以出口名义变相进入中国内地市场。',
            ]
          },
        ]}
      />

      <ReferencesSection
        tipText="以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。中国相关法律、行政法规、部门规章和主管机关口径可能经过后续修订或更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。"
        regulationContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="烟草专卖基础规则">
              <ReferenceItem
                title="《中华人民共和国烟草专卖法》"
                url="https://www.12371.cn/2020/06/15/ARTI1592151416318100.shtml"
                description="中国烟草专卖制度基础法律，确立烟草专卖品范围，并规定烟草专卖品生产、销售、进出口和烟草专卖许可证制度。"
              />
              <ReferenceItem
                title="《中华人民共和国烟草专卖法实施条例》"
                url="https://www.hengqin.gov.cn/lab/flfg/xzfg/content/post_3518273.html"
                description="细化烟草专卖许可证、烟草制品生产经营、运输、进出口和监督检查规则；第六十五条规定电子烟等新型烟草制品参照卷烟有关规定执行。"
                showSeparator
              />
              <ReferenceItem
                title="《国务院关于修改〈中华人民共和国烟草专卖法实施条例〉的决定》（国令第750号）"
                url="https://extranet.who.int/fctcapps/sites/default/files/2024-02/341_%E3%80%8A%E5%9B%BD%E5%8A%A1%E9%99%A2%E5%85%B3%E4%BA%8E%E4%BF%AE%E6%94%B9%E3%80%88%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%83%9F%E8%8D%89%E4%B8%93%E5%8D%96%E6%B3%95%E5%AE%9E%E6%96%BD%E6%9D%A1%E4%BE%8B%E3%80%89%E7%9A%84%E5%86%B3%E5%AE%9A%E3%80%8B%EF%BC%88%E5%9B%BD%E4%BB%A4%E7%AC%AC750%E5%8F%B7%EF%BC%89.pdf"
                description="正式将电子烟等新型烟草制品纳入参照卷烟有关规定执行的监管框架。"
                showSeparator
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="电子烟监管规则">
              <ReferenceItem
                title="《电子烟管理办法》"
                url="https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=93147"
                description="电子烟监管核心规章，覆盖电子烟定义、生产与质量管理、销售管理、运输管理、进出口贸易、对外经济技术合作和监督检查等要求。"
              />
              <ReferenceItem
                title="GB 41700-2022《电子烟》强制性国家标准"
                url="https://std.samr.gov.cn/gb/search/gbDetailed?id=DC71B640316A1BD8E05397BE0A0AC89A"
                description="电子烟产品技术合规核心标准，覆盖电子烟、烟具、烟弹、雾化物、释放物、标志和说明书等要求。"
                showSeparator
              />
              <ReferenceItem
                title="国家烟草专卖局就《电子烟管理办法》和《电子烟》国家标准答问"
                url="https://www.scio.gov.cn/xwfb/bwxwfb/gbwfbh/yczmj/202209/t20220916_326308.html"
                description="说明电子烟监管制度、强制性国家标准、技术审评、运输监管和产品质量要求。"
                showSeparator
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="产业政策与出口监管">
              <ReferenceItem
                title="《国务院办公厅关于全链条打击涉烟违法活动的意见》（国办发〔2025〕44号）"
                url="https://www.gov.cn/zhengce/content/202512/content_7052155.htm"
                description="2025年底发布的涉烟违法治理政策文件，强调从生产、运输、寄递、销售、出口回流、网络销售等环节开展全链条治理。"
              />
              <ReferenceItem
                title="国家烟草专卖局关于落实电子烟产业政策进一步推动供需动态平衡有关事项的通知"
                url="https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=104986"
                description="涉及电子烟产业政策、固定资产投资、核定产能、年度生产规模、委托加工、产能整合重组、出口目的地合规和出口回流治理。"
                showSeparator
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="新型烟草制品规则建设">
              <ReferenceItem
                title="国家烟草专卖局公告2026年第1号"
                url="https://www.hunan.gov.cn/zqt/zcsd/202601/t20260112_33890625.html"
                description="明确无烟气烟草制品范围，包括尼古丁袋、尼古丁片、尼古丁贴、含烟、嚼烟、膏烟、溶烟、嗅烟等；规定无烟气烟草制品按照卷烟或烟丝管理，严格执行国家限制类产业政策，严禁未经许可生产销售。"
              />
              <ReferenceItem
                title="《加热卷烟》强制性国家标准拟立项项目"
                url="https://cn.2firsts.com/news/du-jia--zhong-guo-qi-dong-jia-re-juan-yan-yu-ni-gu-ding-dai-qiang-zhi-xing-guo-jia-biao-zhun-zhi-ding-cheng-xu"
                description="由国家烟草局提出，属于制定中的强制性国家标准项目，体现加热卷烟技术监管规则建设进展。"
                showSeparator
              />
              <ReferenceItem
                title="《尼古丁袋》强制性国家标准拟立项项目"
                url="https://cn.2firsts.com/news/du-jia--zhong-guo-qi-dong-jia-re-juan-yan-yu-ni-gu-ding-dai-qiang-zhi-xing-guo-jia-biao-zhun-zhi-ding-cheng-xu"
                description="由国家烟草局提出，属于制定中的强制性国家标准项目，体现尼古丁袋技术监管规则建设进展。"
                showSeparator
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="执法与监管资料">
              <ReferenceItem
                title="烟草专卖涉企行政检查事项及标准（电子烟等新型烟草制品）"
                url="https://www.xinjiang.gov.cn/xinjiang/tzgg/202509/f5f832e3b68f41a38f3141118741b35b/files/%E9%99%84%E4%BB%B62%EF%BC%9A%E7%83%9F%E8%8D%89%E4%B8%93%E5%8D%96%E6%B6%89%E4%BC%81%E8%A1%8C%E6%94%BF%E6%A3%80%E6%9F%A5%E4%BA%8B%E9%A1%B9%E5%8F%8A%E6%A0%87%E5%87%86%EF%BC%88%E7%94%B5%E5%AD%90%E7%83%9F%E7%AD%89%E6%96%B0%E5%9E%8B%E7%83%9F%E8%8D%89%E5%88%B6%E5%93%81%EF%BC%89-20250926115204150.docx"
                description="列明电子烟等新型烟草制品相关涉企行政检查事项，可用于理解零售端、产品标准、注册商标、来源和销售行为监管重点。"
              />
            </ReferenceGroupCard>
          </div>
        }
        newsContent={
          <ReferenceGroupCard title="政策与监管动态">
            <ReferenceItem
              title="电子烟产业政策进一步强化供需动态平衡"
              url="https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=104986"
              description="相关政策文件体现电子烟监管继续从产品准入和零售监管延伸到产能、投资、委托加工、出口目的地合规和产业秩序管理。"
            />
            <ReferenceItem
              title="中国将自2026年4月1日起取消电子烟产品增值税出口退税"
              url="https://cn.2firsts.com/news/zhong-guo-jiang-zi-2026nian-4yue-1ri-qi-qu-xiao-dian-zi-yan-chan-pin-zeng-zhi-shui-chu-kou-tui-shui"
              description={'公开报道显示，商品编码2404120000"不含烟草或再造烟草、含尼古丁的非经燃烧吸用的产品"被纳入取消增值税出口退税范围。'}
              showSeparator
            />
            <ReferenceItem
              title="中国启动《加热卷烟》《尼古丁袋》强制性国家标准制定程序"
              url="https://cn.2firsts.com/news/du-jia--zhong-guo-qi-dong-jia-re-juan-yan-yu-ni-gu-ding-dai-qiang-zhi-xing-guo-jia-biao-zhun-zhi-ding-cheng-xu"
              description="公开信息显示，《加热卷烟》《尼古丁袋》两项强制性国家标准进入拟立项公开征求意见阶段，后续规则建设值得持续关注。"
              showSeparator
            />
          </ReferenceGroupCard>
        }
      />
    </CountryPageTemplate>
  );
}
