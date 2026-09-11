import SEO from '../components/SEO';
import NextProject from '../components/NextProject';
import { asset } from '../utils/assetPath';

const content = {
  title: 'Tahulet ed Tarha',
  subtitle: 'Kärlek till Azawakh världen över',
  description: 'Läs om hur Humåsa byggde en webbplats åt Tahulet ed Tarha, en hundkennel med kärlek till Azawakh och ett intresse som sträcker sig världen över.',
  background: {
    heading: 'Bakgrund',
    text: 'Tahulet ed Tarha är en passionerad hundkennel med en kärlek till Azawakh, ett intresse som delas av människor världen över. I samband med uppstarten behövde kenneln en egen webbplats för att presentera hundarna och tankarna bakom uppfödningen. En plats där nya kontakter kunde skapas och där intresserade kunde följa kenneln från början.',
  },
  project: {
    heading: 'Projektet',
    text: 'Humåsa fick i uppdrag att bygga en hemsida som gav Tahulet ed Tarha en personlig plats på nätet. Med hundarna och uppfödningen i fokus ville vi skapa en webbplats där kärleken till rasen fick ta plats i både bild och text. Målet var att göra det enkelt att lära känna kenneln, följa utvecklingen och komma i kontakt, oavsett var i världen besökaren befinner sig.',
  },
  landing: {
    heading: 'Struktur',
    text: 'Webbplatsens struktur utformades för både den som möter Tahulet ed Tarha för första gången och den som återkommer för att se vad som hänt sedan sist. Information om kenneln och hundarna ger en introduktion, medan uppdateringar kring uppfödningen ger en anledning att komma tillbaka. Med en tydlig uppdelning av innehållet ville vi göra det lätt att hitta vidare och fördjupa sig i det som väcker intresse.',
  },
  about: {
    heading: 'Hundarna i bild',
    text: 'Bilderna fick en central roll i utformningen av webbplatsen. De låter besökaren lära känna hundarna och följa deras utveckling, även på avstånd. Genom att ge fotografierna gott om utrymme ville vi förmedla närheten till hundarna och vardagen på kenneln. För ett intresse som sträcker sig över landsgränser blir bilderna också ett gemensamt språk, där varje ögonblick kan berätta något utan att behöva förklaras i ord.',
  },
  details: {
    heading: 'Löpande uppdateringar',
    text: 'För att ge en djupare inblick i uppfödningen behövde bilderna kompletteras med text. Webbplatsen fick därför utrymme för uppdateringar om hundarnas utveckling, planer för kenneln och händelser längs vägen. Här kan Tahulet ed Tarha dela med sig av både små framsteg och större milstolpar. Texterna ger ett sammanhang till bilderna och låter den som är intresserad följa hur en ny kennel växer fram, steg för steg.',
  },
  summary: {
    heading: 'Sammanfattning',
    text: 'Med den nya webbplatsen har Tahulet ed Tarha fått en plats att samla sin berättelse och dela den med människor som har samma intresse för Azawakh. Humåsa har låtit bild, text och en tydlig struktur samverka för att presentera kenneln och ge utrymme för det som kommer framöver. Resultatet är en personlig hemsida som kan växa tillsammans med uppfödningen och knyta kontakter världen över.',
  },
};

// Update each path (relative to public/) and alt text as images are finalized.
const images = {
  hero: { src: asset('IMG/TeT-header.JPG'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  background: { src: asset('IMG/TeT-1.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  project: { src: asset('IMG/TeT-2.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  landing: { src: asset('IMG/TeT-3.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  secondBanner: { src: asset('IMG/TeT-7.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  about: { src: asset('IMG/TeT-6.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  details: { src: asset('IMG/TeT-4.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
  summary: { src: asset('IMG/TeT-5.jpg'), alt: 'Tahulet ed Tarha – tillfällig projektbild' },
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
      <NextProject currentProject="/tahuletedtarha" />
    </main>
  );
}
