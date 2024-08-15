import { GetNoticeDetailResData } from '@/features/contentList/api/types';

//ListComponent를 위한 임시 타입 지정
export interface EventItem {
  eventName: string;
  event_id: string;
  target: string;
  content: string;
  start_date: string;
  end_date: string;
  affiliation: string;
  user_id: string;
  create_at: string;
  update_at: string;
}

export interface NoticeItem {
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

export interface ProceedingItem {
  proceeding_id: string;
  proceeding_title: string;
  meeting_date: string;
  meeting_place: string;
  participant: string[];
  non_participant: string[];
  item: string;
  content: string;
  affiliation: string;
  is_public: boolean;
  user_id: string;
  create_at: string;
  update_at: string;
}

export interface RuleItem {
  rule_title: string;
  create_at: string;
  update_at: string;
  rule_id: string;
}

export interface FaqItem {
  faq_id: string;
  faq_name: string;
  faq_content: string;
}

export type ListItem = EventItem | NoticeItem | ProceedingItem | RuleItem;

export interface ListComponentProps {
  list: ListItem[];
}

export interface TransactionItem {
  trans_id: string;
  corporate_number: string;
  bank_account_number: string;
  trans_direction: string;
  deposit: string;
  withdraw: string;
  balance: string;
  trans_date: string;
  trans: string;
}

export interface TransactionListComponentProps {
  list: TransactionItem[];
}

//User 타입 임시 지정
export interface User {
  user_id: string;
  role: string;
  email: string;
  password: string;
  name: string;
  college: string;
  department: string;
  is_active: boolean;
  create_at: string;
  update_at: string;
}

/////////////////////////

export type DetailItem = GetNoticeDetailResData;
