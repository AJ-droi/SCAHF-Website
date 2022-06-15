import React from 'react';
import "../Donate/Donate.css"

const Contact = () => {
  return (
    <div>
         <header className='contact-header'>
            <section>
              <h3>Contact Us</h3>
            </section>
        </header> 

        <section className='contact-container row'>
          <div className='contact-container-first col-lg-5'>
            <h4>Get In Touch</h4>
            <form className='row'>
              <input type="text" placeholder='Name' /><br />

              <input type="email" placeholder='Email' /><br />

              <textarea placeholder='Your Message' cols="34" rows="5"></textarea><br />

              <button>Send Message</button>
            </form>
          </div>


          <div className='contact-container-second col-lg-5'>

            <div id="div1">
                <h5>Address</h5>
                <p>Km 2 eleme akpajo expressway, Port Harcourt,<br /> 
                Rivers State, Nigeria.</p>
            </div>

            <div id="div2">
                <h5>Contact Phone Number</h5>
                <p>+234 815 472 5680 <br />
                    +234703 645 9016</p>
            </div>
          </div>
           
        </section>


    </div>
  )
}

export default Contact