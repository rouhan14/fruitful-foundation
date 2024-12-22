import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
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
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/accounts" element={<Accounts />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
