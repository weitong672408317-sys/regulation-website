import { supabase } from '../src/lib/supabase';

export interface ProductCategoryRestrictions {
  prohibited: string[];
  partiallyProhibited: string[];
  open: string[];
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
  accessRestrictions: {
    electronicCigarette: ProductCategoryRestrictions;
    hnb: ProductCategoryRestrictions;
    nicotinePouch: ProductCategoryRestrictions;
    cigarette: ProductCategoryRestrictions;
    otherNovel: ProductCategoryRestrictions;
  };
  compliance: {
    licenseRequirements: string;
  };
  tax: {
    exciseTax: string;
  };
  marketOperation: {
    marketingRestrictions: string;
    displaySales: string;
  };
  trendsWarnings: {
    trendAnalysis: string;
    redLines: string[];
  };
  references: {
    regulations: { title: string; url: string }[];
    news: { title: string; url: string }[];
    pdfs: string[];
  };
}

// 基础国家数据
export const baseCountries: CountryData[] = [
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
      licenseRequirements: '生产企业需获得国家烟草专卖局颁发的生产许可证；销售企业需获得相应的销售许可证。产品需通过强制性产品认证。'
    },
    tax: {
      exciseTax: '适用高额消费税，税率根据产品类型和尼古丁含量确定。增值税13%，消费税从价计征。'
    },
    marketOperation: {
      marketingRestrictions: '全面禁止各类形式的广告宣传，包括但不限于互联网、电视、报纸、户外广告等。不得进行任何形式的促销活动。',
      displaySales: '仅可在获得许可的实体店铺销售，需设置明显的未成年人禁售标识。产品陈列需符合相关规定，不得诱导消费。'
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
      regulations: [
        { title: '中华人民共和国烟草专卖法', url: '#' },
        { title: '特殊物质产品管理办法', url: '#' },
        { title: '产品安全国家标准', url: '#' }
      ],
      news: [
        { title: '国家烟草专卖局发布2024年监管重点', url: '#' },
        { title: '市场监管总局开展专项整治行动', url: '#' }
      ],
      pdfs: ['合规指南手册', '产品申报流程', '监管政策解读']
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
      overview: '香港对特殊物质产品实施严格的监管制度，由卫生署统一管理。产品需通过严格的安全评估和质量检测方可上市销售。',
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
      licenseRequirements: '生产企业需获得香港卫生署颁发的生产许可证；销售企业需获得相应的销售许可证。产品需通过强制性产品认证。'
    },
    tax: {
      exciseTax: '适用高额消费税，税率根据产品类型和尼古丁含量确定。'
    },
    marketOperation: {
      marketingRestrictions: '全面禁止各类形式的广告宣传，包括但不限于互联网、电视、报纸、户外广告等。不得进行任何形式的促销活动。',
      displaySales: '仅可在获得许可的实体店铺销售，需设置明显的未成年人禁售标识。产品陈列需符合相关规定，不得诱导消费。'
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
      regulations: [
        { title: '香港烟草控制条例', url: '#' },
        { title: '特殊物质产品管理办法', url: '#' },
        { title: '产品安全标准', url: '#' }
      ],
      news: [
        { title: '香港卫生署发布2024年监管重点', url: '#' },
        { title: '开展专项整治行动', url: '#' }
      ],
      pdfs: ['合规指南手册', '产品申报流程', '监管政策解读']
    }
  },

  {
    id: 'indonesia',
    name: '印尼',
    isoCode: 'ID',
    status: '逐步规范',
    productQualification: '需注册',
    restrictions: '成分限制，包装要求',
    regulatoryIntensity: '中',
    hasChangesThisSeason: false,
    seasonSummary: '监管框架保持稳定，暂无重大政策调整',
    regulatoryUpdates: [
      '2023年12月：产品注册流程优化通知',
      '2024年1月：更新产品成分检测标准'
    ],
    regulatorySystem: {
      overview: '印度尼西亚对特殊物质产品实行注册制管理，由卫生部和贸易部联合监管。产品需在上市前完成注册并获得许可。',
      definition: '产品定义包括含尼古丁的电子雾化产品、加热烟草制品等。尼古丁含量需符合国家标准，禁止添加有害成分。'
    },
    accessRestrictions: {
      electronicCigarette: {
        prohibited: ['向18岁以下未成年人销售', '在学校周边销售'],
        partiallyProhibited: ['尼古丁含量限制', '特定成分禁止', '包装警示标识要求'],
        open: ['注册后线上线下销售', '成人专用店铺经营']
      },
      hnb: {
        prohibited: ['向18岁以下未成年人销售'],
        partiallyProhibited: ['尼古丁含量限制'],
        open: ['注册后销售']
      },
      nicotinePouch: {
        prohibited: [],
        partiallyProhibited: ['需注册'],
        open: ['注册后销售']
      },
      cigarette: {
        prohibited: ['向18岁以下未成年人销售', '公共场所使用'],
        partiallyProhibited: ['包装警示标识要求'],
        open: ['正规渠道销售']
      },
      otherNovel: {
        prohibited: [],
        partiallyProhibited: ['需评估'],
        open: ['评估通过后销售']
      }
    },
    compliance: {
      licenseRequirements: '需向卫生部申请产品注册，提交产品成分检测报告、安全评估资料等。获得注册证书后方可生产销售。'
    },
    tax: {
      exciseTax: '征收烟草产品消费税，税率按产品类别和尼古丁含量分级征收。增值税11%。'
    },
    marketOperation: {
      marketingRestrictions: '广告需获得审批，禁止使用儿童形象，禁止在儿童媒体上发布。需明确标注健康警示。',
      displaySales: '可在合规渠道销售，需设置年龄验证机制。产品包装需有明显的健康警示标识，标识面积不小于包装的50%。'
    },
    trendsWarnings: {
      trendAnalysis: '监管政策趋向完善，未来可能加强产品成分监管和税收征管。建议提前做好产品合规准备。',
      redLines: [
        '严禁销售未注册产品',
        '严禁超标准添加尼古丁',
        '严禁向未成年人销售',
        '严禁虚假广告宣传',
        '严禁逃避税收征管'
      ]
    },
    references: {
      regulations: [
        { title: '印度尼西亚卫生部第XX号条例', url: '#' },
        { title: '产品注册管理规定', url: '#' },
        { title: '包装标识标准', url: '#' }
      ],
      news: [
        { title: '印尼卫生部加强产品监管', url: '#' },
        { title: '税务总局发布消费税征管细则', url: '#' }
      ],
      pdfs: ['注册申请指南', '产品检测要求', '税务申报手册']
    }
  },
  {
    id: 'uae',
    name: '阿联酋',
    isoCode: 'AE',
    status: '许可制',
    productQualification: '需许可',
    restrictions: '仅特定区域销售',
    regulatoryIntensity: '中',
    hasChangesThisSeason: true,
    seasonSummary: '迪拜自由区推出新的许可政策，简化申请流程',
    regulatoryUpdates: [
      '2024年1月：迪拜自由区新许可政策实施',
      '2024年2月：FDA简化申请流程通知',
      '2024年3月：更新产品检测标准'
    ],
    regulatorySystem: {
      overview: '阿联酋对特殊物质产品实行严格的许可管理制度，由联邦药品和医疗器械管理局（FDA）监管。产品需获得注册许可方可在境内销售。',
      definition: '产品涵盖含尼古丁的电子雾化产品等。需符合阿联酋食品安全和化学品管理标准。'
    },
    accessRestrictions: {
      electronicCigarette: {
        prohibited: ['向21岁以下人员销售', '在公共场所使用', '未经许可进口'],
        partiallyProhibited: ['尼古丁含量限制', '指定区域销售', '包装要求'],
        open: ['获得许可后在指定区域销售', '迪拜自由区企业经营']
      },
      hnb: {
        prohibited: ['向21岁以下人员销售', '未经许可进口'],
        partiallyProhibited: ['指定区域销售'],
        open: ['获得许可后销售']
      },
      nicotinePouch: {
        prohibited: ['进口', '销售'],
        partiallyProhibited: [],
        open: []
      },
      cigarette: {
        prohibited: ['向21岁以下人员销售', '公共场所使用'],
        partiallyProhibited: ['指定区域销售', '包装警示标识要求'],
        open: ['许可渠道销售']
      },
      otherNovel: {
        prohibited: ['未经许可进口'],
        partiallyProhibited: ['需特别审批'],
        open: []
      }
    },
    compliance: {
      licenseRequirements: '需向阿联酋FDA申请产品注册和销售许可，提交完整的产品技术文档、检测报告和安全评估资料。迪拜自由区有专门的许可通道。'
    },
    tax: {
      exciseTax: '征收50%的消费税，增值税5%。进口产品需缴纳关税和相关税费。'
    },
    marketOperation: {
      marketingRestrictions: '禁止面向公众的广告宣传，仅可在成人专用场所进行产品展示。禁止任何形式的促销活动。',
      displaySales: '仅可在获得许可的成人专用店铺销售，需严格执行年龄验证。迪拜自由区可设立专门的销售中心。'
    },
    trendsWarnings: {
      trendAnalysis: '阿联酋正逐步完善监管框架，迪拜自由区政策相对灵活。未来可能扩大许可范围，但监管标准不会降低。',
      redLines: [
        '严禁未经许可进口销售',
        '严禁向21岁以下人员销售',
        '严禁虚假产品声称',
        '严禁逃避消费税',
        '严禁违反包装标识规定'
      ]
    },
    references: {
      regulations: [
        { title: '阿联酋FDA产品管理规定', url: '#' },
        { title: '迪拜自由区许可政策', url: '#' },
        { title: '消费税法实施细则', url: '#' }
      ],
      news: [
        { title: '阿联酋FDA简化许可流程', url: '#' },
        { title: '迪拜自由区推出企业优惠政策', url: '#' }
      ],
      pdfs: ['FDA注册指南', '迪拜自由区投资手册', '税务合规指南']
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
      licenseRequirements: '需获得烟草制品生产和销售许可证，产品需通过强制性认证。进口产品需符合海关和技术监管要求。'
    },
    tax: {
      exciseTax: '适用烟草制品消费税，税率较高。增值税20%。需严格履行纳税申报义务。'
    },
    marketOperation: {
      marketingRestrictions: '几乎全面禁止广告宣传，仅可在销售点内部进行有限的产品展示。禁止任何形式的促销活动。',
      displaySales: '仅可在获得许可的烟草专卖店销售，需严格执行年龄验证制度。产品包装需有大幅健康警示图片和文字。'
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
      regulations: [
        { title: '俄罗斯联邦烟草制品管理法', url: '#' },
        { title: '技术法规要求', url: '#' },
        { title: '消费者权益保护法', url: '#' }
      ],
      news: [
        { title: '俄联邦加强市场监管', url: '#' },
        { title: '烟草税调整政策解读', url: '#' }
      ],
      pdfs: ['合规经营手册', '产品认证指南', '税务申报流程']
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
      licenseRequirements: '无任何许可途径，全面禁止。'
    },
    tax: {
      exciseTax: '不适用，产品全面禁止。'
    },
    marketOperation: {
      marketingRestrictions: '全面禁止任何形式的广告、推广和销售活动。',
      displaySales: '全面禁止，任何销售行为均属违法。'
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
      regulations: [
        { title: '新加坡烟草（广告和销售控制）法', url: '#' },
        { title: '卫生科学局公告', url: '#' },
        { title: '海关禁运清单', url: '#' }
      ],
      news: [
        { title: '新加坡加大执法力度', url: '#' },
        { title: 'HSA发布最新禁令', url: '#' }
      ],
      pdfs: ['禁令解读手册', '执法案例汇编']
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
      licenseRequirements: '无商业许可途径。'
    },
    tax: {
      exciseTax: '不适用。'
    },
    marketOperation: {
      marketingRestrictions: '全面禁止商业广告和推广。',
      displaySales: '禁止商业销售。'
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
      regulations: [
        { title: '马来西亚烟草控制法', url: '#' },
        { title: '卫生部禁令', url: '#' }
      ],
      news: [
        { title: '马来西亚加强边境检查', url: '#' }
      ],
      pdfs: ['政策解读']
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
      licenseRequirements: '正在建立产品注册制度，企业需进行工商登记，产品需符合基本安全要求。'
    },
    tax: {
      exciseTax: '目前适用一般消费品税率，增值税10%。未来可能出台专门的税收政策。'
    },
    marketOperation: {
      marketingRestrictions: '广告宣传相对自由，但需遵守消费者保护法，不得进行虚假宣传。需标注年龄限制。',
      displaySales: '可在各类零售渠道销售，建议设置年龄验证。正在制定具体的销售规范。'
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
      regulations: [
        { title: '巴拉圭消费者保护法', url: '#' },
        { title: '产品安全指南', url: '#' },
        { title: '工商登记管理规定', url: '#' }
      ],
      news: [
        { title: '巴拉圭出台新监管框架', url: '#' },
        { title: '市场开放政策解读', url: '#' }
      ],
      pdfs: ['市场准入指南', '工商注册流程', '投资机会分析']
    }
  }
];


export const mapHighlightColor = '#f59e0b';

export const getCountryById = (id: string): CountryData | undefined => {
  return countries.find(country => country.id === id);
};

export const getCountryByIsoCode = (isoCode: string): CountryData | undefined => {
  return countries.find(country => country.isoCode === isoCode);
};

// 从 Supabase 读取数据的函数
export const fetchCountries = async (): Promise<CountryData[]> => {
  try {
    const { data, error } = await supabase
      .from('countries')
      .select('*');
    
    if (error) {
      console.error('Error fetching countries:', error);
      return baseCountries;
    }
    
    // 如果 Supabase 中有数据，使用它；否则使用基础数据
    if (data && data.length > 0) {
      return data as CountryData[];
    } else {
      return baseCountries;
    }
  } catch (error) {
    console.error('Error fetching countries:', error);
    return baseCountries;
  }
};

// 用于初始化的默认国家数据
export const countries: CountryData[] = baseCountries;
