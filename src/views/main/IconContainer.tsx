import IconComponent from '@/widgets/IconComponent';
import { pages } from '@/shared/lib/pages';

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
