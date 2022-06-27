import React from 'react'
import Features from './Features/Features'
import Hero from './Hero/Hero'
import Navigation from './Navbar/Navbar'
import Product from './Product/Product'

const MainScreen = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <Product/>
    </div>
  )
}

export default MainScreen