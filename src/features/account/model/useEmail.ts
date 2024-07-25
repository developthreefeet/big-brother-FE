'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useEmail = () => {
  const [isEmailDuplicated, setIsEmailDuplicated] = useState(true);
  const [otpVisible, setOtpVisible] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);
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

  const emailDuplicationCheck = () => {
    const email = form.getValues('email');
    if (email) {
      if (email.includes('test')) {
        setIsEmailDuplicated(true);
      } else {
        setIsEmailDuplicated(false);
      }
    }
  };

  const isVerificationButtonEnabled = !isEmailDuplicated && isEmailValid;

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
    console.log(data);
    router.push('/join');
  };

  return {
    form,
    isEmailValid,
    emailDuplicationCheck,
    isEmailDuplicated,
    verificationComplete,
    otpVisible,
    handleVerifyOtp,
    setOtpVisible,
    setOtpInput,
    otpInput,
    otpError,
    onSubmit,
    isVerificationButtonEnabled,
  };
};
