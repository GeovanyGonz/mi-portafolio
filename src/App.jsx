import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Services from "./Pages/services";
import Portfolios from "./Pages/portfolios";
import Blog from "./Pages/blog";
import Contact from "./Pages/contact";
import BlogDetails from "./Pages/blog_details";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/common.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog_details/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
