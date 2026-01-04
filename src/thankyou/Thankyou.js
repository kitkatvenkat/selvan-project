      import React from 'react'
import "./Thankyou.css"
import Navbar from '../navbar/Navbar'
import Footer from '../footer/footer'
import { useNavigate } from 'react-router-dom'
function Thankyou() {
  const navigate=useNavigate()
  return (
    <>
    <Navbar/>
    <div className='thankyou'>
       <div class="thank-box">
         <h1 className='thank'>Thank you</h1> 
      <button className='thank-btn' onClick={()=>navigate("/home")}>Go back</button>
       </div>

     
    </div>
    <Footer/>
    </>

  )
}

export default Thankyou