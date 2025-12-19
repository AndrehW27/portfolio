import React, { Suspense, useEffect, useState } from "react";

// import bgVideo from './assets/videos/waves-slow.mp4';
// import bgVideoWhite from './assets/videos/white-video.mp4';
const Home = React.lazy(() => import('./components/Home/Home'));
const Project = React.lazy(() => import('./components/Project/Project'));
const Timeline = React.lazy(() => import('./components/Timeline/Timeline'));
// const About = React.lazy(() => import('./components/About/About'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Abilites = React.lazy(() => import('./components/Abilites/Abilites'));


import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
// import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";

function App() {

  useEffect(() => {
    // Initialize AOS once here for the entire app
    AOS.init({ duration: 1000, once: false, mirror: false, offset: 350 });
  }, []);

  const [theme, setTheme] = useState('');
  const [language, setLanguage] = useState('english');


  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLang);
  };


  return (
<div className={`${theme === 'white' ? 'white' : ''} bg-background white:bg-text`}>
   
      {/* BACKGROUND WITH VIDEO */}
      {/* <div className={`${theme === 'white' ? 'white' : ''} relative`}>
        <video key={theme} autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover -z-10">
          <source src={theme === 'white' ? bgVideoWhite : bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

      <div className='p-1 w-fit h-fit p-sm rounded-full fixed top-1 right-2 z-50'>

        {theme === 'white' &&
          <button
            onClick={() => {
              setTheme('');
            }}
            className='p-1 transition duration-300 ease-in-out cursor-pointer'><GoSun className='h-6 w-6 sm:w-9 sm:h-9 text-accent white:text-light-blue hover:text-dark-gray transition duration-300 ease-in-out' /></button>
        }
        {theme === '' &&
          <button
            onClick={() => {
              setTheme('white');
            }}
            className='p-1 rounded-full transition duration-300 ease-in-out cursor-pointer'><IoMoonOutline className='h-6 w-6 sm:w-9 sm:h-9 text-accent white:text-light-blue hover:text-text transition duration-300 ease-in-out' /></button>
        }

      </div>

      <div className='p-1 w-fit h-fit p-sm rounded-full fixed top-1 right-11 sm:right-16  z-50'>

        {language === '' &&
          <button
            onClick={() => {
              toggleLanguage();
              setLanguage('english');
            }}
            className='p-1 transition duration-300 ease-in-out cursor-pointer'><GiBrazilFlag className='h-7 w-7 sm:w-10 sm:h-10 text-accent white:text-light-blue hover:text-dark-gray transition duration-300 ease-in-out' /></button>
        }
        {language === 'english' &&
          <button
            onClick={() => {
              toggleLanguage();
              setLanguage('');
            }}
            className='p-1 transition duration-300 ease-in-out cursor-pointer'><LiaFlagUsaSolid className='h-7 w-7 sm:w-10 sm:h-10 text-accent white:text-light-blue hover:text-text white:hover:text-dark-gray transition duration-300 ease-in-out' /></button>
        }

      </div>

      {/* Content on top of the video */}
      <div className="relative z-10">
        <Suspense fallback={<div></div>}>
          <Home theme={theme} />
        </Suspense>

        <Suspense fallback={<div></div>}>
          <Timeline />
        </Suspense>

        {/* <Suspense fallback={<div></div>}>
          <About />
        </Suspense> */}

        <Suspense fallback={<div></div>}>
          <Abilites />
        </Suspense>

        <Suspense fallback={<div></div>}>
          <Project />
        </Suspense>

        <Suspense fallback={<div></div>}>
          <Contact />
        </Suspense>

        {/* 
      <Home theme={theme} /> */}

        {/* <About /> */}
        {/* <Journey />
      <Teste />
      <Project />

      <Contact /> */}
      </div>
    </div>
  )
}

export default App
