'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface FileUploaderProps {
  onFileUpload: (files: File[]) => void;
  accept?: string;
  maxFiles?: number;
  maxSize?: number; // in MB
  countryId?: string;
}

export default function FileUploader({
  onFileUpload,
  accept = '.pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png',
  maxFiles = 5,
  maxSize = 10,
  countryId,
}: FileUploaderProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setError('');

    if (selectedFiles.length === 0) return;

    if (selectedFiles.length > maxFiles) {
      setError(`最多只能上传 ${maxFiles} 个文件`);
      return;
    }

    const invalidFiles = selectedFiles.filter(file => {
      const fileSizeMB = file.size / (1024 * 1024);
      return fileSizeMB > maxSize;
    });

    if (invalidFiles.length > 0) {
      setError(`文件大小不能超过 ${maxSize}MB`);
      return;
    }

    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setError('请选择要上传的文件');
      return;
    }

    setIsUploading(true);
    setError('');

    try {
      const uploadedFiles = [];
      
      for (const file of files) {
        const fileName = `${Date.now()}_${file.name}`;
        const filePath = countryId ? `${countryId}/${fileName}` : fileName;
        
        // 上传文件到 Supabase 存储
        const { data, error } = await supabase
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
        
        uploadedFiles.push({
          ...file,
          url: urlData.publicUrl
        });
      }
      
      onFileUpload(uploadedFiles);
      setFiles([]);
    } catch (err) {
      console.error('Error uploading files:', err);
      setError('上传失败，请重试');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <input
          type="file"
          multiple
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span>📁</span> 选择文件
        </label>
        <p className="mt-2 text-sm text-gray-500">支持 PDF, Word, Excel, 图片等格式</p>
        <p className="mt-1 text-xs text-gray-400">
          单个文件最大 {maxSize}MB，最多上传 {maxFiles} 个文件
        </p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {files.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700">已选择的文件 ({files.length}/{maxFiles})</h3>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded">
                    {file.type.includes('pdf') && '📄'}
                    {file.type.includes('word') && '📝'}
                    {file.type.includes('excel') && '📊'}
                    {file.type.includes('image') && '🖼️'}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {Math.round(file.size / (1024 * 1024) * 100) / 100} MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleUpload}
            disabled={isUploading}
            className="w-full px-4 py-2 bg-business-orange text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading ? '上传中...' : '开始上传'}
          </button>
        </div>
      )}
    </div>
  );
}
