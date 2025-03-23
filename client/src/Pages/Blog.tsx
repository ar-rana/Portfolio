import React from "react";
import { blogs } from "../data/BlogData";
import BlogCard from "../components/BlogCard/BlogCard";
import Navigation from "../components/Navigation/Navigation";

const Blog: React.FC = () => {
  
  return (
    <div className="blog_bg page">
      <h1 className="blog_heading">Tech Blogs & Research</h1>
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
