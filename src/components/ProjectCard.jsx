import Button from './Button';

export default function ProjectCard({ bgImage, title, subtitle, linkText, linkTo }) {
  return (
    <section 
      className="h-[100dvh] relative flex items-end text-white bg-cover bg-center"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/15"></div>
      <div className="relative z-10 pl-8 pr-8 pb-16 md:pl-[12%] md:pr-0 md:pb-[6%] max-w-[800px] xl:max-w-[1200px]">
        <h2 className="mb-2">{title}</h2>
        <h6 className="mb-12 leading-[1.6] max-w-[60ch]">
          {subtitle}
        </h6>
        {linkTo && <Button to={linkTo} text={linkText} />}
      </div>
    </section>
  );
}
