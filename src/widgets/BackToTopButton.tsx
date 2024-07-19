'use client';

import { useState, useEffect } from 'react';
import { IoArrowUp } from 'react-icons/io5';
import 'tailwindcss/tailwind.css';

const BackToTopButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky bottom-4 right-48 z-20 mb-6 flex justify-end pr-5">
      {isScrolled ? (
        <button
          onClick={scrollToTop}
          className="p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          <IoArrowUp />
        </button>
      ) : (
        <div className="h-[32px]"></div>
      )}
    </div>
  );
};

export default BackToTopButton;
