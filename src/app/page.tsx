import Link from 'next/link';
import WorldMap from '@/components/WorldMap';
import ComparisonTable from '@/components/ComparisonTable';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">全球法规动态追踪门户</h1>
            <p className="text-gray-600">专业监管法规智能追踪与合规分析平台</p>
          </div>
          <Link href="/admin" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
            ⚙️ 管理后台
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">监管地图概览</h2>
          <p className="text-gray-600 mb-4">点击高亮国家查看详细监管信息</p>
          <WorldMap />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">各国监管速览对比</h2>
          <ComparisonTable />
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">© 2024 全球法规动态追踪门户. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
