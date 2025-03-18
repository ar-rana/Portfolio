import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Clock from "../components/Clock/Clock";
import AboutView from "../components/AboutView/AboutView";

const About: React.FC = () => {
 
  return (
    <div className="page">
      <Clock />
      <div className="section_container">
        <AboutView />
      </div>
      <Navigation />   
    </div>
  );
};

export default About;
