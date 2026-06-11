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
    baseCountries.forEach(c => {
      if (c.id !== currentCountryId) {
        router.prefetch(`/country/${c.id}`);
      }
    });
  }, [currentCountryId, router]);

  return null;
}
