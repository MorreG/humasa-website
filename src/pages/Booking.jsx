import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingGallery from '../components/BookingGallery';
import SEO from '../components/SEO';
import NextProject from '../components/NextProject';
import { asset } from '../utils/assetPath';

// Replace these paths and captions with the final software screenshots.
// Set placeholder to false when a real screenshot is added.
const softwareImages = [
  { src: asset('IMG/booking/HB-S1.jpg'), alt: 'Platshållare för en skärmbild av programvarans översikt', title: 'Översikt', placeholder: true },
  { src: asset('IMG/booking/HB-S2.jpg'), alt: 'Platshållare för en skärmbild av bokningsvyn', title: 'Bokningsvy', placeholder: true },
  { src: asset('IMG/booking/HB-S3.jpg'), alt: 'Platshållare för en skärmbild av administrationen', title: 'Administration', placeholder: true },
  { src: asset('IMG/booking/HB-S4.jpg'), alt: 'Platshållare för en skärmbild av administrationen', title: 'Administration', placeholder: true },
];

const responsibilities = [
  { title: 'Rätt förutsättningar', text: 'Inköp och planering utifrån arbetsplatsens behov. Från val av utrustning till hur systemet ska passa in i den befintliga miljön.' },
  { title: 'På plats, hela vägen', text: 'Montering, anslutning och installation. Skärmarna ska bli en naturlig del av kontoret, med tekniken bakom på plats.' },
  { title: 'Även efter installationen', text: 'Ett bokningssystem behöver fungera över tid. Uppdraget omfattar också löpande underhåll och en teknisk kontakt när behov uppstår.' },
];

