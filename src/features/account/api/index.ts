import { instance } from '@/shared/api/instance';
import {
  GetEmailCodeVerificationResData,
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
      return await instance.get<GetVerificationResData>(
        '/members/sign-up/emails/verification',
        {
          params: {
            'member-email': email,
          },
        },
      );
    } catch (error: any) {
      throw error;
    }
  },

  //이메일 코드 보내는 api
  emailCode: (email: string) =>
    instance.post<PostEmailCodeResData>(
      '/members/sign-up/emails/request-code',
      {
        email: email,
      },
    ),

  //이메일 코드 인증하는 api
  emailCodeVerification: async (email: string, code: string) => {
    try {
      return await instance.get<GetEmailCodeVerificationResData>(
        '/members/sign-up/emails/verifications',
        {
          params: {
            email: email,
            code: code,
          },
        },
      );
    } catch (error: any) {
      throw error;
    }
  },

  //회원가입 api
  join: (props: PostJoinProps) =>
    instance.post<PostJoinResData>('/members/sign-up', {
      ...props,
      is_active: '',
      create_at: '',
      update_at: '',
      role: 'ROLE_USER',
    }),
};

export const LOGIN_API = {
  //로그인 api
  login: (props: PostLoginProps) =>
    instance.post<PostLoginResData>('/members/sign-in', {
      ...props,
    }),
};
