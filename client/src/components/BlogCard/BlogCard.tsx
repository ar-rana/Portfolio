import React from "react";
import styles from "./blogCard.module.css";
import { BlogPanel } from "../../../types";
import PrettyButton from "../PrettyButton/PrettyButton";
import { useMessage } from "../../MessageContext";

interface Blog {
  blog: BlogPanel;
}
const BlogCard: React.FC<Blog> = ({ blog }) => {
  const { setMessage } = useMessage();

  const openLink = (link: string | undefined | null) => {
    if (!link) {
      setMessage("This article has not been published yet");
      return;
    }
    window.open(
      link,
      '_blank'
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.frontView}>
          <img src={blog.img} />
          <div className={styles.text}>
            <b style={{ fontSize: "16px" }}>{blog.title}</b>
            <b>{blog.date}</b>
          </div>
        </div>
        <div className={styles.backView}>
          {blog.desc ? <h4>{blog.desc}</h4> : ""}
          <PrettyButton text="View Article" onClick={() => openLink(blog.article_link)} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
