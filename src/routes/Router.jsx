import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Page from "../pages/page/Page";
import BlogSingle from "../pages/blog_single/BlogSingle";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogSingle />} />
      <Route path="/page" element={<Page />} />
    </Routes>
  );
};

export default Router;
