import React from 'react';
import "./Donate.css";
import Union from "./Images/Union-Bank-New-Logo 1.png";

const Donate = () => {
  return (
    <div className='donate-section'>
        <header className='donate-header'>
            <section>
              <h3>Make a Donation</h3>
              <p>Your Donation will go a long way in supporting us towards providing for the needs <br /> 
                  of people living with sickle cell disease and ensuring safe blood is accessible and affordable</p>
            </section>
        </header> 

        <section className='donate-container row'>
          <div className='donate-container-first col-lg-5'>
            <h4>Thank you for your donation</h4>
            <form className='row'>
              <input type="text" placeholder='Enter Full Name' /><br />

              <input type="email" placeholder='Enter your email address' /><br />
            
              <input type="tel" placeholder='Enter your phone number' /><br />

              <input type="text" placeholder='Currency' /> <input type="text" placeholder='Enter Amount' /><br />

              <textarea placeholder='Additional Infomation required' cols="34" rows="5"></textarea><br />

              <button>Donate Now</button>
            </form>
          </div>

          <div className='donate-container-second col-lg-5'>
            <h4>Bank Details</h4>
            <div id="div1" >
              <div>
                <h5>Account Number</h5>
                <p>0129401758</p>
              </div>
              <img src={Union} alt='union bank' />
            </div>

            <div id="div2">
                <h5>Account Name</h5>
                <p>Sickle Cell Awareness and Health Foundation</p>
            </div>

            <div id="div3">
                <h5>Sickle Cell Awareness and Health Foundation</h5>
                <p>UNION BANK</p>
            </div>
          </div>
           
        </section>
    </div>
  )
}

export default Donate