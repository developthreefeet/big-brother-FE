'use client';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from '@/shared/ui/ui/select';

import { useMonthStore } from '@/features/content/model/useTransactionMonthStore';

const MonthSelectComponent = () => {
  const { selectMonth, setSelectMonth } = useMonthStore();

  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="달을 선택해주세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {months.slice(0, new Date().getMonth() + 1).map((item, index) => (
            <SelectItem key={index} value={item.toString()}>
              {`${item}월`}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default MonthSelectComponent;
