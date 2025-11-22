import React, { useCallback, useEffect, useRef, useState } from "react";
import { GiClick } from "react-icons/gi";
import { useTranslation } from "react-i18next";

import "./Project.css";
// import { ChevronDown } from "lucide-react";

import zerameta1desktop from "../../assets/projects/zera/zerameta1.png";// import zerameta1desktop from "../../assets/projects/zera/zerameta1.png";
import zerameta1 from "../../assets/projects/zera/zerameta1.png";
import zerameta2 from "../../assets/projects/zera/zerameta2.png";
import zerameta3 from "../../assets/projects/zera/zerameta3.png";
import zerameta4 from "../../assets/projects/zera/zerameta4.png";
import zerameta5 from "../../assets/projects/zera/zerameta5.png";
import zerameta6 from "../../assets/projects/zera/zerameta6.png";
import zerameta7 from "../../assets/projects/zera/zerameta7.png";
import zerameta8 from "../../assets/projects/zera/zerameta8.png";

import consultor1desktop from "../../assets/projects/consultor/consultor.png";
import consultor1 from "../../assets/projects/consultor/consultor.png";
import consultor2 from "../../assets/projects/consultor/consultor2final.png";
import consultor3 from "../../assets/projects/consultor/consultor3final.png";
import consultor4 from "../../assets/projects/consultor/consultor4final.png";
import consultor5 from "../../assets/projects/consultor/consultor5final.png";
import consultor6 from "../../assets/projects/consultor/consultor6final.png";
import consultor7 from "../../assets/projects/consultor/consultor7final.png";
import consultor8 from "../../assets/projects/consultor/consultor8final.png";

import impacta1desktop from "../../assets/projects/impacta/impacta-mobile1.png";
import impacta1 from "../../assets/projects/impacta/impacta-mobile1.png";
import impacta2 from "../../assets/projects/impacta/impacta-mobile2.png";
import impacta3 from "../../assets/projects/impacta/impacta-mobile3.png";
import impacta4 from "../../assets/projects/impacta/impacta-mobile4.png";
import impacta5 from "../../assets/projects/impacta/impacta-mobile5.png";
import impacta6 from "../../assets/projects/impacta/impacta-mobile6.png";
import impacta7 from "../../assets/projects/impacta/impacta-mobile7.png";
import impacta8 from "../../assets/projects/impacta/impacta-mobile8.png";
import impacta9 from "../../assets/projects/impacta/impacta-mobile9.png";
import impacta10 from "../../assets/projects/impacta/impacta-mobile10.png";

import poke1desktop from "../../assets/projects/pokedex/poke-mobile-1.png";
import poke1 from "../../assets/projects/pokedex/poke-mobile-1.png";
import poke2 from "../../assets/projects/pokedex/poke-mobile-2.png";
import poke3 from "../../assets/projects/pokedex/poke-mobile-3.png";
import poke4 from "../../assets/projects/pokedex/poke-mobile-4.png";
import poke5 from "../../assets/projects/pokedex/poke-mobile-5.png";
import poke6 from "../../assets/projects/pokedex/poke-mobile-6.png";

import move1desktop from "../../assets/projects/MoveIt/MoveLightMobile1.png";
import move1 from "../../assets/projects/MoveIt/MoveLightMobile1.png";
import move2 from "../../assets/projects/MoveIt/MoveLightMobile2.png";
import move3 from "../../assets/projects/MoveIt/MoveLightMobile3.png";
import move4 from "../../assets/projects/MoveIt/MoveLightMobile4.png";

import hero1desktop from "../../assets/projects/BeTheHero/HeroMobile1.png";
import hero1 from "../../assets/projects/BeTheHero/HeroDesktop1.png";
import hero2 from "../../assets/projects/BeTheHero/HeroDesktop2.png";
import hero3 from "../../assets/projects/BeTheHero/HeroDesktop3.png";

import tft1desktop from "../../assets/projects/tft-store/tft-store1-square.png";
import tft1 from "../../assets/projects/tft-store/tft-store1-vertical2.png";

import portalsindesktop from "../../assets/projects/portal-sin/sin1test3.png";
import portalsin1 from "../../assets/projects/portal-sin/sin1test3.png";
import portalsin2 from "../../assets/projects/portal-sin/sin2cut.png";
import portalsin3 from "../../assets/projects/portal-sin/sin3cut.png";

import netflix1desktop from "../../assets/projects/netflix/netflix2.jpg";
import netflix1 from "../../assets/projects/netflix/netflix2.jpg";
import netflix2 from "../../assets/projects/netflix/net-lands.png";

