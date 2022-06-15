import React from "react";
import "../Home.css";
import logo from "../Images/logo 3.png";
import facebook from "../Images/Facebook.png";
import instagram from "../Images/Instagram.png";
import twitter from "../Images/Twitter.png";
import youtube from "../Images/youtube 1.png"
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="Footer-Container ">
      <div className="Footer-Item-One">
        <img src={logo} alt="" />
        <p>Bridging the knowledge gap with care</p>
      </div>
      <section className="Footer-Item-Two row">
        <div id="First-Item" className="col-lg-4">
          <div id="First-Item-One">
            <h5> Address: </h5>
            <p>
              Km 2 eleme akpajo expressway, Port Harcourt, <br /> Rivers State,
              Nigeria.
            </p>
          </div>

          <div>
            <h5>Contact Phone Number:</h5>
            <p>+234 815 472 5680 <br /> +234703 645 9016</p>
          </div>
        </div>

        <div id="Second-Item" className="col-lg-4">
          <h5> Quick Links </h5>
          <ul>
              <li><Link to= "/" target="_top"> Home </Link></li>
              <li><Link to= "about-us" target="_top"> About Us</Link></li>
              <li><Link to= "events" target="_top"> Events</Link></li>
              <li><Link to= " "> Gallery</Link></li>
              <li><Link to= "Become-a-Volunteer" target="_top"> Become a Volunteer </Link></li>
              <li><Link to= "/blog" target="_top"> Blog</Link></li>
              <li><Link to= "/contact" target="_top"> Get in Touch</Link></li>
          </ul>
        </div>

        <div id="Third-Item" className="col-lg-4">
            <h5>Connect with us</h5>
            <p>Follow us on your favourite <br /> social media platforms</p>
            <div id="Third-Item-One" className="row">
                <a href=" " className="col" > <img src={facebook} alt="facebook" /></a>
                <a href=" " className="col"> <img src={instagram} alt="instagram" /></a>
                <a href=" " className="col"> <img src={twitter} alt="twitter" /></a>
                <a href=" " className="col"> <img src={youtube} alt="youtube" /></a>
            </div>
        </div>
      </section>

      <div className="Footer-Item-Three">
          <p>Copyright 2020 :: Scahfng :: All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
