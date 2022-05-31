import React from 'react';
import Board from './About-Components/Board';
import Founder from './About-Components/Founder';
import Header from './About-Components/Header';
import Objectives from './About-Components/Objectives';
import What from './About-Components/What'



function AboutUs() {
  return (
    <div>
        <Header />
        <What />
        <Objectives />
        <Founder />
        <Board />
    </div>
  )
}

export default AboutUs