import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Clock from 'react-clock';





function App() {
  return (
    <>
      <Clock/>
      <Navbar />
      <Header />
    </>
  );
}


export default App;
