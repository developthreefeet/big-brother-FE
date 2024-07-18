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
import { Input } from '@/shared/ui/ui/input';
import SelectComponent from '@/widgets/SelectComponent';
import { useForm } from 'react-hook-form';

const page = () => {
  const form = useForm();
  const collageItems = ['ICT융합대학', '경영대학', '사회과학대학'];
  const departmentItems = ['융합소프트웨어학부', '법학과', '경영학과'];

  return (
    <>
      <Form {...form}>
        <form
          className="space-y-9"
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
              수정완료
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default page;
