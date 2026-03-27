import Gallery from '../components/Gallery';
import { asset } from '../utils/assetPath';

export default function Stockwik() {
  const images = [
    { src: asset('IMG/DSC_1836.JPG'), alt: "Stockholm 1" },
    { src: asset('IMG/DSC_1548.jpg'), alt: "Stockholm 2" },
    { src: asset('IMG/grey_flower.jpg'), alt: "Stockholm 3" }
  ];

  return (
    <main className="flex-1 bg-black">
      <section className="hero">
        <div className="hero-background" style={{ backgroundImage: `url('${asset('IMG/DSC_1836.JPG')}')` }}></div>
        <div className="hero-header">
            <h1>Guldkant på tillvaron.</h1>
            <p>Ett arbete för investmentbolaget Stockwik.</p>
        </div>
      </section>

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

      {/* MAP SECTION */}
      <div className="map-section">
        <div className="map-content-section p-8">
            <h1 className="font-heading text-4xl mb-6">Nationell närvaro</h1>
            <p className="map-intro font-body">Ett logistiskt arbete där företagsbilar från norr till söder fått nya dekaler – planering, teknik och möten med människor i hela landet.</p>
        </div>
        
        <div className="map-container">
            <div className="map-content relative">
                <img src={asset('IMG/MAP_STWK_SWEDEN.png')} alt="Map of Sweden" className="map-content-image w-full" />
                
                {[
                  { name: "Stockholm", top: "66%", left: "54%", delay: 0 },
                  { name: "Göteborg", top: "77%", left: "33%", delay: 1 },
                  { name: "Malmö", top: "90%", left: "37%", delay: 2 },
                  { name: "Sundsvall", top: "49%", left: "50%", delay: 3 },
                  { name: "Uppsala", top: "62%", left: "52%", delay: 4 },
                  { name: "Örebro", top: "66%", left: "44%", delay: 5 },
                  { name: "Vara", top: "73%", left: "38%", delay: 6 },
                  { name: "Färila", top: "53%", left: "46%", delay: 7 },
                  { name: "Bollnäs", top: "56%", left: "48%", delay: 8 }
                ].map((city) => (
                  <a key={city.name} href={`#${city.name.toLowerCase()}`} className="poi group" style={{ top: city.top, left: city.left, '--delay': city.delay }}>
                      <div className="tooltip pointer-events-none">
                          <h3 className="font-heading font-medium">{city.name}</h3>
                      </div>
                  </a>
                ))}
            </div>
        </div>
      </div>

      <div className="s-container" id="stockholm">
        <div className="s-header">
            <h2 className="font-heading text-4xl font-bold">Stockholm</h2>
        </div>
        <div className="s-gallery">
            <Gallery images={images} />
        </div>
      </div>
    </main>
  );
}
