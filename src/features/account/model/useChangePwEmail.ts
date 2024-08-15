import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useChangePwEmailStore } from './useChangePwEmailStore';
import {
  useGetVerification,
  usePostEmailCode,
  useGetEmailCodeVerification,
} from '../api/queries';
import { useState } from 'react';
import { toast } from '@/shared/ui/ui/use-toast';

export const useChangePwEmail = () => {
  const { setVerificationComplete, setEmail } = useChangePwEmailStore();
  const [otpVisible, setOtpVisible] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [otpError, setOtpError] = useState(false);
  const [clickSendButton, setClickSendButton] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailSchema = z.object({
    email: z.string().email('Invalid email address'),
  });

  const form = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });

  const { refetch: refetchGetVerification } = useGetVerification(
    form.getValues('email'),
  );
  const emailCodeQuery = usePostEmailCode(form.getValues('email'));
  const { refetch: refetchGetEmailCodeVerification } =
    useGetEmailCodeVerification(form.getValues('email'), otpInput);

  const emailDuplicationCheck = async () => {
    setIsSubmitted(false);

    const { isError, error } = await refetchGetVerification();

    if (isError) {
      if (error.response?.status === 400) {
        setIsEmailValid(true);
      } else {
        toast({
          variant: 'destructive',
          description:
            '가입한 이메일 검증에 실패했습니다. 관리자에게 문의하세요.',
        });
      }
    } else {
      setIsEmailValid(false);
    }

    setIsSubmitted(true);
  };

  const sendEmailCode = async () => {
    try {
      await emailCodeQuery.mutateAsync();
      setOtpVisible(true);
      setClickSendButton(true);
      toast({ description: '인증 번호가 전송되었습니다.' });
    } catch (error) {
      toast({
        variant: 'destructive',
        description: '인증 번호 전송에 실패했습니다. 관리자에게 문의하세요.',
      });
    }
  };

  const handleVerifyOtp = async () => {
    const { isError, error } = await refetchGetEmailCodeVerification();
    if (isError) {
      if (error.response?.status === 404) {
        setVerificationComplete(false);
        setOtpError(true);
      } else {
        toast({
          variant: 'destructive',
          description: '인증 번호 검증에 실패했습니다. 관리자에게 문의하세요.',
        });
      }
    } else {
      setEmail(form.getValues('email'));
      setVerificationComplete(true);
      setOtpError(false);
    }
  };

  return {
    form,
    emailDuplicationCheck,
    otpVisible,
    sendEmailCode,
    setOtpInput,
    otpInput,
    otpError,
    handleVerifyOtp,
    clickSendButton,
    isEmailValid,
    isSubmitted,
  };
};
