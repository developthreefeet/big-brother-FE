'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSelectStore } from '@/shared/lib/store';

const useOrganizationRouter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const content = pathname.split('/').slice(0, 2).join('/');
  const { selectedValue, setSelectedValue } = useSelectStore();

  useEffect(() => {
    if (pathname.includes('studentCouncil')) {
      setSelectedValue('총학생회');
    } else if (pathname.includes('college')) {
      setSelectedValue('단과대');
    } else if (pathname.includes('department')) {
      setSelectedValue('학과');
    }
  }, [pathname, setSelectedValue]);

  useEffect(() => {
    let path = '';
    switch (selectedValue) {
      case '총학생회':
        path = `${content}/studentCouncil`;
        break;
      case '단과대':
        path = `${content}/college`;
        break;
      case '학과':
        path = `${content}/department`;
        break;
      default:
        path = '/';
    }
    router.push(path);
  }, [selectedValue, content, router]);

  return;
};

export default useOrganizationRouter;
