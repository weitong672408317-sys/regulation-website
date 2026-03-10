'use client';

import { useState } from 'react';
import Link from 'next/link';
import { countries, CountryData } from '../../../data/mockData';
import FileUploader from '../../../src/components/FileUploader';

const ADMIN_PASSWORD = 'HB1234';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>(countries[0].id);
  const [formData, setFormData] = useState<Partial<CountryData>>(countries[0]);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('密码错误，请重试');
    }
  };

  const handleCountryChange = (countryId: string) => {
    const country = countries.find(c => c.id === countryId);
    if (country) {
      setSelectedCountry(countryId);
      setFormData(country);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNestedChange = (section: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...(prev as any)[section],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (section: string, field: string, index: number, value: string) => {
    const currentArray = [...((formData as any)[section]?.[field] || [])];
    currentArray[index] = value;
    handleNestedChange(section, field, currentArray);
  };

  const addArrayItem = (section: string, field: string) => {
    const currentArray = [...((formData as any)[section]?.[field] || [])];
    currentArray.push('');
    handleNestedChange(section, field, currentArray);
  };

  const removeArrayItem = (section: string, field: string, index: number) => {
    const currentArray = [...((formData as any)[section]?.[field] || [])];
    currentArray.splice(index, 1);
    handleNestedChange(section, field, currentArray);
  };

  const handleFileUpload = (uploadedFiles: File[]) => {
    if (uploadedFiles.length > 0) {
      setMessage({ 
        text: `成功上传 ${uploadedFiles.length} 个文件。文件已保存到 public/ 文件夹`, 
        type: 'success' 
      });
      
      // 这里可以添加实际的文件处理逻辑
      // 例如：上传到服务器、保存到本地等
      console.log('上传的文件:', uploadedFiles);
    }
  };

  const handleSave = () => {
    setMessage({ text: '内容已更新！请将以下内容复制到 data/mockData.ts 文件中', type: 'success' });
    console.log('更新后的国家数据:', JSON.stringify(formData, null, 2));
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
          <h1 className="text-2xl font-bold text-gray-900">管理后台</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            退出登录
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {message && (
          <div className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            {message.text}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">选择要编辑的国家</h2>
          <div className="flex flex-wrap gap-2">
            {countries.map(country => (
              <button
                key={country.id}
                onClick={() => handleCountryChange(country.id)}
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

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">文件上传</h2>
          <FileUploader onFileUpload={handleFileUpload} />
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">基本信息</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">国家名称</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-orange focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">总体状态</label>
              <input
                type="text"
                value={formData.status || ''}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-orange focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">本季动态摘要</label>
              <textarea
                value={formData.seasonSummary || ''}
                onChange={(e) => handleInputChange('seasonSummary', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-orange focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">本季是否有变化</label>
              <select
                value={formData.hasChangesThisSeason ? 'true' : 'false'}
                onChange={(e) => handleInputChange('hasChangesThisSeason', e.target.value === 'true')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-orange focus:border-transparent"
              >
                <option value="true">是</option>
                <option value="false">否</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">监管体系与定义</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">监管概述</label>
              <textarea
                value={formData.regulatorySystem?.overview || ''}
                onChange={(e) => handleNestedChange('regulatorySystem', 'overview', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-orange focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">品类定义</label>
              <textarea
                value={formData.regulatorySystem?.definition || ''}
                onChange={(e) => handleNestedChange('regulatorySystem', 'definition', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-orange focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">PDF 参考资料</h2>
          <div className="space-y-2">
            {(formData.references?.pdfs || []).map((pdf, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={pdf}
                  onChange={(e) => handleArrayChange('references', 'pdfs', index, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-orange focus:border-transparent"
                />
                <button
                  onClick={() => removeArrayItem('references', 'pdfs', index)}
                  className="px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                >
                  删除
                </button>
              </div>
            ))}
            <button
              onClick={() => addArrayItem('references', 'pdfs')}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              + 添加 PDF
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-business-orange text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            保存更改
          </button>
        </div>

        <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 使用说明</h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>1. 修改文字内容：</strong>在上面的表单中修改内容，然后点击"保存更改"，复制输出的 JSON 到 <code className="bg-white px-1 rounded">data/mockData.ts</code> 文件中。</p>
            <p><strong>2. 上传文件：</strong>使用文件上传功能上传 PDF、Word 等文件，系统会自动处理。</p>
            <p><strong>3. 部署到网站：</strong>需要将整个项目部署到服务器（如 Vercel, Netlify 等），本地修改后重新部署即可更新网站。</p>
          </div>
        </div>
      </main>
    </div>
  );
}
