import React from "react";
import logo from "../Components/Assets/jsp.jpg";
//FONTAWESOEM IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <Link className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/aboutMe">About me</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link active" to="/services">Services</Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/socials">Socials</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact">Contacts</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
