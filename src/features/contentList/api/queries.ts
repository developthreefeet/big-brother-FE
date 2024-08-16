import {
  useInfiniteQuery,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import {
  GetCollegeResData,
  GetDepartmentResData,
  GetEventDetailResData,
  GetNoticeDetailResData,
  GetNoticeResData,
} from './types';
import { AxiosError } from 'axios';
import { EVENT_API, FAQ_API, NOTICE_API, ORGANIZATION_API } from '.';

export const useGetCollege = (
  options?: UseQueryOptions<GetCollegeResData, AxiosError>,
) => {
  return useQuery({
    queryKey: ['college'],
    queryFn: ORGANIZATION_API.college,
    ...options,
  });
};

export const useGetDepartment = (
  councilName: string,
  options?: UseQueryOptions<GetDepartmentResData, AxiosError>,
) => {
  return useQuery({
    queryKey: ['department'],
    queryFn: () => ORGANIZATION_API.department(councilName),
    ...options,
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: false,
  });
};

//학교 공지 무한스크롤x
export const useGetCampusNotice = (
  campusNoticeType: string,
  options?: UseQueryOptions<GetNoticeResData, AxiosError>,
) => {
  return useQuery({
    queryKey: ['campusNotice', campusNoticeType],
    queryFn: async ({ pageParam }) => {
      const result = await NOTICE_API.campusNotice(
        campusNoticeType,
        pageParam as number,
        6,
        '',
      );
      return result;
    },
    ...options,
  });
};

//학교 공지 무한스크롤용
export const useGetInfiniteCampusNotice = (campusNoticeType: string) => {
  return useInfiniteQuery({
    queryKey: ['infiniteCampusNotice', campusNoticeType],
    queryFn: async ({ pageParam }) => {
      const result = await NOTICE_API.campusNotice(
        campusNoticeType,
        pageParam as number,
        6,
        '',
      );
      return result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.content.length < 6) return undefined;
      return lastPage.number + 1;
    },
  });
};

//학교 공지 detail
export const useGetCampusNoticeDetail = (
  campusNoticeId: number,
  options?: UseQueryOptions<GetNoticeDetailResData, AxiosError>,
) => {
  return useQuery({
    queryKey: ['campusNoticeDetail', campusNoticeId],
    queryFn: () => NOTICE_API.campusNoticeDetail(campusNoticeId),
    ...options,
  });
};

//자치단체 공지
export const useGetNotice = (affiliation: string) => {
  return useInfiniteQuery({
    queryKey: ['infiniteNotice', affiliation],
    queryFn: async ({ pageParam }) => {
      const result = await NOTICE_API.notice(
        affiliation,
        pageParam as number,
        6,
        '',
      );
      return result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.content.length < 6) return undefined;
      return lastPage.number + 1;
    },
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
      const data = await NOTICE_API.noticeDetail(noticeId);
      return data;
    },
    ...options,
  });
};

export const useGetEvent = (affiliation: string) => {
  return useInfiniteQuery({
    queryKey: ['event', affiliation],
    queryFn: async ({ pageParam }) => {
      const result = await EVENT_API.event(
        affiliation,
        pageParam as number,
        6,
        '',
      );
      return result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.content.length < 6) return undefined;
      return lastPage.number + 1;
    },
  });
};

export const useGetEventDetail = (
  eventId: number,
  options?: UseQueryOptions<GetEventDetailResData, AxiosError>,
) => {
  return useQuery({
    queryKey: ['eventDetail', eventId],
    queryFn: async () => {
      const data = await EVENT_API.eventDetail(eventId);
      return data;
    },
    ...options,
  });
};

export const useGetFaq = (affiliation: string) => {
  return useInfiniteQuery({
    queryKey: ['faq', affiliation],
    queryFn: async ({ pageParam }) => {
      const result = await FAQ_API.faq(affiliation, pageParam as number, 6, '');
      return result;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.content.length < 6) return undefined;
      return lastPage.number + 1;
    },
  });
};
