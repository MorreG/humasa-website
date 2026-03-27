import { useState, useRef } from 'react';
import { asset } from '../utils/assetPath';

/* ─── Per-city data ──────────────────────────────────────────────────────── */
const CITIES = [
  {
    name: "Stockholm",
    top: "66%", left: "54%", delay: 0,
    images: [
      { src: asset('IMG/DSC_1836.JPG'),  alt: "Stockholm – bil med guldkant" },
      { src: asset('IMG/STWK5.jpg'),     alt: "Stockholm – montering" },
      { src: asset('IMG/STWK6.jpg'),     alt: "Stockholm – dekal närbild" },
      { src: asset('IMG/STWK7.jpg'),     alt: "Stockholm – logotyp på bil" },
      { src: asset('IMG/STWK8.jpg'),     alt: "Stockholm – hela flottan" },
    ],
  },
  {
    name: "Göteborg",
    top: "77%", left: "33%", delay: 1,
    images: [
      { src: asset('IMG/stwk1.jpeg'),    alt: "Göteborg – montering" },
      { src: asset('IMG/DSC_1548.jpg'),  alt: "Göteborg – bil parkerad" },
    ],
  },
  {
    name: "Malmö",
    top: "90%", left: "37%", delay: 2,
    images: [
      { src: asset('IMG/stwk2.jpg'),     alt: "Malmö – folieringsarbete" },
    ],
  },
  {
    name: "Sundsvall",
    top: "49%", left: "50%", delay: 3,
    images: [
      { src: asset('IMG/stwk1.jpeg'),    alt: "Sundsvall – montering" },
      { src: asset('IMG/STWK5.jpg'),     alt: "Sundsvall – bil med dekal" },
    ],
  },
  {
    name: "Uppsala",
    top: "62%", left: "52%", delay: 4,
    images: [
      { src: asset('IMG/STWK6.jpg'),     alt: "Uppsala – dekal på fordon" },
    ],
  },
  {
    name: "Örebro",
    top: "66%", left: "44%", delay: 5,
    images: [
      { src: asset('IMG/STWK7.jpg'),     alt: "Örebro – logotyp monterad" },
    ],
  },
  {
    name: "Vara",
    top: "73%", left: "38%", delay: 6,
    images: [
      { src: asset('IMG/STWK8.jpg'),     alt: "Vara – bil med guldkant" },
    ],
  },
  {
    name: "Färila",
    top: "53%", left: "46%", delay: 7,
    images: [
      { src: asset('IMG/DSC_1836.JPG'),  alt: "Färila – montering norr" },
    ],
  },
  {
    name: "Bollnäs",
    top: "56%", left: "48%", delay: 8,
    images: [
      { src: asset('IMG/stwk2.jpg'),     alt: "Bollnäs – fordonsgrafik" },
    ],
  },
];

