import Gallery from '../components/Gallery';
import { asset } from '../utils/assetPath';

export default function CleanChoice() {
  const images = [
    { src: asset('IMG/Mockup.jpg'), alt: "Clean Choice Landnignssida" },
    { src: asset('IMG/Mockup (2).jpg'), alt: "Clean Choice Kontakt" },
    { src: asset('IMG/Mockup (1).jpg'), alt: "Clean Choice Tjänster" }
  ];

  return (
    <main className="flex-1 text-white bg-black">
      <section className="hero">
        <div className="hero-background" style={{ backgroundImage: `url(${asset('IMG/Mockup (18).jpg')})`, backgroundPosition: 'center 80%' }}></div>
        <div className="hero-header">
            <h1>Clean Choice</h1>
            <p>När målet är perfektion.</p>
        </div>
      </section>

      <section className="section-two">
        <div className="two-background relative">
            <img src={asset('IMG/Mockup (21).jpg')} alt="Test" className="two-background-image" />
        </div>
        <div className="two-text-container">
            <div className="two-text">
                <h2 className="text-3xl font-subheading font-bold mb-4">Bakgrund</h2>
                <p className="font-body text-[1rem]">
                    Clean Choice är ett städföretag verksamt i Stockholm norrort. 
                    I samband med ett profilbyte under 2023, där företaget även bytte namn från Ania’s städ till Clean Choice, 
                    var företaget i stort behov av en ny webbplats och ett nytt digitalt uttryck.
                </p>
            </div>
        </div>
      </section>

      <section className="section-three">
        <div className="three-grid">
            <div className="three-grid-1 relative">
                <img src={asset('IMG/Mockup (22).jpg')} alt="Clean Choice Hemsida" className="three-grid-image absolute inset-0 object-cover" />
            </div>
            <div className="three-grid-2">
                <div className="three-text-container-1">
                    <h2 className="text-3xl font-subheading font-bold mb-4">Projektet</h2>
                    <p className="font-body text-[1rem]">
                        Humåsa fick i uppdrag att ta fram ett nytt och modernt digitalt språk för Clean Choice att följa. 
                        I stark kontrast till företagets tidigare webbplats satte vi nu tjänsten som företaget levererade i fokus.
                        <br /><br />
                        I ett nära samarbete med Ania, som byggt upp Clean Choice, kunde Humåsa ta fram ett helt nytt designspråk för Clean Choice att följa.
                    </p>
                </div>
            </div>
            <div className="three-grid-3 relative">
                <img src={asset('IMG/Mockup (23).jpg')} alt="Clean Choice Hemsida" className="three-grid-image absolute inset-0 object-cover" />
            </div>
            <div className="three-grid-4">
                <div className="three-text-container-2">
                    <h2 className="text-3xl font-subheading font-bold mb-4">Landningssida</h2>
                    <p className="font-body text-[1rem]">
                        Clean Choice nya hemsida designades utifrån kundens perspektiv. 
                        Där fokuset låg på lättillgänglig information och användarvänlighet. 
                        Med ett mål om att det alltid skulle vara tydligt hur man fick information, samt hur man kom i kontakt med Clean Choice.
                        <br /><br />
                        Landningssidan följer de nya tankesättet och det blir därför snabbt tydligt vad Clean Choice är, 
                        hur man kommer i kontakt, samtidigt som vistelsen på webbplatsen förmedlar en städad men hemtrevlig känsla.
                    </p>
                </div>
            </div>
        </div>
      </section>

      <section className="h-[40vh] md:h-[60vh] bg-fixed bg-cover bg-center my-[10em]" style={{ backgroundImage: `url(${asset('IMG/Mockup (25).jpg')})` }}>
      </section>

      <section className="section-five">
        <div className="five-background">
            <Gallery images={images} />
        </div>
        <div className="five-text-container">
            <div className="five-text">
                <h2 className="text-3xl font-subheading font-bold mb-4">Tjänstesida</h2>
                <p className="font-body text-[1rem]">
                    För att bygga vidare på användarvänligheten och det tydliga designmönstret utformades varje undersida till Clean Choice tjänster med 3 punkter i grunden.
                </p>
            </div>
        </div>
      </section>

      <section className="section-six">
        <div className="six-info-container">
            <div className="six-info-1">
                <div className="six-info-text six-info-text-1">
                    <h2 className="text-2xl font-subheading mb-2">Landningssida</h2>
                    <p className="font-body text-[0.9rem]">Förstasidan för tjänsten man är inne på, där man enkelt kan komma i kontakt med Clean Choice.</p>
                </div>
            </div>
            <div className="six-info-2">
                <div className="six-info-text six-info-text-2">
                    <h2 className="text-2xl font-subheading mb-2">Innehåll</h2>
                    <p className="font-body text-[0.9rem]">Här kan besökaren snabbt få en tydlig överblick kring vad som ingår i tjänsten. 
                        För att få mer information går det även att trycka på varje område för att läsa en detaljerad beskrivning av vad som ingår.</p>
                </div>
            </div>
            <div className="six-info-3">
                <div className="six-info-text six-info-text-3">
                    <h2 className="text-2xl font-subheading mb-2">Recensioner</h2>
                    <p className="font-body text-[0.9rem]">För att hjälpa kunden att bygga upp trovärdighet och tillit till Clean Choice består varje tjänstesida av en sektion med en recension från en tidigare kund som använt sig av tjänsten.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="h-[40vh] md:h-[60vh] bg-fixed bg-cover bg-center my-[10em]" style={{ backgroundImage: `url(${asset('IMG/Top View Grid.jpg')})` }}>
      </section>

      <section className="section-eight">
        <div className="eight-background relative">
            <img src={asset('IMG/Mockup (16).jpg')} alt="Test" className="eight-background-image absolute inset-0" />
        </div>
        <div className="eight-text-container">
            <div className="eight-text">
                <h2 className="text-3xl font-subheading font-bold mb-4">Om Oss</h2>
                <p className="font-body text-[1rem]">
                    Om oss var en viktig del för Clean Choice, för ett städföretag som fortfarande expanderar och hela 
                    tiden får nya kunder är det viktigt att tidigt kunna bygga upp en relation med sina kunder.
                    <br /><br />
                    För att underlätta den processen för kunden tog vi fram en tydlig och stilren Om Oss sida åt Clean Choice, 
                    där kunden snabbt kan få en tydlig och rättvis bild av företaget.
                </p>
            </div>
        </div>
      </section>

      <section className="section-nine mb-20">
        <div className="nine-grid">
            <div className="nine-grid-1 relative">
                <img src={asset('IMG/Mockup (28)_edited.jpg')} alt="Clean Choice Hemsida" className="nine-grid-image absolute inset-0 object-cover" />
            </div>
            <div className="nine-grid-2">
                <div className="nine-text-container-1">
                    <h2 className="text-3xl font-subheading font-bold mb-4">Vanliga frågor</h2>
                    <p className="font-body text-[1rem]">                        
                        För att vidare bygga på tillgänglighet och användarvänlighet var det viktigt för Clean Choice att deras kunder på ett enkelt sätt kunde få svar på sina frågor. 
                    <br /><br />
                        Sidan utvecklades så att användaren på ett lätt sätt kan hitta just den frågan man har och därefter se svaret, 
                        dels för att minimera mängden text användaren presenteras för vid första anblick.
                    </p>
                </div>
            </div>
            <div className="nine-grid-3 relative">
                <img src={asset('IMG/grey_flower.jpg')} alt="Clean Choice Hemsida" className="nine-grid-image absolute inset-0 object-cover" />
            </div>
            <div className="nine-grid-4">
                <div className="nine-text-container-2">
                    <h2 className="text-3xl font-subheading font-bold mb-4">Sammanfattning</h2>
                    <p className="font-body text-[1rem]">
                        Clean Choice var i behov av ett nytt digitalt avtryck samt designspråk. 
                        I nära samarbete med Humåsa kunde det målet föras till verklighet, med hjälp av byggstenar som tillgänglighet, 
                        trovärdighet och användarvänlighet kunde vi skapa en väl fungerande webbplats.
                        <br /><br />
                        Arbetet gjordes av Humåsa men hemsidan genomsyras i varje sektion av önskemål och konversationer med Ania och ledningen på 
                        Clean Choice för att skapa en slutlig produkt där inte bara en webbplats byggts upp, men även en god relation.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
