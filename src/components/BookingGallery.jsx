import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function BookingGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef(null);
  const current = images[currentIndex];
  const go = (offset) => setCurrentIndex(index => (index + offset + images.length) % images.length);

  return (
    <div className="booking-gallery" role="region" aria-roledescription="bildspel" aria-label="Programvarans skärmbilder" onKeyDown={event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        go(event.key === 'ArrowLeft' ? -1 : 1);
      }
    }}>
      <div className="booking-gallery-frame" onTouchStart={event => { touchStart.current = event.changedTouches[0].clientX; }} onTouchCancel={() => { touchStart.current = null; }} onTouchEnd={event => {
        if (touchStart.current === null) return;
        const distance = touchStart.current - event.changedTouches[0].clientX;
        if (Math.abs(distance) > 50) go(distance > 0 ? 1 : -1);
        touchStart.current = null;
      }}>
        <div className="booking-gallery-bar"><span className="booking-window-dots" aria-hidden="true"><i /><i /><i /></span><span>{current.placeholder ? 'FÖRHANDSVISNING / PROGRAMVARA' : 'HUMLY / PROGRAMVARA'}</span></div>
        <div className="booking-gallery-screen">
          <img src={current.src} alt={current.alt} width="1440" height="900" loading="lazy" />
        </div>
      </div>
      <div className="booking-gallery-footer">
        <p className="booking-gallery-caption" aria-live="polite" aria-atomic="true"><span>{String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>{current.title}{current.placeholder && <small>Platshållare</small>}</p>
        <div className="booking-gallery-controls">
          <button type="button" onClick={() => go(-1)} aria-label="Föregående skärmbild"><ArrowLeft size={20} aria-hidden="true" /></button>
          <div className="booking-gallery-dots">{images.map((img, index) => <button type="button" key={img.src} aria-label={`Visa ${img.title.toLowerCase()}`} aria-current={index === currentIndex ? 'true' : undefined} onClick={() => setCurrentIndex(index)}><i /></button>)}</div>
          <button type="button" onClick={() => go(1)} aria-label="Nästa skärmbild"><ArrowRight size={20} aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  );
}
