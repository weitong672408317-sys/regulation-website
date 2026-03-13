'use server';

import { put } from '@vercel/blob';
import { baseCountries, CountryData } from '../../../data/mockData';

export async function uploadFile(file: File, countryId: string, title: string) {
  try {
    console.log('SERVER_ACTION: uploadFile called with:', { fileName: file.name, countryId, title });
    
    const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
    console.log('SERVER_ACTION: BLOB_READ_WRITE_TOKEN exists:', !!blobToken);
    console.log('SERVER_ACTION: BLOB_READ_WRITE_TOKEN length:', blobToken ? blobToken.length : 0);
    
    if (!blobToken) {
      console.error('SERVER_ACTION: BLOB_READ_WRITE_TOKEN is missing');
      return {
        success: false,
        message: '错误：BLOB_READ_WRITE_TOKEN 环境变量未配置。请在 Vercel 项目设置中添加此环境变量。'
      };
    }
    
    const fileExtension = file.name.split('.').pop() || 'pdf';
    const sanitizedTitle = title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_');
    const fileName = `pdfs/${countryId}/${sanitizedTitle}.${fileExtension}`;
    
    console.log('SERVER_ACTION: Attempting to upload file:', fileName);
    
    const blob = await put(fileName, file, {
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
    console.error('SERVER_ACTION: Error type:', error?.constructor?.name);
    console.error('SERVER_ACTION: Error message:', error instanceof Error ? error.message : 'Unknown error');
    
    let errorMessage = '上传失败，请重试';
    
    if (error instanceof Error) {
      if (error.message.includes('BLOB_READ_WRITE_TOKEN')) {
        errorMessage = '错误：BLOB_READ_WRITE_TOKEN 环境变量未配置或无效';
      } else if (error.message.includes('network') || error.message.includes('timeout')) {
        errorMessage = '错误：网络连接失败，请检查网络后重试';
      } else if (error.message.includes('permission') || error.message.includes('unauthorized')) {
        errorMessage = '错误：权限被拒绝，请检查 Vercel Blob 存储配置';
      } else if (error.message.includes('size') || error.message.includes('limit')) {
        errorMessage = '错误：文件大小超出限制';
      } else {
        errorMessage = `上传失败：${error.message}`;
      }
    }
    
    return { 
      success: false, 
      message: errorMessage
    };
  }
}

export async function getCountries() {
  console.log('SERVER_ACTION: getCountries called');
  return baseCountries;
}
