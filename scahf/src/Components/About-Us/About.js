import React from 'react';
import{Routes, Route} from "react-router-dom";
import Events from './Events';
import AboutUs from './AboutUs';

const About = () => {
  return (
    <div>
        <Routes>
            <Route path="about-us" element={<AboutUs />} />
            <Route path="events" element={<Events />} />
        </Routes>
    </div>
  )
}

export default About