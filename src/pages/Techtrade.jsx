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

function PatchPanel() {
  return (
    <div className="tech-patch" aria-hidden="true">
      <div className="tech-patch-top"><span>HUMÅSA / FIELD NOTES</span><span>01—12</span></div>
      <svg viewBox="0 0 440 380" fill="none">
        <defs><pattern id="tech-grid" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" opacity=".2" /></pattern></defs>
        <rect width="440" height="380" fill="url(#tech-grid)" />
        {[68, 158, 248, 338].map((x, index) => (
          <g key={x} stroke="currentColor">
            <rect x={x - 24} y="40" width="48" height="38" rx="3" />
            <path d={`M${x - 12} 49v12h24V49M${x - 8} 61v8h16v-8`} />
            <text x={x} y="27" fill="currentColor" stroke="none" textAnchor="middle" fontSize="9" fontFamily="monospace">0{index + 1}</text>
          </g>
        ))}
        <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
          <path d="M68 78v68c0 60 180 20 180 90v64" />
          <path d="M158 78v42c0 80-90 70-90 146v34" opacity=".35" />
          <path d="M248 78v48c0 68 90 70 90 138v36" />
          <path d="M338 78v20c0 100-180 70-180 160v42" opacity=".35" />
        </g>
        {[68, 158, 248, 338].map(x => <g key={x} fill="currentColor"><rect x={x - 13} y="300" width="26" height="36" rx="3" /><circle cx={x} cy="360" r="3" /></g>)}
      </svg>
      <div className="tech-patch-bottom"><span>FRÅN KABEL TILL KUNDKONTAKT</span><span>↗</span></div>
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
          <PatchPanel />
        </div>
        <div className="tech-hero-meta case-eyebrow"><span>KUNDKONTAKT</span><span>WINDOWS</span><span>NÄTVERK</span><span>INSTALLATION</span></div>
      </section>

      <section id="uppdraget" className="tech-intro case-pad">
        <div className="tech-tenure"><strong>12</strong><span className="case-eyebrow">MÅNADER SOM IT-TEKNIKER</span></div>
        <div><p className="case-eyebrow">01 / UPPDRAGET</p><h2>Teknik på riktigt.<br />Varje dag.</h2><p>Under ett år som konsult hos Techtrade har jag arbetat nära både kunder och deras IT-miljöer. Från den dagliga driften till utveckling och installation på plats.</p><p>Ett brett uppdrag där kundrelationer, system och det praktiska hantverket möts. I samtalet om en ny dator. I en Windowsmiljö som ska utvecklas. Och i kablarna som kopplar ihop allt.</p></div>
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

      <section className="tech-outro case-pad"><p className="case-eyebrow">TEKNIKEN ÄR HALVA JOBBET.</p><h2>Resten handlar<br />om <em>människor.</em></h2><p>Att få tekniken att fungera börjar med att förstå dem som använder den. Det är den inställningen jag tar med mig till varje uppdrag.</p><Link className="case-link" to="/about#contact">Prata IT med mig <ArrowUpRight size={22} /></Link></section>
      <NextProject currentProject="/techtrade" />
    </main>
  );
}
