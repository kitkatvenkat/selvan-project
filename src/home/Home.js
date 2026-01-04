import React from 'react'
import Navbar from "../navbar/Navbar.js"
import Product from '../product/product.js'
import Slider from "../slider/Slider.js"
import Footer from '../footer/footer.js'
function Home() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Product/>
    <Footer/>
    </>
  )
}

export default Home
