'use client';

import { Button } from '@/shared/ui/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BackToListButton = () => {
  const pathname = usePathname();
  const listPath = pathname.split('/').slice(0, 3).join('/');

  return (
    <Button variant="secondary" className="w-32">
      <Link href={`${listPath}`}>목록으로 돌아가기</Link>
    </Button>
  );
};

export default BackToListButton;
