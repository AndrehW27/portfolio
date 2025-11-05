// import Navbar from './components/Navbar/Navbar.tsx'
import Hero from './components/Hero/Hero.tsx'
import Project from './components/Project/Project.tsx'
import About from './components/About/About.tsx'
import Contact from './components/Contact/Contact.tsx'
import './App.css'

function App() {

  return (
    <div className=''>
      {/* <Navbar/> */}
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
