import React from "react";
import Logo from '../../assets/images/logo.png'
const Navbar = () => {
  

  return (
    <div className="navbar">
      <div className="navbar-box">
        <div className="navbar-logo-section">
          <a href="/">GDG </a>
          <img src={Logo} alt="No Image Found"></img>
        </div>
        <div className="navbar-links">
          <li>
            <a href="/docs">About</a>
          </li>
          <li>
            <a href="/gamification">Tracks</a>
          </li>
          <li>
            <a href="/truthmate">Timeline</a>
          </li>
          <li>
            <a href="/news">Sponsors</a>
          </li>
          <li>
            <a href="/news">Prizes</a>
          </li>
          <li>
            <a href="/news">FAQ's</a>
          </li>
        </div>
        <div className="navbar-auths">
          <a href="/trueMix" className="btn-2 bg-purple-700">Register Now</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;