/* ─── Main page ──────────────────────────────────────────────────────────── */
export default function Stockwik() {
  const [activeCity, setActiveCity] = useState(null);   // null = no city selected
  const [imgIdx,     setImgIdx]    = useState(0);
  const touchStartX = useRef(0);

  const city   = activeCity !== null ? CITIES[activeCity] : null;
  const images = city?.images ?? [];

  const selectCity = (i) => {
    if (i === activeCity) return;          // already selected
    setActiveCity(i);
    setImgIdx(0);
  };

  const nextImg = () => setImgIdx((p) => (p + 1) % images.length);
  const prevImg = () => setImgIdx((p) => (p - 1 + images.length) % images.length);

  /* swipe support for the image panel */
  const onTouchStart = (e) => { touchStartX.current = e.changedTouches[0].screenX; };
  const onTouchEnd   = (e) => {
    const d = touchStartX.current - e.changedTouches[0].screenX;
    if (d > 50)  nextImg();
    if (d < -50) prevImg();
  };

  return (
    <main className="flex-1 bg-black">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero">
        <div
          className="hero-background"
          style={{ backgroundImage: `url('${asset('IMG/DSC_1836.JPG')}')` }}
        />
        <div className="hero-header">
          <h1>Guldkant på tillvaron.</h1>
          <p>Ett arbete för investmentbolaget Stockwik.</p>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section className="section-one">
        <div className="one-container">
          <div className="one-container-image">
            <img src={asset('IMG/stwk1.jpeg')} alt="" className="one-container-image__image" />
          </div>
          <div className="one-container-content">
            <p className="font-body">Stockwik är ett svenskt investmentbolag med ett 20-tal företag spridda på olika platser runt om i Sverige. Med en växande bolagsportfölj och en ambition om att skapa en tydligare samhörighet blev målet att foliera alla företagsbilar med en guldkant.</p>
            <p className="font-body">Som koncern med runt 400 anställda och över 100 företagsbilar på olika platser runt om i Sverige, visade det sig vara en stor logistisk utmaning för hur alla bilar på ett effektivt och noggrant sätt skulle folieras. Alternativ som att varje företagsbil skulle köras till en specifik verkstad för att folieras var både ineffektivt och kostsamt.</p>
            <p className="font-body">Humåsa kunde erbjuda en lösning där en person, efter en utbildning i montering av dekaler kunde åka runt till alla företag och foliera varje bil. Lösningen kunde både garantera ett kvalitativt resultat och var mer kosteffektiv än andra alternativ.</p>
          </div>
        </div>
        <div className="image2">
          <img src={asset('IMG/stwk2.jpg')} alt="" />
        </div>
      </section>

      {/* ── INTERACTIVE MAP + IMAGE REVEAL ───────────────────────────────── */}
      <section className="explore">

        {/* — Left: map column — */}
        <div className="explore__map-col">
          <div className="explore__text">
            <h2 className="font-heading explore__heading">Nationell närvaro</h2>
            <p className="font-body explore__intro">
              Ett logistiskt arbete där företagsbilar från norr till söder fått nya dekaler –
              planering, teknik och möten med människor i hela landet.
            </p>
            <p className="explore__hint">Välj en ort på kartan.</p>
          </div>

          <div className="explore__map-wrap">
            <div className="explore__map">
              <img
                src={asset('IMG/MAP_STWK_SWEDEN.png')}
                alt="Karta över Sverige"
                className="explore__map-img"
              />

              {CITIES.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => selectCity(i)}
                  className={`poi group ${i === activeCity ? 'poi--active' : ''}`}
                  style={{ top: c.top, left: c.left, '--delay': c.delay }}
                  aria-label={`Visa bilder från ${c.name}`}
                >
                  <div className="tooltip pointer-events-none">
                    <h3 className="font-heading font-medium">{c.name}</h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* — Right: image reveal panel — */}
        <div
          className={`explore__reveal ${city ? 'explore__reveal--open' : ''}`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {city ? (
            <>
              {/* Image stack — crossfade */}
              <div className="reveal__img-stack">
                {images.map((img, i) => (
                  <img
                    key={`${city.name}-${i}`}
                    src={img.src}
                    alt={img.alt}
                    className={`reveal__img ${i === imgIdx ? 'reveal__img--visible' : ''}`}
                  />
                ))}
                {/* Vignette */}
                <div className="reveal__vignette" />
              </div>

              {/* City label — bottom left */}
              <div className="reveal__label" key={city.name}>
                <span className="reveal__label-sub">Plats</span>
                <h3 className="reveal__label-city font-heading">{city.name}</h3>
              </div>

              {/* Image counter (e.g. 2 / 5) — bottom right */}
              {images.length > 1 && (
                <div className="reveal__counter">
                  <button onClick={prevImg} className="reveal__arrow reveal__arrow--prev" aria-label="Föregående">
                    <svg viewBox="0 0 26 40"><polygon points="60.4571 47.8 40.6571 67.6 35 61.9429 49.1434 47.7995 35 33.6571 40.6571 28" transform="translate(-35 -28)" /></svg>
                  </button>
                  <span className="reveal__count-text">{imgIdx + 1} / {images.length}</span>
                  <button onClick={nextImg} className="reveal__arrow reveal__arrow--next" aria-label="Nästa">
                    <svg viewBox="0 0 26 40"><polygon points="60.4571 47.8 40.6571 67.6 35 61.9429 49.1434 47.7995 35 33.6571 40.6571 28" transform="translate(-35 -28)" /></svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Placeholder when nothing is selected */
            <div className="reveal__placeholder">
              <div className="reveal__placeholder-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p>Välj en plats på kartan<br/>för att se bilder.</p>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
