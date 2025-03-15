import React from "react";
import styles from "./projectCard.module.css";
import { Link } from "react-router-dom";
import { ProjectPanel } from "../../../types";

interface Props {
  project: ProjectPanel;
}

const ProjectCard: React.FC<Props> = ({ project }) => {

  const viewImg = () => {
    window.open(
      project.img,
      '_blank'
    );
  }

  return (
    <div className={styles.project_card}>
      <div className={styles.img_container}>
        <img src={project.img} onClick={viewImg}/>
      </div>
      <div className={styles.project_info}>
        <h2>{project.title}</h2>
        <div className={styles.inline_text}>
          <b>Technologies used: </b>
          <span>{project.techStk}</span>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link to="/">
            <span
              title="GitHub Page"
              className="fa fa-github"
              style={{ fontSize: "20px", color: "white", marginTop: "6px" }}
            ></span>
          </Link>
          {project.project_link ? (
            <Link to="/">
              <span
                title="Visit Website"
                className="fa fa-eercast"
                style={{ fontSize: "20px", color: "white", marginTop: "6px" }}
              ></span>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
