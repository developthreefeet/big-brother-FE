import { create } from 'zustand';

interface ChangePwEmailState {
  isEmailValid: boolean;
  isSubmitted: boolean;
  setIsEmailValid: (isValid: boolean) => void;
  setIsSubmitted: (isSubmitted: boolean) => void;
}

export const useChangePwEmailStore = create<ChangePwEmailState>((set) => ({
  isEmailValid: false,
  isSubmitted: false,
  setIsEmailValid: (isValid) => set({ isEmailValid: isValid }),
  setIsSubmitted: (isSubmitted) => set({ isSubmitted }),
}));
