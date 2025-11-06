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
// import { Bug } from "lucide-react";
// import { CloudCheck } from "lucide-react";
import aw from '../../assets/aw-final.png';
// import ThemeToggle from "../ThemeToggle/ThemeToggle";
// import { IoMoonOutline } from "react-icons/io5";
// import { GoSun } from "react-icons/go";
// import { GiBrazilFlag } from "react-icons/gi";
// import { LiaFlagUsaSolid } from "react-icons/lia";
// import { useState } from 'react';

function Hero() {

  // const [theme, setTheme] = useState('dark');
  // const [language, setLanguage] = useState('english');

  return (
    <>
      <nav className='text-text font-bold fixed w-dvw z-1 top-0 left-0'>
        <div className='w-dvw mx-auto px-6 py-4 flex justify-center items-center bg-background white:bg-text text-text white:text-text-dark'>

          <a className='w-9 h-9 fixed left-4' href="#">
            <img src={aw} alt="" />
          </a>

          <ul className='text-sm'>
            <li ><a href="#about" className='hover:text-accent mr-4 transition duration-300 ease-in-out'>About</a></li>
          </ul>
          <ul className='text-sm'>
            <li ><a href="#projects" className='hover:text-accent mr-4 transition duration-300 ease-in-out'>Projects</a></li>
          </ul>
          <ul className='text-sm'>
            <li ><a href="#contact" className='hover:text-accent mr-4 transition duration-300 ease-in-out'>Contact</a></li>
          </ul>
        </div>
      </nav>
      <section className="relative bg-cover bg-center h-dvh bg-[url('./assets/bg_purple_dark.png')] white:bg-[url('./assets/white-bg-blue.png')] text-text white:text-text-dark flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-5 xl font-bold mt-3">André Willian</h1>
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

        <h5 className="text-sm font-bold mt-12">Bringing creativity and code together.</h5>

        <a href="#about">
          <button className="shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] bg-linear-to-r from-accent to-surface text-text font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out">
            About Me
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
