import './About.css'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Rocket } from "lucide-react";
import { School } from "lucide-react";
import { University } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Factory } from "lucide-react";
import { Landmark } from "lucide-react";

import logic from '../../assets/logic.png';
import settings from '../../assets/settings.png';
import english from '../../assets/eng.png';
import perfil from '../../assets/perfil-grey.png';



// import { ShieldCheck } from "lucide-react";
// import { ServerCog } from "lucide-react";
// import { Router } from "lucide-react";
// import { Database } from "lucide-react";
// import { Bug } from "lucide-react";
// import { CloudCheck } from "lucide-react";

// import InfiniteCarousel from "../../components/Carousel/InfiniteCarousel";

function About() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, delay: 300, offset: 250 });
  }, []);

  return (
    <>
      <section id="about" className='bg-background border-t border-accent w-screen flex flex-col items-center justify-start pb-20'>


        <div className='flex justify-center items-center mt-30'>

          <div className="card-container">
            <div className="card">
              <img src={perfil} alt="A cool image" />
            </div> 
          </div>

          <h1 className='text-text text-center w-150 mt-5 border-accent flex justify-center items-center'> 
            I've always been driven by curiosity and a passion for solving problems in creative ways. Programming became the place where I found my true purpose, turning ideas into meaningful solutions.
            <br />
            <br />

            For the past five years, I've been focused on developing and improving web systems for the largest bank in Latin America, gaining a broad and strategic understanding of technology along the way.
            I’ve worked with a wide range of tools and technologies, including Angular, AWS, GitHub, LWC, and APEX, among others.
            <br />
            <br />

            Software development is a constant challenge, and this continuous pursuit of learning and innovation that keeps me inspired every day.
          </h1>
        </div>

        <div className='relative w-screen flex items-center justify-center h-[1300px]'>
          {/* <div className='border border-accent h-full w-80'></div> */}
          <div className='relative  border-accent h-full w-80 flex flex-col justify-center items-center'>
            <div data-aos="fade-right" className='absolute top-60 text-text text-center'>
              <div className='flex align-center justify-center gap-4'>
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#3594d2] hover:shadow-[0_0_40px_#3594d2] transition duration-300 ease-in-out' src={logic} />
              </div>
            </div>

            <div data-aos="fade-right" className='absolute top-62 text-text text-center'>
              <div className='flex align-center justify-center gap-4'>
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#82aee3] hover:shadow-[0_0_40px_#82aee3] transition duration-300 ease-in-out' src={settings} />
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#2f94f6] hover:shadow-[0_0_40px_#2f94f6] transition duration-300 ease-in-out' src={english} />
              </div>
            </div>

            <div data-aos="fade-right" className='absolute top-104 text-text text-center'>
              <div className='flex align-center justify-center gap-4'>
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#f0db4f] hover:shadow-[0_0_40px_#f0db4f] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#f16529] hover:shadow-[0_0_40px_#f16529] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#31a5d9] hover:shadow-[0_0_40px_#31a5d9] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              </div>
            </div>

            <div data-aos="fade-right" className='absolute top-146 text-text text-center'>
              <div className='flex align-center justify-center gap-4'>
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#ea23a4] hover:shadow-[0_0_40px_#ea23a4] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#d32a2d] hover:shadow-[0_0_40px_#d32a2d] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#a9bfd1] hover:shadow-[0_0_40px_#a9bfd1] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />

              </div>
              <div className='flex align-center justify-center gap-4 mt-5'>
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#6762a6] hover:shadow-[0_0_40px_#6762a6] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain-wordmark.svg" />
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#4f982e] hover:shadow-[0_0_40px_#4f982e] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" />
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#8e13fd] hover:shadow-[0_0_40px_#8e13fd]  transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />

              </div>
            </div>

            <div data-aos="fade-right" className='absolute top-198 text-text text-center'>
              <div className='flex align-center justify-center gap-4'>
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#00a1e0] hover:shadow-[0_0_40px_#00a1e0] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#ff9900] hover:shadow-[0_0_40px_#ff9900] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#5b00d1] hover:shadow-[0_0_40px_#5b00d1] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" />
              </div>
              <div className='flex align-center justify-center gap-4 mt-5'>

                {/* <i className="h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#ea23a4] transition duration-300 ease-in-out devicon-splunk-original-wordmark"></i> */}

                <img className='h-15 w-15 bg-text border border-text-muted p-2 rounded-md shadow-[0_0_20px_#e0e0e6] hover:shadow-[0_0_40px_#e0e0e6]  transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg" />
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#007acc] hover:shadow-[0_0_40px_#007acc] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#f24e1e] hover:shadow-[0_0_40px_#f24e1e] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
              </div>
            </div>

            <div data-aos="fade-right" className='absolute top-251 text-text text-center'>
              <div className='flex align-center justify-center gap-4'>
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#61dafb] hover:shadow-[0_0_40px_#61dafb] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                <img className='h-15 w-15 bg-text border border-text-muted p-2 rounded-md shadow-[0_0_20px_#e0e0e6] hover:shadow-[0_0_40px_#e0e0e6]  transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#5fa04e] hover:shadow-[0_0_40px_#5fa04e] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
              </div>
              <div className='flex align-center justify-center gap-4 mt-5'>
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#4faa41] hover:shadow-[0_0_40px_#4faa41] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#29acdb] hover:shadow-[0_0_40px_#29acdb] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                <img className='h-15 w-15 border border-text-muted p-2 rounded-md shadow-[0_0_20px_#29acdb] hover:shadow-[0_0_40px_#29acdb] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />

              </div>
            </div>

          </div>

          <div className='border-accent text-text w-50 flex flex-col justify-center items-center'>
            <div data-aos="fade-up" className='h-12 w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center z-1 transition duration-300 ease-in-out'>
              <School className='z-2' />
            </div>
            <div data-aos="fade-up" className='relative w-1 h-30 bg-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] transition duration-300 ease-in-out'>
              {/* <div className='flow absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 bg-linear-to-r from-blue-300 to-[#8f52f7] shadow-[0_0_20px_#7C3AED] rounded-full'></div> */}
            </div>

            <div data-aos="fade-up" className='h-12 w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center'>
              <GraduationCap />
            </div>
            <div data-aos="fade-up" className='relative w-1 h-30 bg-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED]'>
              {/* <div className='flow2 absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 bg-linear-to-r from-blue-300 to-[#8f52f7] shadow-[0_0_20px_#7C3AED] rounded-full'></div> */}
            </div>

            <div data-aos="fade-up" className='h-12 w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center'>
              <University />
            </div>
            <div data-aos="fade-up" className='w-1 h-30 bg-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED]'></div>
            <div data-aos="fade-up" className='h-12 w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center'>
              <Factory />
            </div>
            <div data-aos="fade-up" className='w-1 h-40 bg-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED]'></div>
            <div data-aos="fade-up" className='h-12 w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center'>
              <Landmark />
            </div>
            <div data-aos="fade-up" className='w-1 h-40 bg-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED]'></div>
            <div data-aos="fade-up-right" className='h-12 w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center'>
              <Rocket />
            </div>

          </div>

          <div className='relative  border-accent h-full w-80 flex flex-col justify-center items-center'>
            <div data-aos="fade-left" className='absolute top-20 text-text text-center'>
              <h1 className='text-accent font-bold'>University Federal of ABC - 2012</h1>
              <p>Bachelor’s in Science and Tech, introduced to programming logic and foundational computer concepts.</p>
            </div>

            <div data-aos="fade-left" className='absolute top-62 text-text text-center'>
              <h1 className='text-accent font-bold'>Wayne State University - 2014</h1>
              <p>Studied abroad in the United States, taking computer science, and english courses.</p>
            </div>

            <div data-aos="fade-left" className='absolute top-104 text-text text-center'>
              <h1 className='text-accent font-bold'>General Motors - 2019</h1>
              <p>Experience working with Excel and VBA, alongside initial studies in web development.</p>
            </div>

            <div data-aos="fade-left" className='absolute top-146 text-text text-center'>
              <h1 className='text-accent font-bold'>Generation Brasil - 2020</h1>
              <p>Completed an extensive bootcamp, gaining hands-on experience with multiple tech stacks and real-world projects.</p>
            </div>

            <div data-aos="fade-left" className='absolute top-198 text-text text-center'>
              <h1 className='text-accent font-bold'>Itaú Unibanco - 2020</h1>
              <p>Worked on many systems, gaining valuable experience over the past 5 years.</p>
            </div>

            <div data-aos="fade-left" className='absolute top-251 text-text text-center'>
              <h1 className='text-accent font-bold'>PUCRS - 2025</h1>
              <p>Postgraduate studies in Full-Stack Development, enhancing my knowledge of advanced technology concepts.</p>
            </div>

          </div>


        </div>

        {/* <div className='carousel mt-10 border border-accent'>
          <div className='group'>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
          </div>
          <div aria-hidden className='group'>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
          </div>
        </div> */}

      </section>
    </>
  )
}

export default About
