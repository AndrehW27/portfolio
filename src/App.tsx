// import Navbar from './components/Navbar/Navbar.tsx'
import Hero from './components/Home/Home.tsx'
import Project from './components/Project/Project.tsx'
import About from './components/About/About.tsx'
import Contact from './components/Contact/Contact.tsx'
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

function App() {

  useEffect(() => {
    // Initialize AOS once here for the entire app
    AOS.init({ duration: 1000, once: false, mirror: false, offset: 350 });
  }, []);

  const [theme, setTheme] = useState('');
  const [language, setLanguage] = useState('english');


  return (
    // Apply the 'white' class here to wrap the entire application
    <div className={`${theme === 'white' ? 'white' : ''}`}>

      <div className='p-1 w-fit h-fit p-sm rounded-full fixed top-2 right-2 z-9999'>

        {theme === 'white' &&
          <button
            onClick={() => {
              setTheme('');
            }}
            className='p-1 transition duration-300 ease-in-out cursor-pointer'><GoSun className='h-5 w-5 text-accent' /></button>
        }
        {theme === '' &&
          <button
            onClick={() => {
              setTheme('white');
            }}
            className='p-1 rounded-full transition duration-300 ease-in-out cursor-pointer'><IoMoonOutline className='h-5 w-5 text-accent'/></button>
        }

      </div>
      <div className='p-1 w-fit h-fit p-sm rounded-full fixed top-2 right-12 z-9999'>

        {language === '' &&
          <button
            onClick={() => {
              setLanguage('english');
            }}
            className='p-1 transition duration-300 ease-in-out cursor-pointer'><GiBrazilFlag className='h-5 w-5 text-accent' /></button>
        }
        {language === 'english' &&
          <button
            onClick={() => {
              setLanguage('');
            }}
            className='p-1 transition duration-300 ease-in-out cursor-pointer'><LiaFlagUsaSolid className='h-5 w-5 text-accent' /></button>
        }

      </div>

      <Hero />
      <About />
      <Project />
      {/* <Contact /> */}
    </div>
  )
}

export default App
