/**
 * 产品准入速览数据结构
 * 可复用于：国家详情页"产品准入速览"模块、首页"按产品看"准入对比表
 */

export type AccessStatusType = 'green' | 'amber' | 'red';

export interface ProductAccessEntry {
  /** 产品名称（显示文字） */
  productName: string;
  /** 跳转锚点 id，对应产品监管口径中的子卡片 id */
  targetId: string;
}

export interface ProductAccessGroup {
  /** 准入状态标签文字 */
  status: string;
  /** 准入状态类型，用于颜色渲染 */
  statusType: AccessStatusType;
  /** 该状态下的产品列表 */
  products: ProductAccessEntry[];
}

export interface ProductAccessOverviewData {
  /** 国家 id */
  country: string;
  /** 模块备注 */
  note?: string;
  /** 准入分组 */
  groups: ProductAccessGroup[];
}

const note = '以下为主要产品准入状态速览。点击产品名称，可跳转至对应的产品监管口径详细说明。';

/** 中国内地产品准入速览数据 */
export const chinaProductAccessOverview: ProductAccessOverviewData = {
  country: 'china',
  note,
  groups: [
    {
      status: '可准入',
      statusType: 'green',
      products: [
        { productName: '普通爆珠 / 香精胶囊', targetId: 'product-ordinary-bead' },
      ],
    },
    {
      status: '可准入，但严格监管',
      statusType: 'amber',
      products: [
        { productName: '烟草原料及制品：卷烟、雪茄烟、烟丝、复烤烟叶、烟叶、烟草薄片', targetId: 'product-tobacco-raw' },
        { productName: '特殊配套材料：卷烟纸、滤嘴棒、烟用丝束', targetId: 'product-special-material' },
        { productName: '电子烟产品：烟具、烟弹、烟弹与烟具组合销售产品', targetId: 'product-ecig' },
        { productName: '雾化物及电子烟用烟碱', targetId: 'product-e-liquid' },
        { productName: '烟草专用机械', targetId: 'module-machinery' },
      ],
    },
    {
      status: '未开放，实质禁止',
      statusType: 'red',
      products: [
        { productName: '无烟碱电子烟 / 变相电子烟产品', targetId: 'product-nicotine-free-ecig' },
        { productName: '加热烟草产品：加热卷烟、HNB烟支、加热烟草棒', targetId: 'product-heat-not-burn' },
        { productName: '无烟气烟草制品：尼古丁袋、尼古丁片、尼古丁贴、含烟、嚼烟、膏烟、溶烟、嗅烟', targetId: 'product-smokeless-tobacco' },
      ],
    },
  ],
};

/** 俄罗斯产品准入速览数据 */
export const russiaProductAccessOverview: ProductAccessOverviewData = {
  country: 'russia',
  note,
  groups: [
    {
      status: '可准入',
      statusType: 'green',
      products: [
        { productName: '烟叶、烟草薄片、烟草废料等烟草及尼古丁原料', targetId: 'module-tobacco-raw' },
        { productName: '不含烟草、尼古丁或烟草提取物的爆珠、香精胶囊、滤嘴棒等普通辅材', targetId: 'module-ordinary-material' },
      ],
    },
    {
      status: '可准入，强监管',
      statusType: 'amber',
      products: [
        { productName: '传统烟草制品：传统卷烟、papirosy（俄式纸嘴卷烟）、雪茄、小雪茄、烟丝、烟斗烟、水烟烟草', targetId: 'product-traditional-tobacco' },
        { productName: '大部分无烟烟草产品：除 snus（湿润口含烟草）、nasvay（中亚口含烟草制品）及其他明确禁售产品以外的无烟烟草产品', targetId: 'product-non-smoking-tobacco' },
      ],
    },
    {
      status: '可准入，监管收紧',
      statusType: 'amber',
      products: [
        { productName: '加热烟草产品：HNB 烟支、加热消费用烟草', targetId: 'product-heat-not-burn' },
        { productName: '电子烟及液体产品', targetId: 'module-ecig' },
      ],
    },
    {
      status: '完全禁止',
      statusType: 'red',
      products: [
        { productName: '特定无烟烟草产品：snus（湿润口含烟草）、nasvay（中亚口含烟草制品）', targetId: 'product-smokeless-tobacco' },
        { productName: '新型尼古丁产品：尼古丁袋、尼古丁口含膜、尼古丁含片、食品型尼古丁产品，以及其他不含烟草但含尼古丁的口含、鼻吸或咀嚼类产品', targetId: 'product-novel-nicotine' },
      ],
    },
  ],
};

