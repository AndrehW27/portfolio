import './Navbar.css'
import { Laptop } from "lucide-react";
import { Menu } from "lucide-react";

function Navbar() {

  return (
    <>
      <nav className='bg-background  text-text fixed w-dvw z-1 top-0 left-0'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <a href="#" className='flex items-center hover:text-blue-600'>
            <Laptop className="w-5 h-5" />
            <p className='pl-3'>AW</p>

          </a>
          <ul className='text-text font-extrabold'>
            <li ><a href="#" className='hover:text-blue-600'>About</a></li>
          </ul>
          <ul className='text-text'>
            <li ><a href="#" className='hover:text-blue-600'>Projects</a></li>
          </ul>
          <ul className='text-text'>
            <li ><a href="#" className='hover:text-blue-600'>Contact</a></li>
          </ul>
          <Menu className="w-5 h-5 hover:text-blue-600" />
        </div>
      </nav>
    </>
  )
}

export default Navbar
