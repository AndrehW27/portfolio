import './About.css'
import { ChevronDown, Database, Rocket, ServerCog, ShieldCheck, SquareDashedBottomCode, Waypoints } from "lucide-react";

// import { School } from "lucide-react";
// import { University } from "lucide-react";
// import { GraduationCap } from "lucide-react";
// import { Factory } from "lucide-react";
// import { Landmark } from "lucide-react";
import { DatabaseBackup } from "lucide-react";
import { Wallpaper } from "lucide-react";
import { Gauge } from "lucide-react";
// import { ChevronDown } from "lucide-react";


// import logic from '../../assets/logic.png';
// import settings from '../../assets/settings.png';
// import english from '../../assets/eng.png';
import perfil from '../../assets/me/me_art_modern-nobg.png';
import { useTranslation } from "react-i18next";

function About() {

  const { t } = useTranslation();

  return (
    <>
      <section id="about" className='bg-background font-bold white:bg-white-bg text-text white:text-text-dark border-accent white:border-light-blue w-dvw flex flex-col items-center justify-start'>

        <div className='relative flex justify-center items-end gap-3 h-dvh w-dvw border-red-500 text-xs sm:text-base'>

          {/* ABOUT ME */}
          <h1 data-aos="fade-down" className='absolute top-16 text-text white:text-dark-gray text-2xl sm:text-2xl font-bold'>{t("about.aboutme")}</h1>
          
          {/* LEFT SENTENCES */}
          <div data-aos="fade-right" className='pl-6 pr-2 flex flex-col justify-start items-start h-140 w-60 sm:w-160  border-accent'>
            <div className='flex mb-5'>
              <div className='text-accent white:text-light-blue w-10 h-10 mr-3'>
                <Wallpaper />
              </div>
              <h1 className='white:text-dark-gray'>{t("about.interface")}</h1>
            </div>
            <div className='flex mb-5'>
              <div className='text-accent white:text-light-blue w-10 h-10 mr-3'>
                <Gauge />
              </div>
              <h1 className='white:text-dark-gray'>{t("about.api")}</h1>
            </div>
            <div className='flex mb-12'>
              <div className='text-accent white:text-light-blue w-10 h-10 mr-3'>
                <DatabaseBackup />
              </div>
              <h1 className='white:text-dark-gray'>{t("about.cycle")}</h1>
            </div>
            <div>
            </div>
          </div>

          {/* RIGHT SENTENCCE */}
          <div data-aos="fade-left" data-aos-offset="180" className='pl-2 pr-6 h-120 sm:h-100 w-60 sm:w-100 border-accent white:text-dark-gray'>
            <h1 className='border-accent white:border-light-blue'>
              {t("about.driven")}
            </h1>
            <br />
            <h1 className='border-accent white:border-light-blue'>
              {t("about.strive")}
            </h1>
          </div>

          {/* MY IMAGE */}
          <div data-aos="zoom-in" data-aos-offset="50" className='absolute bottom-0 left-10 border-blue-500 w-[55dvw] h-fit rounded-full z-800'>
            <img className='' src={perfil} alt="A cool image" />
          </div>

          {/* CAROUSEL */}
          <div data-aos="fade-left" data-aos-duration="2000" data-aos-offset="0" className="absolute bottom-20 carousel w-dvw sm:w-100 text-accent white:text-light-blue z-700">
            <div className="group">
              <div className="card-carousel"><Waypoints className='h-full w-full' /></div>
              <div className="card-carousel"><SquareDashedBottomCode className='h-full w-full' /></div>
              <div className="card-carousel"><ServerCog className='h-full w-full' /></div>
              <div className="card-carousel"><Database className='h-full w-full' /></div>
              <div className="card-carousel"><ShieldCheck className='h-full w-full' /></div>
              <div className="card-carousel"><Rocket className='h-full w-full' /></div>
            </div>
            <div aria-hidden className="group">
              <div className="card-carousel"><Waypoints className='h-full w-full' /></div>
              <div className="card-carousel"><SquareDashedBottomCode className='h-full w-full' /></div>
              <div className="card-carousel"><ServerCog className='h-full w-full' /></div>
              <div className="card-carousel"><Database className='h-full w-full' /></div>
              <div className="card-carousel"><ShieldCheck className='h-full w-full' /></div>
              <div className="card-carousel"><Rocket className='h-full w-full' /></div>
            </div>
          </div>

          {/* DOWN CHEVRON */}
          <a data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000" className="up-and-down absolute bottom-10 z-900" href="#journey" >
            <ChevronDown />
          </a>

        </div>

      </section>
    </>
  )
}

export default About
