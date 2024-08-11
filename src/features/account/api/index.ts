import { instance } from '@/shared/api/instance';
import { GetVerificationResData, PostEmailCodeResData } from './types';

export const JOIN_API = {
  //이메일 중복 검사 api
  verification: (email: string) =>
    instance.get<GetVerificationResData>(
      '/members/sign-up/emails/verification',
      {
        params: {
          'member-email': email,
        },
      },
    ),

  //이메일 코드 보내는 api
  emailCode: (email: string) =>
    instance.post<PostEmailCodeResData>(
      '/members/sign-up/emails/request-code',
      {
        email: email,
      },
    ),

  //이메일 코드 인증하는 api

  //회원가입 api
};
