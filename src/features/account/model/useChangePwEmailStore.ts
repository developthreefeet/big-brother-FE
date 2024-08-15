import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ChangePwEmailState {
  resetChangePw: () => void;
  email: string;
  setEmail: (email: string) => void;
  verificationComplete: boolean;
  setVerificationComplete: (verificationComplete: boolean) => void;
}

export const useChangePwEmailStore = create<ChangePwEmailState>()(
  persist(
    (set) => ({
      email: '',
      setEmail: (email) => set({ email }),
      resetChangePw: () => set({ verificationComplete: false, email: '' }),
      verificationComplete: false,
      setVerificationComplete: (verificationComplete) =>
        set({ verificationComplete }),
    }),

    { name: 'change-pw-email-storage' },
  ),
);
