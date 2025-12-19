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
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';


function Journey() {

    const { t } = useTranslation();

    const [showTransition, setShowTransition] = useState(false);

    return (
        <>
            <section id="journey" className="relative font-bold text-xs sm:text-xl white:bg-text text-text white:text-text-dark border-accent white:border-light-blue w-dvw flex flex-col items-center justify-start">

                {/* <div className="rounded-xl absolute inset-0 bg-[url('./assets/bg/midjourney_nobg.png')]  bg-center bg-cover sm:bg-contain bg-no-repeat h-full w-dvw -z-100 opacity-10 white:opacity-30 border-red-500"></div> */}
                <div className="rounded-xl absolute inset-0 h-full w-dvw -z-100 opacity-10 white:opacity-30 border-red-500"></div>

                {/* <h1 data-aos="fade-down" className=' white:text-dark-gray mt-16 sm:mt-25 text-2xl sm:text-2xl font-bold'>{t("about.aboutme")}</h1> */}

                <div className='relative white:text-dark-gray border-yellow-300 sm:w-[70vw] flex items-center justify-center mt-15 sm:mt-30 mb-30'>

                    {/* DESKTOP */}
                    <div className='hidden sm:flex'>
                        <div className='w-35  sm:w-100 border-red-500 flex flex-col justify-start items-center'>
                            <div className='w-40 sm:w-100 h-40 sm:h-60 flex justify-end items-start '>
                                <div>
                                    <img loading="lazy" data-aos="fade-right" className='icons hover:bg-[#3594d2] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#3594d2] white:shadow-[0_0_10px_#3594d2]' src={logic} />
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
                                    <img loading="lazy" className='icons p-1 hover:bg-[#f0db4f] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#f0db4f] white:shadow-[0_0_10px_#f0db4f] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                                    <img loading="lazy" className='icons hover:bg-[#f16529] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#f16529] white:shadow-[0_0_10px_#f16529] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                                    <img loading="lazy" className='icons hover:bg-[#31a5d9] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#31a5d9] white:shadow-[0_0_10px_#31a5d9] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
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
                                        <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
                                        <img loading="lazy" className='icons hover:bg-[#ff9900] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#ff9900] white:shadow-[0_0_10px_#ff9900] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                                        <img loading="lazy" className='icons hover:bg-[#5b00d1] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#5b00d1] white:shadow-[0_0_10px_#5b00d1] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" />
                                    </div>
                                    <div className='flex align-center justify-center gap-2 sm:gap-4 mt-5'>
                                        <img loading="lazy" className='icons hover:bg-[#e0e0e6] bg-text w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#e0e0e6] white:shadow-[0_0_10px_#1f1f1f] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg" />
                                        <img loading="lazy" className='icons hover:bg-[#007acc] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#007acc] white:shadow-[0_0_10px_#007acc] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                                        <img loading="lazy" className='icons hover:bg-[#00a1e0] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
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
                                    <Factory className='sm:h-12 sm:w-12' />
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
                                    <img loading="lazy" className='icons hover:bg-[#82aee3] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#82aee3] white:shadow-[0_0_10px_#82aee3] transition' src={settings} />
                                    <img loading="lazy" className='icons hover:bg-[#2f94f6] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#2f94f6] white:shadow-[0_0_10px_#2f94f6] transition' src={english} />
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
                                        <img loading="lazy" className='icons hover:bg-[#ea23a4] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#ea23a4] white:shadow-[0_0_10px_#ea23a4] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
                                        <img loading="lazy" className='icons hover:bg-[#d32a2d] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#d32a2d] white:shadow-[0_0_10px_#d32a2d] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
                                        <img loading="lazy" className='icons hover:bg-[#a9bfd1]  w-9 h-9 sm:w-20 sm:h-20 bg-text shadow-[0_0_10px_#336791] white:shadow-[0_0_10px_#336791] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                                    </div>
                                    <div className='flex align-center justify-center gap-2 sm:gap-4 mt-5'>
                                        <img loading="lazy" className='icons hover:bg-[#6762a6] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#6762a6] white:shadow-[0_0_10px_#6762a6] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain-wordmark.svg" />
                                        <img loading="lazy" className='icons hover:bg-[#4f982e] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#4f982e] white:shadow-[0_0_10px_#4f982e] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" />
                                        <img loading="lazy" className='icons hover:bg-[#8e13fd] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#8e13fd] white:shadow-[0_0_10px_#8e13fd]  transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
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
                                        <img loading="lazy" className='icons hover:bg-[#61dafb] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#61dafb] white:shadow-[0_0_10px_#61dafb]  transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                                        <img loading="lazy" className='icons hover:bg-[#e0e0e6] w-9 h-9 sm:w-20 sm:h-20 bg-text shadow-[0_0_10px_#1f1f1f] white:shadow-[0_0_10px_#1f1f1f] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
                                        <img loading="lazy" className='icons hover:bg-[#5fa04e] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#5fa04e] white:shadow-[0_0_10px_#5fa04e] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
                                    </div>
                                    <div className='flex align-center justify-center gap-2 sm:gap-4 mt-5'>
                                        <img loading="lazy" className='icons hover:bg-[#4faa41] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#4faa41] white:shadow-[0_0_10px_#4faa41] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
                                        <img loading="lazy" className='icons hover:bg-[#29acdb] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#29acdb] white:shadow-[0_0_10px_#29acdb] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                                        <img loading="lazy" className='icons hover:bg-[#e0e0e6] w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#1f1f1f] bg-text white:shadow-[0_0_10px_#1f1f1f] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-line-wordmark.svg" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* MOBILE */}
                    <div className='flex sm:hidden border-red-500 w-[100dvw] mt-5'>

                        <div className='w-full sm:w-50 ml-4 border-blue-500 flex flex-col justify-start items-start'>
                            <div className=' w-full border-red-500 flex'>
                                <div className='h-40 sm:h-60 border-orange-500 flex flex-col justify-start items-center'>
                                    <div data-aos="fade-up" data-aos-offset="350" className='h-9 w-9 sm:h-20 sm:w-20 border-3 border-accent hover:bg-accent white:hover:bg-light-blue transition duration-300 ease-in-out white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center'>
                                        <School className='sm:h-12 sm:w-12' />
                                    </div>
                                    <div data-aos="fade-up" data-aos-offset="330" className='w-1 h-31 sm:h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition'>
                                    </div>
                                </div>
                                <div className='pl-4 w-[86%] h-40 border-yellow-500 flex flex-col justify-start items-start'>
                                    <div data-aos="fade-left">
                                        <h1 className='text-accent text-xl white:text-light-blue font-bold'>{t("about.ufabc")}</h1>
                                        <p className='text-base'>{t("about.ufabc.text")}</p>
                                    </div>
                                    <div className='mt-2'>
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="" data-aos-offset="300" loading="lazy" className='icons hover:bg-[#3594d2] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#3594d2] white:shadow-[0_0_10px_#3594d2]' src={logic} />
                                    </div>
                                </div>
                            </div>

                            <div className=' w-full border-red-500 flex'>
                                <div className='h-40 sm:h-60 border-orange-500 flex flex-col justify-start items-center'>
                                    <div data-aos="fade-up" data-aos-offset="450" className='h-9 w-9 sm:h-20 sm:w-20 border-3 border-accent hover:bg-accent white:hover:bg-light-blue transition duration-300 ease-in-out white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center'>
                                        <GraduationCap className='sm:h-12 sm:w-12' />
                                    </div>
                                    <div data-aos="fade-up" data-aos-offset="420" className='w-1 h-31 sm:h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition'>
                                    </div>
                                </div>
                                <div className='pl-4 w-[86%] h-40 border-yellow-500 flex flex-col justify-start items-start'>
                                    <div data-aos="fade-left" data-aos-offset="450">
                                        <h1 className='text-accent text-xl white:text-light-blue font-bold'>{t("about.wsu")}</h1>
                                        <p className='text-base'>{t("about.wsu.text")}</p>
                                    </div>
                                    <div className='mt-2 flex gap-3'>
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="" data-aos-offset="370" loading="lazy" className='icons hover:bg-[#82aee3] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#82aee3] white:shadow-[0_0_10px_#82aee3] transition' src={settings} />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="200" data-aos-offset="370" className='icons hover:bg-[#2f94f6] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#2f94f6] white:shadow-[0_0_10px_#2f94f6] transition' src={english} />
                                    </div>
                                </div>
                            </div>

                            <div className=' w-full border-red-500 flex'>
                                <div className='h-40 sm:h-60 border-orange-500 flex flex-col justify-start items-center'>
                                    <div data-aos="fade-up" data-aos-offset="450" className='h-9 w-9 sm:h-20 sm:w-20 border-3 border-accent hover:bg-accent white:hover:bg-light-blue transition duration-300 ease-in-out white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center'>
                                        <Factory className='sm:h-12 sm:w-12' />
                                    </div>
                                    <div data-aos="fade-up" data-aos-offset="420" className='w-1 h-31 sm:h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition'>
                                    </div>
                                </div>
                                <div className='pl-4 w-[86%] h-40 border-yellow-500 flex flex-col justify-start items-start'>
                                    <div data-aos="fade-left" data-aos-offset="450">
                                        <h1 className='text-accent text-xl white:text-light-blue font-bold'>{t("about.gm")}</h1>
                                        <p className='text-base'>{t("about.gm.text")}</p>
                                    </div>
                                    <div className='mt-2 flex gap-3'>
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="" data-aos-offset="370" loading="lazy" className='icons hover:bg-[#82aee3] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#f0db4f] white:shadow-[0_0_10px_#f0db4f] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="200" data-aos-offset="370" className='icons hover:bg-[#2f94f6] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#f16529] white:shadow-[0_0_10px_#f16529] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="400" data-aos-offset="370" className='icons hover:bg-[#2f94f6] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#31a5d9] white:shadow-[0_0_10px_#31a5d9] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                                    </div>
                                </div>
                            </div>

                            <div className=' w-full border-red-500 flex'>
                                <div className='h-40 sm:h-60 border-orange-500 flex flex-col justify-start items-center'>
                                    <div data-aos="fade-up" data-aos-offset="450" className='h-9 w-9 sm:h-20 sm:w-20 border-3 border-accent hover:bg-accent white:hover:bg-light-blue transition duration-300 ease-in-out white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center'>
                                        <University className='sm:h-12 sm:w-12' />
                                    </div>
                                    <div data-aos="fade-up" data-aos-offset="420" className='w-1 h-31 sm:h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition'>
                                    </div>
                                </div>
                                <div className='pl-4 w-[86%] h-40 border-yellow-500 flex flex-col justify-start items-start'>
                                    <div data-aos="fade-left" data-aos-offset="450">
                                        <h1 className='text-accent text-xl white:text-light-blue font-bold'>{t("about.gen")}</h1>
                                        <p className='text-base'>{t("about.gen.text")}</p>
                                    </div>
                                    <div className='mt-2 flex gap-3'>
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="" data-aos-offset="370" loading="lazy" className='icons hover:bg-[#82aee3] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#ea23a4] white:shadow-[0_0_10px_#ea23a4] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="200" data-aos-offset="370" className='icons hover:bg-[#2f94f6] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#d32a2d] white:shadow-[0_0_10px_#d32a2d] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="400" data-aos-offset="370" className='icons hover:bg-[#2f94f6] bg-text w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#a9bfd1] white:shadow-[0_0_10px_#a9bfd1] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="600" data-aos-offset="370" loading="lazy" className='icons hover:bg-[#82aee3] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#6762a6] white:shadow-[0_0_10px_#6762a6] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain-wordmark.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="800" data-aos-offset="370" className='icons hover:bg-[#2f94f6] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#4f982e] white:shadow-[0_0_10px_#4f982e] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="370" className='icons hover:bg-[#2f94f6] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#8e13fd] white:shadow-[0_0_10px_#8e13fd] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                                    </div>
                                </div>
                            </div>

                            <div className=' w-full border-red-500 flex'>
                                <div className='h-40 sm:h-60 border-orange-500 flex flex-col justify-start items-center'>
                                    <div data-aos="fade-up" data-aos-offset="400" className='h-9 w-9 sm:h-20 sm:w-20 border-3 border-accent hover:bg-accent white:hover:bg-light-blue transition duration-300 ease-in-out white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center'>
                                        <Landmark className='sm:h-12 sm:w-12' />
                                    </div>
                                    <div data-aos="fade-up" data-aos-offset="370" className='w-1 h-31 sm:h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition'>
                                    </div>
                                </div>
                                <div className='pl-4 w-[86%] h-40 border-yellow-500 flex flex-col justify-start items-start'>
                                    <div data-aos="fade-left" data-aos-offset="400">
                                        <h1 className='text-accent text-xl white:text-light-blue font-bold'>{t("about.itau")}</h1>
                                        <p className='text-base'>{t("about.itau.text")}</p>
                                    </div>
                                    <div className='mt-2 flex gap-3'>
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="" data-aos-offset="350" loading="lazy" className='icons hover:bg-[#82aee3] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="200" data-aos-offset="350" className='icons hover:bg-[#2f94f6] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#ff9900] white:shadow-[0_0_10px_#ff9900] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="400" data-aos-offset="350" className='icons hover:bg-[#2f94f6] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#5b00d1] white:shadow-[0_0_10px_#5b00d1] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="600" data-aos-offset="350" loading="lazy" className='icons hover:bg-[#82aee3] bg-text w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#1f1f1f] white:shadow-[0_0_10px_#1f1f1f] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="800" data-aos-offset="350" className='icons hover:bg-[#2f94f6] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#007acc] white:shadow-[0_0_10px_#007acc] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="350" className='icons hover:bg-[#2f94f6] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                                    </div>
                                </div>
                            </div>

                            <div className=' w-full border-red-500 flex'>
                                <div className='h-40 sm:h-60 border-orange-500 flex flex-col justify-start items-center'>
                                    <div data-aos="fade-up-right" data-aos-offset="400" className='h-9 w-9 sm:h-20 sm:w-20 border-3 border-accent hover:bg-accent white:hover:bg-light-blue transition duration-300 ease-in-out white:border-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] rounded-full flex justify-center items-center'>
                                        <Rocket className='sm:h-12 sm:w-12' />
                                    </div>
                                    {/* <div data-aos="fade-up" data-aos-offset="370" className='w-1 h-31 sm:h-40 bg-accent white:bg-light-blue shadow-[0_0_30px_#7C3AED] white:shadow-[0_0_30px_#6594fc] transition'>
                                    </div> */}
                                </div>
                                <div className='pl-4 w-[86%] h-40 border-yellow-500 flex flex-col justify-start items-start'>
                                    <div data-aos="fade-left" data-aos-offset="420">
                                        <h1 className='text-accent text-xl white:text-light-blue font-bold'>{t("about.puc")}</h1>
                                        <p className='text-base'>{t("about.puc.text")}</p>
                                    </div>
                                    <div className='mt-2 flex gap-3'>
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="" data-aos-offset="350" loading="lazy" className='icons hover:bg-[#82aee3] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#00a1e0] white:shadow-[0_0_10px_#00a1e0] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="200" data-aos-offset="350" className='icons hover:bg-[#2f94f6] bg-text w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#1f1f1f] white:shadow-[0_0_10px_#1f1f1f] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="400" data-aos-offset="350" className='icons hover:bg-[#2f94f6] bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#4f982e] white:shadow-[0_0_10px_#4f982e] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="600" data-aos-offset="350" loading="lazy" className='icons hover:bg-[#82aee3] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#4f982e] white:shadow-[0_0_10px_#4f982e] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="800" data-aos-offset="350" className='icons hover:bg-[#2f94f6] bg-background white:bg-background w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#007acc] white:shadow-[0_0_10px_#007acc] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                                        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1000" data-aos-offset="350" className='icons hover:bg-[#2f94f6] bg-text w-9 h-9 sm:w-20 sm:h-20 shadow-[0_0_10px_#1f1f1f] white:shadow-[0_0_10px_#1f1f1f] transition' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-line-wordmark.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <a href="#abilities" className="up-and-down absolute bottom-6 sm:bottom-16 z-900" >
                    <ChevronDown className=' sm:w-10 sm:h-10'
                        onClick={() => {
                            setShowTransition(true);
                            setTimeout(() => {
                                setShowTransition(false);
                            }, 800);
                        }}
                    />
                </a>

                {/* TRANSITION */}
                <AnimatePresence>
                    {showTransition && (
                        <motion.div
                            key="transition"
                            initial={{ scale: 0.85, opacity: 0, filter: "blur(4px)" }}
                            animate={{ scale: 1, opacity: 0.8, rotate: 360, filter: "blur(0px)" }}
                            exit={{ scale: 1.15, opacity: 0, filter: "blur(6px)" }}
                            // initial={{ scale: 0.85, opacity: 0 }}
                            // animate={{ scale: 1, opacity: 1 }}
                            // exit={{ scale: 1.15, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="fixed inset-0 w-svw h-svh bg-cover bg-no-repeat bg-center z-9998 flex items-center justify-center
                bg-[url('assets/bg/vortex.png')]
                white:bg-[url('assets/bg/figures.png')]
                "
                        >
                            <div className="w-30 h-30 bg-contain bg-no-repeat bg-center z-9999
                bg-[url('assets/icons/aw-final.png')]
                white:bg-[url('assets/icons/aw_light.png')]
              "
                            ></div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </section>
        </>
    )
}

export default Journey
