import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img from "../../assets/darkwave-bg.png";
import img2 from "../../assets/bg-blue-gray.png";
import "./Test.css";

gsap.registerPlugin(ScrollTrigger);

export default function Test() {
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    const container = containerRef.current;

    if (!bg || !container) return;

    // Parallax animation
    gsap.fromTo(
      bg,
      { y: "-10%" },
      {
        y: "10%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",    // when section enters the viewport
          end: "bottom top",      // until section leaves viewport
          scrub: true             // smooth scroll-linked animation
        }
      }
    );
  }, []);

  return (
    <>
      {/* Scroll padding so effect can happen */}
      <div className="h-[120vh]" />

      <section
        ref={containerRef}
        className="relative h-dvh w-full overflow-hidden"
      >
        {/* Background layer */}
        <div ref={bgRef} className="absolute inset-0">
          <img
            src={img}
            alt="bg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <img
            src={img2}
            alt="foreground"
            className="w-[400px] opacity-90"
          />
        </div>
      </section>

      <div className="h-[120vh]" />
    </>
  );
}
