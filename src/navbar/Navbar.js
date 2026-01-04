import React from "react";
import "./Navbar.css";
import logo from "../image/cat.png";
import { useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      
      <div className="nav-logo" onClick={() => navigate("/home")}>
        <img src={logo} alt="logo" />
        <span>Dress Shop</span>
      </div>
      <div className="nav-two">
        
        <nav className="nav-menu">
          <span onClick={() => navigate("/home")}>Home</span>
          <span onClick={() => navigate("/about")}>About</span>
          <span onClick={() => navigate("/product")}>Product</span>
          <span onClick={() => navigate("/contact")}>Contact</span>
        </nav>

        
        <div className="nav-logout" onClick={() => navigate("/",{ replace:true })}>
          <HiOutlineLogout />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
