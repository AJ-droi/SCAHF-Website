import React from "react";
import "../Home.css";

function Impact() {
  return (
    <div>
      <div className="Impact-Container">
        <div className="row w-100">
          <section className="Impact-Section col-lg-6   ">
            <h3>OUR IMPACT</h3>
            <h4>JOURNEY SO FAR...</h4>
            <p >
              In 2 years, we have been able to achieve so much and create an
              impact with our <br /> awareness programs, blood drives and blood
              donations.
            </p>
            <p>
              Our aim is to reach thousands of people living with SCD and also
              create <br /> awareness on genotype.
            </p>

            <div className="Box">
              <div >
                <p>5 Communities <br /> Reached</p>
                <section className="line"></section>
              </div>

              <div >
                <p>205+ Genotype <br /> Screenings</p>
                <section className="line"></section>
              </div>

              <div >
                <p>350+ Registered <br /> Blood Donors</p>
                <section className="line"></section>
              </div>

              <div>
                <p>100+ People Living <br /> with SCD Reached</p>
                <section className="line"></section>
              </div>


              <div className="fifth">
                <p>270+ Blood <br /> Donations</p>
                <section className="line"></section>
              </div>

            </div>
          </section>
          <div className="impact-container col-lg-6">
          
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Impact;
