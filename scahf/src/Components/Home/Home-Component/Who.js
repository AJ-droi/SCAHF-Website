import React from "react";
import Image from "../Images/Rectangle-24.png";
import "../Home.css";

function Who() {
  return (
    <div className="Who">
      <section className="Who-Container">
        <div id="Img-Container">
          <img src={Image} alt="who-we-are" />
        </div>

        <div className="Who-We-Are">
          <h3>WHO WE ARE</h3>
          <p>
            Sickle Cell Awareness and Health Foundation is a non-profit<br />
            organization that started in March 2018 as an awareness forum <br /> and
            was incorporated in January 2020.
          </p>
          <p>
            We are driven by two significant objectives: <br /> - To amplify awareness
            on Sickle Cell Disorder (SCD) <br /> - To ensure that less privileged
            persons with this disorder have <br /> access to quality healthcare.
          </p>

          <div className="btn">
            <a href=" ">Read More</a>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Who;
