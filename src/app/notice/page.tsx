import ListLayoutComponent from '@/widgets/ListLayoutComponent';

const page = () => {
  const noticeItems = [
    {
      notice_title: '공지 1',
      notice_id: 'notice1',
      notice_type: 'Type 1',
      create_at: '2024-07-01T12:00:00Z',
      update_at: '2024-07-01T12:00:00Z',
      notice_content: 'Content 1',
      file_upload: 'file1.pdf',
      user_id: 'user1',
      affiliation: 'Affiliation 1',
    },
    {
      notice_title: '공지 2',
      notice_id: 'notice2',
      notice_type: 'Type 2',
      create_at: '2024-08-01T12:00:00Z',
      update_at: '2024-08-01T12:00:00Z',
      notice_content: 'Content 2',
      file_upload: 'file2.pdf',
      user_id: 'user2',
      affiliation: 'Affiliation 2',
    },
    {
      notice_title: '공지 3',
      notice_id: 'notice3',
      notice_type: 'Type 3',
      create_at: '2024-08-03T12:00:00Z',
      update_at: '2024-08-03T12:00:00Z',
      notice_content: 'Content 3',
      file_upload: 'file3.pdf',
      user_id: 'user3',
      affiliation: 'Affiliation 3',
    },
  ];

  return <ListLayoutComponent items={noticeItems} title="공지사항" />;
};

export default page;
