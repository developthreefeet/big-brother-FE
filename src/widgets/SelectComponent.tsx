'use client';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from '@/shared/ui/ui/select';
import { useSelectStore } from '@/shared/lib/store';

interface SelectComponentProps {
  items: string[];
}

const SelectComponent = ({ items }: SelectComponentProps) => {
  const { selectedValue, setSelectedValue } = useSelectStore();

  return (
    <Select
      value={selectedValue !== '' ? selectedValue : items[0]}
      onValueChange={setSelectedValue}
    >
      <SelectTrigger>
        <SelectValue placeholder={selectedValue} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
