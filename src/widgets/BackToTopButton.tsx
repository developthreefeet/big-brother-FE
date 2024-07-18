'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
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
    isScrolled && (
      <div className="sticky bottom-4 right-48 z-20 mb-6 flex justify-end pr-5">
        <button
          onClick={scrollToTop}
          className="p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          <FaArrowUp />
        </button>
      </div>
    )
  );
};

export default BackToTopButton;
