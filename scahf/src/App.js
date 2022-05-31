import "./App.css";
import Home from "./Components/Home/Home";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Home/Home-Component/Navbar";
import Footer from "./Components/Home/Home-Component/Footer";
import Donate from "./Components/Donate/Donate"
import Contact from "./Components/Contact/Contact";
import Community from "./Components/Community/Community"
import About from "./Components/About-Us/About";
import Blog from "./Components/Blog/Blog";
import Blood from "./Components/Community/Blood-Donor-Community";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Routes>
          <Route path="/*" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/*" element={<Blood />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
