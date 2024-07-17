import { Button } from '@/shared/ui/ui/button';
import { IconType } from 'react-icons';

interface IconComponentProps {
  icon: IconType;
  text: string;
}

const IconComponent = ({ icon: Icon, text }: IconComponentProps) => {
  return (
    <Button
      variant="link"
      className="w-[100px] h-[100px] flex flex-col space-y-3 hover:opacity-50 hover:no-underline text-black"
    >
      <Icon size="24" />
      <p className="text-sm">{text}</p>
    </Button>
  );
};

export default IconComponent;
