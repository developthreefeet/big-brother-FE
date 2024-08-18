import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { deleteCookie } from 'cookies-next';
import { GetTransactionDetailResData } from '@/features/content/api/types';

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

/**ListComponent에서 title 길이가 길면 잘라주는 함수 */
export const truncateTitle = (title: string, maxLength: number) => {
  if (title.length > maxLength) {
    return `${title.substring(0, maxLength)}...`;
  }
  return title;
};

/** 입/출금내역 총 거래 계산 함수 */
export const calculateTotals = (items: GetTransactionDetailResData[]) => {
  let totalDeposit = 0;
  let totalWithdraw = 0;

  items.forEach((item) => {
    if (item.amount > 0) {
      totalDeposit += item.amount;
    } else if (item.amount < 0) {
      totalWithdraw += -item.amount;
    }
  });

  return {
    totalDeposit,
    totalWithdraw,
  };
};

//로그아웃
export const deleteToken = () => {
  deleteCookie('accessToken');
  deleteCookie('refreshToken');
};
