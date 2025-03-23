import React from "react";
import styles from "./blogCard.module.css";
import { BlogPanel } from "../../../types";
import PrettyButton from "../PrettyButton/PrettyButton";

interface Blog {
  blog: BlogPanel;
}
const BlogCard: React.FC<Blog> = ({ blog }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.frontView}>
          <img src={blog.img} />
          <div className={styles.text}>
            <b style={{ fontSize: "18px" }}>{blog.title}</b>
            <b>{blog.date}</b>
          </div>
        </div>
        <div className={styles.backView}>
          {blog.desc ? <h4>{blog.desc}</h4> : ""}
          <PrettyButton text="View Article" onClick={() => alert("hello")} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
