

export interface ProductCategoryRestrictions {
  prohibited: string[];
  partiallyProhibited: string[];
  open: string[];
}

// 新的准入限制结构 - 按状态分组，每个状态下列出产品和规则
export interface AccessRestrictionItem {
  productName: string;
  rule: string;
}

export interface AccessRestrictionsByStatus {
  fullyProhibited: AccessRestrictionItem[];
  partiallyRestricted: AccessRestrictionItem[];
  openAccessible: AccessRestrictionItem[];
}

// 酋长国差异表格行数据
export interface EmirateDifferenceRow {
  emirate: string;
  chewingTobacco: string;
  electronicCigarette: string;
  hookah: string;
  note?: string;
}

// 合规资质卡片数据
export interface ComplianceLicenseCard {
  title: string;
  description: string;
}

export interface ComplianceTable {
  product: string;
  nppbkc: string | string[];
  piImportApproval: string | string[];
  bpomRegistration: string | string[];
  halalCertification: string | string[];
}

export interface TaxPolicy {
  title: string;
  description: string;
}

export interface MarketOperationItem {
  category: string;
  items: string[];
}

export interface CountryData {
  id: string;
  name: string;
  isoCode: string;
  status: string;
  productQualification: string;
  restrictions: string;
  regulatoryIntensity: '低' | '中' | '高';
  hasChangesThisSeason: boolean;
  seasonSummary: string;
  regulatoryUpdates: string[];
  regulatorySystem: {
    overview: string;
    definition: string;
  };
  accessRestrictions?: {
    electronicCigarette: ProductCategoryRestrictions;
    hnb: ProductCategoryRestrictions;
    nicotinePouch: ProductCategoryRestrictions;
    cigarette: ProductCategoryRestrictions;
    otherNovel: ProductCategoryRestrictions;
  };
  accessRestrictionsByStatus?: AccessRestrictionsByStatus;
  emirateDifferences?: EmirateDifferenceRow[];
  compliance: {
    licenseRequirements: string;
    table: ComplianceTable[];
    licenseCards?: ComplianceLicenseCard[];
  };
  tax: {
    exciseTax: string;
    policies: TaxPolicy[];
  };
  marketOperation: {
    marketingRestrictions: string;
    displaySales: string;
    regulations: MarketOperationItem[];
  };
  trendsWarnings: {
    trendAnalysis: string;
    redLines: string[];
  };
  references: {
    regulations: { title: string; url: string }[];
    news: { title: string; url: string }[];
    pdfs: { title: string; url: string }[];
  };
}

