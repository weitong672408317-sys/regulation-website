'use client';
import React from 'react';
import type { CountryData } from '../../../../data/countryTypes';
import {
  StatusCard, RuleCard,
  ComplianceLicenseCards, GenericComplianceTable,
  TableCellContent
} from '../CountryComponents';
import { ProductAccessOverviewSection } from '../sections';
import { russiaProductAccessOverview } from '../../../data/productAccessOverview';
import {
  CountryPageTemplate,
  SeasonSummarySection,
  RegulatorySystemSection,
  ProductAccessSection,
  ProductModuleCard,
  ComplianceSection,
  TaxSection,
  TaxTableCard,
  MarketOperationSection,
  TrendAndRedLinesSection,
  RedLineBox,
  ReferencesSection,
  ReferenceGroupCard,
  ReferenceItem,
  SubCard,
  BulletList,
  BulletPoint,
  SectionCard
} from '../sections';

interface RussiaPageProps {
  country: CountryData;
}

export default function RussiaPage({ country }: RussiaPageProps) {
  const isRussiaStyle = true;

  return (
    <CountryPageTemplate>
      <ProductAccessOverviewSection data={russiaProductAccessOverview} sectionId="product-access-overview" useMobileCards />
      <SeasonSummarySection
        sectionId="overview"
        introText="2026年6月26日，俄罗斯通过第186-FZ号联邦法律《关于修改俄罗斯联邦若干立法法案》、第187-FZ号联邦法律《关于修改俄罗斯联邦税法典第二部分第333.33条》及第188-FZ号联邦法律《关于修改俄罗斯联邦刑法典第171.3条》。本次调整重点集中在经营许可、地方零售监管、电子烟地区差异、流通合规和无证经营责任。"
        items={[
          {
            title: '经营端许可扩大',
            content: '第186-FZ号联邦法律新增采购/储存/供应、普通零售、车辆流动零售三类许可，相关经营活动将自2027年3月1日起强制持证。监管范围由生产、进出口等环节进一步延伸至批发、仓储、固定门店零售和车辆流动零售。'
          },
          {
            title: '零售监管权限下沉',
            content: '第186-FZ号联邦法律明确，各联邦主体负责烟草及含尼古丁产品零售的区域国家监管，并负责普通零售和车辆流动零售许可；教育机构周边禁售区域也由地方机关按联邦规则具体划定。'
          },
          {
            title: '电子烟地方禁售授权',
            content: '2027年3月1日至2032年3月1日期间，各联邦主体可通过本地区法律禁止零售电子尼古丁递送系统及其液体。目前并非全国统一禁售，但俄罗斯电子烟市场可能出现不同地区监管条件不一致的情况。'
          },
          {
            title: '流通合规与无证经营责任',
            content: '第186-FZ号联邦法律强化原料和尼古丁原料的系统信息报送、合法流通文件、交易对手许可证核查和仓储接收责任；第188-FZ号联邦法律将达到相应金额标准的无证经营行为纳入刑事责任范围。'
          }
        ]}
      />

      <RegulatorySystemSection
        sectionId="regulatory-system"
        cards={[
          {
            title: '核心特征',
            content: (
              <BulletList items={[
                '俄罗斯属于烟草及含尼古丁产品可准入但强监管的市场。传统烟草、加热烟草、电子烟及相关液体等产品仍有合规准入空间，但生产、进口、流通和零售环节通常涉及许可、标识追溯、税费和销售限制。',
                '俄罗斯监管呈现"技术规则 + 联邦监管 + 地方执行"的三层结构：欧亚经济联盟规则主要管产品技术和标签；联邦规则统一管准入、许可和流通；地方规则主要影响零售端执行。尤其是电子烟及相关液体，联邦层面仍保留合规准入空间，但地方可在授权期间自行决定是否禁止零售，未来可能出现地区监管差异。',
                '无烟烟草和新型尼古丁产品实行分类监管。snus、nasvay、食品型尼古丁产品，以及用于口含、鼻吸、咀嚼的非烟草尼古丁产品禁止批发和零售；其他未明确禁止的无烟烟草产品仍需结合产品形态、成分和用途判断。'
              ]} />
            )
          },
          {
            title: '规则体系',
            content: (
              <>
                <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] mb-3">俄罗斯烟草及含尼古丁产品监管主要由三层规则构成：</p>
                <BulletList items={[
                  <><strong>欧亚经济联盟技术规则</strong>：主要影响产品技术要求、包装标签、健康警示、消费者信息和符合性声明。</>,
                  <><strong>联邦监管规则</strong>：主要规定产品准入、生产流通许可、数字标识和监测信息系统、合法流通文件、税费、价格、广告/销售限制和法律责任。</>,
                  <><strong>地方执行规则</strong>：主要影响零售端落地执行，包括零售许可、区域零售监管、教育机构周边禁售区域划定，以及电子烟及相关液体的地方零售禁售安排。</>
                ]} />
                <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] mt-3">对同一产品，通常需要同时判断其技术合规、联邦准入和流通规则、地方零售执行要求，以及具体经营环节对应的许可和标识追溯要求。</p>
              </>
            )
          },
          {
            title: '监管部门',
            content: (
              <BulletList items={[
                <><strong>联邦酒精和烟草市场监管局</strong>：负责烟草、含尼古丁产品及相关原料的生产、流通许可和监管。</>,
                <><strong>地方主管机关（各联邦主体主管机关）</strong>：负责烟草及含尼古丁产品零售的区域国家监管、零售许可，并承担教育机构周边禁售区域划定、电子烟及相关液体地方零售禁售等地方执行事项。</>,
                <><strong>联邦消费者权益保护和公益监督局</strong>：负责消费者保护、公共卫生、标签、未成年人保护和控烟执法。</>,
                <><strong>联邦税务局</strong>：负责消费税、税务申报和涉税监管。</>,
                <><strong>联邦海关机关</strong>：负责进口申报、商品归类、边境查验、进口税费和走私查处。</>,
                <><strong>联邦反垄断局</strong>：负责广告、促销、赞助和不正当竞争监管。</>
              ]} />
            )
          }
        ]}
      />

      <ProductAccessSection sectionId="product-access">
        <div className="space-y-2 mb-5 russia-product-access-nature">
          <BulletPoint>俄罗斯对烟草、含尼古丁产品及相关原料实行分类监管。传统烟草、加热烟草产品和烟草原料通常按烟草方向判断；电子烟液体、其他含尼古丁产品和尼古丁原料通常按尼古丁方向判断。</BulletPoint>
          <BulletPoint>烟草、含尼古丁产品及原料从生产、投放市场、后续流转到退出流通，均需按要求向监测信息系统传输信息，并保持合法流通文件、系统记录、交易对手资质和货物流向一致。</BulletPoint>
        </div>
        <ProductModuleCard title="1. 传统烟草产品" label="产品定性">
          <div className="space-y-2 mb-4 russia-product-access-nature">
            <BulletPoint>根据 TR CU 035/2014，烟草制品是全部或部分以烟草叶为原料制成，并以消费者包装投放市场的产品。</BulletPoint>
          </div>
          <StatusCard
            status="amber"
            customLabel="可准入，但严格监管"
            title="传统烟草产品"
            id="product-traditional-tobacco"
            content={<>
              <div className="text-sm text-[#334155] mb-2">适用产品：传统卷烟、雪茄、小雪茄、烟丝、烟斗烟、水烟烟草，以及 papirosy（俄式纸嘴卷烟，即一端为烟草段、另一端为较长中空纸嘴的传统燃烧型烟草制品）。</div>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-sm leading-[1.55]">产品本身可准入，但属于强监管烟草制品，主要关注TR CU 035/2014符合性声明、包装标签、健康警示、消费税、最低价格和销售限制。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-sm leading-[1.55]">进入相关经营环节时，应同步关注相应经营资质、数字标识、合法流通文件、系统记录和销售限制要求。</span>
                </div>
              </div>
            </>}
          />
        </ProductModuleCard>

        <ProductModuleCard title="2. 加热烟草产品" label="产品定性">
          <div className="space-y-2 mb-4 russia-product-access-nature">
            <BulletPoint>加热烟草产品通常指含烟草材料、通过加热装置加热后供消费者吸入的产品。</BulletPoint>
          </div>
          <StatusCard
            status="amber"
            customLabel="可准入，但严格监管"
            title="加热烟草产品"
            id="product-heat-not-burn"
            content={<>
              <div className="text-sm text-[#334155] mb-2">适用产品：HNB 烟支、加热消费用烟草</div>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-sm leading-[1.55]">产品本身可准入，主要关注包装标签、数字标识、消费税、最低价格和销售限制。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-sm leading-[1.55]">第15-FZ号法下，加热烟草产品可纳入含尼古丁产品相关控烟和销售限制体系；但在生产、许可和原料路径上，应按加热烟草/烟草产品路径处理。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-sm leading-[1.55]">生产环节应确认许可证登记的产品范围与实际产品一致，避免将加热烟草制品或烟草产品按电子烟液体、其他含尼古丁产品或尼古丁原料路径处理。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-sm leading-[1.55]">进入相关经营环节时，应同步关注相应经营资质、合法流通文件、系统记录和销售限制要求。</span>
                </div>
              </div>
            </>}
          />
        </ProductModuleCard>

        <ProductModuleCard title="3. 电子烟及液体产品" label="分类监管" id="module-ecig">
          <div className="space-y-2 mb-4 russia-product-access-nature">
            <BulletPoint>俄罗斯按产品构成对电子烟相关产品分类监管，主要分类包括设备、液体、预灌装/组合产品和空组件。</BulletPoint>
            <BulletPoint>俄罗斯目前尚未实施全国性电子烟全面禁售，电子烟及相关液体产品仍有合法市场空间。但根据第186-FZ号联邦法律，2027年3月1日至2032年3月1日期间，各联邦主体可通过本地区法律禁止零售电子烟及相关液体。该机制可能导致俄罗斯电子烟市场出现地区监管条件不一致的情况，使该品类面临高于传统烟草和加热烟草产品的地方政策变动风险。</BulletPoint>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <StatusCard
              status="amber"
              customLabel="可准入，但严格监管"
            title="电子烟设备"
              id="product-ecig"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：电子烟设备、雾化器、个人电加热雾化设备、相关装置及组件</div>
                <div className="font-semibold text-[#263247] mb-1">产品定性：</div>
                <p className="text-sm leading-[1.55] mb-3 text-[#334155]">根据第15-FZ号法，尼古丁产品使用装置是指用于产生含尼古丁气溶胶、蒸气或气体，并供使用者吸入的电子或其他装置，包括电子尼古丁输送系统和加热烟草系统，但不包括依法注册为医疗器械或药品的产品。</p>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">可重复使用电子烟及类似个人电加热雾化设备的数字标识仍处于试验/过渡阶段。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">进入进口、供应或零售环节时，应同步关注相应经营资质、数字标识和销售限制。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">进入具体地区销售前，应确认当地是否实施电子烟零售禁售。</span>
                  </div>
                </div>
              </>}
            />

            <StatusCard
              status="amber"
              customLabel="可准入，但严格监管"
            title="烟油 / 电子烟液 / 补充液"
              id="product-e-liquid"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：烟油、电子烟液、补充液、含尼古丁或不含尼古丁的电子烟用液体</div>
                <div className="font-semibold text-[#263247] mb-1">产品定性：</div>
                <div className="space-y-2 mb-3">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">根据第15-FZ号法，尼古丁液体包括尼古丁含量不低于 0.1 mg/ml 的液体。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">无尼古丁液体包括不含尼古丁或尼古丁含量低于 0.1 mg/ml、并用于电子尼古丁输送系统的液体。</span>
                  </div>
                </div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">零售环节不得销售尼古丁浓度超过20 mg/ml的尼古丁液体或尼古丁溶液。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">进入相关经营环节时，应同步关注相应经营资质、数字标识、合法流通文件、系统记录和销售限制要求。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">进入具体地区销售前，应确认当地是否实施电子烟相关液体零售禁售。</span>
                  </div>
                </div>
              </>}
            />

            <StatusCard
              status="amber"
              customLabel="可准入，但严格监管"
            title="烟弹 / 预灌装产品及组合产品"
              id="product-cartridge"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：烟弹 / 预灌装产品、设备与液体组合产品、空烟弹、空雾化组件</div>
                <div className="font-semibold text-[#263247] mb-1">产品定性：</div>
                <p className="text-sm leading-[1.55] mb-3 text-[#334155]">俄罗斯公开法规未见对含液体烟弹、设备与液体组合产品、空烟弹或空容器设置统一单独定义。该类产品需要结合设备部分、液体部分和下游用途拆分判断。</p>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">含液体烟弹、预灌装产品和设备与液体组合产品，应同时判断设备部分和液体部分的监管要求。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">空烟弹、空容器或普通不含液体组件，通常不直接按尼古丁液体处理；如与含尼古丁液体、含液体烟弹或组合产品配套销售，应转入对应产品路径判断。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">进入相关经营环节时，应同步关注设备部分和液体部分对应的经营资质、标识追溯、合法流通文件和系统记录要求。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">进入具体地区销售前，应确认设备部分、液体部分和组合销售形态是否落入当地电子烟零售禁售范围。</span>
                  </div>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="4. 无烟烟草及新型尼古丁产品" label="产品定性">
          <div className="space-y-2 mb-4 russia-product-access-nature">
            <BulletPoint>无烟烟草产品是一个大类。俄罗斯法规主要根据产品成分、使用方式和具体产品类别区分监管，没有对所有无烟烟草产品适用统一准入规则。</BulletPoint>
            <BulletPoint>nasvay、snus、食品型尼古丁产品，以及用于咀嚼、吸吮、鼻吸的尼古丁产品，属于明确禁售产品。</BulletPoint>
            <BulletPoint>咀嚼烟草、鼻烟等无烟烟草产品，在俄罗斯法规体系中仍有合规准入路径，但适用强监管要求。</BulletPoint>
            <BulletPoint>HNB 烟支 / 加热烟草产品不放在本栏目判断，相关信息请参见"加热烟草产品"栏目。</BulletPoint>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <StatusCard
              status="red"
              customLabel="完全禁止"
              title="新型尼古丁产品"
              id="product-novel-nicotine"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：尼古丁袋、尼古丁口含膜、尼古丁含片、尼古丁粉末、尼古丁混合物、食品型尼古丁产品，以及其他不含烟草但含尼古丁的口含、吸吮、咀嚼或鼻吸类产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D04A4A] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">食品型尼古丁产品，以及不含烟草但设计用于口含、吸吮、咀嚼或鼻吸的尼古丁产品，禁止批发和零售。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D04A4A] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">尼古丁袋、尼古丁口含膜、尼古丁含片、尼古丁粉末、尼古丁混合物等产品，属于上述使用方式的，按禁售产品处理。</span>
                  </div>
                </div>
              </>}
            />

            <StatusCard
              status="red"
              customLabel="完全禁止"
              title="特定无烟烟草产品"
              id="product-smokeless-tobacco"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：snus（湿润口含烟草）、nasvay（中亚口含烟草制品）</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D04A4A] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">snus、nasvay禁止批发和零售。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D04A4A] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">产品构成snus或nasvay的，应按禁售产品处理。</span>
                  </div>
                </div>
              </>}
            />

            <StatusCard
              status="amber"
              customLabel="可准入，但严格监管"
              title="大部分无烟烟草产品"
              id="product-non-smoking-tobacco"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：除snus、nasvay及其他法律明确禁售产品以外的无烟烟草产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">未落入明确禁售类别的无烟烟草产品，具有合规准入空间。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">产品应根据具体类别符合技术合规、包装标签、经营资质、数字标识、合法流通文件、系统记录和销售限制要求。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">含烟草材料的无烟烟草产品，应按烟草方向监管；构成snus、nasvay或其他明确禁售产品的，禁止批发和零售。</span>
                  </div>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="5. 烟草及尼古丁原料" label="产品定性" id="module-tobacco-raw">
          <div className="space-y-2 mb-4 russia-product-access-nature">
            <BulletPoint>烟叶、烟草薄片、烟草废料和尼古丁原料主要作为生产原料管理，应结合其成分、用途和下游产品路径判断；已经制成消费者可直接使用产品的，应转入对应成品类别判断。</BulletPoint>
          </div>
          <StatusCard
            status="amber"
            customLabel="可准入，但严格监管"
            title="烟草及尼古丁原料"
            id="product-tobacco-raw"
            content={<>
              <div className="text-sm text-[#334155] mb-2">适用产品：烟叶、烟草薄片、烟草废料、尼古丁原料</div>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-sm leading-[1.55]">原料本身可用于合规生产和加工，但应区分烟草原料和尼古丁原料的监管路径。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-sm leading-[1.55]">进入生产、进口、采购、储存或供应环节时，应同步关注相应经营资质、向监测信息系统传输原料流转信息、合法流通文件、交易对手资质和仓储接收责任。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-sm leading-[1.55]">不得向无相应资质的主体转让原料或尼古丁原料；仓储服务提供者也需关注交货主体是否具备相应资质。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0 text-sm leading-[1.55]">已经制成消费者可直接使用的烟草制品、HNB烟支、电子烟液、尼古丁袋等成品的，应转入对应成品路径判断。</span>
                </div>
              </div>
            </>}
          />
        </ProductModuleCard>

        <ProductModuleCard title="6. 普通辅材" label="产品定性" id="module-ordinary-material">
          <div className="space-y-2 mb-4 russia-product-access-nature">
            <BulletPoint>滤嘴棒、爆珠、香精胶囊和香精香料主要作为普通辅材或配套材料管理；是否进入烟草制品、尼古丁产品、电子烟液或相关生产原料路径，应按成分和产品形态判断。</BulletPoint>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="green"
              customLabel="可准入"
              title="普通辅材"
              id="product-ordinary-material"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：普通香精香料、爆珠、香精胶囊、滤嘴棒及其他不含烟草、尼古丁或烟草提取物的辅材</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">作为普通烟用辅材单独生产、销售的，公开规则未见特殊烟草 / 尼古丁产品专项许可或产品注册要求。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">如产品加入尼古丁、烟草提取物、电子烟液或其他受监管成分，或产品本身构成烟草制品、尼古丁产品、电子烟液或相关生产原料，应转入下列"含尼古丁 / 烟草成分辅材"判断。</span>
                  </div>
                </div>
              </>}
            />

            <StatusCard
              status="amber"
              customLabel="需结合产品特性确认"
              title="含尼古丁 / 烟草成分辅材"
              id="product-nicotine-material"
              content={<>
                <div className="text-sm text-[#334155] mb-2">适用产品：含尼古丁、烟草成分或烟草提取物的辅材</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">含尼古丁、尼古丁原料或电子烟液的，应转入含尼古丁产品、电子烟液或相关生产原料路径判断。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">含烟草提取物或构成烟草基成品组成部分的，应转入烟草制品、烟草产品或烟草原料路径判断。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0 text-sm leading-[1.55]">如该类辅材进入生产、进口、流通或零售环节，应同步确认对应产品路径下的经营资质、标识追溯、合法流通文件、系统记录和销售限制。</span>
                  </div>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>
      </ProductAccessSection>

      <ComplianceSection country={country} isRussiaStyle={isRussiaStyle} sectionId="licenses">
        <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] mb-6 max-md:text-sm max-md:leading-[1.6]">俄罗斯烟草、含尼古丁产品及相关原料的合规资质，主要围绕"经营主体是否持证、产品是否完成技术合规及标识追溯、流转是否有系统记录和合法单证"展开。俄罗斯烟草及含尼古丁产品许可类型可按三类理解：生产端许可、跨境及特殊渠道许可、流通和零售端许可；技术合规、数字标识、监测信息系统和合法流通文件则贯穿生产、进口、流通和零售全过程。</p>

        <div className="space-y-4">
          {/* 卡片一：许可类型 */}
          <TaxTableCard className="max-md:px-3 max-md:py-4" title="">
            <h3 className="flex items-center gap-2 text-lg font-bold text-[#2E3F73] mb-5 max-md:text-base max-md:mb-4">
              <span className="w-6 h-6 rounded-full bg-[#4A6290] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              <span>许可类型</span>
            </h3>
            <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] mb-5 max-md:text-sm max-md:leading-[1.6] max-md:mb-4">俄罗斯烟草及含尼古丁产品许可制度可按经营环节分为三层：生产端许可、跨境及特殊渠道许可、流通和零售端许可。其中，第7类至第9类为2026年新法规新增的经营端许可要求，并自2027年3月1日起强制适用。</p>

            <div className="mb-6 max-md:mb-5">
              <h4 className="font-bold text-[#2E3F73] text-base mb-3 max-md:mb-2">1. 生产端许可：第1类、第2类、第5类</h4>
              <div className="hidden md:block">
                <div className="overflow-x-auto">
                  <table className="w-full table-fixed text-base leading-[1.6] border-collapse border-[#D8DDED]">
                    <thead>
                      <tr className="bg-[#E8EDF5]">
                        <th className="px-3 py-2 text-center align-middle font-semibold text-base leading-[1.5] text-[#2E3F73] border border-[#D8DDED]" style={{ width: '15%' }}>许可证类别</th>
                        <th className="px-3 py-2 text-justify align-middle font-semibold text-base leading-[1.5] text-[#2E3F73] border border-[#D8DDED]" style={{ width: '42.5%' }}>覆盖内容</th>
                        <th className="px-3 py-2 text-justify align-middle font-semibold text-base leading-[1.5] text-[#2E3F73] border border-[#D8DDED]" style={{ width: '42.5%' }}>功能定位</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white/50">
                        <td className="px-3 py-3 text-center align-middle border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">第1类</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">生产烟草产品、含尼古丁产品、烟草原料、尼古丁原料，以及与生产相关的储存和供应</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">产品和原料生产许可。覆盖成品生产，也覆盖原料生产。</td>
                      </tr>
                      <tr className="bg-[#F3F5FB]">
                        <td className="px-3 py-3 text-center align-middle border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">第2类</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">生产烟草产品、含尼古丁产品，以及与生产相关的储存和供应</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">产品生产许可。覆盖成品生产，不覆盖原料生产。</td>
                      </tr>
                      <tr className="bg-white/50">
                        <td className="px-3 py-3 text-center align-middle border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">第5类</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">雪茄生产，以及与生产相关的储存和供应</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">特定产品生产许可，专门针对雪茄。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="md:hidden space-y-3">
                {[
                  ['第1类', '生产烟草产品、含尼古丁产品、烟草原料、尼古丁原料，以及与生产相关的储存和供应', '产品和原料生产许可。覆盖成品生产，也覆盖原料生产。'],
                  ['第2类', '生产烟草产品、含尼古丁产品，以及与生产相关的储存和供应', '产品生产许可。覆盖成品生产，不覆盖原料生产。'],
                  ['第5类', '雪茄生产，以及与生产相关的储存和供应', '特定产品生产许可，专门针对雪茄。']
                ].map((row, idx) => (
                  <div key={idx} className="rounded-xl border border-[#D8E0F0] bg-white p-2.5">
                    <div className="text-base leading-[1.5] font-bold text-[#27406E] max-md:text-sm max-md:leading-[1.5]">{row[0]}</div>
                    <div className="mt-2 text-base leading-[1.6] text-[#334155] space-y-1.5 max-md:text-sm max-md:leading-[1.55]">
                      <div><span className="font-semibold text-[#27406E]">覆盖内容：</span>{row[1]}</div>
                      <div><span className="font-semibold text-[#27406E]">功能定位：</span>{row[2]}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] mt-4 max-md:text-sm max-md:leading-[1.6] max-md:mt-3">第1类和第2类均属于生产类许可证，区别在于第1类覆盖产品和原料，第2类主要覆盖产品。判断企业能否生产某类产品时，还需要看许可证登记的具体产品范围及其属于烟草方向还是尼古丁方向。涉及加热烟草制品或烟草产品的，应按烟草/加热烟草产品路径处理，不宜按电子烟液体、其他含尼古丁产品或尼古丁原料路径替代。</p>
            </div>

            <div className="mb-6 max-md:mb-5">
              <h4 className="font-bold text-[#2E3F73] text-base mb-3 max-md:mb-2">2. 跨境和特殊渠道许可：第3类、第4类、第6类</h4>
              <div className="hidden md:block">
                <div className="overflow-x-auto">
                  <table className="w-full table-fixed text-base leading-[1.6] border-collapse border-[#D8DDED]">
                    <thead>
                      <tr className="bg-[#E8EDF5]">
                        <th className="px-3 py-2 text-center align-middle font-semibold text-base leading-[1.5] text-[#2E3F73] border border-[#D8DDED]" style={{ width: '15%' }}>许可证类别</th>
                        <th className="px-3 py-2 text-justify align-middle font-semibold text-base leading-[1.5] text-[#2E3F73] border border-[#D8DDED]" style={{ width: '42.5%' }}>覆盖内容</th>
                        <th className="px-3 py-2 text-justify align-middle font-semibold text-base leading-[1.5] text-[#2E3F73] border border-[#D8DDED]" style={{ width: '42.5%' }}>功能定位</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white/50">
                        <td className="px-3 py-3 text-center align-middle border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">第3类</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">烟草产品、含尼古丁产品进口后投入流通，以及出口时退出流通</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">成品进口投放及出口退出许可。</td>
                      </tr>
                      <tr className="bg-[#F3F5FB]">
                        <td className="px-3 py-3 text-center align-middle border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">第4类</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">烟草原料、尼古丁原料进口后投入流通，以及出口时退出流通</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">原料进口投放及出口退出许可。</td>
                      </tr>
                      <tr className="bg-white/50">
                        <td className="px-3 py-3 text-center align-middle border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">第6类</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">采购烟草产品和含尼古丁产品用于免税店销售</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">免税贸易渠道许可，与普通国内零售分开管理。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="md:hidden space-y-3">
                {[
                  ['第3类', '烟草产品、含尼古丁产品进口后投入流通，以及出口时退出流通', '成品进口投放及出口退出许可。'],
                  ['第4类', '烟草原料、尼古丁原料进口后投入流通，以及出口时退出流通', '原料进口投放及出口退出许可。'],
                  ['第6类', '采购烟草产品和含尼古丁产品用于免税店销售', '免税贸易渠道许可，与普通国内零售分开管理。']
                ].map((row, idx) => (
                  <div key={idx} className="rounded-xl border border-[#D8E0F0] bg-white p-2.5">
                    <div className="text-base leading-[1.5] font-bold text-[#27406E] max-md:text-sm max-md:leading-[1.5]">{row[0]}</div>
                    <div className="mt-2 text-base leading-[1.6] text-[#334155] space-y-1.5 max-md:text-sm max-md:leading-[1.55]">
                      <div><span className="font-semibold text-[#27406E]">覆盖内容：</span>{row[1]}</div>
                      <div><span className="font-semibold text-[#27406E]">功能定位：</span>{row[2]}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] mt-4 max-md:text-sm max-md:leading-[1.6] max-md:mt-3">第3类和第4类主要区分成品和原料。第6类适用于免税贸易渠道，不等同于普通国内零售许可。</p>
            </div>

            <div>
              <h4 className="font-bold text-[#2E3F73] text-base mb-3 max-md:mb-2">3. 流通和零售端许可：第7类、第8类、第9类</h4>
              <div className="hidden md:block">
                <div className="overflow-x-auto">
                  <table className="w-full table-fixed text-base leading-[1.6] border-collapse border-[#D8DDED]">
                    <thead>
                      <tr className="bg-[#E8EDF5]">
                        <th className="px-3 py-2 text-center align-middle font-semibold text-base leading-[1.5] text-[#2E3F73] border border-[#D8DDED]" style={{ width: '15%' }}>许可证类别</th>
                        <th className="px-3 py-2 text-justify align-middle font-semibold text-base leading-[1.5] text-[#2E3F73] border border-[#D8DDED]" style={{ width: '42.5%' }}>覆盖内容</th>
                        <th className="px-3 py-2 text-justify align-middle font-semibold text-base leading-[1.5] text-[#2E3F73] border border-[#D8DDED]" style={{ width: '42.5%' }}>功能定位</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white/50">
                        <td className="px-3 py-3 text-center align-middle border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">第7类</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">采购、储存及供应烟草产品、含尼古丁产品、烟草原料、尼古丁原料</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">批发、分销、仓储供货许可，适用于中间流通环节。该类许可为2026年新法规新增要求，自2027年3月1日起强制持证。</td>
                      </tr>
                      <tr className="bg-[#F3F5FB]">
                        <td className="px-3 py-3 text-center align-middle border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">第8类</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">普通零售烟草产品和含尼古丁产品</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">固定门店零售许可。该类许可为2026年新法规新增要求，自2027年3月1日起强制持证；原则上"一店一证"。</td>
                      </tr>
                      <tr className="bg-white/50">
                        <td className="px-3 py-3 text-center align-middle border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">第9类</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">车辆流动零售烟草产品和含尼古丁产品</td>
                        <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">车辆流动销售许可。该类许可为2026年新法规新增要求，自2027年3月1日起强制持证；原则上"一车一证"。</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="md:hidden space-y-3">
                {[
                  ['第7类', '采购、储存及供应烟草产品、含尼古丁产品、烟草原料、尼古丁原料', '批发、分销、仓储供货许可，适用于中间流通环节。该类许可为2026年新法规新增要求，自2027年3月1日起强制持证。'],
                  ['第8类', '普通零售烟草产品和含尼古丁产品', '固定门店零售许可。该类许可为2026年新法规新增要求，自2027年3月1日起强制持证；原则上"一店一证"。'],
                  ['第9类', '车辆流动零售烟草产品和含尼古丁产品', '车辆流动销售许可。该类许可为2026年新法规新增要求，自2027年3月1日起强制持证；原则上"一车一证"。']
                ].map((row, idx) => (
                  <div key={idx} className="rounded-xl border border-[#D8E0F0] bg-white p-2.5">
                    <div className="text-base leading-[1.5] font-bold text-[#27406E] max-md:text-sm max-md:leading-[1.5]">{row[0]}</div>
                    <div className="mt-2 text-base leading-[1.6] text-[#334155] space-y-1.5 max-md:text-sm max-md:leading-[1.55]">
                      <div><span className="font-semibold text-[#27406E]">覆盖内容：</span>{row[1]}</div>
                      <div><span className="font-semibold text-[#27406E]">功能定位：</span>{row[2]}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] mt-4 max-md:text-sm max-md:leading-[1.6] max-md:mt-3">第7类至第9类是2026年新法规将许可监管延伸至批发、仓储、普通零售和车辆流动零售后的新增要求，因此设置了自2027年3月1日起强制持证的过渡安排。第1类、第2类项下的"供应"属于生产后供货环节，不等同于面向消费者的普通零售；固定门店零售和车辆流动零售应分别关注第8类和第9类许可。</p>
            </div>
          </TaxTableCard>

          {/* 卡片二：技术合规 / 符合性声明 */}
          <TaxTableCard className="max-md:px-3 max-md:py-4" title="">
            <h3 className="flex items-center gap-2 text-lg font-bold text-[#2E3F73] mb-5 max-md:text-base max-md:mb-4">
              <span className="w-6 h-6 rounded-full bg-[#4A6290] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              <span>技术合规 / 符合性声明</span>
            </h3>
            <div className="space-y-4 max-md:space-y-3">
              <div>
                <div className="flex items-start gap-2 mb-2 max-md:mb-1.5">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#6B7FA6] rounded-[1px] flex-shrink-0 mt-[7px] max-md:mt-[6px]"></span>
                  <p className="font-bold text-[#263247] text-base leading-[1.5] max-md:text-sm max-md:leading-[1.5] compliance-bold-title">哪些产品适用？</p>
                </div>
                <div className="space-y-1.5">
                  <BulletPoint textClassName="text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">俄罗斯市场适用欧亚经济联盟产品技术法规体系。全部或部分以烟草叶作为原料制成，并制备用于吸用、吮吸、咀嚼或嗅闻的烟草制品，适用 TR CU 035/2014《烟草制品技术法规》。</BulletPoint>
                  <BulletPoint textClassName="text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">电子烟产品、尼古丁产品、设备、原料和辅材等未落入上述烟草制品范围的，应结合产品特性另行确认适用的技术规则、标签规则、产品安全规则或俄罗斯国内要求。</BulletPoint>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-2 mb-2 max-md:mb-1.5">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#6B7FA6] rounded-[1px] flex-shrink-0 mt-[7px] max-md:mt-[6px]"></span>
                  <p className="font-bold text-[#263247] text-base leading-[1.5] max-md:text-sm max-md:leading-[1.5] compliance-bold-title">怎么证明符合？</p>
                </div>
                <div className="space-y-1.5">
                  <BulletPoint textClassName="text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">落入 TR CU 035/2014 的烟草制品，应在投放市场前完成产品合格评定。</BulletPoint>
                  <BulletPoint textClassName="text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">实务上需基于产品资料、包装/标签样稿、检测报告和技术文件完成符合性声明登记，并按要求加贴 EAC 标志。</BulletPoint>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-2 mb-2 max-md:mb-1.5">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#6B7FA6] rounded-[1px] flex-shrink-0 mt-[7px] max-md:mt-[6px]"></span>
                  <p className="font-bold text-[#263247] text-base leading-[1.5] max-md:text-sm max-md:leading-[1.5] compliance-bold-title">特别注意什么？</p>
                </div>
                <div className="space-y-1.5">
                  <BulletPoint textClassName="text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">卷烟应核查焦油不超过 10mg/支、尼古丁不超过 1mg/支的限值。</BulletPoint>
                  <BulletPoint textClassName="text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">技术合规或符合性声明不能替代经营许可；完成产品合格评定后，仍需另行判断生产、进口、流通或零售等经营活动是否需要相应许可。</BulletPoint>
                </div>
              </div>
            </div>
          </TaxTableCard>

          {/* 卡片三：数字标识 / 监测信息系统 / 合法流通文件 */}
          <TaxTableCard className="max-md:px-3 max-md:py-4" title="">
            <h3 className="flex items-center gap-2 text-lg font-bold text-[#2E3F73] mb-5 max-md:text-base max-md:mb-4">
              <span className="w-6 h-6 rounded-full bg-[#4A6290] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              <span>数字标识 / 监测信息系统 / 合法流通文件</span>
            </h3>
            <div className="space-y-2 mb-5 max-md:mb-4">
              <BulletPoint textClassName="text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]"><span className="font-semibold text-[#263247]">主体有证：</span>经营主体应持有对应许可证。</BulletPoint>
              <BulletPoint textClassName="text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]"><span className="font-semibold text-[#263247]">产品有码：</span>需要强制标识的产品应有Data Matrix识别码，并在Chestny ZNAK系统中有对应记录。</BulletPoint>
              <BulletPoint textClassName="text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]"><span className="font-semibold text-[#263247]">流转有据：</span>采购、供应、运输、储存、进口、出口等环节应有单证或系统信息证明货物流向。</BulletPoint>
            </div>

            <h4 className="font-bold text-[#2E3F73] text-base mb-3 max-md:mb-2">普通国内流通路径</h4>
            <div className="space-y-2 mb-5 max-md:mb-4">
              <BulletPoint textClassName="text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">普通国内流通产品，是指进入俄罗斯国内市场销售和消费的产品。</BulletPoint>
              <BulletPoint textClassName="text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">监管重点是追踪产品从生产或进口进入市场，到批发、仓储、零售，再到退出流通的全过程。</BulletPoint>
              <BulletPoint textClassName="text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">通常需要完成Data Matrix识别码、Chestny ZNAK系统记录、节点信息报送，以及电子通用转让文件、调整文件或更正文件等单证留存。</BulletPoint>
            </div>

            <h4 className="font-bold text-[#2E3F73] text-base mb-3 max-md:mb-2">特殊流通路径</h4>
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <table className="w-full table-fixed text-base leading-[1.6] border-collapse border-[#D8DDED]">
                  <thead>
                    <tr className="bg-[#E8EDF5]">
                      <th className="px-3 py-2 text-justify align-middle font-semibold text-base leading-[1.5] text-[#2E3F73] border border-[#D8DDED]" style={{ width: '28%' }}>场景</th>
                      <th className="px-3 py-2 text-justify align-middle font-semibold text-base leading-[1.5] text-[#2E3F73] border border-[#D8DDED]" style={{ width: '72%' }}>监管重点</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white/50">
                      <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">样品</td>
                      <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">用于检测、质量控制、实验室比对、设备校准等用途，应关注数量上限、检测合同/工作合同、能力验证报告和合法流转文件，防止以"样品"名义商业销售。</td>
                    </tr>
                    <tr className="bg-[#F3F5FB]">
                      <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">出口用途产品</td>
                      <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">应证明产品确实用于出口，避免出口名义产品进入俄罗斯国内市场。</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">免税店产品</td>
                      <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">按免税贸易渠道管理，重点关注免税店渠道中的流通和退出流通，防止回流普通国内市场。</td>
                    </tr>
                    <tr className="bg-[#F3F5FB]">
                      <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">原料和尼古丁原料</td>
                      <td className="px-3 py-3 border border-[#D8DDED] text-[#334155] text-base leading-[1.6] max-md:text-sm max-md:leading-[1.6]">监管关注原料生产、投入流通、流通和退出流通信息，防止只管成品、不管原料来源和流向。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:hidden space-y-3">
              {[
                ['样品', '用于检测、质量控制、实验室比对、设备校准等用途，应关注数量上限、检测合同/工作合同、能力验证报告和合法流转文件，防止以"样品"名义商业销售。'],
                ['出口用途产品', '应证明产品确实用于出口，避免出口名义产品进入俄罗斯国内市场。'],
                ['免税店产品', '按免税贸易渠道管理，重点关注免税店渠道中的流通和退出流通，防止回流普通国内市场。'],
                ['原料和尼古丁原料', '监管关注原料生产、投入流通、流通和退出流通信息，防止只管成品、不管原料来源和流向。']
              ].map((row, idx) => (
                <div key={idx} className="rounded-xl border border-[#D8E0F0] bg-white p-2.5">
                  <div className="text-base leading-[1.5] font-bold text-[#27406E] max-md:text-sm max-md:leading-[1.5]">{row[0]}</div>
                  <div className="mt-2 text-base leading-[1.6] text-[#334155] max-md:text-sm max-md:leading-[1.55]">{row[1]}</div>
                </div>
              ))}
            </div>
            <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6] mt-4 max-md:text-sm max-md:leading-[1.6] max-md:mt-3">因此，监管重点不是单纯"是否贴码"，而是确认经营主体、产品属性、市场去向、系统记录和流通单证是否能够相互对应。</p>
          </TaxTableCard>
        </div>
      </ComplianceSection>

      <TaxSection sectionId="tax">
        {country.tax.exciseTax && (
          <div className="mb-6">
            <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6]">{country.tax.exciseTax}</p>
          </div>
        )}

        {country.tax.policies.find(p => p.title === '消费税说明') && (
          <TaxTableCard title="消费税说明">
            <BulletList items={[
              '俄罗斯对烟草及尼古丁相关产品按产品类型适用消费税，税率按年度逐步调整。',
              '卷烟、papirosy（俄式纸嘴卷烟）适用复合税率；加热消费用烟草、电子尼古丁输送系统液体、尼古丁原料、无烟草尼古丁加热混合物等按固定税额计征。',
              '单纯电子烟设备和 HNB 加热设备本身不按消费税税目征税，但进口时仍需结合 HS 归类确认关税、进口增值税和海关要求。'
            ]} />
          </TaxTableCard>
        )}

        {country.tax.exciseTaxTable && (
          <TaxTableCard title="消费税税率表">
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border-[#D8DDED]">
                  <thead>
                    <tr className="bg-[#E8EDF5]">
                      {country.tax.exciseTaxTable.headers.map((header, idx) => (
                        <th key={idx} className="px-4 py-4 text-justify font-bold text-[#2E3F73] border border-[#D8DDED]" style={idx === 0 ? { width: '28%' } : { width: '24%' }}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {country.tax.exciseTaxTable.rows.map((row, rowIdx) => (
                      <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white/50' : 'bg-[#F3F5FB]'}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="px-4 py-4 border border-[#D8DDED] text-[#334155] text-sm leading-[1.6]">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:hidden space-y-3">
              {country.tax.exciseTaxTable.rows.map((row, rowIdx) => (
                <div key={rowIdx} className="rounded-xl border border-[#D8E0F0] bg-white p-3.5">
                  <div className="text-[15px] leading-[1.35] font-bold text-[#27406E]">
                    {row[0]}
                  </div>
                  <div className="mt-2 text-[14px] leading-[1.55] text-[#334155]">
                    <div>2026年：{row[1]}</div>
                    <div>2027年：{row[2]}</div>
                    <div>2028年：{row[3]}</div>
                  </div>
                </div>
              ))}
            </div>
          </TaxTableCard>
        )}

        {country.tax.policies.find(p => p.title === '最低价格说明') && (
          <TaxTableCard title="最低价格说明">
            <div className="space-y-2">
              <BulletPoint>俄罗斯对卷烟、papirosy、加热烟草产品、电子尼古丁输送系统用液体、雪茄、水烟烟草等主要烟草和尼古丁产品设置最低价格或最低零售价格。</BulletPoint>
              <BulletPoint>最低价格依据主要包括第203-FZ号联邦法第7条、俄罗斯政府批准的最低价格确定规则，以及俄罗斯农业部发布的2026年最低价格信息公告。</BulletPoint>
              <BulletPoint>最低价格公告中的产品分类不等于市场准入许可；具体产品仍需结合禁售规则、技术合规、标识、许可和销售限制要求判断。</BulletPoint>
            </div>
          </TaxTableCard>
        )}

        {country.tax.minimumPriceTable && (
          <TaxTableCard title="最低价格表">
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border-[#D8DDED]">
                  <thead>
                    <tr className="bg-[#E8EDF5]">
                      {country.tax.minimumPriceTable.headers.map((header, idx) => (
                        <th key={idx} className="px-4 py-4 text-justify font-bold text-[#2E3F73] border border-[#D8DDED]" style={idx === 0 ? { width: '42%' } : { width: '58%' }}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {country.tax.minimumPriceTable.rows.map((row, rowIdx) => (
                      <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white/50' : 'bg-[#F3F5FB]'}>
                        <td className="px-4 py-4 border border-[#D8DDED] text-[#334155] text-sm leading-[1.6]">
                          {row[0]}
                        </td>
                        <td className="px-4 py-4 border border-[#D8DDED] text-[#334155] text-sm leading-[1.6]">
                          {row[0] === '水烟烟草' ? (
                            <div className="space-y-1">
                              {String(row[1]).split('；').map((item: string, i: number) => (
                                <BulletPoint key={i} textClassName="text-sm">{item}</BulletPoint>
                              ))}
                            </div>
                          ) : (
                            String(row[1])
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:hidden space-y-3">
              {country.tax.minimumPriceTable.rows.map((row, rowIdx) => (
                <div key={rowIdx} className="rounded-xl border border-[#D8E0F0] bg-white p-3.5">
                  <div className="text-[15px] leading-[1.35] font-bold text-[#27406E]">
                    {row[0]}
                  </div>
                  <div className="mt-2 text-[14px] leading-[1.55] text-[#334155]">
                    {row[0] === '水烟烟草' ? (
                      <div className="space-y-1">
                        {String(row[1]).split('；').map((item: string, i: number) => (
                          <div key={i}>{item}</div>
                        ))}
                      </div>
                    ) : (
                      String(row[1])
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TaxTableCard>
        )}
      </TaxSection>

      <MarketOperationSection sectionId="operation-rules">
        <div className="grid gap-x-5 gap-y-6 md:grid-cols-2">
          <RuleCard
            number={1}
            title="禁售场所、包装与未成年人保护"
            items={[
              '禁止在教育机构内及其周边、公共服务场所、交通枢纽、住宿服务场所等法律规定的禁售场所销售烟草产品、含尼古丁产品及相关使用装置。',
              '卷烟只能以20支装整包零售；不得销售单支卷烟、单支papirosy（俄式纸嘴卷烟）或非20支装卷烟。',
              '烟草制品和含尼古丁产品应以合规零售包装销售，不得拆包、散装或以无零售包装形式销售；不得与非烟草、非含尼古丁商品混装在同一零售包装中销售。',
              '禁止向18岁以下人员销售烟草产品、含尼古丁产品及相关使用装置；难以判断年龄时，应要求购买者出示身份证明文件。',
            ]}
          />
          <RuleCard
            number={2}
            title="广告、促销与变相推广限制"
            items={[
              '禁止烟草、烟草制品、含尼古丁产品、含尼古丁产品使用装置广告。',
              '不得通过免费发放、赠品、价格折扣、优惠券、抽奖、竞赛、游戏、品牌延伸、仿制商品、赞助、大型活动等方式，对烟草产品、含尼古丁产品及相关使用装置进行促销或变相推广。',
              '不得通过其他商品、服务、活动、品牌元素、包装设计或商业展示安排，变相推广烟草产品、含尼古丁产品及相关使用装置。',
              '面向零售终端、经销商或消费者的沟通材料，应避免出现诱导购买、品牌推广、变相广告或促销利益安排。',
            ]}
          />
          <RuleCard
            number={3}
            title="零售陈列、销售方式与地方零售限制"
            items={[
              '零售场所不得公开陈列或展示烟草产品、含尼古丁产品及相关使用装置；销售时应通过文字版产品清单/价格清单列明产品名称和价格，不得使用图片、图形或促销性展示。',
              '消费者查看产品清单后，可以要求销售人员展示具体产品；展示不得扩大为公开陈列、促销展示或吸引消费者购买的营销安排。',
              '禁止通过互联网、邮寄、电话订购等远程方式销售烟草产品、含尼古丁产品、水烟和相关使用装置；禁止通过自动售货机销售。',
              '电子烟及相关液体还需重点关注地方零售禁售规则。2027年3月1日至2032年3月1日期间，各联邦主体可通过本地区法律禁止零售电子烟及相关液体。',
            ]}
          />
          <RuleCard
            number={4}
            title="样品、出口与特殊流通场景"
            items={[
              '检测、质量控制、实验室比对、设备校准等用途的样品，应控制在法定数量上限内：不超过10,000支卷烟、10,000支加热烟草制品、250单位含尼古丁产品（加热烟草制品除外）、250支雪茄/小雪茄、1250克烟草，或相应组合重量不超过1250克。',
              '样品应具备检测服务合同/工作合同或能力验证报告，并符合合法流通文件要求；不得以"样品"名义进行普通商业销售、铺货或变相进口。',
              '出口用途产品应与俄罗斯国内销售产品区分管理，需证明产品确实用于出口，避免以出口名义进入俄罗斯国内市场。',
              '免税店产品按免税贸易渠道管理，不等同于普通国内零售，应关注免税渠道内的流通、退出流通和防回流要求。',
            ]}
          />
        </div>
      </MarketOperationSection>

      <SectionCard title="监管趋势与合规红线清单" id="trend">
        <div className="space-y-4">
          <SubCard title="监管趋势">
            <div className="space-y-5">
              <div>
                <h4 className="font-bold text-[#243B63] text-base mb-2">1. 整体方向：保留合法市场，提高监管控制力</h4>
                <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6]">俄罗斯烟草监管的长期方向，是在保留合法烟草市场的同时，提高国家对生产、进口、流通和零售端的控制力。后续监管重点预计将继续围绕经营许可、税收征管、产品追溯、零售终端管理和未成年人保护展开。</p>
              </div>
              <div>
                <h4 className="font-bold text-[#243B63] text-base mb-2">2. 传统烟草和加热烟草：合法市场内强监管</h4>
                <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6]">传统烟草和加热烟草产品仍会沿着"合法市场内强监管"的方向发展。监管工具会更多集中在生产和流通许可、数字标识、最低价格、消费税、零售许可和合法流通文件，以减少未许可经营、低价销售、假冒产品和灰色流通。</p>
              </div>
              <div>
                <h4 className="font-bold text-[#243B63] text-base mb-2">3. 电子烟：可准入，但地区差异风险上升</h4>
                <div className="space-y-2">
                  <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6]">电子烟及相关液体产品目前仍保留合法市场空间，但监管持续收紧，已经成为俄罗斯烟草及尼古丁监管中政策不确定性较高的品类之一。</p>
                  <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6]">更需要关注的是地方零售禁售授权。2027年3月1日至2032年3月1日期间，各联邦主体可通过本地区法律禁止零售电子烟及相关液体。后续判断俄罗斯电子烟市场时，不能只看联邦层面的准入结论，还需要具体到拟销售地区确认当地是否实施零售禁售、库存处置、渠道安排和终端销售风险。</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-[#243B63] text-base mb-2">4. 口含、鼻吸、咀嚼类尼古丁产品：维持禁售方向</h4>
                <div className="space-y-2">
                  <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6]">口含、鼻吸、咀嚼类尼古丁产品仍应按禁售或高风险品类处理。nasvay、snus、食品型尼古丁产品，以及设计用于咀嚼、吸吮、鼻吸的尼古丁产品，后续监管方向预计仍以禁止销售和防止变相流通为主。</p>
                  <p style={{ textAlignLast: 'left', textJustify: 'inter-ideograph' } as unknown as React.CSSProperties} className="text-[#334155] text-base leading-[1.6]">尼古丁袋、尼古丁口含膜、尼古丁粉末、尼古丁混合物等产品，如设计用途为口含、吸吮、咀嚼或鼻吸，不宜按普通可准入消费品判断。</p>
                </div>
              </div>
            </div>
          </SubCard>
          <RedLineBox groups={[
            { title: '禁售产品与生产限制', items: [
              '严禁批发或零售 snus、nasvay、食品型含尼古丁产品，以及用于咀嚼、吸吮、鼻吸的含尼古丁产品。',
              '严禁在俄罗斯本地生产 nasvay 和 snus。',
              '严禁零售尼古丁浓度超过 20 mg/ml 的电子尼古丁输送系统液体、尼古丁液体或尼古丁溶液。',
            ]},
            { title: '许可、标识与价格', items: [
              '严禁无相应许可在俄罗斯本地生产、进口投入流通、储存或供应烟草产品、含尼古丁产品、烟草原料或尼古丁原料。',
              '严禁销售未完成强制数字标识或追溯信息报送的受管制产品。',
              '严禁低于适用最低价格销售卷烟、papirosy、加热烟草、电子尼古丁输送系统液体及其他适用最低价格的产品。',
            ]},
            { title: '销售渠道、对象与场所', items: [
              '严禁通过互联网、邮寄、自动售货机、集市、展会等方式销售烟草产品、含尼古丁产品、水烟和含尼古丁产品使用装置。',
              '严禁在教育机构内及距教育机构用地边界 100 米范围内，以及医疗、文化、体育、政府办公、旅客运输服务、住宿服务等法律规定的禁售场所销售相关产品。',
              '严禁向 18 岁以下人员销售相关产品。',
              '2027年3月1日至2032年3月1日期间，如具体联邦主体已通过本地区法律禁止零售电子烟及相关液体，不得在该地区继续零售销售。',
            ]},
            { title: '陈列与推广', items: [
              '严禁公开陈列或展示烟草产品、含尼古丁产品、水烟和含尼古丁产品使用装置。',
              '严禁以广告、折扣、赠品、抽奖、竞赛、品牌延伸、赞助等方式推广烟草产品、含尼古丁产品、含尼古丁产品使用装置和水烟。',
            ]},
          ]} id="red-lines" />
        </div>
      </SectionCard>

      <ReferencesSection
        sectionId="resources"
        tipText="以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。俄罗斯相关法律、政府令和部门公告可能经过后续修订或按年度更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。"
        regulationContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="市场准入与生产流通监管">
              <ReferenceItem
                url="https://www.consultant.ru/document/cons_doc_LAW_449350/"
                title="《俄罗斯联邦第203-FZ号法〈关于烟草制品、烟草产品、尼古丁产品及其生产原料的生产和流通国家监管〉》"
                description={<><span className="font-semibold">主要内容：</span>俄罗斯烟草、含尼古丁产品及相关原料生产流通的基础法律，主要影响生产、进口、出口、储存、供应、许可、原料流转、最低价格和国家监管要求。</>}
              />
              <ReferenceItem
                showSeparator
                url="https://normativ.kontur.ru/document?moduleId=1&documentId=506809"
                title="《俄罗斯联邦第188-FZ号联邦法律〈关于修改《俄罗斯联邦刑法典》第171.3条〉》"
                description={<><span className="font-semibold">主要内容：</span>配套修改俄罗斯刑法典第171.3条，涉及无相应许可生产、供应、采购、进出口采购、储存烟草产品、含尼古丁产品及其生产原料，以及无证零售烟草产品和含尼古丁产品的刑事责任衔接。该法自2027年3月1日起生效。</>}
              />
              <ReferenceItem
                showSeparator
                url="https://www.alta.ru/tamdoc/26fz0186/"
                title="《俄罗斯联邦第186-FZ号联邦法律〈关于修改俄罗斯联邦部分立法文件〉》"
                description={<><span className="font-semibold">主要内容：</span>2026年核心修正案，涉及第15-FZ号法、第203-FZ号法等多项法律修改。重点包括：新增批发、仓储、普通零售和车辆流动零售等经营端许可要求；完善标识追溯和合法流通文件要求；细化样品、出口用途产品、免税店产品等特殊流通场景；并授权各联邦主体在2027年3月1日至2032年3月1日期间，通过本地区法律禁止零售电子尼古丁输送系统及相关液体。</>}
              />
              <ReferenceItem
                showSeparator
                url="https://www.consultant.ru/document/cons_doc_LAW_142515/"
                title="《俄罗斯联邦第15-FZ号法〈关于保护公民健康免受环境烟草烟雾影响、烟草消费后果或尼古丁产品消费后果影响〉》"
                description={<><span className="font-semibold">主要内容：</span>俄罗斯控烟和市场销售限制的核心法律，主要影响销售地点、销售方式、产品展示、广告促销、未成年人保护、公共场所使用限制和特定产品禁售。</>}
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="产品技术合规与分类规则">
              <ReferenceItem
                url="https://eec.eaeunion.org/comission/department/deptexreg/tr/tabac.php"
                title="《欧亚经济联盟烟草制品技术法规》（TR CU 035/2014）"
                description={<><span className="font-semibold">主要内容：</span>欧亚经济联盟层面的烟草制品技术合规规则。全部或部分以烟草叶作为原料制成，并制备用于吸用、吮吸、咀嚼或嗅闻的烟草制品，适用该技术法规。落入该规则的产品需核查产品技术要求、包装标签、健康警示、消费者信息、符合性声明和 EAC 标志要求。</>}
              />
              <ReferenceItem
                showSeparator
                url="https://www.consultant.ru/document/cons_doc_LAW_82841/"
                title="《俄罗斯联邦第268-FZ号法〈无烟烟草产品技术法规〉》"
                description={<><span className="font-semibold">主要内容：</span>无烟烟草产品的技术识别和技术合规规则，主要涉及无烟烟草产品的技术要求、识别、标签和合格评定。该技术法规本身不等于市场销售许可；具体产品能否进入俄罗斯市场，还需结合第15-FZ号法的禁售规则、第203-FZ号法的生产流通监管、数字标识、最低价格和销售限制判断。</>}
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="数字标识与追溯规则">
              <ReferenceItem
                url="https://www.consultant.ru/document/cons_doc_LAW_319565/"
                title="《俄罗斯联邦政府第224号令〈关于批准烟草产品识别标识规则等〉》"
                description={<><span className="font-semibold">主要内容：</span>烟草产品数字标识和追溯规则的基础政府令，主要影响赋码、贴码、流转信息报送及市场追溯。后续俄罗斯对烟草、含尼古丁产品及相关原料的标识和追溯规则已有扩展，具体适用品类和操作要求需结合最新修订、Chestny ZNAK系统规则及主管机关口径确认。</>}
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="消费税规则">
              <ReferenceItem
                url="https://www.nalog.gov.ru/rn77/taxation/taxes/akciz/"
                title="《俄罗斯联邦税法典》消费税规则"
                description={<><span className="font-semibold">主要内容：</span>俄罗斯烟草、加热烟草、电子烟液、尼古丁原料、无烟草尼古丁加热混合物等产品的消费税主要依据《俄罗斯联邦税法典》确定。消费税税目和税率按产品类型和年度列明，页面中的2026—2028年税率应以税法典现行有效文本为准。</>}
              />
              <ReferenceItem
                showSeparator
                url="https://www.alta.ru/tamdoc/26fz0187/"
                title="《俄罗斯联邦第187-FZ号联邦法律〈关于修改俄罗斯联邦税法典第二部分第333.33条〉》"
                description={<><span className="font-semibold">主要内容：</span>配套修改俄罗斯税法典第二部分第333.33条，规定烟草及含尼古丁产品相关许可的国家费用，包括采购、储存和供应许可费用，以及普通零售和车辆流动零售许可费用。该法自2026年10月1日起生效。</>}
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="最低价格规则">
              <ReferenceItem
                url="https://publication.pravo.gov.ru/document/0001202306130005"
                title="规则依据：第203-FZ号法第7条"
                description={<><span className="font-semibold">主要内容：</span>第203-FZ号法第7条是烟草产品、含尼古丁产品最低价格或最低零售价格规则的上位法律依据。具体计算方式和年度数值还需要结合政府规则和农业部年度信息公告确认。</>}
              />
              <ReferenceItem
                showSeparator
                url="https://www.consultant.ru/document/cons_doc_LAW_472346/"
                title="俄罗斯政府尼古丁产品最低价格确定规则"
                description={<><span className="font-semibold">主要内容：</span>俄罗斯政府第301号令及其附件规定尼古丁产品最低价格的确定方法。烟草产品及卷烟、papirosy 等其他品类的最低价格，仍需结合第203-FZ号法、相应政府规则及年度信息公告判断。</>}
              />
              <ReferenceItem
                showSeparator
                url="https://mcx.gov.ru/ministry/departments/departament-pishchevoy-i-pererabatyvayushchey-promyshlennosti/industry-information/info-vinogradarstvo-vinodelie-i-tabachnaya-produktsiya/"
                title="俄罗斯农业部2026年最低价格信息公告"
                description={<><span className="font-semibold">主要内容：</span>该页面为俄罗斯农业部"葡萄种植、葡萄酒和烟草产品"信息页，集中发布烟草及含尼古丁产品最低价格相关信息公告。</>}
              >
                <div className="ml-4 pl-4 border-l-2 border-[#D8DDED] space-y-3 russia-resource-nested-list">
                  <div className="russia-resource-nested-item">
                    <a href="https://www.consultant.ru/document/cons_doc_LAW_520847/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#263247] text-sm mb-1 hover:underline block">
                      1. 卷烟、papirosy 2026年统一最低价格信息公告
                    </a>
                    <p className="text-sm text-[#334155]">
                      <span className="font-semibold">主要内容：</span>确认2026年卷烟、papirosy统一最低价格为153卢布/包。
                    </p>
                  </div>

                  <div className="russia-resource-nested-item">
                    <a href="https://www.consultant.ru/document/cons_doc_LAW_520849/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#263247] text-sm mb-1 hover:underline block">
                      2. 尼古丁产品2026年最低价格信息公告
                    </a>
                    <p className="text-sm text-[#334155]">
                      <span className="font-semibold">主要内容：</span>列明加热烟草产品、电子尼古丁输送系统用液体、一次性设备内液体、未列明尼古丁产品等最低价格。
                    </p>
                  </div>

                  <div className="russia-resource-nested-item">
                    <a href="https://www.consultant.ru/document/cons_doc_LAW_522525/c59c7905b3e6d45c8fb4e45587eecd77efd3397b/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#263247] text-sm mb-1 hover:underline block">
                      3. 烟草产品2026年最低价格信息公告
                    </a>
                    <p className="text-sm text-[#334155]">
                      <span className="font-semibold">主要内容：</span>列明雪茄、水烟烟草、烟斗烟、鼻烟、咀嚼烟草及其他列明烟草产品的最低价格。
                    </p>
                  </div>
                </div>
              </ReferenceItem>
            </ReferenceGroupCard>
          </div>
        }
        newsContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="许可、税费与价格监管动态">
              <ReferenceItem
                url="https://www.2firsts.com/news/russia-approves-law-requiring-sales-permits-for-cigarettes-and-e-cigarettes-starting-march-1-2026"
                title="俄罗斯推进烟草和含尼古丁产品批发 / 零售许可改革"
                description="报道涉及俄罗斯烟草和含尼古丁产品批发、零售许可改革安排，反映监管重点正在从生产、进口环节延伸至经营端控制。"
              />
              <ReferenceItem
                showSeparator
                url="https://interfax.com/newsroom/top-stories/116871/"
                title="俄罗斯批发 / 零售许可改革时间调整相关报道"
                description="报道显示，烟草和含尼古丁产品批发、零售许可改革的实施时间和落地节奏仍在调整，企业需关注正式生效时间和主管机关操作口径。"
              />
              <ReferenceItem
                showSeparator
                url="https://en.iz.ru/en/2019182/2026-01-01/excise-taxes-tobacco-products-have-been-indexed-russia-january-1"
                title="俄罗斯2026年烟草产品消费税调整报道"
                description="报道涉及2026年烟草、含尼古丁及相关产品消费税调整，反映俄罗斯继续通过税收工具提高合法产品成本和监管强度。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="电子烟地方禁售落地跟踪">
              <ReferenceItem
                url="https://www.kommersant.ru/doc/8655501"
                title="Kommersant：国家杜马委员会支持地区禁售 vape 方案"
                description={'报道称，国家杜马相关委员会支持允许地区禁止销售 vape 的方案，并提到下诺夫哥罗德州曾提出地区性禁售安排。第186-FZ号联邦法律通过后，电子烟监管重点已从联邦层面授权转向各联邦主体是否出台本地区零售禁售规则。'}
              />
            </ReferenceGroupCard>
          </div>
        }
      />
    </CountryPageTemplate>
  );
}
