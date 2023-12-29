import styles from "./App.module.css"
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
// import Experience from "./components/Experience/Experience"
import Contact from "./components/Contact/Contact"
import Ceritification from "./components/Certification/Ceritification"
import Projects from "./components/Projects/Projects"



function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <hr></hr>
      <Hero />
      <About />
      {/* <Experience /> */}
      <Projects />
      <Ceritification />
      <Contact />
    </div>
  )
}

export default App
