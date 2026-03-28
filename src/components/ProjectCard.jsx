import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ bgImage, title, subtitle, linkText, linkTo }) {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Background Parallax (Slight zoom and subtle movement)
      gsap.fromTo(bgRef.current, 
        { scale: 1.1, y: "-5%" },
        { 
          scale: 1, 
          y: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // 2. Content Entrances (Triggered when entering viewport)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      tl.from([titleRef.current, subRef.current, btnRef.current], {
        yPercent: 100,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="h-[100dvh] relative flex items-end text-white overflow-hidden bg-black"
    >
      {/* Parallax Background Layer */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 pl-8 pr-8 pb-16 md:pl-[12%] md:pr-0 md:pb-[6%] max-w-[800px] xl:max-w-[1200px]">
        {/* Overflow hidden wrappers for vertical reveal */}
        <div className="overflow-hidden mb-2">
          <h2 ref={titleRef} className="font-heading font-bold m-0 tracking-tight">
            {title}
          </h2>
        </div>

        <div className="overflow-hidden mb-12">
          <h6 ref={subRef} className="font-body font-normal leading-[1.6] max-w-[60ch] m-0">
            {subtitle}
          </h6>
        </div>

        <div className="overflow-hidden inline-block">
          <div ref={btnRef}>
            {linkTo && <Button to={linkTo} text={linkText} />}
          </div>
        </div>
      </div>
    </section>
  );
}
