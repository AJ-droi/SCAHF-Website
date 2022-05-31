import React from "react";
import "../Home.css";
import logo from "../Images/logo 3.png";
import facebook from "../Images/Facebook.png";
import instagram from "../Images/Instagram.png";
import twitter from "../Images/Twitter.png";
import youtube from "../Images/youtube 1.png"


function Footer() {
  return (
    <div className="Footer-Container">
      <div className="Footer-Item-One">
        <img src={logo} alt="" />
        <p>Bridging the knowledge gap with care</p>
      </div>
      <section className="Footer-Item-Two">
        <div id="First-Item">
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

        <div id="Second-Item">
          <h5> Quick Links </h5>
          <ul>
              <li><a href=" ">Home</a></li>
              <li><a href=" ">About us</a></li>
              <li><a href=" ">Events</a></li>
              <li><a href=" ">Gallery</a></li>
              <li><a href=" ">Become a volunteer</a></li>
              <li><a href=" ">Blog</a></li>
              <li><a href=" ">Get in touch</a></li>
          </ul>
        </div>

        <div id="Third-Item">
            <h5>Connect with us</h5>
            <p>Follow us on your favourite <br /> social media platforms</p>
            <div id="Third-Item-One">
                <a href=" "> <img src={facebook} alt="facebook" /></a>
                <a href=" "> <img src={instagram} alt="instagram" /></a>
                <a href=" "> <img src={twitter} alt="twitter" /></a>
                <a href=" "> <img src={youtube} alt="youtube" /></a>
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
