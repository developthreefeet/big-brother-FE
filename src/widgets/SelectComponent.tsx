import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from '@/shared/ui/ui/select';

interface SelectComponentProps {
  placeholder?: string;
  items: string[];
}

const SelectComponent = ({ placeholder, items }: SelectComponentProps) => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={placeholder ? placeholder : items[0]} />
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
