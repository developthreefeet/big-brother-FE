import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface VerificationState {
  verificationComplete: boolean;
  setVerificationComplete: (value: boolean) => void;
  resetVerificationComplete: () => void;
  email: string;
  setEmail: (email: string) => void;
}

export const useEmailStore = create<VerificationState>()(
  persist(
    (set) => ({
      verificationComplete: false,
      setVerificationComplete: (value) => set({ verificationComplete: value }),
      email: '',
      setEmail: (email) => set({ email }),
      resetVerificationComplete: () =>
        set({ verificationComplete: false, email: '' }),
    }),
    {
      name: 'email-storage',
      getStorage: () => localStorage,
    },
  ),
);