/** 阿联酋产品准入速览数据 */
export const uaeProductAccessOverview: ProductAccessOverviewData = {
  country: 'uae',
  note,
  groups: [
    {
      status: '可准入',
      statusType: 'green',
      products: [
        { productName: '烟草材料：烟叶、烟草薄片、烟草废料及其他烟草原料', targetId: 'product-tobacco-material' },
        { productName: '燃烧类烟草制品：传统卷烟、水烟烟草、雪茄、烟丝及其他燃烧类烟草制品', targetId: 'product-combustible-tobacco' },
        { productName: '电子尼古丁产品：电子烟设备、雾化器、烟油 / 电子烟液等', targetId: 'product-heat-not-burn' },
        { productName: '加热烟草产品：HNB 烟支、加热烟草棒、加热烟草产品', targetId: 'product-heat-not-burn' },
        { productName: '无烟草尼古丁袋', targetId: 'product-nicotine-pouch' },
        { productName: '不含烟草、尼古丁或烟草提取物的爆珠、香精胶囊、滤嘴棒等普通辅材', targetId: 'product-ordinary-material' },
      ],
    },
    {
      status: '完全禁止',
      statusType: 'red',
      products: [
        { productName: '无烟烟草产品：含有烟草材料、通过咀嚼或口含方式使用的烟草产品，典型产品包括 Paan、Gutkha、Mawa 等', targetId: 'product-smokeless-tobacco' },
        { productName: '仿烟糖果 / 玩具', targetId: 'product-imitation' },
      ],
    },
    {
      status: '监管要求不明确',
      statusType: 'amber',
      products: [
        { productName: '其他新型尼古丁产品：尼古丁口含膜、尼古丁片、尼古丁粉末、鼻吸尼古丁产品及其他不含烟草但含尼古丁、且不属于无烟草尼古丁袋的口腔或鼻用产品', targetId: 'product-novel-nicotine' },
      ],
    },
  ],
};

/** 印度尼西亚产品准入速览数据 */
export const indonesiaProductAccessOverview: ProductAccessOverviewData = {
  country: 'indonesia',
  note,
  groups: [
    {
      status: '可准入',
      statusType: 'green',
      products: [
        { productName: '燃烧类烟草制品：传统卷烟、雪茄、烟丝、其他燃烧类烟草制品', targetId: 'product-combustible-tobacco' },
        { productName: '加热烟草产品：HNB 烟支、加热烟草棒', targetId: 'product-heat-not-burn' },
        { productName: '电子烟产品', targetId: 'product-ecig' },
        { productName: '无烟烟草产品：口含烟、鼻烟、嚼烟及其他含烟草但不经燃烧吸用的产品', targetId: 'product-smokeless-tobacco' },
        { productName: '烟草原料：烟草薄片、烟叶', targetId: 'product-tobacco-raw' },
        { productName: '不含尼古丁、烟草成分或烟草提取物的爆珠、香精胶囊、滤嘴棒等普通辅材', targetId: 'product-ordinary-material' },
      ],
    },
    {
      status: '部分限制 / 监管要求不明确',
      statusType: 'amber',
      products: [
        { productName: '新型尼古丁产品：尼古丁袋、尼古丁口含膜、尼古丁含片及其他不含烟草但含尼古丁的口含类产品', targetId: 'product-novel-nicotine' },
      ],
    },
  ],
};

