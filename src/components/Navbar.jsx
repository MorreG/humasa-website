import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { smoothScrollTo } from '../utils/smoothScroll';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 50);
  const location = useLocation();

  useEffect(() => {
    let wasScrolled;
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== wasScrolled) {
        wasScrolled = scrolled;
        setIsScrolled(scrolled);
      }
    };
    const initialFrame = requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(initialFrame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactClick = (e) => {
    // A new hash is handled by ScrollToTop. Only repeat the scroll ourselves
    // when the URL is already at the contact section.
    if (location.pathname === '/about' && location.hash === '#contact') {
      const element = document.getElementById('contact');
      if (element) {
        e.preventDefault();
        smoothScrollTo(element, 1000);
      }
    }
  };

  return (
    <nav
      data-scrolled={isScrolled}
      className={`site-nav fixed top-6 left-1/2 -translate-x-1/2 z-50 duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
      ${isScrolled 
        ? 'w-[90%] md:w-[60%] py-[13px] px-[25px] rounded-full text-dark'
        : 'w-[95%] py-4 px-6 bg-transparent text-paper'}`}
    >
      <div className="flex items-center justify-between">
        <Link to="/" onClick={handleLogoClick} className="font-navheading font-bold text-xl tracking-tight uppercase">Humåsa</Link>
        <div className="hidden md:flex gap-8 items-center font-body text-base uppercase tracking-widest font-semibold">
          <Link to="/about" className="hover:-translate-y-0.5 transition-transform duration-300">Om</Link>
          <Link to="/about#contact" onClick={handleContactClick} className="hover:-translate-y-0.5 transition-transform duration-300">Kontakt</Link>
        </div>
        <Link to="/about#contact" onClick={handleContactClick}>
            <MagneticButton className={`px-5 py-2 rounded-full font-navheading font-medium text-sm flex items-center gap-2 ${isScrolled ? 'bg-signal text-paper' : 'bg-paper text-dark'}`}>
            Kontakta mig <ArrowRight size={16} />
            </MagneticButton>
        </Link>
      </div>
    </nav>
  );
}
