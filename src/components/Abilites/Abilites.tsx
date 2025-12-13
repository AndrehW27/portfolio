import "./Abilites.css";
import me from "../../assets/Me/me_art_modern-nobg.png";
// import three_d from "../../assets/bg/purple-3D.png";
// import bg2 from "../../assets/me_art_modern-nobg.png";
// import video from "../../assets/videos/wave-dna.mp4";
// import { ChevronDown } from "lucide-react";

// import { ChevronDown, Wallpaper, DatabaseBackup, Gauge } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import bg from "../../assets/Me/me-pc2.png";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SquareDashedBottomCode, GalleryHorizontalEnd, Keyboard, ChevronDown } from "lucide-react";
// import { GiClick } from "react-icons/gi";
import { useTranslation } from "react-i18next";

// 💚 This just adds the GSAP link to this pen, don't copy this bit
// import { GSAPInfoBar } from "https://codepen.io/GreenSock/pen/vYqpyLg.js"
// new GSAPInfoBar({ link: "https://gsap.com/docs/v3/Plugins/ScrollSmoother/" });

// import wavesDark from '../../assets/videos/waves-video2.mp4';
// import wavesLight from '../../assets/videos/white-video.mp4';

// type HeroProps = {
//   theme: string;
// };

// export default function Teste()

