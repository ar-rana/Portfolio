import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Clock from "../components/Clock/Clock";
import AboutView from "../components/AboutView/AboutView";
import ParticleEffect from "../components/ParticleEffect/ParticleEffect";

const About: React.FC = () => {
  const [temp, setTemp] = useState(false);
  
  return (
    <div className="about">
      <Clock />
      <div className="section_container">
        <AboutView />
      </div>
      <Navigation />

      <button style={{ position: 'absolute', top: 0, left: 0}} onClick={() => setTemp(prev => !prev)}>click</button>
      {temp ? (
        <ParticleEffect />
      ): ''}
      
    </div>
  );
};

export default About;
