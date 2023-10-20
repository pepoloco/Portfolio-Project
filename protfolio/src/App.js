import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import AboutMe from './Pages/AboutMe';
// import Services from './Pages/Services';
import Contact from './Pages/Contacts'
import Socials from './Pages/Socials'



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/aboutMe' element={<AboutMe />} />
          {/* <Route path='/services' element={<Services />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/socials' element={<Socials />} />
        </Routes>
      </BrowserRouter >
    </>
  );
}


export default App;
