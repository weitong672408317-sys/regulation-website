'use client';

import dynamic from 'next/dynamic';

const WorldMap = dynamic(() => import('@/components/WorldMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[520px] bg-[#F8FAFC] rounded-lg flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4A6290]"></div>
    </div>
  ),
});

const ComparisonTable = dynamic(() => import('@/components/ComparisonTable'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] bg-white rounded-lg flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4A6290]"></div>
    </div>
  ),
});

export default function HomeContent() {
  return (
    <>
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
    </>
  );
}
