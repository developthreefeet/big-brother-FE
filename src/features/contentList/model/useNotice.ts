'use client';

import { usePathname } from 'next/navigation';
import { useGetInfiniteCampusNotice, useGetNotice } from '../api/queries';

const useNotice = () => {
  const pathname = usePathname();

  if (pathname.includes('general')) {
    return useGetInfiniteCampusNotice('일반공지');
  } else if (pathname.includes('academic')) {
    return useGetInfiniteCampusNotice('학사공지');
  } else {
    let affiliation = '';
    if (pathname.includes('studentCouncil')) {
      affiliation = '총학';
    } else if (pathname.includes('college')) {
      affiliation = '단과대';
    } else if (pathname.includes('department')) {
      affiliation = '학과';
    }

    return useGetNotice(affiliation);
  }
};

export default useNotice;