export default function Booking() {
  return (
    <main className="booking-page flex-1 bg-black">
      <SEO
        title="Bokningssystem - Effektiv arbetsplats"
        description="Läs om hur Humåsa hjälpte Stockwik med inköp och installation av ett modernt bokningssystem från Humly för delade arbetsytor."
        url="/booking"
      />
      <section className="hero">
        <div className="hero-background" style={{ backgroundImage: `url('${asset('IMG/STWKBOKNING1.jpg')}')` }}></div>
        <div className="hero-header">
          <h1>Bokningssystem med Humly.</h1>
          <p>Inköp, installation och underhåll av ett bokningssystem från Humly.</p>
        </div>
      </section>

      <section className="section-one">
        <div className="one-container">
          <div className="one-container-image">
            <img src={asset('IMG/STWKBOOKING3.jpg')} alt="Nätverksutrustning och förpackningar inför installationen" className="one-container-image__image" />
          </div>
          <div className="one-container-content">
            <p className="font-body">På en arbetsplats där flera personer delar på mötesrum och arbetsytor behöver det vara enkelt att se vad som är ledigt. För Stockwik fick Humåsa i uppdrag att ta hand om inköp, installation och underhåll av ett bokningssystem från Humly.</p>
            <p className="font-body">Målet var att göra rummens tillgänglighet tydlig redan utanför dörren. En lösning som passar in i kontorsmiljön och hjälper medarbetarna att planera sin arbetsdag.</p>
            <p className="font-body">Med bokningspaneler på plats får varje rum en tydlig kontaktpunkt. Bakom skärmarna finns installationen och anslutningarna som får helheten att fungera.</p>
          </div>
        </div>

        <div className="one-container two">
          <div className="one-container-image">
            <img src={asset('IMG/STWKBOOKING4.png')} alt="Kopplingsschema mellan router, PoE-switch, nätverksuttag och två bokningsskärmar" className="one-container-image__image two" />
          </div>
          <div className="one-container-content">
            <p className="font-body">En enkel upplevelse på framsidan börjar med en genomtänkt installation bakom. För att skärmarna ska fungera som en del av arbetsplatsen behöver både nätverk och strömförsörjning finnas på rätt plats.</p>
            <p className="font-body">Skärmarna ansluts via nätverksuttag till en PoE-switch, som i sin tur är kopplad till routern. Med PoE går både ström och data genom nätverkskabeln, vilket ger en installation med färre separata anslutningar vid varje skärm.</p>
            <p className="font-body">Humåsa tog hand om installationen på plats, med fokus på att få tekniken att fungera tillsammans och smälta in i kontorets miljö.</p>
          </div>
        </div>
      </section>

      <section className="booking-experience booking-wrap" aria-labelledby="booking-experience-title">
        <div className="booking-section-heading">
          <div><p className="booking-eyebrow">01 / PÅ PLATS</p><h2 id="booking-experience-title">Ett rum.<br /><span>Ett tydligt besked.</span></h2></div>
          <p>En blick på väg till mötet. Redan utanför dörren visar skärmen om rummet är ledigt eller upptaget. Teknik som tar liten plats, men gör skillnad i vardagen.</p>
        </div>
        <figure className="booking-panorama">
          <img src={asset('IMG/booking/HB-2.webp')} alt="Två Humly-paneler med grönt ljus vid kontorets glasväggar och mötesrum" loading="lazy" width="1920" height="1280" />
          <figcaption><span>STOCKWIK / INSTALLATION PÅ PLATS</span><span>Humly Room Display</span></figcaption>
        </figure>
        <div className="booking-status-grid">
          <figure>
            <div className="booking-status-image"><img src={asset('IMG/booking/HB-4.webp')} alt="Panelen vid arbetsrummet lyser grönt och visar Ledigt" loading="lazy" width="1920" height="1280" /></div>
            <figcaption><h3><i className="booking-dot" />Plats för nästa idé.</h3><p>Grönt ljus. Rummet är ledigt och statusen syns direkt på skärmen.</p></figcaption>
          </figure>
          <figure>
            <div className="booking-status-image"><img src={asset('IMG/booking/HB-3.webp')} alt="Panelen vid konferensrummet lyser rött och visar en pågående bokning" loading="lazy" width="1920" height="1280" /></div>
            <figcaption><h3><i className="booking-dot booking-dot--busy" />Mötet får ta plats.</h3><p>Rött ljus. En bokning pågår, med informationen synlig utanför rummet.</p></figcaption>
          </figure>
        </div>
      </section>

      <section className="booking-software" aria-labelledby="booking-software-title">
        <div className="booking-wrap">
          <div className="booking-section-heading">
            <div><p className="booking-eyebrow">02 / BAKOM SKÄRMEN</p><h2 id="booking-software-title">Rummen på plats.<br /><span>Överblicken digitalt.</span></h2></div>
            <p>Den fysiska installationen är en del av helheten. Programvaran binder samman rummen, bokningarna och administrationen i det dagliga arbetet.</p>
          </div>
          <BookingGallery images={softwareImages} />
        </div>
      </section>

      <section className="booking-delivery booking-wrap" aria-labelledby="booking-delivery-title">
        <figure className="booking-detail-photo">
          <img src={asset('IMG/booking/HB-5.webp')} alt="Närbild av konferensrummets monterade Humly-panel med röd statusbelysning" loading="lazy" width="1920" height="1280" />
          <figcaption>DETALJ / KONFERENSRUM</figcaption>
        </figure>
        <div>
          <p className="booking-eyebrow">03 / HELHETEN</p>
          <h2 id="booking-delivery-title">Från första kabeln.<br /><span>Till nästa arbetsdag.</span></h2>
          <ol className="booking-responsibilities">
            {responsibilities.map((item, index) => <li key={item.title}><span className="booking-step">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="booking-closing" aria-labelledby="booking-closing-title">
        <img src={asset('IMG/booking/HB-1.webp')} alt="Den färdiga installationen med bokningspaneler vid två rum hos Stockwik" loading="lazy" width="1920" height="1280" />
        <div className="booking-wrap booking-closing-content">
          <p className="booking-eyebrow">TEKNIK SOM PASSAR IN.</p>
          <h2 id="booking-closing-title">Mer plats<br />för arbetsdagen.</h2>
          <p>En genomtänkt installation. Tydlig information vid dörren. Och någon att vända sig till när tekniken behöver omtanke.</p>
          <Link className="booking-contact" to="/about#contact">Prata om din arbetsplats <ArrowUpRight size={20} aria-hidden="true" /></Link>
        </div>
      </section>
      <NextProject currentProject="/booking" />
    </main>
  );
}
