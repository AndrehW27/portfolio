import "./Teste.css";
// import bg from "../../assets/me_art_modern-nobg.png";
// import bg2 from "../../assets/me_art_modern-nobg.png";
// import video from "../../assets/videos/wave-dna.mp4";
// import { ChevronDown } from "lucide-react";

import { ChevronDown, Wallpaper, DatabaseBackup, Gauge } from "lucide-react";
import { useTranslation } from "react-i18next";
import bg from "../../assets/Me/me-pc2.png";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import wavesDark from '../../assets/videos/waves-video2.mp4';
import wavesLight from '../../assets/videos/white-video.mp4';

type HeroProps = {
  theme: string;
};

// export default function Teste()

function Teste({ theme }: HeroProps) {

    const { t } = useTranslation();
  

  // Decide which video to use
  const videoSrc = theme === "white" ? wavesLight : wavesDark;

  // const videoSrc = theme === "white" ? wavesDarkLight;

  // Animate ONLY the video
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    if (!videoRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(videoRef.current, {
      scale: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false
      }
    });
  }, [theme]);
  // IMPORTANT: re-run when theme switches (so GSAP resets)

  // Fade content slightly
  const ContentFade = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ContentFade.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(ContentFade.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: ContentFade.current,
        start: "top 5%",
        end: "bottom top",
        scrub: true,
        markers: false
      }
    });
  }, []);


  return (

    <>
      {/* <section id="test" className="bg-fixed h-[100dvh] w-dvw"> */}
      <section className="bg-background white:bg-text ">

        {/* HERO SECTION */}
        <section className="relative w-dvw h-dvh flex flex-col items-center justify-center overflow-hidden">

          {/* ✅ Dynamic theme-based video */}
          <video
            key={videoSrc}
            // forcing React to reload video smoothly when theme changes
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />

          {/* GSAP CONTAINER ZOOM OUT VIDEO */}
          <div ref={ContentFade} className="relative z-10 w-dvw sm:w-fit  h-dvh flex flex-col items-start justify-start border-accent text-white white:text-dark-gray font-bold">

            {/* BALLS */}
            {/* {theme !== "white" &&
              <div>
                <div className='balls top-30 left-20 w-10 h-10 up-and-down1' data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2800"></div>
                <div className='balls top-30 left-50 w-20 h-20 up-and-down1' data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2800"></div>
                <div className='balls top-45 left-8 w-3 h-3 up-and-down2' data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2000"></div>
                <div className='balls top-55 right-4 w-8 h-8 up-and-down2' data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2000"></div>
                <div className='balls top-55 left-25 w-15 h-15 up-and-down2' data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2000"></div>
                <div className='balls top-70 left-12 w-8 h-8 up-and-down3' data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1200"></div>
                <div className='balls top-75 right-20 w-10 h-10 up-and-down3' data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1200"></div>
              </div>
            } */}

            {/* SENTENCES */}

            <div data-aos="fade-in" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="2000" className="absolute top-30 left-[-45px] sm:left-[-80px] w-100 sm:w-190 h-65 sm:h-120 clip-hex bg-gradient-to-tr from-background from-[20%] via-surface via-[50%] to-accent to-[120%] white:bg-gradient-to-tr white:from-background white:from-[15%] white:via-light-blue white:via-[50%] white:to-text white:to-[100%] flex justify-end items-center ">
              <img data-aos="fade-right" data-aos-duration="2000" data-aos-offset="-500" data-aos-delay="2800" className="absolute rounded-3xl bottom-0 left-10 w-80 sm:w-120 shadow-[0_0_20px_#7C3AED] white:shadow-[0_0_20px_#6594fc]" src={bg} />
              <div className='absolute top-0 right-0 w-90 h-full bg-[linear-gradient(to_left,#111_35%,transparent_60%)] z-200 border-red-500'>
                <div className='absolute top-10 right-10 border-accent ml-10 sm:ml-0'>
                  <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="0" className="text-xs sm:text-3xl">{t("home.welcome")}</h1>
                  <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="0" className="mt-5  text-base sm:text-5xl  rounded-full text-accent white:text-light-blue">{t("home.title")}</h1>
                  <h3 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="0" className=" typing text-sm sm:text-3xl text-text  white:text-dark-gray border-r-3 "><span className='text-2xl sm:text-4xl'>‹ </span>{t("home.subtitle")}<span className='text-2xl sm:text-4xl'> ›</span></h3>
                </div>
                {/* <h5 data-aos="zoom-in" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="2800" className="absolute top-20 right-10 border-blue-500 text-xs sm:text-xl w-30 sm:w-60">{t("home.text")}</h5> */}
              </div>
            </div>


            <div className='absolute bottom-20 text-xs sm:text-xl mt-10 sm:mt-20 w-80 ml-10 sm:ml-0 sm:w-160 border-orange'>

              <div className='flex'>
                <div className='text-accent white:text-light-blue mr-3 mb-6'>
                  <Wallpaper className='sm:w-8 h-8 sm:mr-2' />
                </div>
                <h1 className='white:text-dark-gray'>{t("home.interface")}</h1>
              </div>

              <div className='flex'>
                <div className='text-accent white:text-light-blue mr-3 mb-6'>
                  <Gauge className='sm:w-8 h-8 sm:mr-2' />
                </div>
                <h1 className='white:text-dark-gray'>{t("home.api")}</h1>
              </div>

              <div className='flex'>
                <div className='text-accent white:text-light-blue mr-3 mb-6'>
                  <DatabaseBackup className='sm:w-8 h-8 sm:mr-2 ' />
                </div>
                <h1 className='white:text-dark-gray'>{t("home.cycle")}</h1>
              </div>


            </div>


            {/* <img data-aos="fade-right" data-aos-duration="2000" data-aos-offset="-500" data-aos-delay="2400" className="absolute rounded-3xl bottom-0 left-0 w-65 sm:w-120 shadow-[0_0_20px_#7C3AED] white:shadow-[0_0_20px_#6594fc]" src={bg} /> */}


            {/* IMG */}




            {/* ABOUT BUTTON */}
            {/* <a data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000" data-aos-delay="2800" href="#about">
              <button className="shadow-[0_0_20px_#7C3AED] white:shadow-[0_0_20px_#6594fc] bg-text white:bg-text-dark text-background white:text-text white:from-light-blue to-dark-gray  py-2 px-4 rounded mt-10 transition duration-300 ease-in-out">
                {t("home.button")}
              </button>
            </a> */}

            {/* DOWN CHEVRON */}
            <a href="#journey" data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000" data-aos-delay="2800" className="absolute bottom-6 sm:bottom-16 up-and-down w-full flex justify-center">
              <ChevronDown className=' sm:w-10 sm:h-10'/>
            </a>

          </div>
        </section>
      </section>
      {/* <section className="video-wrapper relative bg-fixed w-dvw h-[50dvh] overflow-hidden">
        <video
          key={video}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
      </section> */}
    </>
  );
}

export default Teste;
