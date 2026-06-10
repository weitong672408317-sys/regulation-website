'use client';

import { useEffect } from 'react';

export default function ScrollToTop({ countryId }: { countryId: string }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countryId]);

  return null;
}
