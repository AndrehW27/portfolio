import './Contact.css'
import { ChevronUp, Download } from "lucide-react";
import wpp from "../../assets/icons/whatsapp.png"
import trail from "../../assets/icons/trailhead2.png"
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import email from "../../assets/icons/email_nobg.png";


function Contact() {

  const { t } = useTranslation();

  const [message, setMessage] = useState('');


  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv-andre-willian.pdf"; // from public folder
    link.download = "Andre-Willian-CV.pdf";
    link.click();

  };

  return (
    <>
      <section id="contact" className="relative h-svh w-dvw flex flex-col items-center justify-start text-text white:text-text-dark font-bold bord-red-500">

        <div className="absolute inset-0 bg-[url('./assets/bg/midjourney_nobg.png')] bg-center bg-cover sm:bg-contain bg-no-repeat h-full w-dvw -z-100 opacity-10 border-red-500"></div>


        {/* TITLES */}
        {/* <h1 data-aos="fade-down" data-aos-offset="200" className='text-2xl sm:text-4xl mt-16 sm:mt-25'>{t("contact.title")}</h1> */}
        <h1 data-aos="fade-down" data-aos-offset="200" className='text-base sm:text-2xl mt-20 sm:mt-30 mb-6 sm:mb-10'>{t("contact.subtitle")}</h1>


        {/* INPUTS */}
        {/* <input data-aos="flip-up" data-aos-offset="200" className='border border-accent white:border-light-blue px-3 py-1 rounded-md mt-10 font-normal w-60' type="text" placeholder='Name' />
        <input data-aos="flip-up" data-aos-offset="200" className='border border-accent white:border-light-blue px-3 py-1 rounded-md mt-4 font-normal w-60' type="text" placeholder='E-mail' /> */}
        <textarea data-aos="zoom-in" data-aos-offset="200" className='text-xs sm:text-xl sm:p-5 border border-accent white:border-light-blue px-3 py-1 rounded-2xl mt-4 font-normal w-60 sm:w-140 h-30 sm:h-60' name="" id="message" placeholder='E-mail me here' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

        {/* BUTTON SEND*/}
        {/* <a href={`mailto:andrecarvalhodev@gmail.com?subject=Contact from Portfolio&body=${encodeURIComponent(message)}`}>
          <button data-aos="zoom-in" data-aos-offset="200" className='px-4 py-2 rounded-md mt-4 sm:mt-10 sm:text-xl font-bold bg-background border border-accent box-border cursor-pointer hover:opacity-50 hover:border-text hover:bg-accent white:hover:border-light-blue transition duration-300 ease-in-out' type="submit">
            {t("contact.send")}
          </button>
        </a> */}

        {/* EMAIL ICON */}
        <img src={email} alt="" className='w-15 sm:w-20 mt-2 sm:mt-6' />

        {/* BUTTON DOWNLOAD*/}
        <a href="/andre_resume.pdf" className='flex absolute bottom-60 sm:bottom-90 border-red-500'>
          <div >
            <button data-aos="zoom-in" data-aos-offset="200" className='flex items-center justify-center px-3 py-1 sm:px-5 sm:py-3 rounded-full text-xs sm:text-xl font-bold border border-accent bg-linear-to-t from-surface to-accent hover:from-accent hover:to-surface white:from-text-dark white:to-light-blue white:text-text shadow-[0_0_10px_#7C3AED] white:shadow-[0_0_10px_#415ff5] box-border cursor-pointer hover:opacity-90  hover:border-accent white:hover:border-light-blue transition duration-300 ease-in-out' type="submit"
              onClick={handleDownload}>
              <p>Download CV</p>
              <div className='ml-2 sm:ml-4'><Download className='w-4 sm:w-8' /></div>
            </button>
          </div>
        </a>

        {/* SOCIAL MEDIA */}
        <div data-aos="zoom-in" data-aos-offset="0" className='absolute bottom-40 sm:bottom-60 w-60 sm:w-100 h-fit flex items-center justify-evenly'>

          <a href="https://www.linkedin.com/in/andrecarvalho3/" target="_blank" rel="noopener noreferrer">
            <div className='w-9 h-9 sm:w-15 sm:h-15 p-1.25 sm:p-2 rounded-full shadow-[0_0_10px_#0076b2] hover:bg-[#0076b2]'>
              <img loading="lazy" className='rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
            </div>
          </a>

          <a href="https://github.com/AndrehW27" target="_blank" rel="noopener noreferrer">
            <div className='hover:bg-text/50 white: border border-dark-gray w-9 h-9 sm:w-15 sm:h-15 rounded-full shadow-[0_0_10px_#e8e9e9] white:shadow-[0_0_10px_#1f1f1f] flex items-center justify-center'>
              <i className="text-2xl sm:text-5xl devicon-github-original"></i>
            </div>
          </a>

          <a href="https://www.salesforce.com/trailblazer/andrehwillian"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-transparent w-9 h-9 sm:w-15 sm:h-15 p-1.25 sm:p-2 bg-text rounded-full shadow-[0_0_10px_#e8e9e9] white:shadow-[0_0_10px_#1f1f1f] flex items-center justify-center"
          >
            <img loading="lazy" src={trail} alt="WhatsApp" />
          </a>

          <a href="https://wa.me/5511992603675?text=Hello%20André,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch!"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-[#29a71a] w-9 h-9 sm:w-15 sm:h-15 p-1.25 sm:p-2  rounded-full shadow-[0_0_10px_#29a71a] flex items-center justify-center"
          >
            <img loading="lazy" className='rounded-full' src={wpp} alt="WhatsApp" />
          </a>
        </div>

        {/* DOWN CHEVRON */}
        <a href="#" data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000" className="up-and-down absolute bottom-25 sm:bottom-35 z-900">
          <ChevronUp className='sm:w-10 sm:h-10' />
        </a>

        {/* FOOTER */}
        <h1 className='absolute bottom-10 flex flex-col items-center justify-center text-xs sm:text-base w-[90dvw] border-red-500'>
          {t("contact.footer1")}
          <br />
          {t("contact.footer2")}
          <br />
          {t("contact.footer3")}
        </h1>

      </section>
    </>
  )
}

export default Contact
