import React, { useCallback, useEffect, useRef, useState } from "react";
import { GiClick } from "react-icons/gi";
import { useTranslation } from "react-i18next";

import "./Project.css";
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

import consultor1desktop from "../../assets/projects/consultor.png";
import consultor1 from "../../assets/projects/consultor.png";
import consultor2 from "../../assets/projects/consultor2final.png";
import consultor3 from "../../assets/projects/consultor3final.png";
import consultor4 from "../../assets/projects/consultor4final.png";
import consultor5 from "../../assets/projects/consultor5final.png";
import consultor6 from "../../assets/projects/consultor6final.png";
import consultor7 from "../../assets/projects/consultor7final.png";
import consultor8 from "../../assets/projects/consultor8final.png";

import portalsindesktop from "../../assets/projects/sin1test3.png";
import portalsin1 from "../../assets/projects/sin1test3.png";
import portalsin2 from "../../assets/projects/sin2cut.png";
import portalsin3 from "../../assets/projects/sin3cut.png";

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
          color: "#00a1e0"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg",
          color: "#7300ff"
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
          color: "#ff7700"
        }
      ],
      images: [portalsin1, portalsin2, portalsin3],
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
          color: "#00a1e0"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg",
          color: "#7300ff"
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
          color: "#ff7700"
        }
      ],
      images: [portalsin1, portalsin2, portalsin3],
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

  // Carousel navigation
  const prev = useCallback(() =>
    setIndex((i) => (i - 1 + slidesData.length) % slidesData.length), [slidesData.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % slidesData.length), [slidesData.length]);

  // Modal navigation
  const nextModal = useCallback(() =>
    setModalIndex((i) => (i + 1) % modalImages.length), [modalImages.length]);
  const prevModal = useCallback(() =>
    setModalIndex((i) => (i - 1 + modalImages.length) % modalImages.length), [modalImages.length]);

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" && !showModal) prev();
      if (e.key === "ArrowRight" && !showModal) next();
      if (e.key === "Escape" && showModal) setShowModal(false);

      if (showModal) {
        if (e.key === "ArrowLeft") prevModal();
        if (e.key === "ArrowRight") nextModal();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal, modalIndex, next, nextModal, prev, prevModal]);

  const goTo = (i: number) => setIndex(i);

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
    <section id="projects" className="relative border-pink-500 h-[100dvh] w-dvw text-text white:text-text-dark font-bold flex flex-col items-center justify-center">

      {/* FAKE SCREENS */}
      {/* <div className="absolute bottom-20 left-85 bg-cover h-[75dvh] w-[78dvw] bg-text/20 rounded-3xl shadow-[0_0_10px_#7C3AED] ">
        <div className="absolute bottom-0 left-0 w-full rounded-b-2xl h-[100dvh] bg-[linear-gradient(to_top,#111_22%,transparent_70%)]">
        </div>
      </div>
      <div className="absolute bottom-20 right-85 bg-cover h-[75dvh] w-[78dvw] bg-text/20 rounded-3xl shadow-[0_0_10px_#7C3AED]">
        <div className="absolute bottom-0 left-0 w-full rounded-b-2xl h-[100dvh] bg-[linear-gradient(to_top,#111_22%,transparent_70%)]">
        </div>
      </div> */}

      {/* CAROUSEL CONTAINER  */}
      <div
        data-aos="flip-left"
        data-aos-offset="400"
        data-aos-duration="3000"
        className=" w-full sm:w-[80dvw] h-[100dvh] overflow-hidden  border-blue-500">
        <div

          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="project-carousel-container h-full sm:w-[380px] flex items-end justify-start transition-transform duration-500 ease-in-out border-red-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slidesData.map((s, slideIdx) => (
            <article
              key={slideIdx}

              className="card  border-orange-500 w-full h-full sm:h-[75dvh] sm:w-[360px] shrink-0 flex flex-col items-center"
            >
              {/* Title + Icons */}


              {/* Main image */}
              <div

                className="hover border-yellow-500 scale absolute bottom-16 mb-6 h-[75dvh] w-[70dvw] sm:w-[340px] sm:text-text rounded-3xl bg-cover bg-top shadow-[0_0_40px_#7C3AED] white:shadow-[0_0_20px_#6594fc] cursor-pointer"
                style={{ backgroundImage: `url(${s.desktop})` }}>

                <div className="absolute border-black bottom-0 left-0 w-full rounded-b-2xl h-[100dvh] bg-[linear-gradient(to_top,#111_27%,transparent_60%)]">



                  {/* <div className="absolute top-42 left-8 text-3xl"><i className="devicon-angular-plain"></i></div>
                  <div className="absolute top-42 left-23 text-3xl"><i className="devicon-mongodb-plain-wordmark"></i></div>
                  <div className="absolute top-42 left-38 text-3xl"><i className="devicon-nodejs-plain-wordmark"></i></div> */}

                  <div className='absolute bottom-50 sm:bottom-60 w-full sm:w-[360px] sm:w-100  flex justify-center items-start'>
                    <div className='flex align-center justify-center gap-2 sm:gap-4 z-100 '>
                      {s.icons.map((iconData, iconIdx) => (
                        <img
                          key={iconIdx}
                          className="icons-projects w-10 h-10 sm:w-14 sm:h-14 shadow-[0_0_10px_var(--icon-shadow-color)]"
                          src={iconData.icon}
                          style={{ '--icon-shadow-color': iconData.color } as React.CSSProperties}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-22 flex flex-col ml-8">
                    <div className="mb-2 left-6 text-base sm:text-2xl w-100 text-accent white:text-light-blue border-red-500">{s.title}</div>
                    <div className="left-6 text-xs sm:text-base w-50 sm:w-75  border-red-500">{s.description}</div>
                  </div>


                  {/* <div className="absolute bottom-20 left-34 text-xs text-accent w-60  border-red-500">^</div>
                  <div className="absolute bottom-18 left-30 text-xs text-accent w-60  border-red-500">details</div> */}


                  <div className="absolute bottom-6 flex">
                    <a href={s.links[0]} target="_blank" rel="noopener noreferrer">
                      <div className="ml-6 text-xs sm:text-base bg-white/99 text-black/80 px-4 py-2 rounded-2xl">{t("project.code")}</div>
                    </a>
                    <a href={s.links[1]} target="_blank" rel="noopener noreferrer">
                      <div className="pointer ml-4 sm:left-32 text-xs sm:text-base bg-accent white:bg-light-blue text-white/80 px-4 py-2 rounded-2xl">{t("project.demo")}</div>
                    </a>
                  </div>

                  {/* <div className="absolute bottom-8 left-55 text-xs text-accent white:text-light-blue w-60  border-red-500">details</div> */}


                  <button
                    onClick={() => {
                      setModalImages(s.images);
                      setModalIndex(0);
                      setShowModal(true);
                    }
                    }
                    className="absolute top-50 sm:top-70 right-4 bg-white/30 w-12 h-12 sm:w-15 sm:h-15 border-accent white:border-light-blue text-accent white:text-light-blue rounded-full flex justify-center items-center"

                  >
                    <GiClick className="h-full w-full p-2" />
                  </button>

                  <div className="absolute top-46 sm:top-62 z-9999 rounded-3xl h-75 sm:h-105 w-full"
                    onClick={() => {
                      setModalImages(s.images);
                      setModalIndex(0);
                      setShowModal(true);
                    }
                    }
                  ></div>

                </div>
              </div>
            </article>
          ))}
        </div>



      </div>

      {/* Controls */}

      <button
        data-aos="fade-right"
        data-aos-offset="0"
        onClick={prev}
        className="absolute top-1/2 -translate-y- left-6 sm:left-30 bg-white/30 w-10 h-10 sm:w-15 sm:h-15 border border-text white:border-dark-gray rounded-full flex justify-center items-center cursor-pointer"
      >
        ‹
      </button>
      <button
        data-aos="fade-left"
        data-aos-offset="0"
        onClick={next}
        className="absolute top-1/2 -translate-y- right-2 sm:right-30 bg-white/30 w-10 h-10 sm:w-15 sm:h-15 border border-text white:border-dark-gray rounded-full flex justify-center items-center cursor-pointer"
      >
        ›
      </button>


      {/* INDICATORS */}
      <div className="absolute text-center w-full bottom-6 flex justify-center gap-2 z-20">
        {slidesData.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-accent white:bg-light-blue" : "bg-white/40 white:bg-dark-gray/40"
              }`}
          />
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="absolute border-red-500 inset-0 flex items-center justify-center z-9999">
          <div
            className="absolute inset-0 bg-black/10 backdrop-blur-md animate-fadeIn"
            onClick={() => setShowModal(false)}
          />




          <div className="relative rounded-3xl max-w-[900px] bg-background flex flex-col items-center animate-zoomIn shadow-[0_0_40px_#7C3AED] white:shadow-[0_0_10px_#6594fc] ">


            <div className="relative">
              {/* Modal image */}
              <img
                src={modalImages[modalIndex]}
                alt="modal"
                className="h-[85vh] w-[77vw] sm:w-[425px] object-cover rounded-2xl "
              />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-[-15px] right-[-15px] bg-white/30 w-8 h-8 sm:w-15 sm:h-15 rounded-full flex justify-center items-center border border-text white:border-text-dark z-100 cursor-pointer"
              >
                X
              </button>
            </div>



            {/* Pagination arrows */}
            {modalImages.length > 1 && (
              <>
                <button
                  onClick={prevModal}
                  className="absolute left-[-30px] sm:left-[-70px] top-1/2 -translate-y-1/2 bg-white/30 w-10 h-10 sm:w-15 sm:h-15 rounded-full border border-text white:border-text-dark flex justify-center items-center z-100 cursor-pointer"
                >
                  ‹
                </button>

                <button
                  onClick={nextModal}
                  className="absolute right-[-30px] sm:right-[-70px] top-1/2 -translate-y-1/2 bg-white/30 w-10 h-10 sm:w-15 sm:h-15 rounded-full border border-text white:border-text-dark flex justify-center items-center z-100 cursor-pointer"
                >
                  ›
                </button>
              </>
            )}

          </div>

        </div>

      )}



    </section>
  );
}
