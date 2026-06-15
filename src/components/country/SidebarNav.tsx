'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { productAccessOverviewMap } from '../../data/productAccessOverview';

interface NavItem {
  id: string;
  label: string;
}

/** 通用导航项（不含产品准入速览的国家不会显示该项） */
function getNavItems(countryId: string): NavItem[] {
  const hasOverview = countryId in productAccessOverviewMap;

  const items: NavItem[] = [];
  if (hasOverview) {
    items.push({ id: 'product-access-overview', label: '产品准入速览' });
  }
  items.push(
    { id: 'overview', label: '本季监管动态' },
    { id: 'regulatory-system', label: '监管体系' },
    { id: 'product-access', label: '产品监管口径' },
    { id: 'licenses', label: '合规资质' },
    { id: 'tax', label: '税收政策' },
  );
  // Paraguay has SalesRulesSection
  if (countryId === 'paraguay') {
    items.push({ id: 'sales-rules', label: '销售规则' });
  }
  items.push(
    { id: 'operation-rules', label: '市场运营规范' },
    { id: 'trend', label: '监管趋势' },
    { id: 'red-lines', label: '合规红线清单' },
    { id: 'resources', label: '重要资讯' },
  );
  return items;
}

interface SidebarNavProps {
  countryId?: string;
}

export default function SidebarNav({ countryId = 'china' }: SidebarNavProps) {
  const [activeId, setActiveId] = useState<string>('');
  const isClickScrolling = useRef(false);
  const navItems = getNavItems(countryId);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visibleEntries = entries.filter(e => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-10% 0px -60% 0px',
        threshold: 0,
      }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const handleClick = useCallback((id: string) => {
    setActiveId(id);
    isClickScrolling.current = true;

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  }, []);

  return (
    <nav className="hidden lg:block w-[240px] flex-shrink-0">
      <div className="sticky top-8">
        <div className="bg-white border border-[#D8DDED] rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-bold text-[#243B63] mb-3 pb-2 border-b border-[#E8EDF5]">页面导航</h3>
          <ul className="space-y-0.5">
            {navItems.map(({ id, label }, index) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors cursor-pointer flex items-center gap-2 ${
                    activeId === id
                      ? 'bg-[#E8EDF5] text-[#2E3F73] font-semibold'
                      : 'text-[#64748B] hover:text-[#2E3F73] hover:bg-[#F3F5FB]'
                  }`}
                >
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#E8EDF5] text-[#64748B] text-xs font-medium flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="whitespace-nowrap">{label}</span>
                </button>
              </li>
            ))}
            <li className="mt-3 pt-3 border-t border-[#E8EDF5]">
              <Link
                href="/"
                className="w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors flex items-center gap-2 text-[#64748B] hover:text-[#2E3F73] hover:bg-[#F3F5FB]"
              >
                <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 text-[#64748B]">
                  ←
                </span>
                <span>返回首页</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
