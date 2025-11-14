import React, { useEffect, useRef, useState } from "react";
import { GiClick } from "react-icons/gi";
import { useTranslation } from "react-i18next";
// import { ChevronDown } from "lucide-react";

import zerameta1desktop from "../../assets/projects/zerameta1.png";
import zerameta1 from "../../assets/projects/zerameta1.png";
import zerameta2 from "../../assets/projects/zerameta2.png";
import zerameta3 from "../../assets/projects/zerameta3.png";
import zerameta4 from "../../assets/projects/zerameta4.png";
import zerameta5 from "../../assets/projects/zerameta5.png";
import zerameta6 from "../../assets/projects/zerameta6.png";
import zerameta7 from "../../assets/projects/zerameta7.png";
import zerameta8 from "../../assets/projects/zerameta8.png";

import consultor1desktop from "../../assets/projects/consultor1teste2.png";
import consultor1 from "../../assets/projects/consultor1teste2.png";
import consultor2 from "../../assets/projects/consultor2final.png";
import consultor3 from "../../assets/projects/consultor3final.png";
import consultor4 from "../../assets/projects/consultor4final.png";
import consultor5 from "../../assets/projects/consultor5final.png";
import consultor6 from "../../assets/projects/consultor6final.png";
import consultor7 from "../../assets/projects/consultor7final.png";
import consultor8 from "../../assets/projects/consultor8final.png";


import portalsindesktop from "../../assets/projects/portalsin1cut.png";
import portalsin1 from "../../assets/projects/portalsin-journey.png";

import netflix1desktop from "../../assets/projects/netflix2.jpg";
import netflix1 from "../../assets/projects/netflix2.jpg";
import netflix2 from "../../assets/projects/net-lands.png";


import portfolio1desktop from "../../assets/projects/port1.png";
import portfolio1 from "../../assets/projects/port1.png";
import portfolio2 from "../../assets/projects/port2.png";
import portfolio3 from "../../assets/projects/port3.png";
import portfolio4 from "../../assets/projects/port4.png";

