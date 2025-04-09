import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import ParallaxImage from "./Components/ParallaxImage/ParallaxImage.jsx"; 
import Cat1 from "./Components/Categories/Cat1/Cat1.jsx"
import Cat2 from "./Components/Categories/Cat2/Cat2.jsx"
import Cat3 from "./Components/Categories/Cat3/Cat3.jsx"
import Cat4 from "./Components/Categories/Cat4/Cat4.jsx"
import Cat5 from "./Components/Categories/Cat5/Cat5.jsx"
import Cat6 from "./Components/Categories/Cat6/Cat6.jsx"
import Cat7 from "./Components/Categories/Cat7/Cat7.jsx"
import Cat8 from "./Components/Categories/Cat8/Cat8.jsx"
import NavBar1 from "./Components/Categories/NavBar1.jsx";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About setPlayState={setPlayState} />
                <ParallaxImage flag = '0'/>
                <Title subTitle="TESTIMONIALS" title="What Customers Say" />
                <Testimonials />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/programs" element ={
            <>
              <NavBar1 />
              <Programs />
            </>
            } 
            />
          <Route path="/Valves" element={<><Cat1 /><Footer /></>} />
          <Route path="/Showers" element={<><Cat2 /><Footer/></>} />
          <Route path="/Health_Faucets" element={<><Cat3 /><Footer/></>} />
          <Route path="/Connections" element={<><Cat4 /><Footer/></>} />
          <Route path="/CP_Bath_Accessories" element={<><Cat5 /><Footer/></>} />
          <Route path="/Allied_Items" element={<><Cat6 /><Footer/></>} />
          <Route path="/MS_GI" element={<><Cat7 /><Footer/></>} />
          <Route path="/CP_Bath_Fittings" element={<><Cat8 /><Footer/></>} />
          <Route path="/contact"
            element={
              <>
                <NavBar1 />
                <ParallaxImage flag = '1'/>
                <Contact />
                <Footer />
              </>
          }
          />
          <Route path="/about" element={
            <>
              <NavBar1 />
              <ParallaxImage flag = '2'/>
              <About />
              <Footer />
            </>
          }
          />
        </Routes>

        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </Router>
  );
};

export default App;
