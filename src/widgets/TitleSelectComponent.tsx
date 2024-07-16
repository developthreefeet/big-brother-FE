import React from 'react';
import SelectComponent from './SelectComponent';

interface TitleSelectComponentProps {
  placeholder?: string;
  items: string[];
  title: string;
}

const TitleSelectComponent = ({
  placeholder,
  items,
  title,
}: TitleSelectComponentProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <p>{title}</p>
      <SelectComponent items={items} placeholder={placeholder} />
    </div>
  );
};

export default TitleSelectComponent;
