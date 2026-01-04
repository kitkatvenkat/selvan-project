import React from 'react'
import img1 from '../image/dress_1.jpg'
import img2 from '../image/dress_2.jpg'
import img3 from '../image/dress_3.webp'
import "./product.css"


function Product() {

    const product_data = [
        {id:1,prod_img:img1,prod_name:"ligra shirt",price:500,old_price:700,prod_discription:"the shirt is very beautyfull"},
        {id:2,prod_img:img2,prod_name:"cortun shirt",price:700,old_price:1000,prod_discription:"the shirt is very beautyfull"},
        {id:3,prod_img:img3,prod_name:"jeen shirt",price:1000,old_price:1200,prod_discription:"the shirt is very beautyfull"},
        {id:4,prod_img:img1,prod_name:"cortun ligra shirt",price:450,old_price:550,prod_discription:"the shirt is very beautyfull"},
        {id:5,prod_img:img2,prod_name:"polister shirt",price:550,old_price:800,prod_discription:"the shirt is very beautyfull"},
        {id:6,prod_img:img3,prod_name:"of hand shirt",price:400,old_price:500,prod_discription:"the shirt is very beautyfull"},
        {id:7,prod_img:img1,prod_name:"green shirt",price:900,old_price:1200,prod_discription:"the shirt is very beautyfull"},
        {id:8,prod_img:img2,prod_name:"black shirt",price:700,old_price:1000,prod_discription:"the shirt is very beautyfull"},
        {id:1,prod_img:img1,prod_name:"ligra shirt",price:500,old_price:700,prod_discription:"the shirt is very beautyfull"},
        {id:2,prod_img:img2,prod_name:"cortun shirt",price:700,old_price:1000,prod_discription:"the shirt is very beautyfull"},
        {id:3,prod_img:img3,prod_name:"jeen shirt",price:1000,old_price:1200,prod_discription:"the shirt is very beautyfull"},
        {id:4,prod_img:img1,prod_name:"cortun ligra shirt",price:450,old_price:550,prod_discription:"the shirt is very beautyfull"},
        {id:5,prod_img:img2,prod_name:"polister shirt",price:550,old_price:800,prod_discription:"the shirt is very beautyfull"},
        {id:6,prod_img:img3,prod_name:"of hand shirt",price:400,old_price:500,prod_discription:"the shirt is very beautyfull"},
        {id:7,prod_img:img1,prod_name:"green shirt",price:900,old_price:1200,prod_discription:"the shirt is very beautyfull"},
        {id:8,prod_img:img2,prod_name:"black shirt",price:700,old_price:1000,prod_discription:"the shirt is very beautyfull"}
    ]

   
  return (
    <>
    <div className='display-wrapper'>
    <div className='display'>
      {
         product_data.map((v,i)=>{
    console.log(i)
    return(
        <>
        {/* <div className='card-wrapper'> */}
            <div className='prodbox'>
                <div className='prod'>
                   <div><img src={v.prod_img} className='img2' /></div> 
                    <p className='pname'>{v.prod_name}</p>
                    <p className='nprice'>₹{v.price}    <del className='oprice'>{v.old_price}</del></p>
                   <div className='buy2'> <button className='buynow' >Buy now</button></div>
                </div>
            </div>
        {/* </div/> */}

       
        </>
    )
    })
      }
    </div>
    </div>
    </>
  )
}

export default Product