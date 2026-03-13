'use server';

import { put } from '@vercel/blob';
import { baseCountries, CountryData } from '../../../data/mockData';

export async function uploadFile(file: File, countryId: string, title: string) {
  console.log('=== SERVER_ACTION: uploadFile START ===');
  console.log('SERVER_ACTION: Input parameters:', { 
    fileName: file.name, 
    fileSize: file.size,
    fileType: file.type,
    countryId, 
    title 
  });
  
  console.log('Token exists:', !!process.env.BLOB_READ_WRITE_TOKEN);
  console.log('Token length:', process.env.BLOB_READ_WRITE_TOKEN?.length || 0);
  
  try {
    const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
    
    if (!blobToken) {
      console.error('SERVER_ACTION: ERROR - BLOB_READ_WRITE_TOKEN is missing');
      return {
        success: false,
        message: '错误：BLOB_READ_WRITE_TOKEN 环境变量未配置。请在 Vercel 项目设置中添加此环境变量。'
      };
    }
    
    const fileExtension = file.name.split('.').pop() || 'pdf';
    const sanitizedTitle = title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_');
    const fileName = `pdfs/${countryId}/${sanitizedTitle}.${fileExtension}`;
    
    console.log('SERVER_ACTION: Preparing to upload:', {
      fileName,
      fileSize: `${(file.size / 1024).toFixed(2)} KB`,
      fileType: file.type
    });
    
    console.log('SERVER_ACTION: Calling Vercel Blob put()...');
    const blob = await put(fileName, file, {
      access: 'public',
    });
    
    console.log('SERVER_ACTION: Upload SUCCESS:', { 
      url: blob.url,
      downloadUrl: blob.downloadUrl 
    });
    console.log('=== SERVER_ACTION: uploadFile END (SUCCESS) ===');
    
    return { 
      success: true, 
      url: blob.url,
      message: '文件上传成功！'
    };
  } catch (error) {
    console.error('=== SERVER_ACTION: uploadFile ERROR ===');
    console.error('Detailed Blob Error:', error);
    console.error('Error type:', error?.constructor?.name);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    let errorMessage = '上传失败，请重试';
    
    if (error instanceof Error) {
      console.error('Error is an instance of Error');
      console.error('Full error object:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
      
      if (error.message.includes('BLOB_READ_WRITE_TOKEN')) {
        errorMessage = `Token 错误：${error.message}`;
      } else if (error.message.includes('network') || error.message.includes('timeout') || error.message.includes('ENOTFOUND')) {
        errorMessage = `网络错误：${error.message}`;
      } else if (error.message.includes('permission') || error.message.includes('unauthorized') || error.message.includes('403')) {
        errorMessage = `权限错误：${error.message}`;
      } else if (error.message.includes('size') || error.message.includes('limit') || error.message.includes('413')) {
        errorMessage = `文件大小错误：${error.message}`;
      } else {
        errorMessage = `上传失败：${error.message}`;
      }
    } else {
      console.error('Error is not an Error instance, raw error:', error);
      errorMessage = `未知错误：${String(error)}`;
    }
    
    console.error('Final error message to return:', errorMessage);
    console.error('=== SERVER_ACTION: uploadFile END (ERROR) ===');
    
    return { 
      success: false, 
      message: errorMessage,
      errorDetails: error instanceof Error ? {
        name: error.name,
        message: error.message,
        stack: error.stack
      } : String(error)
    };
  }
}

export async function getCountries() {
  console.log('SERVER_ACTION: getCountries called');
  return baseCountries;
}
