import React from 'react';
import "../About.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

function What() {
  return (
    <div className='what-container row'>
      <section className='what-section col-lg-6'>
        <h3>What We Do</h3>
        <ol>
          <li>Sickle Cell Awareness</li>
          <li>Free Genotype screening </li>
          <li>Advocacy</li>
          <li>Genetic counselling</li>
          <li>Volunteer Blood Donation Awareness</li>
          <li>Support groups for people living with sickle cell disorder</li>
          <li>Blood Donation Drives</li>
        </ol>
      </section>

      <div className='what-img-container col-lg-6'>

      </div>      
        
    </div>
  )
}

export default What