'use client';

import { ListItem } from '@/shared/types/type';
import ListComponent from '@/widgets/ListComponent';
import OrganizationSelectComponent from '@/widgets/OrganizationSelectComponent';
import Title from '@/widgets/Title';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelectStore } from '@/shared/lib/store';

interface ListLayoutComponentProps {
  items: ListItem[];
  title: string;
}

const ListLayoutComponent = ({ items, title }: ListLayoutComponentProps) => {
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
  }, [selectedValue]);

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-3">
        <Title text={title} />
        <OrganizationSelectComponent />
        <ListComponent list={items} />
      </div>
    </div>
  );
};

export default ListLayoutComponent;
