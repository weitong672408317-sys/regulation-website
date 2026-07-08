
/**
 * 国家数据类型定义
 *
 * 此文件仅导出类型/接口，不包含任何运行时数据。
 * 页面组件通过 `import type { CountryData }` 引用时，不会拉取 mockData.ts
 * 中 ~200KB 的法规正文数据，有助于减少子页面的 JS bundle 体积，
 * 从而加快「首页地图 → 国家子页面」的导航加载速度。
 *
 * 实际运行时数据仍由 data/mockData.ts 导出：
 *   import { baseCountries, getCountryById } from './mockData';
 */

export interface ProductCategoryRestrictions {
  prohibited: string[];
  partiallyProhibited: string[];
  open: string[];
}

export interface AccessRestrictionItem {
  productName: string;
  rule: string;
}

export interface AccessRestrictionsByStatus {
  fullyProhibited: AccessRestrictionItem[];
  partiallyRestricted: AccessRestrictionItem[];
  openAccessible: AccessRestrictionItem[];
}

export interface EmirateDifferenceRow {
  emirate: string;
  chewingTobacco: string;
  electronicCigarette: string;
  hookah: string;
  note?: string;
}

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

export interface GenericComplianceTable {
  headers: string[];
  rows: (string | string[])[][];
}

export interface TaxPolicy {
  title: string;
  description: string;
}

export interface MarketOperationItem {
  category: string;
  items: string[];
}

export interface RedLineGroup {
  groupName: string;
  items: string[];
}

export interface ReferenceItemWithDescription {
  title: string;
  description: string;
  url: string;
}

export interface ReferenceGroup {
  groupName: string;
  items: ReferenceItemWithDescription[];
}

export interface CountryData {
  id: string;
  name: string;
  isoCode: string;
  status: string;
  productQualification: string;
  restrictions: string;
  regulatoryIntensity: '低' | '中' | '高' | '极高' | '低至中';
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
    genericTable?: GenericComplianceTable;
    secondGenericTable?: GenericComplianceTable;
  };
  tax: {
    exciseTax: string;
    policies: TaxPolicy[];
    exciseTaxTable?: GenericComplianceTable;
    minimumPriceTable?: GenericComplianceTable;
    vatTaxTable?: GenericComplianceTable;
    salesComparisonTable?: GenericComplianceTable;
  };
  marketOperation: {
    marketingRestrictions: string;
    displaySales: string;
    regulations: MarketOperationItem[];
  };
  trendsWarnings: {
    trendAnalysis: string;
    redLines: string[];
    redLineGroups?: RedLineGroup[];
  };
  references: {
    regulations: { title: string; url: string }[];
    news: { title: string; url: string }[];
    pdfs: { title: string; url: string }[];
    referenceGroups?: ReferenceGroup[];
  };
}
