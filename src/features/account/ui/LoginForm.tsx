'use client';

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/shared/ui/ui/form';
import { Input } from '@/shared/ui/ui/input';
import { Button } from '@/shared/ui/ui/button';
import { useLogIn } from '../model/useLogIn';

const LoginForm = () => {
  const { form, isValidAccount, onSubmit } = useLogIn();

  return (
    <Form {...form}>
      <form
        className="space-y-4 mt-2 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="이메일" {...field} />
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
              <FormControl>
                <Input
                  type="password"
                  placeholder="비밀번호"
                  {...field}
                  maxLength={20}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!isValidAccount && (
          <p className="text-sm text-red-500 font-semibold">
            이메일이나 비밀번호가 맞지 않습니다.
          </p>
        )}
        <Button type="submit" className="w-full">
          로그인
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
