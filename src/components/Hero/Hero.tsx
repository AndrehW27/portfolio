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
import { IoSunnyOutline } from "react-icons/io5";




function Hero() {

  return (
    <>
      <nav className='text-text font-bold fixed w-dvw z-1 top-0 left-0'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-center items-center'>

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
          <div className=" cursor-pointer fixed top-2 right-2 hover:text-accent transition duration-300 ease-in-out" >
            <IoSunnyOutline />
          </div>
          {/* <div className=" cursor-pointer fixed top-2 right-15 hover:text-accent transition duration-300 ease-in-out" >
            <ThemeToggle />
          </div> */}
        </div>
      </nav>
      <section className="relative bg-cover bg-center h-dvh bg-[url('./assets/darkwave-bg3.png')] text-text flex flex-col items-center justify-center">
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
