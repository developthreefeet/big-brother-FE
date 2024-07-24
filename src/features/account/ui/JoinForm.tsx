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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/shared/ui/ui/input-otp';
import FormSelectComponent from '@/widgets/FormSelectComponent';
import { Input } from '@/shared/ui/ui/input';
import { useJoin } from '../model/useJoin';
import { collageItems, departmentItems } from '@/shared/lib/assets';

const JoinForm = () => {
  const { form, onSubmit } = useJoin();

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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>학교 이메일</FormLabel>
              <div className="flex">
                <FormControl>
                  <Input
                    placeholder="bigBrother@mju.ac.kr"
                    className="mr-3"
                    {...field}
                  />
                </FormControl>
                <Button variant="outline">중복 확인</Button>
              </div>
              <FormMessage />
              <Button variant="secondary">인증번호 발송</Button>
            </FormItem>
          )}
        />
        <div className="space-y-2">
          <p className="text-sm cursor-default">인증 번호</p>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <FormMessage />
        </div>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="알파벳 소문자, 숫자, 특수문자 조합 (8~20자)"
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
                    items={collageItems}
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
          <Button type="submit" size="long">
            가입하기
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default JoinForm;
