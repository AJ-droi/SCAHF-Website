import React,{useState} from 'react';
import "../Donate/Donate.css";


const Community = () => {
    const [check,setCheck] = useState(false);
  


    const pageCheck = () => {
        setCheck(!check);
    }

  return (
    <div>
        <header className='community-header'>
            <section>
                <h3>Join Our Blood Donor Community</h3>
            </section>
        </header>

        <main>
            <p>
            Increasing the pool of voluntary blood donors in Nigeria is the key to bridging the blood supply gap and could translate into better blood transfusion safety. <br />

            Every two seconds someone needs blood. Blood is essential for people living with sickle cell disease, surgeries, cancer treatment, chronic illness and traumatic injuries. <br />

            The gift of blood is the gift of life. There is no substitute for human blood. <br />

            Sign up today to join our Blood Donor community <br />
            </p>

            <form className='community-form'>
            
                {!check && <section className='volunteer-section'>
                
                <progress id="file1" value="50" max="100"> 32% </progress>
                    <h6>Step 1: Bio Data</h6>
                    <div className='form-input'>
                        <input type="text" placeholder='Full Name' />
                        <input type="email" placeholder='Email Address' />
                        <input type="date" placeholder='Date of Birth' />
                        <input type="text" placeholder='Gender' />
                        <input type="text" placeholder='Contact Address' />
                        <input type="text" placeholder='State of Origin' />
                    </div>
                    <button onClick={() => pageCheck()} >Next</button>
                </section>}

                {check && <section className='volunteer-section'>
                    <progress id="file2" value="100" max="100"> 32% </progress>
                    <h6>Step 2: Blood Donation Details</h6>
                    <div className='form-input'>
                        <input type="text" placeholder='Do you know your genotype?' />
                        <input type="text" placeholder='If yes, whats your genotype?' />
                        <input type="text" placeholder='Do you know your blood group?' />
                        <input type="text" placeholder='What is your blood group?' />
                        <input type="text" placeholder='When was your last donation?' />
                        <input type="text" placeholder='Have you donated to scahf before?' />
                        <input type="text" placeholder='if yes, when?' />
                    </div>
                    
                    <div id="btn-container">
                        <button onClick={() => pageCheck()}>Previous</button>
                        <button>Submit</button>
                    </div>
                    
                </section>}
                
            </form>
        </main>

    </div>
  )
    }

export default Community;