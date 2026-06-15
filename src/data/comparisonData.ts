/**
 * 首页"各国监管速览对比"模块静态数据
 * 包含：国家监管概览数据、产品准入对比数据
 * 数据来源：各国子页面已定稿的产品准入卡片和准入速览
 */

// ===== 类型定义 =====

export type IntensityLevel = '极高' | '高' | '中' | '低至中';
export type AccessColor = 'green' | 'amber' | 'red';
export type ProductStatusType = 'green' | 'amber' | 'red' | 'mixed';

export interface ProductAccessSummaryItem {
  color: AccessColor;
  status: string;
  products: string;
}

export interface CountryOverviewEntry {
  countryId: string;
  countryName: string;
  coreFeature: string;
  productAccessSummary: ProductAccessSummaryItem[];
  intensity: IntensityLevel;
}

export interface IntensitySegment {
  label: IntensityLevel;
  count: number;
  countries: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
}

// 支持多条准入状态（用于显示细分差异）
export interface ProductComparisonEntry {
  countryId: string;
  countryName: string;
  status: string;
  statusType: ProductStatusType;
  targetId: string;
  note?: string;
  // 多条准入状态（用于显示细分差异）
  subStatuses?: { color: AccessColor; status: string; product: string }[];
}

// ===== 国家监管概览数据（文字严格按提示词） =====

export const countryOverviewData: CountryOverviewEntry[] = [
  {
    countryId: 'china',
    countryName: '中国内地',
    coreFeature: '国家烟草专卖、严格许可准入、强计划管理、强渠道管控和强执法。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: '普通辅材' },
      { color: 'amber', status: '可准入，但严格监管', products: '烟草原料及制品、电子烟、雾化物及电子烟用烟碱、烟草专用机械、特殊配套材料（卷烟纸、滤嘴棒、烟用丝束）' },
      { color: 'red', status: '未开放，实质禁止', products: '加热烟草产品（如HNB）、无烟气烟草制品（如尼古丁袋）、无烟碱电子烟/变相电子烟产品' },
    ],
    intensity: '极高',
  },
  {
    countryId: 'hongkong',
    countryName: '中国香港',
    coreFeature: '公共健康优先，传统烟草严管，新型产品实行禁止或高度限制。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: '普通辅材' },
      { color: 'amber', status: '可准入，但严格限制', products: '传统吸烟产品' },
      { color: 'amber', status: '需按成分和功能拆分判断', products: '烟草材料、特殊成分或特定功能辅材' },
      { color: 'red', status: '完全禁止', products: '另类吸烟产品、无烟烟草产品' },
      { color: 'red', status: '高度受限', products: '新型尼古丁产品' },
    ],
    intensity: '极高',
  },
  {
    countryId: 'singapore',
    countryName: '新加坡',
    coreFeature: '传统烟草产品从严管控，新型烟草及尼古丁产品明确禁入，烟草使用空间高度受限。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: '普通辅材' },
      { color: 'amber', status: '可准入，但严格限制', products: '传统烟草成品' },
      { color: 'amber', status: '需分类确认', products: '烟草材料/原料' },
      { color: 'red', status: '完全禁止', products: '水烟烟草、HNB及电子雾化产品、无烟烟草产品、新型尼古丁产品、仿烟产品' },
    ],
    intensity: '极高',
  },
  {
    countryId: 'indonesia',
    countryName: '印度尼西亚',
    coreFeature: '开放型烟草市场，以税收秩序和合法流通为监管主线。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: '传统烟草、HNB、电子烟、无烟烟草、烟草原料、普通辅材' },
      { color: 'amber', status: '部分限制/监管要求不明确', products: '新型尼古丁产品' },
    ],
    intensity: '低至中',
  },
  {
    countryId: 'paraguay',
    countryName: '巴拉圭',
    coreFeature: '相对开放市场，监管由控烟基础法、专项产品规则、DINAVISA登记/注册、税收及进口申报共同构成。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: '传统烟草、电子烟及雾化产品、HNB、烟草原料、普通辅材' },
      { color: 'amber', status: '监管要求不明确', products: '尼古丁袋、其他无烟草口含型尼古丁产品' },
      { color: 'amber', status: '需结合产品特性确认', products: '无烟烟草产品、含尼古丁或烟草成分辅材' },
    ],
    intensity: '低至中',
  },
  {
    countryId: 'uae',
    countryName: '阿联酋',
    coreFeature: '整体属于烟草及新型烟草产品可准入市场，实行联邦规则与地方许可相结合的监管模式。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: '烟草材料、燃烧类烟草、电子烟、HNB、无烟草尼古丁袋、普通辅材' },
      { color: 'amber', status: '监管要求不明确', products: '其他新型尼古丁产品' },
      { color: 'amber', status: '需结合产品特性确认', products: '含尼古丁或烟草成分辅材' },
      { color: 'red', status: '完全禁止', products: '无烟烟草产品、仿烟糖果及玩具' },
    ],
    intensity: '中',
  },
  {
    countryId: 'russia',
    countryName: '俄罗斯',
    coreFeature: '烟草及尼古丁产品强监管市场，合规准入与生产、进口、流通、标识、税费、价格及销售监管并行。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: '烟草及尼古丁原料、普通辅材' },
      { color: 'amber', status: '可准入，强监管', products: '传统烟草、大部分无烟烟草产品' },
      { color: 'amber', status: '可准入，监管收紧', products: 'HNB、电子烟及液体产品' },
      { color: 'red', status: '完全禁止', products: '特定无烟烟草产品、新型尼古丁产品' },
    ],
    intensity: '高',
  },
  {
    countryId: 'malaysia',
    countryName: '马来西亚',
    coreFeature: '实行分类监管，不同产品的准入条件和监管强度差异明显。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: '传统烟草、HNB、烟草原料、普通辅材' },
      { color: 'amber', status: '部分限制/准入受控', products: '不含尼古丁电子烟及设备' },
      { color: 'red', status: '高度受限', products: '含尼古丁电子烟、无烟烟草产品、新型尼古丁产品' },
    ],
    intensity: '高',
  },
];

