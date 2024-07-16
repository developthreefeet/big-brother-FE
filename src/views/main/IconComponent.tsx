import { Button } from '@/shared/ui/ui/button';

interface IconComponentProps {
  icon?: string;
  text: string;
}

const IconComponent = ({ icon, text }: IconComponentProps) => {
  return (
    <Button
      variant="link"
      className="h-[100px] flex flex-col justify-center items-center space-y-2 hover:opacity-50 hover:no-underline text-black"
    >
      <div className="w-10 h-10 bg-gray-100 border rounded-full"></div>
      <p className="text-sm">{text}</p>
    </Button>
  );
};

export default IconComponent;
