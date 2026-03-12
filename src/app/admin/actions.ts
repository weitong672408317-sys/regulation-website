'use server';

import { supabase } from '../../lib/supabase';
import { CountryData } from '../../../data/mockData';

// 保存国家数据
export async function saveCountryData(countryData: Partial<CountryData>) {
  try {
    const { error } = await supabase
      .from('countries')
      .upsert(countryData, { onConflict: 'id' });
    
    if (error) {
      throw error;
    }
    
    return { success: true, message: '内容已更新！全球用户都能看到新内容' };
  } catch (error) {
    console.error('Error saving country data:', error);
    return { success: false, message: '保存失败，请重试' };
  }
}

// 上传文件
export async function uploadFile(file: File, countryId: string) {
  try {
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
      throw error;
    }
    
    // 获取文件的公共 URL
    const { data: urlData } = supabase
      .storage
      .from('files')
      .getPublicUrl(filePath);
    
    return { success: true, url: urlData.publicUrl };
  } catch (error) {
    console.error('Error uploading file:', error);
    return { success: false, message: '上传失败，请重试' };
  }
}

// 获取所有国家数据
export async function getCountries() {
  try {
    const { data, error } = await supabase
      .from('countries')
      .select('*');
    
    if (error) {
      throw error;
    }
    
    return data || [];
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
}

// 更新国家的 PDF 列表
export async function updateCountryPdfs(countryId: string, pdfUrls: string[]) {
  try {
    const { error } = await supabase
      .from('countries')
      .update({ references: { pdfs: pdfUrls } })
      .eq('id', countryId);
    
    if (error) {
      throw error;
    }
    
    return { success: true, message: '文件已成功关联到国家' };
  } catch (error) {
    console.error('Error updating country PDFs:', error);
    return { success: false, message: '更新失败，请重试' };
  }
}
