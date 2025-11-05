import './Contact.css'

// import { Laptop } from "lucide-react";
// import { Menu } from "lucide-react";

function Contact() {

  return (
    <>
      <section id="contact" className='bg-background h-screen w-screen flex flex-col items-center justify-center'>
        <h1 className='text-text'>Contact</h1>
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        React + Tailwind Dark Mode
      </h1>
      {/* <ThemeToggle /> */}
    </div>
      </section>
    </>
  )
}

export default Contact
