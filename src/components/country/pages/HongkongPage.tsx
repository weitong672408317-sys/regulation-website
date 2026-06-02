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

interface HongkongPageProps {
  country: CountryData;
}

export default function HongkongPage({ country }: HongkongPageProps) {
  return (
    <CountryPageTemplate>
      <SeasonSummarySection
        introText="2026年以来，香港控烟监管继续围绕另类吸烟产品禁令、禁烟场景扩展、传统卷烟追溯和包装展示监管推进。"
        items={[
          {
            title: '1. 另类吸烟产品管控进一步延伸至公众地方管有',
            content: '自2026年4月30日起，香港禁止在公众地方管有指明另类吸烟产品，官方示例包括烟弹、加热烟支和草本烟。',
          },
          {
            title: '2. 禁烟场景和罚则继续收紧',
            content: '香港已禁止排队时吸烟，并将指定处所出入口外3米范围纳入法定禁烟区；吸烟罪行定额罚款为港币3,000元。',
          },
          {
            title: '3. 传统卷烟流通追溯和包装展示监管分阶段推进',
            content: '香港已于2025年10月6日推出完税烟标签制度先导计划，计划于2026年第四季度推出第一阶段，并于2027年第二季度全面实施。统一包装设计计划于2027年第二季度与完税烟标签制度同步实施；禁止加味传统吸烟产品将在完税烟标签制度和统一包装设计全面实施后推进。相关安排显示，香港后续不仅关注烟草是否完税，也会进一步管控传统吸烟产品的包装展示和口味吸引力。',
          },
        ]}
      />

      <RegulatorySystemSection
        cards={[
          {
            title: '核心特征',
            content: (
              <>
                <p className="text-base leading-7 text-[#334155] mb-4">传统吸烟产品有限准入、新型吸烟产品多环节禁止、非法烟草流通重点打击</p>
                <BulletList items={[
                  '传统卷烟、雪茄等传统吸烟产品可以依法进口和销售，但受完税、包装警示、广告限制、禁烟场所、未成年人保护和海关监管等约束。',
                  '电子烟、加热烟草产品、草本烟等另类吸烟产品，禁止进口、制造、销售、推广及商业用途管有；在公众地方管有另类吸烟产品也被禁止。',
                  '无烟烟草产品禁止进口、制造和销售等市场流通行为；含尼古丁但不含烟草的口含类产品，需进一步判断是否适用毒药和药剂制品监管。',
                ]} />
              </>
            ),
          },
          {
            title: '监管部门',
            content: (
              <ul className="list-disc pl-5 space-y-3 text-base leading-7 text-[#334155]">
                <li><span className="font-semibold text-[#263247]">卫生署控烟酒办公室：</span>负责控烟政策、禁烟场所、排队吸烟禁令、另类吸烟产品禁令、烟草广告限制、传统吸烟产品销售限制和相关执法。</li>
                <li><span className="font-semibold text-[#263247]">食物环境卫生署：</span>负责无烟烟草产品禁令相关执法。</li>
                <li><span className="font-semibold text-[#263247]">卫生署药物办公室、药剂业及毒药管理局：</span>负责毒药及药剂制品监管，重点影响含尼古丁但不含烟草的口含类产品、含尼古丁物质和可能具有药剂属性的产品。</li>
                <li><span className="font-semibold text-[#263247]">香港海关：</span>负责应课税品、烟草税、完税管理、私烟执法、边境执法，以及另类吸烟产品走私和非法进口查缉。</li>
              </ul>
            ),
          },
        ]}
      />

      <ProductAccessSection>
        <ProductModuleCard title="1. 传统卷烟、雪茄等传统吸烟产品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>香港传统吸烟产品主要包括传统卷烟、雪茄、中国熟烟及其他制成烟草。</li>
          </ul>
          <StatusCard
            status="green"
            customLabel="可准入，但严格限制"
            title="传统卷烟、雪茄、中国熟烟及其他制成烟草"
            content={<>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <ul className="space-y-1 text-[#334155]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>进口、制造、储存或搬运应课税烟草产品前，应取得相应应课税品许可证，并按海关要求办理进口申报、仓储、移运和完税手续。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>传统吸烟产品进入香港市场销售前，应完成烟草税缴纳，并保留完税证明、货物来源、进口及销售渠道文件，避免被认定为私烟或未完税烟草。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>产品包装应按规定展示健康警示和焦油 / 尼古丁含量等信息；销售、陈列、宣传和赞助安排不得构成烟草广告、变相广告或促销。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>零售端不得向未成年人销售传统吸烟产品，并需遵守禁烟区、排队吸烟禁令、指定处所出入口3米范围禁烟区及其他公共场所使用限制。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>完税烟标签制度、统一包装设计和加味传统吸烟产品管控将分阶段推进，后续会进一步影响传统卷烟的标签、防伪追溯、包装展示和口味设计。</span>
                </li>
              </ul>
            </>}
          />
        </ProductModuleCard>

        <ProductModuleCard title="2. 另类吸烟产品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>不经点燃即可从任何物质产生气雾、并用于模仿传统吸烟的器具，以及该等器具的零件和配件，但不包括水烟壶。</li>
            <li>用于上述器具产生气雾的任何物质，例如电子烟油、加热烟支等。</li>
            <li>以任何物料卷裹、能够即时用于模仿传统吸烟的植物材料，即草本烟。</li>
          </ul>
          <StatusCard
            status="red"
            title="另类吸烟产品"
            content={<>
              <div className="text-base text-[#334155] mb-2">适用产品：电子烟、加热烟草产品、电子烟油、加热烟支、HNB烟支、草本烟及相关零件、配件；烟弹、烟液胶囊等相关产品，应结合其内容物、结构和用途判断。</div>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <ul className="space-y-1 text-[#334155]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                  <span>不得进口、制造、销售、推广或为商业目的持有另类吸烟产品。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                  <span>不得通过货运、邮寄包裹或个人携带方式将另类吸烟产品带入香港。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                  <span>自2026年4月30日起，在公众地方持有指明另类吸烟产品也被禁止。这里的"公众地方持有"，是指人在公众地方携带、随身带有或实际控制相关产品；不限于销售或商业用途。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                  <span>含尼古丁的另类吸烟产品还可能同时受到毒药及药剂制品监管；未取得合法依据而持有、销售或供应含尼古丁产品，可能构成第1部毒药或未注册药剂制品相关违法。</span>
                </li>
              </ul>
            </>}
          />
        </ProductModuleCard>

        <ProductModuleCard title="3. 无烟烟草产品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>香港《无烟烟草产品（禁止）规例》（第132BW章）禁止无烟烟草产品进入市场流通。无烟烟草产品是指含有烟草或以烟草为主要成分并拟供人口服的产品，包括嚼烟，不论是散烟叶、硬烟饼、湿烟饼、口嚼搓烟或口嚼卷烟，以及湿鼻烟；但不包括用鼻吸入的干鼻烟。</li>
          </ul>
          <StatusCard
            status="red"
            title="无烟烟草产品"
            content={<>
              <div className="text-base text-[#334155] mb-2">适用产品：嚼烟、口嚼卷烟、口嚼搓烟、湿鼻烟等无烟烟草产品。</div>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <ul className="space-y-1 text-[#334155]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                  <span>不得将无烟烟草产品进口、制造或销售至香港市场。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-1.5 flex-shrink-0"></span>
                  <span>不得为销售目的持有、陈列、托运或交付无烟烟草产品。</span>
                </li>
              </ul>
            </>}
          />
        </ProductModuleCard>

        <ProductModuleCard title="4. 尼古丁袋、尼古丁口含膜等口含类产品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>尼古丁袋、尼古丁口含膜应按是否含烟草、是否含尼古丁、是否拟供人口服分别判断。该类产品不能直接按普通消费品处理。</li>
          </ul>
          <StatusCard
            status="amber"
            customLabel="高度受限 / 需个案确认许可要求"
            title="尼古丁袋、尼古丁口含膜及其他口含类尼古丁产品"
            content={<>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <ul className="space-y-1 text-[#334155]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] mt-1.5 flex-shrink-0"></span>
                  <span>含烟草并拟供人口服的，可能被按无烟烟草产品处理，不得进入香港市场流通。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] mt-1.5 flex-shrink-0"></span>
                  <span>不含烟草但含尼古丁的口含类产品，可能被视为毒药表第一部毒药；如具有治疗、戒烟或其他药用宣称，还可能被认定为药剂制品。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] mt-1.5 flex-shrink-0"></span>
                  <span>未取得毒药销售、供应、管有相关牌照或药剂制品注册的，不得进口、销售、供应、递样或携带相关产品进入香港。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] mt-1.5 flex-shrink-0"></span>
                  <span>香港海关曾查获含怀疑第一部毒药尼古丁的口含烟。该案例说明，含尼古丁口含类产品即使不含烟草，也可能触发毒药监管和海关执法风险。</span>
                </li>
              </ul>
            </>}
          />
        </ProductModuleCard>

        <ProductModuleCard title="5. 烟草薄片、烟叶等烟草材料" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>香港公开资料未见对烟草薄片、烟叶设置独立、统一的产品定义。该类产品应结合加工程度、申报品名、成分和最终产品形态判断。</li>
          </ul>
          <StatusCard
            status="amber"
            customLabel="个案判断 / 需按最终产品路径确认"
            title="烟草薄片、烟叶及其他烟草材料"
            content={<>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <ul className="space-y-1 text-[#334155]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] mt-1.5 flex-shrink-0"></span>
                  <span>已经构成香烟、雪茄、中国熟烟或其他制成烟草的，应按应课税品、烟草税和传统吸烟产品监管规则处理。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] mt-1.5 flex-shrink-0"></span>
                  <span>作为未制成传统吸烟产品的烟草材料进口、仓储或加工的，应重点判断是否触发应课税品许可证、烟草税、海关申报、仓储和移运要求。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] mt-1.5 flex-shrink-0"></span>
                  <span>已经制成或包装为加热烟支、HNB烟支等用于另类吸烟产品器具产生气雾的物质的，应按另类吸烟产品禁令处理。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] mt-1.5 flex-shrink-0"></span>
                  <span>含烟草并拟供人口服的，可能被按无烟烟草产品处理，不得进入香港市场流通。</span>
                </li>
              </ul>
            </>}
          />
        </ProductModuleCard>

        <ProductModuleCard title="6. 爆珠、香精胶囊" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>香港公开资料未见对爆珠、香精胶囊设置独立、统一的烟草监管定义。该类产品通常作为烟草相关配件或普通辅材判断。</li>
          </ul>
          <StatusCard
            status="green"
            customLabel="可准入，但需按成分和用途确认"
            title="爆珠、香精胶囊"
            content={<>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <ul className="space-y-1 text-[#334155]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>不含尼古丁、烟草或烟草提取物的爆珠、香精胶囊，一般可按普通货物办理进口申报和贸易合规事项。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>产品如含有尼古丁、烟草或烟草提取物，应重新判断是否触发毒药、药剂制品、烟草税或无烟烟草产品监管。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                  <span>产品如作为加味传统吸烟产品的一部分进入香港市场，应关注香港后续禁止加味传统吸烟产品的实施安排。</span>
                </li>
              </ul>
            </>}
          />
        </ProductModuleCard>
      </ProductAccessSection>

      <ComplianceSection country={country}>
        <p className="text-[#334155] text-base leading-7 mb-6">香港烟草及相关产品的合规资质主要集中在应课税品许可证、保税仓储和移离许可，以及毒药和药剂制品牌照 / 注册。传统卷烟、雪茄等传统吸烟产品涉及香港海关应课税品监管；不含烟草但含尼古丁的产品，可能需要进入毒药及药剂制品监管路径。</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">1</span>
              <h4 className="font-bold text-[#2E3F73] text-base">应课税品进口 / 出口许可证</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">适用于传统卷烟、雪茄、中国熟烟及其他制成烟草的进口和出口。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">进口或出口应课税烟草产品前，应向香港海关申请应课税品进口 / 出口许可证。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">许可证对应具体进口或出口安排；取得许可证后，仍需按海关要求完成报关、缴税、仓储或货物流转手续。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">2</span>
              <h4 className="font-bold text-[#2E3F73] text-base">应课税品制造商许可证</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">适用于在香港制造传统卷烟、雪茄、中国熟烟及其他制成烟草。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">制造应课税烟草产品前，应向香港海关申请应课税品制造商许可证。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">制造环节需要配合海关监管，并保存产量、库存、仓储和完税相关记录。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">3</span>
              <h4 className="font-bold text-[#2E3F73] text-base">应课税品仓库许可证及移离许可证</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">仓库许可证解决"在哪里存放、由谁经营仓库"的问题；移离许可证解决"哪批货从哪里移到哪里"的问题。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">未完税应课税烟草产品通常应存放在获许可的仓库内；经营相关仓库的，应向香港海关申请应课税品仓库许可证。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">应课税烟草产品从进口运输工具、保税仓、获准地点或本地流通节点移离时，应按具体货物和路线申请移离许可证。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">4</span>
              <h4 className="font-bold text-[#2E3F73] text-base">毒药及药剂制品牌照 / 注册</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">另类吸烟产品、无烟烟草产品已被禁止，不能通过毒药牌照、药剂制品注册或其他医药监管路径进入香港本地消费市场。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">本项主要适用于不含烟草、但含尼古丁的尼古丁袋、尼古丁口含膜、含尼古丁口含烟等口含类产品。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">尼古丁（烟草除外）在香港属于毒药表第一部毒药。尼古丁制品产品进入香港前，应确认是否需要毒药销售、供应或管有相关牌照。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">产品如带有戒烟、治疗或其他药用用途，可能被认定为药剂制品，进而需要完成药剂制品注册。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">未取得毒药相关牌照、药剂制品注册或其他明确合法政府许可的，不得将相关产品进口、销售、供应、递样或携带进入香港。</span>
              </div>
            </div>
          </div>
        </div>
      </ComplianceSection>

      <TaxSection>
        <TaxTableCard title="烟草税">
          <p className="text-[#334155] text-base leading-7 mb-4">香港税收政策重点集中在传统吸烟产品的烟草税和卷烟完税识别。传统卷烟、雪茄、中国熟烟及其他制成烟草依法进入香港市场前，应按类别缴纳烟草税；另类吸烟产品、无烟烟草产品等禁止类产品，不能通过缴纳税款取得本地市场准入资格。</p>
          <div className="overflow-x-auto rounded-xl border border-[#D8DDED]">
            <table className="w-full text-base min-w-[500px] bg-white">
              <thead>
                <tr className="bg-[#E8EDF5]">
                  <th className="px-6 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED]">产品类别</th>
                  <th className="px-6 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED]">现行烟草税率</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/50">
                  <td className="px-6 py-4 border-b border-[#D8DDED] font-semibold text-[#1F2A44]">香烟</td>
                  <td className="px-6 py-4 border-b border-[#D8DDED] text-[#334155]">每 1,000 支港币 3,306 元</td>
                </tr>
                <tr className="bg-[#F3F5FB]">
                  <td className="px-6 py-4 border-b border-[#D8DDED] font-semibold text-[#1F2A44]">雪茄</td>
                  <td className="px-6 py-4 border-b border-[#D8DDED] text-[#334155]">每公斤港币 4,258 元</td>
                </tr>
                <tr className="bg-white/50">
                  <td className="px-6 py-4 border-b border-[#D8DDED] font-semibold text-[#1F2A44]">中国熟烟</td>
                  <td className="px-6 py-4 border-b border-[#D8DDED] text-[#334155]">每公斤港币 811 元</td>
                </tr>
                <tr className="bg-[#F3F5FB]">
                  <td className="px-6 py-4 border-b border-[#D8DDED] font-semibold text-[#1F2A44]">其他制成烟草</td>
                  <td className="px-6 py-4 border-b border-[#D8DDED] text-[#334155]">每公斤港币 4,005 元</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 space-y-2">
            <p className="text-[#334155] text-base leading-6">香烟长度超过 90 毫米的，不包括滤嘴或烟嘴，每增加 90 毫米或不足 90 毫米，按另一支香烟计算。</p>
            <p className="text-[#334155] text-base leading-6">传统卷烟、雪茄、中国熟烟及其他制成烟草进入香港市场销售前，应按产品类别缴纳烟草税，并保留完税证明及相关流通文件。</p>
          </div>
        </TaxTableCard>

        <TaxTableCard title="完税烟标签制度">
          <p className="text-[#334155] text-base leading-7 mb-4">香港正在推进完税烟标签制度，用于加强卷烟完税识别、防伪和流通追溯。</p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="text-[#334155] text-base leading-6">2025年10月6日，香港推出完税烟标签制度先导计划。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="text-[#334155] text-base leading-6">第一阶段计划于2026年第四季度推出，目标于2027年第二季度全面实施。</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
              <span className="text-[#334155] text-base leading-6">完税烟标签将同时具备物理及数字防伪特征，用于区分已完税和未完税卷烟，并协助海关打击私烟。</span>
            </div>
          </div>
        </TaxTableCard>
      </TaxSection>

      <MarketOperationSection>
        <div className="grid md:grid-cols-2 gap-4">
          <RuleModuleCard number={1} title="销售渠道与本地流通">
            <DotList items={[
              '传统卷烟、雪茄、中国熟烟及其他制成烟草可以在香港本地销售，但销售对象、销售地点、产品展示和广告宣传均受控烟规则限制',
              '不得向18岁以下人士销售或提供传统吸烟产品',
              '电子烟、加热烟草产品、电子烟油、烟弹、加热烟支、草本烟等另类吸烟产品，不得在香港销售、推广、递样、展示或作为赠品提供',
              '无烟烟草产品不得在香港销售、陈列、寄售、托运或交付',
            ]} />
          </RuleModuleCard>

          <RuleModuleCard number={2} title="产品包装、标签与展示">
            <DotList items={[
              '传统卷烟、雪茄、中国熟烟及其他制成烟草的包装，应符合香港健康警示、焦油 / 尼古丁含量及其他包装标示要求',
              '销售现场的产品展示和包装呈现，不得构成烟草广告、变相广告或促销',
              '香港已将统一包装设计纳入后续控烟措施，相关安排会进一步影响传统吸烟产品的包装颜色、品牌展示和外观呈现',
            ]} />
          </RuleModuleCard>

          <RuleModuleCard number={3} title="广告、促销与产品销售限制">
            <DotList items={[
              '传统吸烟产品广告、促销和赞助受到严格限制',
              '不得通过广告、宣传材料、赞助、赠品、样品、促销活动或其他安排变相推广传统吸烟产品',
              '另类吸烟产品已经禁止销售和推广，不得通过线上展示、社交媒体、跨境代购、试用活动、样品派发或其他方式推广',
              '加味传统吸烟产品将进入管控范围，后续限制重点包括含指明添加剂的传统吸烟产品、显示为含有加味剂的传统吸烟产品，以及用于为传统吸烟产品添加味道的产品',
              '含尼古丁但不含烟草的口含类产品，如未取得毒药或药剂制品相关合法依据，不得作为普通消费品进行宣传、递样或销售推广',
            ]} />
          </RuleModuleCard>

          <RuleModuleCard number={4} title="持有、使用与公共场所">
            <DotList items={[
              '香港法定禁烟区覆盖范围较广，包括公共交通工具、公共运输设施、巴士转乘处、食肆、酒吧、卡拉OK场所、商场、街市、超市、银行、室内工作间、学校、医院、公园、泳滩、公共游乐场、公共升降机和自动扶手电梯等场所',
              '禁止在排队期间吸烟',
              '禁止在幼儿中心、院舍、学校、医院、指明诊所及健康中心的专用出入口3米范围内吸烟',
              '违法吸烟罪行定额罚款为港币3,000元',
              '禁止在公众地方持有（携带、随身带有或实际控制）电子烟等另类吸烟产品',
            ]} />
          </RuleModuleCard>
        </div>
      </MarketOperationSection>

      <TrendAndRedLinesSection
        trendContent={
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-bold text-[#243B63] text-base">1. 整体趋势</h4>
              <p className="text-[#334155] text-base leading-7">香港近年控烟政策的重点可以概括为：降低吸烟率、减少二手烟影响、打击非法烟草流通，并防止新型烟草及尼古丁产品扩大使用人群。</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#243B63] text-base">2. 传统卷烟及其他制成烟草：监管目的在于降低吸烟吸引力和压缩非法流通空间</h4>
              <p className="text-[#334155] text-base leading-7">传统卷烟、雪茄、中国熟烟及其他制成烟草在香港仍保留合法市场空间，但政策目标主要围绕降低吸烟率、减少烟草对公众尤其是年轻人的吸引，并压缩私烟、白牌烟和未完税烟草的流通空间。</p>
              <p className="text-[#334155] text-base leading-7">围绕这个目标，香港后续监管会集中在三个方向：</p>
              <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                <li><span className="font-semibold text-[#263247]">让合法卷烟更容易识别：</span>通过完税烟标签制度提高卷烟来源和完税状态的可识别性，配合打击私烟、白牌烟和逃税烟草。</li>
                <li><span className="font-semibold text-[#263247]">降低包装和品牌吸引力：</span>通过统一包装设计和健康警示，减少包装、品牌和视觉设计对消费者的吸引。</li>
                <li><span className="font-semibold text-[#263247]">减少口味诱导：</span>通过加味传统吸烟产品限制，降低爆珠、加味烟嘴配件及口味型产品对消费者，尤其是年轻消费者的吸引。</li>
              </ul>
              <p className="text-[#334155] text-base leading-7">整体来看，香港会继续通过税务、包装、口味和执法工具，降低传统吸烟产品吸引力，并提高非法流通的识别和打击效率。</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#243B63] text-base">3. 另类吸烟产品：禁止路径明确，后续重点是防止流入和使用</h4>
              <p className="text-[#334155] text-base leading-7">电子烟、加热烟、草本烟等产品已经被明确禁止。后续监管重点会继续放在防止相关产品进入香港、在香港销售推广，以及出现在公众场所和日常使用场景中。</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#243B63] text-base">4. 新型尼古丁产品：政策目的在于防止控烟成果被新产品形态削弱</h4>
              <p className="text-[#334155] text-base leading-7">香港近年控烟政策的核心目标，是降低吸烟率、减少青少年接触烟草及尼古丁产品，并避免新的产品形态重新扩大尼古丁使用人群。</p>
              <p className="text-[#334155] text-base leading-7">在这一政策背景下，尼古丁袋、尼古丁口含膜等产品释放的是偏负面监管信号。该类产品虽然形态不同于传统卷烟和电子烟，但仍可能带来尼古丁依赖、青少年接触和包装口味吸引等问题。</p>
              <p className="text-[#334155] text-base leading-7">后续监管更可能围绕"防止新型产品扩大尼古丁使用"这一目标展开，并与现有控烟、毒药及药剂制品规则衔接。</p>
            </div>
          </div>
        }
        redLineItems={[
          '严禁将电子烟、加热烟草产品、电子烟油、烟弹、加热烟支、HNB烟支、草本烟等另类吸烟产品进口、寄送、携带、销售或推广至香港本地市场。',
          '严禁在公众地方持有（携带、随身带有或实际控制）电子烟等另类吸烟产品。',
          '严禁进口、制造、销售、陈列、托运或交付无烟烟草产品。',
          '严禁在未取得毒药相关牌照、药剂制品注册或其他明确合法依据的情况下，将尼古丁产品进口、销售、供应、递样或携带进入香港。',
          '严禁销售、持有或流通未完税、来源不明或不能证明合法来源的烟草 / 尼古丁产品。',
          '严禁以广告、赞助、赠品、样品、试用、线上展示、社交媒体推广或跨境代购等方式推广电子烟等另类吸烟产品或规避香港控烟禁令。',
        ]}
      />

      <ReferencesSection
        tipText="以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。香港相关法例、附属法例和主管机关口径可能经过后续修订或更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。"
        regulationContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="基础控烟与传统吸烟产品监管">
              <ReferenceItem
                title="《吸烟（公众卫生）条例》（第371章）"
                url="https://www.elegislation.gov.hk/hk/cap371"
                description="香港控烟监管的核心法律，覆盖法定禁烟区、烟草广告、包装健康警示、传统吸烟产品销售限制、另类吸烟产品禁令和相关执法安排。"
              />
              <ReferenceItem
                title="香港卫生署控烟酒办公室：法定禁烟区"
                url="https://www.taco.gov.hk/t/sc_chi/legislation/legislation_sa.html"
                description="说明香港法定禁烟区范围、排队吸烟禁令、指定处所出入口3米范围禁烟区及吸烟罪行定额罚款等规则。"
                showSeparator
              />
              <ReferenceItem
                title="香港卫生署控烟酒办公室：《2025年控烟法例（修订）条例》说明页面"
                url="https://www.taco.gov.hk/t/tc_chi/legislation/legislation_tcl.html"
                description="说明香港最新一轮控烟措施，包括公众地方持有指明另类吸烟产品、禁烟区扩展、完税烟标签、统一包装设计及加味传统吸烟产品管控安排。"
                showSeparator
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="另类吸烟产品监管">
              <ReferenceItem
                title="香港卫生署控烟酒办公室：另类吸烟产品的禁令"
                url="https://www.taco.gov.hk/t/tc_chi/legislation/legislation_asp.html"
                description="说明电子烟、加热烟草产品、草本烟等另类吸烟产品的定义、进口、销售、推广、商业用途持有和公众地方持有禁令。"
              />
              <ReferenceItem
                title="《2021年吸烟（公众卫生）（修订）条例》"
                url="https://www.elegislation.gov.hk/hk/2021/14"
                description="在第371章下引入另类吸烟产品禁令，是香港禁止电子烟、加热烟草产品和草本烟等产品进入本地市场的重要依据。"
                showSeparator
              />
              <ReferenceItem
                title="香港海关：另类吸烟产品转运监管计划"
                url="https://www.customs.gov.hk/tc/service-enforcement-information/trade-facilitation/ASP/ATCS/index.html"
                description="说明另类吸烟产品在特定转运、过境及联运场景下的监管安排。该安排不构成本地销售或市场准入路径。"
                showSeparator
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="烟草税、完税和海关监管">
              <ReferenceItem
                title="《应课税品条例》（第109章）"
                url="https://www.elegislation.gov.hk/hk/cap109"
                description="香港烟草税、应课税品许可证、进口、出口、制造、仓储、移离、完税管理和私烟执法的核心法规。"
              />
              <ReferenceItem
                title="香港海关：应课税品类别及烟草税率"
                url="https://www.customs.gov.hk/tc/service-enforcement-information/trade-facilitation/dutiable-commodities/types-and-duty-rates/index.html"
                description="列明香烟、雪茄、中国熟烟和其他制成烟草的现行烟草税率。"
                showSeparator
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="无烟烟草与尼古丁产品监管">
              <ReferenceItem
                title="《无烟烟草产品（禁止）规例》（第132BW章）"
                url="https://www.elegislation.gov.hk/hk/cap132BW"
                description="禁止输入、制造、售卖、为出售而管有、要约出售、为出售而展示、托付或交付无烟烟草产品。"
              />
              <ReferenceItem
                title="《药剂业及毒药条例》（第138章）"
                url="https://www.elegislation.gov.hk/hk/cap138"
                description="影响含尼古丁但不含烟草产品的毒药及药剂制品监管。尼古丁袋、尼古丁口含膜等产品需结合该条例判断是否涉及毒药、药剂制品注册、销售、供应或管有要求。"
                showSeparator
              />
            </ReferenceGroupCard>
          </div>
        }
        newsContent={
          <ReferenceGroupCard title="政策与执法动态">
            <ReferenceItem
              title="香港政府：《2025年控烟法例（修订）条例草案》刊宪"
              url="https://www.info.gov.hk/gia/general/202504/25/P2025042500383.htm"
              description="提出完税烟标签、提高未完税烟草罚则、禁烟区扩展、禁止公众地方管有指明另类吸烟产品、统一包装设计及加味传统吸烟产品管控等措施。"
            />
            <ReferenceItem
              title="香港政府新闻网：医务卫生局说明统一包装设计与完税标签制度的不同功能"
              url="https://www.news.gov.hk/chi/2026/03/20260312/20260312_214452_431.html"
              description="说明统一包装设计用于减低烟草产品吸引力，完税标签用于加强打击白牌烟，两者功能不同。"
              showSeparator
            />
            <ReferenceItem
              title="香港海关：完税标签制度先导计划顺利完成"
              url="https://www.customs.gov.hk/tc/customs-announcement/press-release/index_id_5002.html"
              description="说明海关计划于2026年第四季度实施首阶段措施，并于2027年第二季度全面推行，以区分已完税和未完税香烟、打击白牌烟。"
              showSeparator
            />
            <ReferenceItem
              title="香港海关：天水围跨部门反私烟宣传活动"
              url="https://www.customs.gov.hk/sc/customs-announcement/press-release/index_id_5276.html"
              description="说明未完税烟草相关罪行最高罚则已提高至罚款港币2,000,000元及监禁7年，并介绍完税标签制度。"
              showSeparator
            />
            <ReferenceItem
              title="香港海关：2026年5月新闻列表"
              url="https://www.customs.gov.hk/sc/customs-announcement/press-release/index.html"
              description="显示海关持续就入境旅客进口或管有未完税香烟作出检控并有判囚案例，反映旅客携带和个人层面的私烟执法仍然活跃。"
              showSeparator
            />
            <ReferenceItem
              title="香港海关：2026年5月6日侦破以远洋船走私怀疑另类吸烟产品案件"
              url="https://www.customs.gov.hk/sc/customs-announcement/press-release/index.html?m=&p=9&y="
              description="显示另类吸烟产品仍是香港边境及走私执法重点。"
              showSeparator
            />
            <ReferenceItem
              title="香港海关：查获含怀疑第一部毒药尼古丁的口含烟及怀疑另类吸烟产品"
              url="https://www.customs.gov.hk/sc/customs-announcement/press-release/index_id_4730.html"
              description="提示不含烟草但含尼古丁的口含产品可能涉及毒药、药剂制品和海关执法风险。"
              showSeparator
            />
          </ReferenceGroupCard>
        }
      />
    </CountryPageTemplate>
  );
}
