import React, { useState, useEffect } from 'react';
import { BUSINESS_NAME } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10  rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            <img src={"../../public/images/branding/riyanka_enterprise_no_bg_ultra_smooth-strk-rm-logo-fn.png"} alt="logo" onerror="this.src='/images/branding/riyanka_enterprise_no_bg_ultra_smooth-strk-rm-logo-fn.png';"/>
          </div>
          <span className={`font-heading font-bold text-xl md:text-2xl transition-colors ${
            isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'
          }`}>
            {BUSINESS_NAME}
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#home" className={`${isScrolled ? 'text-slate-600' : 'text-white'} hover:text-blue-500 transition-colors`}>Home</a>
          <a href="#products" className={`${isScrolled ? 'text-slate-600' : 'text-white'} hover:text-blue-500 transition-colors`}>Products</a>
          <a href="#about" className={`${isScrolled ? 'text-slate-600' : 'text-white'} hover:text-blue-500 transition-colors`}>About</a>
          <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all shadow-md">
            Contact Us
          </a>
        </nav>

        <button className="md:hidden text-slate-900 p-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
