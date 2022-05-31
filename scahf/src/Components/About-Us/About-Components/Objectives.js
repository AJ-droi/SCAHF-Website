import React from 'react';
import "../About.css";

function Objectives() {
  return (
    <div className='objective-container'>
        <h3>Our Objectives</h3>
        <div className='paragraph-container'>
            <p style={{order: 1}}>
                To create awareness, educate and enlighten the public through<br /> 
                several communication channels on sickle cell disease, prevention,<br />  
                eradication, management and health issues.<br /> 
            </p>

            <p style={{order: 3}}>
                To foster increased Health Care service accessibility and delivery<br /> 
                to people with Sickle Cell Disorder.<br /> 
            </p>

            <p style={{order: 5}}>
                To advocate for the rights of people living with Sickle Cell Disorder.<br /> 
            </p>

            <p style={{order: 2}}>
                To cooperate and collaborate with institutions, the federal and <br />  
                states government in Nigeria and other bodies nationally or globally <br />  
                with the unified goals of building a healthy nation.<br /> 
            </p>

            <p style={{order: 4}}>
                To reiterate the need for and ensure compliance on, knowing one’s Genotype status,<br />  
                offer and facilitate free genotype and blood group testing to the public at large.<br />  
            </p>

            <p style={{order: 6}}>
                To encourage volunteer blood donation. <br /> 
            </p>
        </div>
    </div>
  )
}

export default Objectives