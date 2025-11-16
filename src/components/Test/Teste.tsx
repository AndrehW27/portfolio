import "./Teste.css";
import bg from "../../assets/me_art_modern-nobg.png";
// import bg2 from "../../assets/me_art_modern-nobg.png";
import video from "../../assets/waves-video2.mp4";
import { ChevronDown, Wallpaper, DatabaseBackup, Gauge } from "lucide-react";

export default function Teste() {

  return (
    <>
      <section id="test" className="relative h-[100dvh]  w-dvw  flex flex-col items-center justify-center">
        {/* 
        <div className="h-[100dvh] w-[100dvw] flex flex-col items-center justify-center  border-red-500 bg-gradient-to-tr bg-blur from-accent from-[5%] via-surface via-[50%] to-background to-[90%]">
          <div className="relative bg-white/10 rounded-3xl h-[55dvh] w-[80dvw]">
            <h1 className="absolute left-10 top-10 text-text font-bold">Hello there, welcome!</h1>
            <h1 className="absolute left-10 top-20 text-2xl text-accent font-bold">I'm André Willian</h1>
            <h1 className="absolute left-10 top-30 text-text font-bold">Fullstack Developer</h1>
            <img className="absolute left-0 bottom-0 card w-40" src={bg} />
          </div>
        </div> */}

        {/* -------------------------------------------------------------------- */}

        {/* <div className="video-wrapper relative h-[100dvh] w-[100dvw] flex flex-col items-center justify-center border-2 red-500 overflow-hidden">
          <video
            key={video}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="relative bg-gradient-to-tr from-accent from-[5%] via-surface via-[50%] to-background to-[90%] rounded-3xl to-accent to-[90%] h-[55dvh] w-[85dvw]   shadow-[0_0_20px_#7C3AED]">
            <h1 className="absolute left-10 top-8 text-text font-bold">Hello there, welcome!</h1>
            <h1 className="absolute left-10 top-16 text-2xl text-accent font-bold">I'm André Willian</h1>
            <h1 className="absolute left-10 top-24 text-text font-bold">Fullstack Developer</h1>

            <div className="absolute left-0 bottom-0 flex items-end justify-center ">
              <img className="w-40" src={bg} />

              <div className='text-text text-xs w-33 mb-8 font-bold'>
                <div className='flex mb-5'>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <Wallpaper />
                  </div>
                  <h1 className='white:text-dark-gray'>Modern and highly performant applications.</h1>
                </div>
                <div className='flex mb-5'>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <Gauge />
                  </div>
                  <h1 className='white:text-dark-gray'>High avaliablity and low-latency API.</h1>
                </div>
                <div className='flex '>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <DatabaseBackup />
                  </div>
                  <h1 className='white:text-dark-gray'>Secure development and deployment proceses.</h1>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>

        </div> */}

        {/* -------------------------------------------------------------------- */}

        {/* <div className="bg-gradient-to-tr from-accent from-[5%] via-surface via-[50%] to-background to-[90%]  relative h-[100dvh] w-[100dvw] flex flex-col items-center justify-center border-2 red-500 overflow-hidden">

          <div className="relative video-wrapper rounded-3xl h-[55dvh] w-[85dvw]   shadow-[0_0_20px_#7C3AED]">

            <video
              key={video}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
              src={video}
              autoPlay
              muted
              loop
              playsInline
            />
            <h1 className="absolute left-10 top-8 text-text font-bold">Hello there, welcome!</h1>
            <h1 className="absolute left-10 top-16 text-2xl text-accent font-bold">I'm André Willian</h1>
            <h1 className="absolute left-10 top-24 text-text font-bold">Fullstack Developer</h1>

            <div className="absolute left-0 bottom-0 flex items-end justify-center ">
              <img className="w-40" src={bg} />

              <div className='text-text text-xs w-33 mb-8 font-bold'>
                <div className='flex mb-5'>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <Wallpaper />
                  </div>
                  <h1 className='white:text-dark-gray'>Modern and highly performant applications.</h1>
                </div>
                <div className='flex mb-5'>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <Gauge />
                  </div>
                  <h1 className='white:text-dark-gray'>High avaliablity and low-latency API.</h1>
                </div>
                <div className='flex '>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <DatabaseBackup />
                  </div>
                  <h1 className='white:text-dark-gray'>Secure development and deployment proceses.</h1>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>

        </div> */}

        {/* -------------------------------------------------------------------- */}

        {/* <div className="bg-gradient-to-tr from-accent from-[5%] via-surface via-[50%] to-background to-[90%]  relative h-[100dvh] w-[100dvw] flex flex-col items-center justify-center border-2 red-500 overflow-hidden">
          <video
            key={video}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="relative video-wrapper rounded-3xl h-[55dvh] w-[85dvw]   shadow-[0_0_20px_#7C3AED]">

            <video
              key={video}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
              src={video}
              autoPlay
              muted
              loop
              playsInline
            />
            <h1 className="absolute left-10 top-8 text-text font-bold">Hello there, welcome!</h1>
            <h1 className="absolute left-10 top-16 text-2xl text-accent font-bold">I'm André Willian</h1>
            <h1 className="absolute left-10 top-24 text-text font-bold">Fullstack Developer</h1>

            <div className="absolute left-0 bottom-0 flex items-end justify-center ">
              <img className="w-40" src={bg} />

              <div className='text-text text-xs w-33 mb-8 font-bold'>
                <div className='flex mb-5'>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <Wallpaper />
                  </div>
                  <h1 className='white:text-dark-gray'>Modern and highly performant applications.</h1>
                </div>
                <div className='flex mb-5'>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <Gauge />
                  </div>
                  <h1 className='white:text-dark-gray'>High avaliablity and low-latency API.</h1>
                </div>
                <div className='flex '>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <DatabaseBackup />
                  </div>
                  <h1 className='white:text-dark-gray'>Secure development and deployment proceses.</h1>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>

          <a className="up-and-down absolute bottom-10 text-text" href="#about">
            <ChevronDown />
          </a>

        </div> */}

        {/* -------------------------------------------------------------------- */}

        <div className="relative video-wrapper h-[100dvh] w-[100dvw]   shadow-[0_0_20px_#7C3AED]">

          <video
            key={video}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          />
          <h1 className="absolute left-10 top-18 text-xl text-text font-bold">Hello there, welcome!</h1>
          <h1 className="absolute left-10 top-30 text-3xl text-accent font-bold">I'm André Willian</h1>
          <h1 className="absolute left-10 top-40 text-xl text-text font-bold typing">Fullstack Developer</h1>

          <div className="absolute left-0 bottom-0 flex items-end justify-center ">
            <img className="w-50" src={bg} />

            <div className='absolute text-text text-xs w-70 left-10 bottom-90 font-bold'>
              <div className='flex mb-3'>
                <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                  <Wallpaper />
                </div>
                <h1 className='white:text-dark-gray'>Modern and highly performant applications.</h1>
              </div>
              <div className='flex mb-3'>
                <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                  <Gauge />
                </div>
                <h1 className='white:text-dark-gray'>High avaliablity and low-latency API.</h1>
              </div>
              <div className='flex '>
                <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                  <DatabaseBackup />
                </div>
                <h1 className='white:text-dark-gray'>Secure development and deployment proceses.</h1>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------- */}

        {/* <div className="bg-gradient-to-tr from-accent from-[5%] via-surface via-[50%] to-background to-[90%]  relative h-[100dvh] w-[100dvw] flex flex-col items-center justify-center border-2 red-500 overflow-hidden">
          <video
            key={video}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          />

          <img className="absolute bottom-0 left-0 z-9999 w-40" src={bg} />


          <div className="relative video-wrapper rounded-3xl h-[50dvh] w-[85dvw]   shadow-[0_0_20px_#7C3AED]">

            <video
              key={video}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl "
              src={video}
              autoPlay
              muted
              loop
              playsInline
            />
            <h1 className="absolute left-10 top-8 text-text font-bold">Hello there, welcome!</h1>
            <h1 className="absolute left-10 top-16 text-2xl text-accent font-bold">I'm André Willian</h1>
            <h1 className="absolute left-10 top-24 text-text font-bold">Fullstack Developer</h1>



            <div className="absolute left-0 bottom-0 flex items-end justify-center ">

              <div className='text-text text-xs w-60 mb-18 ml-10 font-bold'>
                <div className='flex mb-2'>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <Wallpaper />
                  </div>
                  <h1 className='white:text-dark-gray'>Modern and highly performant applications.</h1>
                </div>
                <div className='flex mb-2'>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <Gauge />
                  </div>
                  <h1 className='white:text-dark-gray'>High avaliablity and low-latency API.</h1>
                </div>
                <div className='flex '>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <DatabaseBackup />
                  </div>
                  <h1 className='white:text-dark-gray'>Secure development and deployment proceses.</h1>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>





        </div> */}

        {/* -------------------------------------------------------------------- */}

        {/* <div className="bg-gradient-to-tr from-accent from-[5%] via-surface via-[50%] to-background to-[90%]  relative h-[100dvh] w-[100dvw] flex flex-col items-center justify-center border-2 red-500 overflow-hidden">
          <video
            key={video}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          />

          <img className="absolute bottom-0 left-0 z-9999 w-40" src={bg} />


          <div className="relative bg-black/50 rounded-3xl h-[50dvh] w-[85dvw]   shadow-[0_0_20px_#7C3AED]">


            <h1 className="absolute left-10 top-8 text-text font-bold">Hello there, welcome!</h1>
            <h1 className="absolute left-10 top-16 text-2xl text-accent font-bold">I'm André Willian</h1>
            <h1 className="absolute left-10 top-24 text-text font-bold">Fullstack Developer</h1>



            <div className="absolute left-0 bottom-0 flex items-end justify-center ">

              <div className='text-text text-xs w-60 mb-18 ml-10 font-bold'>
                <div className='flex mb-2'>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <Wallpaper />
                  </div>
                  <h1 className='white:text-dark-gray'>Modern and highly performant applications.</h1>
                </div>
                <div className='flex mb-2'>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <Gauge />
                  </div>
                  <h1 className='white:text-dark-gray'>High avaliablity and low-latency API.</h1>
                </div>
                <div className='flex '>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <DatabaseBackup />
                  </div>
                  <h1 className='white:text-dark-gray'>Secure development and deployment proceses.</h1>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>





        </div> */}

        {/* -------------------------------------------------------------------- */}

        {/* <div className="bg-gradient-to-tr from-accent from-[5%] via-surface via-[50%] to-background to-[90%]  relative h-[100dvh] w-[100dvw] flex flex-col items-center justify-center border-2 red-500 overflow-hidden">
          <video
            key={video}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          />

          <img className="absolute bottom-0 left-0 z-9999 w-40" src={bg} />


          <div className="relative bg-gradient-to-tr bg-blur from-accent from-[5%] via-surface via-[50%] to-background to-[90%] rounded-3xl h-[50dvh] w-[85dvw]   shadow-[0_0_20px_#7C3AED]">


            <h1 className="absolute left-10 top-8 text-text font-bold">Hello there, welcome!</h1>
            <h1 className="absolute left-10 top-16 text-2xl text-accent font-bold">I'm André Willian</h1>
            <h1 className="absolute left-10 top-24 text-text font-bold">Fullstack Developer</h1>



            <div className="absolute left-0 bottom-0 flex items-end justify-center ">

              <div className='text-text text-xs w-60 mb-18 ml-10 font-bold'>
                <div className='flex mb-2'>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <Wallpaper />
                  </div>
                  <h1 className='white:text-dark-gray'>Modern and highly performant applications.</h1>
                </div>
                <div className='flex mb-2'>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <Gauge />
                  </div>
                  <h1 className='white:text-dark-gray'>High avaliablity and low-latency API.</h1>
                </div>
                <div className='flex '>
                  <div className='text-accent white:text-light-blue w-10 h-10 mr-2'>
                    <DatabaseBackup />
                  </div>
                  <h1 className='white:text-dark-gray'>Secure development and deployment proceses.</h1>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>





        </div> */}

        {/* -------------------------------------------------------------------- */}



        {/* ABOUT BUTTON */}
        {/* <a href="#about">
            <button className="absolute left-32 bottom-30 shadow-[0_0_20px_#7C3AED] white:shadow-[0_0_20px_#6594fc] bg-accent white:bg-text-dark text-text white:text-text white:from-light-blue to-dark-gray font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out">
              About Me
            </button>
          </a> */}

        {/* DOWN CHEVRON */}
        <a className="up-and-down absolute bottom-6 text-text" href="#about">
          <ChevronDown />
        </a>



        {/* <div className="h-[100dvh] w-[100dvw] flex flex-col items-center justify-center border-2 border-red-500">
          <div className="relative bg-white/10  rounded-3xl to-accent to-[90%] h-[55dvh] w-[80dvw]">

            <h1 className="absolute left-10 top-10 text-text font-bold">Hello there, welcome!</h1>
            <h1 className="absolute left-10 top-20 text-2xl text-accent font-bold">I'm André Willian</h1>
            <h1 className="absolute left-10 top-30 text-text font-bold">Fullstack Developer</h1>

            <img className="absolute left-0 bottom-0 card w-40" src={bg} />

          </div>
        </div> */}


        {/* <div className="absolute top-15 left-85 bg-cover h-[85dvh] w-[78dvw] bg-text/20 rounded-3xl shadow-[0_0_10px_#7C3AED] BORDER border-surface">
          <div className="absolute bottom-0 left-0 w-full rounded-b-2xl h-[100dvh] bg-[linear-gradient(to_top,#111_22%,transparent_70%)]">
          </div>
        </div>
        <div className="absolute top-15 right-85 bg-cover h-[85dvh] w-[78dvw] bg-text/20 rounded-3xl shadow-[0_0_10px_#7C3AED]  border-surface">
          <div className="absolute bottom-0 left-0 w-full rounded-b-2xl h-[100dvh] bg-[linear-gradient(to_top,#111_22%,transparent_70%)]">
          </div>
        </div>

        <div className="absolute top-15 bg-cover h-[85dvh] w-[78dvw] bg-center bg-no-repeat rounded-3xl shadow-[0_0_10px_#7C3AED]  border-surface" style={{ backgroundImage: `url(${bg})` }}>
          <div className="absolute bottom-0 left-0 w-full rounded-b-2xl h-[100dvh] bg-[linear-gradient(to_top,#111_22%,transparent_70%)]">

            <div className='absolute bottom-35 left-15 w-40 sm:w-100 border-orange-500 flex justify-center items-start'>
              <div className='flex align-center justify-center gap-2 sm:gap-4 z-100'>
                <img className='icons shadow-[0_0_10px_#f0db4f] white:shadow-[0_0_10px_#f0db4f] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <img className='icons shadow-[0_0_10px_#f16529] white:shadow-[0_0_10px_#f16529] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <img className='icons shadow-[0_0_10px_#31a5d9] white:shadow-[0_0_10px_#31a5d9] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
              </div>
            </div>

            <h1 className="absolute bottom-20 left-6 text-text text-xs w-55">Comprehensive Fullstack app with database, secure authentication, and ChatGPT-powered AI integration.</h1>

            <div className="absolute bottom-6 left-6 text-sm font-bold bg-white/70 text-black/80 px-5 py-2 rounded-2xl">Code</div>
            <div className="absolute bottom-6 left-28 text-sm font-bold bg-accent/70 text-white/80 px-5 py-2 rounded-2xl">Demo</div>

          </div>
        </div> */}

        {/* Controls */}

        {/* <button

          className="absolute top-1/2 translate-y-[-100%] left-2 text-text bg-white/30 w-10 h-10 border border-text rounded-full flex justify-center items-center"
        >
          ‹
        </button>
        <button

          className="absolute top-1/2 translate-y-[-100%] right-2 text-text bg-white/30 w-10 h-10 border border-text rounded-full flex justify-center items-center"
        >
          ›
        </button> */}

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
