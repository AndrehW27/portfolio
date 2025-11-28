import "./Teste.css";
// import bg from "../../assets/me_art_modern-nobg.png";
// import bg2 from "../../assets/me_art_modern-nobg.png";
// import video from "../../assets/videos/wave-dna.mp4";
// import { ChevronDown } from "lucide-react";

// import { ChevronDown, Wallpaper, DatabaseBackup, Gauge } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import bg from "../../assets/Me/me-pc2.png";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SquareDashedBottomCode, Keyboard, GalleryHorizontalEnd } from "lucide-react";


// import wavesDark from '../../assets/videos/waves-video2.mp4';
// import wavesLight from '../../assets/videos/white-video.mp4';

type HeroProps = {
  theme: string;
};

// export default function Teste()

function Teste({ theme }: HeroProps) {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".box").forEach((box: any) => {
        gsap.from(box, {
          x: "-100vw",
          opacity: 0,
          rotate: -360,
          scrollTrigger: {
            trigger: box,
            start: "top 50%",
            end: "center 50%",
            scrub: true,
            // markers: true,
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="h-fit w-[100dvw] flex flex-col items-center justify-start relative overflow-hidden text-text bg-background scroll-hidden">

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-sx sm:text-xl w-[100dvw] mt-20 sm:mt-40">

          <div className="box border border-accent p-4 sm:p-8 w-[90dvw] h-fit sm:w-130 sm:h-100 rounded-3xl bg-[url('./assets/bg/darkwave-bg3.png')] bg-center bg-cover bg-no-repeat image-blured hover:bg-accent hover:border-text transition duration-300 ease-in-out">

            <div className="absolute inset-0 backdrop-blur-sm rounded-3xl"></div>

            <div className="relative z-10 flex flex-col items-start justify-start gap-3 sm:gap-6">
              <div className="text-xl sm:text-3xl flex font-bold">
                <div className="mr-4"><SquareDashedBottomCode className='w-8 h-8 sm:w-12 sm:h-12 text-accent' /></div>
                <h1>What can I do</h1>
              </div>
              <p className="">I can help develop solutions that will help you grow your bussines</p>
              <ul className="font-bold list-disc ml-6">
                <li className="sm:mb-2">Fullstack Web development</li>
                <li className="sm:mb-2">Mobile App development</li>
                <li className="sm:mb-2">UI/UX Design</li>
                <li className="sm:mb-2">Data base design</li>
                <li className="">API integration</li>
              </ul>
            </div>

          </div>

          <div className="box border border-accent p-4 sm:p-8 w-[90dvw] h-fit sm:w-130 sm:h-100 rounded-3xl bg-[url('./assets/bg/darkwave-bg3.png')] bg-center bg-cover bg-no-repeat image-blured hover:bg-accent hover:border-text transition duration-300 ease-in-out">

            <div className="absolute inset-0 backdrop-blur-sm rounded-3xl"></div>

            <div className="relative z-10 flex flex-col items-start justify-start gap-3 sm:gap-6">
              <div className="text-xl sm:text-3xl flex font-bold">
                <div className="mr-4"><SquareDashedBottomCode className='w-8 h-8 sm:w-12 sm:h-12 text-accent' /></div>
                <h1>What can I do</h1>
              </div>
              <p className="">I can help develop solutions that will help you grow your bussines</p>
              <ul className="font-bold list-disc ml-6">
                <li className="sm:mb-2">Fullstack Web development</li>
                <li className="sm:mb-2">Mobile App development</li>
                <li className="sm:mb-2">UI/UX Design</li>
                <li className="sm:mb-2">Data base design</li>
                <li className="">API integration</li>
              </ul>
            </div>

          </div>

          <div className="box border border-accent p-4 sm:p-8 w-[90dvw] h-fit sm:w-130 sm:h-100 rounded-3xl bg-[url('./assets/bg/darkwave-bg3.png')] bg-center bg-cover bg-no-repeat image-blured hover:bg-accent hover:border-text transition duration-300 ease-in-out">

            <div className="absolute inset-0 backdrop-blur-sm rounded-3xl"></div>

            <div className="relative z-10 flex flex-col items-start justify-start gap-3 sm:gap-6">
              <div className="text-xl sm:text-3xl flex font-bold">
                <div className="mr-4"><SquareDashedBottomCode className='w-8 h-8 sm:w-12 sm:h-12 text-accent' /></div>
                <h1>What can I do</h1>
              </div>
              <p className="">I can help develop solutions that will help you grow your bussines</p>
              <ul className="font-bold list-disc ml-6">
                <li className="sm:mb-2">Fullstack Web development</li>
                <li className="sm:mb-2">Mobile App development</li>
                <li className="sm:mb-2">UI/UX Design</li>
                <li className="sm:mb-2">Data base design</li>
                <li className="">API integration</li>
              </ul>
            </div>

          </div>

          {/* <div className="box border border-accent p-8 w-130 h-100 rounded-3xl bg-[url('./assets/bg/darkwave-bg3.png')] bg-center bg-cover bg-no-repeat image-blured hover:bg-accent hover:border-text transition duration-300 ease-in-out">

            <div className="absolute inset-0 backdrop-blur-sm rounded-3xl"></div>

            <div className="relative z-10 flex flex-col items-start justify-start gap-6">
              <div className="text-3xl flex font-bold">
                <div className="mr-4"><Keyboard className='w-12 h-12 text-accent' /></div>
                <h1>Tools I use</h1>
              </div>
              <p className="">I use the latest  tools and technologies to build functional and scalable products</p>
              <ul className="font-bold list-disc ml-6">
                <li className="mb-2">Frontend: React, Next, Angular, LWC...</li>
                <li className="mb-2">Backend: Node.js, Express, Java, APEX...</li>
                <li className="mb-2">Database: MongoDB, PostgreSQL, SOQL...</li>
                <li className="mb-2">Other: AWS, Docker, Insomnia...</li>
              </ul>
            </div>

          </div>

          <div className="box border border-accent p-8 w-130 h-100 rounded-3xl bg-[url('./assets/bg/darkwave-bg3.png')] bg-center bg-cover bg-no-repeat image-blured hover:bg-accent hover:border-text transition duration-300 ease-in-out">

            <div className="absolute inset-0 backdrop-blur-sm rounded-3xl"></div>

            <div className="relative z-10 flex flex-col items-start justify-start gap-6">
              <div className="text-3xl flex font-bold">
                <div className="mr-4"><GalleryHorizontalEnd className='w-12 h-12 text-accent' /></div>
                <h1>IU/UX Design</h1>
              </div>
              <p className="">I am a coder first, designer sencond. I can help design clean and modern interfaces</p>
              <ul className="font-bold list-disc ml-6">
                <li className="mb-2">User-centered design</li>
                <li className="mb-2">Mobile App development</li>
                <li className="mb-2">Modern and clean IU</li>
                <li className="mb-2">Responsive layouts</li>
                <li className="mb-2">Wireframes & prototypes</li>
              </ul>
            </div>

          </div> */}

        </div>

      </section>
    </>
  );
}

export default Teste;
