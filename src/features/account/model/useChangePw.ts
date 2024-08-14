import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useChangePwEmailStore } from './useChangePwEmailStore';
import { toast } from '@/shared/ui/ui/use-toast';
import { usePatchChangePw } from '../api/queries';
import { getCookie } from 'cookies-next';
import { deleteToken } from '@/shared/lib/utils';

export const useChangePw = () => {
  const router = useRouter();
  const { email, setIsEmailValid, setIsSubmitted, resetChangePw } =
    useChangePwEmailStore();
  const { mutate: changePassword } = usePatchChangePw();

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
    setIsSubmitted(true);
    setIsEmailValid(false);

    const newPassword = form.getValues('password');

    try {
      changePassword({ email, password: newPassword });
      const accessToken = getCookie('accessToken');
      if (accessToken) deleteToken();
      resetChangePw();
      router.push('/login');
    } catch (error) {
      toast({
        variant: 'destructive',
        description: '비밀번호 변경에 실패했습니다. 담당자에게 문의해주세요.',
      });
    }
  };

  return { form, onSubmit, isPasswordValid };
};
