import dynamic from 'next/dynamic';

const HomeContent = dynamic(() => import('@/components/HomeContent'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4A6290]"></div>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">全球烟草监管动态</h1>
            <p className="text-gray-600">烟草、尼古丁及相关产品监管信息参考</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HomeContent />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">© 2026 全球烟草监管动态. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
