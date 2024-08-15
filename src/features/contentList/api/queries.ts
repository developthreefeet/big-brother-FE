import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { GetCollegeResData } from './types';
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
