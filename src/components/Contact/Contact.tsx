import './Contact.css'
import wpp from "../../assets/whatsapp.png"

function Contact() {

  return (
    <>
      <section id="contact" className='relative bg-background white:bg-white-bg h-dvh w-dvw flex flex-col items-center justify-start text-text white:text-text-dark font-bold bord-red-500'>
        <h1 className='text-4xl mt-16'>Contact</h1>
        <h1 className='text-md m-1'>Get in touch</h1>

        <input className='shadow-[0_0_10px_#7C3AED] white:shadow-[0_0_10px_#415ff5] px-3 py-1 rounded-md mt-10 font-normal w-60' type="text" placeholder='Name' />
        <input className='shadow-[0_0_10px_#7C3AED] white:shadow-[0_0_10px_#415ff5] px-3 py-1 rounded-md mt-4 font-normal w-60' type="text" placeholder='E-mail' />
        <textarea className='shadow-[0_0_10px_#7C3AED] white:shadow-[0_0_10px_#415ff5] px-3 py-1 rounded-md mt-4 font-normal w-60 h-30' name="" id="" placeholder='Message'></textarea>
        <button className='bg-accent white:bg-light-blue p-3 rounded-md mt-4 w-60 font-bold' type="submit">Send</button>
        <h1 className='absolute bottom-10 flex flex-col items-center justify-center text-xs w-[90dvw] border-red-500'>
          Designed & coded by André Willian
          <br />
          ✦ Turning ideas into experiences.
          <br />
          © 2025 All rights reserved.</h1>

        <div className='border-red-500 w-60 h-fit flex items-center justify-evenly mt-6'>
          <div className='w-12 h-12 p-2 rounded-md shadow-[0_0_10px_#0076b2]'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
          </div>
          <div className='w-12 h-12 p-2 rounded-md shadow-[0_0_10px_#e8e9e9] flex items-center justify-center'>
            <i className="text-3xl mr-4text-accent devicon-github-original"></i>
          </div>
          <div className='w-12 h-12 p-2 rounded-md shadow-[0_0_10px_#29a71a]'>
            <img src={wpp} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
