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
  DotList
} from '../sections';

interface IndonesiaPageProps {
  country: CountryData;
}

export default function IndonesiaPage({ country }: IndonesiaPageProps) {
  return (
    <CountryPageTemplate>
      {/* 一、本季监管动态 */}
      <SeasonSummarySection
        introText="2026年以来，印尼烟草及电子烟监管的可确认新动态主要集中在电子烟监管新规、加强流通监管和烟草消费税政策三个方面。传统烟草、电子烟和 HPTL 仍有合法经营空间，但监管重点继续向产品标准、包装标签、广告限制、违法烟液和非法烟草市场治理集中。"
        items={[
          {
            title: '电子烟新规实施',
            content: '2026年4月，印尼官方说明，PP 28/2024 项下电子烟监管规则将于2026年7月实施。新规重点涉及最低购买年龄、广告限制、产品内容标准、包装健康警示和无烟区要求。'
          },
          {
            title: '电子烟流通监管',
            content: '2026年5月，BPOM 表示将加强全国电子烟流通监管，并与 BNN 协作处理含毒品或违禁成分电子烟液问题。电子烟监管重点正在从一般销售管理，进一步延伸到产品成分、流通渠道和违法烟液执法。'
          },
          {
            title: '烟草消费税政策',
            content: '2025年9月，印尼财政部长公开表示，2026年烟草产品消费税税率将维持不变，政策重点转向治理非法烟草市场。'
          }
        ]}
      />

      {/* 二、监管体系 */}
      <RegulatorySystemSection
        cards={[
          {
            title: '核心特征',
            content: (
              <>
                <p className="text-base leading-7 text-[#334155] mb-4">开放型烟草市场，以税收秩序和合法流通为监管主线</p>
                <BulletList items={[
                  '印尼属于烟草及电子烟产品开放度较高的市场。传统烟草产品、电子烟、HNB原则上均存在合法准入和经营空间。',
                  '印尼监管的基本逻辑，是在允许合法市场存在的基础上，通过税收管理和公共健康规则维持市场秩序。',
                  '尼古丁袋、尼古丁口含膜等无烟口含产品在印尼尚未形成稳定、清晰的专项规则，是否可以进入市场，需要结合产品成分、使用方式和主管机关口径进一步确认。',
                ]} />
              </>
            ),
          },
          {
            title: '监管部门',
            content: (
              <ul className="list-disc pl-5 space-y-3 text-base leading-7 text-[#334155]">
                <li><span className="font-semibold text-[#263247]">印尼卫生部：</span>烟草制品及相关成瘾性物质公共健康监管的上位主管机关，负责统筹公共健康监管方向和基本规则。</li>
                <li><span className="font-semibold text-[#263247]">印尼财政部：</span>消费税政策制定机关，负责烟草及相关应税消费品的税率、最低零售价格和税票制度安排。</li>
                <li><span className="font-semibold text-[#263247]">印尼海关及消费税总局：</span>财政部下属执行机关，负责 NPPBKC 发放、消费税征收、税票管理、进口监管和非法卷烟查处。NPPBKC 是应税消费品经营者的准入编号 / 许可，决定主体能否经营烟草制品及其他应税消费品。</li>
                <li><span className="font-semibold text-[#263247]">印尼食品药品监督管理局（BPOM）：</span>主要参与电子烟上市后的流通安全监管，重点关注电子烟液成分、违法添加和来源不明产品。</li>
                <li><span className="font-semibold text-[#263247]">印尼贸易部：</span>负责烟草、烟叶、烟草制品及相关产品的进口管理和贸易流通规则。</li>
              </ul>
            ),
          },
        ]}
      />

      {/* 三、产品准入与监管口径 */}
      <ProductAccessSection>
        {/* 1. 成瘾性物质与烟草制品 */}
        <ProductModuleCard title="1. 成瘾性物质与烟草制品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
            <li>根据《健康法》实施条例，成瘾性物质包括含烟草或不含烟草的产品，无论是香烟或其他具有成瘾性质的形式，只要其使用可能对个人和 / 或社会造成损害，且可以是固体、液体或气体形态。</li>
            <li>烟草制品是指全部或部分以烟草叶为原料制成的任何产品，经加工后可通过燃烧、加热、雾化、吸食、吸入、咀嚼或其他消费方式使用。法规明确列举的烟草制品包括香烟、雪茄、烟叶卷烟、切丝烟草、固态和液态烟草以及其他烟草加工产品。</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <StatusCard
              status="amber"
              title="传统燃烧烟草制品"
              customLabel="可合规准入，但成品进口严格受限"
              content={<>
                <div className="text-sm text-[#64748B] mb-2">适用产品：香烟、雪茄、烟叶卷烟、切丝烟草及其他燃烧型烟草制品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>传统燃烧烟草制品在印尼具有成熟合法监管路径，可以依法生产、流通和销售。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>生产及本土流通属于消费税应税消费品管理范围，需要取得 NPPBKC、缴纳消费税和烟草税，并贴附消费税税票。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>成品卷烟进口并非绝对禁止，但 PI（进口批准书）实务中较难取得，通常仅特定主体获批，数量受到严格限制。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>未贴税票、低报错报、走私或通过不合规渠道销售，是核心执法重点。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="green"
              title="加热烟草制品"
              customLabel="可合规准入"
              content={<>
                <div className="text-sm text-[#64748B] mb-2">适用产品：HNB烟支、加热烟草棒等含烟草材料的加热烟草耗材</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>HNB烟支 / 加热烟草棒属于含烟草材料的烟草产品，进入印尼本土市场时应按烟草制品、其他烟草加工产品或消费税应税消费品管理。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>生产及本土流通需要取得 NPPBKC，并适用消费税、烟草税和消费税税票要求。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>包装、健康警示、销售对象、销售地点和广告促销应遵守烟草制品及成瘾性物质监管要求。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>HNB加热设备本身不属于 HNB烟支；单独进口或销售时，不因设备本身取得 NPPBKC，也不贴附 HNB烟支对应的消费税税票。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>HNB加热设备与 HNB烟支、烟弹、烟油或其他含烟草 / 尼古丁耗材组合进口或组合销售的，应将设备部分和耗材部分分别申报，并分别判断消费税、税票、标签和流通要求。</span>
                  </li>
                </ul>
              </>}
            />
          </div>
        </ProductModuleCard>

        {/* 2. 电子烟 */}
        <ProductModuleCard title="2. 电子烟" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
            <li>电子烟是指以液态、固态或其他形式存在的烟草制品，由烟草叶通过提取或其他方式加工而成，根据技术发展和消费者偏好制成，供最终消费者使用，并以零售包装形式销售，通过电子加热装置加热后吸入使用。</li>
            <li>含有尼古丁和 / 或其他物质的电子烟及其加工产品，包括具有相同或类似类型与性质的合成制品，只要通过电子加热装置加热后吸入使用，也纳入电子烟管理范围。</li>
          </ul>
          <StatusCard
            status="amber"
            title="电子烟"
            customLabel="可合规准入，但产品内容和流通监管趋严"
            content={<>
              <div className="text-sm text-[#64748B] mb-2">适用产品：电子烟设备、一次性电子烟、烟油、电子烟补充液、含液体烟弹、开放式电子烟、封闭式电子烟、固体电子烟、设备与液体组合产品</div>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <ul className="space-y-1 text-[#334155]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>电子烟及相关液体在印尼有合法经营路径，进入本土市场时应关注消费税、税票、包装标签、健康警示和销售限制。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>尼古丁和焦油的含量有严格的限制。生产商和进口商必须对每种产品进行检测，为确保测量结果准确，必须使用经批准的检测技术。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>生产商和进口商必须向 BPOM 提交检测结果、登记详细的成分和添加剂清单。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                  <span>来源不明、成分不明、违法添加、含毒品或含违禁成分的烟液，是 BPOM 和执法机关重点关注的风险。</span>
                </li>
              </ul>
            </>}
          />
        </ProductModuleCard>

        {/* 3. 口含、鼻吸及其他非燃烧/非加热型尼古丁产品 */}
        <ProductModuleCard title="3. 口含、鼻吸及其他非燃烧 / 非加热型尼古丁产品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
            <li>该类产品不通过燃烧使用，也不通过电子加热装置吸入使用。印尼现行《健康法》及《健康法》实施条例主要针对"烟草制品"和"电子烟"设置监管规则，尚未对尼古丁袋、尼古丁口含膜等新型口腔尼古丁产品建立清晰、专门的定义和准入路径。</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <StatusCard
              status="amber"
              title="含烟草材料的口含、鼻吸、咀嚼类产品"
              customLabel="可合规准入，但需按烟草属性管理"
              content={<>
                <div className="text-sm text-[#64748B] mb-2">适用产品：口含烟、鼻烟、嚼烟、含烟草粉末产品，以及其他含烟草材料、通过口腔或鼻腔使用的非燃烧型产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>含烟草材料的口含、鼻吸、咀嚼类产品，应按烟草制品或其他加工烟草制品方向判断。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>进入印尼本土市场生产、流通或销售时，应关注 NPPBKC、消费税、税票、包装标签和销售限制要求。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>如产品同时添加尼古丁、采用袋状 / 片状 / 膜状等新型形态，或以尼古丁摄入为主要卖点，应转入"新型口含尼古丁制品"口径判断。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="amber"
              title="新型口含尼古丁制品"
              customLabel="部分限制 / 需确认"
              content={<>
                <div className="text-sm text-[#64748B] mb-2">适用产品：尼古丁袋、尼古丁口含膜、含尼古丁片状 / 袋状 / 膜状 / 粉末状产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>尼古丁袋 / 尼古丁口含膜不通过电子加热装置吸入使用，不属于电子烟。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>使用烟草来源尼古丁、烟草提取物或其他烟草成分的，稳妥口径下应按其他加工烟草制品或 BKC 路径处理。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>使用合成尼古丁且全链条不含烟草叶或烟草提取物的，是否属于烟草制品仍存在争议；现行公开规则下缺乏稳定、明确的专项准入路径。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>产品名称、标签、说明和宣传材料不得宣称戒烟、治疗、尼古丁替代或其他健康功效；出现该类表达的，可能转入 BPOM 药品监管路径。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>在印尼生产、进口或销售该类产品前，应先确认产品定性、税务归类、上市路径和销售限制。</span>
                  </li>
                </ul>
              </>}
            />
          </div>
        </ProductModuleCard>

        {/* 4. 烟草原料及普通辅材 */}
        <ProductModuleCard title="4. 烟草原料及普通辅材" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
            <li>烟草薄片、烟叶、爆珠、香精胶囊、滤嘴棒通常属于原料、半成品、组件或普通辅材。该类产品的准入判断重点在于产品形态、成分、申报品名、进口用途、下游用途，以及是否含烟草提取物或尼古丁。</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <StatusCard
              status="green"
              title="烟草薄片"
              customLabel="可合规准入，通常限于工厂自用"
              content={<>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>烟草薄片应先区分工业原材料、半成品和可供消费者直接使用的成品形态。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>作为工业原材料使用时，通常不需要 NPPBKC；进口通常需要 PI（进口批准书），且一般限于工厂自用。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>如烟草薄片被加工或包装成消费者可直接使用的产品，应重新判断是否转入烟草制品或其他应税消费品路径。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="amber"
              title="烟叶"
              customLabel="可合规准入，但进口受政府管理"
              content={<>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>烟叶应先区分原料用途、加工用途和消费者直接使用用途。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>烟叶作为原材料使用时，不因其本身当然触发 NPPBKC；作为消费者可直接使用或销售的产品时，可能转入烟草制品或其他应税消费品路径。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>烟叶进口需要 PI（进口批准书），并受国内烟叶供需、特定品种需求和政府进口管理影响。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="green"
              title="爆珠 / 香精胶囊"
              customLabel="可合规准入，但需按成分确认"
              content={<>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>不含烟草提取物或尼古丁、仅作为普通辅材使用的，通常不需要 NPPBKC。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>含烟草提取物或尼古丁的，应判断是否转入烟草制品、其他烟草加工产品或应税消费品路径。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>如作为电子烟液、烟弹、HNB烟支、尼古丁产品或消费者直接使用产品的一部分销售，应同步适用对应产品路径。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="green"
              title="滤嘴棒"
              customLabel="可合规准入"
              content={<>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>滤嘴棒作为烟草配件或原辅料通常可准入。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>公开资料未见滤嘴棒本身需要 NPPBKC、PI（进口批准书）、BPOM 产品注册或 Halal 认证。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>如滤嘴棒含烟草提取物、尼古丁、药物成分、香味释放功能或其他特殊功能，应结合具体成分和用途重新确认监管要求。</span>
                  </li>
                </ul>
              </>}
            />
          </div>
        </ProductModuleCard>
      </ProductAccessSection>

      {/* 四、合规资质 */}
      <ComplianceSection
        country={country}
        overview="印尼烟草及尼古丁相关业务的资质判断，应先看经营主体是否已取得基础经营身份，再看产品是否属于应税消费品、限制类进口商品、电子烟或特殊区域经营项目。不同产品在 NPPBKC、PI 进口批准、BPOM 路径和 Halal 认证上的要求并不相同。"
      />

      {/* 五、税收政策 */}
      <TaxSection introText="印尼烟草及尼古丁相关产品的税务判断，核心看两点：产品是否属于 BKC（应税消费品），以及产品是否进入印尼本土市场流通。">
        <TaxTableCard title="1. 消费税 Cukai">
          <ul className="space-y-2 text-[#334155] text-base leading-7">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span><span className="font-semibold text-[#263247]">适用对象：</span>仅适用于被认定为 BKC 的货物，例如传统卷烟、HNB烟支、电子烟液、部分含烟草或尼古丁属性的成品。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span><span className="font-semibold text-[#263247]">核心逻辑：</span>BKC 产品在印尼国内流通链条中，应按规定完成消费税申报、缴纳和监管要求。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span><span className="font-semibold text-[#263247]">税额计算：</span>印尼消费税按产品类别以固定税额征收，传统烟草制品通常按每支或每克计征，电子烟液等液体产品通常按每毫升计征。具体税额受产品类别、生产者分组和最低零售指导价 HJE 档位影响。</span>
            </li>
          </ul>
        </TaxTableCard>

        <TaxTableCard title="2. 税票 Pita Cukai">
          <ul className="space-y-2 text-[#334155] text-base leading-7">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span><span className="font-semibold text-[#263247]">性质：</span>税票不是独立税种，是 BKC 产品已经完成消费税管理、允许进入本土流通的关键合规标识。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span><span className="font-semibold text-[#263247]">适用规则：</span>BKC 产品在印尼本土流通时，应依法贴附消费税税票；非 BKC 产品不适用消费税，也不需要贴附消费税税票。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#DC6B6B] flex-shrink-0"></span>
              <span><span className="font-semibold text-[#263247]">核心红线：</span>未贴税票销售 BKC 产品，是印尼烟草及电子烟相关业务的核心合规红线。</span>
            </li>
          </ul>
        </TaxTableCard>

        <TaxTableCard title="3. 烟草税 Pajak Rokok">
          <ul className="space-y-2 text-[#334155] text-base leading-7">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span><span className="font-semibold text-[#263247]">适用对象：</span>烟草税是对含烟草制品征收的省级税种，通常适用于已经贴附消费税税票的烟草制品。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span><span className="font-semibold text-[#263247]">计算方式：</span>烟草税通常以消费税为税基，按消费税的 10% 计征。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span><span className="font-semibold text-[#263247]">提示：</span>消费税、烟草税和增值税属于不同税种，可以并行适用。</span>
            </li>
          </ul>
        </TaxTableCard>

        <TaxTableCard title="4. 增值税 PPN">
          <ul className="space-y-2 text-[#334155] text-base leading-7">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span><span className="font-semibold text-[#263247]">烟草制品 PPN：</span>烟草制品适用特殊增值税折算机制，通常以 HJE 作为折算基础，按 9.9% × HJE 计征。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span><span className="font-semibold text-[#263247]">原材料及一般货物 PPN：</span>烟草原料、普通辅材、设备及其他一般货物，通常按一般 PPN 规则处理。</span>
            </li>
          </ul>
        </TaxTableCard>

        <TaxTableCard title="5. 巴淡岛自由贸易区税务提示">
          <ul className="space-y-2 text-[#334155] text-base leading-7">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span><span className="font-semibold text-[#263247]">区内流转：</span>巴淡岛 KPBPB 内的税费便利原则上仅限区内使用、区内仓储或区内监管流转。一般货物在满足条件时，可适用关税、进口环节税和 PPN 的免征、不征或暂缓安排。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span><span className="font-semibold text-[#263247]">出区进入印尼本土：</span>货物从 KPBPB 区域进入印尼本土非自由区销售或流通时，通常按进入印尼关境 / 国内流通处理，相应关税、进口环节税、PPN 等需要补缴。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A24C] flex-shrink-0"></span>
              <span><span className="font-semibold text-[#263247]">BKC 产品：</span>BKC 产品应单独判断消费税和烟草税。巴淡岛原先针对烟、酒、乙醇等 BKC 的消费税便利已在 2019 年被取消；烟草制品如属于 BKC，即使在巴淡岛内经营，也应按规定缴纳消费税，并相应判断烟草税要求。</span>
            </li>
          </ul>
        </TaxTableCard>
      </TaxSection>

      {/* 六、市场运营规范 */}
      <MarketOperationSection>
        <div className="grid md:grid-cols-2 gap-4">
          <RuleModuleCard number={1} title="销售与陈列">
            <DotList items={[
              '不得向 21 岁以下人员及孕妇销售烟草制品和电子烟',
              '不得使用自动售货机销售烟草制品和电子烟',
              '不得单支零售传统卷烟；雪茄和电子烟产品除外',
              '不得在教育机构和儿童游乐场 200 米范围内销售烟草制品和电子烟',
              '不得将烟草制品和电子烟陈列在出入口、收银动线或人流密集区域附近',
              '通过商业网站、应用程序或其他线上渠道销售的，应设置有效年龄验证机制',
            ]} />
          </RuleModuleCard>
          <RuleModuleCard number={2} title="包装与标签">
            <DotList items={[
              '烟草制品和电子烟包装均需标注图文健康警示；健康警示应位于包装正反面宽面上方区域，各占 50%',
              '包装应标注禁止向 21 岁以下人员及孕妇销售、批号、生产日期、生产者名称和地址等基础信息',
              '烟草制品包装应标注尼古丁和焦油声明；电子烟包装应标注含尼古丁声明',
              '电子烟产品应关注尼古丁 / 焦油含量、成分和添加剂资料、上市前检测及流通过程验证要求',
              '包装规格需符合分类要求：机制白香烟每包至少 20 支；碎烟草制品每包重量不得超过 50 克；封闭式电子烟每支烟弹液体尼古丁含量不得超过 2 毫升，且每包烟弹不得超过 2 支；开放式电子烟液态尼古丁通常以 10 毫升或 20 毫升容器包装；固体电子烟每包应包含 20 个单位',
              '不得使用暗示安全、低风险、健康利益或鼓励消费的误导性、促销性标识',
              '出口产品如不符合印尼本地包装要求，应先向海关备案并取得批准',
            ]} />
          </RuleModuleCard>
          <RuleModuleCard number={3} title="广告与宣传">
            <DotList items={[
              '禁止在数字社交媒体发布烟草制品和电子烟广告',
              '网站、商业应用、销售场所、户外媒体、印刷媒体、电视和广播广告均受到限制',
              '网站和商业应用中的广告应包含健康警示、21 岁以上购买限制和禁止向孕妇销售提示，并设置年龄验证机制',
              '广告不得描述或暗示吸烟、使用电子烟对健康有益',
              '广告不得使用误导性或鼓励消费的语言',
              '广告不得展示儿童、青少年、孕妇、卡通、动画或明显吸引未成年人的形象',
              '电视和广播广告仅允许在当地时间 22:00 至次日 05:00 之间播放',
              '户外广告不得设置在无烟区、主干道、教育机构和儿童游乐场周边 500 米范围内',
            ]} />
          </RuleModuleCard>
          <RuleModuleCard number={4} title="赞助、促销与 CSR">
            <DotList items={[
              '禁止免费赠送、打折促销、附赠烟草或电子烟产品',
              '禁止将烟草或电子烟品牌用于非烟草 / 非电子烟产品',
              '赞助活动不得使用烟草或电子烟商标、品牌标识或品牌形象',
              'CSR 活动不得以推广烟草或电子烟为目的',
              'CSR 活动不得免费发放烟草或电子烟产品，也不得作为奖品、折扣或赠品',
              'CSR 或赞助活动不得由媒体报道或公开宣传',
            ]} />
          </RuleModuleCard>
        </div>
      </MarketOperationSection>

      {/* 七、趋势预判与红线警告 */}
      <TrendAndRedLinesSection
        trendContent={
          <>
            <p className="text-[#334155] text-base leading-7 mb-4">印尼目前没有明显信号显示将对传统烟草、HNB或电子烟实施全国性全面禁令。2026年以来可观察到的监管方向主要包括：</p>
            <BulletList items={[
              '对非法卷烟和无税票产品持续高压执法，海关及消费税总局查处数量明显增加。',
              '电子烟监管更关注流通端和非法产品，特别是含毒品电子烟液、违禁成分、BPOM流通监管、年龄限制、包装警示和广告限制。',
              '消费税政策可能继续围绕非法市场治理调整，但是否新增税收层级、如何调整税率结构，仍存在政策讨论和争议。',
            ]} />
            <p className="text-[#334155] text-base leading-7 mt-4">整体看，印尼仍是烟草及新型烟草产品可准入且相对友好的市场，政策重点是把产品纳入合法资质、税务、包装和销售监管体系，维持合法市场秩序并压缩非法流通空间。传统卷烟和HNB的重点风险在税票、NPPBKC、清关和包装；电子烟的重点风险在BPOM监管、成分和非法烟液；尼古丁袋/口含膜的重点风险在产品定性和主管机关口径不稳定。</p>
          </>
        }
        redLineItems={[
          '严禁无证或超许可范围在印尼生产、进口、销售烟草制品、电子烟、HNB或尼古丁产品。',
          '严禁在印尼本土销售未贴税票的 BKC 产品。',
          '严禁走私、低报、错报品名、错报 HS 编码、错报用途或规避消费税、烟草税、PPN及进口环节税费。',
          '严禁向21岁以下人员及孕妇销售或免费提供烟草制品和电子烟。',
          '严禁在教育机构和儿童游乐场200米范围内销售烟草制品和电子烟。',
          '严禁在数字社交媒体违法发布烟草或电子烟广告。',
          '严禁使用未经批准或不符合要求的包装、标签和健康警示。',
          '严禁在产品或宣传中作出减害、健康、治疗、戒烟等未经批准的功效宣称。',
          '严禁未经FTO或知识产权核查，擅自生产、销售可能侵权的产品。',
          '严禁非法采购、储存、销售或处置 B3 危险物质及危险废物。',
        ]}
      />

      {/* 八、重要资讯 */}
      <ReferencesSection
        tipText="以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。印尼相关法律、政府条例和主管机关口径可能经过后续修订或更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。"
        regulationContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="公共健康与产品监管">
              <ReferenceItem
                url="https://peraturan.bpk.go.id/details/258028/uu-no-17-tahun-2023"
                title="《健康法》（2023年第17号法，UU 17/2023 tentang Kesehatan）"
                description="印尼公共健康基础法律，将烟草制品及相关成瘾性物质纳入健康监管框架，为生产、流通、销售、广告、使用限制和健康保护措施提供上位法律依据。"
              />
              <ReferenceItem
                showSeparator
                url="https://peraturan.bpk.go.id/details/294077/pp-no-28-tahun-2024"
                title="《2024年第28号政府条例》（PP 28/2024）"
                description="《健康法》的主要实施条例，细化烟草制品、电子烟、成瘾性物质、包装健康警示、销售限制、广告限制、无烟区和行政处罚等要求，是当前印尼烟草及电子烟市场运营监管的核心依据。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="消费税、税票与流通监管">
              <ReferenceItem
                url="https://peraturan.bpk.go.id/Details/46203/uu-no-11-tahun-1995"
                title="《消费税法》（1995年第11号法，UU 11/1995 tentang Cukai）"
                description="确立 BKC（应税消费品）、消费税征收、税票、NPPBKC 和消费税执法的基础规则。"
              />
              <ReferenceItem
                showSeparator
                url="https://peraturan.bpk.go.id/Details/39962/uu-no-39-tahun-2007"
                title="《2007年第39号法》（UU 39/2007）"
                description="对《消费税法》作出修订，完善消费税监管、执法和处罚规则。"
              />
              <ReferenceItem
                showSeparator
                url="https://peraturan.bpk.go.id/Details/311451/pmk-no-96-tahun-2024"
                title="《财政部第96/2024号部长规章》（PMK 96/2024）"
                description="修改电子烟及其他烟草加工产品消费税规则，调整电子烟、HPTL 等产品的消费税税率、最低零售价格、市场交易价格监测和相关税务管理要求。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="地方控烟与无烟区规则">
              <ReferenceItem
                url="https://ktr.kemkes.go.id/regulasi"
                title="地方性无烟区 / 控烟条例"
                description="地方政府可对无烟区、禁售区域、展示、销售场所和执法安排作进一步规定。涉及线下销售、门店陈列、公共场所使用和地方执法时，应同步核查所在省、市或县的地方性规则。"
              />
            </ReferenceGroupCard>
          </div>
        }
        newsContent={
          <ReferenceGroupCard title="新闻动态">
            <ReferenceItem
              url="https://www.reuters.com/markets/emerging/indonesia-tobacco-excise-tax-stay-unchanged-2026-2025-09-26/"
              title="2025年9月｜印尼确认2026年不提高烟草消费税税率"
              description="印尼财政部长表示，2026年烟草产品消费税税率维持不变，政策重心转向清理非法烟草市场，而非继续通过加税压缩消费。"
            />
            <ReferenceItem
              showSeparator
              url="https://en.antaranews.com/news/399833/indonesia-plans-new-cigarette-excise-layer-to-tackle-illegal-tobacco"
              title="2026年1月｜印尼讨论新增卷烟消费税层级，以治理非法卷烟市场"
              description="印尼财政部讨论新增卷烟消费税层级，政策目标指向非法卷烟治理和税收征管。"
            />
            <ReferenceItem
              showSeparator
              url="https://jakartaglobe.id/news/customs-seizes-249-million-illegal-cigarettes-in-january"
              title="2026年2月｜印尼海关1月查获约2.49亿支非法卷烟"
              description="印尼海关及消费税总局在2026年1月查获约2.49亿支非法卷烟，说明非法卷烟和未贴税票产品仍是执法重点。"
            />
            <ReferenceItem
              showSeparator
              url="https://jakartaglobe.id/lifestyle/health-groups-reject-plan-for-new-cigarette-excise-tier-warn-of-cheaper-prices"
              title="2026年2月｜公共健康团体反对新增低价卷烟消费税层级方案"
              description="公共健康团体反对新增卷烟消费税层级，担心该安排可能压低部分产品价格、扩大低价卷烟可及性，并削弱控烟政策效果。"
            />
            <ReferenceItem
              showSeparator
              url="https://tobaccoreporter.com/2026/04/16/indonesia-to-enforce-new-vape-rules-from-july/"
              title="2026年4月｜电子烟新规执行时间和重点要求受到市场关注"
              description="公开报道显示，PP 28/2024 项下电子烟规则预计自2026年7月起进入执行阶段，重点涉及21岁最低购买年龄、广告限制、尼古丁含量、图文健康警示和无烟区等要求。"
            />
            <ReferenceItem
              showSeparator
              url="https://jakartaglobe.id/news/indonesia-to-step-up-surveillance-of-vape"
              title="2026年5月｜BPOM 将加强电子烟流通监管，重点关注非法或含违禁成分烟液"
              description="BPOM 表示将加强电子烟流通监管，并与国家禁毒机构 BNN 协作应对含毒品或违禁成分电子烟液问题；BPOM并未支持直接实施电子烟全面禁令。"
            />
          </ReferenceGroupCard>
        }
      />
    </CountryPageTemplate>
  );
}
