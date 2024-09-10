import React from 'react'
import HomePage from './components/Pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import

import Navbar from './components/Pages/Navbar'
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Properites from './components/Pages/Properties';
import Footer from './components/Pages/Footer';
import TrendingProperties from './components/Pages/TrendingProperties';
import Dealer from './components/Pages/Dealer';
import Banner from './components/Pages/Banner';
import Testimonial from './components/Pages/Testimonial';
export default function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Sections */}
      <section id="home">
        <Banner />
      </section>
      
      <section id="about">
        <About />
      </section>
      <section id="properties">
        <Properites />
      </section>
      <section id="trending">
        <TrendingProperties />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="dealer">
        <Dealer />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>

      {/* Footer */}
      <Footer />
    </div>

  )
}
