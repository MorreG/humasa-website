import { useState, useRef } from 'react';

export default function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) nextSlide();
    else if (swipeDistance < -50) prevSlide();
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-black" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="flex relative items-center justify-center h-full w-full">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out flex justify-center items-center ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      
      {/* Controls */}
      <div className="absolute top-1/2 w-full flex justify-between px-5 z-20 -translate-y-1/2 pointer-events-none">
        <button onClick={prevSlide} className="pointer-events-auto bg-transparent border-none p-0 cursor-pointer w-8 h-8 flex justify-center items-center group">
           <svg viewBox="0 0 26 40" className="w-4 h-full fill-white/80 group-hover:fill-white scale-x-[-1] transition-colors">
              <polygon points="60.4571 47.8 40.6571 67.6 35 61.9429 49.1434 47.7995 35 33.6571 40.6571 28" transform="translate(-35 -28)"/>
           </svg>
        </button>
        <button onClick={nextSlide} className="pointer-events-auto bg-transparent border-none p-0 cursor-pointer w-8 h-8 flex justify-center items-center group">
           <svg viewBox="0 0 26 40" className="w-4 h-full fill-white/80 group-hover:fill-white transition-colors">
              <polygon points="60.4571 47.8 40.6571 67.6 35 61.9429 49.1434 47.7995 35 33.6571 40.6571 28" transform="translate(-35 -28)"/>
           </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-[20px] left-0 right-0 flex justify-center gap-[10px] z-20">
        {images.map((_, index) => (
          <div 
            key={index} 
            onClick={() => setCurrentIndex(index)}
            className={`w-[0.4rem] h-[0.4rem] rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
