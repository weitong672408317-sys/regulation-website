'use server';

import { put } from '@vercel/blob';
import { baseCountries, CountryData } from '../../../data/mockData';

export async function uploadFile(file: File, countryId: string, title: string) {
  try {
    console.log('SERVER_ACTION: uploadFile called with:', { fileName: file.name, countryId, title });
    
    const fileExtension = file.name.split('.').pop() || 'pdf';
    const sanitizedTitle = title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_');
    const blob = await put(`pdfs/${countryId}/${sanitizedTitle}.${fileExtension}`, file, {
      access: 'public',
    });
    
    console.log('SERVER_ACTION: uploadFile success:', { url: blob.url });
    
    return { 
      success: true, 
      url: blob.url,
      message: '文件上传成功！'
    };
  } catch (error) {
    console.error('SERVER_ACTION: uploadFile error:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : '上传失败，请重试'
    };
  }
}

export async function getCountries() {
  console.log('SERVER_ACTION: getCountries called');
  return baseCountries;
}
