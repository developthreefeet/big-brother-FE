import { instance } from '@/shared/api/instance';
import {
  GetCampusNoticeResData,
  GetCollegeResData,
  GetDepartmentResData,
} from './types';

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

  //학과 리스트 api
  department: async (councilName: string) => {
    try {
      const response = await instance.get<GetDepartmentResData>(
        '/members/departments',
        {
          params: {
            councilName,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const NOTICE_API = {
  //학교 공지사항 리스트 api
  campusNotice: async (
    campusNoticeType: string,
    page?: number,
    size?: number,
    search?: string,
  ) => {
    try {
      const response = await instance.get<GetCampusNoticeResData>(
        '/campusnotice',
        {
          params: {
            campusNoticeType,
            page,
            size,
            search,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
