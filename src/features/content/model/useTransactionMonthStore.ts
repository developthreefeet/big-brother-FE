import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MonthState {
  currentMonth: number;
  setCurrentMonth: (month: number) => void;
}

export const useMonthStore = create<MonthState>()(
  persist(
    (set) => ({
      currentMonth: new Date().getMonth() + 1,
      setCurrentMonth: (month: number) => set({ currentMonth: month }),
    }),
    {
      name: 'transaction-month-storage',
    },
  ),
);
