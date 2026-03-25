import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <main className="flex-1">
      <ProjectCard 
        bgImage="/IMG/CC-frontpage3.jpg"
        title="CLEAN CHOICE"
        subtitle="När målet är perfektion"
        linkText="Upptäck mer"
        linkTo="/cleanchoice"
      />
      <ProjectCard 
        bgImage="/IMG/DSC_1836.JPG"
        title="STOCKWIK DEKALER"
        subtitle="Ett nationellt täckande arbete med logistiska utmaningar i form av planering, teknik, och kontakt med verksamheter och dess personer."
        linkText="Upptäck mer"
        linkTo="/stockwik"
      />
      <ProjectCard 
        bgImage="/IMG/bokningsskärmar.jpg"
        title="BOKNINGSSYSTEM"
        subtitle="Ett bokningssystem för delade arbetsytor. En effektivare och smidigare arbetsplats."
        linkText="Upptäck mer"
        linkTo="/booking"
      />
      <ProjectCard 
        bgImage="/IMG/tahuletedtarha.jpg"
        title="TAHULET ED TARHA"
        subtitle="Kärlek till Azawakh världen över"
        linkText="Upptäck mer"
        linkTo="#"
      />
    </main>
  );
}
