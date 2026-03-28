import ProjectCard from '../components/ProjectCard';
import SEO from '../components/SEO';
import { asset } from '../utils/assetPath';

export default function Home() {
  return (
    <main className="flex-1">
      <h1 className="sr-only">Humåsa - Professionella konsulttjänster inom design, webb och hantverk</h1>
      <SEO 
        title="Konsulttjänster inom design, webb & hantverk"
        description="Välkommen till Humåsa. Vi erbjuder skräddarsydda lösningar inom webbutveckling, grafisk dekalmontering och hantverkstjänster."
        url=""
      />
      <ProjectCard 
        bgImage={asset('IMG/CC-frontpage3.jpg')}
        title="CLEAN CHOICE"
        subtitle="När målet är perfektion"
        linkText="Upptäck mer"
        linkTo="/cleanchoice"
      />
      <ProjectCard 
        bgImage={asset('IMG/DSC_1836.JPG')}
        title="STOCKWIK DEKALER"
        subtitle="Ett nationellt täckande arbete med logistiska utmaningar i form av planering, teknik, och kontakt med verksamheter och dess personer."
        linkText="Upptäck mer"
        linkTo="/stockwik"
      />
      <ProjectCard 
        bgImage={asset('IMG/bokningsskärmar.jpg')}
        title="BOKNINGSSYSTEM"
        subtitle="Ett bokningssystem för delade arbetsytor. En effektivare och smidigare arbetsplats."
        linkText="Upptäck mer"
        linkTo="/booking"
      />
      <ProjectCard 
        bgImage={asset('IMG/tahuletedtarha.jpg')}
        title="TAHULET ED TARHA"
        subtitle="Kärlek till Azawakh världen över"
        linkText="Upptäck mer"
        linkTo="#"
      />
    </main>
  );
}
