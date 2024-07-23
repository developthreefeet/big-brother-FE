'use client';

import { Button } from '@/shared/ui/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/shared/ui/ui/form';
import { Input } from '@/shared/ui/ui/input';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/shared/ui/ui/input-otp';
import SelectComponent from '@/widgets/SelectComponent';

import { useForm } from 'react-hook-form';

const Page = () => {
  const form = useForm();

  const collageItems = ['ICT융합대학', '경영대학', '사회과학대학'];
  const departmentItems = ['융합소프트웨어학부', '법학과', '경영학과'];

  return (
    <>
      <h3 className="font-bold">정보를 입력해 주세요.</h3>
      <Form {...form}>
        <form
          className="space-y-9 my-8"
          onSubmit={form.handleSubmit((data) => console.log(data))}
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder="한글" {...field} />
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
                      type="email"
                      placeholder="bigBrother@mju.ac.kr"
                      className="mr-3"
                      {...field}
                    />
                  </FormControl>
                  <Button variant="outline">인증번호 발송</Button>
                </div>
                <FormMessage />
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>단과대 선택</FormLabel>
                  <FormControl>
                    <SelectComponent
                      placeholder="단과대를 선택해주세요."
                      items={collageItems}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>학과 선택</FormLabel>
                  <FormControl>
                    <SelectComponent
                      placeholder="학과를 선택해주세요."
                      items={departmentItems}
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
    </>
  );
};

export default Page;
