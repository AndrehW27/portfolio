import './About.css'

import { Rocket } from "lucide-react";
import { School } from "lucide-react";
import { University } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Factory } from "lucide-react";
import { Landmark } from "lucide-react";
import { DatabaseBackup  } from "lucide-react";
import { Wallpaper } from "lucide-react";
import { Gauge } from "lucide-react";
// import { ChevronDown } from "lucide-react";


import logic from '../../assets/logic.png';
import settings from '../../assets/settings.png';
import english from '../../assets/eng.png';
import perfil from '../../assets/perfil_art_far.png';



// import { ShieldCheck } from "lucide-react";
// import { ServerCog } from "lucide-react";
// import { Router } from "lucide-react";
// import { Database } from "lucide-react";
// import { Bug } from "lucide-react";
// import { CloudCheck } from "lucide-react";

// import InfiniteCarousel from "../../components/Carousel/InfiniteCarousel";

function About() {

  return (
    <>
      <section id="about" className='bg-background white:bg-text text-text white:text-text-dark flexborder-accent w-dvw flex flex-col items-center justify-start pb-20'>

        <div className='flex justify-center items-end h-dvh w-dvw border-red-500 text-sm sm:text-base'>
          <div className='flex flex-col justify-end items-start h-160 w-70 sm:w-160 border-blue-500 pl-8'>
            <div data-aos="fade-right" className='flex mr-5 mb-5'>
              <div className='text-accent w-10 h-10 mr-2'>
                <Wallpaper />
              </div>
              <h1>Building clean, modern, and highly performant user interfaces.</h1>
            </div>
            <div data-aos="fade-right" className='flex mr-5 mb-5'>
              <div className='text-accent w-10 h-10 mr-2'>
                <Gauge />
              </div>
              <h1>High-availability and low-latency API development.</h1>
            </div>
            <div data-aos="fade-right" className='flex mr-5 mb-20'>
              <div className='text-accent w-10 h-10 mr-2'>
                <DatabaseBackup  />
              </div>
              <h1>Full lifecycle management and value-driven feature implementation.</h1>
            </div>
            <img data-aos="fade-right" data-aos-offset="275"  className='h-100 image-blur-edges ml-5 sm:ml-60' src={perfil} alt="A cool image" />
          </div>
          <div data-aos="fade-left" className='h-160 sm:h-140 w-70 sm:w-100 border-blue-500 pr-8'>
            <h1 className='border-accent'>
              I’m a driven <span className='text-accent font-bold'>Full-Stack Developer</span> with over <span className='text-accent font-bold'>five years</span> of experience developing and improving <span className='text-accent font-bold'>web systems</span> for the largest bank in Latin America, <span className='text-accent font-bold'>gaining a broad</span> and strategic understanding of <span className='text-accent font-bold'>technology</span> along the way.
              <br />
              <br />
              {/* I’ve worked with a <span className='text-accent font-bold'>wide range of tools</span> and technologies, including Angular, React, Node, AWS, LWC, APEX, among others. Constantly <span className='text-accent font-bold'>seeking growth</span>, I strive to build efficient, intuitive, and impactful solutions that <span className='text-accent font-bold'>deliver real value.</span> */}
              Constantly <span className='text-accent font-bold'>seeking growth</span>, I strive to build efficient, intuitive, and impactful solutions that <span className='text-accent font-bold'>deliver real value.</span>
            </h1>
          </div>
        </div>

        <h1 data-aos="fade-in" className='mt-30 text-2xl sm:text-2xl font-bold'>My Jorney</h1>

        <div className='border-yellow-300 w-[70vw] flex items-center justify-center mt-20'>

          <div className='w-40 sm:w-100 border-red-500 flex flex-col justify-start items-center'>
            <div className='w-40 sm:w-100 h-50 border-blue-500 flex justify-end items-start'>
              <div>
                <img data-aos="fade-right" className=' h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#3594d2] hover:shadow-[0_0_40px_#3594d2] transition duration-300 ease-in-out' src={logic} />
              </div>
            </div>
            <div className='w-40 sm:w-100 h-50 border-orange-500 flex justify-end items-start'>
              <div data-aos="fade-right" className='flex align-center justify-center gap-1 sm:gap-4'>
                <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#82aee3] hover:shadow-[0_0_40px_#82aee3] transition duration-300 ease-in-out' src={settings} />
                <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#2f94f6] hover:shadow-[0_0_40px_#2f94f6] transition duration-300 ease-in-out' src={english} />
              </div>
            </div>
            <div className='w-40 sm:w-100 h-50 border-orange-500 flex justify-end items-start'>
              <div data-aos="fade-right" className='flex align-center justify-center gap-1 sm:gap-4'>
                <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#f0db4f] hover:shadow-[0_0_40px_#f0db4f] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#f16529] hover:shadow-[0_0_40px_#f16529] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#31a5d9] hover:shadow-[0_0_40px_#31a5d9] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              </div>
            </div>
            <div className='w-40 sm:w-100 h-50 border-orange-500 flex justify-end items-start'>
              <div data-aos="fade-right" >
                <div className='flex align-center justify-center gap-1 sm:gap-4'>
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#ea23a4] hover:shadow-[0_0_40px_#ea23a4] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#d32a2d] hover:shadow-[0_0_40px_#d32a2d] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#a9bfd1] hover:shadow-[0_0_40px_#a9bfd1] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                </div>
                <div className='flex align-center justify-center gap-1 sm:gap-4 mt-5'>
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#6762a6] hover:shadow-[0_0_40px_#6762a6] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain-wordmark.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#4f982e] hover:shadow-[0_0_40px_#4f982e] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#8e13fd] hover:shadow-[0_0_40px_#8e13fd]  transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                </div>
              </div>
            </div>
            <div className='w-40 sm:w-100 h-50 border-orange-500 flex justify-end items-start'>
              <div data-aos="fade-right">
                <div className='flex align-center justify-center gap-1 sm:gap-4'>
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#00a1e0] hover:shadow-[0_0_40px_#00a1e0] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#ff9900] hover:shadow-[0_0_40px_#ff9900] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#5b00d1] hover:shadow-[0_0_40px_#5b00d1] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" />
                </div>
                <div className='flex align-center justify-center gap-1 sm:gap-4 mt-5'>
                  <img className='white:border border-text-dark h-11 w-11 sm:h-15 sm:w-15 bg-text p-2 rounded-md shadow-[0_0_20px_#e0e0e6] hover:shadow-[0_0_40px_#e0e0e6]  transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#007acc] hover:shadow-[0_0_40px_#007acc] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#f24e1e] hover:shadow-[0_0_40px_#f24e1e] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                </div>
              </div>
            </div>
            <div className='w-40 sm:w-100 h-50 border-orange-500 flex justify-end items-start'>
              <div data-aos="fade-right">
                <div className='flex align-center justify-center gap-1 sm:gap-4'>
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#61dafb] hover:shadow-[0_0_40px_#61dafb] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                  <img className='white:border border-text-dark h-11 w-11 sm:h-15 sm:w-15 bg-text p-2 rounded-md shadow-[0_0_20px_#e0e0e6] hover:shadow-[0_0_40px_#e0e0e6]  transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#5fa04e] hover:shadow-[0_0_40px_#5fa04e] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                </div>
                <div className='flex align-center justify-center gap-1 sm:gap-4 mt-5'>
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#4faa41] hover:shadow-[0_0_40px_#4faa41] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#29acdb] hover:shadow-[0_0_40px_#29acdb] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_20px_#29acdb] hover:shadow-[0_0_40px_#29acdb] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                </div>
              </div>
            </div>
          </div>

          <div className='w-20 sm:w-50 border-red-500 flex flex-col justify-start items-center'>
            <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
              <div data-aos="fade-up" className='h-10 w-10 sm:h-12 sm:w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                <School className='2' />
              </div>
              <div data-aos="fade-up" className='w-1 h-40 bg-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] transition duration-300 ease-in-out'>
              </div>
            </div>
            <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
              <div data-aos="fade-up" className='h-10 w-10 sm:h-12 sm:w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                <GraduationCap className='2' />
              </div>
              <div data-aos="fade-up" className='w-1 h-40 bg-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] transition duration-300 ease-in-out'>
              </div>
            </div>
            <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
              <div data-aos="fade-up" className='h-10 w-10 sm:h-12 sm:w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                <University className='2' />
              </div>
              <div data-aos="fade-up" className='w-1 h-40 bg-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] transition duration-300 ease-in-out'>
              </div>
            </div>
            <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
              <div data-aos="fade-up" className='h-10 w-10 sm:h-12 sm:w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                <Factory className='2' />
              </div>
              <div data-aos="fade-up" className='w-1 h-40 bg-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] transition duration-300 ease-in-out'>
              </div>
            </div>
            <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
              <div data-aos="fade-up" className='h-10 w-10 sm:h-12 sm:w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                <Landmark className='2' />
              </div>
              <div data-aos="fade-up" className='w-1 h-40 bg-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] transition duration-300 ease-in-out'>
              </div>
            </div>
            <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
              <div data-aos="fade-up-right" className='h-10 w-10 sm:h-12 sm:w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                <Rocket className='2' />
              </div>
            </div>

          </div>

          <div className='w-40 px-3 text-sm sm:text-base sm:w-100 border-red-500 flex flex-col justify-start items-center'>
            <div className='w-40 px-3 sm:w-100 h-50 border-orange-500 flex justify-center items-start'>
              <div data-aos="fade-left">
                <h1 className='text-accent font-bold'>UFABC - 2012</h1>
                <p>Bachelor’s in Science and Tech, introduced to programming logic and foundational computer concepts.</p>
              </div>
            </div>
            <div className='w-40 px-3 sm:w-100 h-50 border-orange-500 flex justify-center items-start'>
              <div data-aos="fade-left">
                <h1 className='text-accent font-bold'>WSU - 2014</h1>
                <p>Studied abroad in the United States, taking computer science, and english courses.</p>
              </div>
            </div>
            <div className='w-40 px-3 sm:w-100 h-50 border-orange-500 flex justify-center items-start'>
              <div data-aos="fade-left">
                <h1 className='text-accent font-bold'>GM - 2019</h1>
                <p>Experience working with Excel and VBA, alongside initial studies in web development.</p>
              </div>
            </div>
            <div className='w-40 px-3 sm:w-100 h-50 border-orange-500 flex justify-center items-start'>
              <div data-aos="fade-left">
                <h1 className='text-accent font-bold'>Gen. BR - 2020</h1>
                <p>Completed an extensive bootcamp, gaining hands-on experience with multiple tech stacks and real-world projects.</p>
              </div>
            </div>
            <div className='w-40 px-3 sm:w-100 h-50 border-orange-500 flex justify-center items-start'>
              <div data-aos="fade-left">
                <h1 className='text-accent font-bold'>Itaú - 2020</h1>
                <p>Worked on many systems, gaining valuable experience over the past 5 years.</p>
              </div>
            </div>
            <div className='w-40 px-3 sm:w-100 h-50 border-orange-500 flex justify-center items-start'>
              <div data-aos="fade-left">
                <h1 className='text-accent font-bold'>PUCRS - 2025</h1>
                <p>Postgraduate studies in Full-Stack Development, enhancing my knowledge of advanced technology concepts.</p>
              </div>
            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default About
