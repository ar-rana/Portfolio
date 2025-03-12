import React from "react";
import styles from "./projectCard.module.css";
import { Link } from "react-router-dom";
import { ProjectPanel } from "../../../types";

interface Props {
  project: ProjectPanel;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className={styles.project_card}>
      <div className={styles.img_container}>
        <img src={project.img} />
      </div>
      <div className={styles.project_info}>
        <h2>{project.title}</h2>
        <div className={styles.inline_text}>
          <b>Technologies used: </b>
          <span>{project.techStk}</span>
        </div>
        <Link to="/">
          <span
            className="fa fa-github"
            style={{ fontSize: "20px", color: "white", marginTop: "6px" }}
          ></span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
