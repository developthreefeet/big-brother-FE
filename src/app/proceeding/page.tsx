import ListLayoutComponent from '@/widgets/ListLayoutComponent';
import React from 'react';

const page = () => {
  const proceedingItems = [
    {
      proceeding_id: 'proceeding1',
      proceeding_title: '회의록 1',
      meeting_date: '2024-07-01T10:00:00Z',
      meeting_place: '회의실 1',
      participant: ['user1', 'user2'],
      non_participant: ['user3'],
      item: '안건 1',
      content: '회의 내용 1',
      affiliation: 'Affiliation 1',
      is_public: true,
      user_id: 'user1',
      create_at: '2024-07-01T12:00:00Z',
      update_at: '2024-07-01T12:00:00Z',
    },
    {
      proceeding_id: 'proceeding2',
      proceeding_title: '회의록 2',
      meeting_date: '2024-08-01T11:00:00Z',
      meeting_place: '회의실 2',
      participant: ['user3', 'user4'],
      non_participant: ['user1'],
      item: '안건 2',
      content: '회의 내용 2',
      affiliation: 'Affiliation 2',
      is_public: false,
      user_id: 'user2',
      create_at: '2024-08-01T12:00:00Z',
      update_at: '2024-08-01T12:00:00Z',
    },
    {
      proceeding_id: 'proceeding3',
      proceeding_title: '회의록 3',
      meeting_date: '2024-09-01T12:00:00Z',
      meeting_place: '회의실 3',
      participant: ['user2', 'user4'],
      non_participant: ['user3'],
      item: '안건 3',
      content: '회의 내용 3',
      affiliation: 'Affiliation 3',
      is_public: true,
      user_id: 'user3',
      create_at: '2024-09-01T12:00:00Z',
      update_at: '2024-09-01T12:00:00Z',
    },
  ];

  return <ListLayoutComponent items={proceedingItems} title="회의록" />;
};

export default page;
