import './Journey.css'
// import { ChevronDown, Database, Rocket, ServerCog, ShieldCheck, SquareDashedBottomCode, Waypoints } from "lucide-react";

import { School, ChevronDown } from "lucide-react";
import { University } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Factory } from "lucide-react";
import { Landmark } from "lucide-react";
import { Rocket } from "lucide-react";
// import { DatabaseBackup } from "lucide-react";
// import { Wallpaper } from "lucide-react";
// import { Gauge } from "lucide-react";
// import { ChevronDown } from "lucide-react";


import logic from '../../assets/logic.png';
import settings from '../../assets/settings.png';
import english from '../../assets/eng.png';
// import perfil from '../../assets/me_art_modern-nobg.png';
import { useTranslation } from "react-i18next";

function Journey() {

    const { t } = useTranslation();

    return (
        <>
            <section id="journey" className='bg-background font-bold white:bg-white-bg text-text white:text-text-dark border-accent white:border-light-blue w-dvw flex flex-col items-center justify-start'>

                <h1 data-aos="fade-in" className=' white:text-dark-gray mt-15 text-2xl sm:text-2xl font-bold'>{t("about.journey")}</h1>

                <div className='relative  pb-30 white:text-dark-gray  border-yellow-300 text-xs w-[70vw] flex items-center justify-center mt-10'>

                    <div className='w-35 sm:text-base sm:w-100 border-red-500 flex flex-col justify-start items-center'>
                        <div className='w-40 sm:w-100 h-50 border-blue-500 flex justify-end items-start'>
                            <div>
                                <img data-aos="fade-right" className=' h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#3594d2] white:shadow-[0_0_10px_#3594d2] transition duration-300 ease-in-out' src={logic} />
                            </div>
                        </div>
                        <div className='w-40 pl-6 sm:w-100 h-50 border-orange-500  flex justify-center items-start'>
                            <div data-aos="fade-right">
                                <h1 className='text-accent white:text-light-blue font-bold'>{t("about.wsu")}</h1>
                                <p>{t("about.wsu.text")}</p>
                            </div>
                        </div>

                        <div className='w-40 sm:w-100 h-50 border-orange-500 flex justify-end items-start'>
                            <div data-aos="fade-right" className='flex align-center justify-center gap-2 sm:gap-4'>
                                <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#f0db4f] white:shadow-[0_0_10px_#f0db4f] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                                <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#f16529] white:shadow-[0_0_10px_#f16529] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                                <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#31a5d9] white:shadow-[0_0_10px_#31a5d9] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                            </div>
                        </div>
                        <div className='w-40 pl-6 sm:w-100 h-50  border-orange-500 flex justify-center items-start'>
                            <div data-aos="fade-right">
                                <h1 className='text-accent white:text-light-blue font-bold'>{t("about.gen")}</h1>
                                <p>{t("about.gen.text")}</p>
                            </div>
                        </div>

                        <div className='w-40 sm:w-100 h-50 border-orange-500 flex justify-end items-start'>
                            <div data-aos="fade-right">
                                <div className='flex align-center justify-center gap-2 sm:gap-4'>
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#ff9900] white:shadow-[0_0_10px_#ff9900] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#5b00d1] white:shadow-[0_0_10px_#5b00d1] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" />
                                </div>
                                <div className='flex align-center justify-center gap-2 sm:gap-4 mt-5'>
                                    <img className='border border-text-dark white: h-9 w-9 sm:h-15 sm:w-15 bg-text p-2 rounded-md shadow-[0_0_10px_#e0e0e6] white:shadow-[0_0_10px_#e0e0e6]  transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg" />
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#007acc] white:shadow-[0_0_10px_#007acc] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#f24e1e] white:shadow-[0_0_10px_#f24e1e] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                                </div>
                            </div>
                        </div>
                        <div className='w-40 pl-6 sm:w-100 h-50  border-orange-500 flex justify-center items-start'>
                            <div data-aos="fade-right">
                                <h1 className='text-accent white:text-light-blue font-bold'>{t("about.puc")}</h1>
                                <p>{t("about.puc.text")}</p>
                            </div>
                        </div>

                    </div>

                    <div className='w-20 sm:w-50 border-red-500 flex flex-col justify-start items-center'>
                        <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
                            <div data-aos="fade-up" className='h-9 w-9 sm:h-12 sm:w-12 border-3 border-accent white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                                <School className='2' />
                            </div>
                            <div data-aos="fade-up" className='w-1 h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition duration-300 ease-in-out'>
                            </div>
                        </div>
                        <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
                            <div data-aos="fade-up" className='h-9 w-9 sm:h-12 sm:w-12 border-3 border-accent white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                                <GraduationCap className='2' />
                            </div>
                            <div data-aos="fade-up" className='w-1 h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition duration-300 ease-in-out'>
                            </div>
                        </div>
                        <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
                            <div data-aos="fade-up" className='h-9 w-9 sm:h-12 sm:w-12 border-3 border-accent white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                                <University className='2' />
                            </div>
                            <div data-aos="fade-up" className='w-1 h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition duration-300 ease-in-out'>
                            </div>
                        </div>
                        <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
                            <div data-aos="fade-up" className='h-9 w-9 sm:h-12 sm:w-12 border-3 border-accent white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                                <Factory className='2' />
                            </div>
                            <div data-aos="fade-up" className='w-1 h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition duration-300 ease-in-out'>
                            </div>
                        </div>
                        <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
                            <div data-aos="fade-up" className='h-9 w-9 sm:h-12 sm:w-12 border-3 border-accent white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                                <Landmark className='2' />
                            </div>
                            <div data-aos="fade-up" className='w-1 h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition duration-300 ease-in-out'>
                            </div>
                        </div>
                        <div className='w-50 h-50 border-orange-500 flex flex-col justify-start items-center'>
                            <div data-aos="fade-up-right" className='h-9 w-9 sm:h-12 sm:w-12 border-3 border-accent white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center 1 transition duration-300 ease-in-out'>
                                <Rocket className='2' />
                            </div>
                        </div>

                    </div>

                    <div className='w-35 px-6 sm:text-base sm:w-100 border-red-500 flex flex-col justify-start items-center'>
                        <div className='w-40 pr-6 sm:w-100 h-50  border-orange-500 flex justify-center items-start'>
                            <div data-aos="fade-left">
                                <h1 className='text-accent white:text-light-blue font-bold'>{t("about.ufabc")}</h1>
                                <p>{t("about.ufabc.text")}</p>
                            </div>
                        </div>

                        <div className='w-40 sm:w-100 h-50  border-orange-500 flex justify-start items-start'>
                            <div data-aos="fade-left" className='flex align-center justify-center gap-2 sm:gap-4'>
                                <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#82aee3] white:shadow-[0_0_10px_#82aee3] transition duration-300 ease-in-out' src={settings} />
                                <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#2f94f6] white:shadow-[0_0_10px_#2f94f6] transition duration-300 ease-in-out' src={english} />
                            </div>
                        </div>
                        <div className='w-40 pr-6 sm:w-100 h-50  border-orange-500 flex justify-center items-start'>
                            <div data-aos="fade-left">
                                <h1 className='text-accent white:text-light-blue font-bold'>{t("about.gm")}</h1>
                                <p>{t("about.gm.text")}</p>
                            </div>
                        </div>
                        <div className='w-40 sm:w-100 h-50 border-orange-500 flex justify-start items-start'>
                            <div data-aos="fade-left" >
                                <div className='flex align-center justify-center gap-2 sm:gap-4'>
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#ea23a4] white:shadow-[0_0_10px_#ea23a4] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#d32a2d] white:shadow-[0_0_10px_#d32a2d] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#a9bfd1] white:shadow-[0_0_10px_#a9bfd1] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                                </div>
                                <div className='flex align-center justify-center gap-2 sm:gap-4 mt-5'>
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#6762a6] white:shadow-[0_0_10px_#6762a6] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain-wordmark.svg" />
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#4f982e] white:shadow-[0_0_10px_#4f982e] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" />
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#8e13fd] white:shadow-[0_0_10px_#8e13fd]  transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                                </div>
                            </div>
                        </div>

                        <div className='w-40 pr-6 sm:w-100 h-50  border-orange-500 flex justify-center items-start'>
                            <div data-aos="fade-left">
                                <h1 className='text-accent white:text-light-blue font-bold'>{t("about.itau")}</h1>
                                <p>{t("about.itau.text")}</p>
                            </div>
                        </div>

                        <div className='w-40 sm:w-100 h-50 border-orange-500 flex justify-start items-start'>
                            <div data-aos="fade-left">
                                <div className='flex align-center justify-center gap-2 sm:gap-4'>
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#61dafb] white:shadow-[0_0_10px_#61dafb] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                                    <img className='border border-text-dark white: h-9 w-9 sm:h-15 sm:w-15 bg-text p-2 rounded-md shadow-[0_0_10px_#e0e0e6] white:shadow-[0_0_10px_#e0e0e6]  transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#5fa04e] white:shadow-[0_0_10px_#5fa04e] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                                </div>
                                <div className='flex align-center justify-center gap-2 sm:gap-4 mt-5'>
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#4faa41] white:shadow-[0_0_10px_#4faa41] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#29acdb] white:shadow-[0_0_10px_#29acdb] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                                    <img className='h-9 w-9 sm:h-15 sm:w-15  p-2 rounded-md shadow-[0_0_10px_#29acdb] white:shadow-[0_0_10px_#29acdb] transition duration-300 ease-in-out' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                                </div>
                            </div>
                        </div>

                    </div>


                    <a href="#projects" className="up-and-down absolute bottom-10 z-900" >
                        <ChevronDown />
                    </a>

                </div>

            </section>
        </>
    )
}

export default Journey
