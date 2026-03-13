'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { baseCountries } from '../../../data/mockData';
import { uploadFile } from './actions';

const ADMIN_PASSWORD = 'HB1234';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'regulations' | 'news' | 'files'>('regulations');
  const [uploading, setUploading] = useState(false);
  const [uploadedData, setUploadedData] = useState<{ title: string; url: string } | null>(null);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  
  const titleInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('密码错误，请重试');
    }
  };

  const handleFileUpload = async () => {
    const file = fileInputRef.current?.files?.[0];
    const title = titleInputRef.current?.value;
    
    if (!file || !selectedCountry || !title) {
      setMessage({ text: '请填写标题并选择文件', type: 'error' });
      return;
    }

    setUploading(true);
    setMessage(null);
    setUploadedData(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('countryId', selectedCountry);
      formData.append('title', title);
      
      const result = await uploadFile(formData);
      
      if (result.success && result.url) {
        setUploadedData({ title, url: result.url });
        setMessage({ text: '上传成功！请复制下方的 JSON 对象', type: 'success' });
        
        if (titleInputRef.current) titleInputRef.current.value = '';
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        let errorText = result.message || '上传失败，请重试';
        if (result.errorDetails) {
          errorText += `\n\n详细信息：${JSON.stringify(result.errorDetails, null, 2)}`;
        }
        setMessage({ text: errorText, type: 'error' });
      }
    } catch (error) {
      console.error('Upload error:', error);
      const errorText = error instanceof Error ? error.message : '上传失败，请重试';
      setMessage({ text: errorText, type: 'error' });
    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage({ text: '已复制到剪贴板！', type: 'success' });
    } catch (error) {
      console.error('Copy error:', error);
      setMessage({ text: '复制失败，请手动复制', type: 'error' });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">⚙️</div>
            <h1 className="text-2xl font-bold text-gray-900">管理后台登录</h1>
            <p className="text-gray-600 mt-1">请输入密码以访问</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-orange focus:border-transparent text-lg"
                placeholder="请输入密码"
                autoComplete="off"
              />
            </div>
            
            {error && (
              <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-business-orange text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
            >
              登录
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center justify-center gap-2">
              <span>←</span> 返回首页
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
            <span>←</span> 返回首页
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">文件管理中心</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            退出登录
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">选择国家</h2>
          <div className="flex flex-wrap gap-2">
            {baseCountries.map(country => (
              <button
                key={country.id}
                onClick={() => {
                  setSelectedCountry(country.id);
                  setUploadedData(null);
                  setMessage(null);
                }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCountry === country.id
                    ? 'bg-business-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {country.name}
              </button>
            ))}
          </div>
        </div>

        {selectedCountry && (
          <>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
              <p className="text-blue-900 font-medium">
                正在为【{baseCountries.find(c => c.id === selectedCountry)?.name}】管理文件...
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('regulations')}
                  className={`flex-1 px-6 py-4 font-medium transition-colors ${
                    activeTab === 'regulations'
                      ? 'text-business-orange border-b-2 border-business-orange bg-orange-50'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  📜 法规链接
                </button>
                <button
                  onClick={() => setActiveTab('news')}
                  className={`flex-1 px-6 py-4 font-medium transition-colors ${
                    activeTab === 'news'
                      ? 'text-business-orange border-b-2 border-business-orange bg-orange-50'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  📰 资讯链接
                </button>
                <button
                  onClick={() => setActiveTab('files')}
                  className={`flex-1 px-6 py-4 font-medium transition-colors ${
                    activeTab === 'files'
                      ? 'text-business-orange border-b-2 border-business-orange bg-orange-50'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  📁 文件上传
                </button>
              </div>

              <div className="p-6">
                {message && (
                  <div className={`mb-4 p-4 rounded-lg whitespace-pre-wrap ${
                    message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}>
                    {message.text}
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    标题
                  </label>
                  <input
                    ref={titleInputRef}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-orange focus:border-transparent"
                    placeholder="请输入标题"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    选择文件
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.gif"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    支持 PDF、Word、Excel、图片格式
                  </p>
                </div>

                <button
                  onClick={handleFileUpload}
                  disabled={uploading}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    uploading
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-business-orange text-white hover:opacity-90'
                  }`}
                >
                  {uploading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                      上传中...
                    </span>
                  ) : (
                    '上传文件'
                  )}
                </button>

                {uploadedData && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">上传成功！请复制以下 JSON 对象：</h3>
                    <div className="bg-gray-900 rounded-lg p-4 relative">
                      <pre className="text-green-400 text-sm overflow-x-auto">
                        {JSON.stringify(uploadedData, null, 2)}
                      </pre>
                      <button
                        onClick={() => copyToClipboard(JSON.stringify(uploadedData, null, 2))}
                        className="absolute top-2 right-2 px-3 py-1 bg-business-orange text-white text-sm rounded hover:opacity-90"
                      >
                        复制
                      </button>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-4">
                      <p className="text-yellow-800 text-sm">
                        <strong>操作指引：</strong>请将复制的 JSON 对象粘贴到 GitHub 的 data.json 文件中对应国家的 
                        {activeTab === 'regulations' && 'regulations 数组'}
                        {activeTab === 'news' && 'news 数组'}
                        {activeTab === 'files' && 'pdfs 数组'} 里。
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 使用说明</h3>
          <div className="space-y-4 text-gray-700">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">1. 选择国家</h4>
              <p>点击上方的国家按钮，选择要管理的国家。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">2. 选择类型</h4>
              <p>选择要添加的内容类型：法规链接、资讯链接或文件上传。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">3. 填写信息</h4>
              <p>输入标题并选择要上传的文件。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">4. 复制 JSON</h4>
              <p>上传成功后，复制生成的 JSON 对象。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">5. 更新 data.json</h4>
              <p>前往 GitHub 编辑 data.json 文件，将 JSON 对象粘贴到对应数组中。</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
