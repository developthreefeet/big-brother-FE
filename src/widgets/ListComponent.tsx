import { formatDate } from '@/shared/lib/utils';

//데이터별로 type 해놔야 함
interface EventList {
  eventName: string;
  target: string;
  content: string;
  start_date: string;
  end_date: string;
  affiliation: string;
  user_id: string;
  create_at: string;
  update_at: string;
}

interface NoticeList {
  notice_title: string;
  notice_id: string;
  notice_type: string;
  create_at: string;
  update_at: string;
  notice_content: string;
  file_upload: string;
  user_id: string;
  affiliation: string;
}

interface ProceedingList {
  proceeding_id: string;
  proceeding_title: string;
  meeting_date: string;
  meeting_place: string;
  participant: string;
  non_participant: string;
  item: string;
  content: string;
  affiliation: string;
  is_public: boolean;
  user_id: string;
  create_at: string;
  update_at: string;
}

interface RuleList {
  rule_title: string;
  create_at: string;
}

type ListItem = EventList | NoticeList | ProceedingList | RuleList;

interface ListComponentProps {
  list: ListItem[];
}

const ListComponent = ({ list }: ListComponentProps) => {
  return (
    <div className="flex flex-col space-y-2 ">
      {list.map((item, index) => (
        <div key={index} className=" border-b py-3">
          <div className="flex flex-col space-y-1 hover:opacity-50 cursor-pointer">
            {/*<p className="text-sm font-bold">{item.eventName}</p>*/}
            <p className="text-xs text-gray-200">
              {formatDate(item.create_at)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListComponent;
