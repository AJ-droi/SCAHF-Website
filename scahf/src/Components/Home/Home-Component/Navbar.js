import React,{useState} from 'react';
import logo from "../Images/scahf.png"
import "../Home.css";
import {FaChevronDown} from 'react-icons/fa';
import { Link } from 'react-router-dom';


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
    <div className='nav'>
        <img src={logo} alt="scahf-logo"/>
        <ul>
            <li><Link  to="/">Home </Link></li>
            <li><Link to="about-us">About Us </Link> <FaChevronDown id="chevron"  onClick={() => ToggleChevron()} />
              {chevron  &&
                <div id="myDropdown" className="dropdown-content1">
                  <Link to="about-us" className='link'>About Us</Link>
                  <Link to="events" className='link'>Events</Link>
                </div>}
            </li>
            <li><Link to="/community">Blood Donor Community</Link> <FaChevronDown id="chevron" onClick={() => ToggleChevrons()} className="drop-btn"/>
            {chevrons  &&
               <div id="myDropdown" className="dropdown-content2">
                <Link to="Request-a-donor" className='link'>Request a donor</Link>
                <Link to="Become-a-Volunteer" className='link'>Become-a-Volunteer</Link>
              </div>}
            </li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/donate">Donate</Link></li>
        </ul>
    </div>
  )
}

export default Navbar