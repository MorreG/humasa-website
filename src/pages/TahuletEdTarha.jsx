import Gallery from '../components/Gallery';
import SEO from '../components/SEO';
import { asset } from '../utils/assetPath';

// Replace the placeholder copy here; the layout matches Clean Choice.
const content = {
  title: 'Tahulet ed Tarha',
  subtitle: 'Kärlek till Azawakh världen över',
  description: 'Tahulet ed Tarha – kärlek till Azawakh världen över. Ett projekt hos Humåsa.',
  background: {
    heading: 'Bakgrund',
    text: 'Platshållare: Beskriv Tahulet ed Tarha och bakgrunden till projektet.',
  },
  project: {
    heading: 'Projektet',
    text: 'Platshållare: Beskriv uppdraget, målen och samarbetet med Tahulet ed Tarha.',
  },
  landing: {
    heading: 'Landningssida',
    text: 'Platshållare: Beskriv landningssidans utformning och hur den välkomnar besökaren.',
  },
  gallery: {
    heading: 'Webbplatsen',
    text: 'Platshållare: Presentera webbplatsens undersidor och bilderna i galleriet.',
  },
  featureOne: {
    heading: 'Landningssida',
    text: 'Platshållare: Beskriv den första delen av webbplatsen.',
  },
  featureTwo: {
    heading: 'Innehåll',
    text: 'Platshållare: Beskriv hur innehållet presenteras för besökaren.',
  },
  featureThree: {
    heading: 'Detaljer',
    text: 'Platshållare: Lyft fram en detalj eller funktion i projektet.',
  },
  about: {
    heading: 'Om oss',
    text: 'Platshållare: Beskriv hur webbplatsen presenterar Tahulet ed Tarha och deras kärlek till Azawakh.',
  },
  details: {
    heading: 'Fördjupning',
    text: 'Platshållare: Berätta mer om en del av projektet och visa den i bilden intill.',
  },
  summary: {
    heading: 'Sammanfattning',
    text: 'Platshållare: Sammanfatta projektet och det färdiga resultatet.',
  },
};

