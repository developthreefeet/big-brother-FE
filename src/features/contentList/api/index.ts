import { instance } from '@/shared/api/instance';
import {
  GetCollegeResData,
  GetDepartmentResData,
  GetEventResData,
  GetFaqResData,
  GetNoticeResData,
  GetRuleResData,
  GetProceedingResData,
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

  //자치단체 공지사항 리스트 api
  notice: async (
    affiliation: string,
    page?: number,
    size?: number,
    search?: string,
  ) => {
    try {
      const response = await instance.get<ApiResponse<GetNoticeResData>>(
        '/notice',
        {
          params: {
            affiliation,
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
};

//행사 리스트 api
export const EVENT_API = {
  event: async (
    affiliation: string,
    page?: number,
    size?: number,
    search?: string,
  ) => {
    try {
      const response = await instance.get<ApiResponse<GetEventResData>>(
        '/event',
        {
          params: {
            affiliation,
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
};

//faq 리스트 api
export const FAQ_API = {
  faq: async (
    affiliation: string,
    page?: number,
    size?: number,
    search?: string,
  ) => {
    try {
      const response = await instance.get<ApiResponse<GetFaqResData>>('/faq', {
        params: {
          affiliation,
          page,
          size,
          search,
        },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};

export const PROCEEDING_API = {
  proceeding: async (
    affiliation: string,
    page?: number,
    size?: number,
    search?: string,
  ) => {
    try {
      const response = await instance.get<ApiResponse<GetRuleResData>>(
        '/rule',
        {
          params: {
            affiliation,
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
};
//학칙/회칙 리스트 api
export const RULE_API = {
  rule: async (
    affiliation: string,
    page?: number,
    size?: number,
    search?: string,
  ) => {
    try {
      const response = await instance.get<ApiResponse<GetProceedingResData>>(
        '/meetings',
        {
          params: {
            affiliation,
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
};
