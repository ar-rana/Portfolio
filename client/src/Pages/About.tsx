import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Clock from "../components/Clock/Clock";

const About: React.FC = () => {
  return (
    <div className="about">
      <Clock />
      <div className="about_view">
        <h1 style={{ fontWeight: "bolder" }}>About me.</h1>
        <span className="about_text">
          I am a Computer Science & Systems Engineering student who enjoys
          building scalable application and learning about cloud technologies.
          Apart from tech, my interests involve outdoor activities like running
          and football.
        </span>
        <br />
        <span className="about_text">
          Aryan Rana, Originally from Himachal Pradesh and raised in Delhi, I
          possess a strong drive for continuous personal growth and knowledge
          acquisition.
        </span>
        <div className="nav_container">
        <Navigation />
      </div>
      </div>
      
    </div>
  );
};

export default About;
