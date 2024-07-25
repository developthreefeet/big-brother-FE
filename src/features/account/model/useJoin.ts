'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useJoin = () => {
  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [isEmailDuplicatedExecuted, setIsEmailDuplicatedExecuted] =
    useState(false);
  const [otpVisible, setOtpVisible] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [otpError, setOtpError] = useState(false);

  const userNameRegex = /^[가-힣]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[a-z\d@$!%*?&]{8,20}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@mju\.ac\.kr$/;

  const userSchema = z.object({
    userName: z
      .string()
      .min(2, { message: '2글자 이상 입력해주세요.' })
      .max(15, { message: '15글자 이하로 입력해 주세요.' })
      .regex(userNameRegex, { message: '한글 조합만 사용 가능합니다.' }),
    email: z
      .string()
      .email({ message: '이메일 형식으로 입력해 주세요.' })
      .regex(emailRegex, { message: '@mju.ac.kr 형식이어야 합니다.' }),
    password: z
      .string()
      .min(8, { message: '8글자 이상 입력해주세요.' })
      .max(20, { message: '20글자 이하로 입력해주세요.' })
      .regex(passwordRegex, {
        message: '영문 소문자, 숫자, 특수문자(@$!%*?&) 조합이어야 합니다.',
      }),
    college: z.string().min(1, { message: '단과대를 선택해주세요.' }),
    department: z.string().min(1, { message: '학과를 선택해주세요.' }),
  });

  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      college: '',
      department: '',
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
      setIsEmailDuplicatedExecuted(true);
    }
  };

  const isVerificationButtonEnabled =
    isEmailDuplicatedExecuted && !isEmailDuplicated && isEmailValid;

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

  const isSubmitButtonEnabled =
    !errors.userName &&
    form.getValues('college') &&
    form.getValues('department') &&
    !errors.password &&
    !isEmailDuplicated &&
    verificationComplete;

  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log(data);
    router.push('/login');
  };

  return {
    form,
    isEmailValid,
    emailDuplicationCheck,
    isEmailDuplicatedExecuted,
    isEmailDuplicated,
    verificationComplete,
    otpVisible,
    handleVerifyOtp,
    setOtpVisible,
    setOtpInput,
    otpInput,
    otpError,
    onSubmit,
    isSubmitButtonEnabled,
    isVerificationButtonEnabled,
  };
};
