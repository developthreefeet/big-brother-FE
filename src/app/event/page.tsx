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

const page = () => {
  const eventItems = [
    {
      eventName: 'Event 1',
      target: 'Target 1',
      content: 'Content 1',
      start_date: '2024-07-01',
      end_date: '2024-07-02',
      affiliation: 'Affiliation 1',
      user_id: 'user1',
      create_at: '2024-07-01T12:00:00Z',
      update_at: '2024-07-01T12:00:00Z',
    },
    {
      eventName: 'Event 2',
      target: 'Target 2',
      content: 'Content 2',
      start_date: '2024-08-01',
      end_date: '2024-08-02',
      affiliation: 'Affiliation 2',
      user_id: 'user2',
      create_at: '2024-08-01T12:00:00Z',
      update_at: '2024-08-01T12:00:00Z',
    },
  ];

  return (
    <div className="flex flex-col space-y-96">
      <div className="flex flex-col space-y-3">
        <Title text="행사" />
        <OrganizationTitleSelectComponent />
        <ListComponent list={eventItems} />
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

export default page;
