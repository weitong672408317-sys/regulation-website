import React from 'react';

interface Regulation {
  title: string;
  summary: string;
  url?: string;
}

interface NewsItem {
  title: string;
  summary?: string;
  source?: string;
  date?: string;
  url?: string;
}

interface ImportantInfoProps {
  regulations?: Regulation[];
  news?: NewsItem[];
}

export const ImportantInfo = ({ regulations = [], news = [] }: ImportantInfoProps) => {
  return (
    <div className="space-y-6">
      {regulations.length > 0 && (
        <div className="pb-6">
          <h3 className="text-lg font-bold text-[#2E3F73] mb-4">法规 / 政策文件</h3>

          <div className="bg-[#E8EDF5] border border-[#D8DDED] rounded-lg p-4 mb-6">
            <p className="text-sm text-[#64748B] leading-7">
              以下链接主要为官方公布文本、主管机关公开页面或官方信息公告。俄罗斯相关法律、政府令和部门公告可能经过后续修订或按年度更新，具体适用应以现行有效文本、后续修正和主管机关最新口径为准。
            </p>
          </div>

          <div className="space-y-4">
            {regulations.map((regulation, index) => (
              <div key={index} className="bg-[#F3F5FB] border border-[#D8DDED] rounded-xl p-5">
                {regulation.url ? (
                  <a
                    href={regulation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#243B63] text-base mb-2 hover:underline block"
                  >
                    {regulation.title}
                  </a>
                ) : (
                  <div className="font-semibold text-[#243B63] text-base mb-2">
                    {regulation.title}
                  </div>
                )}
                <p className="text-sm text-[#334155] leading-6">
                  <span className="font-semibold">主要内容：</span>
                  {regulation.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {news.length > 0 && (
        <div className="mt-6 pt-6 border-t border-[#D8DDED]">
          <h3 className="text-lg font-bold text-[#2E3F73] mb-3">新闻 / 执法动态</h3>
          <div className="bg-[#F3F5FB] border border-[#D8DDED] rounded-lg p-4">
            <ul className="list-disc pl-5 space-y-2">
              {news.map((item, index) => (
                <li key={index} className="text-[#334155] text-base">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};