/** 马来西亚产品准入速览数据 */
export const malaysiaProductAccessOverview: ProductAccessOverviewData = {
  country: 'malaysia',
  note,
  groups: [
    {
      status: '可准入',
      statusType: 'green',
      products: [
        { productName: '传统烟草产品：传统卷烟、雪茄、烟丝 / 切丝烟草、其他制成烟草', targetId: 'product-traditional-tobacco' },
        { productName: '加热烟草产品：HNB 烟支、加热烟草棒、其他含烟草材料的加热产品', targetId: 'product-heat-not-burn' },
        { productName: '烟草原料 / 半成品：烟叶、烟草薄片', targetId: 'product-tobacco-raw' },
        { productName: '不含烟草、尼古丁或烟草提取物的爆珠、香精胶囊、滤嘴棒等普通辅材', targetId: 'product-ordinary-material' },
      ],
    },
    {
      status: '部分限制 / 准入受控',
      statusType: 'amber',
      products: [
        { productName: '不含尼古丁电子烟、设备及替代烟草产品', targetId: 'product-nicotine-free-ecig' },
      ],
    },
    {
      status: '高度受限',
      statusType: 'red',
      products: [
        { productName: '含尼古丁电子烟', targetId: 'product-ecig' },
        { productName: '无烟烟草产品：口含烟、鼻烟、嚼烟及其他含烟草但不经燃烧吸用的产品', targetId: 'product-smokeless-tobacco' },
        { productName: '新型尼古丁产品：尼古丁袋、尼古丁口含膜、尼古丁含片及其他不含烟草但含尼古丁的口含类产品', targetId: 'product-novel-nicotine' },
      ],
    },
  ],
};

/** 新加坡产品准入速览数据 */
export const singaporeProductAccessOverview: ProductAccessOverviewData = {
  country: 'singapore',
  note,
  groups: [
    {
      status: '可准入，但严格限制',
      statusType: 'amber',
      products: [
        { productName: '传统烟草成品：传统卷烟、雪茄、小雪茄、烟丝、烟斗烟、其他制成烟草', targetId: 'product-traditional-tobacco' },
        { productName: '烟叶、烟草薄片、烟草废料及其他烟草材料 / 原料', targetId: 'product-traditional-tobacco' },
      ],
    },
    {
      status: '可准入',
      statusType: 'green',
      products: [
        { productName: '不含烟草、尼古丁或受控成分的爆珠、香精胶囊、滤嘴棒等普通辅材', targetId: 'module-ordinary-material' },
      ],
    },
    {
      status: '完全禁止',
      statusType: 'red',
      products: [
        { productName: '水烟烟草', targetId: 'product-traditional-tobacco' },
        { productName: '加热烟草及电子雾化产品：HNB 烟支 / 加热烟草产品、电子烟设备、雾化器、烟油 / 电子烟液 / 补充液、烟弹 / 预灌装产品、电子雾化组件', targetId: 'product-heat-not-burn' },
        { productName: '无烟烟草产品：口含烟、鼻烟、嚼烟、snus、可溶性烟草，以及 Gutkha、Khaini、Zarda 等含烟草但不经燃烧吸用的产品', targetId: 'product-smokeless-tobacco' },
        { productName: '新型尼古丁产品：尼古丁袋、尼古丁口含膜、尼古丁含片及其他不含烟草但含尼古丁的口含类产品', targetId: 'product-novel-nicotine' },
        { productName: '仿烟产品及相关组件', targetId: 'product-imitation' },
      ],
    },
  ],
};

