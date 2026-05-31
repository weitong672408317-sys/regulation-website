'use client';
import React from 'react';
import { CountryData } from '../../../../data/mockData';

interface ParaguayPageProps {
  country: CountryData;
}

export default function ParaguayPage({ country }: ParaguayPageProps) {
  return (
    <>
      <section className="mb-8">
        <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
            <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
            本季监管动态
          </h2>
          <div className="space-y-4 text-[#334155] text-base leading-7">
            <p>巴拉圭本季监管重点继续集中在《第7508/2025号法》实施后的电子烟、雾化器、烟油、配件和耗材注册、授权和税务合规。</p>
            <p>《第7508/2025号法》专门规制电子尼古丁输送系统、无尼古丁类似系统、其他含或不含尼古丁的新兴装置、配件、耗材以及用于雾化的物质，覆盖进口、生产、消费、广告和商业化。</p>
            <p>该法令正式建立了电子烟及雾化产品专项监管框架，标志着巴拉圭电子烟及相关产品从行政决议监管升级为法律层面的专项监管。</p>
            <p>雾化器及其可雾化液体，无论是否含尼古丁，也被该法令纳入香烟或烟草衍生产品的选择性消费税范围。</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
            <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
            监管体系
          </h2>
          <div className="space-y-4">
            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <h3 className="text-lg font-bold text-[#2E3F73] mb-4">核心特征</h3>
              <p className="text-[#334155] text-base leading-7 mb-4">就烟草及新型尼古丁产品监管而言，巴拉圭属于相对开放市场，传统烟草、电子烟及雾化产品、HNB烟支及相关器具原则上均有合规准入空间。现行监管框架主要由巴拉圭传统烟草控制基础法（《第5538/2015号法》）、针对 SEAN、SSSN、其他新兴装置、相关设备、配件、耗材及雾化物质的专项监管法（《第7508/2025号法》）、DINAVISA 产品登记/注册和主体/场所授权规则、选择性消费税规则以及进口申报规则共同构成。</p>
              <p className="text-[#334155] text-base leading-7 mb-3">巴拉圭监管体系目前形成三条主线：</p>
              <ul className="space-y-3 pl-5 list-disc text-[#334155] text-base leading-7">
                <li>卷烟等传统烟草产品：可合规准入，监管重点是 DINAVISA 烟草基产品登记、烟草主体登记、包装警示、公共场所使用限制、广告限制和选择性消费税。</li>
                <li>电子烟、雾化产品及 HNB 电子加热装置：可合规准入，监管重点是 DINAVISA 产品注册、经营场所授权、成分和标签要求、销售渠道限制、广告限制和选择性消费税。</li>
                <li>尼古丁袋等新型口含尼古丁产品：未见明确禁售，但正式监管要求尚未完全明确。巴拉圭曾发布尼古丁袋专项注册草案，但未正式落地。该类产品理论上有准入空间，但正式许可/注册要求、产品标准和税务口径仍需在进入市场前个案确认。</li>
              </ul>
            </div>
            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <h3 className="text-lg font-bold text-[#2E3F73] mb-4">监管部门</h3>
              <ul className="space-y-3 pl-5 list-disc text-[#334155] text-base leading-7">
                <li><span className="font-bold text-[#1F2A44]">MSPBS（公共卫生和社会福利部）</span>：巴拉圭公共卫生和控烟政策的上位主管部门，主要负责公共健康政策、控烟规则、无烟环境、健康警示、广告促销限制和电子烟公共健康监管。</li>
                <li><span className="font-bold text-[#1F2A44]">DINAVISA（国家卫生监督局）</span>：MSPBS 卫生体系下具有行政和财务自主管理权的专业卫生监管机构，负责产品注册、经营场所授权、检查和市场监督。传统烟草涉及烟草基产品登记和烟草主体登记；电子烟及雾化产品（包括器具、烟油），以 DINAVISA 产品注册和经营场所授权为核心。</li>
                <li><span className="font-bold text-[#1F2A44]">DNIT（国家税收收入局）</span>：负责税务、海关归类、进口申报和选择性消费税。对烟草、电子烟、HNB、烟油、尼古丁袋等产品，主要影响海关归类、进口税费和 ISC 申报。</li>
                <li><span className="font-bold text-[#1F2A44]">MIC、SEDECO、MADES 等其他机关</span>：MIC 可能涉及商业活动和产品流通；SEDECO 可能涉及消费者保护、广告和销售行为；MADES 可能涉及电子烟废弃物、电池、耗材回收和环境影响。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
            <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
            产品准入与监管口径
          </h2>
          <div className="space-y-6">

            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#E8F5ED] text-[#3D7050]">可合规准入</span>
                <h3 className="font-bold text-[#2E3F73] text-lg">1. 传统烟草产品/烟草基产品</h3>
              </div>
              <div className="mb-4">
                <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-xs font-semibold mb-2">产品定性</div>
                <p className="text-[#334155] text-base leading-7">根据《第5538/2015号法》，"烟草产品"包括全部或部分以烟草叶为原料制备，并用于吸食、吸吮、咀嚼、鼻吸，或通过电子烟、雾化器或类似产品进行雾化、吸食或吸入的产品。</p>
                <p className="text-[#334155] text-base leading-7 mt-2">DINAVISA 办理资料中使用 Productos a base de Tabaco（烟草基产品）作为烟草产品登记类别。传统卷烟、雪茄、烟丝、加工烟草等属于典型烟草基产品。</p>
                <p className="text-[#334155] text-base leading-7 mt-2">HNB烟支/加热烟草棒如含有烟草材料，也应纳入烟草基产品口径判断。该类产品在下文"HNB烟支及加热装置"栏目中单独说明。</p>
              </div>
              <div>
                <p className="text-[#334155] text-base leading-7 mb-2">适用产品：传统卷烟、雪茄、烟丝、加工烟草及其他烟草基产品</p>
                <p className="font-semibold text-[#1F2A44] text-base mb-2">主要合规要点：</p>
                <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                  <li>烟草基产品进入巴拉圭市场，应办理 DINAVISA 产品登记，登记结果体现为烟草产品证书或按品种产品登记证明。</li>
                  <li>从事烟草、烟草产品或烟草产品原料制造、进口、出口的主体，应办理 DINAVISA 烟草主体登记。</li>
                  <li>普通零售端未见单独烟草零售许可证要求，但销售行为仍需遵守未成年人保护、包装警示、广告限制、公共场所使用限制和税务规则。</li>
                  <li>公开资料下未见传统卷烟、雪茄、烟丝、加工烟草等烟草基产品的全国性全面禁售规则。</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#E8F5ED] text-[#3D7050]">可合规准入</span>
                <h3 className="font-bold text-[#2E3F73] text-lg">2. 电子烟及雾化产品</h3>
              </div>
              <div className="mb-4">
                <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-xs font-semibold mb-2">产品定性</div>
                <p className="text-[#334155] text-base leading-7">《第7508/2025号法》使用 Sistemas Electrónicos de Administración de Nicotina（SEAN，电子尼古丁输送系统）和 Sistemas Similares Sin Nicotina（SSSN，无尼古丁类似系统）两个核心概念。</p>
                <p className="text-[#334155] text-base leading-7 mt-2">SEAN 指通过电子装置加热含尼古丁溶液并产生可吸入气溶胶的系统；SSSN 指通过电子装置加热不含尼古丁溶液并产生可吸入气溶胶的系统。</p>
                <p className="text-[#334155] text-base leading-7 mt-2">《第7508/2025号法》同时覆盖其他含或不含尼古丁的新兴装置、相关设备、配件、耗材以及用于雾化的物质。雾化类电子烟、雾化器、烟油/补充液、相关配件和耗材，应纳入该专项监管框架判断。</p>
              </div>
              <div>
                <p className="text-[#334155] text-base leading-7 mb-2">适用产品：电子烟、雾化器、烟油/补充液、相关配件和耗材</p>
                <p className="font-semibold text-[#1F2A44] text-base mb-2">主要合规要点：</p>
                <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                  <li>电子烟及雾化相关产品进入巴拉圭市场，应完成 DINAVISA 产品注册。</li>
                  <li>从事该类产品进口、出口、生产、分销、仓储或销售的主体及其经营场所，还需取得 DINAVISA 授权。</li>
                  <li>用于雾化吸入的物质，即使不含尼古丁，也应纳入注册、标签和税务合规范围。</li>
                  <li>含尼古丁雾化液应符合尼古丁浓度、成分资料、标签警示、未成年人保护和销售渠道限制要求。</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#E8F5ED] text-[#3D7050]">可合规准入</span>
                <h3 className="font-bold text-[#2E3F73] text-lg">3. HNB烟支及加热装置</h3>
              </div>
              <div className="mb-4">
                <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-xs font-semibold mb-2">产品定性</div>
                <p className="text-[#334155] text-base leading-7">巴拉圭公开法规资料未见对 HNB烟支/加热烟草产品设置单独、完整定义。</p>
                <p className="text-[#334155] text-base leading-7 mt-2">就监管判断而言，HNB 产品应区分两类：</p>
                <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7 mt-2">
                  <li>含烟草材料的 HNB烟支/加热烟草棒，按烟草基产品口径判断。</li>
                  <li>不含烟草材料的 HNB设备、加热装置及相关配件，可纳入《第7508/2025号法》关于新兴装置、相关设备、配件和耗材的监管范围。</li>
                </ul>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-[#E2E6EF] border-l-2 border-l-[#6AAF7C] rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#E8F5ED] text-[#3D7050]">可合规准入</span>
                  </div>
                  <p className="font-bold text-[#263247] text-base mb-2">HNB烟支/加热烟草棒</p>
                  <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                    <li>含烟草材料的 HNB烟支/加热烟草棒，应按烟草基产品路径办理 DINAVISA 产品登记。</li>
                    <li>从事HNB烟支/加热烟草棒制造、进口、出口的主体，应办理 DINAVISA 烟草主体登记。</li>
                    <li>该类产品进入市场后，应遵守包装警示、销售限制、公共场所使用限制、广告限制和 ISC 税务规则。</li>
                  </ul>
                </div>
                <div className="bg-white border border-[#E2E6EF] border-l-2 border-l-[#6AAF7C] rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#E8F5ED] text-[#3D7050]">可合规准入</span>
                  </div>
                  <p className="font-bold text-[#263247] text-base mb-2">HNB设备/加热装置及相关配件</p>
                  <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                    <li>HNB设备本身不含烟草材料，原则上不按烟草基产品登记。</li>
                    <li>HNB设备可纳入《第7508/2025号法》关于新兴装置、相关设备、配件和耗材的监管范围；进入市场前，应按该路径办理 DINAVISA 产品注册。</li>
                    <li>从事 HNB设备及相关电子装置进口、出口、生产、分销、仓储或销售的主体及其经营场所，还需取得 DINAVISA 授权。</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#FBF4E6] text-[#8B6F2E]">部分限制 / 需确认</span>
                <h3 className="font-bold text-[#2E3F73] text-lg">4. 口含、鼻吸及其他非燃烧型产品</h3>
              </div>
              <div className="mb-4">
                <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-xs font-semibold mb-2">产品定性</div>
                <p className="text-[#334155] text-base leading-7">巴拉圭公开法规资料未见对口含、鼻吸及其他非燃烧型产品设置统一定义或统一监管路径。该类产品应根据是否已有专项规则、是否含烟草材料、是否含尼古丁及具体使用方式分类判断。</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white border border-[#E2E6EF] border-l-2 border-l-[#C9A24C] rounded-xl p-4 shadow-sm">
                  <p className="font-bold text-[#263247] text-base mb-3">尼古丁袋</p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-[#1F2A44] text-base mb-1">DINAVISA 注册口径</p>
                      <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                        <li>DINAVISA 曾发布 Bolsas de Nicotina（尼古丁袋）专项注册草案。草案将尼古丁袋定义为不含烟草的可消费单位，含有尼古丁、香料、水、有机纤维素和填充剂，拟放入口腔中，使尼古丁通过口腔黏膜吸收。</li>
                        <li>草案正文明确适用于无治疗目的的尼古丁袋；如产品被宣传为尼古丁替代治疗或具有治疗目的，应适用药品或医疗器械监管规则。</li>
                        <li>该草案尚未正式落地，不能直接等同于现行稳定准入规则。</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1F2A44] text-base mb-1">DNIT 归类口径</p>
                      <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                        <li>DNIT 已将"无烟草尼古丁袋"纳入商品归类查询 / 裁定资料中，说明该类产品在进口申报时已有海关税则归类口径。</li>
                        <li>该口径仅用于 HS 编码 / 税号和进口税费申报，不等于取得 DINAVISA 卫生注册，也不等于产品已经形成稳定上市路径。</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1F2A44] text-base mb-1">准入结论</p>
                      <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                        <li>尼古丁袋进入市场前，仍需确认 DINAVISA 卫生注册、标签、尼古丁含量、主体 / 场所授权、商品归类和税务申报口径。</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#E2E6EF] border-l-2 border-l-[#C9A24C] rounded-xl p-4 shadow-sm">
                  <p className="font-bold text-[#263247] text-base mb-3">其他无烟草口含型尼古丁产品</p>
                  <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                    <li>巴拉圭公开法规尚未见对尼古丁片、尼古丁含片、尼古丁口含膜、尼古丁粉末袋等产品设置单独、明确、成熟的定义或准入路径。</li>
                    <li>进入市场前，应按产品形态、成分、使用方式和标签表达，确认卫生注册、标签、尼古丁含量、商品归类和税务申报要求。</li>
                  </ul>
                </div>
                <div className="bg-white border border-[#E2E6EF] border-l-2 border-l-[#C9A24C] rounded-xl p-4 shadow-sm">
                  <p className="font-bold text-[#263247] text-base mb-3">非燃烧型烟草产品</p>
                  <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                    <li>嚼烟、鼻烟等含烟草材料的非燃烧型烟草产品，应按烟草产品 / 烟草基产品口径判断。</li>
                    <li>该类产品进入市场时，应关注 DINAVISA 烟草基产品登记、烟草主体登记、包装警示、销售限制、广告限制和 ISC 税务规则。</li>
                    <li>如产品同时外加尼古丁，或采用袋状、片状、粉末状等新型口腔使用形态，应结合产品成分和使用方式进一步确认注册、标签和税务要求。</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#E8F5ED] text-[#3D7050]">可合规准入</span>
                <h3 className="font-bold text-[#2E3F73] text-lg">5. 烟草原料及普通辅材</h3>
              </div>
              <div className="mb-4">
                <div className="inline-flex px-2 py-0.5 rounded bg-[#E8EDF5] text-[#2E3F73] text-xs font-semibold mb-2">产品定性</div>
                <p className="text-[#334155] text-base leading-7">巴拉圭公开资料未见对烟草薄片、烟叶、爆珠/香精胶囊、滤嘴棒设置单独完整定义。</p>
                <p className="text-[#334155] text-base leading-7 mt-2">烟草薄片、烟叶属于烟草原料或半成品；爆珠、香精胶囊、滤嘴棒属于烟草或新型烟草产品中常见的辅材、组件或功能性配件。具体监管要求主要取决于产品成分、用途、进口申报口径和下游产品形态。</p>
              </div>
              <div>
                <p className="font-semibold text-[#1F2A44] text-base mb-2">主要合规要点：</p>
                <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                  <li>烟草薄片、烟叶作为烟草原料或半成品可准入，重点适用进口申报、税务和下游用途规则。</li>
                  <li>涉及烟草产品原料制造、进口、出口的主体，应办理 DINAVISA 烟草主体登记。</li>
                  <li>爆珠、香精胶囊、滤嘴棒作为普通烟草辅材可准入；不含尼古丁、不含烟草提取物、也不作为雾化耗材销售的，通常不按电子烟及雾化产品注册。</li>
                  <li>如相关辅材含尼古丁、烟草提取物，或作为雾化液、烟弹、胶囊、HNB设备配件等产品的一部分进入市场，应转入对应烟草基产品、电子烟及雾化产品或 HNB设备路径判断。</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
            <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
            合规资质
          </h2>
          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5 mb-4">
            <p className="text-[#334155] text-base leading-7">巴拉圭烟草及新型尼古丁产品的合规资质主要包括三类：（1）DINAVISA 产品登记/注册；（2）DINAVISA 主体或经营场所登记/授权；（3）DNIT 商品归类、税务申报和进口文件。</p>
            <p className="text-[#334155] text-base leading-7 mt-2">HNB 产品需要拆分判断：HNB烟支/加热烟草棒按烟草基产品路径处理；HNB设备/加热装置及相关配件按新兴装置、相关设备、配件和耗材路径处理。</p>
            <p className="text-[#334155] text-base leading-7 mt-2">边界产品应根据成分、用途和销售形态判断：普通辅材原则上不单独按电子烟产品注册；含尼古丁、烟草提取物，或作为雾化耗材、HNB配件、尼古丁产品组件销售的，应转入对应产品路径确认登记/注册、标签和税务要求。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">1</span>
                <h4 className="font-bold text-[#2E3F73] text-base">DINAVISA 产品登记 / 产品注册</h4>
              </div>
              <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                <li>烟草基产品、含烟草材料的 HNB烟支/加热烟草棒，需要办理 DINAVISA 烟草基产品登记。</li>
                <li>电子烟、雾化器、烟油/补充液、HNB设备、加热装置及相关配件，需要结合《第7508/2025号法》办理 DINAVISA 产品注册。</li>
                <li>尼古丁袋已有 DINAVISA 专项注册草案，但草案尚未正式落地，进入市场前仍需确认现行卫生注册口径。</li>
              </ul>
            </div>
            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">2</span>
                <h4 className="font-bold text-[#2E3F73] text-base">DINAVISA 主体登记 / 经营场所授权</h4>
              </div>
              <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                <li>从事烟草、烟草产品或烟草产品原料制造、进口、出口的主体，需要办理 DINAVISA 烟草主体登记。</li>
                <li>从事电子烟、雾化产品、HNB设备及相关电子装置进口、出口、生产、分销、仓储或销售的主体及经营场所，需要取得 DINAVISA 授权。</li>
                <li>普通烟草零售端未见单独烟草零售许可证要求。</li>
              </ul>
            </div>
            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">3</span>
                <h4 className="font-bold text-[#2E3F73] text-base">DNIT 商品归类、税务申报和进口文件</h4>
              </div>
              <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                <li>进口烟草、电子烟、雾化产品、HNB设备、尼古丁袋、烟草原料或相关配件时，需要确认商品归类、进口税费、ISC、IVA 和进口申报文件。</li>
                <li>DNIT 已将"无烟草尼古丁袋"纳入商品归类查询/裁定资料；该口径仅用于 HS 编码/税号和进口税费申报，不替代 DINAVISA 卫生注册或上市许可。</li>
                <li>税务申报口径应与产品登记/注册资料、进口文件、包装标签和实际用途保持一致。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
            <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
            税收政策
          </h2>
          <p className="text-[#334155] text-base leading-7 mb-6">巴拉圭烟草、尼古丁产品进入本土市场，主要涉及三类税费：ISC（选择性消费税）、IVA（增值税）以及进口环节税费。</p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2E3F73] mb-3">ISC（选择性消费税）</h3>
              <div className="overflow-x-auto rounded-xl border border-[#D8DDED]">
                <table className="w-full text-base min-w-[500px] bg-white">
                  <thead>
                    <tr className="bg-[#E8EDF5]">
                      <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED] w-[65%]">产品类别</th>
                      <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED] w-[35%]">现行税率</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white/50">
                      <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155]">卷烟、雪茄、小雪茄、手卷烟草</td>
                      <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155]">20%</td>
                    </tr>
                    <tr className="bg-[#F3F5FB]">
                      <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155]">加热烟草产品 / HNB烟支</td>
                      <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155]">20%</td>
                    </tr>
                    <tr className="bg-white/50">
                      <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155]">用于电子烟、雾化器或类似装置的烟草香精或类似产品</td>
                      <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155]">18%</td>
                    </tr>
                    <tr className="bg-[#F3F5FB]">
                      <td className="px-5 py-4 border-r border-[#D8DDED] text-[#334155]">雾化器及其可雾化液体，无论是否含尼古丁</td>
                      <td className="px-5 py-4 text-[#334155]">22%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#334155] text-base leading-7 mt-3">《第7508/2025号法》将雾化器及其可雾化液体纳入 ISC 范围；公开税务解读显示，该类产品现行适用 22% 税率。</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2E3F73] mb-3">IVA（增值税）</h3>
              <div className="overflow-x-auto rounded-xl border border-[#D8DDED]">
                <table className="w-full text-base min-w-[500px] bg-white">
                  <thead>
                    <tr className="bg-[#E8EDF5]">
                      <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED] w-[65%]">税种 / 产品类别</th>
                      <th className="px-5 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED] w-[35%]">税率</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white/50">
                      <td className="px-5 py-4 border-b border-r border-[#D8DDED] text-[#334155]">IVA 一般税率</td>
                      <td className="px-5 py-4 border-b border-[#D8DDED] text-[#334155]">10%</td>
                    </tr>
                    <tr className="bg-[#F3F5FB]">
                      <td className="px-5 py-4 border-r border-[#D8DDED] text-[#334155]">未经加工的叶烟等部分初级农产品</td>
                      <td className="px-5 py-4 text-[#334155]">5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2E3F73] mb-3">进口环节税费</h3>
              <ul className="space-y-2 pl-5 list-disc text-[#334155] text-base leading-7">
                <li>进口环节需要根据 HS 编码、产品成分、用途和申报价格，确认关税、进口 IVA、ISC 及其他进口费用。</li>
                <li>除关税和进口税费外，还可能涉及港口费、海关估价服务费、领事费、IT 系统使用费等费用。</li>
                <li>DNIT 已将"无烟草尼古丁袋"纳入商品归类查询 / 裁定资料；该口径仅用于 HS 编码 / 税号和进口税费申报，不替代 DINAVISA 卫生注册或上市许可。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
            <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
            主要销售规则对比
          </h2>
          <p className="text-[#334155] text-base leading-7 mb-4">巴拉圭传统烟草产品和电子烟/雾化产品都要求避免未成年人购买和消费者直接接触产品；差异在于，传统烟草销售限制更接近"直接禁止"，电子烟/雾化产品则在远程销售、自动售货和陈列方面更强调身份识别、年龄识别和封闭管理。</p>
          <div className="overflow-x-auto rounded-xl border border-[#D8DDED]">
            <table className="w-full text-base min-w-[900px] bg-white">
              <thead>
                <tr className="bg-[#E8EDF5]">
                  <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED] w-[15%]">对比事项</th>
                  <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED] w-[28%]">传统烟草产品</th>
                  <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-r border-[#D8DDED] w-[28%]">电子烟、雾化产品及相关产品</th>
                  <th className="px-4 py-4 text-left font-bold text-[#2E3F73] border-b-2 border-[#D8DDED] w-[29%]">实操差异</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/50">
                  <td className="px-4 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44]">远程销售</td>
                  <td className="px-4 py-4 border-b border-r border-[#D8DDED] text-[#334155] leading-7">禁止通过电话、数字、电子、邮寄或类似远程方式向消费者销售</td>
                  <td className="px-4 py-4 border-b border-r border-[#D8DDED] text-[#334155] leading-7">禁止通过无法清楚、及时识别购买者身份的远程销售、互联网、社交媒体、电商平台或类似渠道销售</td>
                  <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155] leading-7">传统烟草基本不能做远程销售；电子烟/雾化产品的核心是远程销售场景能否做到清楚、及时识别购买者身份。</td>
                </tr>
                <tr className="bg-[#F3F5FB]">
                  <td className="px-4 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44]">自动售货机 / 分配机</td>
                  <td className="px-4 py-4 border-b border-r border-[#D8DDED] text-[#334155] leading-7">禁止通过自动售货机或分配机销售</td>
                  <td className="px-4 py-4 border-b border-r border-[#D8DDED] text-[#334155] leading-7">禁止通过不能识别购买者不是未成年人的自动售货机、分配机或无人值守设备销售</td>
                  <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155] leading-7">传统烟草不能通过自动售货机销售；电子烟/雾化产品理论上存在年龄识别例外，但普通无人值守设备不能直接销售。</td>
                </tr>
                <tr className="bg-white/50">
                  <td className="px-4 py-4 border-b border-r border-[#D8DDED] font-semibold text-[#1F2A44]">销售点陈列</td>
                  <td className="px-4 py-4 border-b border-r border-[#D8DDED] text-[#334155] leading-7">应在收银台或销售点销售，不得让消费者直接接触或自行拿取</td>
                  <td className="px-4 py-4 border-b border-r border-[#D8DDED] text-[#334155] leading-7">可以在销售点展示，但不得让消费者直接接触或自行拿取；不得放置在未上锁的开放式货架、展示架、展示柜或桌台</td>
                  <td className="px-4 py-4 border-b border-[#D8DDED] text-[#334155] leading-7">两类产品都不能让消费者自行拿取；电子烟/雾化产品对陈列方式写得更细，必须采用上锁、封闭或由销售人员控制取用的展示方式。</td>
                </tr>
                <tr className="bg-[#F3F5FB]">
                  <td className="px-4 py-4 border-r border-[#D8DDED] font-semibold text-[#1F2A44]">未成年人销售</td>
                  <td className="px-4 py-4 border-r border-[#D8DDED] text-[#334155] leading-7">不得向未满18岁人员销售、供应或交付</td>
                  <td className="px-4 py-4 border-r border-[#D8DDED] text-[#334155] leading-7">不得向未满18岁人员销售、供应、交付或免费分发；销售时应核验购买者年龄</td>
                  <td className="px-4 py-4 border-[#D8DDED] text-[#334155] leading-7">实质要求一致：不能面向未成年人销售或提供；电子烟/雾化产品规则更明确强调销售时年龄核验。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
            <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
            市场运营规范
          </h2>
          <div className="space-y-4">
            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#4A6290] text-white text-sm font-bold flex-shrink-0">1</span>
                <h4 className="font-bold text-[#2E3F73] text-base">包装、标签与成分限制</h4>
              </div>
              <ul className="space-y-2 ml-9 pl-5 list-disc text-[#334155] text-base leading-7">
                <li>烟草产品包装应使用规定健康警示；健康警示应覆盖包装正反面主要展示区域下方 40%。</li>
                <li>电子烟、雾化产品及相关产品包装应标明产品成分、尼古丁含量、原产国、批号、生产日期、有效期，以及 DINAVISA 注册/登记信息。</li>
                <li>含尼古丁电子烟液或雾化液的尼古丁浓度不得超过 20mg/ml 或 2%。</li>
                <li>包装、标签、说明、销售展示或宣传材料中，不得使用"低风险""减害""健康""有益""戒烟""治疗""不成瘾""更安全"等功效性、治疗性或降低风险暗示。</li>
              </ul>
            </div>
            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#4A6290] text-white text-sm font-bold flex-shrink-0">2</span>
                <h4 className="font-bold text-[#2E3F73] text-base">广告、促销与赞助</h4>
              </div>
              <ul className="space-y-2 ml-9 pl-5 list-disc text-[#334155] text-base leading-7">
                <li>禁止烟草产品广告、促销和赞助；禁止通过广播、电视、纸媒、户外广告、移动广告、互联网、短信、邮寄等方式推广烟草产品。</li>
                <li>禁止电子烟、雾化产品及相关产品广告、促销和赞助。</li>
                <li>禁止通过销售点广告、社交媒体、互联网、流媒体、短信、邮寄、活动赞助、公益项目、第三方合作、品牌延伸或生活方式营销等方式推广电子烟、雾化产品及相关产品。</li>
                <li>禁止通过免费样品、赠品、试用、递样、折扣、抽奖、会员积分、组合销售等方式促销电子烟、雾化产品及相关产品。</li>
              </ul>
            </div>
            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#4A6290] text-white text-sm font-bold flex-shrink-0">3</span>
                <h4 className="font-bold text-[#2E3F73] text-base">使用场所与公共场所限制</h4>
              </div>
              <ul className="space-y-2 ml-9 pl-5 list-disc text-[#334155] text-base leading-7">
                <li>室内公共场所、工作场所和公共交通工具中禁止使用烟草产品、加热烟草产品、电子烟、雾化产品及相关产品。</li>
                <li>相关产品只能在符合要求的开放空间使用，且不得在有他人在场或非使用者通行的区域使用。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-red-600 text-2xl">⚠️</span>
            <h2 className="text-2xl font-bold text-[#243B63]">合规红线清单</h2>
          </div>
          <div className="bg-[#FEF2F2] border-2 border-[#FCA5A5] rounded-xl p-5">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-6 bg-[#DC2626] rounded-full"></div>
                  <h3 className="text-base font-bold text-[#991B1B]">产品上市与经营资质</h3>
                </div>
                <ul className="space-y-3 pl-5">
                  <li className="flex items-start gap-3 text-[#334155] text-base leading-7">
                    <span className="text-[#DC2626] mt-0.5 flex-shrink-0">✕</span>
                    <span>严禁将未完成 DINAVISA 登记/注册的烟草产品、电子烟、雾化产品、烟油/补充液、相关配件或耗材投入巴拉圭市场。</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#334155] text-base leading-7">
                    <span className="text-[#DC2626] mt-0.5 flex-shrink-0">✕</span>
                    <span>严禁在未完成烟草主体登记或未取得 DINAVISA 经营场所授权的情况下，开展对应产品的制造、进口、出口、分销、仓储或销售。</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-6 bg-[#DC2626] rounded-full"></div>
                  <h3 className="text-base font-bold text-[#991B1B]">销售渠道与陈列</h3>
                </div>
                <ul className="space-y-3 pl-5">
                  <li className="flex items-start gap-3 text-[#334155] text-base leading-7">
                    <span className="text-[#DC2626] mt-0.5 flex-shrink-0">✕</span>
                    <span>严禁向未满18岁人员销售、供应、交付或免费分发烟草产品、电子烟、雾化产品及相关产品。</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#334155] text-base leading-7">
                    <span className="text-[#DC2626] mt-0.5 flex-shrink-0">✕</span>
                    <span>严禁通过电话、数字、电子、邮寄或类似远程方式向消费者销售传统烟草产品。</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#334155] text-base leading-7">
                    <span className="text-[#DC2626] mt-0.5 flex-shrink-0">✕</span>
                    <span>严禁通过自动售货机或分配机销售传统烟草产品。</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#334155] text-base leading-7">
                    <span className="text-[#DC2626] mt-0.5 flex-shrink-0">✕</span>
                    <span>严禁通过无法清楚、及时识别购买者身份的远程渠道销售电子烟、雾化产品及相关产品。</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#334155] text-base leading-7">
                    <span className="text-[#DC2626] mt-0.5 flex-shrink-0">✕</span>
                    <span>严禁将烟草产品、电子烟、雾化产品及相关产品放置在消费者可直接接触或自行拿取的位置。</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#334155] text-base leading-7">
                    <span className="text-[#DC2626] mt-0.5 flex-shrink-0">✕</span>
                    <span>严禁通过未上锁的开放式货架、展示架、展示柜、超市柜台或桌台陈列电子烟、雾化产品及相关产品。</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-6 bg-[#DC2626] rounded-full"></div>
                  <h3 className="text-base font-bold text-[#991B1B]">包装、成分与宣传</h3>
                </div>
                <ul className="space-y-3 pl-5">
                  <li className="flex items-start gap-3 text-[#334155] text-base leading-7">
                    <span className="text-[#DC2626] mt-0.5 flex-shrink-0">✕</span>
                    <span>严禁销售尼古丁浓度超过 20mg/ml 或 2% 的电子烟液或雾化液。</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#334155] text-base leading-7">
                    <span className="text-[#DC2626] mt-0.5 flex-shrink-0">✕</span>
                    <span>严禁在包装、标签、说明、销售展示或宣传材料中使用"低风险""减害""健康""有益""戒烟""治疗""不成瘾""更安全"等功效性、治疗性或降低风险暗示。</span>
                  </li>
                  <li className="flex items-start gap-3 text-[#334155] text-base leading-7">
                    <span className="text-[#DC2626] mt-0.5 flex-shrink-0">✕</span>
                    <span>严禁违法开展烟草产品、电子烟、雾化产品及相关产品的广告、促销、赞助、免费样品、赠品、试用、递样、折扣、抽奖、会员积分或组合销售。</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-6 bg-[#DC2626] rounded-full"></div>
                  <h3 className="text-base font-bold text-[#991B1B]">公共场所使用</h3>
                </div>
                <ul className="space-y-3 pl-5">
                  <li className="flex items-start gap-3 text-[#334155] text-base leading-7">
                    <span className="text-[#DC2626] mt-0.5 flex-shrink-0">✕</span>
                    <span>严禁在室内公共场所、工作场所和公共交通工具中使用烟草产品、加热烟草产品、电子烟、雾化产品及相关产品。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
            <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
            重要资讯
          </h2>
          <div className="space-y-4">
            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <h3 className="text-lg font-bold text-[#2E3F73] mb-3">烟草控制与无烟环境规则</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[#1F2A44] text-base mb-1">《第5538/2015号法：关于修改第4045/2010号法并规制烟草相关活动及公共健康保护措施的法律》</p>
                  <p className="text-[#334155] text-base leading-7 mb-1">巴拉圭传统烟草控制基础法，主要覆盖无烟环境、烟草广告促销和赞助、包装标签、销售限制、烟草产品内容物和释放物监管。</p>
                  <a href="https://www.bacn.gov.py/leyes-paraguayas/4519/ley-n-5538-modifica-la-ley-n-404510-que-modifica-la-ley-n-12591-modificada-por-la-ley-n-242104-sobre-su-regimen-tributario-que-regula-las-actividades-relacionadas-al-tabaco-y-establece-medidas-sanitarias-de-proteccion-a-la-poblacion" target="_blank" rel="noopener noreferrer" className="text-[#4A6290] hover:underline text-base break-all">https://www.bacn.gov.py/leyes-paraguayas/4519/ley-n-5538-modifica-la-ley-n-404510-que-modifica-la-ley-n-12591-modificada-por-la-ley-n-242104-sobre-su-regimen-tributario-que-regula-las-actividades-relacionadas-al-tabaco-y-establece-medidas-sanitarias-de-proteccion-a-la-poblacion</a>
                </div>
                <div>
                  <p className="font-semibold text-[#1F2A44] text-base mb-1">《第7605/2017号法令：关于实施第5538/2015号法若干条款的法令》</p>
                  <p className="text-[#334155] text-base leading-7 mb-1">第5538/2015号法的主要实施法令，细化烟草包装健康警示、无烟环境、广告促销、销售限制和监管执行等要求。</p>
                  <a href="https://dinavisa.gov.py/wp-content/uploads/2025/08/DECRETO-N%C2%B0-7605-2017-Regula-las-actividades-relacionadas-al-tabaco.pdf" target="_blank" rel="noopener noreferrer" className="text-[#4A6290] hover:underline text-base break-all">https://dinavisa.gov.py/wp-content/uploads/2025/08/DECRETO-N°-7605-2017-Regula-las-actividades-relacionadas-al-tabaco.pdf</a>
                </div>
                <div>
                  <p className="font-semibold text-[#1F2A44] text-base mb-1">《第4624/2020号法令：关于修改第7605/2017号法令第3条的法令》</p>
                  <p className="text-[#334155] text-base leading-7 mb-1">无烟环境规则的重要修订文件，将公共空间使用限制扩展至烟草产品、加热烟草产品以及含或不含尼古丁的电子烟。</p>
                  <a href="https://assets.tobaccocontrollaws.org/uploads/legislation/Paraguay/Paraguay-Decree-No.-46242020-native.pdf" target="_blank" rel="noopener noreferrer" className="text-[#4A6290] hover:underline text-base break-all">https://assets.tobaccocontrollaws.org/uploads/legislation/Paraguay/Paraguay-Decree-No.-46242020-native.pdf</a>
                </div>
              </div>
            </div>

            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <h3 className="text-lg font-bold text-[#2E3F73] mb-3">电子烟、雾化产品与新兴装置规则</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[#1F2A44] text-base mb-1">《第7508/2025号法：关于电子尼古丁输送系统、无尼古丁类似系统、新兴装置、配件、耗材和用于雾化物质的健康保护措施》</p>
                  <p className="text-[#334155] text-base leading-7 mb-1">当前电子烟、雾化器、新兴装置、配件、耗材和用于雾化物质的核心专项法，覆盖进口、生产、消费、广告和商业化，并对销售、陈列、未成年人保护、尼古丁浓度和广告促销设置专项规则。</p>
                  <a href="https://www.bacn.gov.py/leyes-paraguayas/12907/ley-n-7508-2025-que-establece-medidas-sanitarias-de-protecci-n-a-la-salud-de-las-personas-en-relaci-n-a-los-dispositivos-accesorios-e-insumos-de-los-sistemas-electr-nicos-de-administraci-n-de-nicotina-sean-y-sistemas-similares-sin-nicotina-sssn-u-otros-dispositivos-nuevos-y-emergentes-con-o-sin-nicotina-y-sustancias-utilizadas-para-el-vapeo" target="_blank" rel="noopener noreferrer" className="text-[#4A6290] hover:underline text-base break-all">https://www.bacn.gov.py/leyes-paraguayas/12907/ley-n-7508-2025-que-establece-medidas-sanitarias-de-protecci-n-a-la-salud-de-las-personas-en-relaci-n-a-los-dispositivos-accesorios-e-insumos-de-los-sistemas-electr-nicos-de-administraci-n-de-nicotina-sean-y-sistemas-similares-sin-nicotina-sssn-u-otros-dispositivos-nuevos-y-emergentes-con-o-sin-nicotina-y-sustancias-utilizadas-para-el-vapeo</a>
                </div>
                <div>
                  <p className="font-semibold text-[#1F2A44] text-base mb-1">《国家卫生监督局第153/2021号决议：关于电子烟、雾化器、电子尼古丁输送系统、无尼古丁类似系统及相关使用物质的产品登记和经营场所授权要求的决议》</p>
                  <p className="text-[#334155] text-base leading-7 mb-1">电子烟及相关产品的注册和经营场所授权规则，涉及产品登记、进口、出口、生产、分销和商业化场所授权。第7508/2025号法出台后，该决议未见被明文废止，仍可作为登记/授权程序依据；具体适用应与第7508/2025号法项下的新监管要求一并判断。</p>
                  <a href="https://www.mspbs.gov.py/dependencias/dnvs/adjunto/843cb0-ResolucionDNVSN1531.pdf" target="_blank" rel="noopener noreferrer" className="text-[#4A6290] hover:underline text-base break-all">https://www.mspbs.gov.py/dependencias/dnvs/adjunto/843cb0-ResolucionDNVSN1531.pdf</a>
                </div>
              </div>
            </div>

            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <h3 className="text-lg font-bold text-[#2E3F73] mb-3">DINAVISA 注册与产品资料</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[#1F2A44] text-base mb-1">DINAVISA：烟草基产品（Productos a Base de Tabaco – TB）</p>
                  <p className="text-[#334155] text-base leading-7 mb-1">DINAVISA 烟草基产品登记页面，列明烟草基产品相关登记资料和 CPT（Certificado de Producto de Tabaco，烟草产品证书）等要求。</p>
                  <a href="https://dinavisa.gov.py/productos-a-base-de-tabaco-tb/" target="_blank" rel="noopener noreferrer" className="text-[#4A6290] hover:underline text-base break-all">https://dinavisa.gov.py/productos-a-base-de-tabaco-tb/</a>
                </div>
                <div>
                  <p className="font-semibold text-[#1F2A44] text-base mb-1">DINAVISA：尼古丁袋专项注册规则草案</p>
                  <p className="text-[#334155] text-base leading-7 mb-1">DINAVISA 曾发布 Bolsas de Nicotina（尼古丁袋）专项注册草案。该草案尚未正式落地，但对尼古丁袋的产品定义、注册思路和非治疗用途边界具有参考价值。</p>
                  <a href="https://dinavisa.gov.py/wp-content/uploads/2024/04/Proyecto-de-Resolucion-Bolsas-de-Nicotina.docx" target="_blank" rel="noopener noreferrer" className="text-[#4A6290] hover:underline text-base break-all">https://dinavisa.gov.py/wp-content/uploads/2024/04/Proyecto-de-Resolucion-Bolsas-de-Nicotina.docx</a>
                </div>
              </div>
            </div>

            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <h3 className="text-lg font-bold text-[#2E3F73] mb-3">税务与商品归类资料</h3>
              <div>
                <p className="font-semibold text-[#1F2A44] text-base mb-1">DNIT：商品归类数据库</p>
                <p className="text-[#334155] text-base leading-7 mb-1">用于查询巴拉圭商品归类 / 裁定资料，可辅助确认尼古丁袋、电子烟、雾化产品、烟草原料及相关配件的 HS 编码和进口税务申报口径。</p>
                <a href="https://www.dnit.gov.py/web/portal-institucional/dictamenes-de-clasificacion" target="_blank" rel="noopener noreferrer" className="text-[#4A6290] hover:underline text-base break-all">https://www.dnit.gov.py/web/portal-institucional/dictamenes-de-clasificacion</a>
              </div>
            </div>

            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <h3 className="text-lg font-bold text-[#2E3F73] mb-3">新闻 / 执法动态</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[#1F2A44] text-base mb-1">DINAVISA：未注册电子烟产品卫生警示</p>
                  <p className="text-[#334155] text-base leading-7 mb-1">DINAVISA 针对未注册或来源不明电子烟产品发布卫生警示，体现主管机关对电子烟产品注册、来源可追溯和授权销售场所的监管关注。</p>
                  <a href="https://dinavisa.gov.py/alerta-sanitaria-n-12-2023/" target="_blank" rel="noopener noreferrer" className="text-[#4A6290] hover:underline text-base break-all">https://dinavisa.gov.py/alerta-sanitaria-n-12-2023/</a>
                </div>
                <div>
                  <p className="font-semibold text-[#1F2A44] text-base mb-1">MSPBS：电子烟和雾化器进口登记要求说明</p>
                  <p className="text-[#334155] text-base leading-7 mb-1">公共卫生和社会福利部说明电子烟、vapeadores、vaporeadores、SEAN、SSSN 及相关使用物质需要办理 DINAVISA 登记，体现电子烟进口前注册要求。</p>
                  <a href="https://www.mspbs.gov.py/portal/25515/exigiran-inscripcion-de-cigarrillos-electronicos-y-vapeadores-para-su-importacion.html" target="_blank" rel="noopener noreferrer" className="text-[#4A6290] hover:underline text-base break-all">https://www.mspbs.gov.py/portal/25515/exigiran-inscripcion-de-cigarrillos-electronicos-y-vapeadores-para-su-importacion.html</a>
                </div>
                <div>
                  <p className="font-semibold text-[#1F2A44] text-base mb-1">Vouga Abogados：2025年税务动态</p>
                  <p className="text-[#334155] text-base leading-7 mb-1">说明《第7508/2025号法》对电子烟、雾化器及其可雾化液体选择性消费税（ISC）口径的影响。</p>
                  <a href="https://www.vouga.com.py/novedades-impositivas-agosto-2025/" target="_blank" rel="noopener noreferrer" className="text-[#4A6290] hover:underline text-base break-all">https://www.vouga.com.py/novedades-impositivas-agosto-2025/</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
