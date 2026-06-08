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
        introText="2026年以来，马来西亚烟草及新型吸烟产品监管重点进一步转向执法落地和含尼古丁电子烟监管收紧。"
        items={[
          {
            title: '液体/凝胶尼古丁判决改变含尼古丁电子烟监管状态',
            content: (
              <>
                <p className="text-[#334155] text-base leading-7 mb-3">2026年5月，马来西亚高等法院认定，2023年将电子烟用液体/凝胶尼古丁从《毒药法》毒物清单中移除的决定违法。判决后，含尼古丁电子烟相关产品重新涉及《毒药法》管制。</p>
                <p className="text-[#334155] text-base leading-7 mb-3">在《毒药法》及药剂监管框架下，含尼古丁制剂通常需要药品/制剂注册或主管机关批准，供应主体通常限于持牌药剂师、注册医生、牙医、兽医等特定主体，使用场景通常限于药剂、医疗、牙科、兽医等用途。</p>
                <p className="text-[#334155] text-base leading-7">因此，判决带来的核心变化是：含尼古丁电子烟相关产品重新从"吸烟产品销售监管"进入"尼古丁成分管制 + 药剂供应监管"的问题。对于面向一般消费者销售的电子烟产品而言，药品/制剂注册门槛较高，供应主体和使用场景也受到严格限制，这实际上会显著压缩其作为普通消费品上市、分销和零售的空间。</p>
              </>
            ),
          },
          {
            title: 'Act 852 执法进入常态化阶段',
            content: 'Act 852 生效后，卫生部已开展大规模执法行动，并发出大量处罚通知，禁烟区、未成年人购买或使用、场所管理责任成为主要执法事项。',
          },
          {
            title: '吸烟产品广告推广出现公开处罚案例',
            content: '2026年1月，马来西亚出现因推广电子烟产品而被处罚的公开案例。相关人员因违反 Act 852 关于禁止广告、促销或赞助吸烟产品的规定，被处以罚款。该动态说明吸烟产品的线上内容、播客、社交媒体和网红推广已进入执法视野。',
          },
          {
            title: '加热烟草产品税负开始提高',
            content: '马来西亚 2026 年预算提出，自2025年11月1日起提高烟草相关税负，其中加热烟草产品消费税按每公斤烟草含量增加 RM20。',
          },
        ]}
      />

      <RegulatorySystemSection
        cards={[
          {
            title: '核心特征',
            content: (
              <>
                <p className="text-base leading-7 text-[#334155] mb-4">分类监管，传统烟草和HNB可准入，电子烟及新型尼古丁产品限制更强</p>
                <p className="text-base leading-7 text-[#334155] mb-4">马来西亚对烟草及新型吸烟产品采取分类监管，对传统烟草和HNB保留准入空间，对电子烟及其他新型尼古丁产品采取更谨慎、更限制性的监管态度，其中：</p>
                <BulletList items={[
                  '电子烟：部分地区已经采取禁售、限制销售或更高强度执法措施；全国层面则通过销售对象、广告促销、包装标签和公共场所使用规则持续收紧。含尼古丁电子烟在液体/凝胶尼古丁判决后重新涉及《毒药法》及药剂监管框架，其上市、分销和零售空间进一步受限。',
                  '尼古丁袋等其他新型尼古丁产品：尚未形成稳定、清晰的商业准入路径。',
                ]} />
              </>
            ),
          },
          {
            title: '主管部门',
            content: (
              <ul className="list-disc pl-5 space-y-3 text-base leading-7 text-[#334155]">
                <li><span className="font-semibold text-[#263247]">马来西亚卫生部（MOH）：</span>烟草及新型吸烟产品监管的核心主管机关，负责 Act 852 项下吸烟产品监管。</li>
                <li><span className="font-semibold text-[#263247]">药剂执法司（PED）：</span>负责《毒药法》及药剂监管相关事项，含尼古丁产品涉及毒物或药剂监管时，可能进入其监管范围。</li>
                <li><span className="font-semibold text-[#263247]">毒药委员会（Poisons Board）：</span>负责毒物分类、毒物清单调整及受管制成分管理，是《毒药法》体系下的重要专业咨询机构。</li>
                <li><span className="font-semibold text-[#263247]">马来西亚财政部（MOF）：</span>负责烟草及相关产品的税收政策。</li>
                <li><span className="font-semibold text-[#263247]">马来西亚投资发展局（MIDA）：</span>负责制造业投资及制造业牌照相关事项，涉及在马来西亚设厂生产烟草、HNB烟支、电子烟或相关产品时，需关注其制造业许可要求。</li>
              </ul>
            ),
          },
        ]}
      />

      <ProductAccessSection>
        <ProductModuleCard title="1. 传统烟草及加热烟草产品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>马来西亚 Act 852 使用"吸烟产品"作为上位概念，覆盖烟草产品、吸烟物质和替代烟草产品。传统卷烟、雪茄、烟丝/切丝烟草及其他制成烟草，属于典型烟草产品。</li>
            <li>HNB烟支/加热烟草产品含有烟草材料，主要按烟草产品及加热烟草产品相关规则管理。</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="amber"
              customLabel="可准入，但强监管"
              title="传统卷烟、雪茄、烟丝/切丝烟草及其他制成烟草"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：传统卷烟、雪茄、烟丝/切丝烟草及其他制成烟草。</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>产品上市前应向卫生总监提交资料，完成 Act 852 项下烟草产品注册。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>包装应标注卫生总监批准的识别标记，并使用规定的图文健康警示。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>产品标签应标注尼古丁和焦油相关信息。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>卷烟、雪茄和加热产品有最低销售价格要求，具体详见"税收政策/最低价格"章节。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="amber"
              customLabel="可准入，但强监管"
              title="HNB烟支/加热烟草产品"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：HNB烟支、加热烟草棒及其他含烟草材料的加热产品。</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>产品上市前应向卫生总监提交资料，完成 Act 852 项下烟草产品或相应吸烟产品注册。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>包装应标注卫生总监批准的识别标记，并使用规定的图文健康警示。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>产品标签应标注尼古丁、焦油或其他适用成分信息。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>加热产品有最低销售价格要求，具体详见"税收政策/最低价格"章节。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>HNB加热设备如单独销售，应结合产品设计和销售形态确认是否属于替代烟草产品或吸烟产品相关组件。</span>
                  </li>
                </ul>
              </>}
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="2. 电子烟及电子雾化产品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>Act 852 将电子烟液、补充液、烟弹内液体等纳入吸烟物质判断范围；电子烟设备、电子雾化设备和相关组件，主要按替代烟草产品或吸烟产品相关组件判断。</li>
            <li>含尼古丁电子烟相关产品同时涉及 Act 852 吸烟产品监管，以及《毒药法》及药剂监管框架。</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="amber"
              customLabel="高度受限/涉及药剂监管"
              title="含尼古丁电子烟"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：含尼古丁电子烟液、含尼古丁烟弹、含尼古丁电子烟及其他含液体/凝胶尼古丁的电子烟相关产品。</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>产品同时涉及 Act 852 项下吸烟产品注册，以及《毒药法》及药剂监管要求。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>液体/凝胶尼古丁继续涉及《毒药法》管制，含尼古丁制剂通常需要药品/制剂注册或主管机关批准。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>供应主体通常限于持牌药剂师、注册医生、牙医、兽医等特定主体；使用场景通常限于药剂、医疗、牙科或兽医用途。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>Act 852 项下包装标签、识别标记、健康警示及吸烟产品注册要求仍需同步确认。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="amber"
              customLabel="部分限制/准入受控"
              title="不含尼古丁电子烟及电子烟设备"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：不含尼古丁电子烟液、电子烟设备、电子雾化设备、电子烟组件及其他不含尼古丁电子烟相关产品。</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>不含尼古丁电子烟液、补充液和烟弹内液体，应按吸烟物质确认 Act 852 项下注册要求。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>电子烟设备、电子雾化设备及相关组件，应按替代烟草产品或吸烟产品相关组件确认注册要求。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>产品上市前应向卫生总监提交资料，完成相应吸烟产品注册。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>包装应标注卫生总监批准的识别标记，并使用规定的图文健康警示。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>产品标签应标注是否含尼古丁及其他适用成分信息。</span>
                  </li>
                </ul>
              </>}
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="3. 无烟烟草及口含尼古丁产品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>马来西亚公开法规未见对尼古丁袋、尼古丁口含膜等口含尼古丁产品设置清晰、专门的统一准入分类。</li>
            <li>含烟草的无烟产品与不含烟草但含尼古丁的口含产品，监管判断起点不同：前者主要进入 Act 852 项下烟草产品及无烟烟草包装标签规则，后者重点进入《毒药法》及药剂监管框架。</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="amber"
              customLabel="高度受限"
              title="含烟草的无烟产品"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：口含烟、嚼烟、鼻吸烟，以及含烟草材料的袋状/片状/膜状/粉末状/膏状无烟产品。</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>含烟草并设计供人消费的无烟产品，应按 Act 852 项下烟草产品确认注册要求。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>产品上市前应向卫生总监提交资料，确认是否可以完成相应烟草产品注册。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>包装应标注卫生总监批准的识别标记，并使用适用于无烟烟草产品的健康警示和健康信息。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>产品标签应标注尼古丁、焦油或其他适用成分信息。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>产品额外添加尼古丁或其他受管制成分的，应同步确认《毒药法》及药剂监管要求。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>使用"安全""无害""非致癌""降低健康风险""戒烟""治疗""尼古丁替代"等减害/医药用宣称的，应具备充分科学证据，并确认药品/制剂方面的监管要求。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="amber"
              customLabel="高度受限，涉及药剂监管"
              title="不含烟草但含尼古丁的口含产品"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：尼古丁袋、尼古丁口含膜、尼古丁片，以及不含烟草但含尼古丁的袋状/片状/膜状/粉末状口含产品。</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>该类产品不能直接按烟草产品注册路径处理。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>尼古丁袋已被卫生部公开归入《毒药法》监管范围，销售或供应通常限于授权主体；网上销售属于违法。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>含尼古丁成分的，应确认《毒药法》及药剂监管要求，包括药品/制剂注册、主管机关批准、供应主体和适用场景要求。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>使用"安全""无害""非致癌""降低健康风险""戒烟""治疗""尼古丁替代"等减害/医药用宣称的，应具备充分科学证据，并确认药品/制剂方面的监管要求。</span>
                  </li>
                </ul>
              </>}
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="4. 烟草原料、半成品及普通辅材" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] mb-4">
            <li>烟叶、烟草薄片、爆珠、香精胶囊、滤嘴棒和香精香料主要作为原料、半成品、结构性材料或功能性辅材管理；具体是否进入烟草产品、吸烟物质或替代烟草产品监管范围，应在各子类中按成分和产品形态分别判断。</li>
          </ul>
          <div className="grid md:grid-cols-3 gap-4">
            <StatusCard
              status="amber"
              customLabel="可准入，但需按产品形态确认"
              title="烟叶、烟草薄片"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：烟叶、烟草薄片。</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>单纯作为烟草原料或半成品生产、销售的烟叶、烟草薄片，公开规则未见其本身需要办理 Act 852 项下吸烟产品注册。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>在马来西亚设厂生产烟草薄片或其他烟草半成品的，应根据制造活动规模和主体条件确认是否需要 MIDA 制造业牌照；达到《1975年工业协调法》项下制造业牌照门槛的，应办理制造业牌照。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>烟草薄片如已经加工、包装或标识为可直接吸食、加热或消费使用的产品，应按烟草产品确认是否需要向卫生总监办理 Act 852 产品注册。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>烟草薄片如被制成可雾化、可吸入或含尼古丁的产品，应确认是否进入吸烟物质、替代烟草产品或《毒药法》及药剂监管范围。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="green"
              customLabel="可合规准入"
              title="普通辅材及相关配套材料"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：不含尼古丁、不含烟草提取物，且不构成烟草产品、吸烟物质或替代烟草产品的爆珠、香精胶囊、滤嘴棒、香精香料及其他普通辅材。</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>公开规则未见特殊烟草/电子烟专项许可或产品注册要求。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>如产品含烟草、尼古丁、烟草提取物、可吸入成分或可雾化成分，应转入下列"含特殊成分或特定功能辅材"判断。</span>
                  </li>
                </ul>
              </>}
            />
            <StatusCard
              status="amber"
              customLabel="需拆分判断"
              title="含特殊成分或特定功能辅材"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：含烟草、尼古丁、烟草提取物、可吸入成分、可雾化成分，或具有特殊释放功能的爆珠、香精胶囊、滤嘴棒、香精香料及其他辅材。</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>含烟草或烟草提取物的，应确认是否进入烟草产品监管范围。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>含尼古丁、可吸入成分或可雾化成分的，应确认是否进入吸烟物质、替代烟草产品或《毒药法》及药剂监管范围。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>含液体/凝胶尼古丁的，不能按普通辅材处理，应重点确认《毒药法》及药剂监管要求。</span>
                  </li>
                </ul>
              </>}
            />
          </div>
        </ProductModuleCard>
      </ProductAccessSection>

      <ComplianceSection country={country}>
        <p className="text-[#334155] text-base leading-7 mb-6">马来西亚烟草及新型吸烟产品涉及的核心资质，主要包括产品上市前注册、含尼古丁产品的药剂监管、本地制造业牌照，以及地方营业/零售场所许可。不同资质对应不同产品类别和经营环节，应结合具体产品和业务活动分别判断。</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">1</span>
              <h4 className="font-bold text-[#2E3F73] text-base">吸烟产品注册</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">吸烟产品注册是 Act 852 项下针对烟草产品、吸烟物质和替代烟草产品设置的产品上市前注册要求。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">适用于传统卷烟、雪茄、烟丝/切丝烟草、HNB烟支、加热烟草产品、不含尼古丁电子烟液、电子烟设备、含烟草无烟产品，以及其他落入 Act 852 的吸烟产品。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">相关产品上市前，应向卫生总监提交注册资料，由卫生总监受理和批准。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">产品如含有尼古丁、液体/凝胶尼古丁或其他受管制成分，还需同步确认《毒药法》及药剂监管要求。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">2</span>
              <h4 className="font-bold text-[#2E3F73] text-base">毒物/药剂产品注册及供应资质</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">毒物/药剂产品注册及供应资质，是针对尼古丁、毒物、药剂制品及相关供应活动的监管要求。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">适用于含尼古丁电子烟液、含尼古丁烟弹、含尼古丁电子烟产品，以及尼古丁袋、尼古丁口含膜、尼古丁片等不含烟草但含尼古丁的产品。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">相关产品应按《毒药法》及药剂监管框架确认产品注册、主管机关批准、供应主体和适用场景。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">使用"安全""无害""非致癌""降低健康风险"等减害宣称，或戒烟、治疗、尼古丁替代等药用宣称的，应具备充分科学证据，并确认是否触发药品/制剂注册等要求。</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">3</span>
              <h4 className="font-bold text-[#2E3F73] text-base">MIDA / MITI 制造业牌照</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">制造业牌照是马来西亚针对达到法定门槛的本地制造企业设置的工业制造资质。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">适用于在马来西亚本地制造、加工或改造烟草产品、HNB烟支、电子烟产品、烟草薄片、烟草半成品及相关产品的主体。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">制造企业股东资金达到 RM2.5 million 及以上，或雇用 75 名及以上全职受薪员工的，应申请制造业牌照。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">制造业牌照通常通过马来西亚投资发展局（MIDA）提交申请，由马来西亚投资、贸易及工业部（MITI）批准。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">制造活动、工厂用途、产品类别和生产范围，应与制造业牌照及相关批准内容保持一致。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">4</span>
              <h4 className="font-bold text-[#2E3F73] text-base">地方营业/零售场所许可</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">地方营业/零售场所许可，是地方政府或地方主管机关针对门店、摊位、展示销售场所和具体经营活动设置的经营场所许可。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">适用于烟草产品、HNB烟支、电子烟及相关产品的零售门店、展示销售场所、摊位和其他地方经营场所。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">经营主体应根据所在地地方政府或地方主管机关要求，办理营业执照、零售场所许可、摊位许可或具体经营活动许可。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">销售含尼古丁并进入药剂监管路径的产品时，还需按照药剂监管要求确认供应主体和适用场景。</span>
              </div>
            </div>
          </div>
        </div>
      </ComplianceSection>

      <TaxSection introText="马来西亚烟草及新型吸烟产品主要涉及消费税和销售税。卷烟、雪茄和加热产品另有最低销售价格要求；2026年预算提出数字税票和尼古丁替代治疗产品税收豁免安排。">
        <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5 mb-4">
          <h4 className="font-bold text-[#2E3F73] text-base mb-4">1. 消费税</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E8EDF5]">
                  <th className="px-4 py-3 text-left font-bold text-[#2E3F73] border border-[#D8DDED]">产品类别</th>
                  <th className="px-4 py-3 text-left font-bold text-[#2E3F73] border border-[#D8DDED]">消费税口径</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/50">
                  <td className="px-4 py-3 border border-[#D8DDED] text-[#334155]">卷烟</td>
                  <td className="px-4 py-3 border border-[#D8DDED] text-[#334155]">RM0.42 / 支</td>
                </tr>
                <tr className="bg-[#F3F5FB]">
                  <td className="px-4 py-3 border border-[#D8DDED] text-[#334155]">雪茄、cheroots、cigarillos</td>
                  <td className="px-4 py-3 border border-[#D8DDED] text-[#334155]">RM440 / kg</td>
                </tr>
                <tr className="bg-white/50">
                  <td className="px-4 py-3 border border-[#D8DDED] text-[#334155]">加热烟草产品</td>
                  <td className="px-4 py-3 border border-[#D8DDED] text-[#334155]">RM798 / 每公斤烟草含量，即按产品所含烟草重量计征</td>
                </tr>
                <tr className="bg-[#F3F5FB]">
                  <td className="px-4 py-3 border border-[#D8DDED] text-[#334155]">电子烟/vape用液体或凝胶</td>
                  <td className="px-4 py-3 border border-[#D8DDED] text-[#334155]">RM0.40 / ml，按液体/凝胶容量计征；适用于含尼古丁和不含尼古丁液体/凝胶</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <h4 className="font-bold text-[#2E3F73] text-base mb-3">2. 销售税</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">销售税是马来西亚 SST 体系下对本地制造或进口应税货物征收的单阶段税，通常在本地制造商销售应税货物或货物进口时发生。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">销售税通常按 HS 编码确定税率；一般应税货物适用 10%，部分基础食品、建材、农业投入品、基础工业原料和特定机械设备等适用 5%，石油类产品等少数货物适用特定税率。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">烟草及尼古丁相关产品中，未加工烟草/烟草废料，以及含烟草、烟草薄片、尼古丁或烟草/尼古丁替代物的非燃烧吸入产品及其他含尼古丁产品，被列入 5% 销售税范围。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">具体产品应按 HS 编码、产品形态和申报品名确认销售税税率。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <h4 className="font-bold text-[#2E3F73] text-base mb-3">3. 最低销售价格</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">马来西亚对卷烟、雪茄和加热产品设置最低销售价格要求。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">卷烟、雪茄和加热产品的每包最低价格为 RM12。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <h4 className="font-bold text-[#2E3F73] text-base mb-3">4. 数字税票</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">2026 年预算提出由马来西亚皇家关税局引入数字税票机制，用于烟草和酒类产品防伪、追踪和税收监管。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">该机制仍属于预算提出事项，后续重点关注实施时间、适用品类、贴附方式和检查要求。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <h4 className="font-bold text-[#2E3F73] text-base mb-3">5. 尼古丁替代治疗产品税收豁免</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">尼古丁口香糖、尼古丁贴片、尼古丁喷雾和尼古丁含片适用进口税和销售税豁免，有效期至 2027 年 12 月 31 日。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">该项豁免对应戒烟治疗场景下的尼古丁替代治疗产品，政策目的与 mQuit 计划、肺部健康倡议及 FCTC 下戒烟治疗承诺相关。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">相关产品的监管基础仍是尼古丁替代治疗产品及药剂监管要求；涉及安全性、减害、戒烟、治疗或尼古丁替代等宣称的，应具备充分科学证据。</span>
              </div>
            </div>
          </div>
        </div>
      </TaxSection>

      <MarketOperationSection>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">1</span>
              <h4 className="font-bold text-[#2E3F73] text-base">销售对象、渠道与场所</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">吸烟产品只能销售、供应或提供给符合法定年龄要求的消费者。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">吸烟产品不得通过线上平台、自动售货机、临时摊位或临时市场销售。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">教育机构等受限场所不得销售吸烟产品。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">零售门店、展示销售场所和其他经营场所，应符合所在地营业/零售场所许可要求。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">2</span>
              <h4 className="font-bold text-[#2E3F73] text-base">陈列展示与价格呈现</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">零售场所不得公开陈列吸烟产品；柜台、货架、收银区域、开放式货架和消费者可直接看到的位置，不应摆放或展示吸烟产品。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">产品价目、库存提示或销售说明应控制在销售必要信息范围内，不应通过图片、包装图案、品牌元素、灯箱、海报或屏幕展示形成广告效果。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">卷烟、雪茄和加热产品适用最低销售价格，零售端标价和结算价格不得低于规定价格。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">3</span>
              <h4 className="font-bold text-[#2E3F73] text-base">包装标签与产品规格</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">卷烟、雪茄、散装烟草、无烟烟草、HNB烟支/加热产品，应按对应类别使用规定的识别标记、健康警示、健康信息和销售限制提示。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">电子烟液、烟弹、一次性电子烟及相关设备，应标注容量、尼古丁浓度、健康警示、销售限制提示，以及制造商/进口商名称和地址。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">传统卷烟每包应为 20 支，每条应为 10 包。不得以单支、小包装或不符合最低包装规格的形式销售。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">瓶装电子烟液容量为 15 ml；烟弹容量为 3 ml；一次性电子烟容量为 3 ml。自 2026 年 10 月 1 日起，烟弹和一次性电子烟容量上限降为 2 ml。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">电子烟液尼古丁浓度上限为 20 mg/ml。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">包装上的产品名称、容量、尼古丁浓度、制造商/进口商信息，应与产品注册资料和实际销售产品一致。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">4</span>
              <h4 className="font-bold text-[#2E3F73] text-base">广告促销、赞助与宣称</h4>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">禁止广告、促销或赞助吸烟产品，包括传统烟草、HNB烟支/加热产品、电子烟液、电子烟设备及其他吸烟产品。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">不得通过社交媒体、短视频、直播、播客、网红推广、品牌植入或线上内容营销推广吸烟产品。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">不得通过赠品、折扣、抽奖、会员积分、组合销售、试用、递样或免费发放方式推广吸烟产品。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">不得通过体育、娱乐、校园、公益、社群活动或第三方合作安排推广吸烟产品品牌、商标、包装元素或产品形象。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">包装和宣传材料不得使用虚假、误导性或可能使消费者低估健康风险的文字、图形、声明或其他表示。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">包装和宣传材料不得使用"light""ultra light""mild""cool""low tar""special""premium""rich""slim"等表示低危害、优越品质或类似含义的表达。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7">使用"安全""无害""非致癌""降低健康风险"、戒烟、治疗或尼古丁替代等宣称的，应具备充分科学证据。</span>
              </div>
            </div>
          </div>
        </div>
      </MarketOperationSection>

      <TrendAndRedLinesSection
        trendContent={
          <div className="space-y-4">
            <p className="text-[#334155] text-base leading-7">马来西亚控烟政策的核心目标，是控制尼古丁消费扩张、降低未成年人接触风险，并把新型吸烟产品纳入公共健康监管。传统烟草和 HNB烟支仍有合法空间，但监管态度偏控制型，后续重点会继续围绕税务、包装警示、销售限制和广告禁令展开。</p>
            <p className="text-[#334155] text-base leading-7">含尼古丁电子烟的政策方向已经转向禁止销售。2026年液体尼古丁判决使电子烟用液体/凝胶尼古丁继续受到毒物管制，含尼古丁电子烟失去进入普通商业流通的前置基础。结合卫生部推动电子烟禁令和地方销售执照限制，马来西亚短期内更可能继续压缩含尼古丁电子烟作为消费品进入零售市场的空间。</p>
            <p className="text-[#334155] text-base leading-7">尼古丁袋、尼古丁口含膜等口含类新型尼古丁产品尚未形成清晰准入路径。结合电子烟监管方向，后续监管更可能优先防止此类产品以新形态绕开烟草、毒物或药剂监管进入普通消费市场。</p>
          </div>
        }
        redLineItems={[
          "严禁向未成年人销售、供应或提供任何吸烟产品。",
          "严禁将含尼古丁电子烟液、含尼古丁烟弹、一次性含尼古丁电子烟作为消费型电子烟产品，通过电子烟店、电商平台、经销商、社交媒体、递样、试用或商业推广方式进入市场。",
          "严禁在未完成卫生总监产品注册前，销售传统卷烟、雪茄、烟丝、HNB烟支、不含尼古丁电子烟液或其他应注册吸烟产品。",
          "严禁通过线上平台、自动售货机销售吸烟产品。",
          "严禁在教育机构、临时摊位或临时市场销售吸烟产品。",
          "严禁公开陈列吸烟产品。",
          "严禁通过社交媒体、播客、直播、短视频、网红推广、赠品、折扣、抽奖、会员活动、组合销售、赞助或公益活动推广吸烟产品。",
          "严禁销售不符合最低包装规格、容量限制或尼古丁浓度上限的吸烟产品。",
          '严禁在包装、标签或宣传中使用 "light""ultra light""mild""cool""extra""low tar""special""full flavour""premium""rich""famous""slim""grade A""golden""pearl""edition" 及其他容易使消费者误认产品危害较低、品质更高或更优越的表述。'
        ]}
      />

      <ReferencesSection
        tipText="以下链接主要为法律文本、监管规例、官方税务文件或主管机关公开资料。马来西亚烟草、电子烟、尼古丁及相关产品监管口径可能随 Act 852 配套规例、法院判决、卫生部口径和税务政策持续调整，具体适用应以现行有效文本和主管机关最新口径为准。"
        regulationContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="烟草及吸烟产品监管框架">
              <ReferenceItem
                url="https://seatca.org/dmdocuments/Control%20of%20Smoking%20Products%20for%20Public%20Health%20Act%202024.pdf"
                title="《公共健康吸烟产品管制法》（Act 852）"
                description="马来西亚吸烟产品监管的核心法律，覆盖烟草产品、吸烟物质、替代烟草产品的注册、广告、促销、销售、购买、包装标签、价格、禁烟场所、未成年人保护和执法。"
              />
              <ReferenceItem
                showSeparator
                url="https://assets.tobaccocontrollaws.org/uploads/legislation/Malaysia/Malaysia-TC-Regs-2024-PL.pdf"
                title="《公共健康吸烟产品管制（包装和标签）规例》"
                description="细化卷烟、雪茄、散装烟草、无烟烟草、HNB烟支/加热产品、电子烟液、烟弹、一次性电子烟及相关设备的包装、标签、健康警示、健康信息、容量、尼古丁浓度和禁止性包装表述。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="尼古丁、毒物及药剂监管">
              <ReferenceItem
                url="https://www.pharmacy.gov.my/v2/sites/default/files/document-upload/poisons-act-1952-act-366-regulations.pdf"
                title="《毒药法》（Poisons Act 1952）"
                description="用于确认尼古丁、毒物、药剂制品及相关供应活动的监管基础。液体/凝胶尼古丁、含尼古丁电子烟液、含尼古丁烟弹、一次性含尼古丁电子烟及其他含尼古丁产品，需结合该法及药剂监管框架判断。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="税务、销售税和预算政策">
              <ReferenceItem
                url="https://mysst.customs.gov.my/assets/document/SST%20Orders/order/1-PUA%20170_2025.pdf"
                title="《销售税税率令 2025》（Sales Tax (Rate of Sales Tax) Order 2025）"
                description="用于确认马来西亚销售税的一般税率、5%税率货物和特定税率货物。烟草及尼古丁相关产品中，未加工烟草/烟草废料，以及含烟草、烟草薄片、尼古丁或烟草/尼古丁替代物的非燃烧吸入产品及其他含尼古丁产品，被列入 5% 销售税范围。"
              />
              <ReferenceItem
                showSeparator
                url="https://mysst.customs.gov.my/SSTOrders"
                title="马来西亚皇家关税局 MySST 销售税命令列表"
                description="用于核查销售税税率令、销售税豁免令及后续修订文件。"
              />
              <ReferenceItem
                showSeparator
                url="https://belanjawan.mof.gov.my/pdf/belanjawan2026/ucapan/tax-measures.pdf"
                title="马来西亚财政部 2026 年预算税务措施"
                description="用于确认卷烟、雪茄类产品、加热烟草产品消费税调整，数字税票机制，以及尼古丁替代治疗产品进口税和销售税豁免安排。"
              />
            </ReferenceGroupCard>
          </div>
        }
        newsContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="液体/凝胶尼古丁判决">
              <ReferenceItem
                url="https://codeblue.galencentre.org/2026/05/high-court-rules-liquid-nicotine-was-delisted-unlawfully/"
                title="CodeBlue：高等法院认定液体尼古丁移出毒物清单决定违法"
                description="用于支撑含液体/凝胶尼古丁电子烟及相关产品重新涉及《毒药法》及药剂监管的风险判断。"
              />
              <ReferenceItem
                showSeparator
                url="https://codeblue.galencentre.org/2026/05/analysis-court-decision-marks-de-facto-ban-on-nicotine-vape/"
                title="CodeBlue：液体尼古丁判决对含尼古丁电子烟监管影响的分析"
                description="用于说明 2026 年液体尼古丁判决对含尼古丁电子烟普通零售、分销和上市空间的影响。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="Act 852 执法与销售控制">
              <ReferenceItem
                url="https://thesun.my/news/malaysia-news/people-issues/health-ministry-issues-over-160000-compounds-under-new-smoking-act/"
                title="The Sun：卫生部披露 Act 852 执法数据"
                description="用于支撑 Act 852 已进入常态化执法阶段的判断。"
              />
              <ReferenceItem
                showSeparator
                url="https://codeblue.galencentre.org/2024/10/tobacco-vape-regulations-enforced-bans-on-retail-display-online-and-vending-machine-sale/"
                title="CodeBlue：Act 852 销售控制规则执行说明"
                description="用于确认公开陈列、线上销售、自动售货机销售、最低价格和教育机构销售限制等执行口径。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.malaymail.com/news/malaysia/2024/10/03/act-852-on-smoking-products-is-now-in-effect-heres-what-to-know-whether-you-are-a-smokervaper-or-not/152339"
                title="Malay Mail：Act 852 生效后销售、广告、陈列等规则说明"
                description="用于补充确认 Act 852 生效后吸烟产品销售、展示、广告和消费者使用限制。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="广告促销与社交媒体执法">
              <ReferenceItem
                url="https://www.businesstoday.com.my/2026/01/08/law-in-place-as-influencer-charged-for-promoting-smoking-products/"
                title="BusinessToday：吸烟产品推广处罚案例"
                description="用于支撑马来西亚对吸烟产品广告、促销、社交媒体推广和网红推广的执法风险判断。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="2026年预算">
              <ReferenceItem
                url="https://assets.kpmg.com/content/dam/kpmgsites/my/pdf/2025/10/budget2026-tl-indirect-tax-perspective.pdf.coredownload.inline.pdf"
                title="KPMG Malaysia 2026 Budget – Indirect Tax Perspective"
                description="用于交叉确认 2026 年预算项下卷烟、雪茄类产品、加热烟草产品消费税调整，以及尼古丁替代治疗产品进口税和销售税豁免安排。"
              />
            </ReferenceGroupCard>
          </div>
        }
      />
    </CountryPageTemplate>
  );
}
