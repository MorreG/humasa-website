import React, { useRef, useLayoutEffect } from 'react';
import { asset } from '../utils/assetPath';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../components/MagneticButton';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".anim-elem", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      });
      gsap.from(".anim-content", {
        scrollTrigger: {
          trigger: ".content-trigger",
          start: "top 80%"
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="flex flex-col flex-1 bg-black text-white">
      <section className="relative w-full h-[100vh] flex items-end pb-12 px-6 md:px-12 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={asset('IMG/DSC_1548.jpg')}
            alt="Stockholm Architecture"
            className="w-full h-full object-cover opacity-90 transition-opacity"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="anim-elem font-data text-signal mb-4 text-sm tracking-widest uppercase">
            [ HUMÅSA KONSULTTJÄNSTER ]
          </div>
          <h1 className="anim-elem flex flex-col">
            <span className="font-heading font-bold text-5xl md:text-8xl text-white tracking-tighter leading-none">
              Om
            </span>
            <span className="font-drama italic text-6xl md:text-[9rem] text-white leading-[0.85] drop-shadow-2xl">
              Humåsa.
            </span>
          </h1>
        </div>
      </section>

      <section className="content-trigger py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="anim-content font-data text-signal text-sm tracking-widest uppercase mb-6 sticky top-32">
              [ VISION ]
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col gap-16 mt-2 md:mt-0">
            <h2 className="anim-content font-heading font-medium text-3xl md:text-4xl leading-[1.3] text-white max-w-[28ch]">
              Förvandla dina affärsutmaningar till framgångsrika möjligheter med skräddarsydda konsulttjänster<span className="text-signal">.</span>
            </h2>

            <div className="anim-content flex flex-col gap-6 text-base font-body leading-[1.6] text-white/80 max-w-[65ch]">
              <p>
                Humåsa är ett konsultföretag som drivs av Mårten Andreasson. Vi specialiserar oss på att erbjuda skräddarsydda tjänster inom en rad olika områden, från specifika hantverkstjänster till webbutveckling och design. Vår målsättning är att vid varje arbete leverera personligt anpassade lösningar med högkvalitativa resultat utifrån vår kunds behov.
              </p>
              <p>
                Genom att arbeta med Humåsa får du direkt kontakt med en driven och engagerad andra part som hjälper dig att nå fram till den bästa lösningen just för dig. Vi värdesätter varje kundrelation som ett långsiktigt partnerskap baserat på öppen och kontinuerlig kommunikation.
              </p>
              <div className="mt-6 border-l-2 border-signal pl-6">
                <p className="font-drama italic text-2xl md:text-3xl text-white">
                  "Mer än bara ett konsultföretag – din partner för att nå mål på ett unikt och effektivt sätt."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 md:px-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <div className="font-data text-signal text-sm tracking-widest uppercase mb-12">
                [ KONTAKTA MIG ]
              </div>

              <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <input type="text" id="namn" className="peer w-full bg-transparent border-b border-white/30 text-white py-4 outline-none focus:border-white placeholder-transparent transition-colors font-body" placeholder="Namn" required />
                  <label htmlFor="namn" className="absolute left-0 -top-2 text-xs font-data text-white/50 pointer-events-none transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs text-white/60">Namn</label>
                </div>
                <div className="relative group">
                  <input type="email" id="mejl" className="peer w-full bg-transparent border-b border-white/30 text-white py-4 outline-none focus:border-white placeholder-transparent transition-colors font-body" placeholder="Mejl" required />
                  <label htmlFor="mejl" className="absolute left-0 -top-2 text-xs font-data text-white/50 pointer-events-none transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs text-white/60">Mejl</label>
                </div>
                <div className="relative group mt-4">
                  <textarea id="meddelande" className="peer w-full bg-transparent border-b border-white/30 text-white py-4 outline-none focus:border-white placeholder-transparent transition-colors font-body min-h-[120px] resize-none" placeholder="Meddelande" required></textarea>
                  <label htmlFor="meddelande" className="absolute left-0 -top-2 text-xs font-data text-white/50 pointer-events-none transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs text-white/60">Meddelande</label>
                </div>

                <MagneticButton type="submit" className="self-start px-8 py-4 bg-signal text-white rounded-full font-heading font-medium text-base mt-8 flex items-center gap-3">
                  Skicka meddelande <ArrowUpRight size={18} />
                </MagneticButton>
              </form>
            </div>

            <div className="relative flex flex-col justify-end items-center md:items-end">
              <div className="w-[80vw] h-[80vw] max-w-[400px] max-h-[400px] overflow-hidden rounded-full bg-black relative group mx-auto md:mx-0 shrink-0">
                <img src={asset('IMG/DSC_2306crop.png')} alt="Mårten Andreasson" className="w-[80%] h-[80%] object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] opacity-90 mx-auto translate-y-[10%]" />
              </div>
              <div className="mt-8 text-center md:text-right">
                <h2 className="font-heading font-bold text-3xl mb-2 text-white">Mårten Andreasson</h2>
                <div className="flex flex-col gap-1 font-data text-white/70 text-sm md:items-end">
                  <a href="tel:+46735404671" className="hover:text-signal transition-colors w-max">+46 73 540 46 71</a>
                  <a href="mailto:hmsandreasson@gmail.com" className="hover:text-signal transition-colors w-max">hmsandreasson@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
