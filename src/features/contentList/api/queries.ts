import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { GetCollegeResData, GetDepartmentResData } from './types';
import { AxiosError } from 'axios';
import { ORGANIZATION_API } from '.';

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
