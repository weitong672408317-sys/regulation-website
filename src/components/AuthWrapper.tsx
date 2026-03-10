'use client';

import { useState, useEffect } from 'react';

const SITE_PASSWORD = 'FYI';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedAuth = localStorage.getItem('siteAuth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      localStorage.setItem('siteAuth', 'true');
    } else {
      setError('密码错误，请重试');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">🔒</div>
            <h1 className="text-2xl font-bold text-gray-900">访问密码</h1>
            <p className="text-gray-600 mt-1">请输入密码以访问全球法规动态追踪门户</p>
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
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
