'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useJoinEmailStore } from './useJoinEmailStore';
import { useGetVerification, usePostEmailCode } from '../api/queries';

export const useJoinEmail = () => {
  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [isDuplicationChecked, setIsDuplicationChecked] = useState(false);
  const [otpVisible, setOtpVisible] = useState(false);
  const { setVerificationComplete, setEmail, email } = useJoinEmailStore();
  const [otpInput, setOtpInput] = useState('');
  const [otpError, setOtpError] = useState(false);

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

  const isEmailValid = !errors.email && form.getValues('email').length > 0;

  const verificationQuery = useGetVerification(email);

  const emailDuplicationCheck = async () => {
    const currentEmail = form.getValues('email');
    setEmail(currentEmail);

    if (isEmailValid) {
      try {
        const result = await verificationQuery.refetch();
        if (result.isSuccess) {
          if (result.data.data.authResult) {
            setIsEmailDuplicated(false);
          } else {
            setIsEmailDuplicated(true);
          }
        }
        setIsDuplicationChecked(true);
        setOtpVisible(false);
      } catch (error) {
        console.error('Error during verification:', error);
      }
    }
  };

  const emailCodeQuery = usePostEmailCode(email);

  const sendEmailCode = async () => {
    try {
      const result = await emailCodeQuery.mutateAsync();
      if (result.data.authResult) {
        setOtpVisible(true);
      }
    } catch (error) {
      console.error('Failed to send email code:', error);
    }
  };

  const handleVerifyOtp = () => {
    //임시로 111111과 일치할 경우로 달아놓음. api 자리
    if (otpInput === '111111') {
      setVerificationComplete(true);
      setOtpError(false);
    } else {
      setVerificationComplete(false);
      setOtpError(true);
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
  };
};
