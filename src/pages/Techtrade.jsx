import { ArrowDown, ArrowUpRight, Cable, Monitor, Printer, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import NextProject from '../components/NextProject';
import { asset } from '../utils/assetPath';
import '../styles/_new-projects.css';

const services = [
  { icon: Users, title: 'Människorna.', tag: 'KUNDRELATIONER', text: 'Löpande kundkontakt kring IT-infrastruktur och IT-produkter. Att förstå behoven, hitta lösningar och vara en teknisk kontakt i vardagen.' },
  { icon: Monitor, title: 'Arbetsplatsen.', tag: 'WINDOWS & GPO', text: 'Utveckling av kundernas Windowsmiljöer med grupprinciper, datorinstallationer och konfiguration av arbetsplatser.' },
  { icon: Printer, title: 'Vardagen.', tag: 'SKRIVARMILJÖER', text: 'Installation och arbete med skrivarmiljöer som en del av kundernas dagliga IT-drift.' },
  { icon: Cable, title: 'Infrastrukturen.', tag: 'INSTALLATION PÅ PLATS', text: 'Praktiskt installationsarbete: kabeldragning, kabelhantering och uppbyggnad av kompletta IT-miljöer hos kunderna.' },
];

function BeforeAfterPhotos() {
  return (
    <div className="tech-comparison" role="group" aria-label="Bilder från Techtrade-uppdraget">
      <figure className="tech-comparison-panel tech-comparison-before">
        <div className="tech-comparison-image">
          <img src={asset('IMG/TT-3.webp')} alt="Nätverksskåp med patchpaneler, switch och kablage" width="3024" height="4032" />
        </div>
      </figure>
      <figure className="tech-comparison-panel tech-comparison-after">
        <div className="tech-comparison-image">
          <img src={asset('IMG/TT-header.webp')} alt="Dator och nätverkskablar på en arbetsplats" width="3024" height="4032" />
        </div>
      </figure>
    </div>
  );
}

export default function Techtrade() {
  return (
    <main className="case-page tech-page">
      <SEO title="Techtrade – Ett år som IT-tekniker" description="Ett konsultuppdrag hos Techtrade. Kundrelationer, Windowsmiljöer och praktisk IT-installation från Humåsa." url="/techtrade" image={asset('IMG/techtrade-servers.jpg')} />
      <section className="tech-hero case-pad">
        <div className="case-eyebrow tech-hero-label"><span>HUMÅSA × TECHTRADE</span><span>IT-KONSULT / ETT ÅR</span></div>
        <div className="tech-hero-grid">
          <div>
            <h1>TECH<span>TRADE<span className="tech-period">.</span></span></h1>
            <p className="tech-hero-copy">Bakom varje arbetsdag.<br />Under varje skrivbord.<br /><strong>IT som håller ihop.</strong></p>
            <a className="case-link" href="#uppdraget">Utforska uppdraget <ArrowDown size={18} /></a>
          </div>
          <BeforeAfterPhotos />
        </div>
        <div className="tech-hero-meta case-eyebrow"><span>KUNDKONTAKT</span><span>WINDOWS</span><span>NÄTVERK</span><span>INSTALLATION</span></div>
      </section>

      <section id="uppdraget" className="tech-intro case-pad">
        <div className="tech-tenure"><strong>12<span>+</span></strong><span className="case-eyebrow">MÅNADER SOM IT-TEKNIKER</span></div>
        <div><p className="case-eyebrow">01 / UPPDRAGET</p><h2>Teknik på riktigt.<br />Varje dag.</h2><p>Under ett år som egen konsult via Humåsa har jag arbetat nära både kunder och deras IT-miljöer. Från den dagliga driften till utveckling och installation på plats.</p><p>Ett brett uppdrag där kundrelationer, system och drift möts. Det handlar om felsökning, driftsätta nya kunder och vidare utveckling av befintliga kunder och deras IT-miljö.</p></div>
      </section>

      <figure className="tech-photo">
        <img src={asset('IMG/techtrade-servers.jpg')} alt="Kablar och utrustning i ett serverrack, illustrativ stockbild" loading="lazy" width="2000" height="1333" />
        <div className="tech-photo-title" aria-hidden="true">DET SOM<br />KOPPLAR IHOP.</div>
        <figcaption>Illustrationsbild · <a href="https://unsplash.com/photos/oZPwn40zCK4" target="_blank" rel="noreferrer">Kvistholt Photography / Unsplash</a></figcaption>
      </figure>

      <section className="tech-services case-pad">
        <div className="tech-section-heading"><p className="case-eyebrow">02 / ARBETSOMRÅDEN</p><h2>Från människa<br />till maskin.</h2></div>
        <div className="tech-service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={service.tag} className="tech-service">
                <div className="tech-service-top">
                  <span className="case-eyebrow">0{index + 1}</span>
                  <Icon size={28} strokeWidth={1.3} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="case-eyebrow tech-service-tag">{service.tag}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="tech-outro case-pad">
        <div className="tech-outro-copy">
          <p className="case-eyebrow">TEKNIKEN ÄR HALVA JOBBET.</p>
          <h2>Resten handlar<br />om <em>människor.</em></h2>
          <p>Att få tekniken att fungera börjar med att förstå dem som använder den. Det är den inställningen jag tar med mig till varje uppdrag.</p>
          <Link className="case-link" to="/about#contact">Prata IT med mig <ArrowUpRight size={22} /></Link>
        </div>
        <img className="tech-outro-portrait" src={asset('IMG/profile2.webp')} alt="Mårten Andreasson, Humåsa" width="6000" height="4000" loading="lazy" decoding="async" />
      </section>
      <NextProject currentProject="/techtrade" />
    </main>
  );
}
