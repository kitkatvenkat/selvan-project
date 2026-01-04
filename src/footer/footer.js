import { useNavigate } from "react-router-dom";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const navigate=useNavigate()
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-box">
          <h3>Dress Shop</h3>
          <p>
            We offer stylish and comfortable dresses for men, women,
            and children. Quality fashion at affordable prices.
          </p>
        </div>

        
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => navigate ("/home")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/product")}>Product</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>

        
        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>📍 Tamil Nadu, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ dressshop@gmail.com</p>
        </div>

        
        <div className="footer-box">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Dress Shop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
