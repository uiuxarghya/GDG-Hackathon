import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "../../assets/images/logo.png";
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import "../css/navbar.css";

const Navbar = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - (scrollYProgress.getPrevious() || 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const handleMouseMove = (e) => {
      if (!navbar) return;
      const rect = navbar.getBoundingClientRect();
      setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
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
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="navbar"
      >
        {isHovered && (
          <div className="cursor" style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }} />
        )}
        <div className="navbar-box">
          {/* Logo Section */}
          <div className="navbar-logo-section ">
            <a href="/" className="text-lg font-bold">GDG</a>
            <img src={Logo} alt="Logo" className="w-10 h-10 ml-2" />
          </div>

          {/* Navbar Links */}
          <ul className="navbar-links">
            {["About", "Timeline", "Tracks", "Sponsors", "Prizes", "Judges", "Mentors", "FAQ's"].map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="navbar-auths flex space-x-3 text-xl">
            <a href="#" className="hover:text-gray-300 transition"><FiGithub /></a>
            <a href="#" className="hover:text-blue-600 transition"><SiLinkedin /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaXTwitter /></a>
            <a href="#" className="hover:text-pink-400 transition"><IoLogoInstagram /></a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
