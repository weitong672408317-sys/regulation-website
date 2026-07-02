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
  BulletPoint,
  DotList,
  ProductAccessOverviewSection,
} from '../sections';
import { singaporeProductAccessOverview } from '../../../data/productAccessOverview';

interface SingaporePageProps {
  country: CountryData;
}

export default function SingaporePage({ country }: SingaporePageProps) {
  return (
    <CountryPageTemplate>
      <div className="singapore-page">
      <ProductAccessOverviewSection data={singaporeProductAccessOverview} sectionId="product-access-overview" useMobileCards />
      {/* 本季监管动态 */}
      <SeasonSummarySection
        sectionId="overview"
        introText={<>2026年以来，新加坡烟草监管继续沿着&ldquo;传统烟草产品有限准入、新型产品从严禁止&rdquo;的方向推进。自2026年5月1日起，《Tobacco and Vaporisers Control Act 1993》生效，监管重点集中在雾化器、HNB产品、尼古丁袋、烟油、仿烟产品及相关组件的处罚升级、场所责任强化，以及传统烟草产品消费税提高。</>}
        items={[
          {
            title: '1. 禁止类产品处罚力度提高',
            content: '2026年修法后，新加坡提高了对雾化器、HNB产品、尼古丁袋、烟油及相关组件等禁止类产品的处罚力度。购买、使用或持有相关产品，最高罚款可达10,000新元；供应相关产品，最高可强制监禁6年，并处罚款200,000新元；进口相关产品，最高可强制监禁9年，并处罚款300,000新元。',
          },
          {
            title: '2. 场所责任和储存管理进一步强化',
            content: '新加坡将禁止类产品监管延伸至储存和场所管理。场所所有人、占有人及公共娱乐场所经营者如允许相关产品在其场所内储存、持有或使用，可被罚款最高10,000新元。',
          },
          {
            title: '3. 烟草产品消费税提高',
            content: '自2026年2月12日起，新加坡将所有烟草产品消费税提高20%，继续通过税收手段提高传统烟草产品使用成本。',
          },
          {
            title: '4. 电子烟及含依托咪酯产品执法持续加强',
            content: '2026年以来，新加坡继续加强电子烟及含依托咪酯等特定精神活性物质产品的执法。自2026年5月1日起，依托咪酯及其类似物被纳入 TVCA 下的特定精神活性物质安排；含有该等物质的产品同属禁止对象，购买、使用或持有最高罚款10,000新元，供应、进口则分别适用最高6年和9年强制监禁及罚款。',
          },
        ]}
      />

      {/* 监管体系 */}
      <RegulatorySystemSection
        sectionId="regulatory-system"
        cards={[
          {
            title: '核心特征',
            content: (
              <>
                <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-base leading-[1.6] text-[#334155] text-justify mb-4">新加坡采取&ldquo;传统烟草产品从严管控、新型烟草及尼古丁产品明确禁入、烟草使用空间高度受限&rdquo;的监管模式。</p>
                <BulletList items={[
                  '传统卷烟、雪茄、烟丝等产品可以依法经营，但销售、展示、广告、包装和吸烟地点均受到严格限制。',
                  '电子烟、HNB产品、尼古丁袋等新型烟草及尼古丁产品，在新加坡不得进口、销售、供应、购买、使用或持有。',
                  '新加坡禁烟范围已扩展至全岛超过49,000个地点，覆盖交通、住宅公共区域、公园、游乐场、海滩等多类日常场景，传统烟草产品的使用空间受到明显限制。',
                  '2026年修法后，新加坡进一步强化禁止类产品的个人端和场所端监管；违法吸烟、持有禁止类产品，或场所方未按要求处理相关产品的储存、持有和使用，均可能面临罚款、没收产品或其他执法措施。',
                ]} />
              </>
            ),
          },
          {
            title: '监管部门',
            content: (
              <div className="space-y-3">
                <BulletPoint><span className="font-semibold text-[#263247]">卫生部（MOH）：</span>负责控烟政策、法律修订、公共卫生目标和整体监管框架。</BulletPoint>
                <BulletPoint><span className="font-semibold text-[#263247]">卫生科学局（HSA）：</span>负责烟草产品许可管理、烟草广告和销售监管，以及新型烟草及尼古丁产品等禁止类产品执法。</BulletPoint>
                <BulletPoint><span className="font-semibold text-[#263247]">海关：</span>负责烟草产品进口申报、关税、消费税、完税监管和边境查验。</BulletPoint>
                <BulletPoint><span className="font-semibold text-[#263247]">国家环境局（NEA）：</span>负责禁烟场所、公共场所吸烟行为和相关环境执法。</BulletPoint>
              </div>
            ),
          },
        ]}
      />

      {/* 产品准入与监管口径 */}
      <ProductAccessSection sectionId="product-access">
        {/* 1. 传统烟草产品及烟草材料 */}
        <ProductModuleCard title="1. 传统烟草产品及烟草材料" label="产品定性">
          <div className="singapore-product-access-nature singapore-product-access-nature-text space-y-2 mb-4">
            <BulletPoint>新加坡《Tobacco and Vaporisers Control Act 1993》使用 tobacco product（烟草产品）作为基础概念。结合新加坡卫生科学局（HSA）公开说明，烟草产品包括卷烟、雪茄、小雪茄、其他制成烟草、未加工烟草、切丝烟草、烟草废料等。</BulletPoint>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <StatusCard
              status="amber"
              customLabel="可准入，但严格限制"
              title="传统烟草产品"
              id="product-traditional-tobacco"
              className="singapore-product-access-card"
              content={<>
                <div className="text-sm text-justify text-[#334155] mb-2">适用产品：传统卷烟、雪茄、小雪茄、烟丝、烟斗烟、其他制成烟草</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">传统烟草产品可以在新加坡依法经营，但进口、批发、分销和零售均需取得对应烟草许可证。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">烟草许可证按经营环节和具体门店管理，不能在不同经营活动、不同公司或不同门店之间通用。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">进口或本地制造传统烟草产品，均需按规定缴纳消费税；卷烟、雪茄、小雪茄及其他制成烟草的消费税已提高至每支58.9新分。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">本地销售应符合 HSA 烟草零售监管要求，并遵守标准化包装、健康警示、标签、销售对象、展示、广告和促销限制。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">传统烟草产品的使用地点受到严格限制，室内公共场所、工作场所、公共交通、餐饮娱乐及部分户外区域均可能属于禁烟范围。</span>
                  </div>
                </div>
              </>}
            />
            <StatusCard
              id="product-tobacco-material"
              status="amber"
              customLabel="需分类确认"
              title="烟草材料 / 原料"
              className="singapore-product-access-card"
              content={<>
                <div className="text-sm text-justify text-[#334155] mb-2">适用产品：烟叶、烟草薄片、烟草废料及其他烟草原料</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">未加工烟草、切丝烟草、烟草废料等属于烟草产品监管和消费税关注范围，进口前应确认烟草许可证、海关申报、消费税和完税要求。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">已经构成传统卷烟、雪茄、小雪茄或其他制成烟草的，应按传统烟草产品路径处理。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">已经制成或包装为 HNB 烟支、加热烟草产品、口含烟、可溶性烟草或其他禁止类产品的，不得按普通烟草原料路径进入新加坡市场。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">烟草材料进口申报时，应准确说明申报品名、加工程度、成分、用途和最终产品形态。</span>
                  </div>
                </div>
              </>}
            />
            <StatusCard
              id="product-hookah"
              status="red"
              customLabel="完全禁止"
              title="水烟烟草"
              className="singapore-product-access-card"
              content={<>
                <div className="text-sm text-justify text-[#334155] mb-2">适用产品：水烟烟草</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">不得进口、销售、供应、购买、使用或持有。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">不得通过样品、个人携带、跨境邮寄、线上销售、展示推广等方式进入新加坡市场。</span>
                  </div>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>

        {/* 2. 新型烟草、尼古丁及其他禁止类产品 */}
        <ProductModuleCard title="2. 新型烟草、尼古丁及其他禁止类产品" label="产品定性">
          <div className="singapore-product-access-nature singapore-product-access-nature-text space-y-2 mb-4">
            <BulletPoint>新加坡对新型烟草、尼古丁及相关替代类产品采取明确禁入规则。禁止范围不只限于电子烟，也包括加热烟草、无烟及口含类产品、仿烟产品和相关组件。</BulletPoint>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="red"
              customLabel="完全禁止"
              title="加热烟草及电子雾化产品"
              id="product-heat-not-burn"
              className="singapore-product-access-card"
              content={<>
                <div className="text-sm text-justify text-[#334155] mb-2">适用产品：HNB 烟支 / 加热烟草产品、电子烟设备、雾化器、烟油 / 电子烟液 / 补充液、烟弹 / 预灌装产品、电子雾化组件</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">不得进口、销售、供应、购买、使用或持有。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">不得通过样品、个人携带、跨境邮寄、线上销售、展示推广等方式进入新加坡市场。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">相关设备、组件、烟弹、烟油、补充液不得拆分申报或按普通电子产品、普通液体、普通样品处理。</span>
                  </div>
                </div>
              </>}
            />
            <StatusCard
              status="red"
              customLabel="完全禁止"
              title="无烟烟草产品"
              id="product-smokeless-tobacco"
              className="singapore-product-access-card"
              content={<>
                <div className="text-sm text-justify text-[#334155] mb-2">适用产品：口含烟、鼻烟、嚼烟、snus、可溶性烟草，以及 Gutkha、Khaini、Zarda 等含烟草但不经燃烧吸用的产品</div>
                <div className="text-sm text-[#64748B] mb-2 leading-relaxed">
                  注：<br />
                  Gutkha：通常是小袋包装，属于口含 / 咀嚼使用的烟草混合物，常和 pan masala 类产品放在一起销售。<br />
                  Khaini：湿润烟叶类咀嚼烟草，可能含熟石灰、香料等，形态更接近散状或袋装烟草。<br />
                  Zarda：加香 / 调味烟草，常见罐装或袋装，作为口含或咀嚼类烟草使用。
                </div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">不得进口、销售、供应、购买、使用或持有。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">不得按传统烟草产品、普通食品、普通口含产品、个人用品或样品方式进入新加坡市场。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">含烟草并通过口含、鼻吸、咀嚼、溶解等方式使用的产品，应按禁止类产品处理。</span>
                  </div>
                </div>
              </>}
            />
            <StatusCard
              status="red"
              customLabel="完全禁止"
              title="新型尼古丁产品"
              id="product-novel-nicotine"
              className="singapore-product-access-card"
              content={<>
                <div className="text-sm text-justify text-[#334155] mb-2">适用产品：尼古丁袋、尼古丁口含膜、尼古丁含片及其他不含烟草但含尼古丁的口含类产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">不得进口、销售、供应、购买、使用或持有。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">不得按普通食品、普通口含产品、个人用品或样品方式进入新加坡市场。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">含尼古丁并通过口含、鼻吸、咀嚼、溶解等方式使用的产品，应按禁止类产品处理。</span>
                  </div>
                </div>
              </>}
            />
            <StatusCard
              status="red"
              customLabel="完全禁止"
              title="仿烟产品及相关组件"
              id="product-imitation"
              className="singapore-product-access-card"
              content={<>
                <div className="text-sm text-justify text-[#334155] mb-2">适用产品：仿烟产品、仿烟组件及相关配件</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">不得进口、销售、供应、购买、使用或持有。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">仿烟产品的判断不只看是否含烟草或尼古丁，也要看外观、功能、使用方式和是否模仿吸烟行为。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">不得通过玩具、食品、装置、配件、样品或展示品等形式规避禁止类产品监管。</span>
                  </div>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>

        {/* 3. 普通辅材及香精香料 */}
        <ProductModuleCard title="3. 普通辅材" label="产品定性" id="module-ordinary-material">
          <div className="singapore-product-access-nature singapore-product-access-nature-text space-y-2 mb-4">
            <BulletPoint>新加坡公开资料未见对爆珠、香精胶囊、滤嘴棒等普通辅材及香精香料设置统一、单独的产品定义。该类产品应结合成分、形态、进口申报品名和产品功能判断。</BulletPoint>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="green"
              customLabel="可准入，需按成分确认"
              title="爆珠 / 香精胶囊"
              id="product-bead"
              className="singapore-product-access-card"
              content={<>
                <div className="text-sm text-justify text-[#334155] mb-2">适用产品：不含烟草、尼古丁或受控成分的爆珠、香精胶囊</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">不含尼古丁、烟草或烟草提取物的爆珠、香精胶囊，一般可按普通货物路径判断。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">如含有尼古丁、烟草或烟草提取物，应重新判断是否触发烟草产品、禁止类产品、毒物 / 药品或其他专项监管要求。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">进口申报时应准确说明产品成分、形态和功能；如产品本身构成雾化器组件、仿烟产品或其他受管制物品，应按相应监管路径处理。</span>
                  </div>
                </div>
              </>}
            />
            <StatusCard
              status="green"
              customLabel="可准入，需按成分确认"
              title="滤嘴棒及其他普通辅材"
              id="product-filter"
              className="singapore-product-access-card"
              content={<>
                <div className="text-sm text-justify text-[#334155] mb-2">适用产品：滤嘴棒及其他不含烟草、尼古丁或受控成分的普通辅材</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">不含烟草、尼古丁或烟草提取物的滤嘴棒等普通辅料，公开资料未见单独禁令。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">如含有尼古丁、烟草或烟草提取物，应重新判断是否触发烟草产品、消费税、毒物 / 药品或其他专项监管要求。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55] text-[#334155]">进口申报时应准确说明产品成分、形态和功能；如产品本身构成雾化器组件、仿烟产品或其他受管制物品，应按相应监管路径处理。</span>
                  </div>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>
      </ProductAccessSection>

      {/* 合规资质 */}
      <ComplianceSection country={country} sectionId="licenses">
        <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] text-justify mb-6">新加坡烟草产品合规资质主要集中在 HSA 烟草许可证和特定禁止类产品的有限豁免安排。传统烟草产品存在许可经营路径，但许可证按经营环节和具体门店管理；禁止类产品只有在法规明确列明的特定产品、行为和目的下，才可能适用有限豁免。</p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">1</span>
              <h4 className="font-bold text-[#2E3F73] text-base">烟草进口 / 批发许可证</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-[1.6] flex-1 min-w-0">适用于进口、批发和分销传统烟草产品的经营活动。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-[1.6] flex-1 min-w-0">进口、批发或分销烟草产品前，应取得 HSA 烟草进口商和批发商许可证。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-[1.6] flex-1 min-w-0">申请通常需要提交经营主体、仓库或办公场所、生产商授权等资料，许可管理与具体经营安排相关。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">2</span>
              <h4 className="font-bold text-[#2E3F73] text-base">烟草零售许可证</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-[1.6] flex-1 min-w-0">适用于在新加坡本地零售传统烟草产品的门店。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-[1.6] flex-1 min-w-0">烟草零售许可证按具体门店发放，经营多个门店的，应分别申请。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-[1.6] flex-1 min-w-0">零售许可证不得在不同公司或不同门店之间转让。</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">3</span>
            <h4 className="font-bold text-[#2E3F73] text-base">有限豁免</h4>
          </div>
          <div className="ml-9 space-y-2">
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="text-[#334155] text-base leading-[1.6] flex-1 min-w-0">新加坡法规对部分禁止类产品设有有限豁免，涉及无烟烟草产品、雾化器溶液、雾化器、豁免仿烟产品及其组件。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="text-[#334155] text-base leading-[1.6] flex-1 min-w-0">法规列明的豁免目的包括非临床研究、产品开发和供应链相关活动。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="text-[#334155] text-base leading-[1.6] flex-1 min-w-0">供应链相关活动指产品及组件的移动和储存，包括采购、供应商管理、生产排期、库存管理、进出口合规、分销及支持活动。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="text-[#334155] text-base leading-[1.6] flex-1 min-w-0">上述供应链活动仅用于判断豁免目的范围，产品进口、持有、移动或储存还需满足豁免令对产品类型、行为、主体、通知、记录、储存和期限等条件。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="text-[#334155] text-base leading-[1.6] flex-1 min-w-0">该等豁免不等同于本地消费市场准入，不能作为本地销售、递样、展示、推广或消费者使用的依据。</span>
            </div>
          </div>
        </div>
      </ComplianceSection>

      {/* 税收政策 */}
      <TaxSection sectionId="tax">
        <TaxTableCard title="1. 烟草消费税">
          <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] text-justify mb-4">新加坡烟草相关税负主要包括烟草消费税、关税和 GST。自2026年2月12日起，新加坡所有烟草产品消费税提高20%；下表为提高后的现行消费税率。</p>
          <div className="hidden md:block overflow-x-auto rounded-xl border border-[#D8DDED]">
            <table className="w-full text-base min-w-[500px] bg-white">
              <thead>
                <tr className="bg-[#E8EDF5]">
                  <th className="px-6 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED]">产品类别</th>
                  <th className="px-6 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED]">提高后的现行消费税率</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/50">
                  <td className="px-6 py-4 border-b border-[#D8DDED] font-semibold text-[#1F2A44]">卷烟、雪茄、小雪茄及其他制成烟草产品</td>
                  <td className="px-6 py-4 border-b border-[#D8DDED] text-[#334155]">每支 58.9 新分</td>
                </tr>
                <tr className="bg-[#F3F5FB]">
                  <td className="px-6 py-4 border-b border-[#D8DDED] font-semibold text-[#1F2A44]">其他无烟烟草和 beedies</td>
                  <td className="px-6 py-4 border-b border-[#D8DDED] text-[#334155]">每公斤 454 新元</td>
                </tr>
                <tr className="bg-white/50">
                  <td className="px-6 py-4 border-b border-[#D8DDED] font-semibold text-[#1F2A44]">未加工烟草、切丝烟草及烟草废料</td>
                  <td className="px-6 py-4 border-b border-[#D8DDED] text-[#334155]">每公斤 535 新元</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-3">
            <div className="singapore-tax-mobile-card rounded-xl border border-[#D8DDED] bg-white p-3.5">
              <div className="singapore-tax-mobile-title">卷烟、雪茄、小雪茄及其他制成烟草产品</div>
              <div className="singapore-tax-mobile-field">
                <div className="singapore-tax-mobile-label">提高后的现行消费税率</div>
                <div className="singapore-tax-mobile-body">每支 58.9 新分</div>
              </div>
            </div>
            <div className="singapore-tax-mobile-card rounded-xl border border-[#D8DDED] bg-white p-3.5">
              <div className="singapore-tax-mobile-title">其他无烟烟草和 beedies</div>
              <div className="singapore-tax-mobile-field">
                <div className="singapore-tax-mobile-label">提高后的现行消费税率</div>
                <div className="singapore-tax-mobile-body">每公斤 454 新元</div>
              </div>
            </div>
            <div className="singapore-tax-mobile-card rounded-xl border border-[#D8DDED] bg-white p-3.5">
              <div className="singapore-tax-mobile-title">未加工烟草、切丝烟草及烟草废料</div>
              <div className="singapore-tax-mobile-field">
                <div className="singapore-tax-mobile-label">提高后的现行消费税率</div>
                <div className="singapore-tax-mobile-body">每公斤 535 新元</div>
              </div>
            </div>
          </div>
        </TaxTableCard>

        <TaxTableCard title="2. 关税 / 消费税计征方式">
          <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] text-justify mb-4">新加坡烟草产品属于应税货物，适用特定税率，不按统一百分比区间计征。非卷烟类烟草通常按重量计算；卷烟按支数及每支重量计算，且每支重量向上取整至最接近的克数。</p>
          <div className="hidden md:block overflow-x-auto rounded-xl border border-[#D8DDED]">
            <table className="w-full text-base min-w-[500px] bg-white">
              <thead>
                <tr className="bg-[#E8EDF5]">
                  <th className="px-6 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED]">产品类别</th>
                  <th className="px-6 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED]">计征方式 / 适用税率</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/50">
                  <td className="px-6 py-4 border-b border-[#D8DDED] font-semibold text-[#1F2A44]">非卷烟类烟草产品</td>
                  <td className="px-6 py-4 border-b border-[#D8DDED] text-[#334155]">按重量计征，适用每公斤 454 新元或 535 新元的具体税率</td>
                </tr>
                <tr className="bg-[#F3F5FB]">
                  <td className="px-6 py-4 border-b border-[#D8DDED] font-semibold text-[#1F2A44]">卷烟</td>
                  <td className="px-6 py-4 border-b border-[#D8DDED] text-[#334155]">按支数 × 每支重量计征，税率为每克每支 0.589 新元</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="md:hidden space-y-3">
            <div className="singapore-tax-mobile-card rounded-xl border border-[#D8DDED] bg-white p-3.5">
              <div className="singapore-tax-mobile-title">非卷烟类烟草产品</div>
              <div className="singapore-tax-mobile-field">
                <div className="singapore-tax-mobile-label">计征方式 / 适用税率</div>
                <div className="singapore-tax-mobile-body">按重量计征，适用每公斤 454 新元或 535 新元的具体税率</div>
              </div>
            </div>
            <div className="singapore-tax-mobile-card rounded-xl border border-[#D8DDED] bg-white p-3.5">
              <div className="singapore-tax-mobile-title">卷烟</div>
              <div className="singapore-tax-mobile-field">
                <div className="singapore-tax-mobile-label">计征方式 / 适用税率</div>
                <div className="singapore-tax-mobile-body">按支数 × 每支重量计征，税率为每克每支 0.589 新元</div>
              </div>
            </div>
          </div>
        </TaxTableCard>

        <TaxTableCard title="3. GST">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] text-justify flex-1 min-w-0">新加坡现行 GST 税率为 9%。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] text-justify flex-1 min-w-0">传统烟草产品在新加坡本地销售通常需缴纳 GST；进口烟草产品也需在进口环节缴纳 GST，计税基础通常包括货物价值、保险费、运费，以及适用的关税和消费税。</span>
            </div>
          </div>
        </TaxTableCard>
      </TaxSection>

      {/* 市场运营规范 */}
      <MarketOperationSection sectionId="operation-rules">
        <div className="grid md:grid-cols-2 gap-x-5 gap-y-6">
          <RuleModuleCard number={1} title="销售对象与零售陈列">
            <DotList className="space-y-3" textClassName="text-base leading-[1.6] font-normal" dotClassName="mt-[7px]" items={[
              '传统卷烟、雪茄、小雪茄及其他制成烟草可以在新加坡本地销售，但不得向21岁以下人士销售、供应或提供。',
              '烟草零售点不得公开陈列烟草产品，不得通过货架、柜台、品牌露出或其他可见陈列方式吸引消费者注意。',
              '零售现场不得通过价格优惠、赠品、积分、组合销售或其他利益安排促进烟草产品购买。',
            ]} />
          </RuleModuleCard>
          <RuleModuleCard number={2} title="广告、促销与线上传播">
            <DotList className="space-y-3" textClassName="text-base leading-[1.6] font-normal" dotClassName="mt-[7px]" items={[
              '不得发布、展示或传播烟草产品广告，也不得通过赞助、品牌活动或宣传材料推广烟草产品。',
              '不得通过样品、赠品、抽奖、折扣、会员计划或其他促销方式提高烟草产品吸引力。',
              '禁止类产品，不得展示、推广、试销、递样或作为赠品提供。',
            ]} />
          </RuleModuleCard>
          <RuleModuleCard number={3} title="包装、标签与规格要求">
            <DotList className="space-y-3" textClassName="text-base leading-[1.6] font-normal" dotClassName="mt-[7px]" items={[
              '传统烟草产品进入新加坡市场前，应符合标准化包装、健康警示和标签要求；不符合要求的，不得进口、销售、要约销售或分销。',
              '每包香烟不得少于20支；少于20支的香烟包不得进口、分销、销售或要约销售。',
              '包装和标签不得使用可能淡化危害、误导风险或削弱健康警示效果的表述和设计。',
            ]} />
          </RuleModuleCard>
          <RuleModuleCard number={4} title="使用、持有与场所责任">
            <DotList className="space-y-3" textClassName="text-base leading-[1.6] font-normal" dotClassName="mt-[7px]" items={[
              '传统烟草产品不得在法定禁烟区内使用，吸烟活动限于允许吸烟的指定区域。新加坡禁烟范围覆盖多数室内公共场所、工作场所、公共交通设施、餐饮场所、公共服务车辆、体育和休闲设施，以及部分户外区域。',
              '电子烟、HNB产品、尼古丁袋、雾化器及相关组件等禁止类产品，购买、使用和持有本身即受管控。',
              '场所所有人、占有人及公共娱乐场所经营者不得放任禁止类产品在场所内储存、持有或使用。',
            ]} />
          </RuleModuleCard>
        </div>
      </MarketOperationSection>

      {/* 政策趋势分析与合规红线清单 */}
      <TrendAndRedLinesSection
        sectionId="trend"
        trendId="trend-item"
        redLineId="red-lines"
        trendContent={
          <div className="space-y-4">
            <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] text-justify">新加坡烟草监管长期以控烟和公共健康保护为核心。传统烟草产品仍保留有限经营空间，但监管重点是减少展示、减少宣传、提高税负，并通过禁烟场所规则限制使用场景。电子烟、HNB 烟支、尼古丁袋、雾化器等新型产品则继续采取原则禁止和严格执法的路径。</p>
            <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] text-justify">2026年的修法进一步强化了这一方向。监管已经从传统的进口、销售和广告控制，延伸到购买、持有、使用、储存、场所责任、雾化器组件、仿烟产品以及含特定精神活性物质产品。</p>
            <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] text-justify">未来新加坡大概率仍将维持&ldquo;传统烟草产品有限准入、新型产品原则禁止、个人和场所责任同步强化&rdquo;的监管格局。</p>
          </div>
        }
        redLineGroups={[
          {
            title: '禁止类产品',
            items: [
              '严禁将电子烟、雾化器、烟油、HNB 烟支、尼古丁袋、水烟烟草、仿烟产品及相关设备或组件进口、销售、供应、购买、持有或使用。',
              '严禁以样品、展品、试用品、赠品、研发、检测、内部测试、跨境邮寄、旅客携带、代购或线上交易等方式规避禁止类产品监管。',
            ]
          },
          {
            title: '传统烟草经营',
            items: [
              '严禁在未取得相应烟草许可证的情况下，进口、批发、分销或零售传统烟草产品。',
              '严禁进口、销售、要约销售或分销不符合标准化包装、健康警示、标签要求或最低包装规格要求的传统烟草产品。',
              '严禁向21岁以下人士销售、供应或提供传统烟草产品。',
            ]
          },
          {
            title: '销售与营销',
            items: [
              '严禁公开陈列烟草产品，或通过货架、柜台、品牌露出等方式提高烟草产品可见度。',
              '严禁发布、展示或传播烟草产品广告，或通过赞助、品牌活动、宣传材料等方式推广烟草产品。',
              '严禁通过样品、赠品、抽奖、折扣、积分、组合销售、会员活动等方式促销传统烟草产品。',
            ]
          },
          {
            title: '使用与场所',
            items: [
              '严禁在新加坡法定禁烟场所吸烟。',
              '严禁场所所有人、占有人及公共娱乐场所经营者放任禁止类产品在场所内储存、持有或使用。',
            ]
          },
        ]}
      />

      {/* 重要资讯 */}
      <ReferencesSection
        sectionId="resources"
        tipText="以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。新加坡相关法律、政府条例和主管机关口径可能经过后续修订或更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。"
        regulationTitle="法规 / 官方资料"
        newsTitle="新闻 / 动态"
        regulationContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="基础控烟与产品准入">
              <ReferenceItem
                title="《Tobacco and Vaporisers Control Act 1993》"
                url="https://sso.agc.gov.sg/Act/TVCA1993"
                description="新加坡烟草和雾化器监管的核心法律，覆盖烟草产品、雾化器、仿烟产品、禁止类烟草产品及相关组件的广告、销售、供应、购买、持有、使用、进口、场所责任和处罚等事项。"
              />
              <ReferenceItem
                title="新加坡卫生科学局 HSA：Overview of tobacco control"
                url="https://www.hsa.gov.sg/tobacco-regulation/overview"
                description="说明新加坡烟草产品监管框架、烟草许可证、最低法定年龄、标准化包装、销售限制、禁止类产品和广告限制等核心要求。"
                showSeparator
              />
              <ReferenceItem
                title="新加坡卫生科学局 HSA：Vaping enforcement"
                url="https://www.hsa.gov.sg/tobacco-regulation/vaping-enforcement"
                description="列明电子雾化器、HNB产品、水烟烟草、尼古丁袋、雾化器组件、烟油、仿烟产品等禁止类产品，并说明购买、使用、持有、进口、销售和供应相关产品的执法口径。"
                showSeparator
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="许可证、包装与税务">
              <ReferenceItem
                title="新加坡卫生科学局 HSA：Tobacco licences"
                url="https://www.hsa.gov.sg/tobacco-regulation/licences/"
                description="说明烟草进口商、批发商、分销商和零售商许可证要求，以及烟草零售许可证按具体门店管理、不得转让等安排。"
              />
              <ReferenceItem
                title="新加坡卫生部 MOH：Standardised packaging and enlarged graphic health warnings"
                url="https://www.moh.gov.sg/newsroom/standardised-packaging-enlarged-graphic-health-warnings-mandatory-for-all-tobacco-products-in-singapore-from-1-july-2020/"
                description="说明新加坡自2020年7月1日起对所有烟草产品实施标准化包装和放大图形健康警示要求。"
                showSeparator
              />
              <ReferenceItem
                title="新加坡海关 Singapore Customs：Importing cigarettes or tobacco products into Singapore"
                url="https://ask.gov.sg/customs/questions/cm7lx1tgh01kelrwzodkkt22n"
                description="说明卷烟和烟草产品进入新加坡时的申报、税费和入境管理要求。"
                showSeparator
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="禁烟场所与公共场所吸烟">
              <ReferenceItem
                title="新加坡国家环境局 NEA：Smoking Prohibition"
                url="https://www.nea.gov.sg/our-services/smoking-prohibition/overview"
                description="说明新加坡禁烟场所范围，包括多数室内公共场所、公共交通设施、餐饮场所、公共服务车辆、体育和休闲设施及部分户外区域。"
              />
              <ReferenceItem
                title="新加坡国家环境局 NEA：Smoking Legislation"
                url="https://www.nea.gov.sg/our-services/smoking-prohibition/smoking-legislation"
                description="列明新加坡禁烟场所相关法律、规例和执法安排，是判断吸烟场所限制和场所管理责任的重要依据。"
                showSeparator
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="禁止类产品有限豁免">
              <ReferenceItem
                title="《Tobacco and Vaporisers Control (Prohibited Tobacco Products and Imitation Tobacco Products) (Exemption) Order 2018》"
                url="https://sso.agc.gov.sg/SL/TVCA1993-S70-2018"
                description="对部分禁止类产品、仿烟产品及相关组件，在非临床研究、产品开发、供应链相关活动等特定目的下设置有限豁免，并规定适用产品、行为、通知、记录、储存和期限等条件。"
              />
              <ReferenceItem
                title="《Tobacco and Vaporisers Control (Prohibited Tobacco Products and Imitation Tobacco Products) (Exemption) (Amendment) Order 2026》"
                url="https://assets.egazette.gov.sg/2026/Legislative%20Supplements/Subsidiary%20Legislation%20Supplement/254.pdf"
                description="配合2026年 TVCA 修法更新相关豁免安排，是判断禁止类产品研发、产品开发和供应链相关活动边界的重要文件。"
                showSeparator
              />
            </ReferenceGroupCard>
          </div>
        }
        newsContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="修法与监管框架更新">
              <ReferenceItem
                title="2026年3月：新加坡通过修法，强化电子烟、雾化器和依托咪酯滥用执法"
                url="https://www.moh.gov.sg/newsroom/tobacco--control-of-advertisements-and-sale---amendment--and-other-matters-bill-to-strengthen-enforcement-against-vaping-and-etomidate-abuse/"
                description="该修法将原《Tobacco Control of Advertisements and Sale Act》更名并修订为《Tobacco and Vaporisers Control Act 1993》，并强化雾化器、依托咪酯及相关禁止类产品执法。"
              />
              <ReferenceItem
                title="2026年3月：新加坡卫生部二读发言说明修法背景、处罚加重及场所管理义务"
                url="https://www.moh.gov.sg/newsroom/tobacco--control-of-advertisements-and-sale---amendment--and-other-matters-bill-second-reading---opening-speech-by-dr-koh-poh-koon--senior-minister-of-state--ministry-of-health-and-ministry-of-manpower--6-march-2026/"
                description="说明新加坡加强电子烟及依托咪酯治理的政策背景、处罚升级、执法经验和场所责任安排。"
                showSeparator
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="电子烟与依托咪酯执法">
              <ReferenceItem
                title="2026年5月：新加坡公布2026年第一季度电子烟执法情况，超过2,500人被查获"
                url="https://www.moh.gov.sg/newsroom/over-2-500-caught-vaping-in-first-3-months-of-2026/"
                description="2026年第一季度，新加坡查获并处罚超过2,500名电子烟相关违法人员，并查获大量雾化器及相关组件。"
              />
              <ReferenceItem
                title="2025年8月：新加坡跨部门强化电子烟及依托咪酯相关执法"
                url="https://www.moh.gov.sg/newsroom/whole-of-government-efforts-to-tackle-vaping/"
                description="新加坡启动跨部门执法机制，加强对电子烟、含依托咪酯产品和相关违法行为的治理。"
                showSeparator
              />
              <ReferenceItem
                title="2025年8月：MOH 与 HSA 继续加强电子雾化器违法行为执法"
                url="https://www.moh.gov.sg/newsroom/moh-and-hsa-continue-to-intensify-enforcement-on-e-vaporiser-offences/"
                description="MOH 和 HSA 继续强化电子雾化器进口、销售、持有、使用和相关线上违法行为执法。"
                showSeparator
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="税务变化">
              <ReferenceItem
                title="2026年2月：新加坡所有烟草产品消费税提高20%"
                url="https://www.channelnewsasia.com/singapore/budget-2026-tobacco-cigarettes-duty-tax-smoking-5925896"
                description="自2026年2月12日起，新加坡所有烟草产品消费税提高20%，传统烟草产品成本和税负进一步上升。"
              />
            </ReferenceGroupCard>
          </div>
        }
      />
      </div>
    </CountryPageTemplate>
  );
}
