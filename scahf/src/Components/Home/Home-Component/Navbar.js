import React,{useState} from 'react';
import logo from "../Images/scahf.png"
import "../Home.css";
import {FaChevronDown} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function Navbar() {
  const[chevron, setChevron] = useState(false);
  const[chevrons, setChevrons] = useState(false);

  const ToggleChevron = () => {
    setChevron(!chevron);
  }

  const ToggleChevrons = () => {
    setChevrons(!chevrons);
  }

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light '>
        <div className="container-fluid ">
          <div className='col-4'>
            <img src={logo} alt="scahf-logo"/>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
            <div id="collapsibleNavbar" className='collapse navbar-collapse'>
              <ul className='navbar-nav'>
                <li><Link to="/" className='nav-link '>Home </Link></li>
                <li><Link to="about-us" className='nav-link'>About Us <FaChevronDown id="chevron"  onClick={() => ToggleChevron()} /> </Link> 
                  {chevron  &&
                    <div id="myDropdown" className="dropdown-content1">
                      <Link to="about-us">About Us</Link>
                      <Link to="events">Events</Link>
                    </div>}
                </li>
                <li><Link to="/community" className='nav-link'>Blood Donor Community <FaChevronDown id="chevron" onClick={() => ToggleChevrons()} className="drop-btn"/> </Link> 
                {chevrons  &&
                  <div id="myDropdown" className="dropdown-content2">
                    <Link to="Request-a-donor" >Request a donor</Link>
                    <Link to="Become-a-Volunteer">Become-a-Volunteer</Link>
                  </div>}
                </li>
                <li><Link to="/blog" className='nav-link'>Blog</Link></li>
                <li><Link to="/contact" className='nav-link'>Contact</Link></li>
                <li><Link to="/donate" className='nav-link text-light'>Donate</Link></li>
              </ul>
            </div>
        </div>
          
         
      </nav>
    </div>
  )
}

export default Navbar