// All image slots temporarily use the existing project image.
// Replace each path (relative to public/) and alt text as new images are added.
const images = {
  hero: { src: asset('IMG/tahuletedtarha.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  background: { src: asset('IMG/tahuletedtarha.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  project: { src: asset('IMG/tahuletedtarha.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  landing: { src: asset('IMG/tahuletedtarha.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  firstBanner: { src: asset('IMG/tahuletedtarha.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  secondBanner: { src: asset('IMG/tahuletedtarha.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  about: { src: asset('IMG/tahuletedtarha.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  details: { src: asset('IMG/tahuletedtarha.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  summary: { src: asset('IMG/tahuletedtarha.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  gallery: [
    { src: asset('IMG/tahuletedtarha.jpg'), alt: 'Tahulet ed Tarha – tillfällig galleribild 1' },
    { src: asset('IMG/tahuletedtarha.jpg'), alt: 'Tahulet ed Tarha – tillfällig galleribild 2' },
    { src: asset('IMG/tahuletedtarha.jpg'), alt: 'Tahulet ed Tarha – tillfällig galleribild 3' },
  ],
};

export default function TahuletEdTarha() {
  return (
    <main className="flex-1 text-white bg-black">
      <SEO 
        title={content.title}
        description={content.description}
        url="/tahuletedtarha"
        image={images.hero.src}
      />
      <section className="hero">
        <div className="hero-background" style={{ backgroundImage: `url('${images.hero.src}')`, backgroundPosition: 'center 80%' }}></div>
        <div className="hero-header">
            <h1>{content.title}</h1>
            <p>{content.subtitle}</p>
        </div>
      </section>

      <section className="section-two">
        <div className="two-background relative">
            <img src={images.background.src} alt={images.background.alt} className="two-background-image" />
        </div>
        <div className="two-text-container">
            <div className="two-text">
                <h2 className="text-3xl font-subheading font-bold mb-4">{content.background.heading}</h2>
                <p className="font-body text-[1rem]">{content.background.text}</p>
            </div>
        </div>
      </section>

      <section className="section-three">
        <div className="three-grid">
            <div className="three-grid-1 relative">
                <img src={images.project.src} alt={images.project.alt} className="three-grid-image absolute inset-0 object-cover" />
            </div>
            <div className="three-grid-2">
                <div className="three-text-container-1">
                    <h2 className="text-3xl font-subheading font-bold mb-4">{content.project.heading}</h2>
                    <p className="font-body text-[1rem]">{content.project.text}</p>
                </div>
            </div>
            <div className="three-grid-3 relative">
                <img src={images.landing.src} alt={images.landing.alt} className="three-grid-image absolute inset-0 object-cover" />
            </div>
            <div className="three-grid-4">
                <div className="three-text-container-2">
                    <h2 className="text-3xl font-subheading font-bold mb-4">{content.landing.heading}</h2>
                    <p className="font-body text-[1rem]">{content.landing.text}</p>
                </div>
            </div>
        </div>
      </section>

      <section className="h-[40vh] md:h-[60vh] bg-fixed bg-cover bg-center my-[10em]" style={{ backgroundImage: `url('${images.firstBanner.src}')` }}>
      </section>

      <section className="section-five">
        <div className="five-background">
            <Gallery images={images.gallery} />
        </div>
        <div className="five-text-container">
            <div className="five-text">
                <h2 className="text-3xl font-subheading font-bold mb-4">{content.gallery.heading}</h2>
                <p className="font-body text-[1rem]">{content.gallery.text}</p>
            </div>
        </div>
      </section>

      <section className="section-six">
        <div className="six-info-container">
            <div className="six-info-1">
                <div className="six-info-text six-info-text-1">
                    <h2 className="text-2xl font-subheading mb-2">{content.featureOne.heading}</h2>
                    <p className="font-body text-[0.9rem]">{content.featureOne.text}</p>
                </div>
            </div>
            <div className="six-info-2">
                <div className="six-info-text six-info-text-2">
                    <h2 className="text-2xl font-subheading mb-2">{content.featureTwo.heading}</h2>
                    <p className="font-body text-[0.9rem]">{content.featureTwo.text}</p>
                </div>
            </div>
            <div className="six-info-3">
                <div className="six-info-text six-info-text-3">
                    <h2 className="text-2xl font-subheading mb-2">{content.featureThree.heading}</h2>
                    <p className="font-body text-[0.9rem]">{content.featureThree.text}</p>
                </div>
            </div>
        </div>
      </section>

      <section className="h-[40vh] md:h-[60vh] bg-fixed bg-cover bg-center my-[10em]" style={{ backgroundImage: `url('${images.secondBanner.src}')` }}>
      </section>

      <section className="section-eight">
        <div className="eight-background relative">
            <img src={images.about.src} alt={images.about.alt} className="eight-background-image absolute inset-0" />
        </div>
        <div className="eight-text-container">
            <div className="eight-text">
                <h2 className="text-3xl font-subheading font-bold mb-4">{content.about.heading}</h2>
                <p className="font-body text-[1rem]">{content.about.text}</p>
            </div>
        </div>
      </section>

      <section className="section-nine mb-20">
        <div className="nine-grid">
            <div className="nine-grid-1 relative">
                <img src={images.details.src} alt={images.details.alt} className="nine-grid-image absolute inset-0 object-cover" />
            </div>
            <div className="nine-grid-2">
                <div className="nine-text-container-1">
                    <h2 className="text-3xl font-subheading font-bold mb-4">{content.details.heading}</h2>
                    <p className="font-body text-[1rem]">{content.details.text}</p>
                </div>
            </div>
            <div className="nine-grid-3 relative">
                <img src={images.summary.src} alt={images.summary.alt} className="nine-grid-image absolute inset-0 object-cover" />
            </div>
            <div className="nine-grid-4">
                <div className="nine-text-container-2">
                    <h2 className="text-3xl font-subheading font-bold mb-4">{content.summary.heading}</h2>
                    <p className="font-body text-[1rem]">{content.summary.text}</p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
