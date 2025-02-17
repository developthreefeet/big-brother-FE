import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  GetNoticeDetailResData,
  GetEventDetailResData,
  GetTransactionDetailResData,
  GetRuleDetailResData,
  GetProceedingDetailResData,
} from './types';
import {
  EVENT_DETAIL_API,
  NOTICE_DETAIL_API,
  PROCEEDING_DETAIL_API,
  RULE_DETAIL_API,
  TRANSACTION_DETAIL_API,
} from '.';

//학교 공지 detail
export const useGetCampusNoticeDetail = (
  campusNoticeId: number,
  options?: UseQueryOptions<GetNoticeDetailResData, AxiosError>,
) => {
  return useQuery({
    queryKey: ['campusNoticeDetail', campusNoticeId],
    queryFn: () => NOTICE_DETAIL_API.campusNoticeDetail(campusNoticeId),
    ...options,
  });
};

//자치단체 공지 detail
export const useGetNoticeDetail = (
  noticeId: number,
  options?: UseQueryOptions<GetNoticeDetailResData, AxiosError>,
) => {
  return useQuery({
    queryKey: ['campusNoticeDetail'],
    queryFn: async () => {
      const data = await NOTICE_DETAIL_API.noticeDetail(noticeId);
      return data;
    },
    ...options,
  });
};

//행사 detail
export const useGetEventDetail = (
  eventId: number,
  options?: UseQueryOptions<GetEventDetailResData, AxiosError>,
) => {
  return useQuery({
    queryKey: ['eventDetail', eventId],
    queryFn: async () => {
      const data = await EVENT_DETAIL_API.eventDetail(eventId);
      return data;
    },
    ...options,
  });
};

export const useGetTransactionDetail = (
  affiliation: string,
  year: number,
  month: number,
  options?: UseQueryOptions<GetTransactionDetailResData[], AxiosError>,
) => {
  return useQuery({
    queryKey: ['transactionDetail', affiliation, year, month],
    queryFn: async () => {
      const data = await TRANSACTION_DETAIL_API.transaction(
        affiliation,
        year,
        month,
      );
      return data;
    },
    ...options,
  });
};

export const useGetProceedingDetail = (
  proceedingId: number,
  options?: UseQueryOptions<GetProceedingDetailResData, AxiosError>,
) => {
  return useQuery({
    queryKey: ['proceedingDetail', proceedingId],
    queryFn: async () => {
      const data = await PROCEEDING_DETAIL_API.proceedingDetail(proceedingId);
      return data;
    },
    ...options,
  });
};

export const useGetRuleDetail = (
  ruleId: number,
  options?: UseQueryOptions<GetRuleDetailResData, AxiosError>,
) => {
  return useQuery({
    queryKey: ['ruleDetail', ruleId],
    queryFn: async () => {
      const data = await RULE_DETAIL_API.ruleDetail(ruleId);
      return data;
    },
    ...options,
  });
};
