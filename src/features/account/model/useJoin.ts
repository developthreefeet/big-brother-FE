'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useJoinEmailStore } from './useJoinEmailStore';
import { usePostJoin } from '../api/queries';
import { PostJoinProps } from '../api/types';
import { toast } from '@/shared/ui/ui/use-toast';
import {
  useGetCollege,
  useGetDepartment,
} from '@/features/contentList/api/queries';
import { useEffect, useState } from 'react';

export const useJoin = () => {
  const { email } = useJoinEmailStore();

  const userNameRegex = /^[가-힣]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*\d)(?=.*[^\w\s])[a-z\d@$!%*?&\W]{8,20}$/;

  const userSchema = z.object({
    userName: z
      .string()
      .min(2, { message: '2글자 이상 입력해주세요.' })
      .max(15, { message: '15글자 이하로 입력해 주세요.' })
      .regex(userNameRegex, { message: '한글 조합만 사용 가능합니다.' }),
    password: z
      .string()
      .min(8, { message: '8글자 이상 입력해주세요.' })
      .max(20, { message: '20글자 이하로 입력해주세요.' })
      .regex(passwordRegex, {
        message: '영문 소문자, 숫자, 특수문자 조합이어야 합니다.',
      }),
    college: z.string().min(1, { message: '단과대를 선택해주세요.' }),
    department: z.string().min(1, { message: '학과를 선택해주세요.' }),
  });

  const form = useForm({
    resolver: zodResolver(userSchema),
    mode: 'onSubmit',
    defaultValues: {
      userName: '',
      password: '',
      college: '',
      department: '',
    },
  });

  const {
    formState: { errors },
  } = form;

  const isSubmitButtonEnabled =
    !errors.userName &&
    form.getValues('college') &&
    form.getValues('department') &&
    !errors.password;

  const { data: collegeData, isLoading: isLoadingCollege } = useGetCollege();
  const collegeNameList = collegeData?.data.map((v) => v.councilName);

  const { refetch: refetchGetDepartment } = useGetDepartment(
    form.getValues('college'),
  );
  const [departmentNameList, setDepartmentNameList] = useState([' ']);
  const [resettingDepartment, setResettingDepartment] = useState(false);

  const handleCollegeSelect = async () => {
    const college = form.getValues('college');
    if (college) {
      const { data: departmentData } = await refetchGetDepartment();
      const departmentNameList = departmentData?.data.map((v) => v.councilName);
      setDepartmentNameList(departmentNameList || [' ']);
      form.setValue('department', '');
      setResettingDepartment(true);
    }
  };

  useEffect(() => {
    handleCollegeSelect();
  }, [form.watch('college')]);

  useEffect(() => {
    if (resettingDepartment) {
      setResettingDepartment(false);
    }
  }, [form.watch('department')]);

  const router = useRouter();

  const joinQuery = usePostJoin();

  const onSubmit = async (data: any) => {
    const joinData: PostJoinProps = {
      username: data.userName,
      password: data.password,
      email,
      college: data.college,
      affiliation: data.department,
    };
    console.log(joinData);
    try {
      await joinQuery.mutateAsync(joinData);
      toast({
        description: '회원 가입에 성공했습니다. 환영합니다!',
      });
      router.push('/login');
    } catch (error) {
      toast({
        variant: 'destructive',
        description: '회원 가입에 실패했습니다. 관리자에게 문의하세요.',
      });
    }
  };

  return {
    form,
    onSubmit,
    isSubmitButtonEnabled,
    collegeNameList,
    isLoadingCollege,
    departmentNameList,
  };
};
