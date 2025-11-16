import './Contact.css'
import { ChevronUp } from "lucide-react";
import wpp from "../../assets/icons/whatsapp.png"
import { useTranslation } from "react-i18next";
import { useState } from 'react';

function Contact() {

  const { t } = useTranslation();

  const [message, setMessage] = useState('');

  return (
    <>
      <section id="contact" className="relative  white:bg-white-bg h-dvh w-dvw flex flex-col items-center justify-start text-text white:text-text-dark font-bold bord-red-500">

        {/* TITLES */}
        <h1 data-aos="fade-down" data-aos-offset="200" className='text-2xl mt-16'>{t("contact.title")}</h1>
        <h1 data-aos="fade-down" data-aos-offset="200" className='text-xs m-1'>{t("contact.subtitle")}</h1>


        {/* INPUTS */}
        {/* <input data-aos="flip-up" data-aos-offset="200" className='border border-accent white:border-light-blue px-3 py-1 rounded-md mt-10 font-normal w-60' type="text" placeholder='Name' />
        <input data-aos="flip-up" data-aos-offset="200" className='border border-accent white:border-light-blue px-3 py-1 rounded-md mt-4 font-normal w-60' type="text" placeholder='E-mail' /> */}
        <textarea data-aos="flip-up" data-aos-offset="200" className='border border-accent white:border-light-blue px-3 py-1 rounded-md mt-4 font-normal w-60 h-30' name="" id="message" placeholder='E-mail me here' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

        {/* BUTTON */}
        <a href={`mailto:andrecarvalhodev@gmail.com?subject=Contact from Portfolio&body=${encodeURIComponent(message)}`}>
          <button data-aos="zoom-in" data-aos-offset="200" className='px-3 py-1 rounded-md mt-4  font-bold bg-linear-to-t from-surface to-accent white:from-text-dark white:to-light-blue white:text-text shadow-[0_0_10px_#7C3AED] white:shadow-[0_0_10px_#415ff5]' type="submit">
            {t("contact.send")}
          </button>
        </a>

        {/* SOCIAL MEDIA */}
        <div data-aos="zoom-in" data-aos-offset="200" className='border-red-500 w-60 h-fit flex items-center justify-evenly mt-10'>
          <a href="https://www.linkedin.com/in/andrecarvalho3/" target="_blank" rel="noopener noreferrer">
            <div className='w-12 h-12 p-2 rounded-md shadow-[0_0_10px_#0076b2]'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
            </div>
          </a>

          <a href="https://github.com/AndrehW27" target="_blank" rel="noopener noreferrer">
            <div className='white: border border-dark-gray w-12 h-12 p-2 rounded-md shadow-[0_0_10px_#e8e9e9] white:shadow-[0_0_10px_#1f1f1f] flex items-center justify-center'>
              <i className="text-3xl mr-4text-accent devicon-github-original"></i>
            </div>
          </a>

          <a 
            href="https://wa.me/5511992603675?text=Hello%20André,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 p-2 rounded-md shadow-[0_0_10px_#29a71a] flex items-center justify-center"
          >
            <img src={wpp} alt="WhatsApp" />
          </a>
        </div>

        {/* DOWN CHEVRON */}
        <a href="#" data-aos="zoom-in" data-aos-offset="0" data-aos-duration="2000" className="up-and-down absolute bottom-25 z-900">
          <ChevronUp />
        </a>

        {/* FOOTER */}
        <h1 className='absolute bottom-10 flex flex-col items-center justify-center text-xs w-[90dvw] border-red-500'>
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
