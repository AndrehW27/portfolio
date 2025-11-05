import './Contact.css'
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { useState } from 'react';

function Contact() {

  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('english');

  return (
    <>
      <section id="contact" className={`${theme === 'dark' ? 'dark' : ''} bg-background h-dvh w-dvw flex flex-col items-center justify-center`}>
        <div className=' bg-gray-100 dark:bg-gray-700 w-120 h-60 flex flex-col items-center justify-center rounded-2xl'>
          <div className='bg-gray-200 dark:bg-gray-600 w-fit h-fit p-sm rounded-2xl'>
            {theme === '' &&
              <button
                onClick={() => {
                  setTheme('dark');
                }}
                className='m-2 border-gray-800 p-2 rounded-2xl hover:bg-gray-100 hover:dark:bg-gray-700 transition duration-300 ease-in-out cursor-pointer'><GoSun className='h-10 w-10 text-gray-800 dark:text-gray-200' /></button>
            }
            {theme === 'dark' &&
              <button
                onClick={() => {
                  setTheme('');
                  console.log('dark');
                  
                }}
                className='m-2 border-gray-800 p-2 rounded-2xl hover:bg-gray-100 hover:dark:bg-gray-700 transition duration-300 ease-in-out cursor-pointe'><IoMoonOutline className='h-10 w-10 text-gray-800 dark:text-gray-200' /></button>
            }
          </div>

          <div className='bg-gray-200 dark:bg-gray-600 w-fit h-fit p-sm rounded-2xl mt-5'>
            <button
              onClick={() => {
                setLanguage('portuguese');
              }}
              className='m-2 border-gray-800 p-2 rounded-2xl hover:bg-gray-100 hover:dark:bg-gray-700 transition duration-300 ease-in-out cursor-pointe'><GiBrazilFlag className='h-10 w-10 text-gray-800 dark:text-gray-200' /></button>
            <button
              onClick={() => {
                setLanguage('english');
              }}
              className='m-2 border-gray-800 p-2 rounded-2xl hover:bg-gray-100 hover:dark:bg-gray-700 transition duration-300 ease-in-out cursor-pointe'><LiaFlagUsaSolid className='h-10 w-10 text-gray-800 dark:text-gray-200' /></button>
          </div>

          {language === 'english' && <div className='font-bold mt-2 text-gray-800 dark:text-gray-200'>Hello World!</div>}
          {language === 'portuguese' && <div className='font-bold mt-2 text-gray-800 dark:text-gray-200'>Olá Mundo!</div>}
        </div>
      </section>
    </>
  )
}

export default Contact
