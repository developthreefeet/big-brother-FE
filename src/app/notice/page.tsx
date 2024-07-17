import ListLayoutComponent from '@/views/ListLayoutComponent';

const page = () => {
  const noticeItems = [
    {
      eventName: '공지 1',
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
      eventName: '공지 2',
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
      eventName: '공지 3',
      target: 'Target 3',
      content: 'Content 3',
      start_date: '2024-08-01',
      end_date: '2024-08-02',
      affiliation: 'Affiliation 3',
      user_id: 'user3',
      create_at: '2024-08-03T12:00:00Z',
      update_at: '2024-08-03T12:00:00Z',
    },
  ];

  return <ListLayoutComponent items={noticeItems} title="공지사항" />;
};

export default page;
