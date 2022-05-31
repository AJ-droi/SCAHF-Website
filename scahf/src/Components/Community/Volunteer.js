import React from 'react';
import "../Donate/Donate.css";



const Volunteer = () => {

  return (
    <div>
        <header className='volunteer-header'>
            <section>
                <h3>Become a Volunteer</h3>
            </section>
        </header>

        <main>
            <p>
            Congratulations on your decision to volunteer with Sickle Cell Awareness and Health Foundation. <br />

            By volunteering, you will not only be making a huge impact in the lives of people living with sickle cell disease and creating awareness on sickle cell anaemia <br />
            & volunteer blood donation, but also in your personal development. <br />

            All the information you give will be treated confidentially and wouldn’t be used for any other purpose besides that of SCAHF.  <br />

            Volunteer positions are always part-time, non-paid and you will be expected to serve in one of our teams with other dynamic professionals who share similar interests. <br />
            You are kindly encouraged to complete all parts of the form so please feel free to express yourself to the best of your ability. <br />
            </p>

            <form className='community-form'  >
            
               <section className='community-section'>
                    <h6>Kindly fill the form below with your correct details</h6>
                    <div className='form-input'>
                        <input type="text" placeholder='Full Name' />
                        <input type="email" placeholder='Email Address' />
                        <input type="phone" placeholder='Phone Number(Whatsapp)' />
                        <input type="date" placeholder='Date of Birth' />
                        <input type="text" placeholder='Gender' />
                        <input type="text" placeholder='Contact Address' />
                        <input type="text" placeholder='State of Origin' />
                        <input type="text" placeholder='Educational Qualification' />
                        <input type="text" placeholder='Are you living with sickle cell disease' />
                    </div>
                    <button >Submit Form</button>
                </section>
                
            </form>
        </main>

    </div>
  )
}

export default Volunteer