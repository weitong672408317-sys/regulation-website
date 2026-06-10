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
  SubCard,
  BulletList,
  BulletPoint,
  DotList
} from '../sections';

interface UaePageProps {
  country: CountryData;
}

export default function UaePage({ country }: UaePageProps) {
  return (
    <CountryPageTemplate>
      <SeasonSummarySection introText="本季无重大监管更新。" />

      <RegulatorySystemSection cards={[
        {
          title: '核心特征',
          content: <>
            <p className="text-base leading-7 text-[#334155] text-justify mb-4">阿联酋整体属于烟草及新型烟草产品可准入的市场。</p>
            <p className="text-base leading-7 text-[#334155] text-justify mb-4">一般而言，在阿联酋，从事烟草相关业务的企业必须首先取得与其经营活动相对应的营业执照。除此之外，部分烟草相关活动还需根据联邦及地方（如迪拜市政厅）相关法规，额外申请专项许可或获得主管部门的批准。例如：</p>
            <BulletList items={[
              '烟草种植与制造可能需要取得专门的农业或工业许可，并满足一系列合规要求。',
              '烟草产品的进口、分销和零售需要满足营业许可、产品认证、消费税、数字税票、进口清关和地方销售许可等要求。',
            ]} />
          </>
        },
        {
          title: '监管体系',
          content: <>
            <p className="text-base leading-7 text-[#334155] text-justify mb-4">阿联酋对烟草制品的监管体系，采取联邦法规与各酋长国地方政策相结合的模式。在联邦控烟法律的统一框架下，各酋长国有权依据自身情况实施更为严格的地方性监管措施。同时，阿联酋境内划分为大陆地区与多个自由贸易区（Free Zones），各自由区在联邦法律基础上，亦可制定自己的行政管理规定和准入标准。</p>
            <p className="text-base leading-7 text-[#334155] text-justify mb-4">其中：</p>
            <BulletList items={[
              '联邦层面重点管理烟草控制、产品标准、消费税、数字税票、未成年人保护和广告促销限制。',
              '酋长国规则主要影响销售点许可、水烟场所、距离限制、陈列要求、公共场所使用和实际执法尺度。',
              '自由区安排主要适合进出口、仓储和转口，不等于可以直接进入阿联酋大陆市场销售。',
            ]} />
          </>
        },
        {
          title: '监管部门',
          content: <>
            <div className="space-y-3">
              <BulletPoint><span className="font-semibold text-[#263247]">卫生与预防部（MOHAP）：</span>负责公共健康、控烟政策和卫生监管，是烟草控制和公共健康政策的重要主管部门。</BulletPoint>
              <BulletPoint><span className="font-semibold text-[#263247]">工业与先进技术部（MoIAT）：</span>负责技术法规、产品符合性评估、ECAS 认证和 CoC 符合性证书。电子尼古丁产品、无烟草尼古丁袋等受技术法规管制的产品，通常需要通过其产品认证体系进入市场。</BulletPoint>
              <BulletPoint><span className="font-semibold text-[#263247]">联邦税务局（FTA）：</span>负责消费税、数字税票、税务注册和申报。卷烟、水烟烟草、加热卷烟产品、电子吸烟设备及相关液体等产品进入本地市场时，需要重点确认消费税和数字税票要求。</BulletPoint>
              <BulletPoint><span className="font-semibold text-[#263247]">海关：</span>负责进口、清关、边境监管、商品查验和申报资料核查。进口烟草、电子烟、烟油、HNB烟支、尼古丁袋及相关配件时，需确保申报品名、HS编码、认证资料和税务资料一致。</BulletPoint>
              <BulletPoint><span className="font-semibold text-[#263247]">各酋长国 / 市政部门：</span>负责销售点、水烟场所、陈列、距离限制、公共场所使用和地方许可。迪拜、阿布扎比、沙迦等酋长国在水烟场所、销售点位置和地方许可方面可能存在执行差异。</BulletPoint>
            </div>
          </>
        },
      ]} />

      <ProductAccessSection>
        <ProductModuleCard title="1. 烟草材料" label="产品定性">
          <div className="space-y-2 mb-4">
            <BulletPoint>阿联酋控烟法将烟草界定为各类烟草植物及其根、茎、叶、果实、绿色或干燥种子等部分。烟叶属于典型烟草原料。</BulletPoint>
          </div>
          <StatusCard
            status="green"
            title="烟草材料"
            customLabel="可准入，需合规"
            content={<>
              <div className="text-base text-[#334155] mb-2">适用产品：烟叶、烟草薄片、烟草废料及其他烟草原料</div>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0">重点关注进口申报、用途、税务、仓储、转口和下游产品合规。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0">作为工业原料进入生产、加工或转口场景，与作为消费者成品进入本地市场销售，应分别判断。</span>
                </div>
              </div>
            </>}
          />
        </ProductModuleCard>

        <ProductModuleCard title="2. 燃烧类烟草制品" label="产品定性">
          <div className="space-y-2 mb-4">
            <BulletPoint>阿联酋控烟法将烟草制品界定为全部或部分以烟叶为原料制成的产品，包括保持原形、切碎、切丁、与其他材料混合、加工成粉末或以其他形态形成的产品，也包括含有烟草成分的复合材料。</BulletPoint>
            <BulletPoint>传统卷烟、水烟烟草、雪茄、烟斗烟草、小雪茄等通过点燃并燃烧方式使用的产品，属于燃烧类烟草制品。</BulletPoint>
          </div>
          <StatusCard
            status="green"
            title="燃烧类烟草制品"
            customLabel="可准入，需合规"
            content={<>
              <div className="text-base text-[#334155] mb-2">适用产品：传统卷烟、水烟烟草、雪茄、烟丝及其他燃烧类烟草制品</div>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0">进入阿联酋或在境内交易的烟草及烟草制品，应符合阿联酋相关强制标准、包装标签和健康警示要求。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0">烟草制品适用100%消费税，进口商及生产商需向联邦税务局（FTA）注册并贴附数字税票；未贴附数字税票的相关产品不得进口进入阿联酋或在本地市场销售。</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0">销售端须遵守所在地酋长国 / 市政部门的销售点许可、未成年人保护、禁售地点、距离限制、陈列和广告促销限制。</span>
                </div>
              </div>
            </>}
          />
        </ProductModuleCard>

        <ProductModuleCard title="3. 电子尼古丁产品及加热烟草产品" label="产品定性">
          <div className="space-y-2 mb-4">
            <BulletPoint>UAE.S 5030:2018《电子尼古丁产品（传统烟草产品等同物）》适用于设计成传统烟草产品形式的电子尼古丁产品，例如卷烟、雪茄、烟斗、小雪茄或水烟形式的产品。</BulletPoint>
            <BulletPoint>该标准覆盖两类产品：
              <br />（1）不含烟草的电子雾化产品，其可能含有尼古丁，也可能不含尼古丁，以及其补充装，例如电子液体容器；
              <br />（2）含有烟草的加热烟草产品，即经加工或未经加工的烟草，通过电子装置加热但不燃烧的产品。</BulletPoint>
            <BulletPoint>该标准明确载明：其所指电子尼古丁产品并不包括通过点燃并燃烧吸食的产品，也不包括尼古丁贴片等其他含尼古丁产品，以及通过口腔消费的烟草产品。</BulletPoint>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="green"
              title="电子尼古丁产品"
              customLabel="可准入，需认证"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：电子烟设备、雾化器、烟油 / 电子烟液 / 补充液、烟弹 / 预灌装产品、设备与液体组合产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">电子雾化产品、电子烟、电子水烟、烟油、补充液、含液体烟弹及补充装产品，应按 UAE.S 5030:2018 办理 ECAS / CoC。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">电子液体中的尼古丁含量不得超过 20mg/ml；一体式电子液体储罐容量不得超过 10ml；电子液体补充装容量每包不得超过 50ml。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">电子吸烟设备及工具、电子吸烟设备及工具所用液体适用 100% 消费税。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">烟油和补充液应符合药用级纯度、禁限用成分、泄漏防护、儿童防护包装、标签警示和进口申报要求。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">特定有害添加物或口味在部分酋长国可能存在限制，需结合地方执行口径确认。</span>
                  </div>
                </div>
              </>}
            />
            <StatusCard
              status="green"
              title="加热烟草产品"
              customLabel="可准入，需认证"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：HNB 烟支、加热烟草棒、加热烟草产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">HNB 等加热烟草产品进入本土市场前，应同时关注 UAE.S 5030:2018、烟草制品规则、消费税、数字税票、包装标签和地方销售许可要求。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">加热卷烟产品属于消费税和数字税票重点品类；未贴附数字税票的相关产品不得进口进入阿联酋或在本地市场销售。</span>
                  </div>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="4. 无烟烟草 / 新型尼古丁产品" label="产品定性">
          <div className="space-y-2 mb-4">
            <BulletPoint>在阿联酋，无烟烟草 / 新型尼古丁产品不按单一产品路径处理。</BulletPoint>
            <BulletPoint>结合现有公开规则，可以分为三类：
              <br />（1）无烟草尼古丁袋；
              <br />（2）无烟烟草产品；以及
              <br />（3）其他新型尼古丁产品。</BulletPoint>
            <BulletPoint>根据《内阁决议第 2 号（2025 年）》及 UAE.S 5061:2025《无烟草尼古丁袋》，无烟草尼古丁袋是指含有尼古丁和 / 或尼古丁化合物、调味剂及其他允许成分，且不含烟草的产品。</BulletPoint>
            <BulletPoint>该产品仅限通过口腔使用，即将小袋 / 囊袋放置于牙龈与口腔黏膜之间一段时间，以便尼古丁通过口腔黏膜吸收，使用后再将小袋丢弃。</BulletPoint>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatusCard
              status="green"
              title="无烟草尼古丁袋"
              customLabel="可准入，需认证"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：无烟草尼古丁袋、袋状口含尼古丁产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">未取得主管机关正式批准并提交规定文件的，不得进口、制造或投放市场。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">产品应符合 UAE.S 5061:2025技术要求，例如每袋尼古丁总量不得超过 20mg；最终产品 pH 值不得超过 9.1；水分活度不得超过 0.7。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">包装和标签也应符合 UAE.S 5061:2025 要求，例如每个零售包装应含 15–20 个小袋。</span>
                  </div>
                </div>
              </>}
            />

            <StatusCard
              status="red"
              title="无烟烟草产品"
              customLabel="完全禁止"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：含烟草咀嚼制品及其他含烟草但不经燃烧吸用的产品</div>
                <p className="mb-2 text-[#334155]">公开资料未见阿联酋对"含烟草咀嚼制品"设置单独完整定义。</p>
                <p className="mb-2 text-[#334155]">结合现有禁止性口径，该类产品可理解为含有烟草材料、通过咀嚼或口含方式使用的烟草产品，典型产品包括 Paan、Gutkha、Mawa 等。</p>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">禁止进口、销售、持有或分销。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">含烟草材料的咀嚼类产品不得套用无烟草尼古丁袋路径。</span>
                  </div>
                </div>
              </>}
            />

            <StatusCard
              status="amber"
              title="其他新型尼古丁产品"
              customLabel="需确认"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：尼古丁口含膜、尼古丁片、尼古丁粉末、鼻吸尼古丁产品及其他不含烟草但含尼古丁、且不属于无烟草尼古丁袋的口腔或鼻用产品</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">公开法规尚未见单独、明确、成熟的定义或准入路径。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">非袋状口含尼古丁产品不能当然等同于无烟草尼古丁袋，主要原因是 UAE.S 5061:2025 对无烟草尼古丁袋设置了明确的袋状形态和口腔使用方式定义。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">进入市场前，应结合产品形态、成分、使用方式、是否含烟草材料及主管机关口径确认产品归类和认证要求。</span>
                  </div>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="5. 普通辅材及相关配套材料" label="产品定性">
          <div className="space-y-2 mb-4">
            <BulletPoint>阿联酋公开资料未见对滤嘴棒、爆珠、香精胶囊、香精香料设置单独产品定义。该类产品应重点核对成分、用途、HS 编码、进口申报和下游客户产品用途。</BulletPoint>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <StatusCard
              status="green"
              title="普通辅材"
              customLabel="可准入"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：不含尼古丁、烟草成分或烟草提取物的普通辅材</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">不含尼古丁、不含烟草提取物，且不作为消费者直接使用产品销售的，通常可按普通辅材或配套材料理解；公开资料下未见单独产品准入许可或专项认证要求。</span>
                  </div>
                </div>
              </>}
            />
            <StatusCard
              status="amber"
              title="含尼古丁 / 烟草成分辅材"
              customLabel="需按成分判断"
              content={<>
                <div className="text-base text-[#334155] mb-2">适用产品：含尼古丁、烟草成分或烟草提取物的辅材</div>
                <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">如产品含尼古丁、烟草提取物，或对外作为消费者可直接使用产品销售，不能直接按普通辅材处理。</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-[9px] flex-shrink-0"></span>
                    <span className="flex-1 min-w-0">应根据产品成分、使用方式和销售形态，转入烟草制品、电子尼古丁产品、无烟草尼古丁袋或其他对应路径确认准入和认证要求。</span>
                  </div>
                </div>
              </>}
            />
          </div>
        </ProductModuleCard>

        <ProductModuleCard title="6. 仿烟糖果 / 玩具" label="产品定性">
          <div className="space-y-2 mb-4">
            <BulletPoint>仿烟糖果/玩具是指外观、表达或使用方式类似烟草或烟草制品的糖果、游戏或玩具类产品。</BulletPoint>
          </div>
          <StatusCard
            status="red"
            title="仿烟糖果 / 玩具"
            customLabel="完全禁止"
            content={<>
              <div className="text-base text-[#334155] mb-2">适用产品：仿烟糖果 / 玩具</div>
              <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC6B6B] mt-[9px] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0">禁止进口和在阿联酋境内销售。</span>
                </div>
              </div>
            </>}
          />
        </ProductModuleCard>

        {country.emirateDifferences && (
          <SubCard title="主要酋长国差异">
            <div className="overflow-x-auto rounded-xl border border-[#D8DDED]">
              <table className="w-full text-base min-w-[600px] bg-white">
                <thead>
                  <tr className="bg-[#E8EDF5]">
                    <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED] border-r border-[#D8DDED] w-[14%]">酋长国</th>
                    <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED] border-r border-[#D8DDED] w-[30%]">咀嚼烟草制品</th>
                    <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED] border-r border-[#D8DDED] w-[28%]">电子烟</th>
                    <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED] w-[28%]">水烟</th>
                  </tr>
                </thead>
                <tbody>
                  {country.emirateDifferences.map((row, index) => (
                    <React.Fragment key={index}>
                      <tr className={index % 2 === 0 ? 'bg-white/50' : 'bg-[#F3F5FB]'}>
                        <td className="px-5 py-4 border-b border-[#D8DDED] border-r border-[#D8DDED] font-semibold text-[#1F2A44]">{row.emirate}</td>
                        <td className="px-5 py-4 border-b border-[#D8DDED] border-r border-[#D8DDED] text-[#334155]">{row.chewingTobacco}</td>
                        <td className="px-5 py-4 border-b border-[#D8DDED] border-r border-[#D8DDED] text-[#334155]">{row.electronicCigarette}</td>
                        <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155]">{row.hookah}</td>
                      </tr>
                      {row.note && index === country.emirateDifferences!.length - 1 && (
                        <tr>
                          <td colSpan={4} className="px-5 py-3 text-[#64748B] text-sm italic border-b border-[#D8DDED]">备注：{row.note}</td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </SubCard>
        )}
      </ProductAccessSection>

      <ComplianceSection country={country}>
        <p className="text-[#334155] text-base leading-7 text-justify mb-6">阿联酋烟草及新型烟草产品的合规重点，不在于一般公司设立资质，而在于产品认证、行业许可、税务税票和地方销售许可。</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">1</span>
              <h4 className="font-bold text-[#2E3F73] text-base">产品符合性证书（CoC）</h4>
            </div>
            <p className="ml-6 text-[#334155] text-base leading-7 text-justify mb-3">烟草产品（包括电子烟）、无烟草尼古丁袋等受管制产品进入阿联酋市场前，必须依法取得由政府认可的产品符合性证书（Certificate of Conformity, CoC）。</p>
            <div className="ml-6 space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#6B7FA6] rounded-[1px] flex-shrink-0"></span>
                  <p className="font-bold text-[#263247] text-base">为什么要有 CoC？</p>
                </div>
                <div className="space-y-1.5">
                  <BulletPoint>是电子烟或烟草产品合法进入阿联酋市场的基本条件</BulletPoint>
                  <BulletPoint>是产品清关、贴数字税票（DTS）、销售和接受检查的唯一有效证书</BulletPoint>
                  <BulletPoint>没有 CoC，产品无法清关，不能在阿联酋销售或流通</BulletPoint>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#6B7FA6] rounded-[1px] flex-shrink-0"></span>
                  <p className="font-bold text-[#263247] text-base">CoC 谁来发？怎么拿？</p>
                </div>
                <div className="space-y-1.5">
                  <BulletPoint>签发单位：阿联酋工业与先进技术部（MoIAT）</BulletPoint>
                  <BulletPoint>获取方式：产品需先通过阿联酋的国家认证流程 —— ECAS</BulletPoint>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#6B7FA6] rounded-[1px] flex-shrink-0"></span>
                  <p className="font-bold text-[#263247] text-base">CoC 有效期多久？每次进口都需要吗？</p>
                </div>
                <div className="space-y-1.5">
                  <BulletPoint>CoC 通常有效期为一年（或以注册时间为准）</BulletPoint>
                  <BulletPoint>每款产品，每次进口或流通前都要重新办理新的 CoC</BulletPoint>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">2</span>
              <h4 className="font-bold text-[#2E3F73] text-base">阿联酋符合性评估计划（ECAS）</h4>
            </div>
            <p className="ml-6 text-[#334155] text-base leading-7 text-justify mb-3">ECAS（Emirates Conformity Assessment Scheme）是一套强制性产品认证机制，用于检验产品是否符合阿联酋法律和技术标准。</p>
            <div className="ml-6">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rotate-45 bg-[#6B7FA6] rounded-[1px] flex-shrink-0"></span>
                <p className="font-bold text-[#263247] text-base">ECAS与CoC的关系：</p>
              </div>
              <div className="space-y-1.5">
                <BulletPoint>ECAS 是认证流程机制，CoC 则是认证完成后出具的正式合格证书。</BulletPoint>
                <BulletPoint>要取得CoC的产品，需先通过阿联酋的ECAS认证。</BulletPoint>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">3</span>
              <h4 className="font-bold text-[#2E3F73] text-base">无异议函（NOC）</h4>
            </div>
            <div className="space-y-2 ml-9">
              <div className="flex items-start gap-3">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7 text-justify flex-1 min-w-0">NOC 是政府主管部门出具的无异议函，常用于确认相关主管机关对特定受控业务、产品或操作没有异议。</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7 text-justify flex-1 min-w-0">含尼古丁、烟油、高浓度尼古丁、香精等敏感产品，在产品注册、仓储、转运、再包装、出口或自由区操作等环节，可能需要主管机关出具 NOC；涉及戒烟、治疗或健康功效表达的，还可能触发卫生主管机关审查。</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">4</span>
              <h4 className="font-bold text-[#2E3F73] text-base">地方销售许可</h4>
            </div>
            <div className="space-y-2 ml-9">
              <div className="flex items-start gap-3">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7 text-justify flex-1 min-w-0">阿联酋各酋长国及自由区（如RAKEZ、DMCC、JAFZA等）的市政或经济监管机构，会分别制定其烟草经营许可或活动白名单的申请规则，涵盖场地安全、环境卫生、消防标准等。</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7 text-justify flex-1 min-w-0">企业应在目标经营地区的官方平台上查询并依法申办许可。</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                <span className="text-[#334155] text-base leading-7 text-justify flex-1 min-w-0">例如，在迪拜，烟草及烟草制品的零售、批发、分销、进口、仓储等活动，需依据《迪拜市政厅烟草及烟具销售许可技术指南》申请专项许可，并满足选址、距离、店面布局、产品合规、广告限制、未成年人保护等一系列要求。</span>
              </div>
            </div>
          </div>
        </div>
      </ComplianceSection>

      <TaxSection>
        <TaxTableCard title="主要税种">
          <p className="text-[#334155] text-base leading-7 text-justify mb-4">烟草制品因其特殊性，在阿联酋涉及多种税务规定。主要包括消费税、增值税和企业所得税三类。</p>
          <p className="text-[#334155] text-base leading-7 text-justify mb-4">下面通过表格汇总对比这三种税种的适用范围、税率和企业的注册义务：</p>
          <div className="overflow-x-auto rounded-xl border border-[#D8DDED]">
            <table className="w-full text-sm min-w-[800px] bg-white">
              <thead>
                <tr className="bg-[#E8EDF5]">
                  <th className="px-4 py-3 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED]" style={{width:'15%'}}>税种</th>
                  <th className="px-4 py-3 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED]" style={{width:'35%'}}>适用对象 / 范围</th>
                  <th className="px-4 py-3 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED]" style={{width:'20%'}}>税率</th>
                  <th className="px-4 py-3 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED]" style={{width:'30%'}}>注册要求及门槛</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/50">
                  <td className="px-4 py-3 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44]"><div className="leading-6"><div>消费税</div><div className="whitespace-nowrap text-xs text-[#64748B]">(Excise Tax)</div></div></td>
                  <td className="px-4 py-3 border-b border-r border-[#D8DDED] text-[#334155] leading-6">针对特定有害商品征收的税，包括：烟草制品、电子烟及其液体、能量饮料、含糖饮料等。征税环节为进口、出仓或本地生产释放到市场时。</td>
                  <td className="px-4 py-3 border-b border-r border-[#D8DDED] text-[#334155] leading-6">
                    <div className="space-y-1">
                      <div className="flex items-start gap-1.5">
                        <span className="mt-[9px] w-1 h-1 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">100%：烟草制品、电子烟装置及烟油；</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="mt-[9px] w-1 h-1 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">50%：含糖饮料等。</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b border-[#D8DDED] text-[#334155] leading-6">无营业额门槛。凡从事应税特定有害商品进口、本地生产或经营指定仓库者，均须向FTA注册为应税人，并履行申报缴税义务。</td>
                </tr>
                <tr className="bg-[#F3F5FB]">
                  <td className="px-4 py-3 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44]"><div className="leading-6"><div>增值税</div><div className="whitespace-nowrap text-xs text-[#64748B]">(VAT)</div></div></td>
                  <td className="px-4 py-3 border-b border-r border-[#D8DDED] text-[#334155] leading-6">对几乎所有商品和服务增值额征收的税（少数豁免项目如部分教育、医疗和金融服务除外）。每一笔应税交易由最终消费者承担税负。</td>
                  <td className="px-4 py-3 border-b border-r border-[#D8DDED] text-[#334155] leading-6">5%（标准税率）</td>
                  <td className="px-4 py-3 border-b border-[#D8DDED] text-[#334155] leading-6">
                    <div className="space-y-1">
                      <div className="flex items-start gap-1.5">
                        <span className="mt-[9px] w-1 h-1 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">年应税营业额 ≥ 375,000 AED 须注册；</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="mt-[9px] w-1 h-1 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">187,500–375,000 AED 可自愿注册；</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="mt-[9px] w-1 h-1 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">低于 187,500 AED 不可注册。</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white/50">
                  <td className="px-4 py-3 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44]"><div className="leading-6"><div>企业所得税</div><div className="whitespace-nowrap text-xs text-[#64748B]">(Corporate Tax)</div></div></td>
                  <td className="px-4 py-3 border-b border-r border-[#D8DDED] text-[#334155] leading-6">
                    <div className="space-y-1">
                      <div className="flex items-start gap-1.5">
                        <span className="mt-[9px] w-1 h-1 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">对阿联酋境内开展营业的公司的净利润征收；</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="mt-[9px] w-1 h-1 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">石油和天然气行业及特定自由区合格企业有特殊豁免；</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="mt-[9px] w-1 h-1 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">适用于在阿联酋注册的本土公司、符合条件的自由区公司，以及在阿境内有持续经营场所的外国企业。</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b border-r border-[#D8DDED] text-[#334155] leading-6">
                    <div className="space-y-1">
                      <div className="flex items-start gap-1.5">
                        <span className="mt-[9px] w-1 h-1 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">0%：年净利润 ≤ 375,000 AED；</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="mt-[9px] w-1 h-1 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="flex-1 min-w-0">9%：年净利润超出 375,000 AED 的部分。</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border-b border-[#D8DDED] text-[#334155] leading-6">无收入门槛（除特定豁免情形外）。几乎所有在阿联酋境内开展业务的法人实体都须按规定注册企业税，并在规定时限内申报纳税；逾期注册或申报将面临罚款。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TaxTableCard>

        <TaxTableCard title="消费税合规要点">
          <BulletList items={[
            <><span className="font-semibold text-[#263247]">注册义务：</span>从事烟草制品进口、生产的企业必须在联邦税务局(FTA)注册成为消费税应税人。经营保税仓储的指定仓库运营者也需注册。</>,
            <><span className="font-semibold text-[#263247]">申报缴纳：</span>企业需要按规定频率（通常为每月）向FTA申报应税库存和移出量，并在期限内缴纳消费税。进口清关时亦需即时缴纳相应消费税税款。</>,
            <><span className="font-semibold text-[#263247]">数字税票(Digital Tax Stamp, DTS)：</span>是阿联酋联邦税务局(FTA)针对特定应税消费品（主要是烟草制品）推行的电子追踪标签。每枚数字税票包含防伪和追踪信息，用于确认该商品已注册并缴纳了消费税。所有在阿联酋境内销售的卷烟类产品（包括传统卷烟、加热不燃烧烟弹等）以及水烟烟草等都必须在包装上贴附数字税票。未贴税票的产品不得在市场上销售，也无法通过海关清关。</>,
            <><span className="font-semibold text-[#263247]">指定仓库制度：</span>阿联酋允许经批准的指定仓库（Designated Warehouse）暂缓缴税储存应税商品。企业若希望利用此制度，需要申请仓库许可，并对仓库出入库实行严格的税控管理。一旦货物从仓库释放至市场，须立即申报纳税。</>,
          ]} />
        </TaxTableCard>

        <TaxTableCard title="自由区税务提示">
          <BulletList items={[
            '在自由区营业不意味着必然免税、完全免税。',
            '除特定豁免情形外，注册在自由区的企业也需要缴纳企业所得税、增值税。',
            '自由区货物进入阿联酋大陆市场后，不免除消费税、数字税票或进口监管要求。',
          ]} />
        </TaxTableCard>
      </TaxSection>

      <MarketOperationSection>
        <RuleModuleCard number={1} title="全面广告禁令">
          <p className="text-[#334155] text-base leading-7 text-justify mb-4">阿联酋对烟草制品实施极为严格的广告、促销和赞助禁令，主要内容如下：</p>
          <div className="space-y-4">
            <div className="bg-white/55 border border-white/70 rounded-lg p-4">
              <h4 className="font-bold text-[#263247] text-base mb-3">广告媒介禁令</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0"><span className="font-semibold">禁止大众媒体广告：</span>禁止在报纸、杂志、书籍以及广播、电视、电影等任何传统媒体上刊登烟草广告。</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0"><span className="font-semibold">禁止电子媒介宣传：</span>禁止通过互联网、电子邮件、手机短信、社交媒体和电子游戏等发布烟草广告。</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0"><span className="font-semibold">禁止户外和场所广告：</span>禁止使用广告牌、灯箱、海报、传单等形式在公共场所宣传烟草。包括店内也不得放置任何鼓励吸烟的宣传品。</span>
                </div>
              </div>
            </div>
            <div className="bg-white/55 border border-white/70 rounded-lg p-4">
              <h4 className="font-bold text-[#263247] text-base mb-3">促销赞助禁令</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0"><span className="font-semibold">禁止品牌延伸和赞助：</span>禁止烟草公司赞助各类活动、组织或个人，从而变相宣传其品牌。禁止以企业社会责任为名由烟草企业对外捐助，这被视为变相促销。</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0"><span className="font-semibold">禁止产品嫁接宣传：</span>禁止利用烟草制品为其他商品做广告，或反过来利用其他商品广告来推广烟草（例如绝不允许在香烟包装上宣传抽奖活动，也不允许在非烟商品广告中出现香烟形象）。</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0"><span className="font-semibold">禁止公关和免费赠品：</span>禁止在任何比赛、活动中将烟草及其相关物品作为奖品或礼物分发。也不得向公众免费派送样品或通过试用装推广新品。</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0"><span className="font-semibold">禁止变相促销和优惠：</span>销售过程中不得采取任何形式的变相促销手段来刺激烟草产品销售。法律严格禁止降价折扣、捆绑赠送、买赠优惠等活动。例如不得推出"第二件半价"或"买二送一"的卷烟促销。</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0">禁止以奖品或礼品形式分发烟草及相关物品。例如不得附赠打火机等赠品。商家亦不可向顾客派发免费样品试用。</span>
                </div>
              </div>
            </div>
            <div className="bg-white/55 border border-white/70 rounded-lg p-4">
              <h4 className="font-bold text-[#263247] text-base mb-3">包装和变相营销限制</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                  <span className="flex-1 min-w-0">包装本身不作为广告，但产品包装本身及其上所印内容亦受限。包装上不能出现公司名称以外的品牌延伸宣传，不能宣称任何健康好处或暗示风险较低。例如禁止标榜"有机烟草""无害电子烟"等误导性字样。一些国家常见的"低焦油""薄荷提神"等卖点在阿联酋都是明令禁止印于包装上的。监管部门也禁止包装内附带促销券或积分卡等营销手段。总之，包装只能传递法规许可的信息（品牌、警示、成分等），不可成为广告载体。</span>
                </div>
              </div>
            </div>
          </div>
        </RuleModuleCard>

        <div className="grid md:grid-cols-2 gap-4">
          <RuleModuleCard number={2} title="销售与陈列">
            <DotList items={[
              '不得向未满18岁人员销售烟草或烟草制品',
              '不得通过自动售货机销售烟草或烟草制品',
              '不得通过互联网、电商平台或社交媒体等电子渠道销售烟草制品',
              '不得在宗教场所、教育机构、医疗和体育设施等法定禁烟场所内销售或使用烟草产品',
              <span className="md:whitespace-nowrap" key="dist">不得在距清真寺100米、学校150米范围内开设烟草销售点或水烟提供场所</span>,
            ]} />
          </RuleModuleCard>

          <RuleModuleCard number={3} title="包装与标签">
            <DotList items={[
              '烟草产品包装应包含规定的健康警示和必要产品信息',
              '不得在包装上使用误导性用语或附加促销元素',
              '包装标签应与产品认证、进口申报和销售资料保持一致',
              '涉及戒烟、治疗、减害或健康功效的表达，应谨慎处理并确认是否需主管机关审批',
            ]} />
          </RuleModuleCard>
        </div>
      </MarketOperationSection>

      <TrendAndRedLinesSection
        trendContent={
          <>
            <p className="text-[#334155] text-base leading-7 text-justify mb-4">阿联酋烟草及新型烟草产品监管预计会继续沿着"合法市场内强合规管理"的方向发展。传统卷烟、水烟烟草、HNB烟支、电子烟及烟油等产品短期内出现全国性全面禁令的可能性较低，监管重点更可能继续集中在产品认证、消费税、数字税票、进口清关、地方销售许可和广告促销限制。</p>
            <p className="text-[#334155] text-base leading-7 text-justify mb-4">新型尼古丁产品的监管边界会进一步细化。无烟草尼古丁袋已经通过 UAE.S 5061:2025 建立技术监管基础，说明阿联酋对部分新型尼古丁产品更倾向于设置标准后纳入合规市场；但尼古丁口含膜、尼古丁片、尼古丁粉末、鼻吸尼古丁产品等非袋状产品，仍需要结合产品形态、成分和主管机关口径确认是否具备稳定准入路径。</p>
            <p className="text-[#334155] text-base leading-7 text-justify">自由区仍会是烟草、电子烟、尼古丁产品及相关原辅材进出口、仓储和转口的重要场景，但自由区安排不会当然解决阿联酋大陆市场销售问题。产品从自由区进入本地市场时，仍需重新关注产品认证、消费税、数字税票、地方销售许可和销售端限制。</p>
          </>
        }
        redLineGroups={[
          {
            title: '生产销售',
            items: [
              '严禁未经许可，包括无证或超许可范围，在阿联酋境内生产、销售烟草制品及其替代品，如电子烟、加热不燃烧产品等',
              '严禁在未完成 ECAS 认证、未取得 CoC 的情况下，销售烟草制品以及电子烟产品',
            ]
          },
          {
            title: '产品类型',
            items: [
              '严禁向阿联酋进口或在阿联酋分销仿制烟草的糖果或玩具等产品，例如糖果烟、玩具烟斗',
              '严禁向阿联酋进口或在阿联酋分销含烟草的咀嚼制品',
            ]
          },
          {
            title: '销售渠道',
            items: [
              '严禁在未取得主管机关许可的任何场所展示或销售烟草制品，销售点须持证经营',
              '严禁通过自动售货机销售烟草制品以及相关产品',
              '严禁通过互联网、电商平台或社交媒体等电子渠道销售烟草制品',
              '严禁在宗教场所、教育机构、医疗和体育设施等法定禁烟场所内销售或使用烟草产品',
              '严禁在距清真寺100米、学校150米范围内开设烟草销售点或水烟提供场所',
            ]
          },
          {
            title: '销售对象',
            items: [
              '严禁向未满18岁的未成年人销售或提供任何烟草及含尼古丁产品',
            ]
          },
          {
            title: '营销活动',
            items: [
              '严禁任何形式的烟草广告、促销和赞助活动，涵盖平面、广播、户外、网络等媒介',
              '严禁通过赠送、抽奖等方式向公众派发烟草制品或相关赠品，如免费样品、比赛奖品',
              '严禁对烟草制品进行打折、捆绑销售等促销',
            ]
          },
          {
            title: '包装要求',
            items: [
              '严禁在包装上使用误导性用语或附加促销元素，例如"低焦油""赠券"等',
              '严禁未贴附数字税票即在阿联酋销售适用税票要求的烟草制品',
            ]
          },
        ]}
      />

      <ReferencesSection
        tipText="以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。阿联酋相关法律、内阁决议和技术标准可能经过后续修订或更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。"
        regulationContent={
          <div className="space-y-4">
            <ReferenceGroupCard title="烟草控制与产品准入">
              <ReferenceItem
                title="《联邦法第 15 号（2009 年）—烟草控制法》"
                url="https://uaelegislation.gov.ae/en/legislations/1206"
                description="阿联酋烟草控制基础法律，覆盖烟草产品、销售限制、广告促销限制、未成年人保护、公共健康要求和违法责任。"
              />
              <ReferenceItem
                title="《内阁决议第 24 号（2013 年）—烟草控制法执行细则》"
                url="https://uaelegislation.gov.ae/en/legislations/1205"
                description="细化烟草控制法的执行规则，覆盖烟草销售点、水烟场所、广告促销、包装标签、公共场所使用和执法要求。"
                showSeparator
              />
              <ReferenceItem
                title="《内阁决议第 98 号（2023 年）—烟草种植和烟草产品制造许可规则》"
                url="https://uaelegislation.gov.ae/en/legislations/2310"
                description="规范烟草种植、烟草产品制造及相关许可要求，影响在阿联酋境内从事烟草种植、制造、加工等活动的主体准入和许可安排。"
                showSeparator
              />
              <ReferenceItem
                title="UAE.S 5030:2018《电子尼古丁产品（传统烟草产品等同物）》"
                url="https://assets.tobaccocontrollaws.org/uploads/legislation/United%20Arab%20Emirates/United-Arab-Emirates-UAE.S-50302018.pdf"
                description="阿联酋电子雾化产品、烟油、补充装和含烟草加热烟草产品的重要技术法规，主要影响电子尼古丁产品的认证、包装、标签、成分、进口和销售要求。"
                showSeparator
              />
              <ReferenceItem
                title="《内阁决议第 2 号（2025 年）—无烟草尼古丁袋技术法规》"
                url="https://uaelegislation.gov.ae/en/legislations/2787"
                description="将无烟草尼古丁袋技术法规列为阿联酋强制性技术法规，为无烟草尼古丁袋建立正式技术监管基础。"
                showSeparator
              />
              <ReferenceItem
                title="UAE.S 5061:2025《无烟草尼古丁袋》"
                url="https://tobaccointelligence.com/wp-content/uploads/2025/03/UAE.S-5061-2025.pdf"
                description="规范无烟草尼古丁袋的产品定义、技术指标、成分、包装标签、健康警示、儿童防护和上市前文件要求，是无烟草尼古丁袋进入阿联酋市场的重要合规依据。该链接为非官方转载 PDF，用于内部核验；正式适用以 MoIAT/阿联酋官方标准文本为准。"
                showSeparator
              />
            </ReferenceGroupCard>

            <ReferenceGroupCard title="税务与数字税票">
              <ReferenceItem
                title="《联邦法令第 7 号（2017 年）—消费税法》"
                url="https://tax.gov.ae/Datafolder/Files/Legislation/2025/Federal%20Decree-Law%20No.%207%20of%202017%20and%20amendments%20-%20publishing%2003%2012%202025.pdf"
                description="阿联酋消费税基础法律，规定消费税纳税人、应税货物、税务注册、申报缴纳、记录保存及处罚等基本规则。"
              />
              <ReferenceItem
                title="《内阁决议第 37 号（2017 年）—消费税法执行条例》"
                url="https://uaelegislation.gov.ae/en/legislations/1225"
                description="细化消费税法的执行规则，涉及应税货物、应税人、注册、申报、缴税、指定区域 / 指定仓库等操作要求。"
                showSeparator
              />
              <ReferenceItem
                title="《内阁决议第 52 号（2019 年）—消费税货物、税率与消费税价格》"
                url="https://uaelegislation.gov.ae/en/legislations/3983"
                description="规定消费税应税货物、适用税率及消费税价格计算机制，覆盖烟草制品、电子吸烟设备及相关液体等应税消费品。"
                showSeparator
              />
              <ReferenceItem
                title="阿联酋联邦税务局数字税票规则"
                url="https://tax.gov.ae/en/taxes/excise.tax/excise.tax.topics/digital.tax.stamps.aspx"
                description="规范卷烟、水烟烟草、加热卷烟产品等适用数字税票产品的进口和本地销售。适用数字税票要求的产品，未完成数字税票安排通常不得进口进入阿联酋或在本地市场销售。"
                showSeparator
              />
            </ReferenceGroupCard>
          </div>
        }
        newsContent={
          <p className="text-[#64748B] text-base">暂无。</p>
        }
      />
    </CountryPageTemplate>
  );
}
