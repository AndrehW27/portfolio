import "./Teste.css";
import me from "../../assets/Me/me_art_modern-nobg.png";
import three_d from "../../assets/bg/purple-3D.png";
// import bg2 from "../../assets/me_art_modern-nobg.png";
// import video from "../../assets/videos/wave-dna.mp4";
// import { ChevronDown } from "lucide-react";

// import { ChevronDown, Wallpaper, DatabaseBackup, Gauge } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import bg from "../../assets/Me/me-pc2.png";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SquareDashedBottomCode, GalleryHorizontalEnd, Keyboard } from "lucide-react";

// 💚 This just adds the GSAP link to this pen, don't copy this bit
// import { GSAPInfoBar } from "https://codepen.io/GreenSock/pen/vYqpyLg.js"
// new GSAPInfoBar({ link: "https://gsap.com/docs/v3/Plugins/ScrollSmoother/" });

// import wavesDark from '../../assets/videos/waves-video2.mp4';
// import wavesLight from '../../assets/videos/white-video.mp4';

// type HeroProps = {
//   theme: string;
// };

// export default function Teste()

function Teste() {

  // GSAP CROUSEL ANIMATIONS  

  // GSAP CROUSEL ANIMATIONS

  // SCROLL GALLERY
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (!wrapperRef.current || !contentRef.current) return;

    // FAST skew setter
    const skewSetter = gsap.quickTo("img", "skewY");
    const clamp = gsap.utils.clamp(-20, 20);

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 2,
      speed: 3,
      effects: true,
      onUpdate: (self) => {
        const skew = clamp(self.getVelocity() / -50);
        skewSetter(skew);
      },
      onStop: () => skewSetter(0),
    });

    return () => smoother.kill();
  }, []);
  // SCROLL GALLERY


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".box").forEach((box: any) => {
        gsap.from(box, {
          x: "-100vw",
          opacity: 0,
          // duration: 6,
          rotate: -360,
          scrollTrigger: {
            trigger: box,
            start: "top 60%",
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
      <section className="relative h-[180dvh] sm:h-[100dvh] w-[100dvw] flex flex-col items-center justify-start overflow-hidden text-text bg-background scroll-hidden border-red-500 mb-20 sm:mb-50">

        {/* SCROLL GALLERY */}
        <div className="flex flex-col sm:flex-row items-center items:start justify-center gap-6 sm:gap-10 text-sx sm:text-xl w-[100dvw] mt-20 sm:mt-30 sm:mb-20">

          <div className="box border border-accent p-6 sm:p-8 w-[90dvw] h-fit sm:w-130 sm:min-h-100 rounded-3xl bg-[url('./assets/bg/darkwave-bg3.png')] bg-center bg-cover bg-no-repeat image-blured hover:bg-accent hover:border-text transition duration-300 ease-in-out">

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
                <li className="sm:mb-2">Data base design</li>
                <li className="">API integration</li>
              </ul>
            </div>

          </div>

          <div className="box border border-accent p-6 sm:p-8 w-[90dvw] h-fit sm:w-130 sm:min-h-100 rounded-3xl bg-[url('./assets/bg/darkwave-bg3.png')] bg-center bg-cover bg-no-repeat image-blured hover:bg-accent hover:border-text transition duration-300 ease-in-out">

            <div className="absolute inset-0 backdrop-blur-sm rounded-3xl"></div>

            <div className="relative z-10 flex flex-col items-start justify-start gap-3 sm:gap-6">
              <div className="text-xl sm:text-3xl flex font-bold">
                <div className="mr-4"><Keyboard className='w-8 h-8 sm:w-12 sm:h-12 text-accent' /></div>
                <h1>Tools I use</h1>
              </div>
              <p className="">I use the latest  tools and technologies to build functional and scalable products</p>
              <ul className="font-bold list-disc ml-6">
                <li className="mb-2">Frontend: <span className="rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   bg-[#00a1e0]">react</span>  <span className="rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   bg-red-700">angular</span>  <span className="bg-blue-700 rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   ">lwc</span></li>
                <li className="mb-2">Backend: <span className="bg-green-500 rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   ">node</span>  <span className="bg-red-700 rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   ">java</span>  <span className="bg-blue-500 rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   ">apex</span></li>
                <li className="mb-2">Data: <span className="bg-green-500 rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   ">mongo</span>  <span className="bg-blue-400 rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   ">postgre</span>  <span className="bg-blue-500  rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   ">soql</span></li>
                <li className="mb-2">Version: <span className="bg-gray-700  rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   ">github</span>  <span className="bg-gray-900  rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   ">vercel</span>  <span className="bg-green-400  rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   ">netlify</span></li>
                <li className="">Other: <span className="bg-orange-500  rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   ">aws</span>  <span className="bg-blue-700  rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   ">docker</span>  <span className="bg-purple-700  rounded-full px-2 pb-1 text-[12px] sm:text-[18px]   ">insomnia</span></li>
              </ul>
            </div>

          </div>

          <div className="box border border-accent p-6 sm:p-8 w-[90dvw] h-fit sm:w-130 sm:min-h-100 rounded-3xl bg-[url('./assets/bg/darkwave-bg3.png')] bg-center bg-cover bg-no-repeat image-blured hover:bg-accent hover:border-text transition duration-300 ease-in-out">

            <div className="absolute inset-0 backdrop-blur-sm rounded-3xl"></div>

            <div className="relative z-10 flex flex-col items-start justify-start gap-3 sm:gap-6">
              <div className="text-xl sm:text-3xl flex font-bold">
                <div className="mr-4"><GalleryHorizontalEnd className='w-8 h-8 sm:w-12 sm:h-12 text-accent' /></div>
                <h1>IU/UX Design</h1>
              </div>
              <p className="">I am a coder first, designer sencond. I can help design clean and modern interfaces</p>
              <ul className="font-bold list-disc ml-6">
                <li className="mb-2">User-centered design</li>
                <li className="mb-2">Modern and clean IU</li>
                <li className="mb-2">Responsive layouts</li>
                <li className="mb-2">Wireframes & prototypes</li>
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

          </div> */}

          {/* <div className="box border border-accent p-8 w-130 h-100 rounded-3xl bg-[url('./assets/bg/darkwave-bg3.png')] bg-center bg-cover bg-no-repeat image-blured hover:bg-accent hover:border-text transition duration-300 ease-in-out">

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

        {/* CAROUSEL */}
        <div data-aos="fade-left" data-aos-duration="2000" data-aos-offset="100" className=" border-red-500 absolute bottom-20 sm:bottom-50 carousel w-dvw sm:w-310 text-accent white:text-light-blue z-700">
          <div className="border-blue-500 group ">
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#5fa04e] bg-background shadow-[0_0_12px_#5fa04e] white:shadow-[0_0_12px_#5fa04e]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#e0e0e6] bg-background bg-text shadow-[0_0_12px_#e0e0e6] white:shadow-[0_0_12px_#e0e0e6]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-line-wordmark.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#f0db4f] bg-background shadow-[0_0_12px_#f0db4f] white:shadow-[0_0_12px_#f0db4f]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#4faa41] bg-background shadow-[0_0_12px_#4faa41] white:shadow-[0_0_12px_#4faa41]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#e0e0e6] bg-text shadow-[0_0_12px_#e0e0e6] white:shadow-[0_0_12px_#e0e0e6]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#d32a2d] bg-background shadow-[0_0_12px_#d32a2d] white:shadow-[0_0_12px_#d32a2d]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#ea23a4] bg-background shadow-[0_0_12px_#ea23a4] white:shadow-[0_0_12px_#ea23a4]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#a9bfd1] bg-text shadow-[0_0_12px_#a9bfd1] white:shadow-[0_0_12px_#a9bfd1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#ff9900] bg-background shadow-[0_0_12px_#ff9900] white:shadow-[0_0_12px_#ff9900]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
            </div>
          </div>
          <div className="border-blue-500 group ">
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#5fa04e] bg-background shadow-[0_0_12px_#5fa04e] white:shadow-[0_0_12px_#5fa04e]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#e0e0e6] bg-background bg-text shadow-[0_0_12px_#e0e0e6] white:shadow-[0_0_12px_#e0e0e6]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-line-wordmark.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#f0db4f] bg-background shadow-[0_0_12px_#f0db4f] white:shadow-[0_0_12px_#f0db4f]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#4faa41] bg-background shadow-[0_0_12px_#4faa41] white:shadow-[0_0_12px_#4faa41]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#e0e0e6] bg-background bg-text shadow-[0_0_12px_#e0e0e6] white:shadow-[0_0_12px_#e0e0e6]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#d32a2d] bg-background shadow-[0_0_12px_#d32a2d] white:shadow-[0_0_12px_#d32a2d]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#ea23a4] bg-background shadow-[0_0_12px_#ea23a4] white:shadow-[0_0_12px_#ea23a4]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#a9bfd1] bg-background bg-text shadow-[0_0_12px_#a9bfd1] white:shadow-[0_0_12px_#a9bfd1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#f0db4f] bg-background shadow-[0_0_12px_#f0db4f] white:shadow-[0_0_12px_#f0db4f]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
            </div>
          </div>

        </div>

        {/* MY PHOTO */}
        <div className=" border-red-500 absolute bottom-0 -left-18 sm:left-50 w-90 h-90 sm:w-160 sm:h-160 bg-contain bg-no-repeat bg-center z-701" style={{ backgroundImage: `url(${me})` }}
          data-aos="fade-left" data-aos-duration="2000" data-aos-offset="150"
        ></div>
        <div className="box border-red-500 absolute bottom-0 -left-18 sm:left-50 w-90 h-90 sm:w-160 sm:h-160 bg-contain bg-no-repeat bg-center z-701" style={{ backgroundImage: `url(${three_d})` }}
        ></div>

        {/* GSAP CROUSEL ANIMATIONS */}
        {/* <div className="carousel mt-40 border border-red-500">
            <div className="carousel-image bg-accent">1</div>
            <div className="carousel-image bg-red-500">2</div>
            <div className="carousel-image">3</div>
            <div className="carousel-image">4</div>
            <div className="carousel-image">5</div>
            <div className="carousel-image">6</div>
            <div className="carousel-image">7</div>
            <div className="carousel-image">8</div>
            <div className="carousel-image">9</div>
            <div className="carousel-image">10</div>
          </div> */}
        {/* GSAP CROUSEL ANIMATIONS */}


        {/* SCROLL GALLERY */}

        {/* <h1 className="text">Scrolly Images</h1>
          <h1 aria-hidden="true" className="text outline-text">Scrolly Images</h1>
          <h1 aria-hidden="true" className="text filter-text">Scrolly Images</h1>

          <div id="wrapper">
            <div id="content">
              <div className="images">
                <img data-speed="0.8" src="https://images.unsplash.com/photo-1556856425-366d6618905d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
                <img data-speed="0.9" src="https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="" />
                <img data-speed="1" src="https://images.unsplash.com/photo-1609166214994-502d326bafee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="" />
                <img data-speed="1.1" src="https://images.unsplash.com/photo-1589882265634-84f7eb9a3414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=434&q=80" alt="" />
                <img data-speed="0.9" src="https://images.unsplash.com/photo-1514689832698-319d3bcac5d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=434&q=80" alt="" />
                <img data-speed="1.2" src="https://images.unsplash.com/photo-1535207010348-71e47296838a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="" />
                <img data-speed="0.8" src="https://images.unsplash.com/photo-1588007375246-3ee823ef4851?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
                <img data-speed="1" src="https://images.unsplash.com/photo-1571450669798-fcb4c543f6a4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
              </div>
            </div>
          </div> */}
        {/* SCROLL GALLERY */}






      </section>
    </>
  );
}

export default Teste;
