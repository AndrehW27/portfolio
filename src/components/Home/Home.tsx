import './Home.css'
import { ChevronDown, Wallpaper, DatabaseBackup, Gauge } from "lucide-react";
import { useTranslation } from "react-i18next";
import bg from "../../assets/Me/me-pc2.png";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import wavesDark from '../../assets/videos/waves-video2.mp4';
import wavesLight from '../../assets/videos/white-video.mp4';
import andre from "../../assets/Me/im_aw2.png";

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
      <nav className="text-text text-[10px] sm:text-base font-bold fixed w-dvw top-0 left-0 bg-background white:bg-white-bg z-9990">
        <div className="w-dvw mx-auto px-6 py-4 flex justify-center items-center text-text white:text-dark-gray">

          <a className="w-11 h-11 sm:w-16 sm:h-16 fixed left-4" href="#">
            <div className="w-11 h-11 sm:w-16 sm:h-16 fixed left-4 bg-cover bg-center bg-[url('./assets/icons/aw-final.png')] white:bg-[url('./assets/icons/aw_light.png')]"></div>
          </a>

          <ul className="">
            <li><a href="#journey" className="hover:text-accent white:hover:text-light-blue mr-4 transition duration-300 ease-in-out">{t("navbar.journey")}</a></li>
          </ul>

          <ul className="">
            <li><a href="#about" className="hover:text-accent white:hover:text-light-blue mr-4 transition duration-300 ease-in-out">{t("navbar.about")}</a></li>
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

      <section className="border-red-500 bg-background white:bg-text ">

        {/* HIDE VEO */}
        {/* <div className='absolute bottom-0 right-0 bg-accent w-20 h-20'></div> */}

        {/* HERO SECTION */}
        <section className="relative w-dvw h-dvh flex flex-col items-center justify-center overflow-hidden">

          {/* ✅ Dynamic theme-based video */}
          <video
            key={videoSrc}
            // forcing React to reload video smoothly when theme changes
            ref={videoRef}
            className="scale-110 absolute top-0 left-0 w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />

          {/* GSAP CONTAINER ZOOM OUT VIDEO */}
          <div ref={ContentFade} className="border-red-500 relative z-10 w-dvw sm:w-fit h-dvh flex flex-col items-start justify-start border-accent text-white white:text-dark-gray font-bold">

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
            <div className='sm:border border-accent sm:mb-10 white:border-light-blue sm:bg-black/30 white:sm:bg-white/30 rounded-3xl ml-10 sm:ml-0 sm:flex sm:items-start sm:justify-start sm:mt-35'
              data-aos="fade-in" data-aos-duration="3000" data-aos-offset="-500" data-aos-delay="0">


              {/* TEXT DESKTOP AND MOBILE*/}
              <div className='relative sm:ml-15 sm:mt-15 flex flex-col items-start justify-start '>
                <h1 data-aos="fade-in" data-aos-duration="3000" data-aos-delay="0" className="text-1xl sm:text-4xl mt-15 sm:mt-0">{t("home.welcome")}</h1>
                {/* MY SIGNATURE*/}
                <div className="border-red-500 absolute -top-17 -left-15 sm:-top-60 sm:-left-35 w-100 h-100 sm:w-190 sm:h-190 bg-contain bg-no-repeat bg-center z-701" style={{ backgroundImage: `url(${andre})` }}
                  data-aos="fade-in" data-aos-duration="2000" data-aos-delay="800"
                ></div>
                {/* <h1 data-aos="fade-in" data-aos-duration="3000" data-aos-delay="0" className="mt-2 sm:mt-4 text-2xl sm:text-5xl rounded-full text-accent white:text-light-blue"><span className='text-4xl sm:text-6xl'>‹ </span>{t("home.title")}<span className='text-4xl sm:text-6xl'>‹ </span></h1> */}
                <h3 data-aos="fade-left" data-aos-duration="2000" data-aos-delay="2800" className="typing mt-25 sm:mt-50 text-2xl sm:text-4xl text-text white:text-dark-gray border-r-3 z-702"><span className='text-3xl sm:text-5xl'>‹ </span>{t("home.subtitle")}<span className='text-3xl sm:text-5xl'> ›</span></h3>

                <div className='hidden sm:block text-xs sm:text-xl mt-10 sm:mt-10 w-70 ml-10 sm:ml-0 sm:w-160 border-orange'>

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

                <div className='hidden sm:flex gap-6 mt-6'>
                  {/* <div className='hover:bg-[#61dafb] bg-slate-700 w-9 h-9 sm:w-15 sm:h-15 shadow-[0_0_10px_#61dafb] white:shadow-[0_0_10px_#61dafb] transition flex items-center justify-center'>
                    <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="800" data-aos-offset="-500" loading="lazy" className='icons white:bg-text w-9 h-9 sm:w-15 sm:h-15' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                  </div> */}
                  <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="800" data-aos-offset="-500" loading="lazy" className='icons white:bg-text hover:bg-[#61dafb] bg-background w-9 h-9 sm:w-15 sm:h-15 shadow-[0_0_10px_#61dafb] white:shadow-[0_0_10px_#61dafb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                  <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1200" data-aos-offset="-500" loading="lazy" className='icons white:bg-text hover:bg-[#ea23a4] bg-background w-9 h-9 sm:w-15 sm:h-15 shadow-[0_0_10px_#ea23a4] white:shadow-[0_0_10px_#61dafb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
                  <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1600" data-aos-offset="-500" loading="lazy" className='icons white:bg-text hover:bg-[#5fa04e] bg-background w-9 h-9 sm:w-15 sm:h-15 shadow-[0_0_10px_#5fa04e] white:shadow-[0_0_10px_#61dafb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
                  <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2000" data-aos-offset="-500" loading="lazy" className='icons white:bg-text hover:bg-[#ff9900] bg-background w-9 h-9 sm:w-15 sm:h-15 shadow-[0_0_10px_#ff9900] white:shadow-[0_0_10px_#61dafb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                  <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2400" data-aos-offset="-500" loading="lazy" className='icons white:bg-text hover:bg-[#00a1e0] bg-background w-9 h-9 sm:w-15 sm:h-15 shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#61dafb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
                </div>

              </div>

              {/* IMG DESKTOP*/}
              <div className="card-home hidden sm:flex border-accent ">
                <div data-aos="fade-in" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="2000" className="relative w-100 sm:w-230 h-85 sm:h-170 clip-hex bg-gradient-to-tr from-background from-[20%] via-surface via-[50%] to-accent to-[120%] white:bg-gradient-to-tr white:from-background white:from-[15%] white:via-light-blue white:via-[50%] white:to-text white:to-[100%] justify-end items-center">
                  <img data-aos="fade-right" data-aos-duration="2000" data-aos-offset="-500" data-aos-delay="2800" className="absolute rounded-3xl bottom-0 left-10 w-80 sm:w-210" src={bg} />
                  <div className='absolute top-0 right-0 w-90 h-full bg-[linear-gradient(to_left,#111_25%,transparent_70%)] sm:w-160 sm:bg-[linear-gradient(to_left,#381f70_25%,transparent_80%)] white:sm:bg-[linear-gradient(to_left,#162c9c_35%,transparent_80%)] z-200 '>
                  </div>
                </div>
              </div>

              {/* ICONS DESKTOP */}
              {/* <img loading="lazy" className='absolute bottom-[-60px] right-160 icons hover:bg-[#61dafb] bg-background w-9 h-9 sm:w-30 sm:h-30 shadow-[0_0_10px_#61dafb] white:shadow-[0_0_10px_#61dafb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              <img loading="lazy" className='absolute bottom-85 right-45 icons hover:bg-[#ea23a4] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#ea23a4] white:shadow-[0_0_10px_#61dafb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
              <img loading="lazy" className='absolute top-20 right-20 icons hover:bg-[#5fa04e] bg-background w-9 h-9 sm:w-15 sm:h-15 shadow-[0_0_10px_#5fa04e] white:shadow-[0_0_10px_#61dafb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" /> */}

            </div>

            {/* STATS DESKTOP */}
            <div className='absolute bottom-[8dvh] w-full text-xl border-red-500  hidden sm:flex'
              data-aos="zoom-in" data-aos-duration="2000" data-aos-offset="-500" data-aos-delay="2800">
              <div className='ml-20'>
                <p className='text-5xl text-accent white:text-light-blue'>40+</p>
                <p>{t("home.github")}</p>
              </div>
              <div className='absolute left-100'>
                <p className='text-5xl text-accent white:text-light-blue mt-2'>5+</p>
                <p>{t("home.years")}</p>
              </div>
              <p className='absolute bottom-0 right-20'> {t("home.text")}</p>
            </div>

            {/* <div className='absolute top-20 right-14 text-xs'
              data-aos="zoom-in" data-aos-duration="2000" data-aos-offset="-500">

            
              <p>{t("home.github")}</p>
              <p className='text-2xl text-accent white:text-light-blue mt-2'>5+</p>
              <p>{t("home.years")}</p>

            </div> */}

            {/* TEXT MOBILE */}
            <div className='sm:hidden text-xs mt-5 w-70 ml-10 '>

              <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="800" className='flex items-center justify-start mb-3 border-accent'>
                <div className='text-accent white:text-light-blue mr-3 '>
                  <Wallpaper className=' ' />
                </div>
                <h1 className='white:text-dark-gray'>{t("home.interface")}</h1>
              </div>

              <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1200" className='flex items-center justify-start mb-3'>
                <div className='text-accent white:text-light-blue mr-3'>
                  <Gauge className='' />
                </div>
                <h1 className='white:text-dark-gray'>{t("home.api")}</h1>
              </div>

              <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1600" className='flex items-center justify-start mb-3'>
                <div className='text-accent white:text-light-blue mr-3'>
                  <DatabaseBackup className=' ' />
                </div>
                <h1 className='white:text-dark-gray'>{t("home.cycle")}</h1>
              </div>

              <div className='flex gap-4 mt-6'>
                <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="800" data-aos-offset="-500" loading="lazy" className='rounded-full p-2 white:bg-text hover:bg-[#61dafb] bg-background w-9 h-9 sm:w-15 sm:h-15 shadow-[0_0_10px_#61dafb] white:shadow-[0_0_10px_#61dafb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1200" data-aos-offset="-500" loading="lazy" className='rounded-full p-2 white:bg-text hover:bg-[#ea23a4] bg-background w-9 h-9 sm:w-15 sm:h-15 shadow-[0_0_10px_#ea23a4] white:shadow-[0_0_10px_#61dafb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
                <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1600" data-aos-offset="-500" loading="lazy" className='rounded-full p-2 white:bg-text hover:bg-[#5fa04e] bg-background w-9 h-9 sm:w-15 sm:h-15 shadow-[0_0_10px_#5fa04e] white:shadow-[0_0_10px_#61dafb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
                <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2000" data-aos-offset="-500" loading="lazy" className='rounded-full p-2 white:bg-text hover:bg-[#ff9900] bg-background w-9 h-9 sm:w-15 sm:h-15 shadow-[0_0_10px_#ff9900] white:shadow-[0_0_10px_#61dafb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2400" data-aos-offset="-500" loading="lazy" className='rounded-full p-2 white:bg-text hover:bg-[#00a1e0] bg-background w-9 h-9 sm:w-15 sm:h-15 shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#61dafb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
              </div>

              {/* <div className='flex text-xs mt-4'
                data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2400" data-aos-offset="-500">
                <div>
                  <p className='text-3xl text-accent white:text-light-blue'>40+</p>
                  <p>{t("home.github")}</p>
                </div>
                <div className='ml-6'>
                  <p className='text-3xl text-accent white:text-light-blue'>5+</p>
                  <p>{t("home.years")}</p>
                </div>
              </div> */}

            </div>


            {/* IMG MOBILE */}

            <div className="card-home flex absolute bottom-0 left-[-45px] sm:hidden border-accent">
              <div data-aos="fade-in" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="2000" className="flex w-110 sm:w-190 h-70 sm:h-120 clip-hex bg-gradient-to-tr from-background from-[20%] via-surface via-[50%] to-accent to-[120%] white:bg-gradient-to-tr white:from-background white:from-[15%] white:via-light-blue white:via-[50%] white:to-text white:to-[100%] justify-end items-center">
                <img data-aos="fade-right" data-aos-duration="2000" data-aos-offset="-500" data-aos-delay="2800" className="absolute rounded-3xl bottom-0 left-10 w-90 sm:w-150" src={bg} />
                <div className='absolute top-0 right-0 w-90 h-full bg-[linear-gradient(to_left,#111_50%,transparent_70%)] sm:w-120 sm:bg-[linear-gradient(to_left,#111_45%,transparent_100%)] z-200 '>
                  <h5 data-aos="zoom-in" data-aos-duration="2000" data-aos-offset="0" data-aos-delay="2800" className="absolute top-8 sm:top-25 right-4 sm:right-10 border-blue-500 text-sm sm:text-3xl w-35 sm:w-80 white:text-text">{t("home.text")}</h5>

                  <div className='absolute top-20 right-14 text-xs'
                    data-aos="zoom-in" data-aos-duration="2000" data-aos-offset="-500">

                    {/* <p><span className='text-2xl white:text-light-blue'>40+</span> {t("home.github")}</p>
                    <p><span className='text-2xl white:text-light-blue'>5+</span> {t("home.years")}</p> */}

                    <p className='text-2xl text-accent white:text-light-blue'>40+</p>
                    <p>{t("home.github")}</p>
                    <p className='text-2xl text-accent white:text-light-blue mt-2'>5+</p>
                    <p>{t("home.years")}</p>

                  </div>

                </div>
              </div>
            </div>





            {/* ABOUT BUTTON */}
            {/* <a data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000" data-aos-delay="2800" href="#about">
              <button className="shadow-[0_0_20px_#7C3AED] white:shadow-[0_0_20px_#6594fc] bg-text white:bg-text-dark text-background white:text-text white:from-light-blue to-dark-gray  py-2 px-4 rounded mt-10 transition duration-300 ease-in-out">
                {t("home.button")}
              </button>
            </a> */}

            {/* DOWN CHEVRON */}
            <a href="#journey" data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000" data-aos-delay="2800" className="absolute bottom-6 sm:bottom-16 up-and-down w-full flex justify-center">
              <ChevronDown className=' sm:w-10 sm:h-10' />
            </a>

          </div>
        </section>
      </section>
    </>
  );
}

export default Hero;