import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About'
import Blogs from './components/Blogs'
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import Team from './components/Team'
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Accounts from './components/Accounts';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/accounts" element={<Accounts />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App