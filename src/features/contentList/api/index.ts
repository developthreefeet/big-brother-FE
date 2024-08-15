import { instance } from '@/shared/api/instance';
import {
  GetCollegeResData,
  GetDepartmentResData,
  GetNoticeDetailResData,
  GetNoticeResData,
} from './types';
import { ApiResponse } from '@/shared/types/type';

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
      const response = await instance.get<ApiResponse<GetNoticeResData>>(
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
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  //학교 공지사항 detail api
  campusNoticeDetail: async (campusNoticeId: number) => {
    try {
      const response = await instance.get<ApiResponse<GetNoticeDetailResData>>(
        `/campusnotice/${campusNoticeId}`,
      );
      return response.data.data;
    } catch (error: any) {
      throw error;
    }
  },

  //자치단체 공지사항 리스트 api
  notice: async (
    affiliation: string,
    page?: number,
    size?: number,
    search?: string,
  ) => {
    try {
      const response = await instance.get<GetNoticeResData>('/notice', {
        params: {
          affiliation,
          page,
          size,
          search,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  //자치단체 공지사항 detail api
  noticeDetail: async (noticeId: number) => {
    try {
      const response = await instance.get<ApiResponse<GetNoticeDetailResData>>(
        `/notice/${noticeId}`,
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};
