import React from "react";
import "../Home.css";
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <section className="hero">
      <header>
        <h3 className="h1">
          Let’s help make the world <br /> a better place, a pint of <span>blood</span> at a time
        </h3>
        <p>
          We are committed towards providing for the needs of people living with
          sickle cell disease <br /> and ensuring safe blood is accessible and
          affordable
        </p>
        <div className="button-container row justify-content-center">
            <button className="col-lg-4  btn1"><Link to= "/donate" target="_top" className="text-light btn-links">Donate Now </Link></button>
            <button className="col-lg-4 btn2"><Link to= "Become-a-Volunteer" target="_top" className="text-light btn-links">Become a Volunteer </Link></button>
        </div>
      </header>
    </section>
  );
}

export default Hero;
