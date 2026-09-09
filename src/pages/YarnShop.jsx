import { ArrowDown, ArrowUpRight, Cable, CreditCard, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import NextProject from '../components/NextProject';
import { asset } from '../utils/assetPath';
import '../styles/_new-projects.css';

export default function YarnShop() {
  return (
    <main className="case-page yarn-page">
      <SEO title="Garnbutik i Stockholm – Nätverk & kassasystem" description="Nytt nätverk, förbättrat wifi och ett modernt kassasystem för en garnbutik i centrala Stockholm. Ett frilansuppdrag av Humåsa." url="/garnbutik" image={asset('IMG/yarn-shop.jpg')} />
      <section className="yarn-hero case-pad">
        <div className="case-eyebrow yarn-hero-label"><span>GARNBUTIK, STOCKHOLM</span><span>TEKNIK MED OMTANKE</span></div>
        <div className="yarn-hero-grid">
          <div className="yarn-hero-copy"><p className="yarn-kicker">En liten butik. Ett stort lyft.</p><h1>Mer flyt.<br />Mindre<br /><em>trassel.</em></h1><p>Nytt nätverk och nytt kassasystem.<br />För en vardag som hänger ihop.</p><a className="case-link" href="#butiken">Följ tråden <ArrowDown size={18} /></a></div>
          <div className="yarn-hero-image"><img src={asset('IMG/yarn-shop.jpg')} alt="Garn i många färger, illustrativ stockbild" width="2000" height="1333" fetchPriority="high" /><div className="yarn-stamp" aria-hidden="true">LOKAL BUTIK<br /><span>♥</span><br />CENTRALA STOCKHOLM</div></div>
        </div>
        <div className="yarn-hero-bottom case-eyebrow"><span>FRILANSUPPDRAG / HUMÅSA</span><span>NÄTVERK + WIFI + KASSA</span></div>
      </section>

      <section id="butiken" className="yarn-story case-pad"><p className="case-eyebrow">01 / BAKOM DISKEN</p><div><h2>Plats för garn.<br /><em>Och bättre teknik.</em></h2><p>I en garnbutik i centrala Stockholm fick jag uppdraget att förnya tekniken bakom den dagliga verksamheten. Ett nytt nätverk, bättre wifi och ett helt nytt kassasystem.</p><p>Målet var enkelt: ge butiken bättre förutsättningar i vardagen, med en teknisk grund som fungerar för verksamheten.</p></div></section>

      <section className="yarn-result case-pad"><div className="yarn-result-number">10<span>×</span></div><div><p className="case-eyebrow">02 / SKILLNADEN</p><h2>Bättre wifi.<br /><em>Genom hela butiken.</em></h2><p>Med ett nytt nätverk och en ny nätverksdragning förbättrades butikens wifi omkring tiofalt.</p><div className="yarn-signal" aria-hidden="true">{Array.from({ length: 10 }, (_, i) => <i key={i} style={{ height: `${20 + i * 7}px` }} />)}</div></div></section>

      <section className="yarn-work case-pad"><p className="case-eyebrow">03 / TRÅD FÖR TRÅD</p><h2>Tre delar.<br /><em>En fungerande helhet.</em></h2><div className="yarn-work-grid">
        <article><Cable size={34} strokeWidth={1.25} /><span className="case-eyebrow">01 — GRUNDEN</span><h3>Nytt nätverk</h3><p>Installation av ett nytt nätverk och omdragning av nätverkskablar för att förbättra butikens uppkoppling.</p></article>
        <article><Wifi size={34} strokeWidth={1.25} /><span className="case-eyebrow">02 — UPPKOPPLINGEN</span><h3>Bättre wifi</h3><p>En ny nätverkslösning som gav butikens trådlösa uppkoppling ett rejält lyft i den dagliga verksamheten.</p></article>
        <article><CreditCard size={34} strokeWidth={1.25} /><span className="case-eyebrow">03 — KUND MÖTER BUTIK</span><h3>Ny kassa</h3><p>Installation av ett helt nytt, modernt kassasystem. En uppdaterad arbetsplats där butiken möter sina kunder.</p></article>
      </div></section>

      <section className="yarn-closing"><figure><img src={asset('IMG/yarn-shop.jpg')} alt="Närbild av färgglada garnnystan, illustrativ stockbild" loading="lazy" width="2000" height="1333" /><figcaption>Illustrationsbild · <a href="https://unsplash.com/photos/o-d37kiKqqc" target="_blank" rel="noreferrer">Maranda Vandergriff / Unsplash</a></figcaption></figure><div><p className="case-eyebrow">SMÅ FÖRETAG. STOR OMTANKE.</p><h2>Du kan din butik.<br /><em>Jag tar hand<br />om tekniken.</em></h2><Link className="case-link" to="/about#contact">Låt oss prata <ArrowUpRight size={22} /></Link></div></section>
      <NextProject currentProject="/garnbutik" />
    </main>
  );
}
