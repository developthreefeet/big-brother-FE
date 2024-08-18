import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/ui/form';
import { Input } from '@/shared/ui/ui/input';
import { useChangePwEmail } from '../model/useChangePwEmail';
import { Button } from '@/shared/ui/ui/button';
import { useChangePwEmailStore } from '../model/useChangePwEmailStore';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/shared/ui/ui/input-otp';

const EmailForm = () => {
  const {
    form,
    emailDuplicationCheck,
    otpVisible,
    sendEmailCode,
    setOtpInput,
    otpInput,
    otpError,
    handleVerifyOtp,
    clickSendButton,
    isEmailValid,
    isSubmitted,
  } = useChangePwEmail();
  const { verificationComplete } = useChangePwEmailStore();

  return (
    <>
      <Form {...form}>
        <form className="space-y-9 mb-2 mt-3 relative">
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
                  <Button
                    type="button"
                    disabled={isEmailValid}
                    onClick={emailDuplicationCheck}
                  >
                    {isEmailValid ? '확인 ✔️' : '확인'}
                  </Button>
                </div>
                {isSubmitted && !isEmailValid && (
                  <p className="text-sm text-red-500 font-semibold">
                    해당 이메일로 가입한 계정이 없습니다.
                  </p>
                )}
              </FormItem>
            )}
          />
          {isSubmitted && isEmailValid && (
            <Button type="button" variant="secondary" onClick={sendEmailCode}>
              {clickSendButton ? '인증번호 재전송' : '인증번호 전송'}
            </Button>
          )}
          {isEmailValid && otpVisible && (
            <div className="space-y-2">
              <p className="text-sm cursor-default">인증 번호</p>
              <InputOTP maxLength={6} onChange={setOtpInput} value={otpInput}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              {otpError && (
                <p className="text-sm text-red-500 font-bold">
                  인증번호가 일치하지 않습니다.
                </p>
              )}
              <FormMessage />
              <Button
                type="button"
                onClick={handleVerifyOtp}
                disabled={verificationComplete}
              >
                {verificationComplete ? '인증완료' : '인증'}
              </Button>
            </div>
          )}
        </form>
      </Form>
    </>
  );
};

export default EmailForm;
