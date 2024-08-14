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
import { useModifyProfile } from '../model/useModifyProfile';
import { useUserNameStore } from '../model/useUserNameStore';

const ModifyProfileForm = () => {
  const { form, onSubmit } = useModifyProfile();
  const { userName } = useUserNameStore();

  return (
    <Form {...form}>
      <form className="space-y-9" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input
                  placeholder="한글 조합 (2~15자)"
                  {...field}
                  defaultValue={userName}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" size="long">
            수정완료
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ModifyProfileForm;
