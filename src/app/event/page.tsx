import ListLayoutComponent from '@/views/ListLayoutComponent';

const page = () => {
  const eventItems = [
    {
      eventName: 'Event 1',
      event_id: 'event1',
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
      event_id: 'event2',
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

  return <ListLayoutComponent items={eventItems} title="행사" />;
};

export default page;
