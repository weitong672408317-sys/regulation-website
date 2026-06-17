/**
 * 首页"各国监管速览对比"模块静态数据
 * 包含：国家监管概览数据、产品准入对比数据
 * 数据来源：各国子页面已定稿的产品准入卡片和准入速览
 */

// ===== 类型定义 =====

export type IntensityLevel = '极高' | '高' | '中' | '低至中';
export type AccessColor = 'green' | 'amber' | 'red';

export interface ProductAccessSummaryItem {
  color: AccessColor;
  status: string;
  products: string[];
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
export interface ProductStatusItem {
  level: 'allowed' | 'restricted' | 'prohibited';
  text: string;
}

export interface ProductComparisonEntry {
  countryId: string;
  countryName: string;
  targetId: string;
  statuses: ProductStatusItem[];
}

// ===== 国家监管概览数据（文字严格按提示词） =====

export const countryOverviewData: CountryOverviewEntry[] = [
  {
    countryId: 'china',
    countryName: '中国内地',
    coreFeature: '国家烟草专卖、严格许可准入、强计划管理、强渠道管控和强执法。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: ['爆珠等普通辅材（不含烟草、尼古丁或烟草提取物）'] },
      { color: 'amber', status: '可准入，但严格监管', products: ['烟草原料、传统烟草产品', '电子烟、雾化物及电子烟用烟碱', '烟草专用机械', '特殊配套材料（卷烟纸、滤嘴棒、烟用丝束）'] },
      { color: 'red', status: '未开放，实质禁止', products: ['加热烟草产品（如HNB）', '无烟气烟草制品（如尼古丁袋）', '无烟碱电子烟/变相电子烟产品'] },
    ],
    intensity: '极高',
  },
  {
    countryId: 'hongkong',
    countryName: '中国香港',
    coreFeature: '公共健康优先，传统烟草严管，新型产品实行禁止或高度限制。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: ['爆珠等普通辅材（不含烟草、尼古丁或烟草提取物）'] },
      { color: 'amber', status: '可准入，但严格限制', products: ['传统吸烟产品'] },
      { color: 'amber', status: '需按成分和功能拆分判断', products: ['烟草原料、特殊成分或特定功能辅材'] },
      { color: 'red', status: '完全禁止', products: ['另类吸烟产品', '无烟烟草产品'] },
      { color: 'red', status: '高度受限', products: ['新型尼古丁产品'] },
    ],
    intensity: '极高',
  },
  {
    countryId: 'singapore',
    countryName: '新加坡',
    coreFeature: '传统烟草产品从严管控，新型烟草及尼古丁产品明确禁入，烟草使用空间高度受限。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: ['爆珠等普通辅材（不含烟草、尼古丁或烟草提取物）'] },
      { color: 'amber', status: '可准入，但严格限制', products: ['烟草原料', '传统烟草产品'] },
      { color: 'red', status: '完全禁止', products: ['水烟烟草', '加热烟草（如HNB）及电子雾化产品', '无烟烟草产品', '新型尼古丁产品', '仿烟产品'] },
    ],
    intensity: '极高',
  },
  {
    countryId: 'indonesia',
    countryName: '印度尼西亚',
    coreFeature: '开放型烟草市场，以税收秩序和合法流通为监管主线。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: ['传统烟草产品', '加热烟草产品（如HNB）', '电子烟', '无烟烟草产品', '烟草原料', '爆珠等普通辅材（不含烟草、尼古丁或烟草提取物）'] },
      { color: 'amber', status: '部分限制/监管要求不明确', products: ['新型尼古丁产品'] },
    ],
    intensity: '低至中',
  },
  {
    countryId: 'paraguay',
    countryName: '巴拉圭',
    coreFeature: '相对开放市场，监管由控烟基础法、专项产品规则、DINAVISA登记/注册、税收及进口申报共同构成。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: ['传统烟草产品', '电子烟及雾化产品', '加热烟草产品（如HNB）', '烟草原料', '爆珠等普通辅材（不含烟草、尼古丁或烟草提取物）'] },
      { color: 'amber', status: '监管要求不明确', products: ['尼古丁袋', '其他无烟草口含型尼古丁产品'] },
      { color: 'amber', status: '需结合产品特性确认', products: ['无烟烟草产品'] },
    ],
    intensity: '低至中',
  },
  {
    countryId: 'uae',
    countryName: '阿联酋',
    coreFeature: '整体属于烟草及新型烟草产品可准入市场，实行联邦规则与地方许可相结合的监管模式。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: ['烟草原料', '传统烟草产品', '电子烟', '加热烟草产品（如HNB）', '无烟草尼古丁袋', '爆珠等普通辅材（不含烟草、尼古丁或烟草提取物）'] },
      { color: 'amber', status: '监管要求不明确', products: ['其他新型尼古丁产品'] },
      { color: 'red', status: '完全禁止', products: ['无烟烟草产品', '仿烟糖果及玩具'] },
    ],
    intensity: '中',
  },
  {
    countryId: 'russia',
    countryName: '俄罗斯',
    coreFeature: '烟草及尼古丁产品强监管市场，合规准入与生产、进口、流通、标识、税费、价格及销售监管并行。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: ['爆珠等普通辅材（不含烟草、尼古丁或烟草提取物）'] },
      { color: 'amber', status: '可准入，但严格监管', products: ['烟草及尼古丁原料', '传统烟草产品', '大部分无烟烟草产品', '加热烟草产品（如HNB）', '电子烟及液体产品'] },
      { color: 'red', status: '完全禁止', products: ['snus、nasvay', '新型尼古丁产品'] },
    ],
    intensity: '高',
  },
  {
    countryId: 'malaysia',
    countryName: '马来西亚',
    coreFeature: '实行分类监管，不同产品的准入条件和监管强度差异明显。',
    productAccessSummary: [
      { color: 'green', status: '可准入', products: ['传统烟草产品', '加热烟草产品（如HNB）', '烟草原料', '爆珠等普通辅材（不含烟草、尼古丁或烟草提取物）'] },
      { color: 'amber', status: '部分限制/准入受控', products: ['不含尼古丁电子烟、设备及替代烟草产品'] },
      { color: 'red', status: '高度受限', products: ['含尼古丁电子烟', '无烟烟草产品', '新型尼古丁产品'] },
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
  { id: 'hnb', name: 'HNB等加热烟草产品' },
  { id: 'ecig', name: '电子烟及雾化产品' },
  { id: 'smokeless-tobacco', name: '无烟烟草产品' },
  { id: 'novel-nicotine', name: '新型尼古丁产品' },
  { id: 'tobacco-raw', name: '烟草原料/半成品' },
  { id: 'ordinary-material', name: '爆珠、香精香料及辅材' },
];

// ===== 产品准入对比数据（来源于各国子页面 productAccessOverview） =====

// 按产品区分的分布条状态标签
export const productAccessLabels: Record<string, { accessible: string; restricted: string; prohibited: string }> = {
  'traditional-tobacco': { accessible: '可准入', restricted: '严格监管/严格限制', prohibited: '禁止/未开放' },
  'hnb': { accessible: '可准入', restricted: '严格监管', prohibited: '禁止/未开放' },
  'ecig': { accessible: '可准入', restricted: '严格监管、部分限制/准入受控', prohibited: '禁止/未开放/高度受限' },
  'smokeless-tobacco': { accessible: '可准入', restricted: '严格监管/需结合产品特性确认', prohibited: '禁止/未开放/高度受限' },
  'novel-nicotine': { accessible: '可准入', restricted: '严格限制/监管/监管要求不明确', prohibited: '禁止/未开放/高度受限' },
  'tobacco-raw': { accessible: '可准入', restricted: '严格监管/严格限制/需按成分和功能拆分判断', prohibited: '禁止/未开放' },
  'ordinary-material': { accessible: '可准入', restricted: '严格监管', prohibited: '禁止/未开放' },
};

export const productComparisonMap: Record<string, ProductComparisonEntry[]> = {
  'traditional-tobacco': [
    { countryId: 'china', countryName: '中国内地', targetId: 'product-tobacco-raw', statuses: [{ level: 'restricted', text: '可准入，但严格监管' }] },
    { countryId: 'hongkong', countryName: '中国香港', targetId: 'module-traditional-tobacco', statuses: [{ level: 'restricted', text: '可准入，但严格限制' }] },
    { countryId: 'singapore', countryName: '新加坡', targetId: 'product-traditional-tobacco', statuses: [{ level: 'restricted', text: '可准入，但严格限制' }] },
    { countryId: 'indonesia', countryName: '印度尼西亚', targetId: 'product-combustible-tobacco', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'paraguay', countryName: '巴拉圭', targetId: 'module-traditional-tobacco', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'uae', countryName: '阿联酋', targetId: 'product-combustible-tobacco', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'russia', countryName: '俄罗斯', targetId: 'product-traditional-tobacco', statuses: [{ level: 'restricted', text: '可准入，但严格监管' }] },
    { countryId: 'malaysia', countryName: '马来西亚', targetId: 'product-traditional-tobacco', statuses: [{ level: 'allowed', text: '可准入' }] },
  ],
  'hnb': [
    { countryId: 'china', countryName: '中国内地', targetId: 'product-heat-not-burn', statuses: [{ level: 'prohibited', text: '未开放，实质禁止' }] },
    { countryId: 'hongkong', countryName: '中国香港', targetId: 'module-alternative-smoking', statuses: [{ level: 'prohibited', text: '完全禁止' }] },
    { countryId: 'singapore', countryName: '新加坡', targetId: 'product-heat-not-burn', statuses: [{ level: 'prohibited', text: '完全禁止' }] },
    { countryId: 'indonesia', countryName: '印度尼西亚', targetId: 'product-heat-not-burn', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'paraguay', countryName: '巴拉圭', targetId: 'product-heat-not-burn', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'uae', countryName: '阿联酋', targetId: 'product-heat-not-burn', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'russia', countryName: '俄罗斯', targetId: 'product-heat-not-burn', statuses: [{ level: 'restricted', text: '可准入，但严格监管' }] },
    { countryId: 'malaysia', countryName: '马来西亚', targetId: 'product-heat-not-burn', statuses: [{ level: 'allowed', text: '可准入' }] },
  ],
  'ecig': [
    { countryId: 'china', countryName: '中国内地', targetId: 'product-ecig', statuses: [{ level: 'restricted', text: '电子烟产品、雾化物及电子烟用烟碱：可准入，但严格监管' }, { level: 'prohibited', text: '无烟碱电子烟和变相电子烟：未开放，实质禁止' }] },
    { countryId: 'hongkong', countryName: '中国香港', targetId: 'module-alternative-smoking', statuses: [{ level: 'prohibited', text: '完全禁止' }] },
    { countryId: 'singapore', countryName: '新加坡', targetId: 'product-heat-not-burn', statuses: [{ level: 'prohibited', text: '完全禁止' }] },
    { countryId: 'indonesia', countryName: '印度尼西亚', targetId: 'product-ecig', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'paraguay', countryName: '巴拉圭', targetId: 'module-ecig', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'uae', countryName: '阿联酋', targetId: 'product-ecig', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'russia', countryName: '俄罗斯', targetId: 'module-ecig', statuses: [{ level: 'restricted', text: '可准入，但严格监管' }] },
    { countryId: 'malaysia', countryName: '马来西亚', targetId: 'product-nicotine-free-ecig', statuses: [{ level: 'restricted', text: '不含尼古丁电子烟及设备：部分限制/准入受控' }, { level: 'prohibited', text: '含尼古丁电子烟：高度受限' }] },
  ],
  'smokeless-tobacco': [
    { countryId: 'china', countryName: '中国内地', targetId: 'product-smokeless-tobacco', statuses: [{ level: 'prohibited', text: '未开放，实质禁止' }] },
    { countryId: 'hongkong', countryName: '中国香港', targetId: 'module-smokeless-tobacco', statuses: [{ level: 'prohibited', text: '完全禁止' }] },
    { countryId: 'singapore', countryName: '新加坡', targetId: 'product-smokeless-tobacco', statuses: [{ level: 'prohibited', text: '完全禁止' }] },
    { countryId: 'indonesia', countryName: '印度尼西亚', targetId: 'product-smokeless-tobacco', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'paraguay', countryName: '巴拉圭', targetId: 'product-smokeless-tobacco', statuses: [{ level: 'restricted', text: '需结合产品特性确认' }] },
    { countryId: 'uae', countryName: '阿联酋', targetId: 'product-smokeless-tobacco', statuses: [{ level: 'prohibited', text: '完全禁止' }] },
    { countryId: 'russia', countryName: '俄罗斯', targetId: 'product-non-smoking-tobacco', statuses: [{ level: 'prohibited', text: 'snus、nasvay：完全禁止' }, { level: 'restricted', text: 'snus、nasvay以外的无烟烟草产品：可准入，但严格监管' }] },
    { countryId: 'malaysia', countryName: '马来西亚', targetId: 'product-smokeless-tobacco', statuses: [{ level: 'prohibited', text: '高度受限' }] },
  ],
  'novel-nicotine': [
    { countryId: 'china', countryName: '中国内地', targetId: 'product-smokeless-tobacco', statuses: [{ level: 'prohibited', text: '未开放，实质禁止' }] },
    { countryId: 'hongkong', countryName: '中国香港', targetId: 'module-novel-nicotine', statuses: [{ level: 'prohibited', text: '高度受限' }] },
    { countryId: 'singapore', countryName: '新加坡', targetId: 'product-novel-nicotine', statuses: [{ level: 'prohibited', text: '完全禁止' }] },
    { countryId: 'indonesia', countryName: '印度尼西亚', targetId: 'product-novel-nicotine', statuses: [{ level: 'restricted', text: '部分限制/监管要求不明确' }] },
    { countryId: 'paraguay', countryName: '巴拉圭', targetId: 'product-nicotine-pouch', statuses: [{ level: 'restricted', text: '监管要求不明确' }] },
    { countryId: 'uae', countryName: '阿联酋', targetId: 'product-nicotine-pouch', statuses: [{ level: 'allowed', text: '无烟草尼古丁袋：可准入' }, { level: 'restricted', text: '其他新型尼古丁产品：监管要求不明确' }] },
    { countryId: 'russia', countryName: '俄罗斯', targetId: 'product-novel-nicotine', statuses: [{ level: 'prohibited', text: '完全禁止' }] },
    { countryId: 'malaysia', countryName: '马来西亚', targetId: 'product-novel-nicotine', statuses: [{ level: 'prohibited', text: '高度受限' }] },
  ],
  'tobacco-raw': [
    { countryId: 'china', countryName: '中国内地', targetId: 'product-tobacco-raw', statuses: [{ level: 'restricted', text: '可准入，但严格监管' }] },
    { countryId: 'hongkong', countryName: '中国香港', targetId: 'module-tobacco-material', statuses: [{ level: 'restricted', text: '需按成分和功能拆分判断' }] },
    { countryId: 'singapore', countryName: '新加坡', targetId: 'product-tobacco-material', statuses: [{ level: 'restricted', text: '可准入，但严格限制' }] },
    { countryId: 'indonesia', countryName: '印度尼西亚', targetId: 'product-tobacco-raw', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'paraguay', countryName: '巴拉圭', targetId: 'module-tobacco-raw', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'uae', countryName: '阿联酋', targetId: 'product-tobacco-material', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'russia', countryName: '俄罗斯', targetId: 'module-tobacco-raw', statuses: [{ level: 'restricted', text: '可准入，但严格监管' }] },
    { countryId: 'malaysia', countryName: '马来西亚', targetId: 'product-tobacco-raw', statuses: [{ level: 'allowed', text: '可准入' }] },
  ],
  'ordinary-material': [
    { countryId: 'china', countryName: '中国内地', targetId: 'product-ordinary-bead', statuses: [{ level: 'restricted', text: '卷烟纸、滤嘴棒、烟用丝束：可准入，但严格监管' }, { level: 'allowed', text: '普通爆珠、香精香料及其他普通辅材：可准入' }] },
    { countryId: 'hongkong', countryName: '中国香港', targetId: 'module-ordinary-material', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'singapore', countryName: '新加坡', targetId: 'module-ordinary-material', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'indonesia', countryName: '印度尼西亚', targetId: 'product-ordinary-material', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'paraguay', countryName: '巴拉圭', targetId: 'module-ordinary-material', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'uae', countryName: '阿联酋', targetId: 'product-ordinary-material', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'russia', countryName: '俄罗斯', targetId: 'module-ordinary-material', statuses: [{ level: 'allowed', text: '可准入' }] },
    { countryId: 'malaysia', countryName: '马来西亚', targetId: 'product-ordinary-material', statuses: [{ level: 'allowed', text: '可准入' }] },
  ],
};
