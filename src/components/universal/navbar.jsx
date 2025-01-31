import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import "../css/navbar.css";

const Navbar = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const handleMouseMove = (e) => {
      if (!navbar) return;
      const rect = navbar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setCursorPos({ x, y });
    };

    if (navbar) {
      navbar.addEventListener("mousemove", handleMouseMove);
      navbar.addEventListener("mouseenter", () => setIsHovered(true));
      navbar.addEventListener("mouseleave", () => setIsHovered(false));
    }

    return () => {
      if (navbar) {
        navbar.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="navbar">
      {isHovered && (
        <div
          className="cursor"
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />
      )}
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
            <a href="#">Tracks</a>
          </li>
          <li>
            <a href="#">Timeline</a>
          </li>
          <li>
            <a href="#">Sponsors</a>
          </li>
          <li>
            <a href="#">Prizes</a>
          </li>
          <li>
            <a href="#">FAQ's</a>
          </li>
        </div>
        <div className="navbar-auths">
          <a href="" className="m-2 text-white hover:text-gray-800 transition-all ease-in">
            <FiGithub />
          </a>
          <a href="" className="m-2 text-white hover:text-blue-600 transition-all ease-in">
            <SiLinkedin />
          </a>
          <a href="" className="m-2 text-white hover:text-gray-800 transition-all ease-in">
            <FaXTwitter />
          </a>
          <a href="" className="m-2 text-white hover:text-pink-400 transition-all ease-in">
            <IoLogoInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
