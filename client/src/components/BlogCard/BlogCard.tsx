import React from "react";
import styles from "./blogCard.module.css";
import { BlogPanel } from "../../../types";

interface Blog {
    blog: BlogPanel;
}
const BlogCard:React.FC<Blog> = ({ blog }) => {
  return (
    <div className={styles.blog_card}>
      <img src={blog.img}/>
      <div className={styles.blog_info}>
        <p style={{ fontSize: '18px'}}>{blog.title}</p>
        <span style={{ fontSize: '14px'}}>{blog.date}</span>
      </div>
      <span className={styles.blog_details}>
        {blog.desc}
      </span>
    </div>
  );
};

export default BlogCard;
