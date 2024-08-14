import { instance } from '@/shared/api/instance';
import {
  GetEmailCodeVerificationResData,
  GetProfileResData,
  GetVerificationResData,
  PostEmailCodeResData,
  PostJoinProps,
  PostJoinResData,
  PostLoginProps,
  PostLoginResData,
} from './types';

export const JOIN_API = {
  //이메일 중복 검사 api
  verification: async (email: string) => {
    try {
      const response = await instance.get<GetVerificationResData>(
        '/members/sign-up/emails/verification',
        {
          params: {
            'member-email': email,
          },
        },
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  //이메일 코드 보내는 api
  emailCode: async (email: string) => {
    try {
      const response = await instance.post<PostEmailCodeResData>(
        '/members/sign-up/emails/request-code',
        {
          email: email,
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  //이메일 코드 인증하는 api
  emailCodeVerification: async (email: string, code: string) => {
    try {
      const response = await instance.get<GetEmailCodeVerificationResData>(
        '/members/sign-up/emails/verifications',
        {
          params: {
            email: email,
            code: code,
          },
        },
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  //회원가입 api
  join: async (props: PostJoinProps) => {
    try {
      const response = await instance.post<PostJoinResData>(
        '/members/sign-up',
        {
          ...props,
          is_active: '',
          create_at: '',
          update_at: '',
          role: 'ROLE_USER',
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const LOGIN_API = {
  //로그인 api
  login: async (props: PostLoginProps) => {
    try {
      const response = await instance.post<PostLoginResData>(
        '/members/sign-in',
        {
          ...props,
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export const MYPAGE_API = {
  //유저 상세 정보 가져오는 api
  profile: async () => {
    try {
      const response = await instance.get<GetProfileResData>('/members');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  //유저 정보 수정 api
};
