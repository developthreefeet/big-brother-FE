'use client';

import { Button } from '@/shared/ui/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/ui/form';

import FormSelectComponent from '@/widgets/FormSelectComponent';
import { Input } from '@/shared/ui/ui/input';
import { useJoin } from '../model/useJoin';
import { departmentItems } from '@/shared/lib/assets';
import { useOrganizationList } from '@/features/contentList/model/useOrganizationList';

const JoinForm = () => {
  const { form, onSubmit, isSubmitButtonEnabled } = useJoin();
  const { collegeNameList, isLoading } = useOrganizationList();

  return (
    <Form {...form}>
      <form className="space-y-9 my-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input
                  placeholder="한글 조합 (2~15자)"
                  maxLength={15}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="영문 소문자, 숫자, 특수문자 조합 (8~20자)"
                  {...field}
                  maxLength={20}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="college"
            render={() => (
              <FormItem>
                <FormLabel>단과대 선택</FormLabel>
                <FormControl>
                  <FormSelectComponent
                    placeholder="단과대를 선택해주세요."
                    items={isLoading ? ['로딩중...'] : collegeNameList || [' ']}
                    control={form.control}
                    name="college"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="department"
            render={() => (
              <FormItem>
                <FormLabel>학과 선택</FormLabel>
                <FormControl>
                  <FormSelectComponent
                    placeholder="학과를 선택해주세요."
                    items={departmentItems}
                    control={form.control}
                    name="department"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-center">
          <Button type="submit" size="long" disabled={!isSubmitButtonEnabled}>
            가입하기
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default JoinForm;
