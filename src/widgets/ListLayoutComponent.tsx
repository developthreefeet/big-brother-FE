'use client';

import { ListItem } from '@/shared/types/type';
import ListComponent from '@/widgets/ListComponent';
import OrganizationSelectComponent from '@/widgets/OrganizationSelectComponent';
import Title from '@/widgets/Title';
import useOrganizationRouter from '@/shared/hooks/useOrganizationRouter';

interface ListLayoutComponentProps {
  items: ListItem[];
  title: string;
}

const ListLayoutComponent = ({ items, title }: ListLayoutComponentProps) => {
  useOrganizationRouter();

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