export default function Projects() {
  const { t } = useTranslation();

  // SLIDES DATA
  const slidesData = [
    {
      title: t("project.zera.title"),
      icons: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
          color: "#ea23a4"
        },

        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
          color: "#5fa04e"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
          color: "#4faa41"
        }
      ],
      images: [zerameta1, zerameta2, zerameta3, zerameta4, zerameta5, zerameta6, zerameta7, zerameta8],
      desktop: zerameta1desktop,
      links: [
        "https://github.com/AndrehW27/ZeraMetaBackEnd/",
        "https://zera-meta.vercel.app/boas-vindas",
      ],
      description: t("project.zera.description"),
    },
    {
      title: t("project.security.title"),
      icons: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg",
          color: "#00a1e0"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
          color: "#0078d4"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg",
          color: "#5600ce"
        }
      ],
      images: [consultor1, consultor2, consultor3, consultor4, consultor5, consultor6, consultor7, consultor8],
      desktop: consultor1desktop,
      links: [
        "https://",
        "https://",
      ],
      description: t("project.security.description"),
    },
    {
      title: t("project.portal.title"),
      icons: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
          color: "#ea23a4"
        },

        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
          color: "#ff9900"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
          color: "#f37036"
        }
      ],
      images: [portalsin1],
      desktop: portalsindesktop,
      links: [
        "https://",
        "https://",
      ],
      description: t("project.portal.description"),
    },
    {
      title: t("project.port.title"),
      icons: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          color: "#61dafb"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          color: "#29acdb"
        },
        {
          icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
          color: "#4faa41"
        },
      ],
      images: [portfolio1, portfolio2, portfolio3, portfolio4],
      desktop: portfolio1desktop,
      links: [
        "https://github.com/AndrehW27/portfolio",
        "https://portfolio-teal-ten-48.vercel.app/",
      ],
      description: t("project.port.description"),
    },
    {
      title: t("project.net.title"),
      icons: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          color: "#61dafb"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          color: "#007acc"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
          color: "#31a5d9"
        },
      ],
      links: [
        "https://github.com/AndrehW27/NetflixClone",
        "https://",
      ],
      images: [netflix1, netflix2],
      desktop: netflix1desktop,
      description: t("project.net.description"),
    },
  ];

  const [index, setIndex] = useState(0);

  // MODAL STATE
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Swipe state
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  // Lock body when modal open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape" && showModal) setShowModal(false);

      if (showModal) {
        if (e.key === "ArrowLeft") prevModal();
        if (e.key === "ArrowRight") nextModal();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, showModal, modalIndex]);

  // Carousel navigation
  const prev = () =>
    setIndex((i) => (i - 1 + slidesData.length) % slidesData.length);
  const next = () => setIndex((i) => (i + 1) % slidesData.length);
  const goTo = (i: number) => setIndex(i);

  // Modal navigation
  const nextModal = () =>
    setModalIndex((i) => (i + 1) % modalImages.length);
  const prevModal = () =>
    setModalIndex((i) => (i - 1 + modalImages.length) % modalImages.length);

  // Swipe handlers
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
  }
  function handleTouchMove(e: React.TouchEvent) {
    touchCurrentX.current = e.touches[0].clientX;
  }
  function handleTouchEnd() {
    if (touchStartX.current == null || touchCurrentX.current == null) return;
    const dx = touchCurrentX.current - touchStartX.current;

    if (dx > 50) prev();
    else if (dx < -50) next();

    touchStartX.current = null;
    touchCurrentX.current = null;
  }

  return (
    <section id="projects" className="relative bg-background white:bg-white-bg h-[100dvh] w-dvw text-text white:text-text-dark font-bold">

      {/* FAKE SCREENS */}
      <div className="border-6 border-surface absolute top-15 left-85 bg-cover h-[85dvh] w-[78dvw] bg-text/20 rounded-3xl shadow-[0_0_10px_#7C3AED]  border-surface">
        <div className="absolute bottom-0 left-0 w-full rounded-b-2xl h-[100dvh] bg-[linear-gradient(to_top,#111_22%,transparent_70%)]">
        </div>
      </div>
      <div className="border-6 border-surface absolute top-15 right-85 bg-cover h-[85dvh] w-[78dvw] bg-text/20 rounded-3xl shadow-[0_0_10px_#7C3AED]  border-surface">
        <div className="absolute bottom-0 left-0 w-full rounded-b-2xl h-[100dvh] bg-[linear-gradient(to_top,#111_22%,transparent_70%)]">
        </div>
      </div>

      {/* CAROUSEL CONTAINER  */}
      <div className="relative w-full h-[100dvh] max-w-[1200px] overflow-hidden">
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="h-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slidesData.map((s, slideIdx) => (
            <article
              key={slideIdx}
              className="w-full shrink-0 h-full flex flex-col items-center"
            >
              {/* Title + Icons */}


              {/* Main image */}
              <div
                className="border-6 border-surface absolute bottom-12 h-[85dvh] w-[78dvw] rounded-3xl bg-cover bg-top shadow-[0_0_10px_#7C3AED] white:shadow-[0_0_20px_#6594fc] cursor-pointer"
                style={{ backgroundImage: `url(${s.desktop})` }}
                onClick={() => {
                  setModalImages(s.images);
                  setModalIndex(0);
                  setShowModal(true);
                }}>

                <div className="absolute bottom-0 left-0 w-full rounded-b-2xl h-[100dvh] bg-[linear-gradient(to_top,#111_25%,transparent_70%)]">



                  {/* <div className="absolute top-42 left-8 text-3xl"><i className="devicon-angular-plain"></i></div>
                  <div className="absolute top-42 left-23 text-3xl"><i className="devicon-mongodb-plain-wordmark"></i></div>
                  <div className="absolute top-42 left-38 text-3xl"><i className="devicon-nodejs-plain-wordmark"></i></div> */}

                  <div className='absolute bottom-46 left-20 w-fit sm:w-100 border-orange-500 flex justify-center items-start'>
                    <div className='flex align-center justify-center gap-2 sm:gap-4 z-100 '>
                      <img className='icons  shadow-[0_0_10px_#f0db4f]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                      <img className='icons shadow-[0_0_10px_#f16529]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                      <img className='icons shadow-[0_0_10px_#31a5d9]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                    </div>
                  </div>

                  <div className="absolute bottom-34 left-6 text-xl w-60  border-red-500">ZeraMeta</div>
                  <div className="absolute bottom-20 left-6 text-xs w-60  border-red-500">Comprehensive Fullstack app with database, secure authentication, and ChatGPT-powered AI integration.</div>
                  {/* <div className="absolute bottom-20 left-34 text-xs text-accent w-60  border-red-500">^</div>
                  <div className="absolute bottom-18 left-30 text-xs text-accent w-60  border-red-500">details</div> */}


                  <div className="absolute bottom-6 left-6 text-sm bg-white/99 text-black/80 px-3 py-1 rounded-2xl">Code</div>
                  <div className="absolute bottom-6 left-24 text-sm bg-accent text-white/80 px-3 py-1 rounded-2xl">Demo</div>
                  <div className="absolute bottom-8 left-55 text-xs text-accent w-60  border-red-500">details</div>


                  <button
                    onClick={() => {
                      setModalImages(s.images);
                      setModalIndex(0);
                      setShowModal(true);
                    }
                    }
                    className="absolute top-32 right-6 bg-white/30 w-10 h-10 border border-text rounded-full flex justify-center items-center"
                  >
                    <GiClick />
                  </button>

                </div>
              </div>
            </article>
          ))}
        </div>



      </div>

      {/* Controls */}

      <button
        onClick={prev}
        className="absolute top-1/2 translate-y-[-100%] left-2 bg-white/30 w-10 h-10 border border-text rounded-full flex justify-center items-center"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 translate-y-[-100%] right-2 bg-white/30 w-10 h-10 border border-text rounded-full flex justify-center items-center"
      >
        ›
      </button>


      {/* INDICATORS */}
      <div className="absolute text-center w-full bottom-5 flex justify-center gap-2 z-20">
        {slidesData.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-accent white:bg-light-blue" : "bg-white/40 white:bg-white/90"
              }`}
          />
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="absolute inset-0 flex items-center justify-center z-[9999]">
          <div
            className="absolute inset-0 bg-black/10 backdrop-blur-sm animate-fadeIn"
            onClick={() => setShowModal(false)}
          />

          <button
            onClick={() => setShowModal(false)}
            className="absolute top-11 right-6 bg-white/30 w-10 h-10 rounded-full flex justify-center items-center border border-text z-100"
          >
            X
          </button>
          {/* Pagination arrows */}
          {modalImages.length > 1 && (
            <>
              <button
                onClick={prevModal}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 w-10 h-10 rounded-full border border-text flex justify-center items-center z-100"
              >
                ‹
              </button>

              <button
                onClick={nextModal}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 w-10 h-10 rounded-full border border-text flex justify-center items-center z-100"
              >
                ›
              </button>
            </>
          )}

          <div className="relative rounded-2xl  max-w-[900px] bg-background flex flex-col items-center overflow-hidden animate-zoomIn shadow-[0_0_20px_#7C3AED] white:shadow-[0_0_20px_#6594fc] ">


            {/* Modal image */}
            <img
              src={modalImages[modalIndex]}
              alt="modal"
              className="h-[85vh] w-[80vw] object-cover rounded-2xl "
            />

          </div>

        </div>

      )}



    </section>
  );
}
