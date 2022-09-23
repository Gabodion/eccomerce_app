import React from 'react'
import Features from './Features/Features'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Navigation from './Navbar/Navbar'
import Product from './Product/Product'

const MainScreen = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <Product/>
        <Footer/>
    </div>
  )
}

export default MainScreen