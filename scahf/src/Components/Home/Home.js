import React from 'react';
import Hero from './Home-Component/Hero';
import Who from './Home-Component/Who';
import Vision from './Home-Component/Vision';
import Impact from './Home-Component/Impact'
import Get from './Home-Component/Get';
import Event from './Home-Component/Event';




function Home() {
  return (
    <div>
        <Hero />
        <Who />
        <Vision />
        <Impact />
        <Get />
        <Event />
    </div>
  )
}

export default Home