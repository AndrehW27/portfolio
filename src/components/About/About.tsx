import './About.css'

import { useState } from "react";

// import { Database, ServerCog, ShieldCheck, SquareDashedBottomCode, Waypoints, ChevronDown } from "lucide-react";

// import { ChevronDown } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

function Journey() {

  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="about" className="relative font-bold text-xs text-text white:text-text-dark border-accent white:border-light-blue w-dvw flex flex-col items-center justify-start">

        {/* MAIN TEXT */}
        <div className='scale relative text-xs sm:text-xl border-green-500 h-140 w-140 sm:h-220 sm:w-220 flex flex-col items-center justify-center text-center mb-35 white:text-text cursor-pointer'>
          <div data-aos="zoom-in" data-aos-duration="3000" data-aos-offset="220" className='rounded-full w-140 h-140 sm:h-220 sm:w-220 bg-gradient-to-tr from-background from-[15%] via-surface via-[50%] to-accent to-[100%] white:bg-gradient-to-tr white:from-background white:from-[15%] white:via-light-blue white:via-[50%] white:to-text white:to-[100%] shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] flex flex-col items-center justify-center z-600'>
            {/* <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="350" className='border-blue-500 clip-hex2 absolute top-0 left-[-70px] w-110 h-130 sm:w-150 sm:h-140 bg-gradient-to-tr from-background from-[5%] via-surface via-[40%] to-accent to-[100%] white:bg-gradient-to-tr white:from-background white:from-[15%] white:via-light-blue white:via-[50%] white:to-text white:to-[100%] flex fex-col items-center justify-center'> */}
            <div className=" border-red-500 w-90 sm:w-140 z-10 ">
              {t("about.paragraph1")}
              <br />
              <br />
              {t("about.paragraph2")}
              <br />
              <br />
              {t("about.paragraph3")}
              <br />
              <br />
              {t("about.paragraph4")}
            </div>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className='mt-10 px-4 py-2 rounded-full bg-linear-to-t from-surface to-accent white:from-text-dark white:to-light-blue white:bg-light-blue cursor-pointer hover:opacity-50 hover:border border-accent white:hover:border-light-blue transition duration-300 ease-in-out'>{t("about.certificate")}
            </button>
          </div>

          {/* CAROUSEL */}
          <div data-aos="fade-left" data-aos-duration="2000" data-aos-offset="10" className="absolute bottom-5 sm:bottom-10 carousel w-dvw sm:w-210 text-accent white:text-light-blue z-700">
            <div className="border-blue-500 group ">
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#5fa04e] bg-background shadow-[0_0_10px_#5fa04e] white:shadow-[0_0_10px_#5fa04e]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
              </div>
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#e0e0e6] bg-background bg-text shadow-[0_0_10px_#e0e0e6] white:shadow-[0_0_10px_#e0e0e6]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-line-wordmark.svg" />
              </div>
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
              </div>
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#f0db4f] bg-background shadow-[0_0_10px_#f0db4f] white:shadow-[0_0_10px_#f0db4f]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              </div>
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
              </div>
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#4faa41] bg-background shadow-[0_0_10px_#4faa41] white:shadow-[0_0_10px_#4faa41]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
              </div>
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#e0e0e6] bg-text shadow-[0_0_10px_#e0e0e6] white:shadow-[0_0_10px_#e0e0e6]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
              </div>
              <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#d32a2d] bg-background shadow-[0_0_10px_#d32a2d] white:shadow-[0_0_10px_#d32a2d]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
              </div>
              <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#ea23a4] bg-background shadow-[0_0_10px_#ea23a4] white:shadow-[0_0_10px_#ea23a4]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
              </div>
              <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
              </div>
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#a9bfd1] bg-text shadow-[0_0_10px_#a9bfd1] white:shadow-[0_0_10px_#a9bfd1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
              </div>
              <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#ff9900] bg-background shadow-[0_0_10px_#ff9900] white:shadow-[0_0_10px_#ff9900]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
              </div>
              <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
              </div>
            </div>
            <div className="border-blue-500 group ">
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#5fa04e] bg-background shadow-[0_0_10px_#5fa04e] white:shadow-[0_0_10px_#5fa04e]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
              </div>
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#e0e0e6] bg-background bg-text shadow-[0_0_10px_#e0e0e6] white:shadow-[0_0_10px_#e0e0e6]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-line-wordmark.svg" />
              </div>
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
              </div>
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#f0db4f] bg-background shadow-[0_0_10px_#f0db4f] white:shadow-[0_0_10px_#f0db4f]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              </div>
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
              </div>
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#4faa41] bg-background shadow-[0_0_10px_#4faa41] white:shadow-[0_0_10px_#4faa41]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
              </div>
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#e0e0e6] bg-background bg-text shadow-[0_0_10px_#e0e0e6] white:shadow-[0_0_10px_#e0e0e6]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
              </div>
              <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#d32a2d] bg-background shadow-[0_0_10px_#d32a2d] white:shadow-[0_0_10px_#d32a2d]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
              </div>
              <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#ea23a4] bg-background shadow-[0_0_10px_#ea23a4] white:shadow-[0_0_10px_#ea23a4]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
              </div>
              <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
              </div>
              <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#a9bfd1] bg-background bg-text shadow-[0_0_10px_#a9bfd1] white:shadow-[0_0_10px_#a9bfd1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
              </div>
              <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#f0db4f] bg-background shadow-[0_0_10px_#f0db4f] white:shadow-[0_0_10px_#f0db4f]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
              </div>
              <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
                <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
              </div>
            </div>

          </div>


        </div>

        {/* <h1 className='text-2xl absolute bottom-16'>Projects</h1> */}

        <a href="#projects" className="up-and-down absolute bottom-6 sm:bottom-16 z-900" >
          <ChevronDown className=' sm:w-10 sm:h-10' />
        </a>

        {/* MODAL DETAILS */}
        {showModal && (
          <div className="absolute border-red-500 inset-0 flex items-center justify-center z-9999">

            <div
              className="border-green-500 absolute h-[100dvh] w-[100dvw] inset-0 bg-black/10 backdrop-blur-md animate-fadeIn"
              onClick={() => setShowModal(false)}
            />

            <div className='scale relative text-xs sm:text-xl border-green-500 h-140 w-140 sm:h-220 sm:w-220 flex flex-col items-center justify-center mt-10 text-center mb-35 white:text-text cursor-pointer'>

              {/* <button
                onClick={() => setShowModal(false)}
                className="absolute top-[-15px] right-[-15px] bg-white/30 w-8 h-8 sm:w-15 sm:h-15 rounded-full flex justify-center items-center border border-text white:border-text-dark z-700 cursor-pointer"
              >
                X
              </button> */}

              <div data-aos="zoom-in" data-aos-duration="3000" data-aos-offset="200" className='rounded-full w-140 h-140 sm:h-220 sm:w-220 bg-gradient-to-tr from-background from-[15%] via-surface via-[50%] to-accent to-[100%] white:bg-gradient-to-tr white:from-background white:from-[15%] white:via-light-blue white:via-[50%] white:to-text white:to-[100%] shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] flex flex-col items-center justify-center z-600'>
                {/* <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="350" className='border-blue-500 clip-hex2 absolute top-0 left-[-70px] w-110 h-130 sm:w-150 sm:h-140 bg-gradient-to-tr from-background from-[5%] via-surface via-[40%] to-accent to-[100%] white:bg-gradient-to-tr white:from-background white:from-[15%] white:via-light-blue white:via-[50%] white:to-text white:to-[100%] flex fex-col items-center justify-center'> */}
                <div className=" border-red-500 w-90 sm:w-140 z-10 ">

                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1Dfsjvic7Z9wcLdjXfSIvKjF_BuvckW3o/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.dev")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/13dlxZgxaoNgn2UgUKnW4jG7ePsfXvVqc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.adm")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1bRluLJoZ09jgAKB7g5537JMitziAOVM7/view" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.jr")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1h_SM0ytcV88K8RbDRH-o42OHw6EIfF5p/view" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.react")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/0B9EwvgeYbwGuWldKclJzUUlEVTQ/view?resourcekey=0-m6tPdA_Yd-W0DzJ0UwHItA" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.eli")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1cb7fdYla7avKo7Ju_-ukM8uTQr8DPY9P/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.bct")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/12MZR5OlbskTs5fsX2TqgGLPrnrlfSiIz/view" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.omni")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1rj1R8i6UXtx1p0r_KkLC97Q6Jw9WPmni/view" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.html")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1AVLCvLr-qYvcEzdVqKgvizOVUxtzA1Lc/view" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.css")}</h1>
                  </a>
                </div>
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className='px-4 py-2 rounded-full bg-linear-to-t from-surface to-accent white:from-text-dark white:to-light-blue cursor-pointer mt-6 hover:opacity-50 hover:border border-accent white:hover:border-light-blue transition duration-300 ease-in-out'>{t("about.aboutme")}</button>
              </div>

            </div>

            {/* <div className="border-blue-500 relative rounded-3xl text-sm max-h-[80dvh]  h-[77dvh] sm:h-[77dvh] sm:w-[460px] bg-background white:bg-text flex flex-col items-center justify-start px-6 py-10 animate-zoomIn ">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-[-15px] right-[-15px] bg-white/30 w-8 h-8 sm:w-15 sm:h-15 rounded-full flex justify-center items-center border border-text white:border-text-dark z-100 cursor-pointer"
              >
                X
              </button>
            </div> */}
          </div>

        )}

      </section>
    </>
  )
}

export default Journey
