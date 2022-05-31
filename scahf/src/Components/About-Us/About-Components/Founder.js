import React from 'react';
import "../About.css";
import { ImQuotesLeft } from "react-icons/im";

function Founder() {
  return (
    <div className="founder-container">
        <section className='founder-section'>
            <div className='founder-img'></div>
            <div className='quote-container'>
                <ImQuotesLeft />
            </div>
            <div className='founder-text'>
                <h3>The Founder</h3>
                <h4>Omubo-Pepple Tamunotokini </h4>
            </div>
        </section>

        <div id='founder-line'> </div>

        <div className='founder-paragraph'>
            <p>
            A 3rd year Law student at Rivers State University, Nigeria.<br /> 
            Having firsthand experience of the effect of ignorance and <br /> 
            poor awareness on sickle cell disease in her community and <br /> 
            a strong desire to address the issues of stigma and ignorance <br />
            gave birth to Sickle Cell Awareness and Heath Foundation. <br /> <br /> 

            She is passionate about photography and volunteering. <br /> 
            </p>
        </div>

    </div>
  )
}

export default Founder