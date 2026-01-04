import React, { useState } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";



const Contact = () => {

const [name,setname]=useState("")
const [email,setemail]=useState("")

const [error3,seterror3]=useState("")
const [error4,seterror4]=useState("")

const navigate =useNavigate()

// function Send(e) {
//  e.preventDefault()

//   if (!name) {
//   error3("enter the name")
//   console.log("enter the name")
//   }
//   else if (!email) {
//     error4("enter the email")
//     console.log("enter the email")
//   }
//   else {
//     console.log("success")
//   }

// }
function Send(e) {
  e.preventDefault();

  seterror3("");
  seterror4("");

  if (!name) {
    seterror3("Enter the name");
  } 
  else if (!email) {
    seterror4("Enter the email");
  } 
  else {
    // console.log("success");
    navigate("/thankyou")
  }
}

  return (
      <div>
            <Navbar/>
    <div className="contact-container">
    
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We’d love to hear from you! Reach out for any queries or support.
      </p>

      <div className="contact-content">

        <div className="contact-info">
          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <h3>Our Store</h3>
            <p>123 Fashion Street,<br />Chennai, Tamil Nadu</p>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <h3>Call Us</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <p>selvan@dressshop.com</p>
          </div>
        </div>

        
        <form onSubmit={Send} className="contact-form">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" onChange={(e)=>{
              setname(e.target.value)
          }} />
          <input type="email" placeholder="Your Email" onChange={(e)=>{
            setemail(e.target.value)
          }}  />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit" >Send Message</button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;


