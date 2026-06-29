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
  ProductAccessOverviewSection
} from '../sections';
import { indonesiaProductAccessOverview } from '../../../data/productAccessOverview';
import { TableCellContent } from '../CountryComponents';

interface IndonesiaPageProps {
  country: CountryData;
}

export default function IndonesiaPage({ country }: IndonesiaPageProps) {
  return (
    <CountryPageTemplate>
      <ProductAccessOverviewSection data={indonesiaProductAccessOverview} sectionId="product-access-overview" useMobileCards />
      {/* 一、本季监管动态 */}
      <SeasonSummarySection
        sectionId="overview"
        introText="2026年以来，印尼烟草及电子烟监管的可确认新动态主要集中在电子烟监管新规、加强流通监管和烟草税收政策三个方面。传统烟草、电子烟和HPTL仍有合法经营空间，但监管重点继续向产品标准、包装标签、广告限制、违法烟液和非法烟草市场治理集中。"
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
            title: '烟草税收政策',
            content: '2025年9月，印尼财政部长表示，2026年烟草产品消费税税率维持不变，政策重点转向治理非法烟草市场。2026年5月，第26/2026号财政部长条例生效，重新规范卷烟税征收、缴存和地方分配机制，维持卷烟税按消费税额的10%计征，并进一步明确电子烟及其他烟草产品的卷烟税适用范围。'
          }
        ]}
      />

      {/* 二、监管体系 */}
      <RegulatorySystemSection
        sectionId="regulatory-system"
        cards={[
          {
            title: '核心特征',
            content: (
              <>
                <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-base leading-[1.6] text-[#334155] text-justify mb-4">开放型烟草市场，以税收秩序和合法流通为监管主线</p>
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
              <div className="space-y-3">
                <BulletPoint><span className="font-semibold text-[#263247]">卫生部（MoH）：</span>烟草制品及相关成瘾性物质公共健康监管的上位主管机关，负责统筹公共健康监管方向和基本规则。</BulletPoint>
                <BulletPoint><span className="font-semibold text-[#263247]">财政部（MoF）：</span>消费税政策制定机关，负责烟草及相关应税消费品的税率、最低零售价格和税票制度安排。</BulletPoint>
                <BulletPoint><span className="font-semibold text-[#263247]">海关及消费税总局（DGCE）：</span>财政部下属执行机关，负责 NPPBKC 发放、消费税征收、税票管理、进口监管和非法卷烟查处。NPPBKC 是应税消费品经营者的准入编号 / 许可，决定主体能否经营烟草制品及其他应税消费品。</BulletPoint>
                <BulletPoint><span className="font-semibold text-[#263247]">食品药品监督管理局（BPOM）：</span>主要参与电子烟上市后的流通安全监管，重点关注电子烟液成分、违法添加和来源不明产品。</BulletPoint>
                <BulletPoint><span className="font-semibold text-[#263247]">贸易部（MoT）：</span>负责烟草、烟叶、烟草制品及相关产品的进口管理和贸易流通规则。</BulletPoint>
              </div>
            ),
          },
        ]}
      />

      {/* 三、产品准入与监管口径 */}
      <ProductAccessSection sectionId="product-access">
        {/* 产品定义 */}
        <div className="indonesia-product-access-intro bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-5 mb-6">
          <div className="space-y-2">
            <BulletPoint>根据《健康法》实施条例，成瘾性物质包括含烟草或不含烟草的产品，无论是香烟或其他具有成瘾性质的形式，只要其使用可能对个人和／或社会造成损害，且可以是固体、液体或气体形态。</BulletPoint>
            <BulletPoint>烟草制品是指全部或部分以烟草叶为原料制成的任何产品，经加工后可通过燃烧、加热、雾化、吸食、吸入、咀嚼或其他消费方式使用。法规明确列举的烟草制品包括香烟、雪茄、烟叶卷烟、切丝烟草、固态和液态烟草以及其他烟草加工产品。</BulletPoint>
          </div>
        </div>

        {/* 1. 燃烧类烟草制品 */}
        <ProductModuleCard title="1. 燃烧类烟草制品">
          <StatusCard
            id="product-combustible-tobacco"
            status="green"
            title="燃烧类烟草制品"
            customLabel="可准入，但成品进口严格受限"
            content={<>
              <div className="text-sm text-[#334155] mb-2">适用产品：传统卷烟、雪茄、烟叶卷烟、切丝烟草及其他通过燃烧方式使用的烟草制品</div>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0">燃烧类烟草制品在印尼具有合法生产、流通和销售路径，并按照具体产品类别适用相应消费税、税票、包装标签、健康警示和销售限制要求。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0">生产及本土流通经营主体应依法取得NPPBKC，并按照产品类别、生产方式、经营者等级、零售价格及适用计税单位确定消费税。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0">卷烟、雪茄和烟叶卷烟属于卷烟税征税范围，还应按照各自卷烟消费税额的10%缴纳卷烟税。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0">切丝烟草属于烟草制品消费税应税产品，但不属于卷烟税征税范围。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0">成品卷烟进口并非绝对禁止，但进口批准实务中较难取得，通常仅特定主体获批，进口数量及经营条件受到严格限制。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0">未贴税票、低报错报、错误归类、走私或者通过不合规渠道销售，是海关与消费税机关的重点执法事项。</span>
                </div>
              </div>
            </>}
          />
        </ProductModuleCard>

        {/* 2. 电子烟产品 */}
        <div className="indonesia-product-access-module">
        <ProductModuleCard title="2. 电子烟产品" label="产品定性">
          <div className="indonesia-product-access-nature indonesia-product-access-nature-text space-y-2 mb-4">
            <BulletPoint>根据印尼消费税规则，电子烟是指以液态、固态或其他形态存在，由烟叶经提取或其他方式加工制成，不论生产过程中是否使用替代材料或辅助材料，以零售包装向最终消费者提供，并通过电子加热装置加热后吸用的烟草制品。</BulletPoint>
            <BulletPoint>电子烟具体包括：</BulletPoint>
            <div className="indonesia-product-access-nature-list ml-4 space-y-2">
              <BulletPoint>固体电子烟（Rokok Elektrik Padat）：是指由烟叶经提取或其他方式加工制成的固态电子烟，不论生产过程中是否使用替代材料或辅助材料，以零售包装向最终消费者提供，并通过电子加热装置加热后吸用。</BulletPoint>
              <BulletPoint>开放式液体电子烟（Rokok Elektrik Cair Sistem Terbuka）：是指由烟叶经提取或其他方式加工制成的液态电子烟，不论生产过程中是否使用替代材料或辅助材料，以零售包装向最终消费者提供，并通过电子加热装置加热后吸用。</BulletPoint>
              <BulletPoint>封闭式液体电子烟（Rokok Elektrik Cair Sistem Tertutup）：是指由烟叶经提取或其他方式加工制成的液态电子烟，不论生产过程中是否使用替代材料或辅助材料，装在不可重复加注的一体式装置或者储液容器内，以零售包装向最终消费者提供，并且只能通过专用电子加热装置加热后吸用。</BulletPoint>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 2.1 固体电子烟产品 */}
            <StatusCard
              id="product-solid-ecig"
              status="green"
              title="固体电子烟产品"
              customLabel="可准入，监管趋严"
              className="indonesia-product-access-card"
              content={<>
                <div className="text-sm text-[#334155] mb-2">典型产品：HNB烟支、加热烟草棒</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">生产商和进口商应依法取得NPPBKC，并办理消费税税率核定、零售价格申报、品牌登记和消费税税票等手续。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">固体电子烟需缴纳消费税，还应按照消费税额的10%缴纳卷烟税。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">产品应符合包装标签、健康警示、销售对象、销售场所、广告促销及其他烟草制品监管要求。</span>
                  </div>
                </div>
              </>}
            />
            {/* 2.2 液体电子烟产品 */}
            <StatusCard
              id="product-liquid-ecig"
              status="green"
              title="液体电子烟产品"
              customLabel="可准入，监管趋严"
              className="indonesia-product-access-card"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：开放式电子烟液、补充液、封闭式烟弹、一次性预灌装电子烟产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">电子烟及相关液体在印尼具有合法经营路径，进入本土市场时应符合消费税、税票、包装标签、健康警示和销售限制要求。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">生产商和进口商应依法取得NPPBKC，并办理消费税税率核定、零售价格申报、品牌登记和消费税税票等手续。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">液体电子烟根据产品结构分为开放式液体电子烟和封闭式液体电子烟，均需缴纳消费税，还应按照消费税额的10%缴纳卷烟税。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">电子烟尼古丁含量受法定上限管理。生产商和进口商应对每个产品变体的尼古丁含量进行检测，并按照规定向BPOM报告检测结果。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">生产商和进口商还应按照规定向BPOM报告产品成分等相关资料。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">来源不明、成分不明、违法添加、含毒品或含违禁成分的烟液，是BPOM和执法机关重点关注的风险。</span>
                  </div>
                </div>
              </>}
            />
            {/* 2.3 电子烟设备 */}
            <StatusCard
              id="product-ecig-device"
              status="green"
              title="电子烟设备"
              customLabel="可准入"
              className="indonesia-product-access-card"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：电子烟设备、雾化器、HNB加热设备、加热组件</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">单独销售且不含烟液、烟弹、HNB烟支、加热烟草棒或其他烟草制品的设备，不属于消费税法规所定义的电子烟产品。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">单独进口或销售设备时，不因设备本身缴纳烟草制品消费税或卷烟税，也不因设备本身申领烟草制品消费税税票。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">设备应符合适用的进口、产品安全、标签、消费者保护和一般商品流通要求。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">设备与HNB烟支、加热烟草棒、烟弹或烟液组合进口或组合销售的，应将设备与相关烟草制品分别申报，并分别判断消费税、卷烟税、税票、标签和流通要求。</span>
                  </div>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>
        </div>

        {/* 3. 无烟烟草及新型尼古丁产品 */}
        <ProductModuleCard title="3. 无烟烟草及新型尼古丁产品" label="产品定性">
          <div className="indonesia-product-access-nature indonesia-product-access-nature-text space-y-2 mb-4">
            <BulletPoint>该类产品不通过燃烧使用，也不通过电子加热装置吸入使用。印尼现行《健康法》及《健康法》实施条例主要针对"烟草制品"和"电子烟"设置监管规则，尚未对尼古丁袋、尼古丁口含膜等新型口腔尼古丁产品建立清晰、专门的定义和准入路径。</BulletPoint>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              id="product-smokeless-tobacco"
              status="green"
              title="无烟烟草产品"
              customLabel="可准入"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：口含烟、鼻烟、嚼烟及其他含烟草但不经燃烧吸用的产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">含烟草材料的口含、鼻吸、咀嚼类产品，应按烟草制品或其他加工烟草制品方向判断。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">进入印尼本土市场生产、流通或销售时，应关注 NPPBKC、消费税、税票、包装标签和销售限制要求。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">如产品同时添加尼古丁、采用袋状 / 片状 / 膜状等新型形态，或以尼古丁摄入为主要卖点，应转入"新型尼古丁产品"口径判断。</span>
                  </div>
                </div>
              </>}
            />
            <StatusCard
              id="product-novel-nicotine"
              status="amber"
              title="新型尼古丁产品"
              customLabel="部分限制 / 监管要求不明确"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：尼古丁袋、尼古丁口含膜、尼古丁含片及其他不含烟草但含尼古丁的口含类产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">尼古丁袋 / 尼古丁口含膜不通过电子加热装置吸入使用，不属于电子烟。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">使用烟草来源尼古丁、烟草提取物或其他烟草成分的，稳妥口径下应按其他加工烟草制品或 BKC 路径处理。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">使用合成尼古丁且全链条不含烟草叶或烟草提取物的，是否属于烟草制品仍存在争议；现行公开规则下缺乏稳定、明确的专项准入路径。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">产品名称、标签、说明和宣传材料不得宣称戒烟、治疗、尼古丁替代或其他健康功效；出现该类表达的，可能转入 BPOM 药品监管路径。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">在印尼生产、进口或销售该类产品前，应先确认产品定性、税务归类、上市路径和销售限制。</span>
                  </div>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>

        {/* 4. 烟草原料 */}
        <ProductModuleCard title="4. 烟草原料" label="产品定性" id="product-tobacco-raw">
          <div className="indonesia-product-access-nature indonesia-product-access-nature-text space-y-2 mb-4">
            <BulletPoint>烟草薄片、烟叶主要作为烟草原料或半成品管理；具体监管要求取决于产品形态、是否进入应税消费品生产链条，以及是否涉及进口批准要求。</BulletPoint>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              id="product-tobacco-sheet"
              status="green"
              title="烟草薄片"
              customLabel="可准入，通常限于工厂自用"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：烟草薄片</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">烟草薄片应先区分工业原材料、半成品和可供消费者直接使用的成品形态。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">作为工业原材料使用时，通常不需要 NPPBKC；进口通常需要 PI（进口批准书），且一般限于工厂自用。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">如烟草薄片被加工或包装成消费者可直接使用的产品，应重新判断是否转入烟草制品或其他应税消费品路径。</span>
                  </div>
                </div>
              </>}
            />
            <StatusCard
              id="product-tobacco-leaf"
              status="green"
              title="烟叶"
              customLabel="可准入，但进口受政府管理"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：烟叶</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">烟叶应先区分原料用途、加工用途和消费者直接使用用途。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">烟叶作为原材料使用时，不因其本身当然触发 NPPBKC；作为消费者可直接使用或销售的产品时，可能转入烟草制品或其他应税消费品路径。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">烟叶进口需要 PI（进口批准书），并受国内烟叶供需、特定品种需求和政府进口管理影响。</span>
                  </div>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>

        {/* 5. 普通辅材及香精香料 */}
        <ProductModuleCard title="5. 普通辅材" label="产品定性" id="product-ordinary-material">
          <div className="indonesia-product-access-nature indonesia-product-access-nature-text space-y-2 mb-4">
            <BulletPoint>爆珠、香精胶囊、滤嘴棒和香精香料主要作为普通辅材或配套材料管理；是否进入烟草制品、电子烟、雾化液、应税消费品或其他专项监管路径，应按成分和产品形态判断。</BulletPoint>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              id="product-bead"
              status="green"
              title="爆珠 / 香精胶囊"
              customLabel="可准入，需按成分确认"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：不含尼古丁、烟草成分或烟草提取物的爆珠、香精胶囊</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">不含烟草提取物或尼古丁、仅作为普通辅材使用的，通常不需要 NPPBKC。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">含烟草提取物或尼古丁的，应判断是否转入烟草制品、其他烟草加工产品或应税消费品路径。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">如作为电子烟液、烟弹、HNB 烟支、尼古丁产品或消费者直接使用产品的一部分销售，应同步适用对应产品路径。</span>
                  </div>
                </div>
              </>}
            />
            <StatusCard
              id="product-filter"
              status="green"
              title="滤嘴棒"
              customLabel="可准入"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：滤嘴棒</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">滤嘴棒作为烟草配件或原辅料通常可准入。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">公开资料未见滤嘴棒本身需要 NPPBKC、PI（进口批准书）、BPOM 产品注册或 Halal 认证。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">如滤嘴棒含烟草提取物、尼古丁、药物成分、香味释放功能或其他特殊功能，应结合具体成分和用途重新确认监管要求。</span>
                  </div>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>
      </ProductAccessSection>

      {/* 四、合规资质 */}
      <ComplianceSection sectionId="licenses" country={country}>
        <div className="indonesia-license-intro bg-[#F3F5FB] border-l-4 border-[#4A6290] p-4 mb-6">
          <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] leading-[1.6] text-justify">
            印尼烟草及尼古丁相关业务的资质判断，应先看经营主体是否已取得基础经营身份，再看产品是否属于应税消费品、限制类进口商品、电子烟或特殊区域经营项目。不同产品在 NPPBKC、PI 进口批准、BPOM 路径和 Halal 认证上的要求并不相同。
          </p>
        </div>

        <div className="indonesia-license-overview bg-[#F1F5F9] rounded-lg p-6 mb-6">
          <h3 className="text-[#2E3F73] font-bold text-lg mb-4">烟草企业主要资质与认证要求概览</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="indonesia-license-overview-card bg-white rounded-lg p-7 shadow-sm border border-[#E2E8F0]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-[#4A6290] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#2E3F73]" style={{fontSize:'18px', lineHeight:'1.45'}}>一、经营者识别号（NIB）</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">注册系统：</span>企业通常先有 NIB，并在注册系统中标注进口人类型（相当于 API 身份）。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B7FA6] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">① API-P：</span>进口用于自家生产/经营自用。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B7FA6] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">② API-U：</span>进口用于贸易流通。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">风险等级与许可生效：</span></span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B7FA6] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]">烟草/尼古丁相关业务多属于中高/高风险，需"激活NIB"，许可证方可生效。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B7FA6] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]">中高风险对应证书为 Sertifikat Standar</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B7FA6] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]">高风险对应证书为 Izin Usaha。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">激活前置条件：</span>需先完成环评、厂房装修、设备装配及政府验厂。</span>
                </div>
              </div>
            </div>

            <div className="indonesia-license-overview-card bg-white rounded-lg p-7 shadow-sm border border-[#E2E8F0]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-[#64748B] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#2E3F73]" style={{fontSize:'18px', lineHeight:'1.45'}}>二、其他关键资质</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">NPPBKC：</span>应税消费品经营者许可</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B7FA6] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]">不是所有烟草制品都属于"应税消费品"（BKC）。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B7FA6] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]">比如作为原材料的烟草薄片，就不是BKC。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B7FA6] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]">若企业拟烟草类的应税消费品，应先取得 NPPBKC。取得后方可依法生产与流通。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B7FA6] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]">由印尼海关与消费税总局核发，用于确认企业获准在消费税领域开展活动。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">PI（进口批准书）：</span>针对限制类进口商品设立的配额型批准机制。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A6290] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">巴淡岛（自由贸易区）货物进出要求：</span>通常需办理相关区域许可（如 IUK），并满足场地合规前置要求（例如空间利用/用地合规 PKKPR 等）。</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-base" style={{ tableLayout: 'auto' }}>
            <colgroup>
              <col style={{ width: '14%' }} />
              <col style={{ width: '32%' }} />
              <col style={{ width: '16%' }} />
              <col style={{ width: '26%' }} />
              <col style={{ width: '12%' }} />
            </colgroup>
            <thead>
              <tr className="bg-[#E8EDF5]">
                <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]">产品</th>
                <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]">NPPBKC</th>
                <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]">PI 进口批准</th>
                <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED]">BPOM 注册</th>
                <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b border-[#D8DDED] whitespace-nowrap">Halal 认证</th>
              </tr>
            </thead>
            <tbody>
              {country.compliance.table.map((row, index) => (
                <tr key={index} className="hover:bg-[#F8FBFF]">
                  <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155]">{row.product}</td>
                  <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155]"><TableCellContent content={row.nppbkc} /></td>
                  <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155]"><TableCellContent content={row.piImportApproval} /></td>
                  <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155]"><TableCellContent content={row.bpomRegistration} /></td>
                  <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155] whitespace-nowrap"><TableCellContent content={row.halalCertification} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden">
          <div className="indonesia-license-mobile-group-heading">
            不同产品类别的资质要求对比
          </div>
          <p className="indonesia-license-mobile-group-note">
            以下卡片按照产品类别拆分展示 NPPBKC、PI 进口批准、BPOM 注册及 Halal 认证要求。
          </p>
          <div className="space-y-3">
            {country.compliance.table.map((row, index) => (
              <div key={index} className="indonesia-license-mobile-card bg-white border border-[#E2E6EF] rounded-xl p-4">
                <div className="indonesia-license-mobile-title font-bold text-[#263247] mb-3">{row.product}</div>
                <div className="space-y-2">
                  <div>
                    <div className="indonesia-license-mobile-label font-semibold text-[#2E3F73] mb-1">NPPBKC</div>
                    <div className="indonesia-license-mobile-body text-[#334155]"><TableCellContent content={row.nppbkc} /></div>
                  </div>
                  <div>
                    <div className="indonesia-license-mobile-label font-semibold text-[#2E3F73] mb-1">PI 进口批准</div>
                    <div className="indonesia-license-mobile-body text-[#334155]"><TableCellContent content={row.piImportApproval} /></div>
                  </div>
                  <div>
                    <div className="indonesia-license-mobile-label font-semibold text-[#2E3F73] mb-1">BPOM 注册</div>
                    <div className="indonesia-license-mobile-body text-[#334155]"><TableCellContent content={row.bpomRegistration} /></div>
                  </div>
                  <div>
                    <div className="indonesia-license-mobile-label font-semibold text-[#2E3F73] mb-1">Halal 认证</div>
                    <div className="indonesia-license-mobile-body text-[#334155]"><TableCellContent content={row.halalCertification} /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ComplianceSection>

      {/* 五、税收政策 */}
      <TaxSection
        sectionId="tax"
        introText={
          <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="indonesia-tax-intro-text text-[#334155] text-base leading-[1.6]">
            印尼烟草及尼古丁相关产品的税务判断，核心看两点：产品是否属于 BKC（应税消费品），以及产品是否进入印尼本土市场流通。
          </p>
        }
      >
        <TaxTableCard title="1. 消费税 Cukai">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">适用对象：</span>仅适用于被认定为 BKC 的货物，例如传统卷烟、HNB 烟支、电子烟液、部分含烟草或尼古丁属性的成品。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">核心逻辑：</span>BKC 产品在印尼国内流通链条中，应按规定完成消费税申报、缴纳和监管要求。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">税额计算：</span>印尼消费税按产品类别以固定税额征收，传统烟草产品通常按每支或每克计征，电子烟液等液体产品通常按每毫升计征。具体税额受产品类别、生产者分组和最低零售指导价 HJE 档位影响。</span>
            </div>
          </div>
        </TaxTableCard>

        <TaxTableCard title="2. 税票 Pita Cukai">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">性质：</span>税票不是独立税种，是 BKC 产品已经完成消费税管理、允许进入本土流通的关键合规标识。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">适用规则：</span>BKC 产品在印尼本土流通时，应依法贴附消费税税票；非 BKC 产品不适用消费税，也不需要贴附消费税税票。</span>
            </div>
          </div>
        </TaxTableCard>

        <TaxTableCard title="3. 卷烟税 Pajak Rokok">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]">根据第26/2026号财政部长条例，卷烟税以政府核定的卷烟消费税为计税基础，税率为卷烟消费税额的10%。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">征税范围：</span>卷烟、雪茄、烟叶卷烟（rokok daun）和电子烟。电子烟包括固体电子烟、开放式液体电子烟和封闭式液体电子烟；HNB烟支、加热烟草棒属于固体电子烟。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]">下列产品不属于卷烟税征税范围：切丝烟草、糖蜜烟草、鼻烟、嚼烟及其他依法归入其他烟草加工产品的产品。需注意，消费税和卷烟税属于不同税种。上述产品不征收卷烟税，但仍应按照相应烟草制品类别缴纳消费税并贴附消费税税票。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">计税方式：</span></span>
            </div>
            <div className="ml-6 mb-2">
              <span className="text-base leading-[1.6] text-[#334155] font-semibold">应缴卷烟税＝相应产品的卷烟消费税额×10%</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">缴纳时点：</span></span>
            </div>
            <div className="ml-6 space-y-1">
              <div className="text-base leading-[1.6] text-[#334155]">① 卷烟税由持有NPPBKC的卷烟工厂经营者、生产商和进口商自行计算申报，并由海关与消费税机关在征收卷烟消费税时一并征收。</div>
              <div className="text-base leading-[1.6] text-[#334155]">② 卷烟税申报书（SPPR）原则上与消费税税票订购申请CK-1一并提交。</div>
              <div className="text-base leading-[1.6] text-[#334155]">③ 获准延期缴纳卷烟消费税的，卷烟税可以按照相同期限延期缴纳。</div>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">注意事项：</span></span>
            </div>
            <div className="ml-6 space-y-1">
              <div className="text-base leading-[1.6] text-[#334155]">① SPPR、CK-1及实际缴款数据应保持一致。产品类别、经营者等级、零售价格类别或者消费税计算错误，可能同步导致卷烟税少缴。</div>
              <div className="text-base leading-[1.6] text-[#334155]">② 卷烟税未足额缴纳的，海关与消费税机关可以暂停办理后续CK-1或者消费税税票，直至相关税款缴清。</div>
            </div>
          </div>
        </TaxTableCard>

        <TaxTableCard title="4. 增值税 PPN">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">烟草制品 PPN：</span>烟草制品适用特殊增值税折算机制，通常以 HJE 作为折算基础，按 9.9% × HJE 计征。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">原材料及一般货物 PPN：</span>烟草原料、普通辅材、设备及其他一般货物，通常按一般 PPN 规则处理。</span>
            </div>
          </div>
        </TaxTableCard>

        <TaxTableCard title="5. 巴淡岛自由贸易区税务提示">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">区内流转：</span>巴淡岛 KPBPB 内的税费便利原则上仅限区内使用、区内仓储或区内监管流转。一般货物在满足条件时，可适用关税、进口环节税和 PPN 的免征、不征或暂缓安排。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">出区进入印尼本土：</span>货物从 KPBPB 区域进入印尼本土非自由区销售或流通时，通常按进入印尼关境 / 国内流通处理，相应关税、进口环节税、PPN 等需要补缴。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="flex-1 min-w-0 text-base leading-[1.6] text-[#334155]"><span className="font-semibold text-[#334155]">BKC 产品：</span>BKC 产品应单独判断消费税和卷烟税。巴淡岛原先针对烟、酒、乙醇等 BKC 的消费税便利已在 2019 年被取消；烟草制品如属于 BKC，即使在巴淡岛内经营，也应按规定缴纳消费税，并相应判断卷烟税要求。</span>
            </div>
          </div>
        </TaxTableCard>
      </TaxSection>

      {/* 六、市场运营规范 */}
      <MarketOperationSection sectionId="operation-rules">
        <div className="grid md:grid-cols-2 gap-x-5 gap-y-6">
          <RuleModuleCard number={1} title="销售与陈列">
            <DotList className="space-y-3" textClassName="text-base leading-[1.6] font-normal" dotClassName="mt-[7px]" items={[
              '不得向 21 岁以下人员及孕妇销售烟草制品和电子烟',
              '不得单支零售传统卷烟；雪茄和电子烟产品除外',
              '不得在教育机构和儿童游乐场 200 米范围内销售烟草制品和电子烟',
              '不得将烟草制品和电子烟陈列在出入口、收银动线或人流密集区域附近',
              '通过商业网站、应用程序或其他线上渠道销售的，应设置有效年龄验证机制',
            ]} />
          </RuleModuleCard>
          <RuleModuleCard number={2} title="赞助、促销与 CSR">
            <DotList className="space-y-3" textClassName="text-base leading-[1.6] font-normal" dotClassName="mt-[7px]" items={[
              '禁止免费赠送、打折促销、附赠烟草或电子烟产品',
              '禁止将烟草或电子烟品牌用于非烟草 / 非电子烟产品',
              '赞助活动不得使用烟草或电子烟商标、品牌标识或品牌形象',
              'CSR 活动不得以推广烟草或电子烟为目的',
              'CSR 活动不得免费发放烟草或电子烟产品，也不得作为奖品、折扣或赠品',
              'CSR 或赞助活动不得由媒体报道或公开宣传',
            ]} />
          </RuleModuleCard>
          <RuleModuleCard number={3} title="广告与宣传">
            <DotList className="space-y-3" textClassName="text-base leading-[1.6] font-normal" dotClassName="mt-[7px]" items={[
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
          <RuleModuleCard number={4} title="包装与标签">
            <DotList className="space-y-3" textClassName="text-base leading-[1.6] font-normal" dotClassName="mt-[7px]" items={[
              '烟草制品和电子烟包装均需标注图文健康警示；健康警示应位于包装正反面宽面上方区域，各占 50%',
              '包装应标注禁止向 21 岁以下人员及孕妇销售、批号、生产日期、生产者名称和地址等基础信息',
              '烟草制品包装应标注尼古丁和焦油声明；电子烟包装应标注含尼古丁声明',
              '电子烟产品应关注尼古丁 / 焦油含量、成分和添加剂资料、上市前检测及流通过程验证要求',
              '包装规格需符合分类要求：机制白香烟每包至少 20 支；碎烟草制品每包重量不得超过 50 克；封闭式电子烟每支烟弹液体尼古丁含量不得超过 2 毫升，且每包烟弹不得超过 2 支；开放式电子烟液态尼古丁通常以 10 毫升或 20 毫升容器包装；固体电子烟每包应包含 20 个单位',
              '不得使用暗示安全、低风险、健康利益或鼓励消费的误导性、促销性标识',
              '出口产品如不符合印尼本地包装要求，应先向海关备案并取得批准',
            ]} />
          </RuleModuleCard>
        </div>
      </MarketOperationSection>

      {/* 七、监管趋势与红线警告 */}
      <TrendAndRedLinesSection
        sectionId="trend"
        trendId="trend-item"
        redLineId="red-lines"
        trendContent={
          <>
            <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] text-justify mb-4">印尼目前没有明显信号显示将对传统烟草、HNB或电子烟实施全国性全面禁令。2026年以来可观察到的监管方向主要包括：</p>
            <BulletList items={[
              '对非法卷烟和无税票产品持续高压执法，海关及消费税总局查处数量明显增加。',
              '电子烟监管更关注流通端和非法产品，特别是含毒品电子烟液、违禁成分、BPOM流通监管、年龄限制、包装警示和广告限制。',
              '消费税政策可能继续围绕非法市场治理调整，但是否新增税收层级、如何调整税率结构，仍存在政策讨论和争议。',
            ]} />
            <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] text-justify mt-4">整体看，印尼仍是烟草及新型烟草产品可准入且相对友好的市场，政策重点是把产品纳入合法资质、税务、包装和销售监管体系，维持合法市场秩序并压缩非法流通空间。传统卷烟和HNB的重点风险在税票、NPPBKC、清关和包装；电子烟的重点风险在BPOM监管、成分和非法烟液；尼古丁袋/口含膜的重点风险在产品定性和主管机关口径不稳定。</p>
          </>
        }
        redLineGroups={[
          {
            title: '主体资质与经营范围',
            items: [
              '严禁无证或超出许可范围，在印尼生产、进口、仓储、分销或销售烟草制品、电子烟、HNB 烟支及相关尼古丁产品。',
              '严禁未取得或未正确使用 NPPBKC、PI（进口批准书）等必要资质，即开展应税消费品或限制类进口商品经营活动。',
            ]
          },
          {
            title: '税务、税票与清关',
            items: [
              '严禁在印尼本土销售未贴附消费税税票的 BKC 产品。',
              '严禁走私、低报价格、错报品名、错报 HS 编码、错报用途，或通过拆分申报、混装、转运等方式规避消费税、卷烟税、PPN及进口环节税费。',
              '严禁将仅限保税区、自由贸易区或工厂自用的货物，未经依法申报和补税擅自流入印尼本土市场。',
            ]
          },
          {
            title: '销售对象、销售地点与线上销售',
            items: [
              '严禁向 21 岁以下人员及孕妇销售、供应或免费提供烟草制品和电子烟。',
              '严禁在教育机构和儿童游乐场 200 米范围内销售烟草制品和电子烟。',
              '严禁通过未设置有效年龄验证机制的网站、应用程序或其他线上渠道销售烟草制品和电子烟。',
              '严禁使用自动售货机销售烟草制品和电子烟；严禁违规单支零售传统卷烟。',
            ]
          },
          {
            title: '包装、标签与广告宣传',
            items: [
              '严禁使用未经批准、不符合要求或缺少图文健康警示的包装、标签和产品说明。',
              '严禁在数字社交媒体违法发布烟草制品或电子烟广告。',
              '严禁在广告、包装、标签、说明书或宣传材料中作出减害、安全、低风险、健康、治疗、戒烟、尼古丁替代等未经批准的功效宣称。',
              '严禁使用面向未成年人、孕妇或明显吸引未成年人的形象、语言、卡通、动画或促销表达。',
            ]
          },
          {
            title: '产品成分与流通安全',
            items: [
              '严禁生产、进口、销售来源不明、成分不明、检测资料缺失或添加违禁成分的电子烟液、烟弹、一次性电子烟及其他含尼古丁产品。',
              '严禁以普通辅材、普通香精、普通消费品名义销售实际含烟草提取物、尼古丁或可供消费者直接使用的烟草 / 尼古丁产品。',
            ]
          },
          {
            title: '知识产权、危险物质与废弃物',
            items: [
              '严禁未经 FTO 或知识产权核查，擅自生产、进口或销售可能侵权的产品、包装、商标、外观或技术方案。',
              '严禁非法采购、储存、使用、运输、销售或处置 B3 危险物质及危险废物。',
            ]
          },
        ]}
      />

      {/* 八、重要资讯 */}
      <ReferencesSection
        sectionId="resources"
        tipText="以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。印尼相关法律、政府条例和主管机关口径可能经过后续修订或更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。"
        regulationContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="公共健康与产品监管">
              <ReferenceItem
                url="https://jdih.kemkes.go.id/documents/law-of-the-republic-of-indonesia-number-17-of-2023"
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
                url="https://jdih.kemenkeu.go.id/dok/pmk-96-tahun-2024"
                title="《财政部第96/2024号部长规章》（PMK 96/2024）"
                description="修改电子烟及其他烟草加工产品消费税规则，调整电子烟、HPTL 等产品的消费税税率、最低零售价格、市场交易价格监测和相关税务管理要求。"
              />
              <ReferenceItem
                showSeparator
                url="https://ptpsi.com/wp-content/uploads/2026/05/PMK-Nomor-26-Tahun-2026.pdf"
                title="《财政部第26/2026号部长条例》（PMK 26/2026）"
                description="自2026年5月12日起施行，并废止第143/2023号财政部长条例。该条例重新规定卷烟税的征收、申报缴纳、少缴追缴、收入缴存和地方分配机制，并细化卷烟税用于公共卫生、健康保障和执法的安排。条例维持卷烟税按卷烟消费税额的10%计征，同时进一步明确电子烟属于卷烟税征税范围，切丝烟草及糖蜜烟草、鼻烟、嚼烟等其他烟草加工产品不属于卷烟税征税范围。"
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
              url="https://media.kemenkeu.go.id/getmedia/35d43141-006f-4197-982d-8eebb09e9469/Newsletter-APBN-KITA-Februari-2026-%281%29.pdf?ext=.pdf"
              title="2026年2月｜印尼海关1月查获约2.49亿支非法卷烟"
              description="印尼海关及消费税总局在2026年1月查获约2.49亿支非法卷烟，说明非法卷烟和未贴税票产品仍是执法重点。"
            />
            <ReferenceItem
              showSeparator
              url="https://tobaccoreporter.com/2026/04/16/indonesia-to-enforce-new-vape-rules-from-july/"
              title="2026年4月｜电子烟新规执行时间和重点要求受到市场关注"
              description="PP 28/2024 项下电子烟规则预计自2026年7月起进入执行阶段，重点涉及21岁最低购买年龄、广告限制、尼古丁含量、图文健康警示和无烟区等要求。"
            />
            <ReferenceItem
              showSeparator
              url="https://ptpsi.com/wp-content/uploads/2026/05/PMK-Nomor-26-Tahun-2026.pdf"
              title="2026年5月｜印尼颁布新的卷烟税征收、缴存和分配规则"
              description="印尼财政部第26/2026号条例于2026年5月12日生效，并取代第143/2023号条例。新规全面调整卷烟税的申报缴纳、少缴追缴、中央向地方缴存、地方收入分配及健康保障资金扣划机制，同时维持卷烟税按卷烟消费税额的10%计征。对生产商和进口商而言，新规进一步明确电子烟属于征税范围，切丝烟草及部分其他烟草加工产品不征收卷烟税，并继续将卷烟税缴纳与消费税税票办理相衔接。"
            />
            <ReferenceItem
              showSeparator
              url="https://www.pom.go.id/berita/bpom-soroti-ancaman-zat-adiktif-pada-rokok-elektronik-bagi-generasi-muda"
              title="2026年5月｜BPOM 将加强电子烟流通监管，重点关注非法或含违禁成分烟液"
              description="BPOM 表示将加强电子烟流通监管，并与国家禁毒机构 BNN 协作应对含毒品或违禁成分电子烟液问题；BPOM并未支持直接实施电子烟全面禁令。"
            />
          </ReferenceGroupCard>
        }
      />
    </CountryPageTemplate>
  );
}
