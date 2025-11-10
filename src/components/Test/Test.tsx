// "use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Test.css'
import wavesVideo from '../../assets/white-video.mp4'; // Import the video asset


export default function Test() {
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!boxRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(boxRef.current, {
      scale: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 0%",     // animation *starts* when the box reaches near the top
        end: "top -100%",      // animation *ends* when the box is leaving the viewport
        scrub: true,
        markers: true
      }
    });
  }, []);

  return (
    <div className="h-[100vh] bg-background flex items-center justify-center border-2 border-red-500">
      {/* <div ref={boxRef} className="h-[100vh] w-[100vw] bg-purple-500 rounded-xl shadow-lg bg-cover bg-center h-dvh bg-[url('./assets/darkwave-bg3.png')] white:bg-[url('./assets/white-bg-blue.png')] text-text white:text-dark-gray flex flex-col items-center justify-center">
      </div> */}


      {/* <div
        ref={boxRef}
        className="w-[100dvw] h-[100dvh] border-2 border-blue-500  rounded-xl shadow-lg bg-cover bg-center bg-[url('./assets/darkwave-bg3.png')]"
      /> */}

      <section ref={boxRef} className="video-wrapper">
        <video className="video w-dvw h-dvh" src={wavesVideo} autoPlay muted loop playsInline></video>
      </section>


    </div>
  );
}
