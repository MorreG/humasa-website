import React from 'react';
import { LucideCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

export default function Footer() {
  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <footer className="px-6 md:px-12 pt-12 pb-16 bg-[#0a0a0a] border-t border-offwhite/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-16 md:gap-16 relative z-10">
        {/* Main Brand Section */}
        <div className="col-span-2 md:col-span-7">
          <div className="flex items-center gap-2 mb-8">
            <div className="relative flex items-center justify-center">
              <LucideCircle className="w-4 h-4 fill-signal text-signal relative z-10" />
              <div className="absolute w-4 h-4 rounded-full bg-signal/60 animate-ping-slow"></div>
            </div>
            <span className="font-heading text-xl font-bold uppercase tracking-widest text-offwhite">Humåsa</span>
          </div>
          <h2 className="font-drama text-5xl md:text-7xl text-offwhite mb-12 leading-tight">
            Mer partner <br /> <span className="italic text-offwhite/40">mindre konsult.</span>
          </h2>
          <div className="flex gap-8 overflow-hidden items-center">
            <Link to="/about#contact">
              <MagneticButton className="px-8 py-4 bg-signal text-white rounded-full font-heading font-medium text-base flex items-center gap-3">
                Kontakt <ArrowUpRight size={18} />
              </MagneticButton>
            </Link>
          </div>
        </div>

        {/* Index Links */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-data text-[10px] uppercase tracking-widest text-signal mb-8">Register</h4>
          <ul className="flex flex-col gap-4 font-heading text-sm text-offwhite/40">
            <li className="hover:text-offwhite cursor-pointer link-cinematic w-fit"><Link to="/" onClick={handleLogoClick}>Hem</Link></li>
            <li className="hover:text-offwhite cursor-pointer link-cinematic w-fit"><Link to="/about">Om</Link></li>
            <li className="hover:text-offwhite cursor-pointer link-cinematic w-fit"><Link to="/about#contact">Kontakt</Link></li>
          </ul>
        </div>

        {/* Contact Links */}
        <div className="col-span-1 md:col-span-3">
          <h4 className="font-data text-[10px] uppercase tracking-widest text-signal mb-8">Kontakt</h4>
          <ul className="flex flex-col gap-4 font-heading text-sm text-offwhite/40">
            <li className="hover:text-offwhite cursor-pointer link-cinematic w-fit"><a href="https://www.linkedin.com/in/m%C3%A5rten-andreasson-551762226/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li className="hover:text-offwhite cursor-pointer link-cinematic w-fit"><a href="https://www.instagram.com/thisishumasa/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="mt-12 pt-8 border-t border-offwhite/5 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <p className="font-data text-[10px] text-offwhite/40 uppercase tracking-widest">
          © 2026 Humåsa AB │ Org.nr 559403-9165. Alla rättigheter förbehållna.
        </p>
        <div className="flex gap-12 font-data text-[10px] text-offwhite/40 uppercase tracking-[0.2em]">
          <span>59.3293° N, 18.0686° E</span>
          <span>Protocol 09-X</span>
        </div>
      </div>

      {/* Decorative large bg text */}
      <h3 className="absolute bottom-4 right-0 font-heading text-[28vw] md:text-[22vw] text-offwhite/[0.02] font-black uppercase pointer-events-none select-none leading-[0.8] tracking-tighter translate-x-[12%]">
        HUMÅSA
      </h3>
    </footer>
  );
}
