import Gallery from '../components/Gallery';

export default function Booking() {
  const images = [
    { src: "/IMG/STWKBOOKING8.jpg", alt: "Bokning 1" },
    { src: "/IMG/DSC_1548.jpg", alt: "Bokning 2" },
    { src: "/IMG/grey_flower.jpg", alt: "Bokning 3" }
  ];

  return (
    <main className="flex-1 bg-black">
      <section className="hero">
        <div className="hero-background" style={{ backgroundImage: 'url("/IMG/STWKBOKNING1.jpg")' }}></div>
        <div className="hero-header">
            <h1>Bokningssystem med Humly.</h1>
            <p>Inköp, installation samt upprätthållning av ett bokningssystem från humly.</p>
        </div>
      </section>

      <section className="section-one">
        <div className="one-container">
            <div className="one-container-image">
                <img src="/IMG/STWKBOOKING3.jpg" alt="" className="one-container-image__image" />
            </div>
            <div className="one-container-content">
                <p className="font-body">Stockwik är ett svenskt investmentbolag med 24 företag spridda på olika platser runt om i Sverige. Med en växande bolagsportfölj och en ambition om att skapa en tydligare samhörighet blev målet att foliera alla företagsbilar med en guldkant.</p>
                <p className="font-body">Som koncern med runt 400 anställda och över 100 företagsbilar på olika platser runt om i Sverige, visade det sig vara en stor logistisk utmaning för hur alla bilar på ett effektivt och noggrant sätt skulle folieras. Alternativ som att varje företagsbil skulle köras till en specifik verkstad för att folieras var både ineffektivt och kostsamt.</p>
                <p className="font-body">Humåsa kunde erbjuda en lösning där en person, efter en utbildning i montering av dekaler kunde åka runt till alla företag och foliera varje bil. Lösningen kunde både garantera ett kvalitativt resultat och var mer kosteffektiv än andra alternativ.</p>
            </div>
        </div>

        <div className="one-container two">
            <div className="one-container-image">
                <img src="/IMG/STWKBOOKING4.png" alt="" className="one-container-image__image two" />
            </div>
            <div className="one-container-content">
                <p className="font-body">Stockwik är ett svenskt investmentbolag med 24 företag spridda på olika platser runt om i Sverige. Med en växande bolagsportfölj och en ambition om att skapa en tydligare samhörighet blev målet att foliera alla företagsbilar med en guldkant.</p>
                <p className="font-body">Som koncern med runt 400 anställda och över 100 företagsbilar på olika platser runt om i Sverige, visade det sig vara en stor logistisk utmaning för hur alla bilar på ett effektivt och noggrant sätt skulle folieras. Alternativ som att varje företagsbil skulle köras till en specifik verkstad för att folieras var både ineffektivt och kostsamt.</p>
                <p className="font-body">Humåsa kunde erbjuda en lösning där en person, efter en utbildning i montering av dekaler kunde åka runt till alla företag och foliera varje bil. Lösningen kunde både garantera ett kvalitativt resultat och var mer kosteffektiv än andra alternativ.</p>
            </div>
        </div>

        <div className="one-container two">
            <div className="one-container-image">
                <img src="/IMG/STWKBOOKING7.jpg" alt="" className="one-container-image__image" />
            </div>
            <div className="one-container-image">
                <img src="/IMG/STWKBOOKING7.jpg" alt="" className="one-container-image__image" />
            </div>
        </div>
      </section>

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
