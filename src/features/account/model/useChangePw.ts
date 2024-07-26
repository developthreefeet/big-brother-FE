import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useChangePwEmailStore } from './useChangePwEmailStore';

export const useChangePw = () => {
  const router = useRouter();
  const { setIsEmailValid, setIsSubmitted } = useChangePwEmailStore();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[a-z\d@$!%*?&]{8,20}$/;

  const passwordSchema = z.object({
    password: z
      .string()
      .min(8, { message: '8글자 이상 입력해주세요.' })
      .max(20, { message: '20글자 이하로 입력해주세요.' })
      .regex(passwordRegex, {
        message: '영문 소문자, 숫자, 특수문자(@$!%*?&) 조합이어야 합니다.',
      }),
  });

  const form = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: '',
    },
  });

  const {
    formState: { errors },
  } = form;

  const isPasswordValid =
    !errors.password && form.getValues('password').length > 0;

  const onSubmit = () => {
    setIsEmailValid(false);
    setIsSubmitted(false);
    router.push('/login');
  };
  return { form, onSubmit, isPasswordValid };
};
