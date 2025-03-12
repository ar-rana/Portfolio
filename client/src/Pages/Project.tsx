import React from "react";
import styles from "./page.module.css";
import logo3 from "../assets/logo3.png";
import { Link, useNavigate } from "react-router-dom";
import { ProjectPanel } from "../../types";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import PrettyButton from "../components/PrettyButton/PrettyButton";
import Navigation from "../components/Navigation/Navigation";

const Project = () => {
  const projects: ProjectPanel[] = [
    {
      title: "XYZ",
      techStk: "abc, def, ghi, jkl, mno",
      github: "github.com",
      img: logo3,
    },
    {
      title: "ABC",
      techStk: "abc, def, ghi, jkl, mno",
      github: "www.github.com",
      img: logo3,
    },
    {
      title: "MNO",
      techStk: "abc, def, ghi, jkl, mno",
      github: "www.amazon.com",
      img: logo3,
    },
  ];

  const gotoGitHub = () => {
    window.location.href = "https://github.com/ar-rana";
  };

  return (
    <div className="project">
      <div className={styles.github_heading}>
        <span className="fa fa-github"></span>
        <PrettyButton text="View all on GitHub" onClick={gotoGitHub}/>
      </div>
      <div className={styles.project_container}>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
      <Navigation />
    </div>
  );
};

export default Project;
