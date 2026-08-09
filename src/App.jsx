import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './components/Home';
import About from './components/About'
import Blogs from './components/Blogs'
import BlogPost from './components/BlogPost';
import Team from './components/Team'
import Events from './components/Events'
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Accounts from './components/Accounts';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {


  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />
        {/* old links redirected to their new slugs */}
        <Route path="/blog1" element={<Navigate to="/blogs/breaking-barriers" replace />} />
        <Route path="/blog2" element={<Navigate to="/blogs/social-enterprises" replace />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/accounts" element={<Accounts />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App