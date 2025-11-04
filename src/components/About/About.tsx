import './About.css'

// import { Waypoints } from "lucide-react";
// import { SquareDashedBottomCode } from "lucide-react";
import { Rocket } from "lucide-react";
import { School } from "lucide-react";
import { University } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Factory } from "lucide-react";
import { Landmark } from "lucide-react";
import perfil from '../../assets/perfil-grey.png';



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
      <section id="about" className='bg-background border-accent h-screen w-screen flex flex-col items-center justify-start'>
        <div className='carousel'>
          <div className='group'>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
          </div>
          <div aria-hidden className='group'>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
            <div className="card border border-accent hover:shadow-[0_0_20px_#7C3AED]"><Rocket className='w-full h-full text-accent' /></div>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <div className='w-70 h-70 text-text b rounded-full'>
            <img className='h-full rounded-full' src={perfil} alt="" />
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


        <h1 className='text-text w-full h-40 flex justify-center items-center mt-10 '>
          <div className='h-12 w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center z-1 transition duration-300 ease-in-out'>
            <School />
          </div>
          <div className='flow absolute left-36 h-3 w-3 bg-linear-to-r from-accent to-[#8f52f7] shadow-[0_0_20px_#7C3AED] rounded-full'></div>
          <div className='h-2 w-30 bg-accent  '></div>
          <div className='h-12 w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center'>
            <GraduationCap />
          </div>
          {/* <div className='flow absolute left-33 h-4 w-4 bg-blue-300 shadow-[0_0_20px_#7C3AED] rounded-full'></div> */}
          <div className='h-2 w-30 bg-accent shadow-[0_0_20px_#7C3AED] '></div>
          <div className='h-12 w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center'>
            <University />
          </div>
          {/* <div className='flow absolute left-33 h-4 w-4 bg-blue-300 shadow-[0_0_20px_#7C3AED] rounded-full'></div> */}
          <div className='h-2 w-30 bg-accent shadow-[0_0_20px_#7C3AED] '></div>
          <div className='h-12 w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center'>
            <Factory />
          </div>
          {/* <div className='flow absolute left-33 h-4 w-4 bg-blue-300 shadow-[0_0_20px_#7C3AED] rounded-full'></div> */}
          <div className='h-2 w-30 bg-accent shadow-[0_0_20px_#7C3AED] '></div>
          <div className='h-12 w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center'>
            <Landmark />
          </div>
          {/* <div className='flow absolute left-33 h-4 w-4 bg-blue-300 shadow-[0_0_20px_#7C3AED] rounded-full'></div> */}
          <div className='h-2 w-30 bg-accent shadow-[0_0_20px_#7C3AED] '></div>
          <div className='h-12 w-12 border-3 border-accent shadow-[0_0_20px_#7C3AED] hover:shadow-[0_0_40px_#7C3AED] rounded-full flex justify-center items-center'>
            <Rocket />
          </div>
          {/* <div className='flow absolute left-33 h-4 w-4 bg-blue-300 shadow-[0_0_20px_#7C3AED] rounded-full'></div> */}



        </h1>








      </section>

    </>
  )
}

export default About
