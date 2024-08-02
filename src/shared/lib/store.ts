import { create } from 'zustand';

interface SelectStore {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

export const useSelectStore = create<SelectStore>((set) => ({
  selectedValue: '',
  setSelectedValue: (value: string) => set({ selectedValue: value }),
}));