function Abilites() {

  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);


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
      <section id="abilities" className="relative h-[185svh] sm:h-[100svh] w-[100dvw] flex flex-col items-center justify-start overflow-hidden white:bg-text text-text scroll-hidden border-red-500 mb-20 sm:mb-50">

        {/* <div className="absolute inset-0 bg-[url('./assets/bg/wave6.jpg')] bg-center bg-cover sm:bg-contain bg-no-repeat h-full w-dvw -z-100 opacity-10 border-red-500"></div> */}
        <div className="absolute inset-0 h-full w-dvw -z-100 opacity-10 border-red-500"></div>

        {/* SCROLL GALLERY */}
        <div className="flex flex-col sm:flex-row items-center items:start justify-center gap-6 sm:gap-10 text-sx sm:text-xl w-[100dvw] white:text-dark-gray mt-20 sm:mt-30 sm:mb-20">

          <div className="box shadow-[0_0_15px_#7C3AED] white:shadow-[0_0_10px_#6594fc]  p-6 sm:p-8 w-[90dvw] h-fit sm:w-130 sm:min-h-100 rounded-3xl bg-background white:bg-text  bg-center bg-cover bg-no-repeat image-blured hover:bg-accent hover:border-text transition duration-300 ease-in-out">



            <div className="relative z-10 flex flex-col items-start justify-start gap-3 sm:gap-6">
              <div className="text-xl sm:text-3xl flex font-bold">
                <div className="mr-4"><SquareDashedBottomCode className='w-8 h-8 sm:w-12 sm:h-12 text-accent white:text-light-blue ' /></div>
                <h1>{t("abilities.what.title")}</h1>
              </div>
              <p className="">{t("abilities.what.text")}</p>
              <ul className="font-bold list-disc ml-6">
                <li className="sm:mb-2">{t("abilities.what.item1")}</li>
                <li className="sm:mb-2">{t("abilities.what.item2")}</li>
                <li className="sm:mb-2">{t("abilities.what.item3")}</li>
                <li className="">{t("abilities.what.item4")}</li>
              </ul>
            </div>

          </div>

          <div className="box shadow-[0_0_15px_#7C3AED] white:shadow-[0_0_10px_#6594fc]   p-6 sm:p-8 w-[90dvw] h-fit sm:w-130 sm:min-h-100 rounded-3xl bg-background white:bg-text  bg-center bg-cover bg-no-repeat image-blured hover:bg-accent hover:border-text transition duration-300 ease-in-out">



            <div className="relative z-10 flex flex-col items-start justify-start gap-3 sm:gap-6">
              <div className="text-xl sm:text-3xl flex font-bold">
                <div className="mr-4"><Keyboard className='w-8 h-8 sm:w-12 sm:h-12 text-accent white:text-light-blue' /></div>
                <h1>{t("abilities.tools.title")}</h1>
              </div>
              <p className="">{t("abilities.tools.text")}</p>
              <ul className="font-bold list-disc ml-6">
                <li className="mb-2">{t("abilities.tools.item1")} <span className="rounded-full px-2  text-[12px] sm:text-[18px]  bg-[#00a1e0]">react</span>  <span className="rounded-full px-2  text-[12px] sm:text-[18px]   bg-red-700">angular</span>  <span className="bg-blue-700 rounded-full px-2  text-[12px] sm:text-[18px]   ">lwc</span></li>
                <li className="mb-2">{t("abilities.tools.item2")} <span className="bg-green-500 rounded-full px-2  text-[12px] sm:text-[18px]   ">node</span>  <span className="bg-red-700 rounded-full px-2  text-[12px] sm:text-[18px]   ">java</span>  <span className="bg-blue-500 rounded-full px-2  text-[12px] sm:text-[18px]   ">apex</span></li>
                <li className="mb-2">{t("abilities.tools.item3")} <span className="bg-green-500 rounded-full px-2  text-[12px] sm:text-[18px]   ">mongo</span>  <span className="bg-blue-400 rounded-full px-2  text-[12px] sm:text-[18px]   ">postgre</span>  <span className="bg-blue-500  rounded-full px-2  text-[12px] sm:text-[18px]   ">soql</span></li>
                <li className="mb-2">{t("abilities.tools.item4")} <span className="bg-gray-700  rounded-full px-2  text-[12px] sm:text-[18px]   ">github</span>  <span className="bg-gray-900  rounded-full px-2  text-[12px] sm:text-[18px]   ">vercel</span>  <span className="bg-green-400  rounded-full px-2  text-[12px] sm:text-[18px]   ">netlify</span></li>
                <li className="">{t("abilities.tools.item5")} <span className="bg-orange-500  rounded-full px-2  text-[12px] sm:text-[18px]   ">aws</span>  <span className="bg-blue-700  rounded-full px-2  text-[12px] sm:text-[18px]   ">docker</span>  <span className="bg-purple-700  rounded-full px-2  text-[12px] sm:text-[18px]   ">insomnia</span></li>
              </ul>
            </div>

          </div>

          <div className="box shadow-[0_0_15px_#7C3AED] white:shadow-[0_0_10px_#6594fc]   p-6 sm:p-8 w-[90dvw] h-fit sm:w-130 sm:min-h-100 rounded-3xl bg-background white:bg-text  bg-center bg-cover bg-no-repeat image-blured hover:bg-accent hover:border-text transition duration-300 ease-in-out">



            <div className="relative z-10 flex flex-col items-start justify-start gap-3 sm:gap-6">
              <div className="text-xl sm:text-3xl flex font-bold">
                <div className="mr-4"><GalleryHorizontalEnd className='w-8 h-8 sm:w-12 sm:h-12 text-accent white:text-light-blue' /></div>
                <h1>{t("abilities.design.title")}</h1>
              </div>
              <p className="">{t("abilities.design.text")}</p>
              <ul className="font-bold list-disc ml-6">
                <li className="mb-2">{t("abilities.design.item1")}</li>
                <li className="mb-2">{t("abilities.design.item2")}</li>
                <li className="mb-2">{t("abilities.design.item3")}</li>
                <li className="mb-2">{t("abilities.design.item4")}</li>
              </ul>
            </div>

          </div>

          {/* <div className="box border border-accent p-8 w-130 h-100 rounded-3xl bg-background white:bg-text  bg-center bg-cover bg-no-repeat image-blured hover:bg-accent hover:border-text transition duration-300 ease-in-out">

            

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

          {/* <div className="box border border-accent p-8 w-130 h-100 rounded-3xl bg-background white:bg-text  bg-center bg-cover bg-no-repeat image-blured hover:bg-accent hover:border-text transition duration-300 ease-in-out">

            

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
              <img loading="lazy" className='icons hover:bg-[#5fa04e] bg-background white:bg-text  shadow-[0_0_12px_#5fa04e] white:shadow-[0_0_12px_#5fa04e]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#1f1f1f] bg-background white:bg-text  bg-text shadow-[0_0_12px_#1f1f1f] white:shadow-[0_0_12px_#1f1f1f]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-line-wordmark.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background white:bg-text  shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#f0db4f] bg-background white:bg-text  shadow-[0_0_12px_#f0db4f] white:shadow-[0_0_12px_#f0db4f]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background white:bg-text  shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#4faa41] bg-background white:bg-text  shadow-[0_0_12px_#4faa41] white:shadow-[0_0_12px_#4faa41]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#1f1f1f] bg-text shadow-[0_0_12px_#1f1f1f] white:shadow-[0_0_12px_#1f1f1f]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#d32a2d] bg-background white:bg-text  shadow-[0_0_12px_#d32a2d] white:shadow-[0_0_12px_#d32a2d]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#ea23a4] bg-background white:bg-text  shadow-[0_0_12px_#ea23a4] white:shadow-[0_0_12px_#ea23a4]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background white:bg-text  shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#a9bfd1] bg-text shadow-[0_0_12px_#a9bfd1] white:shadow-[0_0_12px_#a9bfd1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#ff9900] bg-background white:bg-text  shadow-[0_0_12px_#ff9900] white:shadow-[0_0_12px_#ff9900]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background white:bg-text  shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
            </div>
          </div>
          <div className="border-blue-500 group ">
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#5fa04e] bg-background white:bg-text  shadow-[0_0_12px_#5fa04e] white:shadow-[0_0_12px_#5fa04e]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#1f1f1f] bg-background white:bg-text  bg-text shadow-[0_0_12px_#1f1f1f] white:shadow-[0_0_12px_#1f1f1f]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-line-wordmark.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background white:bg-text  shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#f0db4f] bg-background white:bg-text  shadow-[0_0_12px_#f0db4f] white:shadow-[0_0_12px_#f0db4f]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background white:bg-text  shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#4faa41] bg-background white:bg-text  shadow-[0_0_12px_#4faa41] white:shadow-[0_0_12px_#4faa41]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#1f1f1f] bg-background white:bg-text  bg-text shadow-[0_0_12px_#1f1f1f] white:shadow-[0_0_12px_#1f1f1f]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#d32a2d] bg-background white:bg-text  shadow-[0_0_12px_#d32a2d] white:shadow-[0_0_12px_#d32a2d]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#ea23a4] bg-background white:bg-text  shadow-[0_0_12px_#ea23a4] white:shadow-[0_0_12px_#ea23a4]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background white:bg-text  shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            </div>
            <div className="card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#a9bfd1] bg-background white:bg-text  bg-text shadow-[0_0_12px_#a9bfd1] white:shadow-[0_0_12px_#a9bfd1]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#f0db4f] bg-background white:bg-text  shadow-[0_0_12px_#f0db4f] white:shadow-[0_0_12px_#f0db4f]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
            </div>
            <div className=" card-carousel grow-0 shrink-0 basis-[5rem] sm:basis-[7rem] sm:w-5rem sm:h-5rem">
              <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background white:bg-text  shadow-[0_0_12px_#00a1e0] white:shadow-[0_0_12px_#00a1e0]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
            </div>
          </div>

        </div>

        {/* MY PHOTO */}
        <div className="border-red-500 absolute bottom-0 -left-18 sm:left-50 w-85 h-85 sm:w-160 sm:h-160 bg-contain bg-no-repeat bg-center z-701" style={{ backgroundImage: `url(${me})` }}
          data-aos="fade-left" data-aos-duration="2000" data-aos-offset="150">
          {/* <div className="scale-fast absolute bottom-3 left-35 sm:left-75 text-text">
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="bg-white/30 w-12 h-12 sm:w-20 sm:h-20 border border-text rounded-full flex justify-center items-center">
              <GiClick className="h-full w-full p-2" />
            </button>
            <p className="ml-2 sm:ml-5 sm:text-2xl sm:mt-2">click</p>
          </div> */}
        </div>
        {/* <div className="box border-red-500 absolute bottom-0 -left-18 sm:left-50 w-90 h-90 sm:w-160 sm:h-160 bg-contain bg-no-repeat bg-center z-701" style={{ backgroundImage: `url(${three_d})` }}
        ></div> */}

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


        <a href="#projects" className="up-and-down absolute bottom-6 sm:bottom-16 z-900" >
          <ChevronDown className=' sm:w-10 sm:h-10' />
        </a>

        {/* MODAL DETAILS */}
        {showModal && (
          <div className="absolute border-red-500 bottom-0 flex items-center justify-center z-9999">

            <div
              className="absolute border-green-500 h-[100svh] w-[100dvw] inset-0 bg-black/10 backdrop-blur-md border border-red-500 animate-fadeIn"
              onClick={() => setShowModal(false)}/>

            <div className='scale relative text-xs sm:text-xl border-green-500 h-140 w-140 sm:h-220 sm:w-220 flex flex-col items-center justify-center mt-10 text-center mb-35 white:text-text cursor-pointer'>

              {/* <button
                onClick={() => setShowModal(false)}
                className="absolute top-[-15px] right-[-15px] bg-white/30 w-8 h-8 sm:w-15 sm:h-15 rounded-full flex justify-center items-center border border-text white:border-text-dark z-700 cursor-pointer"
              >
                X
              </button> */}

              <div data-aos="zoom-in" data-aos-duration="3000" data-aos-offset="200" className='rounded-full w-140 h-140 sm:h-220 sm:w-220 bg-gradient-to-tr from-background from-[15%] via-surface via-[50%] to-accent to-[100%] white:bg-gradient-to-tr white:from-background white:from-[15%] white:via-light-blue white:via-[50%] white:to-text white:to-[100%] shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] flex flex-col items-center justify-center z-600'>
                {/* <div data-aos="fade-right" data-aos-duration="2000" data-aos-offset="350" className='border-blue-500 clip-hex2 absolute top-0 left-[-70px] w-110 h-130 sm:w-150 sm:h-140 bg-gradient-to-tr from-background from-[5%] via-surface via-[40%] to-accent to-[100%] white:bg-gradient-to-tr white:from-background white:from-[15%] white:via-light-blue white:via-[50%] white:to-text white:to-[100%] flex fex-col items-center justify-center'> */}
                <div className=" border-red-500 w-90 sm:w-140 z-10 ">

                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1Dfsjvic7Z9wcLdjXfSIvKjF_BuvckW3o/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.dev")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/13dlxZgxaoNgn2UgUKnW4jG7ePsfXvVqc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.adm")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1bRluLJoZ09jgAKB7g5537JMitziAOVM7/view" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.jr")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1h_SM0ytcV88K8RbDRH-o42OHw6EIfF5p/view" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.react")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/0B9EwvgeYbwGuWldKclJzUUlEVTQ/view?resourcekey=0-m6tPdA_Yd-W0DzJ0UwHItA" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.eli")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1cb7fdYla7avKo7Ju_-ukM8uTQr8DPY9P/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.bct")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/12MZR5OlbskTs5fsX2TqgGLPrnrlfSiIz/view" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.omni")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1rj1R8i6UXtx1p0r_KkLC97Q6Jw9WPmni/view" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.html")}</h1>
                  </a>
                  <a className='hover:text-accent white:hover:text-light-blue transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1AVLCvLr-qYvcEzdVqKgvizOVUxtzA1Lc/view" target="_blank" rel="noopener noreferrer">
                    <h1 className='mb-5 underline cursor-pointer'>{t("about.css")}</h1>
                  </a>
                </div>
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className='px-4 py-2 rounded-full bg-linear-to-t from-surface to-accent white:from-text-dark white:to-light-blue cursor-pointer mt-6 hover:opacity-50 hover:border border-accent white:hover:border-light-blue transition duration-300 ease-in-out'>{t("about.aboutme")}</button>
              </div>

            </div>

            {/* <div className="border-blue-500 relative rounded-3xl text-sm max-h-[80svh]  h-[77svh] sm:h-[77svh] sm:w-[460px] bg-background white:bg-text flex flex-col items-center justify-start px-6 py-10 animate-zoomIn ">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-[-15px] right-[-15px] bg-white/30 w-8 h-8 sm:w-15 sm:h-15 rounded-full flex justify-center items-center border border-text white:border-text-dark z-100 cursor-pointer"
              >
                X
              </button>
            </div> */}
          </div>

        )}



      </section>
    </>
  );
}

export default Abilites;
