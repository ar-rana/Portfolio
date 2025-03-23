import React from "react";
import styles from "./projectCard.module.css";
import { Link } from "react-router-dom";
import { ProjectPanel } from "../../../types";

interface Props {
  project: ProjectPanel;
}

const ProjectCard: React.FC<Props> = ({ project }) => {

  const openLink = (link: string) => {
    window.open(
      link,
      '_blank'
    );
  }

  return (
    <div className={styles.project_card}>
      <div className={styles.img_container}>
        <img src={project.img} onClick={() => openLink(project.img)}/>
      </div>
      <div className={styles.project_info}>
        <h2>{project.title}</h2>
        <div className={styles.inline_text}>
          <b>Technologies used: </b>
          <span>{project.techStk}</span>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link to={project.github} target="_blank">
            <span
              title="GitHub Page"
              className="fa fa-github"
              style={{ fontSize: "20px", color: "white", marginTop: "6px" }}
            ></span>
          </Link>
          {project.project_link ? (
              <span
                title="Visit Website"
                className="fa fa-eercast"
                style={{ fontSize: "20px", color: "white", marginTop: "6px", cursor: "pointer" }}
                onClick={() => openLink(project.project_link!)}
              ></span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
