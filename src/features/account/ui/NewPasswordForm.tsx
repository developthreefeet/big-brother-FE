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
import { useChangePw } from '../model/useChangePw';

const NewPasswordForm = () => {
  const { form, onSubmit, isPasswordValid } = useChangePw();

  return (
    <Form {...form}>
      <form className="space-y-9 my-8" onSubmit={form.handleSubmit(onSubmit)}>
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
        <Button type="submit" className="w-full" disabled={!isPasswordValid}>
          변경하기
        </Button>
      </form>
    </Form>
  );
};

export default NewPasswordForm;
