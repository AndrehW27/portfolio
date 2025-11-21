import './Home.css'
import { ChevronDown, Wallpaper, DatabaseBackup, Gauge } from "lucide-react";
import { useTranslation } from "react-i18next";
import bg from "../../assets/Me/me_art_modern-nobg.png";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import wavesDark from '../../assets/videos/waves-video2.mp4';
import wavesLight from '../../assets/videos/white-video.mp4';

type HeroProps = {
  theme: string;
};

function Hero({ theme }: HeroProps) {

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
      <nav className="text-text text-xs sm:text-base font-bold fixed w-dvw top-0 left-0 bg-background white:bg-white-bg z-9990">
        <div className="w-dvw mx-auto px-6 py-4 flex justify-center items-center text-text white:text-dark-gray">

          <a className="w-11 h-11 sm:w-16 sm:h-16 fixed left-4" href="#">
            <div className="w-11 h-11 sm:w-16 sm:h-16 fixed left-4 bg-cover bg-center bg-[url('./assets/icons/aw-final.png')] white:bg-[url('./assets/icons/aw_light.png')]"></div>
          </a>

          <ul className="">
            <li><a href="#journey" className="hover:text-accent white:hover:text-light-blue mr-4 transition duration-300 ease-in-out">{t("navbar.about")}</a></li>
          </ul>
          {/* <ul className="">
            <li><a href="#journey" className="hover:text-accent mr-4 transition duration-300 ease-in-out">{t("navbar.journey")}</a></li>
          </ul> */}
          <ul className="">
            <li><a href="#projects" className="hover:text-accent white:hover:text-light-blue mr-4 transition duration-300 ease-in-out">{t("navbar.projects")}</a></li>
          </ul>
          <ul className="">
            <li><a href="#contact" className="hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out">{t("navbar.contact")}</a></li>
          </ul>
        </div>
      </nav>

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
            <div className='border-accent ml-10 sm:ml-0'>
              <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="0" className="text-xl sm:text-3xl mt-20 sm:mt-25">{t("home.welcome")}</h1>
              <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="0" className="mt-5  text-3xl sm:text-5xl  rounded-full text-accent white:text-light-blue">{t("home.title")}</h1>
              <h3 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="0" className=" typing text-1xl sm:text-3xl text-text  white:text-dark-gray border-r-3 "><span className='text-2xl sm:text-4xl'>‹ </span>{t("home.subtitle")}<span className='text-2xl sm:text-4xl'> ›</span></h3>
            </div>

            <div className='text-xs sm:text-xl mt-10 sm:mt-20 w-70 ml-10 sm:ml-0 sm:w-160 border-orange'>

              <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="800" className='flex'>
                <div className='text-accent white:text-light-blue mr-3 mb-6'>
                  <Wallpaper className='sm:w-8 h-8 sm:mr-2' />
                </div>
                <h1 className='white:text-dark-gray'>{t("home.interface")}</h1>
              </div>

              <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1200" className='flex'>
                <div className='text-accent white:text-light-blue mr-3 mb-6'>
                  <Gauge className='sm:w-8 h-8 sm:mr-2' />
                </div>
                <h1 className='white:text-dark-gray'>{t("home.api")}</h1>
              </div>

              <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1600" className='flex'>
                <div className='text-accent white:text-light-blue mr-3 mb-6'>
                  <DatabaseBackup className='sm:w-8 h-8 sm:mr-2 ' />
                </div>
                <h1 className='white:text-dark-gray'>{t("home.cycle")}</h1>
              </div>


            </div>




            {/* IMG */}
              <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="2000" className="absolute bottom-0 left-[-60px] sm:left-[-60px] w-95 sm:w-160 h-60 sm:h-90 clip-hex bg-gradient-to-tr from-background from-[20%] via-surface via-[50%] to-accent to-[120%] white:bg-gradient-to-tr white:from-background white:from-[15%] white:via-light-blue white:via-[50%] white:to-text white:to-[100%] flex justify-end items-center ">
                <h5 data-aos="zoom-in" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="2800" className="text-xs sm:text-xl w-30 sm:w-60 mr-5 sm:mr-15 mb-30">{t("home.text")}</h5>
              </div>

              <img data-aos="fade-right" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="2400" className="absolute bottom-0 left-0 w-50 sm:w-70" src={bg} />
   

            {/* ABOUT BUTTON */}
            {/* <a data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000" data-aos-delay="2800" href="#about">
              <button className="shadow-[0_0_20px_#7C3AED] white:shadow-[0_0_20px_#6594fc] bg-text white:bg-text-dark text-background white:text-text white:from-light-blue to-dark-gray  py-2 px-4 rounded mt-10 transition duration-300 ease-in-out">
                {t("home.button")}
              </button>
            </a> */}

            {/* DOWN CHEVRON */}
            <a href="#journey" data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000" data-aos-delay="2800" className="absolute bottom-5 up-and-down w-full flex justify-center">
              <ChevronDown />
            </a>

          </div>
        </section>
      </section>
    </>
  );
}

export default Hero;
