import { ListItem } from '@/shared/types/type';
import {
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  Pagination,
} from '@/shared/ui/ui/pagination';
import ListComponent from '@/widgets/ListComponent';
import OrganizationTitleSelectComponent from '@/widgets/OrganizationSelectComponent';
import Title from '@/widgets/Title';
import React from 'react';

interface ListLayoutComponentProps {
  items: ListItem[];
  title: string;
}

const ListLayoutComponent = ({ items, title }: ListLayoutComponentProps) => {
  return (
    <div className="flex flex-col space-y-96">
      <div className="flex flex-col space-y-3">
        <Title text={title} />
        <OrganizationTitleSelectComponent />
        <ListComponent list={items} />
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ListLayoutComponent;