/** 香港产品准入速览数据 */
export const hongkongProductAccessOverview: ProductAccessOverviewData = {
  country: 'hongkong',
  note,
  groups: [
    {
      status: '可准入',
      statusType: 'green',
      products: [
        { productName: '不含烟草、尼古丁或烟草提取物的爆珠、香精胶囊、滤嘴棒等普通辅材', targetId: 'module-ordinary-material' },
      ],
    },
    {
      status: '可准入，但严格限制',
      statusType: 'amber',
      products: [
        { productName: '传统吸烟产品：传统卷烟、雪茄、中国熟烟、烟斗烟、其他制成烟草', targetId: 'module-traditional-tobacco' },
      ],
    },
    {
      status: '需按成分和功能拆分判断',
      statusType: 'amber',
      products: [
        { productName: '烟草材料：烟草薄片、烟叶及其他烟草材料', targetId: 'module-tobacco-material' },
        { productName: '含特殊成分或特定功能辅材：加入尼古丁、烟草材料、烟草提取物，或属于另类吸烟产品组件 / 配件的爆珠、香精胶囊、滤嘴棒、香精香料及其他辅材', targetId: 'product-special-material' },
      ],
    },
    {
      status: '完全禁止',
      statusType: 'red',
      products: [
        { productName: '另类吸烟产品：电子烟、HNB 烟支 / 加热烟草产品、电子雾化设备、烟弹 / 预灌装产品、烟油 / 电子烟液 / 补充液、加热装置、相关装置及组件', targetId: 'module-alternative-smoking' },
        { productName: '无烟烟草产品：嚼烟、口嚼卷烟、口嚼搓烟、湿鼻烟等含烟草但不经燃烧吸用的产品', targetId: 'module-smokeless-tobacco' },
      ],
    },
    {
      status: '高度受限',
      statusType: 'red',
      products: [
        { productName: '新型尼古丁产品：尼古丁袋、尼古丁口含膜、尼古丁含片及其他不含烟草但含尼古丁的口含类产品', targetId: 'module-novel-nicotine' },
      ],
    },
  ],
};

/** 巴拉圭产品准入速览数据 */
export const paraguayProductAccessOverview: ProductAccessOverviewData = {
  country: 'paraguay',
  note,
  groups: [
    {
      status: '可准入',
      statusType: 'green',
      products: [
        { productName: '传统烟草产品 / 烟草基产品：传统卷烟、雪茄、烟丝、加工烟草及其他烟草基产品', targetId: 'module-traditional-tobacco' },
        { productName: '电子烟及雾化产品：电子烟设备、雾化器、烟油 / 电子烟液 / 补充液、烟弹 / 预灌装产品、电子雾化相关配件和耗材', targetId: 'module-ecig' },
        { productName: '加热烟草：HNB 烟支、加热烟草棒', targetId: 'product-heat-not-burn' },
        { productName: '加热烟草装置：HNB 设备、加热装置及相关配件', targetId: 'product-heating-device' },
        { productName: '烟草原料 / 半成品：烟草薄片、烟叶及其他烟草原料', targetId: 'module-tobacco-raw' },
        { productName: '不含烟草、尼古丁或烟草提取物的爆珠、香精胶囊、滤嘴棒等普通辅材', targetId: 'module-ordinary-material' },
      ],
    },
    {
      status: '监管要求不明确 / 需结合产品特性确认',
      statusType: 'amber',
      products: [
        { productName: '尼古丁袋、无烟草尼古丁袋', targetId: 'product-nicotine-pouch' },
        { productName: '其他无烟草口含型尼古丁产品', targetId: 'product-oral-nicotine' },
        { productName: '无烟烟草产品：口含烟、鼻烟、嚼烟及其他含烟草但不经燃烧吸用的产品', targetId: 'product-smokeless-tobacco' },
      ],
    },
  ],
};

/** 所有国家产品准入速览数据映射 */
export const productAccessOverviewMap: Record<string, ProductAccessOverviewData> = {
  china: chinaProductAccessOverview,
  russia: russiaProductAccessOverview,
  uae: uaeProductAccessOverview,
  indonesia: indonesiaProductAccessOverview,
  malaysia: malaysiaProductAccessOverview,
  singapore: singaporeProductAccessOverview,
  hongkong: hongkongProductAccessOverview,
  paraguay: paraguayProductAccessOverview,
};
