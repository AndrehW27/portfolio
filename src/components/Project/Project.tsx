import './Project.css'
// import perfil from '../../assets/about-me-4.png';
// import React from 'react';
// import { motion, useScroll, useTransform } from "framer-motion";
// import bg from '../../assets/darkwave-bg3.png';



function Project() {

  // 1. Get the global scroll progress of the page
  // const { scrollYProgress } = useScroll();

  // 2. Define the ZOOM effect (scale from 1.2x to 1x as you scroll down 50% of the page)
  // const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  // 3. Define the PARALLAX effect (shift Y position from 0 to -50% of the element's height as you scroll)
  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <>
      <section id="projects" className='bg-background white:bg-white-bg h-dvh w-dvw flex items-center justify-center'>
        <div className="relative m-3 h-dvh w-dvw bg-cover bg-center bg-[url('./assets/dark-bg.png')] rounded-4xl">
          <div className="absolute bottom-5 right-15 bg-cover bg-center bg-[url('./assets/bg_purple.png')] h-70 w-40 bg-text rounded-3xl"></div>
          <div className="absolute bottom-5 left-95 bg-cover bg-center bg-[url('./assets/bg-blue-gray.png')] h-70 w-40 bg-surface rounded-3xl"></div>
          {/* <div className='h-70 w-40 bg-surface rounded-4xl'></div> */}
        </div>
      </section>

    </>
  )
}

export default Project
