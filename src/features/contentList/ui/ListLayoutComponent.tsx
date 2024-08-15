'use client';

import { ListItem } from '@/shared/types/type';
import OrganizationSelectComponent from '@/widgets/OrganizationSelectComponent';
import Title from '@/widgets/Title';
import useOrganizationRouter from '@/features/contentList/model/useOrganizationRouter';
import ListComponent from '@/features/contentList/ui/ListComponent';

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
