import { useState } from 'react'
import style from "./App.module.css"
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={style.App}>
      <Navbar />
      <Hero />;
    </div>
  )
}

export default App
