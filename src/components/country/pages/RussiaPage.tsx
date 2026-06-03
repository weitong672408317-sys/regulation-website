'use client';
import React from 'react';
import { CountryData } from '../../../../data/mockData';
import {
  StatusCard, RuleCard,
  ComplianceLicenseCards, GenericComplianceTable,
  TableCellContent
} from '../CountryComponents';
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
  SectionCard
} from '../sections';

interface RussiaPageProps {
  country: CountryData;
}

export default function RussiaPage({ country }: RussiaPageProps) {
  const isRussiaStyle = true;

  return (
    <CountryPageTemplate>
      <SeasonSummarySection
        introText="2026年以来，俄罗斯监管重点继续集中在产品许可、数字标识、税费和价格监管。烟草和尼古丁产品仍有合法准入空间，但经营端控制持续加强。"
        items={[
          {
            title: '批发 / 零售许可',
            content: '烟草和尼古丁产品批发、零售许可改革继续推进。此前方案曾提出2026年分阶段实施，但实际上改革时间和落地节奏仍在调整，暂无确定时间表。'
          },
          {
            title: '电子烟地区禁售授权讨论',
            content: '俄罗斯联邦层面正在推进允许各地区自行禁止销售电子烟及相关液体的方案。该方案尚未形成全国统一全面禁售规则，但如果后续落地，俄罗斯电子烟市场可能出现不同地区监管条件不一致的情况。'
          },
          {
            title: '数字标识',
            content: (
              <ul className="space-y-2 text-[#334155] text-base leading-7 pl-5 list-disc">
                <li>可重复使用电子烟设备及类似个人电加热雾化设备仍处于标识试验 / 过渡阶段。</li>
                <li>烟油、含液体烟弹、电子烟中的液体部分，应继续按尼古丁液体或无尼古丁液体规则判断，重点关注相关标识和追溯要求。</li>
              </ul>
            )
          },
          {
            title: '税费和最低价格',
            content: (
              <ul className="space-y-2 text-[#334155] text-base leading-7 pl-5 list-disc">
                <li>俄罗斯对烟草、尼古丁及相关制品等列明2026—2028年消费税税率。</li>
                <li>2026年起至2028年，前述产品的税率继续提高。</li>
              </ul>
            )
          }
        ]}
      />

      <RegulatorySystemSection
        cards={[
          {
            title: '核心特征',
            content: (
              <BulletList items={[
                '俄罗斯属于烟草及尼古丁产品强监管市场。',
                '传统烟草、加热烟草、电子烟制品等产品有合规准入空间，但生产、进口、流通、标识、税费、价格和销售环节均受到较强监管。',
                '俄罗斯对无烟烟草产品实行分类监管。nasvay、snus、食品型尼古丁产品，以及用于咀嚼、吸吮、鼻吸的尼古丁产品禁止批发和零售；咀嚼烟草、鼻烟等传统非吸烟烟草产品仍有合规准入路径，但适用强监管要求。'
              ]} />
            )
          },
          {
            title: '规则体系',
            content: (
              <BulletList items={[
                '欧亚经济联盟技术规则主要影响烟草制品的技术要求、包装标签、健康警示、消费者信息和符合性声明。',
                '俄罗斯国内监管规则主要影响生产流通许可、销售限制、广告展示、数字标识、消费税、最低价格和法律责任。',
                '对同一产品，通常需要同时判断欧亚经济联盟技术合规要求和俄罗斯国内市场准入、流通及销售规则。'
              ]} />
            )
          },
          {
            title: '监管部门',
            content: (
              <ul className="list-disc pl-5 space-y-3 text-base leading-7 text-[#334155]">
                <li><span className="font-semibold text-[#263247]">俄罗斯联邦酒精和烟草市场监管局：</span>负责烟草、尼古丁产品及相关原料的生产流通许可和监管。</li>
                <li><span className="font-semibold text-[#263247]">俄罗斯联邦消费者权益保护和公益监督局：</span>负责消费者保护、公共卫生、销售端检查、标签、未成年人保护和控烟执法。</li>
                <li><span className="font-semibold text-[#263247]">俄罗斯联邦税务局：</span>负责消费税、税务申报和涉税监管。</li>
                <li><span className="font-semibold text-[#263247]">俄罗斯海关机关：</span>负责进口申报、商品归类、边境查验、进口税费和走私查处。</li>
                <li><span className="font-semibold text-[#263247]">俄罗斯联邦反垄断局：</span>负责广告、促销、赞助和不正当竞争监管。</li>
              </ul>
            )
          }
        ]}
      />

      <ProductAccessSection>
        <ProductModuleCard title="1. 传统烟草制品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
            <li>根据 TR CU 035/2014，烟草制品是全部或部分以烟草叶为原料制成，并以消费者包装投放市场的产品。</li>
            <li>烟草制品主要包括：传统卷烟、雪茄、小雪茄、烟丝、烟斗烟、水烟烟草，以及 papirosy（俄式纸嘴卷烟，即一端为烟草段、另一端为较长中空纸嘴的传统燃烧型烟草制品）。</li>
          </ul>
          <StatusCard
            status="amber"
            title="适用产品：传统卷烟、雪茄、小雪茄、烟丝、烟斗烟、水烟烟草、papirosy。"
            content="主要合规要点：产品本身可准入，主要关注 TR CU 035/2014 符合性声明、生产或进口投入流通许可、数字标识、消费税、最低价格、包装标签、健康警示和销售限制。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="2. 加热烟草产品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
            <li>第15-FZ号法将加热烟草产品列入尼古丁产品范围。</li>
            <li>HNB烟支通常指含烟草材料、通过加热装置加热后供消费者吸入的产品。</li>
            <li>监管上按加热烟草产品、烟草产品或尼古丁产品判断，不按 snus、nasvay、咀嚼烟草、鼻烟等无烟烟草产品处理。</li>
          </ul>
          <StatusCard
            status="amber"
            title="适用产品：HNB烟支、加热消费用烟草、含加热烟草产品。"
            content="主要合规要点：产品本身可准入，重点关注生产或进口投入流通许可、数字标识、消费税、最低价格、包装标签和销售限制。"
          />
        </ProductModuleCard>

        <ProductModuleCard title="3. 电子烟及液体产品" label="分类监管">
          <p className="text-base leading-7 text-[#334155] mb-3">俄罗斯法规通常按产品构成拆分判断电子烟相关产品，不使用一个单一概念统一覆盖全部产品。电子烟相关产品可分为设备类、液体类、预灌装 / 组合产品和空组件。</p>
          <p className="text-base leading-7 text-[#334155]">俄罗斯目前尚未实施全国性电子烟全面禁售，电子烟及相关液体产品仍有合法市场空间。近期围绕"允许地区政府自行禁止电子烟及相关液体销售"的立法讨论，可能改变部分地区的销售可行性，使该品类面临明显高于传统烟草和加热烟草产品的政策变动风险。</p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <StatusCard
              status="amber"
              customLabel="可准入，但面临重大变动"
              title="设备类"
              content={<>
                <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                <p className="mb-3">电子烟设备、可重复使用电子雾化设备、HNB加热设备。</p>
                <div className="font-semibold text-[#263247] mb-1">产品定性：</div>
                <p className="mb-3">根据第15-FZ号法，尼古丁产品使用装置是指用于产生含尼古丁气溶胶、蒸气或气体，并供使用者吸入的电子或其他装置，包括电子尼古丁输送系统和加热烟草系统，但不包括依法注册为医疗器械或药品的产品。</p>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>可重复使用电子烟及类似个人电加热雾化设备的数字标识仍处于试验 / 过渡阶段。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>进入零售市场仍需遵守销售地点、展示、远程销售、自动售卖和未成年人保护等限制。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>如地区禁售授权规则落地，电子烟设备在不同地区的零售可行性可能出现明显差异。</span>
                  </li>
                </ul>
              </>}
            />

            <StatusCard
              status="amber"
              customLabel="可准入，但面临重大变动"
              title="液体类"
              content={<>
                <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                <p className="mb-3">烟油、电子烟补充液、尼古丁液体、无尼古丁液体。</p>
                <div className="font-semibold text-[#263247] mb-1">产品定性：</div>
                <ul className="space-y-1 text-[#334155] mb-3">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>根据第15-FZ号法，尼古丁液体包括尼古丁含量不低于 0.1 mg/ml 的液体。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>无尼古丁液体包括不含尼古丁或尼古丁含量低于 0.1 mg/ml、并用于电子尼古丁输送系统的液体。</span>
                  </li>
                </ul>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>零售环节不得销售尼古丁浓度超过 20 mg/ml 的尼古丁液体或尼古丁溶液。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>含尼古丁液体涉及消费税、最低价格、数字标识及生产 / 进口投入流通许可。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                    <span>如地区禁售授权规则落地，尼古丁液体、无尼古丁液体、烟油和补充液可能在部分地区面临销售禁令。</span>
                  </li>
                </ul>
              </>}
            />

            <div className="md:col-span-2">
              <StatusCard
                status="amber"
                customLabel="可准入，但面临重大变动"
                title="预灌装 / 组合产品和空组件"
                content={<>
                  <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                  <p className="mb-3">含液体烟弹、设备与液体组合产品、空烟弹、空容器、普通电子烟组件。</p>
                  <div className="font-semibold text-[#263247] mb-1">产品定性：</div>
                  <p className="mb-3">俄罗斯公开法规未见对含液体烟弹、设备与液体组合产品、空烟弹或空容器设置统一单独定义。该类产品需要结合设备部分、液体部分和下游用途拆分判断。</p>
                  <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                  <ul className="space-y-1 text-[#334155]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                      <span>含液体烟弹和设备与液体组合产品应同时判断设备部分和液体部分：设备部分按尼古丁产品使用系统 / 装置判断，液体部分按尼古丁液体或无尼古丁液体判断。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                      <span>空烟弹、空容器或普通不含液体组件，通常不直接按尼古丁液体处理；如与含尼古丁液体、含液体烟弹或组合产品配套销售，应转入对应产品路径判断。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                      <span>如地区禁售授权规则落地，含液体烟弹、设备与液体组合产品需要同步确认设备部分、液体部分和组合销售形态是否被纳入地区禁售范围。</span>
                    </li>
                  </ul>
                </>}
              />
            </div>
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="4. 无烟烟草及口含 / 鼻吸 / 咀嚼类尼古丁产品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
            <li>无烟烟草产品是一个大类。俄罗斯法规主要根据产品成分、使用方式和具体产品类别区分监管，没有对所有无烟烟草产品适用统一准入规则。</li>
            <li>nasvay、snus、食品型尼古丁产品，以及用于咀嚼、吸吮、鼻吸的尼古丁产品，属于明确禁售产品。</li>
            <li>咀嚼烟草、鼻烟等传统非吸烟烟草产品，在俄罗斯法规体系中仍有合规准入路径，但适用强监管要求。</li>
            <li>HNB烟支 / 加热烟草产品不放在本栏目判断，相关信息请参见"加热烟草产品"栏目。</li>
          </ul>
          <div className="grid md:grid-cols-3 gap-4">
            <StatusCard
              status="red"
              title="法规点名禁售产品"
              content={<>
                <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                <p className="mb-3">nasvay、snus（吸吮烟草）、食品型尼古丁产品、尼古丁袋、尼古丁口含膜，以及用于咀嚼、吸吮、鼻吸的尼古丁产品。</p>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-2 pl-5 list-disc text-[#334155]">
                  <li>nasvay、snus、食品型尼古丁产品，以及用于咀嚼、吸吮、鼻吸的尼古丁产品，禁止批发和零售。</li>
                  <li>尼古丁袋、尼古丁口含膜、尼古丁粉末、尼古丁混合物等产品，如设计用途为口含、吸吮、咀嚼或鼻吸，通常按禁售产品处理。</li>
                </ul>
              </>}
            />

            <StatusCard
              status="amber"
              title="传统非吸烟烟草产品"
              content={<>
                <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                <p className="mb-3">咀嚼烟草、鼻烟，以及不构成 nasvay 或 snus 的其他传统非吸烟烟草产品。</p>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-2 pl-5 list-disc text-[#334155]">
                  <li>产品本身有合规准入空间，但需按非吸烟烟草产品的具体类别判断监管要求。</li>
                  <li>进入俄罗斯市场前，通常需要关注技术合规、包装标签、数字标识、最低价格、消费税、生产 / 进口投入流通许可和销售限制。</li>
                </ul>
              </>}
            />

            <StatusCard
              status="amber"
              title="含烟草且另含尼古丁的边界产品"
              content={<>
                <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                <p className="mb-3">含烟草材料，同时外加尼古丁，或以口含、吸吮、咀嚼、鼻吸方式递送尼古丁的袋状、片状、粉末状、混合物类产品。</p>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-2 pl-5 list-disc text-[#334155]">
                  <li>产品含有烟草材料时，仍需结合外加尼古丁、使用方式和产品宣传口径判断具体监管路径。</li>
                  <li>产品构成 nasvay、snus，或实质上属于用于咀嚼、吸吮、鼻吸的尼古丁产品的，应按禁售产品处理。</li>
                  <li>如主张按传统非吸烟烟草产品进入市场，应重点确认产品定义、成分、使用方式、标签标识、生产 / 进口流通许可、最低价格和主管机关口径。</li>
                </ul>
              </>}
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="5. 原料及辅材" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155]">
            <li>第203-FZ号法将烟草制品、烟草产品、尼古丁产品及其生产原料纳入生产流通监管。</li>
            <li>烟叶、reconstituted tobacco、烟草原料、尼古丁原料通常属于生产链条中的原料或半成品，与消费者可直接使用的烟草制品、HNB烟支、电子烟液、尼古丁袋等成品不同。</li>
            <li>俄罗斯公开法规资料未见将滤嘴棒、爆珠、香精香料等普通烟用辅材统一定义为烟草制品或尼古丁产品。该类产品通常按成分、用途、海关归类和下游产品用途判断。</li>
          </ul>
          <div className="grid md:grid-cols-3 gap-4">
            <StatusCard
              status="amber"
              title="烟草及尼古丁原料"
              content={<>
                <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                <p className="mb-3">烟叶、reconstituted tobacco、烟草原料、尼古丁原料。</p>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>可作为原料进入供应链，不宜作为普通消费者成品零售。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>俄罗斯本地生产或加工主体需取得覆盖烟草原料或尼古丁原料的生产许可。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>俄罗斯进口商需取得烟草原料或尼古丁原料进口投入流通许可。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>原料还需关注追溯信息报送。</span>
                  </li>
                </ul>
              </>}
            />

            <StatusCard
              status="green"
              title="普通烟用辅材"
              content={<>
                <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                <p className="mb-3">滤嘴棒、爆珠、香精香料、普通烟用辅材。</p>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <ul className="space-y-1 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>不含尼古丁、不含烟草提取物、仅作为普通辅材的，通常可按普通辅材理解。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                    <span>后续重点结合成分、用途、海关归类、进口监管和下游客户产品用途判断具体合规要求。</span>
                  </li>
                </ul>
              </>}
            />

            <StatusCard
              status="amber"
              title="含特殊成分或特定用途辅材"
              content={<>
                <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                <p className="mb-3">含尼古丁、烟草提取物，或作为烟油、含液体烟弹、HNB烟支、尼古丁产品组件使用的辅材。</p>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <p>应转入对应成品或原料监管路径。</p>
              </>}
            />
          </div>
        </ProductModuleCard>
      </ProductAccessSection>

      <ComplianceSection country={country} isRussiaStyle={isRussiaStyle} />

      <TaxSection>
        {country.tax.exciseTax && (
          <div className="mb-6">
            <p className="text-[#334155] text-base leading-7">{country.tax.exciseTax}</p>
          </div>
        )}

        {country.tax.policies.find(p => p.title === '消费税说明') && (
          <TaxTableCard title="消费税说明">
            <BulletList items={[
              '俄罗斯对烟草及尼古丁相关产品按产品类型适用消费税，税率按年度逐步调整。',
              '卷烟、papirosy（俄式纸嘴卷烟）适用复合税率；加热消费用烟草、电子尼古丁输送系统液体、尼古丁原料、无烟草尼古丁加热混合物等按固定税额计征。',
              '单纯电子烟设备和 HNB 加热设备本身不按消费税税目征税，但进口时仍需结合 HS 归类确认关税、进口增值税和清关监管要求。'
            ]} />
          </TaxTableCard>
        )}

        {country.tax.exciseTaxTable && (
          <TaxTableCard title="消费税税率表">
            <div className="overflow-x-auto">
              <table className="w-full text-base border-collapse border-[#D8DDED]">
                <thead>
                  <tr className="bg-[#E8EDF5]">
                    {country.tax.exciseTaxTable.headers.map((header, idx) => (
                      <th key={idx} className="px-4 py-4 text-left font-bold text-[#2E3F73] border border-[#D8DDED]" style={idx === 0 ? { width: '28%' } : { width: '24%' }}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {country.tax.exciseTaxTable.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white/50' : 'bg-[#F3F5FB]'}>
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="px-4 py-4 border border-[#D8DDED] text-[#334155] leading-7">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TaxTableCard>
        )}

        {country.tax.policies.find(p => p.title === '最低价格说明') && (
          <TaxTableCard title="最低价格说明">
            <ul className="list-disc pl-5 space-y-2 text-[#334155] text-base leading-7">
              <li>俄罗斯对卷烟、papirosy、加热烟草产品、电子尼古丁输送系统用液体、雪茄、水烟烟草等主要烟草和尼古丁产品设置最低价格或最低零售价格。</li>
              <li>最低价格依据主要包括第203-FZ号联邦法第7条、俄罗斯政府批准的最低价格确定规则，以及俄罗斯农业部发布的2026年最低价格信息公告。</li>
              <li>最低价格公告中的产品分类不等于市场准入许可；具体产品仍需结合禁售规则、技术合规、标识、许可和销售限制要求判断。</li>
            </ul>
          </TaxTableCard>
        )}

        {country.tax.minimumPriceTable && (
          <TaxTableCard title="最低价格表">
            <div className="overflow-x-auto">
              <table className="w-full text-base border-collapse border-[#D8DDED]">
                <thead>
                  <tr className="bg-[#E8EDF5]">
                    {country.tax.minimumPriceTable.headers.map((header, idx) => (
                      <th key={idx} className="px-4 py-4 text-left font-bold text-[#2E3F73] border border-[#D8DDED]" style={idx === 0 ? { width: '42%' } : { width: '58%' }}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {country.tax.minimumPriceTable.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white/50' : 'bg-[#F3F5FB]'}>
                      <td className="px-4 py-4 border border-[#D8DDED] text-[#334155] leading-7 font-medium">
                        {row[0]}
                      </td>
                      <td className="px-4 py-4 border border-[#D8DDED] text-[#334155] leading-7">
                        {row[0] === '水烟烟草' ? (
                          <ul className="list-disc pl-5 space-y-1">
                            {String(row[1]).split('；').map((item: string, i: number) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          String(row[1])
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TaxTableCard>
        )}
      </TaxSection>

      <MarketOperationSection>
        {country.marketOperation.regulations.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {country.marketOperation.regulations.map((regulation, index) => (
              <RuleCard
                key={index}
                number={index + 1}
                title={regulation.category}
                items={regulation.items}
              />
            ))}
          </div>
        ) : (
          <>
            {country.marketOperation.marketingRestrictions && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">营销限制</h3>
                <p className="text-gray-700">{country.marketOperation.marketingRestrictions}</p>
              </div>
            )}
            {country.marketOperation.displaySales && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">销售与陈列</h3>
                <p className="text-gray-700">{country.marketOperation.displaySales}</p>
              </div>
            )}
            {!country.marketOperation.marketingRestrictions && !country.marketOperation.displaySales && (
              <p className="text-gray-500 italic">暂无市场运营规范数据</p>
            )}
          </>
        )}
      </MarketOperationSection>

      <SectionCard title="政策趋势分析">
        <SubCard title="趋势分析">
          <div className="space-y-5">
            <div>
              <h4 className="font-bold text-[#243B63] text-base mb-2">1. 整体方向：保留合法市场，提高监管控制力</h4>
              <p className="text-[#334155] text-base leading-7">俄罗斯烟草监管的长期方向，是在保留合法烟草市场的同时，提高国家对生产、流通和零售端的控制力。后续监管重点预计会继续围绕市场秩序、税收征管、产品追溯、销售端许可和未成年人保护展开。</p>
            </div>
            <div>
              <h4 className="font-bold text-[#243B63] text-base mb-2">2. 传统烟草和加热烟草：合法市场内强监管</h4>
              <p className="text-[#334155] text-base leading-7">传统烟草和加热烟草产品仍会沿着"合法市场内强监管"的方向发展。监管工具会更多集中在生产流通许可、数字标识、最低价格、消费税和零售许可改革，以减少未许可经营、低价销售、假冒产品和灰色流通。</p>
            </div>
            <div>
              <h4 className="font-bold text-[#243B63] text-base mb-2">3. 电子烟：可准入状态下面临重大变动风险</h4>
              <p className="text-[#334155] text-base leading-7">电子烟及相关液体产品目前仍保留合法市场空间，但已经成为俄罗斯烟草及尼古丁监管中政策变动风险最高的品类之一。</p>
              <p className="text-[#334155] text-base leading-7 mt-2">近期最值得关注的是地区禁售授权讨论。相关方案如正式落地，俄罗斯电子烟监管将从全国统一规则下的强监管，进一步转向"联邦规则 + 地区禁售"的混合模式。部分地区可能禁止销售，部分地区继续保留合规销售空间。后续判断俄罗斯电子烟市场时，需要具体到地区层面确认准入、渠道、库存和零售终端风险。</p>
            </div>
            <div>
              <h4 className="font-bold text-[#243B63] text-base mb-2">4. 口含、鼻吸、咀嚼类尼古丁产品：维持禁售方向</h4>
              <p className="text-[#334155] text-base leading-7">口含、鼻吸、咀嚼类尼古丁产品已经进入明确禁售方向。nasvay、snus、食品型尼古丁产品，以及用于咀嚼、吸吮、鼻吸的尼古丁产品，仍应按高风险或禁售产品处理。</p>
              <p className="text-[#334155] text-base leading-7 mt-2">尼古丁袋、尼古丁口含膜、尼古丁粉末、尼古丁混合物等产品，如设计用途为口含、吸吮、咀嚼或鼻吸，通常不具备普通消费市场准入空间。</p>
            </div>
          </div>
        </SubCard>
        <RedLineBox items={country.trendsWarnings.redLines} />
      </SectionCard>

      <ReferencesSection
        tipText="以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。俄罗斯相关法律、政府令和部门公告可能经过后续修订或按年度更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。"
        regulationContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="市场准入与生产流通监管">
              <ReferenceItem
                url="https://publication.pravo.gov.ru/document/0001202306130005"
                title="《俄罗斯联邦第203-FZ号法〈关于烟草制品、烟草产品、尼古丁产品及其生产原料的生产和流通国家监管〉》"
                description={<><span className="font-semibold">主要内容：</span>俄罗斯烟草、尼古丁产品及相关原料生产流通的基础法律，主要影响生产、进口、出口、储存、供应、生产流通许可及相关监管要求。页面链接为官方公布文本；后续适用需结合后续修正及现行有效文本确认。</>}
              />
              <ReferenceItem
                showSeparator
                url="https://publication.pravo.gov.ru/Document/View/0001201302250007"
                title="《俄罗斯联邦第15-FZ号法〈关于保护公民健康免受环境烟草烟雾影响、烟草消费后果或尼古丁产品消费后果影响〉》"
                description={<><span className="font-semibold">主要内容：</span>俄罗斯控烟和市场销售限制的核心法律，主要影响销售地点、销售方式、产品展示、广告促销、未成年人保护、公共场所使用限制和特定产品禁售。该法后续曾多次修订，页面链接为2013年官方公布文本；涉及尼古丁产品、禁售范围等问题时，应结合后续修正后的现行文本确认。</>}
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="产品技术合规与分类规则">
              <ReferenceItem
                url="https://eec.eaeunion.org/comission/department/deptexreg/tr/tabac.php"
                title="《欧亚经济联盟烟草制品技术法规》（TR CU 035/2014）"
                description={<><span className="font-semibold">主要内容：</span>欧亚经济联盟层面的烟草制品技术合规规则，主要影响烟草制品的技术要求、包装标签、健康警示、消费者信息和符合性声明。适用俄罗斯市场时，通常需要与俄罗斯国内生产流通、销售限制、标识追溯、消费税和最低价格规则一并判断。</>}
              />
              <ReferenceItem
                showSeparator
                url="https://www.kremlin.ru/acts/bank/28603"
                title="《俄罗斯联邦第268-FZ号法〈无烟烟草产品技术法规〉》"
                description={<><span className="font-semibold">主要内容：</span>无烟烟草产品的技术识别和技术合规规则，主要涉及非吸烟烟草产品的技术要求、识别、标签和合格评定。该技术法规本身不等于市场准入许可；具体产品能否进入俄罗斯市场，还需结合第15-FZ号法的禁售规则、第203-FZ号法的生产流通监管、数字标识、最低价格和销售限制判断。</>}
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="数字标识与追溯规则">
              <ReferenceItem
                url="https://publication.pravo.gov.ru/Document/View/0001201903060010"
                title="《俄罗斯联邦政府第224号令〈关于批准烟草产品识别标识规则等〉》"
                description={<><span className="font-semibold">主要内容：</span>烟草产品数字标识和追溯规则的基础政府令，主要影响赋码、贴码、流转信息报送及市场追溯。后续俄罗斯对烟草、尼古丁产品及相关原料的标识和追溯规则已有扩展，具体适用品类和操作要求需结合最新修订、Chestny ZNAK系统规则及主管机关口径确认。</>}
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="消费税规则">
              <ReferenceItem
                title="《俄罗斯联邦税法典》消费税规则"
                description="俄罗斯烟草、加热烟草、电子烟液、尼古丁原料、无烟草尼古丁加热混合物等产品的消费税主要依据《俄罗斯联邦税法典》确定。消费税税目和税率按产品类型和年度列明，页面中的2026—2028年税率应以税法典现行有效文本为准。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="最低价格规则">
              <ReferenceItem
                url="https://publication.pravo.gov.ru/document/0001202306130005"
                title="规则依据：第203-FZ号法第7条"
                description={<><span className="font-semibold">主要内容：</span>第203-FZ号法第7条是烟草产品、尼古丁产品最低价格或最低零售价格规则的上位法律依据。具体计算方式和年度数值还需要结合政府规则和农业部年度信息公告确认。</>}
              />
              <ReferenceItem
                showSeparator
                title="俄罗斯政府最低价格确定规则"
                description={<><span className="font-semibold">主要内容：</span>最低价格不是由一个文件单独完成，通常由第203-FZ号法第7条、俄罗斯政府批准的最低价格确定规则，以及俄罗斯农业部年度信息公告共同构成。卷烟、papirosy，其他烟草产品，以及尼古丁产品分别适用不同的最低价格发布口径。</>}
              />
              <ReferenceItem
                showSeparator
                url="https://mcx.gov.ru/ministry/departments/departament-pishchevoy-i-pererabatyvayushchey-promyshlennosti/industry-information/info-vinogradarstvo-vinodelie-i-tabachnaya-produktsiya/"
                title="俄罗斯农业部2026年最低价格信息公告"
                description={<><span className="font-semibold">主要内容：</span>该页面为俄罗斯农业部"葡萄种植、葡萄酒和烟草产品"信息页，集中发布烟草及尼古丁产品最低价格相关信息公告。</>}
              >
                <div className="ml-4 pl-4 border-l-2 border-[#D8DDED] space-y-3">
                  <div>
                    <a href="https://mcx.gov.ru/upload/iblock/f9d/kerwlytu1facd9hpgt98jp71sdtf6ri4.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#263247] text-base mb-1 hover:underline block">
                      1. 卷烟、papirosy 2026年统一最低价格信息公告
                    </a>
                    <p className="text-sm text-[#334155]">
                      <span className="font-semibold">主要内容：</span>确认2026年卷烟、papirosy统一最低价格为153卢布/包。
                    </p>
                  </div>

                  <div>
                    <a href="https://mcx.gov.ru/upload/iblock/987/u63qxprbo9xrcsuayjbfnhn9ed3o3b03.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#263247] text-base mb-1 hover:underline block">
                      2. 尼古丁产品2026年最低价格信息公告
                    </a>
                    <p className="text-sm text-[#334155]">
                      <span className="font-semibold">主要内容：</span>列明加热烟草产品、电子尼古丁输送系统用液体、一次性设备内液体、未列明尼古丁产品等最低价格。
                    </p>
                  </div>

                  <div>
                    <a href="https://mcx.gov.ru/upload/iblock/852/cxse5pvp2iotik4yv28jnma3r33crey5.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#263247] text-base mb-1 hover:underline block">
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
                title="俄罗斯推进烟草和尼古丁产品批发 / 零售许可改革"
                description="报道涉及俄罗斯烟草和尼古丁产品批发、零售许可改革安排，反映监管重点正在从产品本身延伸到批发和零售经营端控制。"
              />
              <ReferenceItem
                showSeparator
                url="https://interfax.com/newsroom/top-stories/116871/"
                title="俄罗斯批发 / 零售许可改革时间调整相关报道"
                description="报道显示，烟草和尼古丁产品批发、零售许可改革的实施时间和落地节奏仍在调整，企业仍需关注后续正式实施安排。"
              />
              <ReferenceItem
                showSeparator
                url="https://en.iz.ru/en/2019182/2026-01-01/excise-taxes-tobacco-products-have-been-indexed-russia-january-1"
                title="俄罗斯2026年烟草产品消费税调整报道"
                description="报道涉及2026年烟草、尼古丁及相关产品消费税调整，反映俄罗斯继续通过税收工具提高合法产品成本和监管强度。"
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="电子烟地区禁售授权与政策讨论">
              <ReferenceItem
                url="https://www.interfax.ru/russia/1085605"
                title="Interfax：国家杜马计划审议允许地区禁止销售 vape 的修正案"
                description="报道称，国家杜马主席表示，允许俄罗斯地区自行禁止销售 vape 的修正案计划在 5 月审议。该信息说明地区禁售授权已进入联邦立法讨论层面。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.kommersant.ru/doc/8655501"
                title="Kommersant：国家杜马委员会支持地区禁售 vape 方案"
                description="报道称，国家杜马相关委员会支持允许地区禁止销售 vape 的方案，并提到下诺夫哥罗德州曾提出地区性禁售安排。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.forbes.ru/biznes/561378-biznes-poprosil-putina-otkazat-sa-ot-zapreta-prodazi-vejpov-na-urovne-regionov"
                title="Forbes：企业请求总统反对地区层面 vape 禁售"
                description="报道称，企业组织认为地区自行禁售会造成合法市场割裂、经营条件不一致，并可能推动非法市场扩张。"
              />
              <ReferenceItem
                showSeparator
                url="https://www.kommersant.ru/doc/8674941"
                title="Kommersant：企业组织要求排除地区禁售 vape 权限"
                description={'报道称，"俄罗斯支柱"等企业组织反对在烟草贸易许可法案中加入地区自行禁止 vape 销售的权限，财政部表示该措施作为五年实验方案仍在研究。'}
              />
              <ReferenceItem
                showSeparator
                url="https://www.forbes.ru/biznes/558471-biznes-obratilsa-v-pravitel-stvo-s-pros-boj-otkazat-sa-ot-zapreta-na-prodazu-vejpov"
                title="Forbes：俄罗斯讨论全国性电子烟禁令和销售场景限制"
                description="报道梳理了俄罗斯全国性电子烟禁令讨论、销售场景限制以及相关政策背景，可作为电子烟监管趋严的补充参考。"
              />
            </ReferenceGroupCard>
          </div>
        }
      />
    </CountryPageTemplate>
  );
}
