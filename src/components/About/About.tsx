import './About.css'

import { Rocket } from "lucide-react";
import { School } from "lucide-react";
import { University } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Factory } from "lucide-react";
import { Landmark } from "lucide-react";
import { DatabaseBackup } from "lucide-react";
import { Wallpaper } from "lucide-react";
import { Gauge } from "lucide-react";
// import { ChevronDown } from "lucide-react";


import logic from '../../assets/logic.png';
import settings from '../../assets/settings.png';
import english from '../../assets/eng.png';
import perfil from '../../assets/perfil_art_far.png';
import { useTranslation } from "react-i18next";



// import { ShieldCheck } from "lucide-react";
// import { ServerCog } from "lucide-react";
// import { Router } from "lucide-react";
// import { Database } from "lucide-react";
// import { Bug } from "lucide-react";
// import { CloudCheck } from "lucide-react";

// import InfiniteCarousel from "../../components/Carousel/InfiniteCarousel";

function About() {

  const { t } = useTranslation();

  return (
    <>
      <section id="about" className='bg-background font-bold white:bg-white-bg text-text white:text-text-dark flexborder-accent white:border-light-blue w-dvw flex flex-col items-center justify-start pb-20'>

        <div className='flex justify-center items-end gap-3 h-dvh w-dvw border-red-500 text-sm sm:text-base'>
          <div className='flex flex-col justify-end items-start h-160 w-70 sm:w-160 border-blue-500 ml-5'>
            <div data-aos="fade-right" className='flex mb-5'>
              <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                <Wallpaper />
              </div>
              <h1 className='white:text-dark-gray'>{t("about.interface")}</h1>
            </div>
            <div data-aos="fade-right" className='flex mb-5'>
              <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                <Gauge />
              </div>
              <h1 className='white:text-dark-gray'>{t("about.api")}</h1>
            </div>
            <div data-aos="fade-right" className='flex mb-12'>
              <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                <DatabaseBackup />
              </div>
              <h1 className='white:text-dark-gray'>{t("about.cycle")}</h1>
            </div>
            <img data-aos="fade-right" data-aos-offset="275" className='h-75 image-blur-edges ml-10 sm:ml-60' src={perfil} alt="A cool image" />
          </div>
          <div data-aos="fade-left" className='h-130 sm:h-140 w-70 sm:w-100 white:text-dark-gray border-blue-500 mr-5'>
            <h1 className='border-accent white:border-light-blue'>
            {t("about.driven")}
            </h1>
            <br />
            <h1 className='border-accent white:border-light-blue'>
            {t("about.strive")}
            </h1>
          </div>
        </div>

        <h1 data-aos="fade-in" className='white:text-dark-gray mt-30 text-2xl sm:text-2xl font-bold'>{t("about.jorney")}</h1>

        <div className='white:text-dark-gray border-yellow-300 w-[70vw] flex items-center justify-center mt-20'>

          <div className='w-40 text-sm sm:text-base sm:w-100 border-red-500 flex flex-col justify-start items-center'>
            <div className='w-40 sm:w-100 h-50 border-blue-500 flex justify-end items-start'>
              <div>
                <img data-aos="fade-left" className=' h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#3594d2] white:shadow-[0_0_10px_#3594d2] transition duration-300 ease-in-out' src={logic} />
              </div>
            </div>
            <div className='w-40 pl-6 sm:w-100 h-50 border-orange-500  flex justify-center items-start'>
              <div data-aos="fade-left">
                <h1 className='text-accent white:text-light-blue font-bold'>{t("about.wsu")}</h1>
                <p>{t("about.wsu.text")}</p>
              </div>
            </div>

            <div className='w-40 sm:w-100 h-50 border-orange-500 flex justify-end items-start'>
              <div data-aos="fade-left" className='flex align-center justify-center gap-1 sm:gap-4'>
                <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#f0db4f] white:shadow-[0_0_10px_#f0db4f] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#f16529] white:shadow-[0_0_10px_#f16529] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#31a5d9] white:shadow-[0_0_10px_#31a5d9] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              </div>
            </div>
            <div className='w-40 pl-6 sm:w-100 h-50  border-orange-500 flex justify-center items-start'>
              <div data-aos="fade-left">
                <h1 className='text-accent white:text-light-blue font-bold'>{t("about.gen")}</h1>
                <p>{t("about.gen.text")}</p>
              </div>
            </div>

            <div className='w-40 sm:w-100 h-50 border-orange-500 flex justify-end items-start'>
              <div data-aos="fade-left">
                <div className='flex align-center justify-center gap-1 sm:gap-4'>
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#ff9900] white:shadow-[0_0_10px_#ff9900] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#5b00d1] white:shadow-[0_0_10px_#5b00d1] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" />
                </div>
                <div className='flex align-center justify-center gap-1 sm:gap-4 mt-5'>
                  <img className='white:border border-text-dark h-11 w-11 sm:h-15 sm:w-15 bg-text p-2 rounded-md shadow-[0_0_10px_#e0e0e6] white:shadow-[0_0_10px_#e0e0e6]  transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#007acc] white:shadow-[0_0_10px_#007acc] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#f24e1e] white:shadow-[0_0_10px_#f24e1e] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                </div>
              </div>
            </div>
            <div className='w-40 pl-6 sm:w-100 h-50  border-orange-500 flex justify-center items-start'>
              <div data-aos="fade-left">
                <h1 className='text-accent white:text-light-blue font-bold'>{t("about.puc")}</h1>
                <p>{t("about.puc.text")}</p>
              </div>
            </div>

          </div>

          <div className='w-20 sm:w-50 border-red-500 flex flex-col justify-start items-center'>
            <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
              <div data-aos="fade-up" className='h-10 w-10 sm:h-12 sm:w-12 border-3 border-accent white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                <School className='2' />
              </div>
              <div data-aos="fade-up" className='w-1 h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition duration-300 ease-in-out'>
              </div>
            </div>
            <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
              <div data-aos="fade-up" className='h-10 w-10 sm:h-12 sm:w-12 border-3 border-accent white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                <GraduationCap className='2' />
              </div>
              <div data-aos="fade-up" className='w-1 h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition duration-300 ease-in-out'>
              </div>
            </div>
            <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
              <div data-aos="fade-up" className='h-10 w-10 sm:h-12 sm:w-12 border-3 border-accent white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                <University className='2' />
              </div>
              <div data-aos="fade-up" className='w-1 h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition duration-300 ease-in-out'>
              </div>
            </div>
            <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
              <div data-aos="fade-up" className='h-10 w-10 sm:h-12 sm:w-12 border-3 border-accent white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                <Factory className='2' />
              </div>
              <div data-aos="fade-up" className='w-1 h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition duration-300 ease-in-out'>
              </div>
            </div>
            <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
              <div data-aos="fade-up" className='h-10 w-10 sm:h-12 sm:w-12 border-3 border-accent white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                <Landmark className='2' />
              </div>
              <div data-aos="fade-up" className='w-1 h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition duration-300 ease-in-out'>
              </div>
            </div>
            <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
              <div data-aos="fade-up-right" className='h-10 w-10 sm:h-12 sm:w-12 border-3 border-accent white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                <Rocket className='2' />
              </div>
            </div>

          </div>

          <div className='w-40 px-6 text-sm sm:text-base sm:w-100 border-red-500 flex flex-col justify-start items-center'>
            <div className='w-40 pr-6 sm:w-100 h-50  border-orange-500 flex justify-center items-start'>
              <div data-aos="fade-right">
                <h1 className='text-accent white:text-light-blue font-bold'>{t("about.ufabc")}</h1>
                <p>{t("about.ufabc.text")}</p>
              </div>
            </div>

            <div className='w-40 sm:w-100 h-50  border-orange-500 flex justify-start items-start'>
              <div data-aos="fade-right" className='flex align-center justify-center gap-1 sm:gap-4'>
                <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#82aee3] white:shadow-[0_0_10px_#82aee3] transition duration-300 ease-in-out' src={settings} />
                <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#2f94f6] white:shadow-[0_0_10px_#2f94f6] transition duration-300 ease-in-out' src={english} />
              </div>
            </div>
            <div className='w-40 pr-6 sm:w-100 h-50  border-orange-500 flex justify-center items-start'>
              <div data-aos="fade-right">
                <h1 className='text-accent white:text-light-blue font-bold'>{t("about.gm")}</h1>
                <p>{t("about.gm.text")}</p>
              </div>
            </div>
            <div className='w-40 sm:w-100 h-50 border-orange-500 flex justify-start items-start'>
              <div data-aos="fade-right" >
                <div className='flex align-center justify-center gap-1 sm:gap-4'>
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#ea23a4] white:shadow-[0_0_10px_#ea23a4] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#d32a2d] white:shadow-[0_0_10px_#d32a2d] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#a9bfd1] white:shadow-[0_0_10px_#a9bfd1] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                </div>
                <div className='flex align-center justify-center gap-1 sm:gap-4 mt-5'>
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#6762a6] white:shadow-[0_0_10px_#6762a6] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain-wordmark.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#4f982e] white:shadow-[0_0_10px_#4f982e] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#8e13fd] white:shadow-[0_0_10px_#8e13fd]  transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                </div>
              </div>
            </div>

            <div className='w-40 pr-6 sm:w-100 h-50  border-orange-500 flex justify-center items-start'>
              <div data-aos="fade-right">
                <h1 className='text-accent white:text-light-blue font-bold'>{t("about.itau")}</h1>
                <p>{t("about.itau.text")}</p>
              </div>
            </div>

            <div className='w-40 sm:w-100 h-50 border-orange-500 flex justify-start items-start'>
              <div data-aos="fade-right">
                <div className='flex align-center justify-center gap-1 sm:gap-4'>
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#61dafb] white:shadow-[0_0_10px_#61dafb] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                  <img className='white:border border-text-dark h-11 w-11 sm:h-15 sm:w-15 bg-text p-2 rounded-md shadow-[0_0_10px_#e0e0e6] white:shadow-[0_0_10px_#e0e0e6]  transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#5fa04e] white:shadow-[0_0_10px_#5fa04e] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                </div>
                <div className='flex align-center justify-center gap-1 sm:gap-4 mt-5'>
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#4faa41] white:shadow-[0_0_10px_#4faa41] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#29acdb] white:shadow-[0_0_10px_#29acdb] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#29acdb] white:shadow-[0_0_10px_#29acdb] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default About
