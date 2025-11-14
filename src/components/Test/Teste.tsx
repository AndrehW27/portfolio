import "./Teste.css";
import bg from "../../assets/projects/zerameta1.png";
// import video from "../../assets/waves-video2.mp4";

export default function Teste() {

  return (
    <>
      <section id="test" className="relative h-[100dvh] w-dvw bg-background flex items-center justify-center">

        <div className="absolute top-15 bg-cover h-[85dvh] w-[90dvw] bg-center bg-no-repeat rounded-3xl shadow-[0_0_10px_#7C3AED]  border-surface" style={{ backgroundImage: `url(${bg})` }}></div>
        <div className="absolute bottom-0 left-0 w-full h-[100dvh] bg-[linear-gradient(to_top,#111_30%,transparent_70%)]">

          <div className='absolute bottom-20 left-20 w-40 sm:w-100 h-40 border-orange-500 flex justify-end items-start'>
            <div className='flex align-center justify-center gap-2 sm:gap-4 z-100'>
              <img className='icons shadow-[0_0_10px_#f0db4f] white:shadow-[0_0_10px_#f0db4f] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              <img className='icons shadow-[0_0_10px_#f16529] white:shadow-[0_0_10px_#f16529] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              <img className='icons shadow-[0_0_10px_#31a5d9] white:shadow-[0_0_10px_#31a5d9] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            </div>
          </div>

          <h1 className="absolute bottom-25 left-10 text-text w-70">Comprehensive Fullstack app with database, secure authentication, and ChatGPT-powered AI integration.</h1>

          <div className="absolute bottom-10 left-10 text-sm font-bold bg-white/70 text-black/80 px-5 py-2 rounded-2xl">Code</div>
          <div className="absolute bottom-10 left-33 text-sm font-bold bg-accent/70 text-white/80 px-5 py-2 rounded-2xl">Demo</div>

        </div>
        {/* Controls */}

        <button

          className="absolute top-1/2 translate-y-[-100%] left-2 bg-white/30 w-10 h-10 border border-text rounded-full flex justify-center items-center"
        >
          ‹
        </button>
        <button

          className="absolute top-1/2 translate-y-[-100%] right-2 bg-white/30 w-10 h-10 border border-text rounded-full flex justify-center items-center"
        >
          ›
        </button>

        {/* <div className="absolute top-15 bg-cover h-[85dvh] w-[90dvw] rounded-3xl  bg-black/75 text-white/99 ">
          <div className="absolute top-8 left-6 text-3xl font-bold">ZeraMeta </div>
          <div className="absolute top-20 left-6 text-sm w-65">Comprehensive Fullstack app with database, secure authentication, and ChatGPT-powered AI integration.</div>
          <div className="absolute top-140 left-6 text-sm bg-white/99 text-black/80 px-5 py-2 rounded-2xl">Code</div>
          <div className="absolute top-140 left-33 text-sm bg-white/99 text-black/80 px-5 py-2 rounded-2xl">Demo</div>

          <div className="absolute top-40 left-8 text-3xl"><i className="devicon-angular-plain"></i></div>
          <div className="absolute top-40 left-23 text-3xl"><i className="devicon-mongodb-plain-wordmark"></i></div>
          <div className="absolute top-40 left-38 text-3xl"><i className="devicon-nodejs-plain-wordmark"></i></div>

          <div className="absolute top-140 right-6 text-3xl"><i className="devicon-nodejs-plain"></i></div>

          <div className="absolute top-70 right-2 text-3xl text-white/99">›</div>
          <div className="absolute top-70 left-2 text-3xl text-white/99">‹</div>

        </div> */}


      </section>
      {/* <section className="video-wrapper relative bg-fixed w-dvw h-[50dvh] overflow-hidden">
        <video
          key={video}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
      </section> */}
    </>
  );
}
