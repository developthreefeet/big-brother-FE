'use client';

import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';

type useIntersectionObserverProps = {
  threshold?: number;
  hasNextPage: boolean;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
};

export const useIntersectionObserver = ({
  threshold = 0,
  hasNextPage,
  fetchNextPage,
}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null);
  const callback = useCallback<IntersectionObserverCallback>(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
    },
    [fetchNextPage, hasNextPage],
  );

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(callback, { threshold });

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [callback, threshold, target]);

  return { setTarget };
};
