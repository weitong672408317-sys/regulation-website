'use client';

import { useEffect } from 'react';
import { baseCountries } from '../../../data/mockData';

interface PrefetchLinksProps {
  currentCountryId: string;
}

export default function PrefetchLinks({ currentCountryId }: PrefetchLinksProps) {
  useEffect(() => {
    baseCountries.forEach(c => {
      if (c.id !== currentCountryId) {
        fetch(`/country/${c.id}`, { method: 'HEAD' });
      }
    });
  }, [currentCountryId]);

  return null;
}
