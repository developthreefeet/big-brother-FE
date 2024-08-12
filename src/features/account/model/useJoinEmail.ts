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

  const verificationQuery = useGetVerification(email);

  const emailDuplicationCheck = async () => {
    const isValid = await form.trigger('email');

    if (isValid) {
      const currentEmail = form.getValues('email');
      setEmail(currentEmail);
      setClickSendButton(false);
      setOtpInput('');

      /*      try {
        const result = await verificationQuery.refetch();
        if (result.isSuccess) {
          console.log('query 실행됨~');
          setIsEmailDuplicated(false);
          setIsDuplicationChecked(true);
          setOtpVisible(false);
        }
        if (result.isError) {
          console.log('에러남~~~~');
          setIsEmailDuplicated(true);
        }
      } catch (error) {
        setIsEmailDuplicated(true);
        console.error('Error during verification:', error);
        console.log(isEmailDuplicated);
      }*/
    }
  };

  const emailCodeQuery = usePostEmailCode(email);

  const sendEmailCode = async () => {
    try {
      const result = await emailCodeQuery.mutateAsync();
      if (result.data.authResult) {
        setOtpVisible(true);
        setClickSendButton(true);
      }
    } catch (error) {
      console.error('Failed to send email code:', error);
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
        if (result.data.data.authResult) {
          setVerificationComplete(true);
          setOtpError(false);
        } else {
          setVerificationComplete(false);
          setOtpError(true);
        }
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
