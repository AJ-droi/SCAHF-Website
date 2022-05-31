import React from "react";
import "../Home.css";

function Hero() {
  return (
    <section className="hero">
      <header>
        <h3>
          Let’s help make the world <br /> a better place, a pint of <span>blood</span> at a time
        </h3>
        <p>
          We are committed towards providing for the needs of people living with
          sickle cell disease <br /> and ensuring safe blood is accessible and
          affordable
        </p>
        <div className="button-container">
          <a href=" ">Donate Now</a>
          <a href=" ">Become a Volunteer</a>
        </div>
      </header>
    </section>
  );
}

export default Hero;
