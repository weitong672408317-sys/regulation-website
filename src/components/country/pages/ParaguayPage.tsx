'use client';
import React from 'react';
import { CountryData } from '../../../../data/mockData';
import {
  StatusCard, FormattedText, parseOverview
} from '../CountryComponents';

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
          <div className="space-y-4">
            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <p className="text-[#334155] text-base leading-7">{country.seasonSummary}</p>
            </div>
            {country.regulatoryUpdates.map((update, index) => {
              const parts = update.split('\n\n');
              const title = parts[0];
              const content = parts.slice(1).join('\n\n');
              return (
                <div key={index} className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h4 className="font-bold text-[#2E3F73] text-base mb-2">{title}</h4>
                  <p className="text-[#334155] text-base leading-7">{content}</p>
                </div>
              );
            })}
          </div>
          <div className="space-y-4">
            <div className="bg-[#F1F5F9] border border-[#CBD5E1] rounded-xl p-5">
              <h3 className="text-base font-bold text-[#475569] mb-3">未见全国性全面禁售品类</h3>
              <p className="text-[#64748B] text-base leading-7">公开资料下，未见针对传统卷烟、HNB烟支、电子烟、烟油、尼古丁袋/尼古丁口含膜、烟草薄片、烟叶、爆珠/香精胶囊、滤嘴棒的全国性全面禁售规则。</p>
            </div>

            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <h3 className="text-lg font-bold text-[#2E3F73] mb-4">产品定义</h3>
              <ul className="space-y-4">
                {country.regulatorySystem.definition.split(/\n\n+/).map((block, idx) => {
                  const lines = block.split('\n').filter(l => l.trim());
                  if (lines.length === 0) return null;
                  const titleLine = lines[0];
                  const contentLines = lines.slice(1);
                  return (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-[#263247] text-base">{titleLine}</span>
                        {contentLines.length > 0 && (
                          <div className="text-[#334155] text-base leading-7 mt-1">
                            {contentLines.map((line, li) => (
                              <p key={li}>{line}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <h3 className="text-lg font-bold text-[#2E3F73] mb-4">1. 尼古丁袋 / 尼古丁口含膜</h3>
              <StatusCard
                status="amber"
                title="部分限制 / 需确认"
                customLabel="部分限制 / 需确认"
                content={<>
                  <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                  <p className="mb-3">尼古丁袋、尼古丁口含膜。</p>
                  <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                  <ul className="space-y-1 text-[#334155]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                      <span>未见明确禁售规则，但正式准入规则尚未完全稳定。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24C] mt-1.5 flex-shrink-0"></span>
                      <span>DINAVISA 已经关注该类产品的卫生注册，DNIT 也已有无烟草尼古丁袋商品归类实践；实际进口和销售前，需要先确认是否可以取得卫生注册、是否需要经营场所授权、适用尼古丁含量和标签要求，以及进口税务口径。</span>
                    </li>
                  </ul>
                </>}
              />
            </div>

            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <h3 className="text-lg font-bold text-[#2E3F73] mb-4">2. 传统卷烟、雪茄、加工烟草</h3>
              <StatusCard
                status="green"
                title="可准入"
                customLabel="可准入"
                content={<>
                  <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                  <p className="mb-3">传统卷烟、雪茄、加工烟草。</p>
                  <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                  <ul className="space-y-1 text-[#334155]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                      <span>烟草基产品需要办理 DINAVISA 产品登记，登记结果体现为烟草产品证书或按品种产品登记证明。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                      <span>制造、进口、出口烟草、烟草产品或烟草产品原料的主体，需要办理 DINAVISA 烟草主体登记。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                      <span>普通零售端未见单独烟草零售许可证要求。</span>
                    </li>
                  </ul>
                </>}
              />
            </div>

            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <h3 className="text-lg font-bold text-[#2E3F73] mb-4">3. 电子烟 / 雾化器 / 一次性电子烟 / 烟油 / 烟弹 / 胶囊 / 配件 / 耗材</h3>
              <StatusCard
                status="green"
                title="可准入"
                customLabel="可准入"
                content={<>
                  <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                  <p className="mb-3">电子烟、雾化器、一次性电子烟、烟油、烟弹、胶囊、配件、耗材。</p>
                  <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                  <ul className="space-y-1 text-[#334155]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                      <span>相关产品需要完成 DINAVISA 产品注册和经营场所授权。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                      <span>烟油、香精和补充液即使不含尼古丁，只要用于雾化吸入，也需要纳入注册、标签和税务合规范围。</span>
                    </li>
                  </ul>
                </>}
              />
            </div>

            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <h3 className="text-lg font-bold text-[#2E3F73] mb-4">4. HNB烟支 / 加热烟草产品 / HNB设备及配件</h3>
              <StatusCard
                status="green"
                title="可准入"
                customLabel="可准入"
                content={<>
                  <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                  <p className="mb-3">HNB烟支、加热烟草产品、HNB设备及配件。</p>
                  <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                  <ul className="space-y-1 text-[#334155]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                      <span>含烟草的 HNB烟支需要符合烟草产品包装、税务、销售和公共场所使用规则。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                      <span>HNB设备、加热装置、相关配件和补充商品需要确认是否办理 DINAVISA 注册、是否适用选择性消费税。</span>
                    </li>
                  </ul>
                </>}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                <h3 className="text-lg font-bold text-[#2E3F73] mb-4">5. 烟草薄片、烟叶</h3>
                <StatusCard
                  status="green"
                  title="可准入"
                  customLabel="可准入"
                  content={<>
                    <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                    <p className="mb-3">烟草薄片、烟叶。</p>
                    <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                    <ul className="space-y-1 text-[#334155]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                        <span>作为烟草原料或半成品可准入。用于本地加工或进口时，重点确认进口申报、税务和下游用途。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                        <span>如果包装成消费者可直接使用的成品，需符合烟草产品包装、销售和税务规则。</span>
                      </li>
                    </ul>
                  </>}
                />
              </div>

              <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                <h3 className="text-lg font-bold text-[#2E3F73] mb-4">6. 爆珠 / 香精胶囊、滤嘴棒</h3>
                <StatusCard
                  status="green"
                  title="可准入"
                  customLabel="可准入"
                  content={<>
                    <div className="font-semibold text-[#263247] mb-1">适用产品：</div>
                    <p className="mb-3">爆珠、香精胶囊、滤嘴棒。</p>
                    <div className="font-semibold text-[#263247] mb-1">主要合规要点：</div>
                    <ul className="space-y-1 text-[#334155]">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                        <span>作为普通烟草辅材可准入。不含尼古丁、不含烟草提取物、也不作为雾化耗材销售的，通常不需要按电子烟产品注册。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6AAF7C] mt-1.5 flex-shrink-0"></span>
                        <span>如含尼古丁、烟草提取物，或作为烟油香精、烟弹、胶囊、HNB配件销售，需要确认 DINAVISA 注册、标签和税务要求。</span>
                      </li>
                    </ul>
                  </>}
                />
              </div>
            </div>
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
            {parseOverview(country.regulatorySystem.overview).filter((section: { title: string; content: string }) => section.title !== '主要产品口径').map((section: { title: string; content: string }, index: number) => (
              <div key={index} className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                <h3 className="text-lg font-bold text-[#2E3F73] mb-4">{section.title}</h3>
                <FormattedText text={section.content} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
            <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
            合规资质
          </h2>
          <div className="space-y-4">
            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                  <span className="text-[#334155] text-base leading-7">{country.compliance.licenseRequirements}</span>
                </li>
              </ul>
            </div>
            {country.compliance.genericTable && country.compliance.genericTable.rows.map((row, ri) => {
              const productName = row[0] as string;
              const registration = row[1] as string[];
              const qualification = row[2] as string[];
              const isLong = (registration?.length || 0) + (qualification?.length || 0) > 3;
              return (
                <div key={ri} className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-base font-bold text-[#2E3F73] mb-4">{productName}</h3>
                  <div className={isLong ? 'space-y-4' : 'grid md:grid-cols-2 gap-4'}>
                    <div>
                      <h4 className="text-sm font-semibold text-[#475569] mb-2">产品登记 / 注册</h4>
                      <ul className="space-y-2">
                        {(registration || []).map((item, ii) => (
                          <li key={ii} className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                            <span className="text-[#334155] text-base leading-7">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#475569] mb-2">主体或场所资质</h4>
                      <ul className="space-y-2">
                        {(qualification || []).map((item, ii) => (
                          <li key={ii} className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                            <span className="text-[#334155] text-base leading-7">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-[#243B63] mb-6 flex items-center gap-3">
            <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
            税收政策
          </h2>
          <div className="space-y-4">
            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                  <span className="text-[#334155] text-base leading-7">{country.tax.exciseTax}</span>
                </li>
              </ul>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {country.tax.policies.map((policy, index) => (
                <div key={index} className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <h3 className="text-base font-bold text-[#2E3F73] mb-3">{policy.title}</h3>
                  <p className="text-[#334155] text-base leading-7">{policy.description}</p>
                </div>
              ))}
            </div>
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
            <div className="grid md:grid-cols-2 gap-4">
              {country.marketOperation.regulations.map((regulation, index) => (
                <div key={index} className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#4A6290] text-white text-xs font-bold flex-shrink-0">{index + 1}</span>
                    <h3 className="text-base font-bold text-[#2E3F73]">{regulation.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {regulation.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A6290] flex-shrink-0"></span>
                        <span className="text-[#334155] text-base leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white border border-[#D4DAEA] rounded-2xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-[#4A6290] rounded-full"></div>
            <h2 className="text-2xl font-bold text-[#243B63]">趋势预判与红线警告</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
              <h3 className="text-lg font-bold text-[#2E3F73] mb-4">趋势预判</h3>
              <p className="text-[#334155] text-base leading-7">{country.trendsWarnings.trendAnalysis}</p>
            </div>
            <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-xl p-5">
              <h3 className="text-lg font-bold text-[#DC2626] mb-4">合规红线清单</h3>
              <ul className="space-y-2">
                {country.trendsWarnings.redLines.map((line, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#DC2626] mt-1.5">✗</span>
                    <span className="text-[#334155] leading-7">{line}</span>
                  </li>
                ))}
              </ul>
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
          <div className="pb-6">
            <div className="bg-[#E8EDF5] border border-[#D8DDED] rounded-lg p-4 mb-6">
              <p className="text-sm text-[#64748B] leading-7">
                以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。巴拉圭相关法律和行政决议可能经过后续修订或更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#2E3F73] mb-4">烟草控制与传统烟草登记</h3>
                <div className="space-y-4">
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <a href="https://www.bacn.gov.py/leyes-paraguayas/4519/ley-n-5538-modifica-la-ley-n-404510-que-modifica-la-ley-n-12591-modificada-por-la-ley-n-242104-sobre-su-regimen-tributario-que-regula-las-actividades-relacionadas-al-tabaco-y-establece-medidas-sanitarias-de-proteccion-a-la-poblacion" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base hover:underline block mb-2">
                      《第5538/2015号法：关于烟草相关活动及公共健康保护措施》
                    </a>
                    <p className="text-sm text-[#334155] leading-6">巴拉圭传统烟草控制基础法律，涉及烟草相关活动、税务制度、公共健康保护、包装标签、销售限制和广告促销限制。</p>
                  </div>
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <a href="https://dinavisa.gov.py/productos-a-base-de-tabaco-tb/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base hover:underline block mb-2">
                      DINAVISA：烟草基产品（Productos a Base de Tabaco – TB）
                    </a>
                    <p className="text-sm text-[#334155] leading-6">DINAVISA 烟草基产品登记资料入口，列明烟草相关法令、决议、表格、CPT 证书和产品登记资料要求。</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#2E3F73] mb-4">电子烟与雾化产品专项监管</h3>
                <div className="space-y-4">
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <a href="https://www.bacn.gov.py/leyes-paraguayas/12907/ley-n-7508-2025-que-establece-medidas-sanitarias-de-protecci-n-a-la-salud-de-las-personas-en-relaci-n-a-los-dispositivos-accesorios-e-insumos-de-los-sistemas-electronicos-de-administraci-n-de-nicotina-sean-y-sistemas-similares-sin-nicotina-sssn-u-otros-dispositivos-nuevos-y-emergentes-con-o-sin-nicotina-y-sustancias-utilizadas-para-el-vapeo" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base hover:underline block mb-2">
                      《第7508/2025号法：关于电子尼古丁输送系统、无尼古丁类似系统、新兴装置、配件、耗材和雾化物质的健康保护措施》
                    </a>
                    <p className="text-sm text-[#334155] leading-6">巴拉圭电子烟、新兴装置、配件、耗材和用于雾化物质的核心专项法，覆盖进口、生产、消费、广告和商业化，并同步影响雾化器及雾化液的选择性消费税口径。</p>
                  </div>
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <a href="https://www.tobaccocontrollaws.org/legislation/paraguay/e-cigarettes/main-policies" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base hover:underline block mb-2">
                      Tobacco Control Laws：Paraguay E-Cigarettes Main Policies
                    </a>
                    <p className="text-sm text-[#334155] leading-6">汇总巴拉圭电子烟主要监管政策，可作为电子烟广告、销售、包装、使用限制和监管口径的辅助参考。</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#2E3F73] mb-4">尼古丁袋 / 边界产品</h3>
                <div className="space-y-4">
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <a href="https://dinavisa.gov.py/wp-content/uploads/2024/04/Proyecto-de-Resolucion-Bolsas-de-Nicotina.docx" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base hover:underline block mb-2">
                      DINAVISA：尼古丁袋专项注册规则草案
                    </a>
                    <p className="text-sm text-[#334155] leading-6">DINAVISA 曾就尼古丁袋设置专项注册草案，说明该类产品已受到卫生监管关注，但正式准入路径仍需结合现行主管机关口径确认。</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#2E3F73] mb-4">新闻 / 执法动态</h3>
                <div className="space-y-4">
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <a href="https://dinavisa.gov.py/alerta-sanitaria-n-12-2023/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base hover:underline block mb-2">
                      DINAVISA：未注册电子烟产品卫生警示
                    </a>
                    <p className="text-sm text-[#334155] leading-6">DINAVISA 曾就未取得卫生注册且尼古丁含量超过允许水平的电子烟产品发布卫生警示，并明确未授权产品的进口、持有、使用、分销和商业化存在违法风险。</p>
                  </div>
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <a href="https://www.vouga.com.py/novedades-impositivas-agosto-2025/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base hover:underline block mb-2">
                      Vouga Abogados：2025年税务动态，说明《第7508/2025号法》对电子烟及雾化液选择性消费税的影响
                    </a>
                    <p className="text-sm text-[#334155] leading-6">说明《第7508/2025号法》将雾化器及其含或不含尼古丁的可雾化液体纳入香烟或烟草衍生产品 ISC 类别，并影响最低 ISC 税率。</p>
                  </div>
                  <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                    <a href="https://www.dnit.gov.py/web/portal-institucional/dictamenes-de-clasificacion" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base hover:underline block mb-2">
                      DNIT：商品归类数据库
                    </a>
                    <p className="text-sm text-[#334155] leading-6">可用于查询巴拉圭商品归类实践，支持尼古丁袋等边界产品进入市场前确认 HS 编码和税务申报口径。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
