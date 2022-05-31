import React from "react";
import "../Home.css";
import { BsRecordBtn } from "react-icons/bs";

function Vision() {
  return (
    <div className="Vision-Container">
      <div id="Mission">
        <h3>Our Mission</h3>
        <BsRecordBtn className="icon" />
        <p>
          To truncate the continued inheritance <br /> of Sickle Cell Disease through
          effective <br /> awareness campaigns and to foster increased <br />healthcare
          accessibility and delivery to <br /> people living with Sickle Cell Disorder.
        </p>
      </div>

      <div id="Vision">
        <h3>Our Vision</h3>
        <div id="line">
            <BsRecordBtn  className="icon"   />
        </div>
        <p>
          Towards a Nigeria with a declining <br /> sickle cell anemia birth rate and a <br />
          competent public and personal <br /> healthcare system for those already <br />
          living with the condition.
        </p>
      </div>

      <div id="Values">
        <h3>Our Values</h3>
        <BsRecordBtn  className="icon"  />
        <p>
          We share a common passion to break the <br /> sickle cycle, thus creating an
          unrivalled <br />determination to succeed. We embody bravery <br /> and compassion.
          We are purpose-driven,<br /> informed and relentless.
        </p>
      </div>
    </div>
  );
}

export default Vision;
