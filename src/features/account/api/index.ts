import { instance } from '@/shared/api/instance';
import { PostVerificationResData, VerificationData } from './types';

export const JOIN_API = {
  //이메일 중복 검사 api
  verification: (email: string) =>
    instance.get<PostVerificationResData>(
      '/members/sign-up/emails/verification',
      {
        params: {
          'member-email': email,
        },
      },
    ),
  //이메일 코드 검증 api
  //회원가입 api
};
