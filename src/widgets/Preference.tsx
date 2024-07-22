'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/ui/button';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';

const Preference = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleButtonClick = (preference: string) => {
    setSelected((prev) => (prev === preference ? null : preference));
  };

  return (
    <div className="flex flex-col space-y-3 justify-center items-center mt-12 mb-10">
      <p className="font-bold">이 글에 대해 어떻게 생각하요?</p>
      <div className="flex space-x-2">
        <Button
          className={`flex space-x-3 rounded-3xl hover:bg-emerald-500 ${
            selected === 'like'
              ? 'bg-emerald-700 hover:bg-emerald-700'
              : 'bg-emerald-500/90 '
          }`}
          onClick={() => handleButtonClick('like')}
        >
          <AiFillLike />
          <p>50%</p>
        </Button>
        <Button
          className={`flex space-x-3 rounded-3xl hover:bg-red-500 ${
            selected === 'dislike'
              ? 'bg-red-600 hover:bg-red-600'
              : 'bg-red-500/90 '
          }`}
          onClick={() => handleButtonClick('dislike')}
        >
          <AiFillDislike />
          <p>50%</p>
        </Button>
      </div>
    </div>
  );
};

export default Preference;
