import './Home.css'
// import { Laptop } from "lucide-react";
// import { Menu } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Waypoints } from "lucide-react";
import { SquareDashedBottomCode } from "lucide-react";
import { Rocket } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { ServerCog } from "lucide-react";
// import { Router } from "lucide-react";
import { Database } from "lucide-react";
import { useTranslation } from "react-i18next";
// import { Bug } from "lucide-react";
// import { CloudCheck } from "lucide-react";

// import ThemeToggle from "../ThemeToggle/ThemeToggle";
// import { IoMoonOutline } from "react-icons/io5";
// import { GoSun } from "react-icons/go";
// import { GiBrazilFlag } from "react-icons/gi";
// import { LiaFlagUsaSolid } from "react-icons/lia";
// import { useState } from 'react';

// import videobg from '../../assets/video-bg.mp4';



function Hero() {

  const { t } = useTranslation();



  // const [theme, setTheme] = useState('dark');
  // const [language, setLanguage] = useState('english');

  return (
    <>
      <nav className='text-text font-bold fixed w-dvw z-1 top-0 left-0 bg-background white:bg-white-bg'>
        <div className='w-dvw mx-auto px-6 py-4 flex justify-center items-center text-text white:text-dark-gray'>

          <div className="w-9 h-9 fixed left-4 bg-cover bg-center bg-[url('./assets/aw-final.png')] white:bg-[url('./assets/aw_light.png')]">

          </div>

          <a className='w-9 h-9 fixed left-4 ' href="#">
            {/* <img src={aw} alt="" /> */}
          </a>

          <ul className='text-sm'>
            <li ><a href="#about" className='hover:text-accent mr-4 transition duration-300 ease-in-out'>{t("navbar.about")}</a></li>
          </ul>
          <ul className='text-sm'>
            <li ><a href="#projects" className='hover:text-accent mr-4 transition duration-300 ease-in-out'>{t("navbar.projects")}</a></li>
          </ul>
          <ul className='text-sm'>
            <li ><a href="#contact" className='hover:text-accent mr-4 transition duration-300 ease-in-out'>{t("navbar.contact")}</a></li>
          </ul>
        </div>
      </nav>
      <section className="relative bg-cover bg-center h-dvh bg-[url('./assets/darkwave-bg3.png')] white:bg-[url('./assets/white-bg-blue.png')] text-text white:text-dark-gray flex flex-col items-center justify-center">



        {/* <video
            autoPlay
            loop
            muted
            playsInline
            className=" z-0 w-auto h-screen min-w-full min-h-full max-w-none"
          >
            <source src={videobg} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}


        <h1 className="text-1xl sm:text-2xl font-bold mt-4">{t("home.welcome")}</h1>
        <h1 className="text-3xl sm:text-5xl font-bold mt-4">{t("home.title")}</h1>
        <h3 className="typing text-2xl sm:text-4xl border-r-3 border-accent white:border-light-blue text-1xl font-bold mt-4 text-accent white:text-light-blue">{t("home.subtitle")}</h3>


        {/* <h1 className="text-2xl sm:text-3xl font-bold mt-3">Fullstack Developer</h1> */}

        <div className='carousel border-accent text-accent white:text-light-blue'>
          <div className='group'>
            <div className="card-carousel"><Waypoints className='' /></div>
            <div className="card-carousel"><SquareDashedBottomCode className='' /></div>
            <div className="card-carousel"><ServerCog className='' /></div>
            <div className="card-carousel"><Database className='' /></div>
            <div className="card-carousel"><ShieldCheck className='' /></div>
            <div className="card-carousel"><Rocket className='' /></div>
          </div>
          <div aria-hidden className='group'>
            <div className="card-carousel"><Waypoints className='' /></div>
            <div className="card-carousel"><SquareDashedBottomCode className='' /></div>
            <div className="card-carousel"><ServerCog className='' /></div>
            <div className="card-carousel"><Database className='' /></div>
            <div className="card-carousel"><ShieldCheck className='' /></div>
            <div className="card-carousel"><Rocket className='' /></div>
          </div>
        </div>

        <h5 className="text-sm font-bold mt-12">{t("home.text")}</h5>

        <a href="#about">
          <button className="shadow-[0_0_20px_#7C3AED] white:shadow-[0_0_20px_#6594fc] bg-linear-to-r from-accent to-surface white:from-light-blue to-dark-gray text-text font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out">
            {t("home.button")}
          </button>
        </a>

        <div className='up-and-down absolute bottom-10'>
          <ChevronDown />
        </div>


      </section>
    </>
  )
}

export default Hero
