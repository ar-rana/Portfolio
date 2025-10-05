import { ProjectPanel } from "../../types";
import incEdu from "../assets/projects/inc_p.png";
// import mhag from "../assets/projects/mhag.png";
import sportsManage from "../assets/projects/sportsM.png";
import algoVis from "../assets/projects/algovis.png";
import tweet from "../assets/projects/tweet.png";
import spring from "../assets/projects/spring.png";
import chatApp from "../assets/projects/chatApp.png";
import board from "../assets/projects/board.png";
import defaultImg from "../assets/projects/defaultImg.png";
import ecommerce from "../assets/projects/ecommerce.png";
import disasterSys from "../assets/projects/disasterSys.png";

export const projects: ProjectPanel[] = [
  {
    title: "Enterprise E-Commerce Application",
    techStk:
      "React, Spring Boot, Firestore, Redis, JUnit, Spring Data JPA, PostgreSQL",
    github: "https://github.com/ar-rana/E-Commerce",
    img: ecommerce,
  },
  {
    title: "Disaster Relief System",
    techStk:
      "React, Spring Boot, Redis, RabbitMQ, Spring Data JPA, PostgreSQL, Spring AI, OpenStreetMap, GraphHopper",
    github: "https://github.com/ar-rana/Disaster-Relief-System",
    img: disasterSys,
  },
  {
    title: "Collaborative Whiteboard",
    techStk: "React, HTML Canvas, Spring Boot, STOMP Websockets, Redis",
    github: "https://github.com/ar-rana/Whiteboard-App",
    img: board,
  },
  {
    title: "ChatApp-2.0 (Scalable Chat Application)",
    techStk:
      "Next.js v14, TailwindCSS, Socket.io, Node, ExpressJS, Redis, Kafka, Prisma, PostgreSQL, OAuth",
    github: "https://github.com/ar-rana/ChatApp-2.0",
    img: chatApp,
  },
  {
    title: "Spring Search",
    techStk: "React, Modular CSS, Spring Boot, Spring AI, Ollama, OAuth",
    github: "https://github.com/ar-rana/SpringSearch",
    img: spring,
    project_link: "https://spring-search.vercel.app/",
  },
  {
    title: "Pathfinding Algorithm Visualizer",
    techStk: "HTML, CSS, Javascript",
    github: "https://github.com/ar-rana/Path-Visualizer",
    img: algoVis,
    project_link:
      "https://path-visualizer-git-main-aryan-ranas-projects.vercel.app/",
  },
  {
    title: "Twitter Clone",
    techStk: "NextJs, Firebase Storage & Firestore, TailwindCSS",
    github: "https://github.com/ar-rana/twitter_clone",
    img: tweet,
    project_link: "https://twitter-rho-one.vercel.app/",
  },
  {
    title: "Sports Management Portal",
    techStk: "React, Firebase Storage & Firestore, ExpressJs, NodeJs",
    github: "https://github.com/ar-rana/Sports-Management-Portal",
    img: sportsManage,
    project_link: "https://sports-management-portal.vercel.app/",
  },
  {
    title: "Employee Management System",
    techStk: "Spring Web MVC, Jakarta Server Pages(JSP), JDBC Template, MySQL",
    github: "https://github.com/ar-rana/Employee-Management-System",
    img: defaultImg,
  },
  // {
  //   title: "Monster Hunter - Arcade Game",
  //   techStk: "HTML, CSS, JS",
  //   github: "https://github.com/ar-rana/inclusive-education-FrontendWebsite",
  //   img: mhag,
  //   project_link: "https://monster-hunter-aryan-ranas-projects.vercel.app/",
  // },
  {
    title: "Inclusive Education Website",
    techStk: "HTML, CSS",
    github: "https://github.com/ar-rana/Inclusive-Education-Frontend-Website",
    img: incEdu,
    project_link: "https://inclusive-education-frontend-website.vercel.app/",
  },
];
