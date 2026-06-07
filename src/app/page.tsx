import dynamic from 'next/dynamic';

const WorldMap = dynamic(() => import('@/components/WorldMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[520px] bg-[#F8FAFC] rounded-lg p-4">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="w-8 h-8 border-2 border-[#4A6290] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500 text-sm">加载地图中...</p>
      </div>
    </div>
  ),
});

const ComparisonTable = dynamic(() => import('@/components/ComparisonTable'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 px-4 py-3">
        <div className="h-4 bg-gray-200 rounded w-48"></div>
      </div>
      <div className="divide-y divide-gray-200">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="px-4 py-3 flex items-center gap-4">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="flex-1 h-4 bg-gray-100 rounded"></div>
          </div>
        ))}
      </div>
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
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">监管地图概览</h2>
          <p className="text-gray-600 mb-4">点击高亮国家查看详细监管信息</p>
          <WorldMap />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">各国监管速览对比</h2>
          <ComparisonTable />
        </section>

        <section className="mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-500 leading-relaxed">
              免责声明：本网站所载内容仅供一般信息参考，不构成法律意见、合规意见、税务意见或其他专业意见，也不应作为任何商业决策、市场准入、产品注册、进口、销售或宣传行为的依据。相关法律法规、监管口径和执法实践可能随时调整；如涉及具体产品、交易安排或合规判断，请结合最新法规、主管机关口径及当地专业顾问意见进行确认。
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">© 2026 全球烟草监管动态. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
