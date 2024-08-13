'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useJoinEmailStore } from './useJoinEmailStore';
import {
  useGetEmailCodeVerification,
  useGetVerification,
  usePostEmailCode,
} from '../api/queries';
import { toast } from '@/shared/ui/ui/use-toast';

export const useJoinEmail = () => {
  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [isDuplicationChecked, setIsDuplicationChecked] = useState(false);
  const [otpVisible, setOtpVisible] = useState(false);
  const { setVerificationComplete, setEmail, email } = useJoinEmailStore();
  const [otpInput, setOtpInput] = useState('');
  const [otpError, setOtpError] = useState(false);
  const [clickSendButton, setClickSendButton] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@mju\.ac\.kr$/;

  const emailSchema = z.object({
    email: z
      .string()
      .email({ message: '이메일 형식으로 입력해 주세요.' })
      .regex(emailRegex, { message: '@mju.ac.kr 형식이어야 합니다.' }),
  });

  const form = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });

  const {
    formState: { errors },
  } = form;

  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;
    const emailLength = form.getValues('email').length;
    const isValid = !hasErrors && emailLength > 0;

    if (isValid) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  }, [errors, form]);

  const { refetch } = useGetVerification(form.getValues('email'));

  const emailDuplicationCheck = async () => {
    const isValid = await form.trigger('email');

    if (isValid) {
      const currentEmail = form.getValues('email');
      setEmail(currentEmail);
      setClickSendButton(false);
      setOtpInput('');
      setIsEmailValid(true);

      const { isError } = await refetch();

      if (isError) {
        setIsEmailDuplicated(true);
        setIsDuplicationChecked(true);
      } else {
        setIsEmailDuplicated(false);
        setIsDuplicationChecked(true);
        setOtpVisible(false);
      }
    } else {
      setIsEmailValid(false);
    }
  };

  const emailCodeQuery = usePostEmailCode(email);

  const sendEmailCode = async () => {
    try {
      await emailCodeQuery.mutateAsync();
      setOtpVisible(true);
      setClickSendButton(true);
      toast({ description: '인증 번호가 전송되었습니다.' });
    } catch (error) {
      console.error('이메일 인증 번호 전송 실패', error);
      toast({
        variant: 'destructive',
        description: '인증 번호 전송에 실패했습니다. 관리자에게 문의하세요.',
      });
    }
  };

  const emailCodeVerificationQuery = useGetEmailCodeVerification(
    email,
    otpInput,
  );

  const handleVerifyOtp = async () => {
    try {
      const result = await emailCodeVerificationQuery.refetch();
      if (result.isSuccess) {
        setVerificationComplete(true);
        setOtpError(false);
      } else {
        setVerificationComplete(false);
        setOtpError(true);
      }
    } catch (error) {
      console.log('Invalid Email code: ', error);
    }
  };

  const router = useRouter();

  const onSubmit = (data: any) => {
    setEmail(data.email);
  };

  const moveToJoin = () => {
    router.push('/join');
  };

  return {
    form,
    isEmailValid,
    emailDuplicationCheck,
    isDuplicationChecked,
    isEmailDuplicated,
    setIsDuplicationChecked,
    otpVisible,
    handleVerifyOtp,
    setOtpVisible,
    sendEmailCode,
    setOtpInput,
    otpInput,
    otpError,
    onSubmit,
    moveToJoin,
    clickSendButton,
  };
};
