import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProfileState {
  userName: string;
  setUserName: (name: string) => void;
}

export const useUserNameStore = create<ProfileState>()(
  persist(
    (set) => ({
      userName: '',
      setUserName: (name) => set({ userName: name }),
    }),
    {
      name: 'userName-storage',
    },
  ),
);
