import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ChangePwEmailState {
  isEmailValid: boolean;
  isSubmitted: boolean;
  setIsEmailValid: (isValid: boolean) => void;
  setIsSubmitted: (isSubmitted: boolean) => void;
  resetChangePw: () => void;
  email: string;
  setEmail: (email: string) => void;
}

export const useChangePwEmailStore = create<ChangePwEmailState>()(
  persist(
    (set) => ({
      isEmailValid: false,
      isSubmitted: false,
      setIsEmailValid: (isValid) => set({ isEmailValid: isValid }),
      setIsSubmitted: (isSubmitted) => set({ isSubmitted }),
      email: '',
      setEmail: (email) => set({ email }),
      resetChangePw: () =>
        set({ isEmailValid: false, isSubmitted: false, email: '' }),
    }),
    { name: 'change-pw-email-storage' },
  ),
);
