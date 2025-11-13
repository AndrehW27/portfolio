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

          {/* ✅ Content scrolls normally */}
          <div
            ref={ContentFade}
            className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white white:text-dark-gray"
          >

            <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1200" className="text-1xl sm:text-2xl font-bold mt-4">{t("home.welcome")}</h1>
            <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1200" className="text-2xl sm:text-4xl font-bold mt-6 py-2 px-5 rounded-2xl bg-linear-to-t from-surface to-accent white:from-text-dark white:to-light-blue white:text-text shadow-[0_0_40px_#7C3AED] white:shadow-[0_0_40px_#415ff5]">{t("home.title")}</h1>
            <h3 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2000" className="typing text-2xl sm:text-4xl border-r-3 border-accent white:border-light-blue text-accent white:text-light-blue font-bold mb-10 mt-6">
              {t("home.subtitle")}
            </h3>

            <h5 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2800" className="text-sm font-bold mb-40">{t("home.text")}</h5>

            {/* <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="2800" className="carousel w-dvw sm:w-100 text-accent white:text-light-blue mb-30">
              <div className="group">
                <div className="card-carousel"><Waypoints /></div>
                <div className="card-carousel"><SquareDashedBottomCode /></div>
                <div className="card-carousel"><ServerCog /></div>
                <div className="card-carousel"><Database /></div>
                <div className="card-carousel"><ShieldCheck /></div>
                <div className="card-carousel"><Rocket /></div>
              </div>
              <div aria-hidden className="group">
                <div className="card-carousel"><Waypoints /></div>
                <div className="card-carousel"><SquareDashedBottomCode /></div>
                <div className="card-carousel"><ServerCog /></div>
                <div className="card-carousel"><Database /></div>
                <div className="card-carousel"><ShieldCheck /></div>
                <div className="card-carousel"><Rocket /></div>
              </div>
            </div> */}

            <a data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000" data-aos-delay="2800" href="#about">
              <button className="shadow-[0_0_20px_#7C3AED] white:shadow-[0_0_20px_#6594fc] bg-text white:bg-text-dark text-background white:text-text white:from-light-blue to-dark-gray font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out">
                {t("home.button")}
              </button>
            </a>

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
