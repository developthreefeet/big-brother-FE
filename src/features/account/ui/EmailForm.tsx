import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/shared/ui/ui/form';
import { Input } from '@/shared/ui/ui/input';
import { useChangePwEmail } from '../model/useChangePwEmail';
import { Button } from '@/shared/ui/ui/button';
import { useChangePwEmailStore } from '../model/useChangePwEmailStore';

const EmailForm = () => {
  const { form, onSubmit } = useChangePwEmail();
  const { isEmailValid, isSubmitted } = useChangePwEmailStore();

  return (
    <>
      <Form {...form}>
        <form
          className="space-y-9 mb-8 mt-3 relative"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>가입한 계정의 이메일</FormLabel>
                <div className="flex">
                  <FormControl>
                    <Input
                      placeholder="bigBrother@mju.ac.kr"
                      className="mr-3"
                      {...field}
                      disabled={isEmailValid}
                    />
                  </FormControl>
                  <Button type="submit" disabled={isEmailValid}>
                    {isEmailValid ? '확인 ✔️' : '확인'}
                  </Button>
                </div>
              </FormItem>
            )}
          />
        </form>
      </Form>
      {isSubmitted && !isEmailValid && (
        <p className="text-sm text-red-500 font-semibold">
          해당 이메일로 가입한 계정이 없습니다.
        </p>
      )}
    </>
  );
};

export default EmailForm;
