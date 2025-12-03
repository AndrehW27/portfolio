import './Journey.css'

// import { Database, ServerCog, ShieldCheck, SquareDashedBottomCode, Waypoints, ChevronDown } from "lucide-react";

// import { ChevronDown } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { School } from "lucide-react";
import { University } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Factory } from "lucide-react";
import { Landmark } from "lucide-react";
import { Rocket } from "lucide-react";
// import { DatabaseBackup } from "lucide-react";
// import { Wallpaper } from "lucide-react";
// import { Gauge } from "lucide-react";
// import { ChevronDown } from "lucide-react";


import logic from '../../assets/icons/logic.png';
import settings from '../../assets/icons/settings.png';
import english from '../../assets/icons/eng.png';
// import perfil from '../../assets/me_art_modern-nobg.png';
import { useTranslation } from "react-i18next";

function Journey() {

    const { t } = useTranslation();


    return (
        <>
            <section id="journey" className="relative font-bold text-xs sm:text-xl text-text white:text-text-dark border-accent white:border-light-blue w-dvw flex flex-col items-center justify-start">

            <div className="rounded-xl absolute inset-0 bg-[url('./assets/bg/midjourney_nobg.png')] bg-center bg-cover sm:bg-contain bg-no-repeat h-full w-dvw -z-100 opacity-10 white:opacity-30 border-red-500"></div>

                {/* <h1 data-aos="fade-down" className=' white:text-dark-gray mt-16 sm:mt-25 text-2xl sm:text-2xl font-bold'>{t("about.aboutme")}</h1> */}

                <div className='relative white:text-dark-gray border-yellow-300  w-[70vw] flex items-center justify-center mt-15 sm:mt-30 mb-30'>

                    <div className='w-35  sm:w-100 border-red-500 flex flex-col justify-start items-center'>
                        <div className='w-40 sm:w-100 h-40 sm:h-60 flex justify-end items-start '>
                            <div>
                                <img loading="lazy" data-aos="fade-right" className='icons hover:bg-[#3594d2] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#3594d2] white:shadow-[0_0_10px_#3594d2]' src={logic} />
                            </div>
                        </div>
                        <div className='w-40 pl-6 sm:w-100 h-40 sm:h-60 border-orange-500  flex justify-center items-start'>
                            <div data-aos="fade-right">
                                <h1 className='text-accent sm:text-3xl white:text-light-blue font-bold'>{t("about.wsu")}</h1>
                                <p>{t("about.wsu.text")}</p>
                            </div>
                        </div>

                        <div className='w-40 sm:w-100 h-40 sm:h-60 border-orange-500 flex justify-end items-start'>
                            <div data-aos="fade-right" className='flex align-center justify-center gap-2 sm:gap-4'>
                                <img loading="lazy" className='icons p-1 hover:bg-[#f0db4f] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#f0db4f] white:shadow-[0_0_10px_#f0db4f] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                                <img loading="lazy" className='icons hover:bg-[#f16529] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#f16529] white:shadow-[0_0_10px_#f16529] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                                <img loading="lazy" className='icons hover:bg-[#31a5d9] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#31a5d9] white:shadow-[0_0_10px_#31a5d9] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                            </div>
                        </div>
                        <div className='w-40 pl-6 sm:w-100 h-40 sm:h-60  border-orange-500 flex justify-center items-start'>
                            <div data-aos="fade-right">
                                <h1 className='text-accent sm:text-3xl white:text-light-blue font-bold'>{t("about.gen")}</h1>
                                <p>{t("about.gen.text")}</p>
                            </div>
                        </div>

                        <div className='w-40 sm:w-100 h-40 sm:h-60 border-orange-500 flex justify-end items-start'>
                            <div data-aos="fade-right">
                                <div className='flex align-center justify-center gap-2 sm:gap-4'>
                                    <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
                                    <img loading="lazy" className='icons hover:bg-[#ff9900] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#ff9900] white:shadow-[0_0_10px_#ff9900] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                                    <img loading="lazy" className='icons hover:bg-[#5b00d1] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#5b00d1] white:shadow-[0_0_10px_#5b00d1] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" />
                                </div>
                                <div className='flex align-center justify-center gap-2 sm:gap-4 mt-5'>
                                    <img loading="lazy" className='icons hover:bg-[#e0e0e6] bg-background w-9 h-9 sm:w-20 sm:h-20 border border-text-dark  bg-text p-2 rounded-md shadow-[0_0_10px_#e0e0e6] white:shadow-[0_0_10px_#e0e0e6]  transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg" />
                                    <img loading="lazy" className='icons hover:bg-[#007acc] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#007acc] white:shadow-[0_0_10px_#007acc] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                                    <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                                </div>
                            </div>
                        </div>
                        <div className='w-40 pl-6 sm:w-100 h-40 sm:h-60  border-orange-500 flex justify-center items-start'>
                            <div data-aos="fade-right">
                                <h1 className='text-accent sm:text-3xl white:text-light-blue font-bold'>{t("about.puc")}</h1>
                                <p>{t("about.puc.text")}</p>
                            </div>
                        </div>

                    </div>

                    <div className='w-20 sm:w-50 border-red-500 flex flex-col justify-start items-center'>
                        <div className='w-50 h-40 sm:h-60 border-orange-500 flex flex-col justify-start items-center'>
                            <div data-aos="fade-up" className='h-9 w-9 sm:h-20 sm:w-20 border-3 border-accent hover:bg-accent white:hover:bg-light-blue transition duration-300 ease-in-out white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center'>
                                <School className='sm:h-12 sm:w-12' />
                            </div>
                            <div data-aos="fade-up" className='w-1 h-31 sm:h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition'>
                            </div>
                        </div>
                        <div className='w-50 h-40 sm:h-60 border-orange-500 flex flex-col justify-start items-center'>
                            <div data-aos="fade-up" className='h-9 w-9 sm:h-20 sm:w-20 border-3 border-accent hover:bg-accent white:hover:bg-light-blue  transition duration-300 ease-in-out white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center'>
                                <GraduationCap className='sm:h-12 sm:w-12' />
                            </div>
                            <div data-aos="fade-up" className='w-1 h-31 sm:h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition'>
                            </div>
                        </div>
                        <div className='w-50 h-40 sm:h-60 border-orange-500 flex flex-col justify-start items-center'>
                            <div data-aos="fade-up" className='h-9 w-9 sm:h-20 sm:w-20 border-3 border-accent hover:bg-accent white:hover:bg-light-blue  transition duration-300 ease-in-out white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center'>
                                <University className='sm:h-12 sm:w-12' />
                            </div>
                            <div data-aos="fade-up" className='w-1 h-31 sm:h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition'>
                            </div>
                        </div>
                        <div className='w-50 h-40 sm:h-60 border-orange-500 flex flex-col justify-start items-center'>
                            <div data-aos="fade-up" className='h-9 w-9 sm:h-20 sm:w-20 border-3 border-accent hover:bg-accent white:hover:bg-light-blue  transition duration-300 ease-in-out white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center'>
                                <Factory className='sm:h-12 sm:w-12' />
                            </div>
                            <div data-aos="fade-up" className='w-1 h-31 sm:h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition'>
                            </div>
                        </div>
                        <div className='w-50 h-40 sm:h-60 border-orange-500 flex flex-col justify-start items-center'>
                            <div data-aos="fade-up" className='h-9 w-9 sm:h-20 sm:w-20 border-3 border-accent hover:bg-accent white:hover:bg-light-blue  transition duration-300 ease-in-out white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center'>
                                <Landmark className='sm:h-12 sm:w-12' />
                            </div>
                            <div data-aos="fade-up" className='w-1 h-31 sm:h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition'>
                            </div>
                        </div>
                        <div className='w-50 h-40 sm:h-60 border-orange-500 flex flex-col justify-start items-center'>
                            <div data-aos="fade-up-right" className='h-9 w-9 sm:h-20 sm:w-20 border-3 border-accent hover:bg-accent white:hover:bg-light-blue  transition duration-300 ease-in-out white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center 1 transition'>
                                <Rocket className='sm:h-12 sm:w-12' />
                            </div>
                        </div>

                    </div>

                    <div className='w-35 px-6 sm:w-100 border-red-500 flex flex-col justify-start items-center'>
                        <div className='w-40 pr-6 sm:w-100 h-40 sm:h-60  border-orange-500 flex justify-center items-start'>
                            <div data-aos="fade-left">
                                <h1 className='text-accent sm:text-3xl white:text-light-blue font-bold'>{t("about.ufabc")}</h1>
                                <p>{t("about.ufabc.text")}</p>
                            </div>
                        </div>

                        <div className='w-40 sm:w-100 h-40 sm:h-60  border-orange-500 flex justify-start items-start'>
                            <div data-aos="fade-left" className='flex align-center justify-center gap-2 sm:gap-4'>
                                <img loading="lazy" className='icons hover:bg-[#82aee3] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#82aee3] white:shadow-[0_0_10px_#82aee3] transition' src={settings} />
                                <img loading="lazy" className='icons hover:bg-[#2f94f6] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#2f94f6] white:shadow-[0_0_10px_#2f94f6] transition' src={english} />
                            </div>
                        </div>
                        <div className='w-40 pr-6 sm:w-100 h-40 sm:h-60  border-orange-500 flex justify-center items-start'>
                            <div data-aos="fade-left">
                                <h1 className='text-accent sm:text-3xl white:text-light-blue font-bold'>{t("about.gm")}</h1>
                                <p>{t("about.gm.text")}</p>
                            </div>
                        </div>
                        <div className='w-40 sm:w-100 h-40 sm:h-60 border-orange-500 flex justify-start items-start'>
                            <div data-aos="fade-left" >
                                <div className='flex align-center justify-center gap-2 sm:gap-4'>
                                    <img loading="lazy" className='icons hover:bg-[#ea23a4] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#ea23a4] white:shadow-[0_0_10px_#ea23a4] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
                                    <img loading="lazy" className='icons hover:bg-[#d32a2d] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#d32a2d] white:shadow-[0_0_10px_#d32a2d] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
                                    <img loading="lazy" className='icons hover:bg-[#a9bfd1]  w-9 h-9 sm:w-20 sm:h-20 bg-text shadow-[0_0_10px_#a9bfd1] white:shadow-[0_0_10px_#a9bfd1] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                                </div>
                                <div className='flex align-center justify-center gap-2 sm:gap-4 mt-5'>
                                    <img loading="lazy" className='icons hover:bg-[#6762a6] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#6762a6] white:shadow-[0_0_10px_#6762a6] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain-wordmark.svg" />
                                    <img loading="lazy" className='icons hover:bg-[#4f982e] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#4f982e] white:shadow-[0_0_10px_#4f982e] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" />
                                    <img loading="lazy" className='icons hover:bg-[#8e13fd] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#8e13fd] white:shadow-[0_0_10px_#8e13fd]  transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                                </div>
                            </div>
                        </div>

                        <div className='w-40 pr-6 sm:w-100 h-40 sm:h-60  border-orange-500 flex justify-center items-start'>
                            <div data-aos="fade-left">
                                <h1 className='text-accent sm:text-3xl white:text-light-blue font-bold'>{t("about.itau")}</h1>
                                <p>{t("about.itau.text")}</p>
                            </div>
                        </div>

                        <div className='w-40 sm:w-100 h-40 sm:h-60 border-orange-500 flex justify-start items-start'>
                            <div data-aos="fade-left">
                                <div className='flex align-center justify-center gap-2 sm:gap-4'>
                                    <img loading="lazy" className='icons hover:bg-[#61dafb] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#61dafb] white:shadow-[0_0_10px_#61dafb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                                    <img loading="lazy" className='icons hover:bg-[#e0e0e6] w-9 h-9 sm:w-20 sm:h-20 border border-text-dark  bg-text p-2 rounded-md shadow-[0_0_10px_#e0e0e6] white:shadow-[0_0_10px_#e0e0e6]  transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
                                    <img loading="lazy" className='icons hover:bg-[#5fa04e] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#5fa04e] white:shadow-[0_0_10px_#5fa04e] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
                                </div>
                                <div className='flex align-center justify-center gap-2 sm:gap-4 mt-5'>
                                    <img loading="lazy" className='icons hover:bg-[#4faa41] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#4faa41] white:shadow-[0_0_10px_#4faa41] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
                                    <img loading="lazy" className='icons hover:bg-[#29acdb] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#29acdb] white:shadow-[0_0_10px_#29acdb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                                    <img loading="lazy" className='icons hover:bg-[#e0e0e6] w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#e0e0e6] bg-text white:shadow-[0_0_10px_#e0e0e6] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-line-wordmark.svg" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <a href="#abilities" className="up-and-down absolute bottom-6 sm:bottom-16 z-900" >
                    <ChevronDown className=' sm:w-10 sm:h-10'/>
                </a>

            </section>
        </>
    )
}

export default Journey
