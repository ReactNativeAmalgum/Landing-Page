import React from 'react'
import Banner from './Banner'
import Properites from './Properties'
import About from './About'
import NavBar from './Navbar'
import TrendingProperties from './TrendingProperties'
import Contact from './Contact'
import Dealer from './Dealer'
import Footer from './Footer'
import Testimonial from './Testimonial'

export default function HomePage() {
    return (
        <>
            <Banner />
            <Properites />
            <About />
            <TrendingProperties />
            <Contact />
            <Dealer />
            <Testimonial />
        </>
    )
}
