'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getId } from '../lib/utils';
import { ListItem } from '../types/type';
const useCommonDetail = (items: ListItem[]) => {
  const pathname = usePathname();
  const id = pathname.split('/')[3];
  const item = items.find((item) => getId(item) === id);
  const router = useRouter();

  useEffect(() => {
    if (!item) {
      router.replace('/404');
    }
  }, [item]);

  return item;
};

export default useCommonDetail;
