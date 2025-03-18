import React from "react";
import logo2 from "../assets/logo2.png";
import { BlogPanel } from "../../types";
import BlogCard from "../components/BlogCard/BlogCard";
import Navigation from "../components/Navigation/Navigation";

const Blog: React.FC = () => {
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
      desc: "some small description some small some small description some small description some small description some small description some small description some small description some description some some small description some small description small description some small description some small description some small description some small description some small description",
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
    <div className="blog_bg page">
      <h1 className="blog_heading">Tech Blogs</h1>
      <div className="blog_container">
        {blogs.map((blog, i) => (
          <BlogCard key={i} blog={blog} />
        ))}
      </div>
      <Navigation />
    </div>
  );
};

export default Blog;
