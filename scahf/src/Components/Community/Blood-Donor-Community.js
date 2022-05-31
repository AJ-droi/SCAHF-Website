import React from 'react';
import {Routes, Route} from "react-router-dom";
import Request from "./Request";
import Volunteer from "./Volunteer";

const Blood = () => {
  return (
    <div>
        <Routes>
            <Route path="Request-a-donor" element={<Request />} />
            <Route path="Become-a-Volunteer" element={<Volunteer/>} />
        </Routes>

    </div>
  )
}

export default Blood