'use client';

import { usePathname } from 'next/navigation';
import { useGetRule } from '../api/queries';

const useRule = () => {
  const pathname = usePathname();

  let affiliation = '';
  if (pathname.includes('studentCouncil')) {
    affiliation = '총학';
  } else if (pathname.includes('college')) {
    affiliation = '단과대';
  } else if (pathname.includes('department')) {
    affiliation = '학과';
  }

  return useGetRule(affiliation);
};

export default useRule;
