import ListLayoutComponent from '@/views/ListLayoutComponent';
import React from 'react';

const page = () => {
  const proceedingItems = [
    {
      eventName: '회의록 1',
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
      eventName: '회의록 2',
      target: 'Target 2',
      content: 'Content 2',
      start_date: '2024-08-01',
      end_date: '2024-08-02',
      affiliation: 'Affiliation 2',
      user_id: 'user2',
      create_at: '2024-08-01T12:00:00Z',
      update_at: '2024-08-01T12:00:00Z',
    },
    {
      eventName: '회의록 3',
      target: 'Target 3',
      content: 'Content 3',
      start_date: '2024-08-01',
      end_date: '2024-08-02',
      affiliation: 'Affiliation 3',
      user_id: 'user3',
      create_at: '2024-08-03T12:00:00Z',
      update_at: '2024-08-03T12:00:00Z',
    },
    {
      eventName: '회의록 4',
      target: 'Target 4',
      content: 'Content 4',
      start_date: '2024-08-01',
      end_date: '2024-08-02',
      affiliation: 'Affiliation 4',
      user_id: 'user4',
      create_at: '2024-08-03T12:00:00Z',
      update_at: '2024-08-03T12:00:00Z',
    },
  ];

  return <ListLayoutComponent items={proceedingItems} title="회의록" />;
};

export default page;
