import React, { useState } from "react";
import styles from "./page.module.css";
// import { Link, useNavigate } from "react-router-dom";
import { ProjectPanel } from "../../types";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import PrettyButton from "../components/PrettyButton/PrettyButton";
import Navigation from "../components/Navigation/Navigation";
import ParticleEffect from "../components/ParticleEffect/ParticleEffect";

import incEdu from "../assets/projects/inc_p.png";
import todoImg from "../assets/projects/todo_img.png";
import mhag from "../assets/projects/mhag.png";
import sportsManage from "../assets/projects/sportsM.png";
import algoVis from "../assets/projects/algovis.png";
import tweet from "../assets/projects/tweet.png";
import spring from "../assets/projects/spring.png";
import chatApp from "../assets/projects/chatApp.png";
import board from "../assets/projects/board.png";
import defaultImg from "../assets/projects/defaultImg.png";
import ecommerce from "../assets/projects/ecommerce.png";

const Project:React.FC = () => {
  const [temp, setTemp] = useState(false);

  const projects: ProjectPanel[] = [
    {
      title: "Collaborative Whiteboard",
      techStk: "React, HTML Canvas, Spring Boot, STOMP Websockets, Redis",
      github: "https://github.com/ar-rana/Whiteboard-App",
      img: board,
    },
    {
      title: "Enterprise E-Commerce Application",
      techStk: "React, Spring Boot, Firestore, Redis, JUnit, Spring Data JPA, PostgreSQL",
      github: "https://github.com/ar-rana/E-Commerce",
      img: ecommerce,
    },
    {
      title: "Spring Search",
      techStk: "React, Modular CSS, Spring Boot, Spring AI, Ollama",
      github: "https://github.com/ar-rana/SpringSearch",
      img: spring,
      project_link: "spring-search.vercel.app",
    },
    {
      title: "Pathfinding Algorithm Visualizer",
      techStk: "HTML, CSS, Javascript",
      github: "https://github.com/ar-rana/Path-Visualizer",
      img: algoVis,
      project_link: "path-visualizer-git-main-aryan-ranas-projects.vercel.app",
    },
    {
      title: "Sports Management Portal",
      techStk: "React, Firebase Storage & Firestore",
      github: "https://github.com/ar-rana/Sports-Management-Portal",
      img: sportsManage,
      project_link: "sports-management-portal.vercel.app",
    },
    {
      title: "Twitter Clone",
      techStk: "NextJs, Firebase Storage & Firestore, TailwindCSS",
      github: "https://github.com/ar-rana/Sports-Management-Portal",
      img: tweet,
      project_link: "twitter-rho-one.vercel.app",
    },
    {
      title: "ChatApp-2.0 (Scalable Chat Application)",
      techStk: "Next.js v14, TailwindCSS, Socket.io, Node, ExpressJS, Redis, Kafka, Prisma",
      github: "https://github.com/ar-rana/Sports-Management-Portal",
      img: chatApp,
    },
    {
      title: "Employee Management System",
      techStk: "Spring MVC, Jakarta Server Pages(JSP), JDBC Template, MySQL",
      github: "https://github.com/ar-rana/Employee-Management-System",
      img: defaultImg,
    },
    {
      title: "Monster Hunter - Arcade Game",
      techStk: "HTML, CSS, JS",
      github: "https://github.com/ar-rana/inclusive-education-FrontendWebsite",
      img: mhag,
      project_link: "monster-hunter-aryan-ranas-projects.vercel.app",
    },
    {
      title: "To-do Application",
      techStk: "React, Node, ExpressJs, MongoDB",
      github: "https://github.com/ar-rana/Employee-Management-System",
      img: todoImg,
    },
    {
      title: "Inclusive Education Website",
      techStk: "HTML, CSS",
      github: "https://github.com/ar-rana/Inclusive-Education-Frontend-Website",
      img: incEdu,
      project_link: "inclusive-education-frontend-website.vercel.app",
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

      <button style={{ position: 'absolute', top: 0, left: 0}} onClick={() => setTemp(prev => !prev)}>click</button>
      {temp ? (
        <ParticleEffect />
      ): ''}

    </div>
  );
};

export default Project;
