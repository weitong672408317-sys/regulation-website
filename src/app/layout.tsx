import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthWrapper from '../components/AuthWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '全球法规动态追踪门户',
  description: '专业监管法规智能追踪与合规分析平台',
  keywords: ['法规', '监管', '合规', '全球', '追踪'],
  authors: [{ name: 'WT Studio' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <AuthWrapper>
          {children}
        </AuthWrapper>
      </body>
    </html>
  );
}
