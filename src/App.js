import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './home/Home';
import Product from './product/product';

import Loginapp from './loginapp/Loginapp.js'
import Product_main from './product-main/Product_main.js';
import About from './about/About.js';
import Contact from './contact/Contact.js';
import ScrollToTop from './ScrollToTop/ScrollToTop.js';
import Thankyou from './thankyou/Thankyou.js';
// import Navbar from './navbar/Navbar.js';
// import Slider from './slider/Slider.js';
// import product from './product/product.js'


function App() {
  return (
    <>
    
    {/* <Navbar/> */}
    {/* <Slider/> */}
    {/* <Product/> */}
   
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Loginapp/>}/>
       <Route path='/home' element={ <Home/>}/>
       <Route path='/product' element={<Product_main/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/thankyou' element={<Thankyou/>}/>
       
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
