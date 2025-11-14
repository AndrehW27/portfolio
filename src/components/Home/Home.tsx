import './Home.css'
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

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
      <nav className="text-text font-bold fixed w-dvw top-0 left-0 bg-background white:bg-white-bg z-9998">
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
          <div ref={ContentFade} className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white white:text-dark-gray">

            {/* WELCOME */}
            {/* <div className='absolute top-20 left-5 w-2 h-2 up-and-down bg-linear-to-t from-accent   bg-transparent rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_#7C3AED] white:shadow-[0_0_40px_#415ff5]'>
            </div>
            <div className='absolute top-30 right-5 w-5 h-5 up-and-down bg-linear-to-t from-accent   bg-transparent rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_#7C3AED] white:shadow-[0_0_40px_#415ff5]'>
            </div>
            <div className='absolute top-27 left-7 w-13 h-13 up-and-down bg-linear-to-t from-accent   bg-transparent rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_#7C3AED] white:shadow-[0_0_40px_#415ff5]'>
            </div> */}


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
            <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1200" className="text-1xl sm:text-2xl font-bold mt-4">{t("home.welcome")}</h1>
            <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1200" className="text-2xl sm:text-4xl font-bold mt-6 py-2 px-5 rounded-full bg-surface text-text white:from-text-dark white:to-light-blue white:text-text shadow-[0_0_40px_#7C3AED] white:shadow-[0_0_40px_#415ff5]">{t("home.title")}</h1>
            <h3 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2000" className="typing text-1xl text-accent sm:text-4xl border-r-3 border-accent white:border-light-blue white:text-light-blue font-bold mb-10 mt-6">{t("home.subtitle")}</h3>
            <h5 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2800" className="text-sm font-bold mb-40 mt-10">{t("home.text")}</h5>

            {/* ABOUT BUTTON */}
            <a data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000" data-aos-delay="2800" href="#about">
              <button className="shadow-[0_0_20px_#7C3AED] white:shadow-[0_0_20px_#6594fc] bg-text white:bg-text-dark text-background white:text-text white:from-light-blue to-dark-gray font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out">
                {t("home.button")}
              </button>
            </a>

            {/* DOWN CHEVRON */}
            <a data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000" data-aos-delay="2800" className="up-and-down absolute bottom-10" href="#about">
              <ChevronDown />
            </a>

          </div>
        </section>
      </section>
    </>
  );
}

export default Hero;
