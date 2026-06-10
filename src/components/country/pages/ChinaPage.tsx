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
  BulletPoint,
  StatusBulletPoint,
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
            content: '2026年4月，《加热卷烟》《尼古丁袋》两项拟立项强制性国家标准项目公开征求意见，公示期至2026年5月7日。该动态体现出监管规则正在向加热卷烟、尼古丁袋等新型产品延伸，但在正式准入规则、产品标准和销售渠道安排落地前，相关产品不能据此直接进入中国市场。',
          },
        ]}
      />

      <RegulatorySystemSection
        cards={[
          {
            title: '核心特征',
            content: (
              <div className="text-justify">
                <p className="text-lg font-semibold text-[#1F2A44] leading-8 mb-5">国家烟草专卖、严格许可准入、强计划管理、强渠道管控和强执法</p>
                <div className="space-y-5">
                  <div>
                    <h4 className="font-bold text-[#243B63] text-base mb-2">专卖制度</h4>
                    <div className="space-y-2">
                      <BulletPoint>中国内地将烟叶、卷烟等烟草制品及烟草专用机械作为烟草专卖品，实行国家烟草专卖制度。国家烟草专卖局与中国烟草总公司实行"一套人马、两块牌子"，分别承担专卖行政管理和行业经营管理职能。</BulletPoint>
                      <BulletPoint>专卖管理贯穿烟草专卖品生产、销售、运输、进出口等全链条，主要通过许可证、生产计划、准运证、专门销售渠道、进出口审批和执法检查等方式实现。</BulletPoint>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#243B63] text-base mb-2">卷烟等传统烟草制品</h4>
                    <div className="space-y-2">
                      <BulletPoint>卷烟等传统烟草制品不是普通市场自由经营。生产、批发和进出口主要在中国烟草总公司及其所属企业体系内组织；零售主体需取得烟草专卖零售许可证，并在当地烟草专卖批发企业进货，接受发证机关监督管理。</BulletPoint>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#243B63] text-base mb-2">电子烟</h4>
                    <div className="space-y-2">
                      <BulletPoint>电子烟已经纳入烟草监管体系，但与传统卷烟适用不同规则，主要体现在许可证类型、产品技术审评、交易平台、批发零售渠道和产品标准等方面。</BulletPoint>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#243B63] text-base mb-2">新型烟草和新型尼古丁产品</h4>
                    <div className="space-y-2">
                      <BulletPoint>加热卷烟、尼古丁袋等新型烟草和新型尼古丁产品，目前尚未形成面向中国境内消费者市场的开放销售路径。</BulletPoint>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: '监管部门',
            content: (
              <ul className="list-disc pl-5 space-y-3 text-base leading-7 text-[#334155] text-justify">
                <li><span className="font-semibold text-[#263247]">国家烟草专卖局：</span>负责全国烟草专卖监督管理，统筹烟草专卖许可证、烟草专卖品生产经营、专卖执法、产业政策、电子烟监管及新型烟草制品监管规则。</li>
                <li><span className="font-semibold text-[#263247]">地方烟草专卖主管部门：</span>负责本行政区域内烟草专卖日常监管，办理相关许可，开展市场检查、零售端监管和违法行为查处。</li>
                <li><span className="font-semibold text-[#263247]">海关：</span>负责烟草专卖品、电子烟及相关产品进出口环节的口岸监管、证照核验、通关查验和走私打击。</li>
                <li><span className="font-semibold text-[#263247]">税务、市场监管、公安等部门：</span>分别在税收征管、市场主体登记、产品质量、广告价格监管、消费者权益保护、无证无照经营查处和涉烟违法犯罪打击等环节参与监管或协同执法。</li>
              </ul>
            ),
          },
        ]}
      />

      <ProductAccessSection>
        <ProductModuleCard title="1. 烟草专卖品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] text-justify mb-4">
            <li>《中华人民共和国烟草专卖法》将烟草专卖品定义为卷烟、雪茄烟、烟丝、复烤烟叶、烟叶、卷烟纸、滤嘴棒、烟用丝束和烟草专用机械；其中，卷烟、雪茄烟、烟丝、复烤烟叶统称烟草制品。烟草薄片作为烟草原料加工形成的再造烟草材料，应结合具体产品形态、用途及流通环节，确定相应的烟草专卖监管要求。</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="amber"
              customLabel="可准入，但严格限制"
              title="烟草原料及制品"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：卷烟、雪茄烟、烟丝、复烤烟叶、烟叶、烟草薄片</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <StatusBulletPoint status="green">烟草专卖品的生产、批发、零售、运输和进出口均实行专卖管理，核心监管工具包括烟草专卖许可证、计划管理、准运证、购销渠道和产品流向控制。</StatusBulletPoint>
                  <StatusBulletPoint status="green">卷烟、雪茄烟、烟丝、复烤烟叶等烟草制品的生产和批发主要由取得相应烟草专卖许可证的烟草制品生产企业、烟草专卖批发企业承担；社会主体取得烟草专卖零售许可证后，可以在许可地点和许可范围内从事零售。</StatusBulletPoint>
                  <StatusBulletPoint status="green">烟叶、烟草薄片等烟草原料，通常围绕持证烟草制品生产企业、持证批发企业、依法获准进出口主体及其合规供应链流转。</StatusBulletPoint>
                  <StatusBulletPoint status="green">烟草专卖品不得脱离许可范围、计划安排、准运要求和合法购销渠道流通；向无资质主体销售、无证运输、跨许可范围经营或流向不明，均不符合烟草专卖监管要求。</StatusBulletPoint>
                </div>
              </>}
            />
            <StatusCard
              status="amber"
              customLabel="可准入，但严格限制"
              title="特殊配套材料"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：卷烟纸、滤嘴棒、烟用丝束</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <StatusBulletPoint status="green">卷烟纸、滤嘴棒、烟用丝束被明确列为烟草专卖品，按烟草专卖品管理；未被列入烟草专卖品范围的其他不含烟草配套材料，不按烟草专卖品管理。</StatusBulletPoint>
                  <StatusBulletPoint status="green">卷烟纸、滤嘴棒、烟用丝束应在持证烟草制品生产企业、持证批发企业、依法获准进出口主体及其合规供应链之间流转。</StatusBulletPoint>
                  <StatusBulletPoint status="green">相关烟草专卖品不得脱离许可范围、计划安排、准运要求和合法购销渠道流通；向无资质主体销售、无证运输、跨许可范围经营或流向不明，均不符合烟草专卖监管要求。</StatusBulletPoint>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="2. 电子烟、雾化物及电子烟用烟碱" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] text-justify mb-4">
            <li>《电子烟管理办法》规定，电子烟包括烟弹、烟具以及烟弹与烟具组合销售的产品等。《电子烟》强制性国家标准将电子烟界定为用于产生气溶胶供人抽吸等的电子传送系统。</li>
            <li>雾化物是可被电子装置等全部或部分雾化为气溶胶的混合物及辅助物质；电子烟用烟碱是从烟草中提取、用于电子烟产品的烟碱。</li>
          </ul>
          <div className="grid md:grid-cols-3 gap-4">
            <StatusCard
              status="amber"
              customLabel="可准入，但严格限制"
              title="电子烟产品"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：烟具、烟弹、烟弹与烟具组合销售产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <StatusBulletPoint status="green">生产、代加工、品牌持有、批发和零售主体均需取得对应烟草专卖许可，实际经营内容应与许可范围一致。</StatusBulletPoint>
                  <StatusBulletPoint status="green">境内上市销售的电子烟产品应通过技术审评，符合强制性国家标准、包装警语、追溯管理和质量安全要求。</StatusBulletPoint>
                  <StatusBulletPoint status="green">电子烟产品经营主体之间的购销交易，应依法通过电子烟交易管理平台进行。</StatusBulletPoint>
                  <StatusBulletPoint status="green">零售主体应通过电子烟交易管理平台向电子烟批发企业或电子烟进口经营企业购进电子烟产品，并在持证门店销售。</StatusBulletPoint>
                  <StatusBulletPoint status="green">不得通过电子烟交易管理平台以外的信息网络销售电子烟产品。</StatusBulletPoint>
                  <StatusBulletPoint status="green">在中国内地只能销售烟草口味的电子烟，不得销售其他任何口味的调味电子烟。</StatusBulletPoint>
                  <StatusBulletPoint status="green">不得销售可自行添加雾化物的电子烟。</StatusBulletPoint>
                </div>
              </>}
            />
            <StatusCard
              status="amber"
              customLabel="可准入，但严格限制"
              title="雾化物及电子烟用烟碱"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：雾化物、电子烟用烟碱及相关原料</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <StatusBulletPoint status="green">雾化物生产企业、电子烟用烟碱生产企业应取得烟草专卖生产企业许可证，实际生产、销售内容应与许可范围一致。</StatusBulletPoint>
                  <StatusBulletPoint status="green">雾化物、电子烟用烟碱的经营主体之间交易，应按规定通过电子烟交易管理平台进行。</StatusBulletPoint>
                  <StatusBulletPoint status="green">进出口雾化物、电子烟用烟碱，应按规定通过电子烟交易管理平台备案。</StatusBulletPoint>
                  <StatusBulletPoint status="green">雾化物和电子烟用烟碱主要流向电子烟产品、雾化物等合规生产环节，不得作为普通原料自由销售或流通。</StatusBulletPoint>
                  <StatusBulletPoint status="green">不得通过电子烟交易管理平台以外的信息网络销售雾化物和电子烟用烟碱。</StatusBulletPoint>
                </div>
              </>}
            />
            <StatusCard
              status="red"
              customLabel="不得上市销售"
              title="无烟碱电子烟 / 变相电子烟产品"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：草本雾化器、草本烟弹、无烟碱烟弹、本草 / 中药雾化器、其他宣称不含烟碱但用于雾化吸入的消费级电子传送产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <StatusBulletPoint status="red">中国电子烟监管关注的是产品是否属于"产生气溶胶供人抽吸"的电子传送产品，是否含有烟碱不是唯一判断标准。不含烟碱成分，但以抽吸、雾化吸入、替代电子烟或类似电子烟方式使用的产品，仍可能被认定为电子烟。</StatusBulletPoint>
                  <StatusBulletPoint status="red">一旦被认定为电子烟，产品必须符合电子烟强制性国家标准，并完成产品技术审评后方可上市销售。由于《电子烟》强制性国家标准要求雾化物应含有烟碱，无烟碱烟弹、草本烟弹、本草 / 中药雾化器等产品不满足此标准，难以通过电子烟路径在中国境内合规销售。</StatusBulletPoint>
                  <StatusBulletPoint status="red">以草本、中药、无烟碱、医疗器械等名义包装或宣传，不能当然排除电子烟监管；产品实际以类似电子烟方式使用的，可能被认定为变相电子烟，面临查处、下架、行政处罚乃至刑事处罚。</StatusBulletPoint>
                  <StatusBulletPoint status="red">医用雾化器、雾化吸入制剂、雾化给药装置等真实医疗用途产品，应按药品、医疗器械等医药产品路径履行合规要求，不应按电子烟概念包装销售。</StatusBulletPoint>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="3. 新型烟草 / 尼古丁制品" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] text-justify mb-4">
            <li>新型烟草 / 尼古丁制品主要包括加热烟草产品、无烟气烟草制品等产品。</li>
            <li>中国目前尚未开放加热卷烟、尼古丁袋等产品在境内消费者市场销售或流通。2026年以来，相关标准和监管文件已释放规则建设信号，但境内销售准入、产品标准和销售渠道仍未明确。</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="red"
              customLabel="完全禁止"
              title="加热烟草产品"
              content={<>
                <div className="text-base text-[#334155] mb-3">产品定性：该类产品通常指通过专门加热装置加热烟草材料，产生气溶胶供消费者吸用的产品。</div>
                <div className="text-base text-[#334155] mb-2">适用产品：加热卷烟、加热烟草棒</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <StatusBulletPoint status="red">加热烟草产品具有烟草属性，但不同于已开放销售的传统卷烟，也不属于现行电子烟产品路径下的普通电子烟。</StatusBulletPoint>
                  <StatusBulletPoint status="red">中国目前尚未开放加热卷烟在境内消费者市场销售或流通。</StatusBulletPoint>
                  <StatusBulletPoint status="red">2026年《加热卷烟》强制性国家标准拟立项，说明相关产品的监管标准建设正在推进；在准入规则、许可路径和销售渠道明确前，相关产品不能进入中国境内消费者市场销售。</StatusBulletPoint>
                </div>
              </>}
            />
            <StatusCard
              status="red"
              customLabel="完全禁止"
              title="无烟气烟草制品"
              content={<>
                <div className="text-base text-[#334155] mb-3">产品定性：国家烟草专卖局2026年第1号公告将无烟气烟草制品定义为含有烟碱成分，通过口用、鼻用或外用等方式使用，且不产生烟气的烟草制品。</div>
                <div className="text-base text-[#334155] mb-2">适用产品：尼古丁袋、尼古丁片、尼古丁贴、含烟、嚼烟、膏烟、溶烟、嗅烟</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <StatusBulletPoint status="red">中国目前尚未开放无烟气烟草制品 / 尼古丁制品在境内生产、销售或流通。</StatusBulletPoint>
                  <StatusBulletPoint status="red">2026年《尼古丁袋》强制性国家标准拟立项，说明相关产品的监管标准建设正在推进；在正式准入规则落地前，相关产品不得在中国境内生产、销售或流通。</StatusBulletPoint>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="4. 烟草专用机械" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] text-justify mb-4">
            <li>《中华人民共和国烟草专卖法》将烟草专用机械列入烟草专卖品。</li>
            <li>《中华人民共和国烟草专卖法实施条例》规定，烟草专用机械是指烟草专用机械的整机，具体范围以国务院烟草专卖行政主管部门公布的烟草专用机械名录为准。</li>
          </ul>
          <StatusCard
            status="amber"
            customLabel="可准入，但严格限制"
            title="烟草专用机械"
            content={<>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <div className="space-y-2">
                <StatusBulletPoint status="green">烟草专用机械实行烟草专卖管理，生产、销售、运输、进口、购进、转让和使用均受许可、批准、准运和流向管理约束。</StatusBulletPoint>
                <StatusBulletPoint status="green">生产烟草专用机械应取得烟草专卖生产企业许可证；烟草专用机械的购进、出售、转让、运输和进口，应按照烟草专卖法律法规及主管部门要求办理相应手续，并接受设备流向管理。</StatusBulletPoint>
                <StatusBulletPoint status="green">烟草专用机械应围绕持证烟草制品生产企业或其他依法获准使用相关设备的主体流转，不得作为普通机械设备自由销售和流通。</StatusBulletPoint>
              </div>
            </>}
          />
        </ProductModuleCard>

        <ProductModuleCard title="5. 爆珠 / 香精胶囊" label="产品定性">
          <ul className="space-y-2 pl-5 list-disc text-base leading-7 text-[#334155] text-justify mb-4">
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
                <div className="space-y-2">
                  <StatusBulletPoint status="green">爆珠 / 香精胶囊本身不是烟草专卖品；不含尼古丁、烟草原料或烟草提取物的产品，不因其可被用于烟草制品或电子烟生产而当然转化为烟草专卖品或电子烟产品。</StatusBulletPoint>
                  <StatusBulletPoint status="green">不含尼古丁、烟草原料或烟草提取物的产品，可按普通香精胶囊或辅材处理。</StatusBulletPoint>
                </div>
              </>}
            />
            <StatusCard
              status="amber"
              customLabel="可准入，但严格限制"
              title="含尼古丁 / 烟草成分的爆珠、胶囊及类似辅材"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：含尼古丁、烟草原料或烟草提取物的爆珠、香精胶囊及类似辅材</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <StatusBulletPoint status="green">含尼古丁、烟草原料或烟草提取物的爆珠、胶囊及类似辅材，应结合其具体成分、产品形态和交易环节判断是否落入烟草专卖、电子烟、药品或其他监管要求。</StatusBulletPoint>
                  <StatusBulletPoint status="green">相关产品不得以"香精胶囊""普通辅材"等名义规避成分监管、许可要求、进出口要求或流向管理要求。</StatusBulletPoint>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>
      </ProductAccessSection>

      <ComplianceSection country={country}>
        <p className="text-[#334155] text-base leading-7 text-justify mb-6">中国烟草及新型烟草业务的合规资质应按产品品类和经营活动分别判断。一般营业执照不足以开展涉烟业务，不同产品、不同环节需要不同类型和不同范围的烟草专卖许可证。</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">1</span>
              <h4 className="font-bold text-[#2E3F73] text-base">烟草制品及烟草专卖品</h4>
            </div>
            <p className="ml-9 text-[#334155] text-base leading-7 text-justify mb-3">涉及卷烟、雪茄烟、烟丝、复烤烟叶、烟叶、卷烟纸、滤嘴棒、烟用丝束、烟草专用机械等烟草专卖品的生产、批发、零售、运输和进出口，应按烟草专卖体系取得相应许可或纳入相应管理。</p>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6 flex-1 min-w-0"><span className="font-semibold text-[#263247]">烟草专卖生产企业许可证：</span>适用于烟草制品、卷烟纸、滤嘴棒、烟用丝束、烟草专用机械等生产环节。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6 flex-1 min-w-0"><span className="font-semibold text-[#263247]">烟草专卖批发企业许可证：</span>适用于烟草制品批发环节。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6 flex-1 min-w-0"><span className="font-semibold text-[#263247]">烟草专卖零售许可证：</span>适用于卷烟等烟草制品零售环节。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6 flex-1 min-w-0"><span className="font-semibold text-[#263247]">烟草专卖品准运相关要求：</span>适用于烟草专卖品运输、跨区域流转等环节。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6 flex-1 min-w-0"><span className="font-semibold text-[#263247]">进出口相关审批和监管：</span>适用于烟草专卖品进口、出口及海关监管。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">2</span>
              <h4 className="font-bold text-[#2E3F73] text-base">电子烟</h4>
            </div>
            <p className="ml-9 text-[#334155] text-base leading-7 text-justify mb-3">电子烟与传统卷烟虽然同属烟草监管体系，但证照和监管路径是分开的。电子烟相关主体应根据实际角色取得对应烟草专卖许可证，不能用传统卷烟相关许可当然覆盖电子烟业务。</p>
            <div className="ml-9 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6 flex-1 min-w-0">电子烟产品生产企业许可</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6 flex-1 min-w-0">电子烟品牌持有企业许可</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6 flex-1 min-w-0">雾化物生产企业许可</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6 flex-1 min-w-0">电子烟用烟碱生产企业许可</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6 flex-1 min-w-0">电子烟批发企业许可</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6 flex-1 min-w-0">电子烟零售许可</span>
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
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">烟草专用机械属于烟草专卖品。涉及烟草专用机械整机生产、销售、运输、进出口的，应按烟草专卖品路径判断。</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
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
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">电子烟交易管理平台是电子烟供应链交易和监管平台。生产企业、品牌持有企业、批发企业、零售主体均应按规定通过平台完成相应交易或购进安排。</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-6">零售主体的核心要求是通过平台向当地电子烟批发企业购进产品，并在持证门店销售。</span>
              </div>
            </div>
          </div>
        </div>
      </ComplianceSection>

      <TaxSection>
        <TaxTableCard title="消费税">
          <p className="text-[#334155] text-base leading-7 text-justify mb-4">中国对卷烟、雪茄烟、烟丝、电子烟等产品征收消费税。卷烟和电子烟的税率结构涉及多个征税环节，雪茄烟和烟丝的主要税率较明确。</p>
          <div className="overflow-x-auto rounded-xl border border-[#D8DDED]">
            <table className="w-full text-base min-w-[600px] bg-white">
              <thead>
                <tr className="bg-[#E8EDF5]">
                  <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED]" style={{ width: '12%' }}>产品</th>
                  <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED]" style={{ width: '18%' }}>征税环节</th>
                  <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED]" style={{ width: '70%' }}>税率口径</th>
                </tr>
              </thead>
              <tbody>
                {/* 卷烟 - 生产/进口环节 */}
                <tr className="bg-white/50">
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44] align-top" rowSpan={2}>卷烟</td>
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155] align-top">生产 / 进口环节</td>
                  <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155] align-top">
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">按甲类、乙类分别计征，并叠加从量税。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">甲类卷烟：调拨价每标准条 70 元以上，税率为 56% + 0.003 元 / 支。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">乙类卷烟：调拨价每标准条 70 元以下，税率为 36% + 0.003 元 / 支。</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* 卷烟 - 批发环节 */}
                <tr className="bg-white/50">
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155] align-top">批发环节</td>
                  <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155] align-top">
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">批发环节不区分甲类、乙类。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">按批发卷烟的销售额计征 11%，并按 0.005 元 / 支加征从量税。</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* 雪茄烟 */}
                <tr className="bg-[#F3F5FB]">
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44] align-top">雪茄烟</td>
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155] align-top">生产 / 进口环节</td>
                  <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155] align-top">
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">36%。</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* 烟丝 */}
                <tr className="bg-white/50">
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44] align-top">烟丝</td>
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155] align-top">生产 / 进口环节</td>
                  <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155] align-top">
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">30%。</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* 电子烟 - 生产/进口环节 */}
                <tr className="bg-[#F3F5FB]">
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44] align-top" rowSpan={2}>电子烟</td>
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155] align-top">生产 / 进口环节</td>
                  <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155] align-top">
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">生产 / 进口环节税率为 36%。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">生产环节按生产电子烟的销售额计税；进口环节按组成计税价格计税。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">通过代加工方式生产电子烟的，由持有商标的企业缴纳消费税。</span>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* 电子烟 - 批发环节 */}
                <tr className="bg-[#F3F5FB]">
                  <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155] align-top">批发环节</td>
                  <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155] align-top">
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">批发环节税率为 11%。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#4A6290] mt-2 flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">按批发电子烟的销售额计税。</span>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </TaxTableCard>

        <TaxTableCard title="增值税">
          <p className="text-[#334155] text-base leading-7 text-justify">烟草制品、电子烟、雾化物、电子烟用烟碱及相关辅材的境内销售，通常按照增值税一般规则处理。境内销售通常涉及销项税额、进项抵扣和发票管理；出口业务需区分退税、免税、征税或取消退税等不同情形。</p>
        </TaxTableCard>

        <TaxTableCard title="电子烟出口退税">
          <p className="text-[#334155] text-base leading-7 text-justify">自2026年4月1日起，商品编码2404120000项下"不含烟草或再造烟草、含尼古丁的非经燃烧吸用的产品"取消增值税出口退税。本次调整针对增值税出口退税；对其中征收消费税的产品，出口消费税政策不作调整，继续适用消费税退（免）税政策。</p>
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
              '加热卷烟、尼古丁袋、其他无烟气烟草制品等未开放品类，不得在中国境内生产、销售或流通',
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
              <h4 className="font-bold text-[#243B63] text-base">1. 从产品纳管转向产业秩序治理</h4>
              <p className="text-[#334155] text-base leading-7 text-justify">中国烟草监管的重点，正在从单个产品是否纳入监管，转向对生产、渠道、税收、出口和线上销售的全链条治理。</p>
              <p className="text-[#334155] text-base leading-7 text-justify">传统烟草继续以专卖体系为基础，电子烟监管则会更强调产能、平台交易、出口回流和税收合规。后续监管重点预计不只是"能不能卖"，还会更关注产业端是否存在无序扩产、低价竞争、无证代工和规避监管等问题。</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#243B63] text-base">2. 新型产品标准先行，开放仍会谨慎</h4>
              <p className="text-[#334155] text-base leading-7 text-justify">加热卷烟、尼古丁袋等产品已经出现规则建设信号，但标准建设不等于短期开放销售。</p>
              <p className="text-[#334155] text-base leading-7 text-justify">后续更可能先明确产品定义、技术要求和质量安全边界，再逐步判断是否开放许可、渠道和销售安排。考虑到专卖体系衔接、尼古丁成瘾性、隐蔽使用和未成年人保护等因素，相关产品即使未来开放，也大概率会采取较谨慎、有限度的路径。</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#243B63] text-base">3. 电子烟进入产能、税务和出口综合监管阶段</h4>
              <p className="text-[#334155] text-base leading-7 text-justify">电子烟监管将继续从产品审评和持证经营，延伸到产能利用、订单真实性、出口合规和税务处理。</p>
              <p className="text-[#334155] text-base leading-7 text-justify">出口退税取消、产能利用率管理、供需平衡和低效产能出清等信号，说明行业低价扩张空间会进一步压缩。后续更可能出现合规产能集中、低效产线退出、出口利润重新分配和订单向规范企业集中的趋势。</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#243B63] text-base">4. 全链条监管会继续强化</h4>
              <p className="text-[#334155] text-base leading-7 text-justify">未来涉烟业务的合规判断，不会只看主体是否有证、产品是否符合标准，而会继续延伸到生产安排、交易对手、平台交易、物流路径、资金税务、出口目的地和最终流向。</p>
              <p className="text-[#334155] text-base leading-7 text-justify">监管重点预计会从单点审批，进一步转向覆盖生产、交易、运输、销售、出口和税务处理的全链条管理，要求业务过程持续合规、流向清晰可追溯。</p>
            </div>
          </div>
        }
        redLineGroups={[
          {
            title: '产品上市与经营资质',
            items: [
              '严禁未取得相应烟草专卖许可证，生产、批发、零售、进出口烟草专卖品、电子烟产品、雾化物或电子烟用烟碱。',
              '严禁销售未通过技术审评、不符合强制性国家标准、未按要求使用注册商标、来源不明或伪劣电子烟产品。',
              '严禁将加热卷烟、尼古丁袋、其他无烟气烟草制品等未开放销售路径的新型产品投入中国内地市场。',
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

            <ReferenceGroupCard title="消费税相关规定">
              <ReferenceItem
                title="《财政部 国家税务总局关于调整烟产品消费税政策的通知》（财税〔2009〕84号）"
                url="https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=918"
                description="调整卷烟、雪茄烟等烟产品消费税政策。明确甲类卷烟、乙类卷烟的生产环节税率和从量税，雪茄烟生产环节税率，并在卷烟批发环节加征一道消费税。"
              />
              <ReferenceItem
                title="《财政部 国家税务总局关于调整卷烟消费税的通知》（财税〔2015〕60号）"
                url="https://shanghai.chinatax.gov.cn/zcfw/zcfgk/xfs/201507/t417688.html"
                description="将卷烟批发环节从价税税率提高至 11%，并按 0.005 元 / 支加征从量税；兼营卷烟批发和零售业务的纳税人，应分别核算批发和零售环节销售额、销售数量。"
                showSeparator
              />
              <ReferenceItem
                title="《财政部 海关总署 税务总局关于对电子烟征收消费税的公告》（财政部 海关总署 税务总局公告2022年第33号）"
                url="https://szs.mof.gov.cn/zhengcefabu/202210/t20221025_3847603.htm"
                description="将电子烟纳入消费税征收范围，明确电子烟生产 / 进口环节税率为 36%，批发环节税率为 11%；生产、批发按销售额计税，进口按组成计税价格计税，并明确代加工电子烟由持有商标的企业缴纳消费税。"
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
