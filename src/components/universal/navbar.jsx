import React from "react";
import Logo from '../../assets/images/logo.png'
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

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
            <a href="/about">About</a>
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
          <a href="" className=" m-2 text-white  hover:text-purple-500 transition-all ease-in"><FiGithub/></a>
          <a href="" className=" m-2 text-white  hover:text-purple-500 transition-all ease-in"><SiLinkedin/></a>
          <a href="" className=" m-2 text-white  hover:text-purple-500 transition-all ease-in"><FaXTwitter/></a>
          <a hrefLang="" className=" m-2 text-white hover:text-purple-500 transition-all ease-in"><IoLogoInstagram/></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;