'use server';

import { baseCountries, CountryData } from '../../../data/mockData';

// 保存国家数据 - GitHub 模式下不再需要
// 所有修改通过 GitHub 编辑 data.json 文件完成
export async function saveCountryData(countryData: Partial<CountryData>) {
  console.log('SERVER_ACTION: saveCountryData called with:', { countryId: countryData.id });
  return { success: true, message: '请通过 GitHub 编辑 data.json 文件来更新内容' };
}

// 上传文件 - GitHub 模式下不再需要
// 所有文件通过 GitHub 上传到 public/pdfs 文件夹
export async function uploadFile(file: File, countryId: string) {
  console.log('SERVER_ACTION: uploadFile called with:', { fileName: file.name, countryId });
  return { success: true, message: '请通过 GitHub 上传文件到 public/pdfs 文件夹' };
}

// 获取所有国家数据 - 直接返回本地数据
export async function getCountries() {
  console.log('SERVER_ACTION: getCountries called');
  return baseCountries;
}

// 更新国家的 PDF 列表 - GitHub 模式下不再需要
export async function updateCountryPdfs(countryId: string, pdfUrls: string[]) {
  console.log('SERVER_ACTION: updateCountryPdfs called with:', { countryId, pdfCount: pdfUrls.length });
  return { success: true, message: '请通过 GitHub 编辑 data.json 文件来更新 PDF 列表' };
}
