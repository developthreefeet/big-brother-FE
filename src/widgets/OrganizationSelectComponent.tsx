'use client';

import { usePathname } from 'next/navigation';
import SelectComponent from './SelectComponent';

const OrganizationSelectComponent = () => {
  const pathname = usePathname();

  const organizationItems = pathname.includes('notice')
    ? ['학교/일반', '총학생회', '단과대', '학과']
    : ['총학생회', '단과대', '학과'];
  return (
    <div className="flex flex-col space-y-1">
      <p>구분을 선택해주세요.</p>
      <SelectComponent items={organizationItems} />
    </div>
  );
};

export default OrganizationSelectComponent;
