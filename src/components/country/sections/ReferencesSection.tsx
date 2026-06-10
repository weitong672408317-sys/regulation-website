import React from 'react';
import { SectionCard, SubCard } from './SectionCard';

interface ReferenceItemProps {
  title: string;
  url?: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
  showSeparator?: boolean;
}

export function ReferenceItem({ title, url, description, children, showSeparator = false }: ReferenceItemProps) {
  return (
    <div className={showSeparator ? 'pt-4 border-t border-[#D8DDED]' : ''}>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#243B63] text-base mb-2 hover:underline block">
          {title}
        </a>
      ) : (
        <div className="font-semibold text-[#243B63] text-base mb-2">{title}</div>
      )}
      {description && (
        <p className="text-sm text-[#334155] leading-6 text-justify">{description}</p>
      )}
      {children}
    </div>
  );
}

interface ReferenceGroupCardProps {
  title: string;
  children: React.ReactNode;
}

export function ReferenceGroupCard({ title, children }: ReferenceGroupCardProps) {
  return (
    <SubCard>
      <h4 className="font-bold text-[#2E3F73] text-lg mb-4">{title}</h4>
      <div className="space-y-4">
        {children}
      </div>
    </SubCard>
  );
}

interface ReferencesSectionProps {
  tipText?: string;
  regulationTitle?: string;
  regulationContent?: React.ReactNode;
  newsTitle?: string;
  newsContent?: React.ReactNode;
  children?: React.ReactNode;
}

export function ReferencesSection({
  tipText,
  regulationTitle = '法规 / 政策文件',
  regulationContent,
  newsTitle = '新闻 / 执法动态',
  newsContent,
  children,
  sectionId
}: ReferencesSectionProps & { sectionId?: string }) {
  return (
    <SectionCard title="重要资讯" id={sectionId}>
      {children || (
        <>
          <div className="pb-6">
            <h3 className="text-lg font-bold text-[#2E3F73] mb-4">{regulationTitle}</h3>
            {tipText && (
              <div className="bg-[#E8EDF5] border border-[#D8DDED] rounded-lg p-4 mb-6">
                <p className="text-sm text-[#64748B] leading-7">{tipText}</p>
              </div>
            )}
            {regulationContent}
          </div>
          <div className="mt-6 pt-6 border-t border-[#D8DDED]">
            <h3 className="text-lg font-bold text-[#2E3F73] mb-3">{newsTitle}</h3>
            {newsContent}
          </div>
        </>
      )}
    </SectionCard>
  );
}
