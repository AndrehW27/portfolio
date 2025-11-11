// ProjectsCarousel.tsx
import React, { useEffect, useRef, useState } from "react";

import netflix1 from "../../assets/netflix1.jpg";
import netflix2 from "../../assets/netflix2.jpg";
import netflix3 from "../../assets/netflix3.jpg";

import project2_1 from "../../assets/port-desktop.png";
import project2_2 from "../../assets/port-mobile.png";
import project2_3 from "../../assets/netflix3.jpg";

const slidesData = [
  {
    title: "NetflixClone",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    ],
    images: [
      netflix1,
      netflix2,
      netflix3,
    ],
    description:
      "Aplicação criada para simular o site da netflix, essa foi muito importante para aprender conceitos de experiacia do usuário.",
  },
  {
    title: "Another Project",
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain.svg",
    ],
    images: [
      project2_1,
      project2_2,
      project2_3,
    ],
    description:
      "Segundo projeto de exemplo para demonstrar como várias 'slides' ficam navegáveis.",
  },
];

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Touch/swipe state
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  // Prevent body scroll when modal open
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
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, showModal]);

  const prev = () => setIndex((i) => (i - 1 + slidesData.length) % slidesData.length);
  const next = () => setIndex((i) => (i + 1) % slidesData.length);
  const goTo = (i: number) => setIndex(i);

  // Touch handlers for swipe
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
    const threshold = 50; // px
    if (dx > threshold) prev();
    else if (dx < -threshold) next();
    touchStartX.current = null;
    touchCurrentX.current = null;
  }

  return (
    <section
      id="projects"
      className="relative border-blue-500 bg-background white:bg-white-bg h-dvh w-dvw flex items-center justify-center text-text font-bold"
    >
      {/* Carousel wrapper */}
      <div className="borderborder-red-500 relative w-full h-[90dvh] max-w-[1200px] overflow-hidden">
        {/* slides container */}
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex transition-transform duration-500 ease-in-out border-green-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slidesData.map((s, slideIdx) => (
            <article
              key={slideIdx}
              className="w-full flex-shrink-0 flex flex-col items-center justify-center "
            // If you prefer exact viewport-width slides replace w-[90dvw] with w-screen
            >
              {/* TOP: Title + Icons */}
              <div className="border-red-500 h-[45dvw] w-full flex flex-col items-center justify-center text-accent">
                <h1 className="text-3xl sm:text-5xl">{s.title}</h1>
                <div className='flex align-center justify-center gap-1 sm:gap-4 mt-5'>
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#f0db4f] white:shadow-[0_0_10px_#f0db4f] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#f16529] white:shadow-[0_0_10px_#f16529] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                  <img className='h-11 w-11 sm:h-15 sm:w-15 border border-text-dark p-2 rounded-md shadow-[0_0_10px_#31a5d9] white:shadow-[0_0_10px_#31a5d9] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                </div>
              </div>

              {/* CENTER: main image (click to open modal) */}
              <div
                className="border-orange-500 h-[90dvw] w-[90dvw] bg-cover bg-top rounded-4xl shadow-[0_0_10px_#7C3AED] white:shadow-[0_0_10px_#6594fc] cursor-pointer"
                style={{
                  backgroundImage: `url(${s.images[0]})`,
                }}
                onClick={() => {
                  setModalImage(s.images[1]);
                  setShowModal(true);
                }}
              />

              {/* BOTTOM: description + buttons */}
              <div className="border-red-500 h-[45dvw] w-full flex flex-col items-center justify-center text-center p-6 mt-4">
                <button
                  onClick={() => {
                    setModalImage(s.images[0]);
                    setShowModal(true);
                  }}
                  className="mb-4 text-accent"
                >
                  see more
                </button>

                <h1>{s.description}</h1>

                <div className="mt-6">
                  <button className="border-accent px-6 py-3 mr-3 rounded-full shadow-[0_0_10px_#7C3AED] white:shadow-[0_0_10px_#6594fc]">
                    Coding
                  </button>
                  <button className="bg-accent px-6 py-3 ml-3 rounded-full">Demo</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Left / Right controls */}
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="absolute top-1/2 translate-y-[-50%] left-2 bg-white/30 w-10 h-10 border-accent rounded-full flex justify-center items-center shadow-[0_0_10px_#7C3AED] z-20"
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="absolute top-1/2 translate-y-[-50%] right-2 bg-white/30 w-10 h-10 border-accent rounded-full flex justify-center items-center shadow-[0_0_10px_#7C3AED] z-20"
        >
          ›
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slidesData.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-accent" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="absolute inset-0 flex items-center justify-center z-[9999]">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn"
            onClick={() => setShowModal(false)}
          />
          <div className="relative rounded-3xl h-[80vh] w-[90vw] max-w-[900px] bg-background white:bg-white border-accent flex flex-col items-center justify-center p-4 animate-zoomIn overflow-hidden">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-[2%] right-[4%] bg-white/30 w-10 h-10 border-accent rounded-full flex justify-center items-center shadow-[0_0_10px_#7C3AED]"
            >
              X
            </button>

            {modalImage ? (
              <img
                src={modalImage}
                alt="preview"
                className="max-h-[70vh] object-contain rounded-lg"
              />
            ) : (
              <p>No image</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
