import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portfolio from './Pages/Portfolio';




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/aboutMe' element={<Portfolio />} />
        </Routes>
      </BrowserRouter >
    </>
  );
}


export default App;
