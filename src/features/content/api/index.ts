import { instance } from '@/shared/api/instance';
import { ApiResponse } from '@/shared/types/type';
import {
  GetNoticeDetailResData,
  GetEventDetailResData,
  GetProceedingDetailResData,
} from './types';

export const NOTICE_DETAIL_API = {
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

export const EVENT_DETAIL_API = {
  eventDetail: async (eventId: number) => {
    try {
      const response = await instance.get<ApiResponse<GetEventDetailResData>>(
        `/event/${eventId}`,
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};

export const PROCEEDING_DETAIL_API = {
  proceedingDetail: async (eventId: number) => {
    try {
      const response = await instance.get<
        ApiResponse<GetProceedingDetailResData>
      >(`/meetings/${eventId}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};
