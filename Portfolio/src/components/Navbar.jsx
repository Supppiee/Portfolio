import React from "react";
import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-between gap-5 text-2xl m-8">
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
      </div>
    </nav>
  );
};

export default Navbar;
