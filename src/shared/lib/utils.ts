import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  EventItem,
  ListItem,
  NoticeItem,
  ProceedingItem,
  RuleItem,
  TransactionItem,
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

/**각 데이터 타입 가드 */
const isEventList = (item: ListItem): item is EventItem => {
  return (item as EventItem).eventName !== undefined;
};

const isNoticeList = (item: ListItem): item is NoticeItem => {
  return (item as NoticeItem).notice_title !== undefined;
};

const isProceedingList = (item: ListItem): item is ProceedingItem => {
  return (item as ProceedingItem).proceeding_title !== undefined;
};

const isRuleList = (item: ListItem): item is RuleItem => {
  return (item as RuleItem).rule_title !== undefined;
};

/**ListComponent를 위한 각 데이터 title명 반환 함수 */
export const getTitle = (item: ListItem): string => {
  if (isEventList(item)) return item.eventName;
  if (isNoticeList(item)) return item.notice_title;
  if (isProceedingList(item)) return item.proceeding_title;
  if (isRuleList(item)) return item.rule_title;
  return '';
};

/**ListComponent에서 title 길이가 길면 잘라주는 함수 */
export const truncateTitle = (title: string, maxLength: number) => {
  if (title.length > maxLength) {
    return `${title.substring(0, maxLength)}...`;
  }
  return title;
};

/**ListComponent를 위한 각 데이터 id명 반환 함수 */
export const getId = (item: ListItem): string => {
  if (isEventList(item)) return item.event_id;
  if (isNoticeList(item)) return item.notice_id;
  if (isProceedingList(item)) return item.proceeding_id;
  if (isRuleList(item)) return item.rule_id;
  return '';
};

/**commonDetail 페이지를 위한 각 데이터 content 반환 함수 */
export const getContent = (item: ListItem): string => {
  if (isEventList(item)) return item.content;
  if (isNoticeList(item)) return item.notice_content;
  return '';
};

/** 입/출금내역 총 거래 계산 함수 */
export const calculateTotals = (items: TransactionItem[]) => {
  let totalDeposit = 0;
  let totalWithdraw = 0;

  items.forEach((item) => {
    if (item.deposit) {
      totalDeposit += parseInt(item.deposit.replace(/,/g, ''), 10);
    }
    if (item.withdraw) {
      totalWithdraw += parseInt(item.withdraw.replace(/,/g, ''), 10);
    }
  });

  return {
    totalDeposit,
    totalWithdraw,
  };
};
