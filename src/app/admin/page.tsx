'use client';

import { useState } from 'react';
import Link from 'next/link';

const ADMIN_PASSWORD = 'HB1234';

// 假设你的 GitHub 仓库地址
const GITHUB_REPO = 'https://github.com/your-username/regulation-website';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('密码错误，请重试');
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
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col items-center justify-center text-center">
            <div className="text-5xl mb-4">📝</div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">修改网站内容</h2>
            <p className="text-gray-600 mb-6">点击下方按钮前往 GitHub 编辑 data.json 文件</p>
            <a 
              href={`${GITHUB_REPO}/edit/main/data.json`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-business-orange text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              前往 GitHub 修改内容
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col items-center justify-center text-center">
            <div className="text-5xl mb-4">📁</div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">上传文件</h2>
            <p className="text-gray-600 mb-6">点击下方按钮前往 GitHub 上传文件到 public/pdfs 文件夹</p>
            <a 
              href={`${GITHUB_REPO}/upload/main/public/pdfs`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-business-orange text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              前往 GitHub 上传文件
            </a>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">💡 操作指南</h3>
          <div className="space-y-4 text-gray-700">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">1. 修改网站内容</h4>
              <p>点击"前往 GitHub 修改内容"按钮，在 GitHub 编辑器中修改 data.json 文件，然后点击"Commit changes"保存更改。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">2. 上传文件</h4>
              <p>点击"前往 GitHub 上传文件"按钮，将 PDF、Word 等文件上传到 public/pdfs 文件夹，然后点击"Commit changes"保存更改。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">3. 自动部署</h4>
              <p>修改 JSON 文件并保存（Commit）后，Vercel 会在 1 分钟内自动重新部署并更新网页内容。</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-900 mb-2">4. 查看更新</h4>
              <p>部署完成后，刷新网站即可看到最新的内容。</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
