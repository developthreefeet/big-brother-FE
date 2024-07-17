//ListComponent를 위한 임시 타입 지정
export interface EventList {
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

export interface NoticeList {
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

export interface ProceedingList {
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

export interface RuleList {
  rule_title: string;
  create_at: string;
}

export type ListItem = EventList | NoticeList | ProceedingList | RuleList;

export interface ListComponentProps {
  list: ListItem[];
}
