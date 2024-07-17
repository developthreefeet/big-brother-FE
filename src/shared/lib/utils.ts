import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  EventList,
  ListItem,
  NoticeList,
  ProceedingList,
  RuleList,
} from '../types/type';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**날짜 데이터 포맷 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
};

/**ListComponent를 위한 title 반환 함수 관련 함수들*/
const isEventList = (item: ListItem): item is EventList => {
  return (item as EventList).eventName !== undefined;
};

const isNoticeList = (item: ListItem): item is NoticeList => {
  return (item as NoticeList).notice_title !== undefined;
};

const isProceedingList = (item: ListItem): item is ProceedingList => {
  return (item as ProceedingList).proceeding_title !== undefined;
};

const isRuleList = (item: ListItem): item is RuleList => {
  return (item as RuleList).rule_title !== undefined;
};

// 속성 이름을 반환하는 함수
export const getTitle = (item: ListItem): string => {
  if (isEventList(item)) return item.eventName;
  if (isNoticeList(item)) return item.notice_title;
  if (isProceedingList(item)) return item.proceeding_title;
  if (isRuleList(item)) return item.rule_title;
  return '';
};
