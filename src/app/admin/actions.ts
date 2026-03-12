'use server';

import { supabase } from '../../lib/supabase';
import { CountryData } from '../../../data/mockData';

// 保存国家数据
export async function saveCountryData(countryData: Partial<CountryData>) {
  let retries = 2;
  while (retries > 0) {
    try {
      console.log('SERVER_ACTION: saveCountryData called with:', { countryId: countryData.id, retries });
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
      retries--;
      if (retries === 0) {
        console.error('SERVER_FETCH_ERROR: saveCountryData (after retries):', error);
        return { success: false, message: (error as Error).message || '保存失败，请重试' };
      }
      console.warn('SERVER_ACTION: Retrying saveCountryData...', { error: (error as Error).message });
      // 等待 1 秒后重试
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  return { success: false, message: '保存失败，请重试' };
}

// 上传文件
export async function uploadFile(file: File, countryId: string) {
  let retries = 2;
  while (retries > 0) {
    try {
      console.log('SERVER_ACTION: uploadFile called with:', { fileName: file.name, countryId, retries });
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
      retries--;
      if (retries === 0) {
        console.error('SERVER_FETCH_ERROR: uploadFile (after retries):', error);
        return { success: false, message: (error as Error).message || '上传失败，请重试' };
      }
      console.warn('SERVER_ACTION: Retrying uploadFile...', { error: (error as Error).message });
      // 等待 1 秒后重试
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  return { success: false, message: '上传失败，请重试' };
}

// 获取所有国家数据
export async function getCountries() {
  let retries = 2;
  while (retries > 0) {
    try {
      console.log('SERVER_ACTION: getCountries called, retries:', retries);
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
      retries--;
      if (retries === 0) {
        console.error('SERVER_FETCH_ERROR: getCountries (after retries):', error);
        return [];
      }
      console.warn('SERVER_ACTION: Retrying getCountries...', { error: (error as Error).message });
      // 等待 1 秒后重试
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  return [];
}

// 更新国家的 PDF 列表
export async function updateCountryPdfs(countryId: string, pdfUrls: string[]) {
  let retries = 2;
  while (retries > 0) {
    try {
      console.log('SERVER_ACTION: updateCountryPdfs called with:', { countryId, pdfCount: pdfUrls.length, retries });
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
      retries--;
      if (retries === 0) {
        console.error('SERVER_FETCH_ERROR: updateCountryPdfs (after retries):', error);
        return { success: false, message: (error as Error).message || '更新失败，请重试' };
      }
      console.warn('SERVER_ACTION: Retrying updateCountryPdfs...', { error: (error as Error).message });
      // 等待 1 秒后重试
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  return { success: false, message: '更新失败，请重试' };
}
