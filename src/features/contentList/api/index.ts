import { instance } from '@/shared/api/instance';
import { GetCollegeResData } from './types';

export const ORGANIZATION_API = {
  //단과대 리스트 api
  college: async () => {
    try {
      const response =
        await instance.get<GetCollegeResData>('/members/colleges');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
