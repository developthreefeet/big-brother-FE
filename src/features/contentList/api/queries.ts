import {
  QueryFunctionContext,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import {
  GetCampusNoticeResData,
  GetCollegeResData,
  GetDepartmentResData,
} from './types';
import { AxiosError } from 'axios';
import { NOTICE_API, ORGANIZATION_API } from '.';

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

//무한스크롤x
export const useGetCampusNotice = (
  campusNoticeType: string,
  options?: UseQueryOptions<GetCampusNoticeResData, AxiosError>,
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

//무한스크롤용
export const useGetInfiniteCampusNotice = (
  campusNoticeType: string,
  options?: UseInfiniteQueryOptions<GetCampusNoticeResData, AxiosError>,
) => {
  return useInfiniteQuery({
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
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.data.content.length < 6) return undefined;
      return lastPage.data.number + 1;
    },
    ...options,
  });
};