// 基础国家数据 - 作为备份，当无法读取 data.json 时使用
const fallbackCountries: CountryData[] = [
  {
    id: 'china',
    name: '中国内地',
    isoCode: 'CN',
    status: '严格监管',
    productQualification: '受管控',
    restrictions: '销售渠道限制，广告严格禁止',
    regulatoryIntensity: '高',
    hasChangesThisSeason: true,
    seasonSummary: '本季度发布新的监管细则，进一步明确产品合规标准',
    regulatoryUpdates: [
      '2024年1月：国家烟草专卖局发布《产品合规管理细则》',
      '2024年2月：市场监管总局开展专项检查行动',
      '2024年3月：新增产品技术标准3项'
    ],
    regulatorySystem: {
      overview: '中国对特殊物质产品实施严格的监管制度，由国家烟草专卖局统一管理。产品需通过严格的安全评估和质量检测方可上市销售。',
      definition: '根据相关法规， 含有尼古丁的产品被定义为特殊管理产品，需遵守专门的法律法规。产品分类包括但不限于：电子烟、加热不燃烧烟草制品等。'
    },
    accessRestrictions: {
      electronicCigarette: {
        prohibited: ['线上销售', '向未成年人销售', '公共场所使用', '电视广播广告'],
        partiallyProhibited: ['特定区域实体店铺销售', '特定成分含量限制'],
        open: ['获得许可的企业生产', '合规产品在指定渠道销售']
      },
      hnb: {
        prohibited: ['线上销售', '向未成年人销售'],
        partiallyProhibited: ['试点区域销售'],
        open: ['获得许可的企业生产']
      },
      nicotinePouch: {
        prohibited: ['销售', '进口', '使用'],
        partiallyProhibited: [],
        open: []
      },
      cigarette: {
        prohibited: ['线上销售', '向未成年人销售', '公共场所使用', '大部分广告'],
        partiallyProhibited: ['包装警示标识要求'],
        open: ['烟草专卖渠道销售']
      },
      otherNovel: {
        prohibited: ['销售', '进口'],
        partiallyProhibited: [],
        open: []
      }
    },
    compliance: {
      licenseRequirements: '生产企业需获得国家烟草专卖局颁发的生产许可证；销售企业需获得相应的销售许可证。产品需通过强制性产品认证。',
      table: []
    },
    tax: {
      exciseTax: '适用高额消费税，税率根据产品类型和尼古丁含量确定。增值税13%，消费税从价计征。',
      policies: []
    },
    marketOperation: {
      marketingRestrictions: '全面禁止各类形式的广告宣传，包括但不限于互联网、电视、报纸、户外广告等。不得进行任何形式的促销活动。',
      displaySales: '仅可在获得许可的实体店铺销售，需设置明显的未成年人禁售标识。产品陈列需符合相关规定，不得诱导消费。',
      regulations: []
    },
    trendsWarnings: {
      trendAnalysis: '监管趋势持续收紧，未来可能进一步提高产品标准，扩大禁售范围。建议密切关注政策动态，确保合规经营。',
      redLines: [
        '严禁向未成年人销售任何产品',
        '严禁通过互联网销售产品',
        '严禁进行任何形式的广告宣传',
        '严禁生产销售未获许可的产品',
        '严禁虚假宣传产品功效'
      ]
    },
    references: {
      regulations: [],
      news: [],
      pdfs: []
    }
  },
  {
    id: 'hongkong',
    name: '中国香港',
    isoCode: 'HK',
    status: '严格监管',
    productQualification: '受管控',
    restrictions: '销售渠道限制，广告严格禁止',
    regulatoryIntensity: '高',
    hasChangesThisSeason: true,
    seasonSummary: '本季度发布新的监管细则，进一步明确产品合规标准',
    regulatoryUpdates: [
      '2024年1月：香港卫生署发布《产品合规管理细则》',
      '2024年2月：开展专项检查行动',
      '2024年3月：新增产品技术标准'
    ],
    regulatorySystem: {
      overview: ' 香港对特殊物质产品实施严格的监管制度，由卫生署统一管理。产品需通过严格的安全评估和质量检测方可上市销售。',
      definition: '根据相关法规，含有尼古丁的产品被定义为特殊管理产品，需遵守专门的法律法规。产品分类包括但不限于：电子烟、加热不燃烧烟草制品等。'
    },
    accessRestrictions: {
      electronicCigarette: {
        prohibited: ['线上销售', '向未成年人销售', '公共场所使用', '电视广播广告'],
        partiallyProhibited: ['特定区域实体店铺销售', '特定成分含量限制'],
        open: ['获得许可的企业生产', '合规产品在指定渠道销售']
      },
      hnb: {
        prohibited: ['线上销售', '向未成年人销售'],
        partiallyProhibited: ['试点区域销售'],
        open: ['获得许可的企业生产']
      },
      nicotinePouch: {
        prohibited: ['销售', '进口', '使用'],
        partiallyProhibited: [],
        open: []
      },
      cigarette: {
        prohibited: ['线上销售', '向未成年人销售', '公共场所使用', '大部分广告'],
        partiallyProhibited: ['包装警示标识要求'],
        open: ['烟草专卖渠道销售']
      },
      otherNovel: {
        prohibited: ['销售', '进口'],
        partiallyProhibited: [],
        open: []
      }
    },
    compliance: {
      licenseRequirements: '生产企业需获得香港卫生署颁发的生产许可证；销售企业需获得相应的销售许可证。产品需通过强制性产品认证。',
      table: []
    },
    tax: {
      exciseTax: '适用高额消费税，税率根据产品类型和尼古丁含量确定。',
      policies: []
    },
    marketOperation: {
      marketingRestrictions: '全面禁止各类形式的广告宣传，包括但不限于互联网、电视、报纸、户外广告等。不得进行任何形式的促销活动。',
      displaySales: '仅可在获得许可的实体店铺销售，需设置明显的未成年人禁售标识。产品陈列需符合相关规定，不得诱导消费。',
      regulations: []
    },
    trendsWarnings: {
      trendAnalysis: '监管趋势持续收紧，未来可能进一步提高产品标准，扩大禁售范围。建议密切关注政策动态，确保合规经营。',
      redLines: [
        '严禁向未成年人销售任何产品',
        '严禁通过互联网销售产品',
        '严禁进行任何形式的广告宣传',
        '严禁生产销售未获许可的产品',
        '严禁虚假宣传产品功效'
      ]
    },
    references: {
      regulations: [],
      news: [],
      pdfs: []
    }
  },
  {
  id: 'indonesia',
  name: '印尼',
  isoCode: 'ID',
  status: '可准入 / 重税务合规',
  productQualification: '需营业许可、NPPBKC或进口批准等，视产品类型而定',
  restrictions: '无全国性全面禁令；重点限制集中在税票、销售对象、销售场所、广告、包装标签及非法流通打击',
  regulatoryIntensity: '中',
  hasChangesThisSeason: true,
  seasonSummary: '印尼整体仍属于烟草及新型烟草产品可准入、监管相对友好但重税务合规的市场，传统卷烟、HNB、电子烟、烟草薄片、尼古丁口含膜等产品原则上没有全国性全面禁令；2026年以来监管重点主要集中在非法卷烟/无税票产品打击、卷烟消费税结构讨论、电子烟流通监管加强等方面。',
  regulatoryUpdates: [
    '2026年1月：非法卷烟执法明显加强。印尼海关及消费税总局查获约2.49亿支非法卷烟，数量接近2025年同期的四倍；另有报道称，2026年1月非法卷烟执法行动达到1,243起，同比增长约53.8%。这说明2026年监管重点之一是继续打击无税票、走私和非法流通卷烟。',
    '2026年1月及5月：政府讨论通过消费税结构调整治理非法卷烟。印尼政府提出考虑新增卷烟消费税层级，政策目标是吸引非法卷烟生产者进入合法税收体系，而不是单纯提高整体税负；2026年5月，印尼公共卫生团体对新增低税层级方案提出反对，认为可能导致低价卷烟扩张。该动态反映出印尼2026年烟草税政策重点并非简单加税，而是围绕非法市场、税收层级和合法产业之间进行平衡。',
    '2026年5月：电子烟流通监管趋于加强。印尼 BPOM 表示将加强对电子烟流通的监管，并将与国家禁毒机构 BNN 协作应对含毒品电子烟液问题。BPOM 同时表示，是否禁止特定产品应基于科学评估，不宜一概实施全面禁令。该动态对电子烟业务的影响是：印尼短期监管方向更偏向“加强监管和区分合法/非法产品”，而不是立即全面禁止电子烟。'
  ],
  regulatorySystem: {
    overview: '印尼对烟草及新型烟草产品整体较为开放，不属于全面禁止型市场。传统卷烟、HNB、电子烟、烟草薄片、尼古丁口含膜、爆珠、滤嘴棒、烟叶等产品原则上均可在满足相应资质、税务、包装、标签和销售限制的前提下经营。监管重点不在于“一刀切禁止”，而在于营业许可、应税消费品管理、税票、进口批准、包装健康警示、未成年人保护、广告限制和地方控烟规则。实务上，印尼市场准入路径具有可操作性，但审批和执行存在一定机关裁量及地方差异，具体项目落地前仍需结合产品形态、用途、销售区域和交易路径进行确认。',
    definition: '成瘾性物质：根据 PP 28/2024 第429条，包括含烟草或不含烟草的产品，无论是香烟或其他具有成瘾性质的形式，只要其使用可能对个人和/或社会造成损害，且可以是固体、液体或气体形态。\n\n烟草制品：指全部或部分以烟草叶为原料制成的任何产品，经加工后可通过燃烧、加热、雾化、吸食、吸入、咀嚼或任何其他消费方式使用。法规列举包括香烟、雪茄、烟叶卷烟、切丝烟草、固态和液态烟草以及其他烟草加工产品。\n\n电子烟：指以液态、固态或其他形式存在的烟草制品，由烟草叶通过提取或其他方式加工而成，根据技术发展和消费者偏好制成，供最终消费者使用，并以零售包装形式销售，通过电子加热装置加热后吸入使用。此外，含有尼古丁和/或其他物质的电子烟及其加工产品，包括具有相同或类似类型与性质的合成制品，只要通过电子加热装置加热后吸入使用，也纳入该条例管理范围。\n\n尼古丁袋 / 尼古丁口含膜：现行《健康法》及 PP 28/2024 没有对尼古丁袋或尼古丁口含膜设置清晰、专门的定义。该类产品不通过电子加热装置吸入使用，因此不属于电子烟；如使用合成尼古丁且全链条不含烟草叶，是否属于烟草制品存在较强争议；如使用烟草来源尼古丁，稳妥起见宜按其他烟草加工产品或 BKC 路径处理。'
  },
  accessRestrictions: {
    electronicCigarette: {
      prohibited: [],
      partiallyProhibited: [],
      open: [
        '电子烟可准入，不存在全国性全面禁令。',
        '经营者需依法取得营业许可，并遵守尼古丁最大含量、产品变种检测、成分和添加剂报告、包装标签、健康警示等要求。',
        '2026年以来，BPOM 对电子烟流通监管的角色受到更多关注，非法或含违禁成分电子烟液是重点执法风险。'
      ]
    },
    hnb: {
      prohibited: [],
      partiallyProhibited: [],
      open: [
        'HNB烟支可准入，不存在全国性全面禁令。',
        '成品按 BKC 管理，生产及本土流通需取得 NPPBKC。',
        '如进入印尼本土市场销售，还需依法完成消费税、税票、烟草税及包装标签等要求。'
      ]
    },
    nicotinePouch: {
      prohibited: [],
      partiallyProhibited: [
        '尼古丁袋、尼古丁口含膜原则上并非禁止产品，但现行法规缺乏清晰专门定义，生产标准、销售规则和主管机关口径仍不够稳定，属于准入存在不确定性的产品。',
        '使用烟草来源尼古丁：稳妥起见，应按其他烟草加工产品或 BKC 路径处理，并取得 NPPBKC。',
        '使用非烟草来源尼古丁：目前资料显示不强制要求取得 NPPBKC，但仍建议在实际生产或销售前确认主管机关口径。',
        '如宣称戒烟、治疗或药品功效：可能触发 BPOM 药品路径，需另行确认。'
      ],
      open: []
    },
    cigarette: {
      prohibited: [],
      partiallyProhibited: [],
      open: [
        '传统卷烟在印尼具有成熟监管路径，可以依法生产和销售。',
        '生产及本土流通需取得 NPPBKC，并依法完成消费税、税票、烟草税、包装标签等要求。',
        '成品卷烟进口虽非绝对禁止，但实务中进口批准较难取得，通常仅特定主体获批，数量受到严格限制。因此，传统卷烟整体属于可准入产品，但进口成品卷烟路径需单独评估。'
      ]
    },
    otherNovel: {
      prohibited: [],
      partiallyProhibited: [],
      open: [
        '烟草薄片：作为工业原材料可以依法生产、使用和流通，不属于 BKC，不需要 NPPBKC。烟草薄片进口一般限于具备生产资质的工厂自用，并受政府对进口总量和国内烟叶供需平衡的管理。若烟草薄片不再作为原材料，而是以可供消费者直接使用的产品形式销售，其监管和税务定性可能发生变化。',
        '烟叶：作为原材料可以依法使用，不因其本身当然触发 NPPBKC。烟叶进口需要 PI 进口批准，且政府会根据印尼国内烟叶收成、特定品种需求和供需情况决定是否允许进口，通常还需要农业部门许可文件支持。因此，烟叶整体属于可准入产品，但进口路径存在较强管理要求。',
        '爆珠 / 香精胶囊：原则上可准入。含烟草提取物或尼古丁的，需要取得 NPPBKC；不含烟草提取物或尼古丁的，不需要取得 NPPBKC。',
        '滤嘴棒：作为烟草配件或原辅料可准入，不需要 NPPBKC，不需要 PI 进口批准，也不需要 BPOM 产品注册。'
      ]
    }
  },
  compliance: {
    licenseRequirements: '基础资质：印尼烟草及尼古丁相关业务一般需要先通过 OSS 系统取得 NIB，并根据具体经营范围和风险等级办理相应营业许可。若业务涉及 BKC 产品，还需取得 NPPBKC；若涉及限制类进口商品，还需取得 PI 进口批准。巴淡岛等自由贸易区内经营，还可能涉及区域经营许可及空间利用许可。',
    table: [
      { product: '传统卷烟', nppbkc: '✓ 需要', piImportApproval: '✓ 需要（极少发放）', bpomRegistration: '× 不需要', halalCertification: '不强制' },
      { product: 'HNB烟支', nppbkc: '✓ 需要', piImportApproval: '× 不需要', bpomRegistration: '× 不需要', halalCertification: '不强制' },
      { product: '烟草薄片', nppbkc: '× 不需要', piImportApproval: '✓ 需要（仅限工厂自用）', bpomRegistration: '× 不需要', halalCertification: '不强制' },
      { 
        product: '尼古丁口含膜/尼古丁袋', 
        nppbkc: ['使用烟草来源尼古丁制成：需要取得', '使用非烟草来源尼古丁制成：不强制取得'], 
        piImportApproval: '× 不需要', 
        bpomRegistration: ['不宣称戒烟、治疗或药品功效：不需要取得', '宣称戒烟、治疗或药品功效：需另行评估 BPOM 药品路径'], 
        halalCertification: '不强制' 
      },
      { 
        product: '爆珠/香精胶囊', 
        nppbkc: ['含烟草提取物或尼古丁：需要取得', '不含烟草提取物或尼古丁：不需要取得'], 
        piImportApproval: '× 不需要', 
        bpomRegistration: '× 不需要', 
        halalCertification: '不强制' 
      },
      { product: '滤嘴棒', nppbkc: '× 不需要', piImportApproval: '× 不需要', bpomRegistration: '× 不需要', halalCertification: '不强制' },
      { 
        product: '烟叶', 
        nppbkc: ['作为原料使用：不需要取得', '作为消费品销售：需要取得'], 
        piImportApproval: '✓ 需要（政府管控）', 
        bpomRegistration: '× 不需要', 
        halalCertification: '不强制' 
      }
    ]
  },
  tax: {
    exciseTax: '印尼税务判断的核心是区分产品是否属于 BKC（应税消费品），以及产品是否进入印尼本土市场流通。烟草薄片作为工业原材料使用时，按非 BKC 处理；HNB烟支、传统卷烟、尼古丁口含膜等成品按 BKC 处理。',
    policies: [
      { title: '消费税 Cukai', description: '适用于 BKC 产品，如传统卷烟、HNB烟支、尼古丁口含膜等。消费税不是统一百分比税率，而是按产品类别、每支/每克/每毫升固定税额、生产者分组及最低零售指导价 HJE 档位确定。' },
      { title: '税票 Pita Cukai', description: '税票不是独立税种，而是表明 BKC 产品已按规定完成消费税管理、允许流通的关键合规标识。BKC 产品在印尼本土流通时必须依法贴附税票；非 BKC 产品不适用消费税，也不需要贴附消费税税票。未贴税票销售 BKC 产品，是印尼烟草业务的核心合规红线。' },
      { title: '烟草税 Pajak Rokok', description: '烟草税通常以消费税为税基，按消费税的10%计征。消费税、烟草税和增值税可以并行适用。' },
      { title: '增值税 PPN', description: '烟草制品适用特殊折算机制，通常以 HJE 为折算基础，按 9.9% × HJE 计征。原材料及一般货物按一般 PPN 规则处理。' },
      { title: '巴淡岛税务提示', description: '巴淡岛自由贸易区便利原则上限于区内使用或区内监管流转。一旦货物从巴淡进入印尼本土市场，需按进入印尼关境或国内流通规则处理。对 BKC 产品而言，巴淡岛不当然免除消费税和联动烟草税。' }
    ]
  },
  marketOperation: {
    marketingRestrictions: '广告与宣传：禁止在数字社交媒体进行烟草制品和电子烟广告宣传。网站、商业应用、销售场所、户外媒体、印刷媒体、电视和广播广告均受到限制。广告不得描述或暗示吸烟、使用电子烟对健康有益，不得使用误导性或鼓励消费的语言，不得展示儿童、青少年、孕妇、卡通或动画形象。电视和广播广告仅允许在当地时间22:00至次日05:00之间播放。户外广告不得设置在无烟区、主干道、教育机构和儿童游乐场周边500米范围内。',
    displaySales: '销售与陈列：不得向21岁以下人员及孕妇销售烟草制品和电子烟；不得使用自动售货机销售烟草制品和电子烟；不得单支零售传统卷烟，雪茄和电子烟产品除外；不得在教育机构和儿童游乐场200米范围内销售烟草制品和电子烟；不得将烟草制品和电子烟放置在出入口或人流密集区域附近；使用商业网站或社交媒体销售的，应设置有效年龄验证机制。',
    regulations: [
      {
        category: '销售与陈列',
        items: [
          '不得向21岁以下人员及孕妇销售烟草制品和电子烟',
          '不得使用自动售货机销售烟草制品和电子烟',
          '不得单支零售传统卷烟，雪茄和电子烟产品除外',
          '不得在教育机构和儿童游乐场200米范围内销售烟草制品和电子烟',
          '不得将烟草制品和电子烟放置在出入口或人流密集区域附近',
          '使用商业网站或社交媒体销售的，应设置有效年龄验证机制'
        ]
      },
      {
        category: '包装与标签',
        items: [
          '烟草制品和电子烟包装需标注图文健康警示',
          '健康警示应印制于包装正反面宽面上方区域，各占50%',
          '烟草制品包装应标注尼古丁和焦油声明、禁止向21岁以下人员及孕妇销售、批号、生产日期、生产者名称和地址等信息',
          '电子烟包装应标注含尼古丁声明、禁止向21岁以下人员及孕妇销售、批号、生产日期、生产者名称和地址等信息',
          '不得使用误导性或促销性标识',
          '出口产品如不符合印尼本地包装要求，应先向海关备案并取得批准'
        ]
      },
      {
        category: '广告与宣传',
        items: [
          '禁止在数字社交媒体进行烟草制品和电子烟广告宣传',
          '网站、商业应用、销售场所、户外媒体、印刷媒体、电视和广播广告均受到限制',
          '广告不得描述或暗示吸烟、使用电子烟对健康有益',
          '不得使用误导性或鼓励消费的语言',
          '不得展示儿童、青少年、孕妇、卡通或动画形象',
          '电视和广播广告仅允许在当地时间22:00至次日05:00之间播放',
          '户外广告不得设置在无烟区、主干道、教育机构和儿童游乐场周边500米范围内'
        ]
      },
      {
        category: '赞助、促销与CSR',
        items: [
          '禁止免费赠送、打折促销、附赠烟草或电子烟产品',
          '禁止将烟草或电子烟品牌用于非烟草/非电子烟产品',
          '赞助活动不得使用烟草或电子烟商标、品牌标识或品牌形象',
          'CSR 活动不得以推广烟草或电子烟为目的',
          '不得免费发放烟草或电子烟产品，也不得作为奖品、折扣或赠品',
          'CSR 或赞助活动不得由媒体报道或公开宣传'
        ]
      }
    ]
  },
  trendsWarnings: {
    trendAnalysis: '印尼目前没有明显信号显示将对传统烟草、HNB或电子烟实施全国性全面禁令。2026年以来可观察到的监管方向主要包括：对非法卷烟和无税票产品持续高压执法，海关及消费税总局查处数量明显增加；电子烟监管更关注流通端和非法产品，特别是含毒品电子烟液、违禁成分、BPOM流通监管、年龄限制、包装警示和广告限制；消费税政策可能继续围绕非法市场治理调整，但是否新增税收层级、如何调整税率结构，仍存在政策讨论和争议。\n\n整体看，印尼仍是烟草及新型烟草产品可准入且相对友好的市场，政策重点是把产品纳入合法资质、税务、包装和销售监管体系，而不是对相关品类进行全面封禁。传统卷烟和HNB的重点风险在税票、NPPBKC、清关和包装；电子烟的重点风险在BPOM监管、成分和非法烟液；尼古丁袋/口含膜的重点风险在产品定性和主管机关口径不稳定。',
    redLines: [
      '严禁无证或超许可范围在印尼生产、进口、销售烟草制品、电子烟、HNB或尼古丁产品。',
      '严禁在印尼本土销售未贴税票的 BKC 产品。',
      '严禁走私、低报、错报品名、错报 HS 编码、错报用途或规避消费税、烟草税、PPN及进口环节税费。',
      '严禁向21岁以下人员及孕妇销售或免费提供烟草制品和电子烟。',
      '严禁在教育机构和儿童游乐场200米范围内销售烟草制品和电子烟。',
      '严禁在数字社交媒体违法发布烟草或电子烟广告。',
      '严禁使用未经批准或不符合要求的包装、标签和健康警示。',
      '严禁在产品或宣传中作出减害、健康、治疗、戒烟等未经批准的功效宣称。',
      '严禁未经FTO或知识产权核查，擅自生产、销售可能侵权的产品。',
      '严禁非法采购、储存、销售或处置 B3 危险物质及危险废物。'
    ]
  },
  references: {
    regulations: [
      {
        title: '《健康法》（2023年第17号法，UU 17/2023 tentang Kesehatan）——将烟草制品纳入成瘾性物质管理，授权政府管控生产、流通、销售、广告及使用',
        url: 'https://peraturan.bpk.go.id/Download/314883/UU%20Nomor%2017%20Tahun%202023.pdf'
      },
      {
        title: '《2024年第28号政府条例》（PP 28/2024）——规定烟草制品和电子烟的定义、许可、检测、包装、销售、广告、无烟区和行政处罚',
        url: 'https://peraturan.bpk.go.id/details/294077/pp-no-28-tahun-2024'
      },
      {
        title: '《消费税法》（1995年第11号法，UU 11/1995 tentang Cukai）——规定应税消费品、消费税征收和税票管理基本规则',
        url: 'https://peraturan.bpk.go.id/Details/46203/uu-no-11-tahun-1995'
      },
      {
        title: '《2007年第39号法》（UU 39/2007）——修订《1995年第11号消费税法》',
        url: 'https://peraturan.bpk.go.id/Download/29560/UU%20Nomor%2039%20Tahun%202007.pdf'
      },
      {
        title: '《财政部第96/2024号部长规章》（PMK 96/2024）——调整电子烟及其他烟草加工产品消费税税率规则',
        url: 'https://peraturan.bpk.go.id/Details/311451/pmk-no-96-tahun-2024'
      },
      {
        title: '印尼海关烟草制品消费税税率说明——汇总 PMK 96/2024、PMK 97/2024 等烟草消费税政策',
        url: 'https://www.beacukai.go.id/tarif-cukai-ht'
      },
      {
        title: '印尼卫生部无烟区法规数据库（Kawasan Tanpa Rokok / KTR）——汇总地方性无烟区及控烟相关规定',
        url: 'https://ktr.kemkes.go.id/regulasi'
      }
    ],
    news: [
      {
        title: '2026年1月：印尼政府讨论新增卷烟消费税层级，以治理非法卷烟市场',
        url: 'https://en.antaranews.com/news/399833/indonesia-plans-new-cigarette-excise-layer-to-tackle-illegal-tobacco'
      },
      {
        title: '2026年2月：印尼海关2026年1月查获约2.49亿支非法卷烟',
        url: 'https://jakartaglobe.id/news/customs-seizes-249-million-illegal-cigarettes-in-january'
      },
      {
        title: '2026年5月：BPOM 表示将加强电子烟流通监管，但未明确支持全面禁售',
        url: 'https://jakartaglobe.id/news/indonesia-to-step-up-surveillance-of-vape'
      },
      {
        title: '2026年2月：公共卫生团体反对新增卷烟消费税层级，担心低价卷烟扩张',
        url: 'https://jakartaglobe.id/lifestyle/health-groups-reject-plan-for-new-cigarette-excise-tier-warn-of-cheaper-prices'
      }
    ],
    pdfs: []
  }
},
  {
    id: 'uae',
    name: '阿联酋',
    isoCode: 'AE',
    status: '许可制',
    productQualification: '需许可、认证',
    restrictions: '强许可、强认证、强税务监管',
    regulatoryIntensity: '中',
    hasChangesThisSeason: false,
    seasonSummary: '本季无重大监管更新。',
    regulatoryUpdates: [],
    regulatorySystem: {
      overview: '阿联酋整体属于烟草及新型烟草产品可准入、但强许可、强认证、强税务监管的市场，原则上不是全国性全面禁止型市场。\n\n阿联酋烟草监管主要有三层：\n\n* 联邦层面：主要规定烟草控制、产品标准、消费税、数字税票、未成年人保护、广告促销限制等基础规则。\n* 酋长国 / 市政层面：主要影响销售点许可、水烟场所、距离限制、陈列、公共场所使用等具体执行要求。\n* 自由区与大陆地区边界：自由区适合进出口、仓储和转口，但不等于可以直接面向阿联酋大陆市场销售。\n\n实务判断时，不应只看产品是否被禁止，还要同时确认产品定性、经营主体、营业执照、产品认证、税务税票及目标酋长国地方要求。',
      definition: '1. 烟草\n\n阿联酋控烟法对“烟草”有明确界定，覆盖烟草植物及其根、茎、叶、果实、干燥或未干燥种子等。\n\n烟叶属于典型烟草原料。\n\n2. 烟草制品\n\n阿联酋控烟法对“烟草制品”有明确界定，指全部或部分以烟叶为原料制成的产品，包括烟叶原形、切碎、切丁、与其他材料混合或以其他形态形成的产品，也包括任何含有烟草成分的复合材料。\n\n传统卷烟、水烟烟草、含烟草成分的 HNB烟支、烟草薄片，以及其他含烟草成分的成品或半成品，原则上可能落入该大类。\n\n3. 电子尼古丁产品\n\n阿联酋强制标准《电子尼古丁产品》（UAE.S 5030:2018）适用于设计成传统烟草产品形式的电子尼古丁产品。公开资料显示，该标准覆盖不含烟草、可能含或不含尼古丁的电子雾化产品及其补充装产品。\n\n电子烟设备、烟油、电子水烟等通常可按该大类理解。\n\n4. 加热卷烟产品\n\n阿联酋联邦税务局数字税票规则将电加热卷烟等列入数字税票覆盖范围。\n\nHNB烟支通常可按加热卷烟产品理解；如产品含烟草成分，也可能同时落入烟草制品监管范围。\n\n5. 无烟草尼古丁袋\n\n阿联酋已发布《无烟草尼古丁袋技术法规》（2025年第2号内阁决议），并将《UAE.S 5061:2025 无烟草尼古丁袋》列为强制性技术法规。\n\n该技术法规名称本身指向“不含烟草的尼古丁袋”这一产品类别。尼古丁袋 / 尼古丁口含膜如不含烟草，可能按“无烟草口含尼古丁产品”路径判断；如含烟草成分，则不宜直接套用该分类。\n\n6. 烟草薄片\n\n公开法规未检索到“烟草薄片”的单独定义。\n\n如烟草薄片全部或部分以烟草叶为原料，原则上可能落入烟草制品或烟草原料相关范围；作为工业原料使用，与作为消费者可直接使用成品销售，应分别判断。\n\n7. 爆珠 / 香精胶囊、滤嘴棒\n\n公开控烟法规及已检索资料未见对爆珠、香精胶囊、滤嘴棒设置专门定义。\n\n页面层面不宜直接将其定义为烟草制品；应根据其成分、用途、是否含烟草或尼古丁、是否作为烟草产品组成部分使用，判断是否触发烟草、尼古丁产品或一般商品监管要求。'
    },
    accessRestrictionsByStatus: {
      fullyProhibited: [
        {
          productName: '含烟草咀嚼制品',
          rule: '禁止进口、销售、持有或分销，例如 Paan、Gutkha、Mawa 等'
        },
        {
          productName: '仿烟糖果 / 玩具',
          rule: '禁止进口或分销，例如糖果烟、玩具烟斗等儿童导向产品'
        }
      ],
      partiallyRestricted: [
        {
          productName: '电子烟 / 烟油',
          rule: '电子烟本身可准入，但部分特定有害添加物或口味可能受限，例如肉桂味液体在部分酋长国存在限制'
        },
        {
          productName: '尼古丁袋 / 尼古丁口含膜',
          rule: '仅在不含烟草、符合无烟草尼古丁袋技术法规及认证要求的情况下，可考虑准入；如产品含烟草成分，可能落入含烟草咀嚼制品或其他烟草制品路径，不应直接按无烟草尼古丁袋处理'
        }
      ],
      openAccessible: [
        {
          productName: '传统卷烟、HNB烟支、水烟烟草',
          rule: '产品本身可准入，分别按烟草制品、加热卷烟产品或水烟烟草路径管理'
        },
        {
          productName: '电子烟 / 烟油',
          rule: '产品本身可准入，通常按电子尼古丁产品路径管理'
        },
        {
          productName: '烟草薄片、烟叶',
          rule: '作为烟草原料原则上可准入'
        },
        {
          productName: '爆珠 / 香精胶囊、滤嘴棒',
          rule: '作为普通辅材或配套材料原则上可准入；如含尼古丁、烟草提取物或被设计为消费者直接使用产品，再按具体成分和用途确认监管路径'
        }
      ]
    },
    emirateDifferences: [
      {
        emirate: '阿布扎比',
        chewingTobacco: '禁止',
        electronicCigarette: '允许；无全面口味禁令，但特定有害添加物/口味可能受限',
        hookah: '允许'
      },
      {
        emirate: '迪拜',
        chewingTobacco: '禁止',
        electronicCigarette: '允许；无全面口味禁令，但部分添加物/口味可能受限',
        hookah: '允许；按水烟场所许可和公共场所规则管理'
      },
      {
        emirate: '沙迦',
        chewingTobacco: '禁止',
        electronicCigarette: '允许；未见全面口味禁令',
        hookah: '限制明显更严；公开营业/公共场所水烟经营限制较强'
      },
      {
        emirate: '阿治曼',
        chewingTobacco: '禁止',
        electronicCigarette: '允许；未见全面口味禁令',
        hookah: '允许；但经营区域限制较明显，居民区或市区经营空间受限'
      },
      {
        emirate: '富查伊拉',
        chewingTobacco: '禁止',
        electronicCigarette: '允许；未见全面口味禁令',
        hookah: '允许'
      },
      {
        emirate: '乌姆盖万',
        chewingTobacco: '禁止',
        electronicCigarette: '允许；未见全面口味禁令',
        hookah: '允许；但市区、住宅区经营限制较明显'
      },
      {
        emirate: '哈伊马角',
        chewingTobacco: '禁止',
        electronicCigarette: '允许；未见全面口味禁令',
        hookah: '允许',
        note: '暂未发现各酋长国对传统卷烟、HNB烟支、烟草薄片、烟叶、爆珠/香精胶囊、滤嘴棒等品类存在明确、稳定的差异化禁令'
      }
    ],
    compliance: {
      licenseRequirements: '阿联酋烟草及新型烟草产品的合规重点，不在于一般公司设立资质，而在于产品认证、行业许可、税务税票和地方销售许可。',
      table: [],
      licenseCards: [
        {
          title: '产品符合性证书（CoC）',
          description: '电子烟、烟草产品、烟油、无烟草尼古丁袋等受管制产品进入阿联酋市场前，通常需取得产品符合性证书。CoC 是产品清关、进入本地市场和接受监管检查的重要合规文件。'
        },
        {
          title: '阿联酋符合性评估计划（ECAS）',
          description: 'ECAS 是阿联酋强制性产品认证机制，用于确认产品符合阿联酋适用技术标准。受技术法规管制的产品，通常需通过 ECAS 路径取得 CoC。'
        },
        {
          title: '无异议函（NOC）',
          description: 'NOC 是政府主管部门出具的无异议函，常用于确认相关主管机关对特定受控业务、产品或操作没有异议。含尼古丁、烟油、高浓度尼古丁、香精等敏感产品，在产品注册、仓储、转运、再包装、出口或自由区操作等环节，可能需要主管机关出具 NOC；涉及戒烟、治疗或健康功效表达的，还可能触发卫生主管机关审查。'
        },
        {
          title: '消费税注册及数字税票（DTS）',
          description: '消费税注册是主体层面的税务义务，重点关注进口、生产、仓储或本地流通主体是否需要注册、申报和缴税。数字税票是产品流通层面的税务合规标识，重点关注特定产品能否进口和在本地市场销售。卷烟、水烟烟草和加热卷烟产品属于数字税票重点品类，适用 DTS 要求的产品未贴附数字税票，不得进口进入阿联酋或在本地市场销售。'
        },
        {
          title: '地方销售许可',
          description: '烟草销售点、水烟场所、电子烟销售点及相关仓储、陈列场所，可能需要取得所在酋长国或市政部门的专项许可。迪拜等地对烟草及烟具销售场所设有较具体的地方许可和场所要求。'
        }
      ]
    },
    tax: {
      exciseTax: '阿联酋税务判断的核心是：产品是否属于消费税应税商品，以及是否进入阿联酋本地市场流通。成品烟草、加热卷烟产品、水烟烟草、电子吸烟设备及相关液体通常属于重点税务监管对象；烟草原料、辅材或转口货物则需结合用途和流通路径判断。',
      policies: [
        { title: '消费税', description: '烟草及烟草制品适用 100% 消费税；电子吸烟设备及工具适用 100% 消费税；电子吸烟设备及工具所用液体适用 100% 消费税。' },
        { title: '数字税票', description: '卷烟、水烟烟草和加热卷烟产品是数字税票重点品类。未贴数字税票的相关产品不得进口进入阿联酋或在本地市场销售。' },
        { title: '增值税', description: '阿联酋标准增值税税率为 5%，烟草及相关产品销售通常还需按一般增值税规则处理。' },
        { title: '自由区税务提示', description: '自由区仓储、转口或离岸贸易，不等于货物进入阿联酋大陆市场后可以免除消费税、数字税票或进口监管要求。' }
      ]
    },
    marketOperation: {
      marketingRestrictions: '禁止任何形式的烟草广告、促销和赞助活动，涵盖平面、广播、户外、网络等媒介。禁止通过赠送、抽奖等方式向公众派发烟草制品或相关赠品。禁止对烟草制品进行打折、捆绑销售等促销。不得使用儿童、青少年导向的包装、图案、玩具化表达或营销方式。',
      displaySales: '仅可在获得许可的场所展示或销售烟草制品。销售点须持证经营。不得在宗教场所、教育机构、医疗和体育设施等法定禁烟场所内销售或使用烟草产品。不得在距清真寺100米、学校150米范围内开设烟草销售点或水烟提供场所。',
      regulations: [
        {
          category: '销售与陈列',
          items: [
            '不得向未满18岁人员销售烟草或烟草制品',
            '不得通过自动售货机销售烟草或烟草制品',
            '不得在未取得主管机关许可的任何场所展示或销售烟草制品',
            '不得通过互联网、电商平台或社交媒体等电子渠道销售烟草制品',
            '不得在宗教场所、教育机构、医疗和体育设施等法定禁烟场所内销售或使用烟草产品',
            '不得在距清真寺100米、学校150米范围内开设烟草销售点或水烟提供场所'
          ]
        },
        {
          category: '包装与标签',
          items: [
            '烟草产品包装应包含规定的健康警示和必要产品信息',
            '不得在包装上使用误导性用语或附加促销元素',
            '包装标签应与产品认证、进口申报和销售资料保持一致',
            '涉及戒烟、治疗、减害或健康功效的表达，应谨慎处理并确认是否需主管机关审批'
          ]
        },
        {
          category: '广告与宣传',
          items: [
            '禁止任何形式的烟草广告、促销和赞助活动',
            '禁止通过赠送、抽奖等方式向公众派发烟草制品或相关赠品',
            '禁止对烟草制品进行打折、捆绑销售等促销',
            '不得使用儿童、青少年导向的包装、图案、玩具化表达或营销方式'
          ]
        },
        {
          category: '主要酋长国差异',
          items: [
            '阿布扎比：咀嚼烟草制品禁止；电子烟允许（无全面口味禁令，但特定有害添加物/口味可能受限）；水烟允许',
            '迪拜：咀嚼烟草制品禁止；电子烟允许（无全面口味禁令，但部分添加物/口味可能受限）；水烟允许（按水烟场所许可和公共场所规则管理）',
            '沙迦：咀嚼烟草制品禁止；电子烟允许（未见全面口味禁令）；水烟限制明显更严（公开营业/公共场所水烟经营限制较强）',
            '阿治曼：咀嚼烟草制品禁止；电子烟允许（未见全面口味禁令）；水烟允许（经营区域限制较明显，居民区或市区经营空间受限）',
            '富查伊拉：咀嚼烟草制品禁止；电子烟允许（未见全面口味禁令）；水烟允许',
            '乌姆盖万：咀嚼烟草制品禁止；电子烟允许（未见全面口味禁令）；水烟允许（市区、住宅区经营限制较明显）',
            '哈伊马角：咀嚼烟草制品禁止；电子烟允许（未见全面口味禁令）；水烟允许',
            '备注：暂未发现各酋长国对传统卷烟、HNB烟支、烟草薄片、烟叶、爆珠/香精胶囊、滤嘴棒等品类存在明确、稳定的差异化禁令；地方差异主要集中在咀嚼烟草制品、电子烟部分成分/口味限制，以及个别酋长国的水烟经营场所规则'
          ]
        }
      ]
    },
    trendsWarnings: {
      trendAnalysis: '目前没有明显信号显示阿联酋将对传统卷烟、HNB烟支或电子烟实施全国性全面禁令。监管方向更偏向于把相关产品纳入许可、产品认证、消费税、数字税票和地方销售管理体系，而不是对全部品类一概封禁。\n\n阿联酋市场的主要风险不是产品原则上不能做，而是合规链条是否完整。特别需要关注：产品认证、数字税票、消费税、自由区与大陆销售边界、地方销售许可、广告促销限制和未成年人保护。尼古丁袋、尼古丁口含膜等边界产品已有新的技术监管方向，但进入市场前仍应按具体产品确认适用路径。',
      redLines: [
        '严禁未经许可，包括无证或超许可范围，在阿联酋境内生产、销售烟草制品及其替代品，如电子烟、加热不燃烧产品等',
        '严禁在未完成 ECAS 认证、未取得 CoC 的情况下，销售烟草制品以及电子烟产品',
        '严禁向阿联酋进口或在阿联酋分销仿制烟草的糖果或玩具等产品，例如糖果烟、玩具烟斗',
        '严禁向阿联酋进口或在阿联酋分销含烟草的咀嚼制品',
        '严禁在未取得主管机关许可的任何场所展示或销售烟草制品，销售点须持证经营',
        '严禁通过自动售货机销售烟草制品以及相关产品',
        '严禁通过互联网、电商平台或社交媒体等电子渠道销售烟草制品',
        '严禁在宗教场所、教育机构、医疗和体育设施等法定禁烟场所内销售或使用烟草产品',
        '严禁在距清真寺100米、学校150米范围内开设烟草销售点或水烟提供场所',
        '严禁向未满18岁的未成年人销售或提供任何烟草及含尼古丁产品',
        '严禁任何形式的烟草广告、促销和赞助活动，涵盖平面、广播、户外、网络等媒介',
        '严禁通过赠送、抽奖等方式向公众派发烟草制品或相关赠品，如免费样品、比赛奖品',
        '严禁对烟草制品进行打折、捆绑销售等促销',
        '严禁在包装上使用误导性用语或附加促销元素，例如"低焦油""赠券"等',
        '严禁未贴附数字税票即在阿联酋销售适用税票要求的烟草制品'
      ]
    },
    references: {
      regulations: [
        { title: '《联邦法第15号（2009年）—烟草控制法》', url: 'https://uaelegislation.gov.ae/en/legislations/1206/download' },
        { title: '《内阁决议第24号（2013年）—烟草控制法执行细则》', url: 'https://uaelegislation.gov.ae/en/legislations/1205/download' },
        { title: '《内阁决议第98号（2023年）—烟草种植和烟草产品制造许可规则》', url: 'https://uaelegislation.gov.ae/en/legislations/2310/download' },
        { title: '《内阁决议第2号（2025年）—无烟草尼古丁袋技术法规》', url: 'https://uaelegislation.gov.ae/en/legislations/2787/download' },
        { title: '阿联酋工业与先进技术部《电子尼古丁产品》强制标准说明', url: 'https://moiat.gov.ae/en/digital-participation/blogs/2021/10/18/uae-mandatory-regulation-for-electronic-nicotine-products' },
        { title: '阿联酋联邦税务局数字税票规则', url: 'https://tax.gov.ae/en/taxes/excise.tax/excise.tax.topics/digital.tax.stamps.aspx' }
      ],
      news: [],
      pdfs: []
    }
  },
  {
    id: 'russia',
    name: '俄罗斯',
    isoCode: 'RU',
    status: '严格管控',
    productQualification: '受限制',
    restrictions: '销售限制，包装要求',
    regulatoryIntensity: '高',
    hasChangesThisSeason: false,
    seasonSummary: '监管政策保持稳定，持续加强市场巡查',
    regulatoryUpdates: [
      '2023年11月：加强市场巡查通知',
      '2023年12月：更新包装标识要求'
    ],
    regulatorySystem: {
      overview: '俄罗斯对特殊物质产品实施严格的烟草制品管理制度，由联邦消费者权益保护和公益监督局监管。产品需符合烟草制品管理法规。',
      definition: '产品被纳入烟草制品管理范畴，适用烟草制品相关法律法规。需符合俄罗斯技术法规要求。'
    },
    accessRestrictions: {
      electronicCigarette: {
        prohibited: ['线上销售', '向18岁以下未成年人销售', '公共场所使用', '大部分形式广告'],
        partiallyProhibited: ['尼古丁含量限制', '包装警示标识', '销售渠道限制'],
        open: ['获得许可的烟草店销售', '合规产品流通']
      },
      hnb: {
        prohibited: ['线上销售', '向18岁以下未成年人销售', '公共场所使用'],
        partiallyProhibited: ['包装警示标识', '销售渠道限制'],
        open: ['获得许可的烟草店销售']
      },
      nicotinePouch: {
        prohibited: ['销售', '进口'],
        partiallyProhibited: [],
        open: []
      },
      cigarette: {
        prohibited: ['线上销售', '向18岁以下未成年人销售', '公共场所使用', '大部分广告'],
        partiallyProhibited: ['包装警示标识要求'],
        open: ['烟草专卖渠道销售']
      },
      otherNovel: {
        prohibited: ['销售', '进口'],
        partiallyProhibited: [],
        open: []
      }
    },
    compliance: {
      licenseRequirements: '需获得烟草制品生产和销售许可证，产品需通过强制性认证。进口产品需符合海关和技术监管要求。',
      table: []
    },
    tax: {
      exciseTax: '适用烟草制品消费税，税率较高。增值税20%。需严格履行纳税申报义务。',
      policies: []
    },
    marketOperation: {
      marketingRestrictions: '几乎全面禁止广告宣传，仅可在销售点内部进行有限的产品展示。禁止任何形式的促销活动。',
      displaySales: '仅可在获得许可的烟草专卖店销售，需严格执行年龄验证制度。产品包装需有大幅健康警示图片和文字。',
      regulations: []
    },
    trendsWarnings: {
      trendAnalysis: '监管政策持续严格，未来可能进一步提高税收和加强市场监管。建议密切关注法规变化，确保合规。',
      redLines: [
        '严禁线上销售',
        '严禁向未成年人销售',
        '严禁非法进口',
        '严禁广告宣传',
        '严禁逃避消费税'
      ]
    },
    references: {
      regulations: [],
      news: [],
      pdfs: []
    }
  },
  {
    id: 'singapore',
    name: '新加坡',
    isoCode: 'SG',
    status: '严格禁止',
    productQualification: '禁止',
    restrictions: '全面禁止销售和使用',
    regulatoryIntensity: '高',
    hasChangesThisSeason: true,
    seasonSummary: '加大执法力度，严厉打击非法交易',
    regulatoryUpdates: [
      '2024年1月：HSA发布最新执法通知',
      '2024年2月：加大边境检查力度',
      '2024年3月：公布一批违法案例'
    ],
    regulatorySystem: {
      overview: '新加坡对特殊物质产品实施全面禁止政策，由卫生科学局（HSA）和新加坡海关严格执法。任何相关产品的销售、拥有和使用均属违法。',
      definition: '所有含尼古丁的电子雾化产品、加热烟草制品等均被全面禁止，无论是否含有烟草成分。'
    },
    accessRestrictions: {
      electronicCigarette: {
        prohibited: ['销售', '购买', '拥有', '使用', '进口', '广告'],
        partiallyProhibited: [],
        open: []
      },
      hnb: {
        prohibited: ['销售', '购买', '拥有', '使用', '进口', '广告'],
        partiallyProhibited: [],
        open: []
      },
      nicotinePouch: {
        prohibited: ['销售', '购买', '拥有', '使用', '进口', '广告'],
        partiallyProhibited: [],
        open: []
      },
      cigarette: {
        prohibited: ['向21岁以下人员销售', '公共场所使用', '大部分广告'],
        partiallyProhibited: ['包装警示标识要求'],
        open: ['许可渠道销售']
      },
      otherNovel: {
        prohibited: ['销售', '购买', '拥有', '使用', '进口', '广告'],
        partiallyProhibited: [],
        open: []
      }
    },
    compliance: {
      licenseRequirements: '无任何许可途径，全面禁止。',
      table: []
    },
    tax: {
      exciseTax: '不适用，产品全面禁止。',
      policies: []
    },
    marketOperation: {
      marketingRestrictions: '全面禁止任何形式的广告、推广和销售活动。',
      displaySales: '全面禁止，任何销售行为均属违法。',
      regulations: []
    },
    trendsWarnings: {
      trendAnalysis: '新加坡坚持全面禁止政策，执法力度持续加强，对违法行为处以重罚。建议不要尝试任何违规行为。',
      redLines: [
        '严禁进口任何产品',
        '严禁销售或提供',
        '严禁拥有或使用',
        '严禁任何形式广告',
        '严禁通过网络购买'
      ]
    },
    references: {
      regulations: [],
      news: [],
      pdfs: []
    }
  },
  {
    id: 'malaysia',
    name: '马来西亚',
    isoCode: 'MY',
    status: '禁止销售',
    productQualification: '禁止',
    restrictions: '销售和进口禁止',
    regulatoryIntensity: '高',
    hasChangesThisSeason: false,
    seasonSummary: '禁止政策保持不变，持续加强边境检查',
    regulatoryUpdates: [
      '2023年10月：加强边境检查通知',
      '2023年12月：更新禁运产品清单'
    ],
    regulatorySystem: {
      overview: '马来西亚禁止特殊物质产品的销售和进口，由卫生部和马来西亚海关执行。拥有和使用受到严格限制。',
      definition: '含尼古丁的电子雾化产品等被归类为受管制物品，禁止商业流通。'
    },
    accessRestrictions: {
      electronicCigarette: {
        prohibited: ['销售', '进口', '商业广告'],
        partiallyProhibited: ['个人拥有量限制'],
        open: []
      },
      hnb: {
        prohibited: ['销售', '进口', '商业广告'],
        partiallyProhibited: ['个人拥有量限制'],
        open: []
      },
      nicotinePouch: {
        prohibited: ['销售', '进口'],
        partiallyProhibited: [],
        open: []
      },
      cigarette: {
        prohibited: ['向18岁以下未成年人销售', '公共场所使用'],
        partiallyProhibited: ['包装警示标识要求'],
        open: ['许可渠道销售']
      },
      otherNovel: {
        prohibited: ['销售', '进口'],
        partiallyProhibited: [],
        open: []
      }
    },
    compliance: {
      licenseRequirements: '无商业许可途径。',
      table: []
    },
    tax: {
      exciseTax: '不适用。',
      policies: []
    },
    marketOperation: {
      marketingRestrictions: '全面禁止商业广告和推广。',
      displaySales: '禁止商业销售。',
      regulations: []
    },
    trendsWarnings: {
      trendAnalysis: '马来西亚持续维持禁止政策，加强边境检查和市场监管。',
      redLines: [
        '严禁进口',
        '严禁商业销售',
        '严禁广告宣传',
        '严禁非法交易'
      ]
    },
    references: {
      regulations: [],
      news: [],
      pdfs: []
    }
  },
  {
    id: 'paraguay',
    name: '巴拉圭',
    isoCode: 'PY',
    status: '相对开放',
    productQualification: '需注册',
    restrictions: '基本监管',
    regulatoryIntensity: '低',
    hasChangesThisSeason: true,
    seasonSummary: '新的注册制度开始实施，规范市场秩序',
    regulatoryUpdates: [
      '2024年1月：新注册制度正式实施',
      '2024年2月：发布注册申请指南',
      '2024年3月：第一批产品注册完成'
    ],
    regulatorySystem: {
      overview: '巴拉圭对特殊物质产品实行相对开放的监管政策，正在逐步建立完善的注册管理制度。由卫生部和工商部联合监管。',
      definition: '产品定义为含尼古丁的消费品，需符合基本的产品安全标准。正在制定具体的技术规范。'
    },
    accessRestrictions: {
      electronicCigarette: {
        prohibited: ['向18岁以下未成年人销售'],
        partiallyProhibited: ['尼古丁含量建议限制', '包装标识建议'],
        open: ['注册后自由销售', '线上线下均可经营']
      },
      hnb: {
        prohibited: ['向18岁以下未成年人销售'],
        partiallyProhibited: ['建议注册'],
        open: ['注册后销售']
      },
      nicotinePouch: {
        prohibited: ['向18岁以下未成年人销售'],
        partiallyProhibited: ['建议注册'],
        open: ['注册后销售']
      },
      cigarette: {
        prohibited: ['向18岁以下未成年人销售'],
        partiallyProhibited: ['包装警示标识要求'],
        open: ['正规渠道销售']
      },
      otherNovel: {
        prohibited: ['向18岁以下未成年人销售'],
        partiallyProhibited: ['需评估'],
        open: ['评估通过后销售']
      }
    },
    compliance: {
      licenseRequirements: '正在建立产品注册制度，企业需进行工商登记，产品需符合基本安全要求。',
      table: []
    },
    tax: {
      exciseTax: '目前适用一般消费品税率，增值税10%。未来可能出台专门的税收政策。',
      policies: []
    },
    marketOperation: {
      marketingRestrictions: '广告宣传相对自由，但需遵守消费者保护法，不得进行虚假宣传。需标注年龄限制。',
      displaySales: '可在各类零售渠道销售，建议设置年龄验证。正在制定具体的销售规范。',
      regulations: []
    },
    trendsWarnings: {
      trendAnalysis: '巴拉圭正处于监管体系建立阶段，未来可能逐步加强监管，但总体政策相对开放。建议抓住市场机遇，同时关注政策走向。',
      redLines: [
        '严禁向未成年人销售',
        '严禁虚假产品宣传',
        '建议进行产品注册',
        '关注政策变化'
      ]
    },
    references: {
      regulations: [],
      news: [],
      pdfs: []
    }
  }
];

// 地图高亮颜色
export const mapHighlightColor = '#f59e0b';

// 基础国家数据 - 直接使用 fallbackCountries 确保客户端和服务器端都能正常工作
export const baseCountries: CountryData[] = fallbackCountries;

export const getCountryById = (id: string): CountryData | undefined => {
  return baseCountries.find(country => country.id === id);
};

export const getCountryByIsoCode = (isoCode: string): CountryData | undefined => {
  return baseCountries.find(country => country.isoCode === isoCode);
};

// 用于初始化的默认国家数据
export const countries: CountryData[] = baseCountries;
