import "./Teste.css";
import bg from "../../assets/projects/zerameta1.png";
// import video from "../../assets/waves-video2.mp4";

export default function Teste() {

  return (
    <>
      <section className="relative bg-fixed h-[100dvh] w-dvw bg-cover bg-center bg-no-repeat rounded-3xl z-9999" style={{ backgroundImage: `url(${bg})` }}>
        {/* <div className="absolute bottom-0 left-0 w-full h-[100dvh] bg-[linear-gradient(to_top,#111_30%,transparent_70%)]">

          <div className='absolute bottom-20 left-20 w-40 sm:w-100 h-40 border-orange-500 flex justify-end items-start'>
            <div className='flex align-center justify-center gap-2 sm:gap-4 z-100'>
              <img className='icons shadow-[0_0_10px_#f0db4f] white:shadow-[0_0_10px_#f0db4f] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              <img className='icons shadow-[0_0_10px_#f16529] white:shadow-[0_0_10px_#f16529] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              <img className='icons shadow-[0_0_10px_#31a5d9] white:shadow-[0_0_10px_#31a5d9] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            </div>
          </div>

          <h1 className="absolute bottom-20 left-10 text-text w-70">Comprehensive Fullstack app with database, secure authentication, and ChatGPT-powered AI integration.</h1>

        </div> */}
        <div className="relative w-full h-full bg-black/75 text-white/99 ">
          <div className="absolute top-10 left-10 text-3xl font-bold">ZeraMeta </div>
          <div className="absolute top-22 left-10 text-sm w-70">Comprehensive Fullstack app with database, secure authentication, and ChatGPT-powered AI integration.</div>
          <div className="absolute top-160 left-10 text-sm bg-white/99 text-black/80 px-5 py-2 rounded-2xl">Code</div>
          <div className="absolute top-160 left-33 text-sm bg-white/99 text-black/80 px-5 py-2 rounded-2xl">Demo</div>

          {/* <div className="absolute top-11 left-48 text-3xl"><i className="devicon-angular-plain"></i></div>
          <div className="absolute top-11 left-60 text-3xl"><i className="devicon-mongodb-plain-wordmark"></i></div>
          <div className="absolute top-11 left-72 text-3xl"><i className="devicon-nodejs-plain-wordmark"></i></div> */}
{/* 
          <div className="absolute top-22 left-10 text-3xl"><i className="devicon-angular-plain"></i></div>
          <div className="absolute top-22 left-25 text-3xl"><i className="devicon-mongodb-plain-wordmark"></i></div>
          <div className="absolute top-22 left-40 text-3xl"><i className="devicon-nodejs-plain-wordmark"></i></div> */}

          <div className="absolute top-40 left-10 text-3xl"><i className="devicon-angular-plain"></i></div>
          <div className="absolute top-40 left-25 text-3xl"><i className="devicon-mongodb-plain-wordmark"></i></div>
          <div className="absolute top-40 left-40 text-3xl"><i className="devicon-nodejs-plain-wordmark"></i></div>

          <div className="absolute top-160 left-75 text-3xl"><i className="devicon-nodejs-plain"></i></div>

          <div className="absolute top-80 right-80 text-3xl text-white/30"><i className="devicon-nodejs-plain"></i></div>
          <div className="absolute top-80 left-80 text-3xl text-white/30"><i className="devicon-nodejs-plain"></i></div>




        </div>






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
