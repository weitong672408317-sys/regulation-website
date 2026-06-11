'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { baseCountries } from '../../../data/mockData';

interface PrefetchLinksProps {
  currentCountryId: string;
}

export default function PrefetchLinks({ currentCountryId }: PrefetchLinksProps) {
  const router = useRouter();

  useEffect(() => {
    // Use requestIdleCallback to prefetch only when browser is idle
    // This avoids competing with the current page's rendering
    const prefetchOtherPages = () => {
      const otherCountries = baseCountries.filter(c => c.id !== currentCountryId);
      // Prefetch one at a time with delay to avoid network congestion
      let index = 0;
      const prefetchNext = () => {
        if (index < otherCountries.length) {
          router.prefetch(`/country/${otherCountries[index].id}`);
          index++;
          setTimeout(prefetchNext, 500);
        }
      };

      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          setTimeout(prefetchNext, 1000);
        });
      } else {
        setTimeout(prefetchNext, 2000);
      }
    };

    prefetchOtherPages();
  }, [currentCountryId, router]);

  return null;
}
