import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Button({ to, text, className = "" }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty('--x', `${x}px`);
    btnRef.current.style.setProperty('--y', `${y}px`);
  };

  const css = `
    .hover-btn-effect::before {
      content: '';
      position: absolute;
      left: var(--x, 50%);
      top: var(--y, 50%);
      width: 0;
      height: 0;
      background-color: white;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.3s ease-out, height 0.3s ease-out;
      z-index: 0;
    }
    .hover-btn-effect:hover::before {
      width: 300px;
      height: 300px;
    }
  `;

  return (
    <>
      <style>{css}</style>
      <Link
        to={to}
        ref={btnRef}
        onMouseMove={handleMouseMove}
        className={`hover-btn-effect group inline-block py-[0.8rem] px-[3rem] bg-transparent border-[1.5px] border-white text-white no-underline text-[0.8rem] font-light relative overflow-hidden cursor-pointer rounded-full ${className}`}
      >
        <span className="relative z-10 group-hover:text-black transition-colors duration-200 ease-in font-sans">{text}</span>
      </Link>
    </>
  );
}
