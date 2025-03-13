import React, { useState } from "react";
import styles from "./page.module.css";
import logo2 from "../assets/logo2.png";
import ParticleEffect from "../components/ParticleEffect/ParticleEffect";
import { BlogPanel } from "../../types";
import BlogCard from "../components/BlogCard/BlogCard";

const Blog: React.FC = () => {
  const [temp, setTemp] = useState(true);

  const blogs: BlogPanel[] = [
    {
      title: "some small title",
      date: "Feb 22, 2025",
      desc: "some small description hello",
      img: logo2,
    },
    {
      title: "some small - large - medium title",
      date: "Feb 22, 2025",
      desc: "some small description some small description some small description some small description some small description some small description some small description some small description",
      img: logo2,
    },
    {
      title: "some small - large title",
      date: "Feb 22, 2025",
      desc: "some small description some small description some small description some small description",
      img: logo2,
    },
    {
      title: "How does the kafka architerc=tuer wjncewoi ocewf wibkvem bkewb",
      date: "Feb 22, 2025",
      desc: "",
      img: logo2,
    },
    {
      title: "some small",
      date: "Feb 22, 2025",
      desc: "some some small description",
      img: logo2,
    },
  ];
  return (
    <div className={`${styles.blog_bg} blog`}>
      <h1 className={styles.blog_heading}>Blogs</h1>
      <div className={styles.blog_container}>
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
      {temp ? (
        <ParticleEffect />
      ): ''}
    </div>
  );
};

export default Blog;
