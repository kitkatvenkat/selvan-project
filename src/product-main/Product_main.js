import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Product_main.css"
import image1 from "../image/men1.jpeg"
import image2 from "../image/men2.webp"
import image3 from "../image/men3.avif"
import image4 from "../image/men4.avif"
import image5 from "../image/men5.webp"
import image6 from "../image/men6.jpeg"
import image7 from "../image/men7.webp"
import image8 from "../image/men8.jpg"
import image9 from "../image/men9.jpeg"
import image10 from "../image/men10.jpeg"
import Footer from '../footer/footer'

function Product_main() {
    
     const product_data = [
        {id:1,prod_img:image1,prod_name:"ligra shirt",price:500,old_price:700,prod_discription:"the shirt is very beautyfull"},
        {id:2,prod_img:image2,prod_name:"cortun shirt",price:700,old_price:1000,prod_discription:"the shirt is very beautyfull"},
        {id:3,prod_img:image3,prod_name:"jeen shirt",price:1000,old_price:1200,prod_discription:"the shirt is very beautyfull"},
        {id:4,prod_img:image4,prod_name:"cortun ligra shirt",price:450,old_price:550,prod_discription:"the shirt is very beautyfull"},
        {id:5,prod_img:image5,prod_name:"polister shirt",price:550,old_price:800,prod_discription:"the shirt is very beautyfull"},
        {id:6,prod_img:image6,prod_name:"of hand shirt",price:400,old_price:500,prod_discription:"the shirt is very beautyfull"},
        {id:7,prod_img:image7,prod_name:"green shirt",price:900,old_price:1200,prod_discription:"the shirt is very beautyfull"},
        {id:8,prod_img:image8,prod_name:"black shirt",price:700,old_price:1000,prod_discription:"the shirt is very beautyfull"},
        {id:1,prod_img:image9,prod_name:"ligra shirt",price:500,old_price:700,prod_discription:"the shirt is very beautyfull"},
        {id:2,prod_img:image10,prod_name:"cortun shirt",price:700,old_price:1000,prod_discription:"the shirt is very beautyfull"},
        {id:3,prod_img:image1,prod_name:"jeen shirt",price:1000,old_price:1200,prod_discription:"the shirt is very beautyfull"},
        {id:4,prod_img:image2,prod_name:"cortun ligra shirt",price:450,old_price:550,prod_discription:"the shirt is very beautyfull"},
        {id:5,prod_img:image3,prod_name:"polister shirt",price:550,old_price:800,prod_discription:"the shirt is very beautyfull"},
        {id:6,prod_img:image4,prod_name:"of hand shirt",price:400,old_price:500,prod_discription:"the shirt is very beautyfull"},
        {id:7,prod_img:image5,prod_name:"green shirt",price:900,old_price:1200,prod_discription:"the shirt is very beautyfull"},
        {id:8,prod_img:image6,prod_name:"black shirt",price:700,old_price:1000,prod_discription:"the shirt is very beautyfull"},
         {id:5,prod_img:image7,prod_name:"polister shirt",price:550,old_price:800,prod_discription:"the shirt is very beautyfull"},
        {id:6,prod_img:image8,prod_name:"of hand shirt",price:400,old_price:500,prod_discription:"the shirt is very beautyfull"},
        {id:7,prod_img:image9,prod_name:"green shirt",price:900,old_price:1200,prod_discription:"the shirt is very beautyfull"},
        {id:8,prod_img:image10,prod_name:"black shirt",price:700,old_price:1000,prod_discription:"the shirt is very beautyfull"}
    ]

   
  return (
    <>
     <div className='pd'>
     <Navbar/>
    <h1 className='ph'>Products</h1>
    <div className='display-wraper2'>
    <div className='display-two'>
     
      {
         product_data.map((v,i)=>{
    console.log(i)
    return(
        <>
        <div >
            <div className='prodbox1'>
                <div className='prod2'>
                   <div><img src={v.prod_img} className='img3' /></div> 
                    <p className='pname4'>{v.prod_name}</p>
                    <p className='nprice5'>₹{v.price}    <del className='oprice6'>{v.old_price}</del></p>
                   <div className='buy7'> <button className='buynow8' >Buy now</button></div>
                </div>
            </div>
        </div>

       
        </>
    )
    })
      }
    </div>

    
   
    </div>
     <Footer/>
    </div>
    
    
    </>
  )

     

   
  
}

export default Product_main