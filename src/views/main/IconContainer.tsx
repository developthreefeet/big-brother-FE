import React from 'react';
import IconComponent from './IconComponent';
import { pages } from '@/shared/mock/pages';

const IconContainer = () => {
  return (
    <div className="w-[100%] grid grid-cols-3 gap-5">
      {pages.map((page, index) => (
        <IconComponent
          key={index}
          icon={page.icon}
          text={page.text}
          href={page.href}
        />
      ))}
    </div>
  );
};

export default IconContainer;
