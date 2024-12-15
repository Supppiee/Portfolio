import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }} // Slide down from the top
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-shrink-0 items-center text-2xl"
      >
        <img src={logo} alt="logo" className="transform scale-75" /> {/* Scaled down */}
      </motion.div>

      {/* Social Icons Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }} // Slide down from the top
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center justify-between gap-5 text-2xl m-8"
      >

        {/* GitHub Icon Link */}
        <a href="https://github.com/Supppiee" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/suprith-hb/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
