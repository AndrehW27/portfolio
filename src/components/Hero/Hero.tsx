import './Hero.css'
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
// import { Bug } from "lucide-react";
// import { CloudCheck } from "lucide-react";
import aw from '../../assets/aw-final.png';
// import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { useState } from 'react';

function Hero() {

  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('english');

  return (
    <>
      <nav className='text-text font-bold fixed w-dvw z-1 top-0 left-0'>
        <div className='w-dvw mx-auto px-6 py-4 flex justify-center items-center bg-background z-1000'>

          <a className='w-9 h-9 fixed left-4' href="#">
            <img src={aw} alt="" />
          </a>

          <ul className='text-text text-sm'>
            <li ><a href="#about" className='hover:text-accent mr-4 transition duration-300 ease-in-out'>About</a></li>
          </ul>
          <ul className='text-text text-sm'>
            <li ><a href="#projects" className='hover:text-accent mr-4 transition duration-300 ease-in-out'>Projects</a></li>
          </ul>
          <ul className='text-text text-sm'>
            <li ><a href="#contact" className='hover:text-accent mr-4 transition duration-300 ease-in-out'>Contact</a></li>
          </ul>

          {/* <Menu className="w-5 h-5 cursor-pointer fixed right-4 hover:text-accent transition duration-300 ease-in-out" /> */}

          <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <div className='p-1 w-fit h-fit p-sm rounded-full fixed top-2 right-2'>

              {theme === '' &&
                <button
                  onClick={() => {
                    setTheme('dark');
                  }}
                  className='p-1 bg-gray-200 dark:bg-background rounded-full hover:bg-accent transition duration-300 ease-in-out cursor-pointer'><GoSun className='h-5 w-5 text-gray-800 dark:text-gray-200' /></button>
              }
              {theme === 'dark' &&
                <button
                  onClick={() => {
                    setTheme('');
                  }}
                  className='p-1 rounded-full hover:bg-gray-100 hover:dark:bg-accent transition duration-300 ease-in-out cursor-pointer'><IoMoonOutline className='h-5 w-5 text-gray-800 dark:text-gray-200' /></button>
              }

            </div>
            <div className='p-1 w-fit h-fit p-sm rounded-full fixed top-2 right-11'>

              {language === '' &&
                <button
                  onClick={() => {
                    setLanguage('english');
                  }}
                  className='p-1 bg-gray-200 dark:bg-background rounded-full hover:bg-accent transition duration-300 ease-in-out cursor-pointer'><GiBrazilFlag className='h-5 w-5 text-gray-800 dark:text-gray-200' /></button>
              }
              {language === 'english' &&
                <button
                  onClick={() => {
                    setLanguage('');
                  }}
                  className='p-1 bg-gray-200 dark:bg-background rounded-full hover:bg-accent transition duration-300 ease-in-out cursor-pointer'><LiaFlagUsaSolid className='h-5 w-5 text-gray-800 dark:text-gray-200' /></button>
              }

            </div>
          </div>


          {/* <div className=" cursor-pointer fixed top-2 right-15 hover:text-accent transition duration-300 ease-in-out" >
            <ThemeToggle />
          </div> */}
        </div>
      </nav>
      <section className="relative bg-cover bg-center h-dvh bg-[url('./assets/darkwave-bg3.png')] dark:bg-[url('./assets/white-bg.png')] text-text flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-5xl font-bold mt-3 text-text">André Willian</h1>
        <h3 className="typing text-1xl font-bold mt-3 text-accent">Fullstack Developer</h3>

        <div className='carousel border-accent'>
          <div className='group'>
            <div className="card-carousel"><Waypoints className='text-accent' /></div>
            <div className="card-carousel"><SquareDashedBottomCode className='text-accent' /></div>
            <div className="card-carousel"><ServerCog className='text-accent' /></div>
            <div className="card-carousel"><Database className='text-accent' /></div>
            <div className="card-carousel"><ShieldCheck className='text-accent' /></div>
            <div className="card-carousel"><Rocket className='text-accent' /></div>
          </div>
          <div aria-hidden className='group'>
            <div className="card-carousel"><Waypoints className='text-accent' /></div>
            <div className="card-carousel"><SquareDashedBottomCode className='text-accent' /></div>
            <div className="card-carousel"><ServerCog className='text-accent' /></div>
            <div className="card-carousel"><Database className='text-accent' /></div>
            <div className="card-carousel"><ShieldCheck className='text-accent' /></div>
            <div className="card-carousel"><Rocket className='text-accent' /></div>
          </div>
        </div>

        <h5 className="text-sm font-bold  text-text mt-12">Bringing creativity and code together.</h5>

        <a href="#about">
          <button className="shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] bg-linear-to-r from-accent to-surface text-text font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out">
            About Me
          </button>
        </a>

        <div className='absolute bottom-10'>
          <ChevronDown />
        </div>


      </section>
    </>
  )
}

export default Hero
