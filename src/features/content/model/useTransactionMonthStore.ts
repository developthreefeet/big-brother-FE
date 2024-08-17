import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MonthState {
  selectMonth: number;
  setSelectMonth: (month: number) => void;
}

export const useMonthStore = create<MonthState>()(
  persist(
    (set) => ({
      selectMonth: new Date().getMonth() + 1,
      setSelectMonth: (month: number) => set({ selectMonth: month }),
    }),
    {
      name: 'transaction-month-storage',
    },
  ),
);
