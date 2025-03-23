import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import { projects } from "../data/ProjectData";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import PrettyButton from "../components/PrettyButton/PrettyButton";
import Navigation from "../components/Navigation/Navigation";

const Project:React.FC = () => {
  const gotoGitHub = () => {
    window.open(
      "https://github.com/ar-rana",
      "_blank"
    );
  };

  return (
    <div className="page">
      <div className="github_heading">
        <span className="fa fa-github"></span>
        <PrettyButton text="View all on GitHub" onClick={gotoGitHub}/>
      </div>
      <div className="project_container">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
      <Navigation />
    </div>
  );
};

export default Project;
