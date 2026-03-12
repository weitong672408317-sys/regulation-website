'use server';

import { supabase } from '../../lib/supabase';
import { CountryData } from '../../../data/mockData';

// 保存国家数据
export async function saveCountryData(countryData: Partial<CountryData>) {
  try {
    console.log('SERVER_ACTION: saveCountryData called with:', { countryId: countryData.id });
    const { error } = await supabase
      .from('countries')
      .upsert(countryData, { onConflict: 'id' });
    
    if (error) {
      console.error('SUPABASE_ERROR: saveCountryData:', error);
      throw error;
    }
    
    console.log('SERVER_ACTION: saveCountryData success');
    return { success: true, message: '内容已更新！全球用户都能看到新内容' };
  } catch (error) {
    console.error('SERVER_FETCH_ERROR: saveCountryData:', error);
    return { success: false, message: (error as Error).message || '保存失败，请重试' };
  }
}

// 上传文件
export async function uploadFile(file: File, countryId: string) {
  try {
    console.log('SERVER_ACTION: uploadFile called with:', { fileName: file.name, countryId });
    const fileName = `${Date.now()}_${file.name}`;
    const filePath = countryId ? `${countryId}/${fileName}` : fileName;
    
    // 上传文件到 Supabase 存储
    const { error } = await supabase
      .storage
      .from('files')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });
    
    if (error) {
      console.error('SUPABASE_ERROR: uploadFile:', error);
      throw error;
    }
    
    // 获取文件的公共 URL
    const { data: urlData } = supabase
      .storage
      .from('files')
      .getPublicUrl(filePath);
    
    console.log('SERVER_ACTION: uploadFile success:', { url: urlData.publicUrl });
    return { success: true, url: urlData.publicUrl };
  } catch (error) {
    console.error('SERVER_FETCH_ERROR: uploadFile:', error);
    return { success: false, message: (error as Error).message || '上传失败，请重试' };
  }
}

// 获取所有国家数据
export async function getCountries() {
  try {
    console.log('SERVER_ACTION: getCountries called');
    const { data, error } = await supabase
      .from('countries')
      .select('*');
    
    if (error) {
      console.error('SUPABASE_ERROR: getCountries:', error);
      throw error;
    }
    
    console.log('SERVER_ACTION: getCountries success:', { count: data?.length });
    return data || [];
  } catch (error) {
    console.error('SERVER_FETCH_ERROR: getCountries:', error);
    return [];
  }
}

// 更新国家的 PDF 列表
export async function updateCountryPdfs(countryId: string, pdfUrls: string[]) {
  try {
    console.log('SERVER_ACTION: updateCountryPdfs called with:', { countryId, pdfCount: pdfUrls.length });
    const { error } = await supabase
      .from('countries')
      .update({ references: { pdfs: pdfUrls } })
      .eq('id', countryId);
    
    if (error) {
      console.error('SUPABASE_ERROR: updateCountryPdfs:', error);
      throw error;
    }
    
    console.log('SERVER_ACTION: updateCountryPdfs success');
    return { success: true, message: '文件已成功关联到国家' };
  } catch (error) {
    console.error('SERVER_FETCH_ERROR: updateCountryPdfs:', error);
    return { success: false, message: (error as Error).message || '更新失败，请重试' };
  }
}