import portfolio1desktop from "../../assets/projects/portfolio/port1.png";
import portfolio1 from "../../assets/projects/portfolio/port1.png";
import portfolio2 from "../../assets/projects/portfolio/port2.png";
import portfolio3 from "../../assets/projects/portfolio/port3.png";
import portfolio4 from "../../assets/projects/portfolio/port4.png";

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
        {
          hasCode: true,
          code: "https://github.com/AndrehW27/ZeraMetaBackEnd/"
        },
        {
          hasDemo: true,
          demo: "https://zera-meta.vercel.app/boas-vindas"
        }
      ],
      description: t("project.zera.description"),
      full1: t("project.zera.full1"),
      full2: t("project.zera.full2"),
      full3: t("project.zera.full3"),
      full4: t("project.zera.full4"),
      message: [
        {
          hasMsg: false,
          text: ""
        }
      ],
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
        {
          hasCode: false,
          code: ""
        },
        {
          hasDemo: false,
          demo: ""
        }
      ],
      description: t("project.security.description"),
      full1: t("project.security.full1"),
      full2: t("project.security.full2"),
      full3: t("project.security.full3"),
      full4: t("project.security.full4"),
      message: [
        {
          hasMsg: true,
          text: t("project.important")
        }
      ]
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
        {
          hasCode: false,
          code: "https://github.com/AndrehW27/ZeraMetaBackEnd/"
        },
        {
          hasDemo: false,
          demo: "https://zera-meta.vercel.app/boas-vindas"
        }
      ],
      description: t("project.portal.description"),
      full1: t("project.portal.full1"),
      full2: t("project.portal.full2"),
      full3: t("project.portal.full3"),
      full4: t("project.portal.full4"),
      message: [
        {
          hasMsg: true,
          text: t("project.important")
        }
      ]
    },

    {
      title: t("project.impacta.title"),
      icons: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
          color: "#ea23a4"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
          color: "#d32a2d"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
          color: "#a9bfd1"
        }
      ],
      images: [impacta1, impacta2, impacta3, impacta4, impacta5, impacta6, impacta7, impacta8, impacta9, impacta10],
      desktop: impacta1desktop,
      links: [
        {
          hasCode: true,
          code: "https://github.com/AndrehW27/impactaMais-Front-End"
        },
        {
          hasDemo: false,
          demo: ""
        }
      ],
      description: t("project.impacta.description"),
      full1: t("project.impacta.full1"),
      full2: t("project.impacta.full2"),
      full3: t("project.impacta.full3"),
      full4: t("project.impacta.full4"),
      message: [
        {
          hasMsg: false,
          text: ""
        }
      ],
    },

    {
      title: t("project.poke.title"),
      icons: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
          color: "#ea23a4"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          color: "#007acc"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
          color: "#8e13fd"
        },
      ],
      links: [
        {
          hasCode: true,
          code: "https://github.com/AndrehW27/pokedex"
        },
        {
          hasDemo: true,
          demo: "https://andrehw27.github.io/pokedex/"
        }
      ],
      images: [poke1, poke2, poke3, poke4, poke5, poke6],
      desktop: poke1desktop,
      description: t("project.poke.description"),
      full1: t("project.poke.full1"),
      full2: t("project.poke.full2"),
      full3: t("project.poke.full3"),
      full4: t("project.poke.full4"),
      message: [
        {
          hasMsg: false,
          text: ""
        }
      ],
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
        {
          hasCode: true,
          code: "https://github.com/AndrehW27/portfolio/"
        },
        {
          hasDemo: true,
          demo: "https://portfolio-teal-ten-48.vercel.app/"
        }
      ],
      description: t("project.port.description"),
      full1: t("project.port.full1"),
      full2: t("project.port.full2"),
      full3: t("project.port.full3"),
      full4: t("project.port.full4"),
      message: [
        {
          hasMsg: false,
          text: ""
        }
      ],
    },

    {
      title: t("project.tft.title"),
      icons: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          color: "#61dafb"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          color: "#f0db4f"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
          color: "#31a5d9"
        },
      ],
      links: [
        {
          hasCode: true,
          code: "https://github.com/AndrehW27/Loja-TFT/"
        },
        {
          hasDemo: true,
          demo: "https://tftstore-andrehw27.vercel.app/"
        }
      ],
      images: [tft1],
      desktop: tft1desktop,
      description: t("project.tft.description"),
      full1: t("project.tft.full1"),
      full2: t("project.tft.full2"),
      full3: t("project.tft.full3"),
      full4: t("project.tft.full4"),
      message: [
        {
          hasMsg: false,
          text: ""
        }
      ],
    },

    {
      title: t("project.move.title"),
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
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
          color: "#5fa04e"
        },
      ],
      links: [
        {
          hasCode: true,
          code: "https://github.com/AndrehW27/moveit"
        },
        {
          hasDemo: false,
          demo: ""
        }
      ],
      images: [move1, move2, move3, move4],
      desktop: move1desktop,
      description: t("project.move.description"),
      full1: t("project.move.full1"),
      full2: t("project.move.full2"),
      full3: t("project.move.full3"),
      full4: t("project.move.full4"),
      message: [
        {
          hasMsg: false,
          text: ""
        }
      ],
    },

    {
      title: t("project.hero.title"),
      icons: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          color: "#61dafb"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          color: "#f0db4f"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
          color: "#5fa04e"
        },
      ],
      links: [
        {
          hasCode: true,
          code: "https://github.com/AndrehW27/SemanaOmniStack11.BeTheHero"
        },
        {
          hasDemo: false,
          demo: ""
        }
      ],
      images: [hero1, hero2, hero3],
      desktop: hero1desktop,
      description: t("project.hero.description"),
      full1: t("project.hero.full1"),
      full2: t("project.hero.full2"),
      full3: t("project.hero.full3"),
      full4: t("project.hero.full4"),
      message: [
        {
          hasMsg: false,
          text: ""
        }
      ],
    },

    {
      title: t("project.net.title"),
      icons: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          color: "#61dafb"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          color: "#f0db4f"
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
          color: "#31a5d9"
        },
      ],
      links: [
        {
          hasCode: true,
          code: "https://github.com/AndrehW27/NetflixClone/"
        },
        {
          hasDemo: false,
          demo: ""
        }
      ],
      images: [netflix1, netflix2],
      desktop: netflix1desktop,
      description: t("project.net.description"),
      full1: t("project.net.full1"),
      full2: t("project.net.full2"),
      full3: t("project.net.full3"),
      full4: t("project.net.full4"),
      message: [
        {
          hasMsg: false,
          text: ""
        }
      ],
    },

  ];

  const [index, setIndex] = useState(0);

  // MODAL STATE
  const [showModal, setShowModal] = useState(false);
  const [showModalDetails, setShowModalDetails] = useState(false);
  const [showModalImportant, setShowModalImportant] = useState(false);


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
    <section id="projects" className="relative  border-pink-500 h-[100dvh] w-dvw text-text white:text-text-dark font-bold flex flex-col items-center justify-center">

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
        data-aos="zoom-in"
        data-aos-offset="400"
        data-aos-duration="3000"
        className=" w-full sm:w-[80dvw] h-[100dvh] overflow-hidden sm:mb-10 border-blue-500">
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

              className="card border-orange-500 w-full h-full sm:h-[75dvh] sm:w-[500px] shrink-0 flex flex-col items-center"
            >
              {/* Title + Icons */}


              {/* Main image */}
              <div

                className="border-yellow-500 scale absolute bottom-10 mb-6 h-[80dvh] w-[77dvw] sm:h-[77dvh] sm:w-[460px] sm:text-text rounded-3xl bg-cover bg-top shadow-[0_0_40px_#7C3AED] white:shadow-[0_0_20px_#6594fc] cursor-pointer"
                style={{ backgroundImage: `url(${s.desktop})` }}>

                <div className="absolute border-black bottom-0 left-0 w-full rounded-b-2xl h-[100dvh] bg-[linear-gradient(to_top,#111_27%,transparent_60%)]">



                  {/* <div className="absolute top-42 left-8 text-3xl"><i className="devicon-angular-plain"></i></div>
                  <div className="absolute top-42 left-23 text-3xl"><i className="devicon-mongodb-plain-wordmark"></i></div>
                  <div className="absolute top-42 left-38 text-3xl"><i className="devicon-nodejs-plain-wordmark"></i></div> */}

                  <div className='absolute bottom-48 sm:bottom-60 w-full sm:w-[460px] sm:w-100 flex justify-center items-start'>
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

                  <div className="absolute bottom-18 flex flex-col ml-8">
                    <div className="mb-2 left-6 text-lg sm:text-2xl w-100 text-accent white:text-light-blue border-red-500">{s.title}</div>
                    <div className="left-6 text-xs sm:text-base w-60 sm:w-90 white:text-text border-red-500">{s.description}</div>
                  </div>


                  {/* <div className="absolute bottom-20 left-34 text-xs text-accent w-60  border-red-500">^</div>
                  <div className="absolute bottom-18 left-30 text-xs text-accent w-60  border-red-500">details</div> */}


                  <div className="absolute bottom-6 flex">
                    {s.links[0].hasCode &&
                      <a href={s.links[0].code} target="_blank" rel="noopener noreferrer">
                        <div className="ml-6 text-xs sm:text-base bg-white/99 text-black/80 px-4 py-2 rounded-2xl">{t("project.code")}</div>
                      </a>
                    }

                    {s.links[1].hasDemo &&
                      <a href={s.links[1].demo} target="_blank" rel="noopener noreferrer">
                        <div className="pointer ml-4 sm:left-32 text-xs sm:text-base bg-accent white:bg-light-blue text-white/80 px-4 py-2 rounded-2xl">{t("project.demo")}</div>
                      </a>
                    }
                  </div>

                  {s.message[0].hasMsg &&
                    <div className="absolute bottom-6 w-full flex justify-start font-bold">
                      <h1
                        onClick={() => {
                          setShowModalImportant(true);
                        }}
                        className="pointer hover:text-text hover:bg-red-700/50 text-xs px-4 py-2 ml-6 rounded-2xl border border-red-700 text-red-700 transition duration-400 ease-in-out">{s.message[0].text}
                      </h1>
                    </div>
                  }
                  {/* <div className="absolute bottom-8 left-55 text-xs text-accent white:text-light-blue w-60  border-red-500">details</div> */}

                  <h1 className="text-accent absolute bottom-6 right-6 pointer"
                    onClick={() => {
                      setShowModalDetails(true);
                    }}
                  >{t("project.details")}
                  </h1>

                  <button
                    onClick={() => {
                      setModalImages(s.images);
                      setModalIndex(0);
                      setShowModal(true);
                    }
                    }
                    className="absolute top-50 sm:top-65 right-4 sm:right-8 bg-white/30 w-12 h-12 sm:w-15 sm:h-15 border border-accent white:border-light-blue text-accent white:text-light-blue rounded-full flex justify-center items-center"

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

              {/* MODAL DETAILS */}
              {showModalDetails && (
                <div className="absolute border-red-500 inset-0 flex items-center justify-center z-9999">

                  <div
                    className="border-green-500 absolute h-[100dvh] w-[100dvw] inset-0 bg-black/10 backdrop-blur-md animate-fadeIn"
                    onClick={() => setShowModalDetails(false)}
                  />

                  <div className="border-blue-500 relative rounded-3xl text-sm min-h-[80dvh] w-[77dvw] sm:h-[77dvh] sm:w-[460px] bg-background white:bg-text flex flex-col items-center justify-start px-6 py-10 animate-zoomIn ">
                    <button
                      onClick={() => setShowModalDetails(false)}
                      className="absolute top-[-15px] right-[-15px] bg-white/30 w-8 h-8 sm:w-15 sm:h-15 rounded-full flex justify-center items-center border border-text white:border-text-dark z-100 cursor-pointer"
                    >
                      X
                    </button>
                    <div className='border-pink-500 flex justify-center items-start'>
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

                    <div className="flex flex-col mt-6">
                      <div className="text-lg sm:text-2xl text-accent white:text-light-blue border-red-500 mb-2">{s.title}</div>
                      <div className="text-xs sm:text-base  white:text-text border-red-500">{s.full1}</div>
                      <br />
                      <div className="text-xs sm:text-base  white:text-text border-red-500">{s.full2}</div>
                      <br />
                      <div className="text-xs sm:text-base  white:text-text border-red-500">{s.full3}</div>
                      <br />
                      <div className="text-xs sm:text-base  white:text-text border-red-500">{s.full4}</div>
                    </div>
                  </div>



                </div>

              )}


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




          <div className="relative rounded-3xl max-w-[900px] bg-transparent flex flex-col items-center animate-zoomIn shadow-[0_0_40px_#7C3AED] white:shadow-[0_0_10px_#6594fc] ">


            <div className="relative">
              {/* Modal image */}
              <img loading="lazy"
                src={modalImages[modalIndex]}
                alt="modal"
                className="h-fit max-h-[90dvh] w-[77dvw] sm:w-[425px] object-contain rounded-2xl "
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


      {/* MODAL IMPORTANT */}
      {showModalImportant && (
        <div className="absolute border-red-500 inset-0 flex items-center justify-center z-9999">

          <div
            className="absolute inset-0 bg-black/10 backdrop-blur-md animate-fadeIn"
            onClick={() => setShowModalImportant(false)}
          />

          <div className="relative rounded-3xl text-sm text-center w-fit h-fit max-w-[250px] bg-background white:bg-text flex items-center justify-center p-6 animate-zoomIn shadow-[0_0_40px_#7C3AED] white:shadow-[0_0_10px_#6594fc] ">
            <button
              onClick={() => setShowModalImportant(false)}
              className="absolute top-[-15px] right-[-15px] bg-white/30 w-8 h-8 sm:w-15 sm:h-15 rounded-full flex justify-center items-center border border-text white:border-text-dark z-100 cursor-pointer"
            >
              X
            </button>
            <h1>{t("project.important.description")}</h1>
          </div>



        </div>

      )}



    </section>
  );
}
