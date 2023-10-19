import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Services from './Components/Services';
// import Clock from './Components/Clock'





function App() {
  return (
    <>
      {/* <Clock/> */}
      {/* <Router> */}
        <Navbar />
        <Header />
        {/* <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </Router> */}
    </>
  );
}


export default App;
