// import Navbar from './components/Navbar/Navbar.tsx'
import Home from './components/Home/Home.tsx'
import Project from './components/Project/Project.tsx'
// import About from './components/About/About.tsx'
import Journey from './components/Journey/Journey.tsx'
import Contact from './components/Contact/Contact.tsx'
// import Teste from './components/Test/Teste.tsx'

import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { useState } from 'react';
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
    // Apply the 'white' class here to wrap the entire application
    <div className={`${theme === 'white' ? 'white' : ''} bg-[url('./assets/bg/vortex1cut2.png')] bg-cover bg-left`}>

      <div className='p-1 w-fit h-fit p-sm rounded-full fixed top-1 right-0 z-9998'>

        {theme === 'white' &&
          <button
            onClick={() => {
              setTheme('');
            }}
            className='p-1 transition duration-300 ease-in-out cursor-pointer'><GoSun className='h-6 w-6 sm:w-9 sm:h-9 text-accent white:text-light-blue' /></button>
        }
        {theme === '' &&
          <button
            onClick={() => {
              setTheme('white');
            }}
            className='p-1 rounded-full transition duration-300 ease-in-out cursor-pointer'><IoMoonOutline className='h-6 w-6 sm:w-9 sm:h-9 text-accent white:text-light-blue' /></button>
        }

      </div>
      <div className='p-1 w-fit h-fit p-sm rounded-full fixed top-1 right-8 sm:right-12  z-9998'>

        {language === '' &&
          <button
            onClick={() => {
              toggleLanguage();
              setLanguage('english');
            }}
            className='p-1 transition duration-300 ease-in-out cursor-pointer'><GiBrazilFlag className='h-7 w-7 sm:w-10 sm:h-10 text-accent white:text-light-blue' /></button>
        }
        {language === 'english' &&
          <button
            onClick={() => {
              toggleLanguage();
              setLanguage('');
            }}
            className='p-1 transition duration-300 ease-in-out cursor-pointer'><LiaFlagUsaSolid className='h-7 w-7 sm:w-10 sm:h-10 text-accent white:text-light-blue' /></button>
        }

      </div>

      <Home theme={theme} />

      {/* <About /> */}
      <Journey />
      {/* <Teste /> */}
      <Project />

      <Contact />
    </div>
  )
}

export default App
