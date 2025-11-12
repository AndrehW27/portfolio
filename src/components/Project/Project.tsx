import React, { useEffect, useRef, useState } from "react";
import { GiClick } from "react-icons/gi";
import { useTranslation } from "react-i18next";


import zerameta1desktop from "../../assets/projects/zera-desktop1.png";
import zerameta1 from "../../assets/projects/zerameta1.png";
import zerameta2 from "../../assets/projects/zerameta2.png";
import zerameta3 from "../../assets/projects/zerameta3.png";
import zerameta4 from "../../assets/projects/zerameta4.png";
import zerameta5 from "../../assets/projects/zerameta5.png";
import zerameta6 from "../../assets/projects/zerameta6.png";
import zerameta7 from "../../assets/projects/zerameta7.png";
import zerameta8 from "../../assets/projects/zerameta8.png";


import netflix1desktop from "../../assets/projects/netflix1.jpg";
import netflix1 from "../../assets/projects/netflix2.jpg";
import netflix2 from "../../assets/projects/net-lands.png";


import portfolio1desktop from "../../assets/projects/port-desktop.png";
import portfolio1 from "../../assets/projects/port1.png";
import portfolio2 from "../../assets/projects/port2.png";
import portfolio3 from "../../assets/projects/port3.png";
import portfolio4 from "../../assets/projects/port4.png";




export default function Projects() {
  const { t } = useTranslation();

  const slidesData = [
    {
      title: "ZeraMeta",
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
      title: "Portfolio",
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
      title: "NetflixClone",
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

  // Modal state
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
    <section
      id="projects"
      className="relative bg-background white:bg-white-bg h-dvh w-dvw flex items-center justify-center text-text white:text-text-dark font-bold"
    >
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
              className="w-full flex-shrink-0 h-full flex flex-col items-center"
            >
              {/* Title + Icons */}
              <div className="h-[35dvw] w-full flex flex-col items-center justify-center mt-10 text-accent white:text-light-blue">
                <h1 data-aos="zoom-in-up" data-aos-offset="200" className="text-2xl sm:text-5xl">{s.title}</h1>
                <div className="flex gap-4 mt-5">
                  {s.icons.map((src, i) => (
                    <img
                      data-aos="zoom-in" data-aos-offset="200"
                      key={i}
                      className="h-12 w-12 p-2 rounded-md shadow-[0_0_10px_var(--shadow-color)]"
                      src={src.icon}
                      style={{ '--shadow-color': src.color } as React.CSSProperties}
                      alt=""
                    />
                  ))}
                </div>
              </div>

              {/* Main image */}
              <div
                data-aos="flip-up" data-aos-offset="350"
                className="h-fit min-h-[50dvw] w-[90dvw] bg-cover bg-top shadow-[0_0_10px_#7C3AED] white:shadow-[0_0_20px_#6594fc] cursor-pointer"
                style={{ backgroundImage: `url(${s.desktop})` }}
                onClick={() => {
                  setModalImages(s.images);
                  setModalIndex(0);
                  setShowModal(true);
                }}
              />

              {/* Bottom section */}
              <div data-aos="zoom-in-up" data-aos-offset="200" className="w-full flex flex-col items-center mt-4 text-center">
                {/* Indicators */}
                <div className="flex gap-2 z-20">
                  {slidesData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`w-3 h-3 rounded-full ${i === index ? "bg-accent white:bg-light-blue" : "bg-white/40 white:bg-white/90"
                        }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => {
                    setModalImages(s.images);
                    setModalIndex(0);
                    setShowModal(true);
                  }}
                  className="m-3 text-accent white:text-light-blue rounded-full"
                >
                  {t("project.show")}
                </button>

                <h1 className="w-80">{s.description}</h1>

                <div className="mt-6">
                  <a href={s.links[0]} target="_blank">
                    <button className="border-accent px-6 py-3 mr-3 rounded-full shadow-[0_0_10px_#7C3AED] white:shadow-[0_0_10px_#6594fc]">
                      {t("project.code")}
                    </button>
                  </a>
                  <a href={s.links[1]} target="_blank">
                    <button className="bg-accent white:bg-light-blue px-6 py-3 ml-3 rounded-full">
                      {t("project.demo")}
                    </button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Controls */}
        <button
          data-aos="fade-left" data-aos-offset="200"
          onClick={prev}
          className="absolute top-1/2 translate-y-[-460%] text-accent white:text-light-blue right-2 bg-text/30 w-10 h-10 border border-accent white:border-light-blue rounded-full flex justify-center items-center"
        >
          <GiClick />
        </button>
        <button
          data-aos="fade-right" data-aos-offset="200"
          onClick={prev}
          className="absolute top-1/2 translate-y-[-260%] left-2 bg-white/30 w-10 h-10 border border-text rounded-full flex justify-center items-center"
        >
          ‹
        </button>
        <button
          data-aos="fade-left" data-aos-offset="200"
          onClick={next}
          className="absolute top-1/2 translate-y-[-260%] right-2 bg-white/30 w-10 h-10 border border-text rounded-full flex justify-center items-center"
        >
          ›
        </button>
      </div>

      {/* Modal */}
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