// ===== 监管强度分布数据 =====

export const intensityDistribution: IntensitySegment[] = [
  { label: '极高', count: 3, countries: ['中国内地', '中国香港', '新加坡'] },
  { label: '高', count: 2, countries: ['俄罗斯', '马来西亚'] },
  { label: '中', count: 1, countries: ['阿联酋'] },
  { label: '低至中', count: 2, countries: ['印度尼西亚', '巴拉圭'] },
];

// ===== 产品分类（7个一级分类，不拆二级） =====

export const productCategories: ProductCategory[] = [
  { id: 'traditional-tobacco', name: '传统烟草产品' },
  { id: 'hnb', name: 'HNB及加热烟草产品' },
  { id: 'ecig', name: '电子烟及雾化产品' },
  { id: 'smokeless-tobacco', name: '无烟烟草产品' },
  { id: 'novel-nicotine', name: '新型尼古丁产品' },
  { id: 'tobacco-raw', name: '烟草原料/半成品' },
  { id: 'ordinary-material', name: '爆珠、香精香料及辅材' },
];

// ===== 产品准入对比数据（来源于各国子页面 productAccessOverview） =====

export const productComparisonMap: Record<string, ProductComparisonEntry[]> = {
  'traditional-tobacco': [
    { countryId: 'china', countryName: '中国内地', status: '可准入，但严格监管', statusType: 'amber', targetId: 'product-tobacco-raw' },
    { countryId: 'hongkong', countryName: '中国香港', status: '可准入，但严格限制', statusType: 'amber', targetId: 'module-traditional-tobacco' },
    { countryId: 'singapore', countryName: '新加坡', status: '可准入，但严格限制', statusType: 'amber', targetId: 'product-traditional-tobacco' },
    { countryId: 'indonesia', countryName: '印度尼西亚', status: '可准入', statusType: 'green', targetId: 'product-combustible-tobacco' },
    { countryId: 'paraguay', countryName: '巴拉圭', status: '可准入', statusType: 'green', targetId: 'module-traditional-tobacco' },
    { countryId: 'uae', countryName: '阿联酋', status: '可准入', statusType: 'green', targetId: 'product-combustible-tobacco' },
    { countryId: 'russia', countryName: '俄罗斯', status: '可准入，强监管', statusType: 'amber', targetId: 'product-traditional-tobacco' },
    { countryId: 'malaysia', countryName: '马来西亚', status: '可准入', statusType: 'green', targetId: 'product-traditional-tobacco' },
  ],
  'hnb': [
    { countryId: 'china', countryName: '中国内地', status: '未开放，实质禁止', statusType: 'red', targetId: 'product-heat-not-burn' },
    { countryId: 'hongkong', countryName: '中国香港', status: '完全禁止', statusType: 'red', targetId: 'module-alternative-smoking' },
    { countryId: 'singapore', countryName: '新加坡', status: '完全禁止', statusType: 'red', targetId: 'product-heat-not-burn' },
    { countryId: 'indonesia', countryName: '印度尼西亚', status: '可准入', statusType: 'green', targetId: 'product-heat-not-burn' },
    { countryId: 'paraguay', countryName: '巴拉圭', status: '可准入', statusType: 'green', targetId: 'product-heat-not-burn' },
    { countryId: 'uae', countryName: '阿联酋', status: '可准入', statusType: 'green', targetId: 'product-heat-not-burn' },
    { countryId: 'russia', countryName: '俄罗斯', status: '可准入，监管收紧', statusType: 'amber', targetId: 'product-heat-not-burn' },
    { countryId: 'malaysia', countryName: '马来西亚', status: '可准入', statusType: 'green', targetId: 'product-heat-not-burn' },
  ],
  'ecig': [
    { countryId: 'china', countryName: '中国内地', status: '分项适用', statusType: 'mixed', targetId: 'product-ecig', note: '电子烟产品、雾化物及电子烟用烟碱：可准入，但严格监管；无烟碱电子烟和变相电子烟：未开放，实质禁止。' },
    { countryId: 'hongkong', countryName: '中国香港', status: '完全禁止', statusType: 'red', targetId: 'module-alternative-smoking' },
    { countryId: 'singapore', countryName: '新加坡', status: '完全禁止', statusType: 'red', targetId: 'product-heat-not-burn' },
    { countryId: 'indonesia', countryName: '印度尼西亚', status: '可准入', statusType: 'green', targetId: 'product-ecig' },
    { countryId: 'paraguay', countryName: '巴拉圭', status: '可准入', statusType: 'green', targetId: 'module-ecig' },
    { countryId: 'uae', countryName: '阿联酋', status: '可准入', statusType: 'green', targetId: 'product-ecig' },
    { countryId: 'russia', countryName: '俄罗斯', status: '可准入，监管收紧', statusType: 'amber', targetId: 'module-ecig' },
    { countryId: 'malaysia', countryName: '马来西亚', status: '分项适用', statusType: 'mixed', targetId: 'product-nicotine-free-ecig', note: '不含尼古丁电子烟及设备：部分限制/准入受控；含尼古丁电子烟：高度受限。' },
  ],
  'smokeless-tobacco': [
    { countryId: 'china', countryName: '中国内地', status: '未开放，实质禁止', statusType: 'red', targetId: 'product-smokeless-tobacco' },
    { countryId: 'hongkong', countryName: '中国香港', status: '完全禁止', statusType: 'red', targetId: 'module-smokeless-tobacco' },
    { countryId: 'singapore', countryName: '新加坡', status: '完全禁止', statusType: 'red', targetId: 'product-smokeless-tobacco' },
    { countryId: 'indonesia', countryName: '印度尼西亚', status: '可准入', statusType: 'green', targetId: 'product-smokeless-tobacco' },
    { countryId: 'paraguay', countryName: '巴拉圭', status: '需结合产品特性确认', statusType: 'amber', targetId: 'product-smokeless-tobacco' },
    { countryId: 'uae', countryName: '阿联酋', status: '完全禁止', statusType: 'red', targetId: 'product-smokeless-tobacco' },
    { countryId: 'russia', countryName: '俄罗斯', status: '分项适用', statusType: 'mixed', targetId: 'product-non-smoking-tobacco', note: '大部分无烟烟草产品：可准入，强监管；snus、nasvay及其他明确禁售产品：完全禁止。' },
    { countryId: 'malaysia', countryName: '马来西亚', status: '高度受限', statusType: 'red', targetId: 'product-smokeless-tobacco' },
  ],
  'novel-nicotine': [
    { countryId: 'china', countryName: '中国内地', status: '未开放，实质禁止', statusType: 'red', targetId: 'product-smokeless-tobacco' },
    { countryId: 'hongkong', countryName: '中国香港', status: '高度受限', statusType: 'red', targetId: 'module-novel-nicotine' },
    { countryId: 'singapore', countryName: '新加坡', status: '完全禁止', statusType: 'red', targetId: 'product-novel-nicotine' },
    { countryId: 'indonesia', countryName: '印度尼西亚', status: '部分限制/监管要求不明确', statusType: 'amber', targetId: 'product-novel-nicotine' },
    { countryId: 'paraguay', countryName: '巴拉圭', status: '监管要求不明确', statusType: 'amber', targetId: 'product-nicotine-pouch' },
    { countryId: 'uae', countryName: '阿联酋', status: '分项适用', statusType: 'mixed', targetId: 'product-nicotine-pouch', note: '无烟草尼古丁袋：可准入；其他新型尼古丁产品：监管要求不明确。' },
    { countryId: 'russia', countryName: '俄罗斯', status: '完全禁止', statusType: 'red', targetId: 'product-novel-nicotine' },
    { countryId: 'malaysia', countryName: '马来西亚', status: '高度受限', statusType: 'red', targetId: 'product-novel-nicotine' },
  ],
  'tobacco-raw': [
    { countryId: 'china', countryName: '中国内地', status: '可准入，但严格监管', statusType: 'amber', targetId: 'product-tobacco-raw' },
    { countryId: 'hongkong', countryName: '中国香港', status: '需按成分和功能拆分判断', statusType: 'amber', targetId: 'module-tobacco-material' },
    { countryId: 'singapore', countryName: '新加坡', status: '可准入，但严格限制', statusType: 'amber', targetId: 'product-tobacco-material' },
    { countryId: 'indonesia', countryName: '印度尼西亚', status: '可准入', statusType: 'green', targetId: 'product-tobacco-raw' },
    { countryId: 'paraguay', countryName: '巴拉圭', status: '可准入', statusType: 'green', targetId: 'module-tobacco-raw' },
    { countryId: 'uae', countryName: '阿联酋', status: '可准入', statusType: 'green', targetId: 'product-tobacco-material' },
    { countryId: 'russia', countryName: '俄罗斯', status: '可准入', statusType: 'green', targetId: 'module-tobacco-raw' },
    { countryId: 'malaysia', countryName: '马来西亚', status: '可准入', statusType: 'green', targetId: 'product-tobacco-raw' },
  ],
  'ordinary-material': [
    { 
      countryId: 'china', 
      countryName: '中国内地', 
      status: '部分限制/监管要求不明确', 
      statusType: 'mixed', 
      targetId: 'product-ordinary-bead',
      subStatuses: [
        { color: 'green', status: '可准入', product: '普通爆珠、香精香料及辅材' },
        { color: 'amber', status: '可准入，但严格监管', product: '特殊配套材料' },
      ]
    },
    { countryId: 'hongkong', countryName: '中国香港', status: '可准入', statusType: 'green', targetId: 'module-ordinary-material' },
    { countryId: 'singapore', countryName: '新加坡', status: '可准入', statusType: 'green', targetId: 'module-ordinary-material' },
    { countryId: 'indonesia', countryName: '印度尼西亚', status: '可准入', statusType: 'green', targetId: 'product-ordinary-material' },
    { countryId: 'paraguay', countryName: '巴拉圭', status: '可准入', statusType: 'green', targetId: 'module-ordinary-material' },
    { countryId: 'uae', countryName: '阿联酋', status: '可准入', statusType: 'green', targetId: 'product-ordinary-material' },
    { countryId: 'russia', countryName: '俄罗斯', status: '可准入', statusType: 'green', targetId: 'module-ordinary-material' },
    { countryId: 'malaysia', countryName: '马来西亚', status: '可准入', statusType: 'green', targetId: 'product-ordinary-material' },
  ],
};
