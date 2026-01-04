import React from 'react'
import Navbar from '../navbar/Navbar'
import image1 from "../image/about1.jpeg"
import image2 from "../image/about2.avif"
import image3 from "../image/about3.jpeg"
import image4 from "../image/about4.webp"
import "./About.css"
import Footer from '../footer/footer'
function About() {
  return (
    <>
    
    <div className='a1'>
         <Navbar/>
        <h1 className='a10'>About</h1>


    <div className='a2'>
      <div className='a3'><img className='a4' src={image1} alt="" /></div>
      <div className='a5'>
       Our dress shop is a destination where style, quality, and tradition come together to create a memorable shopping experience. We believe that clothing is more than just fabric—it is an expression of personality, confidence, and culture. With this belief at heart, our shop offers a wide collection of dresses designed to suit every occasion, age group, and fashion preference
      Quality is one of our top priorities. We work closely with trusted manufacturers and suppliers to ensure that every product meets high standards. From fabric selection to final stitching, we focus on details that make our dresses stand out. Our commitment to quality has helped us earn the trust and loyalty of our customers over the years.
      
      </div>
    </div>

    <div className='a6'>
      <div className='a7'>
       From everyday wear to special occasion outfits, our dress shop provides a carefully curated range of products that blend modern trends with timeless elegance. We specialize in women’s wear, including casual dresses, party wear, ethnic collections, festive outfits, and bridal selections. Each piece is selected with attention to detail, comfort, and durability, ensuring that our customers receive only the best.
      As we continue to grow, our vision is to expand our collections, improve our services, and introduce innovative designs that reflect changing fashion needs. We are dedicated to staying true to our values of quality, affordability, and customer satisfaction
      </div>
      <div className='a8'><img className='a9' src={image4} alt="" /></div>
    </div>

    <div className='a2' >
      <div className='a3'><img className='a4' src={image3} alt="" /></div>
      <div className='a5'>
      Quality is our top priority. We source fabrics from trusted suppliers and work with skilled designers and manufacturers to ensure excellent craftsmanship. Every dress is checked for stitching, fabric quality, and finishing before it reaches our shelves. This commitment to quality helps us maintain long-lasting relationships with our customers, who trust us for reliable and stylish clothing
      Our dress shop is a one-stop destination for stylish, comfortable, and high-quality clothing for all ages. We believe that fashion is not just about trends, but about expressing confidence, culture, and individuality. With a perfect blend of traditional elegance and modern designs, our shop offers a wide variety of dresses suitable for every occasion, from daily wear to festive celebrations.
      </div>
    </div>

    <div className='a6'>
        <div className='a7'>
         Customer satisfaction is the foundation of our business. Our friendly and knowledgeable staff are always ready to assist customers in finding the perfect outfit. Whether you need help choosing the right size, matching accessories, or selecting a dress for a special event, we ensure a personalized and comfortable shopping experience. We believe that every customer deserves attention, respect, and honest guidance
        Our dress shop is a one-stop destination for stylish, comfortable, and high-quality clothing for all ages. We believe that fashion is not just about trends, but about expressing confidence, culture, and individuality. With a perfect blend of traditional elegance and modern designs, our shop offers a wide variety of dresses suitable for every occasion, from daily wear to festive celebrations.
        </div>
        <div className='a8'><img className='a9' src={image4} alt="" /></div>
    </div>



    <Footer/>
    </div>

    </>
    
  )
}

export default About