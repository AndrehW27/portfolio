import './Hero.css'
// import { Laptop } from "lucide-react";
import { Menu } from "lucide-react";
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



function Hero() {

  return (
    <>
      <nav className='text-text font-bold fixed w-full z-1 top-0 left-0'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-center items-center'>
          {/* <a href="#" className='flex items-center hover:text-blue-600'>
            <Laptop className="w-5 h-5" />
            <p className='pl-3'>AW</p>

          </a> */}
          <a className='w-9 h-9 fixed left-4' href="#">
            <img src={aw} alt="" />
          </a>


          {/* <ul className='text-text text-sm'>
            <li ><a href="#" className='hover:text-accent mr-4 transition duration-300 ease-in-out'>Home</a></li>
          </ul> */}
          <ul className='text-text text-sm'>
            <li ><a href="#about" className='hover:text-accent mr-4 transition duration-300 ease-in-out'>About</a></li>
          </ul>
          <ul className='text-text text-sm'>
            <li ><a href="#projects" className='hover:text-accent mr-4 transition duration-300 ease-in-out'>Projects</a></li>
          </ul>
          <ul className='text-text text-sm'>
            <li ><a href="#contact" className='hover:text-accent mr-4 transition duration-300 ease-in-out'>Contact</a></li>
          </ul>
          <Menu className="w-5 h-5 cursor-pointer fixed right-4 hover:text-accent transition duration-300 ease-in-out" />
        </div>
      </nav>
      <section className="relative bg-cover bg-center h-screen bg-[url('./assets/darkwave-bg3.png')] text-text flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mt-3 text-text">André Willian</h1>
        <h3 className="typing text-1xl font-bold mt-3 text-accent">Fullstack Developer</h3>

        {/* <div className='fadeIn flex w-70 justify-around mt-2'>
          <Waypoints className=' text-accent' />
          <SquareDashedBottomCode className='text-accent' />
          <ServerCog className='text-accent' />
          <Database className='text-accent' />
          <ShieldCheck className='text-accent' />
          <Rocket className='text-accent' />
        </div> */}

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
        {/* <button className='bg-accent mt-3 px-3 py-1 rounded-sm '>Projetos</button> */}

        {/* <a href="#about">
          <button className="glowing text-sm cursor-pointer bg-linear-to-r from-accent to-surface text-text font-bold py-2 px-4 rounded mt-10">
            About Me
          </button>
        </a> */}
        <a href="#about">
          <button className="shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] bg-linear-to-r from-accent to-surface text-text font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out">
            About Me
          </button>
        </a>


        {/* <button className="relative inline-block px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 overflow-hidden">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-300 via-white to-blue-300 opacity-50 blur-xl"></span>
          <span className="relative">Botão Brilhando</span>
        </button> */}


        <a href="#about">
          <ChevronDown className='absolute bottom-10' />
        </a>




      </section>
    </>
  )
}

export default Hero
