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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from '@/shared/ui/ui/select';
import { useForm } from 'react-hook-form';

const Page = () => {
  const form = useForm();

  return (
    <>
      <h3 className="font-bold mt-4">정보를 입력해 주세요.</h3>
      <Form {...form}>
        <form
          className="space-y-9 my-10"
          onSubmit={form.handleSubmit((data) => console.log(data))}
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>닉네임</FormLabel>
                <FormControl>
                  <Input placeholder="알파벳 대/소문자, 한글" {...field} />
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
                    placeholder="알파벳 대/소문자, 숫자 조합"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex-row space-y-3">
            <FormField
              control={form.control}
              name="college"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>단과대 선택</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="단과대를 선택해주세요." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="경영대학">경영대학</SelectItem>
                          <SelectItem value="사회과학대학">
                            사회과학대학
                          </SelectItem>
                          <SelectItem value="ICT융합대학">
                            ICT융합대학
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="학과를 선택해주세요." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="경영학과">경영학과</SelectItem>
                          <SelectItem value="융합소프트웨어학부">
                            융합소프트웨어학부
                          </SelectItem>
                          <SelectItem value="법학과">법학과</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
