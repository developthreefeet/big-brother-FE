'use client';

import { Button } from '@/shared/ui/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/shared/ui/ui/input-otp';
import { Input } from '@/shared/ui/ui/input';
import { useEmail } from '@/features/account/model/useEmail';

const page = () => {
  const {
    form,
    isEmailValid,
    emailDuplicationCheck,
    isEmailDuplicated,
    verificationComplete,
    handleVerifyOtp,
    setOtpVisible,
    otpVisible,
    setOtpInput,
    otpInput,
    otpError,
    onSubmit,
    isVerificationButtonEnabled,
  } = useEmail();

  return (
    <>
      <h3 className="font-bold">학교 이메일 인증</h3>
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
                <div className="flex">
                  <FormControl>
                    <Input
                      placeholder="bigBrother@mju.ac.kr"
                      className="mr-3"
                      {...field}
                    />
                  </FormControl>
                  <Button
                    type="button"
                    variant="outline"
                    disabled={!isEmailValid || !isEmailDuplicated}
                    onClick={emailDuplicationCheck}
                  >
                    중복 확인
                  </Button>
                </div>
                {isEmailValid && (
                  <div>
                    {isEmailDuplicated ? (
                      <p className="text-sm text-red-500">
                        이미 가입된 이메일입니다.
                      </p>
                    ) : (
                      <p className="text-sm">중복 확인 완료 ✔️</p>
                    )}
                  </div>
                )}
                <FormMessage />
                {isVerificationButtonEnabled && (
                  <Button
                    type="button"
                    variant="secondary"
                    disabled={verificationComplete}
                    onClick={() => setOtpVisible(true)}
                  >
                    인증번호 발송
                  </Button>
                )}
              </FormItem>
            )}
          />
          {otpVisible && (
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
                <p className="text-sm text-red-500">
                  인증번호가 일치하지 않습니다.
                </p>
              )}
              <FormMessage />
              <Button onClick={handleVerifyOtp} disabled={verificationComplete}>
                {verificationComplete ? '인증완료' : '인증'}
              </Button>
            </div>
          )}
          <Button
            type="submit"
            className="w-[320px] fixed bottom-80"
            disabled={!verificationComplete}
          >
            다음
          </Button>
        </form>
      </Form>
    </>
  );
};

export default page;
