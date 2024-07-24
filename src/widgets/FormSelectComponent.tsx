import { Controller } from 'react-hook-form';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from '@/shared/ui/ui/select';

interface FormSelectComponentProps {
  placeholder?: string;
  items: string[];
  control: any;
  name: string;
}

const FormSelectComponent = ({
  placeholder,
  items,
  control,
  name,
}: FormSelectComponentProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
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
      )}
    />
  );
};

export default FormSelectComponent;
