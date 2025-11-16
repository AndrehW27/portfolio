import './Home.css'
import { ChevronDown, Wallpaper, DatabaseBackup, Gauge } from "lucide-react";
import { useTranslation } from "react-i18next";
import bg from "../../assets/me_art_modern-nobg.png";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import wavesDark from '../../assets/waves-video2.mp4';
import wavesLight from '../../assets/white-video.mp4';

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
      <nav className="text-text font-bold fixed w-dvw top-0 left-0 bg-background white:bg-white-bg z-9990">
        <div className="w-dvw mx-auto px-6 py-4 flex justify-center items-center text-text white:text-dark-gray">

          <a className="w-9 h-9 fixed left-4" href="#">
            <div className="w-9 h-9 fixed left-4 bg-cover bg-center bg-[url('./assets/aw-final.png')] white:bg-[url('./assets/aw_light.png')]"></div>
          </a>

          <ul className="text-xs">
            <li><a href="#about" className="hover:text-accent mr-2 transition duration-300 ease-in-out">{t("navbar.about")}</a></li>
          </ul>
          <ul className="text-xs">
            <li><a href="#journey" className="hover:text-accent mr-2 transition duration-300 ease-in-out">{t("navbar.journey")}</a></li>
          </ul>
          <ul className="text-xs">
            <li><a href="#projects" className="hover:text-accent mr-2 transition duration-300 ease-in-out">{t("navbar.projects")}</a></li>
          </ul>
          <ul className="text-xs">
            <li><a href="#contact" className="hover:text-accent mr-2 transition duration-300 ease-in-out">{t("navbar.contact")}</a></li>
          </ul>
        </div>
      </nav>

      <section className="bg-background white:bg-text">

        {/* HERO SECTION */}
        <section className="video-wrapper relative w-dvw h-dvh overflow-hidden">

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
          <div ref={ContentFade} className="relative z-10 flex flex-col items-start justify-start w-full h-full text-white white:text-dark-gray font-bold">

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
            <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1200" className="ml-10 text-1xl sm:text-2xl  mt-20">{t("home.welcome")}</h1>
            <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1200" className="mt-5 ml-10 text-3xl sm:text-4xl  rounded-full text-accent white:text-light-blue  ">{t("home.title")}</h1>
            <h3 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2000" className="ml-10 typing text-1xl text-text sm:text-4xl border-r-3 ">{t("home.subtitle")}</h3>


            <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2800" className=' text-xs mt-10 ml-10 w-70 border-accent'>


              <div className='flex'>
                <div className='text-accent white:text-light-blue mr-3 mb-6'>
                  <Wallpaper />
                </div>
                <h1 className='white:text-dark-gray'>Modern and highly performant applications.</h1>
              </div>
              <div className='flex'>
                <div className='text-accent white:text-light-blue mr-3 mb-6'>
                  <Gauge />
                </div>
                <h1 className='white:text-dark-gray'>High avaliablity and low-latency structured API.</h1>
              </div>
              <div className='flex'>
                <div className='text-accent white:text-light-blue mr-3 mb-6'>
                  <DatabaseBackup />
                </div>
                <h1 className='white:text-dark-gray'>Secure development and deployment proceses.</h1>
              </div>
              <div>
              </div>
            </div>

            <h5 data-aos="zoom-in" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="2800" className="text-sm w-30 mt-40 ml-55">{t("home.text")}</h5>



            {/* IMG */}
            <img data-aos="zoom-in" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="2800" className="absolute bottom-0 left-0 w-50" src={bg} />



            {/* ABOUT BUTTON */}
            {/* <a data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000" data-aos-delay="2800" href="#about">
              <button className="shadow-[0_0_20px_#7C3AED] white:shadow-[0_0_20px_#6594fc] bg-text white:bg-text-dark text-background white:text-text white:from-light-blue to-dark-gray  py-2 px-4 rounded mt-10 transition duration-300 ease-in-out">
                {t("home.button")}
              </button>
            </a> */}

            {/* DOWN CHEVRON */}
            <a data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000" data-aos-delay="2800" className="absolute bottom-5 up-and-down w-full flex justify-center" href="#about">
              <ChevronDown />
            </a>

          </div>
        </section>
      </section>
    </>
  );
}

export default Hero;
