/* eslint-disable jsx-a11y/anchor-is-valid */

import { React, useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { GiHandBag } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "active" : ""}>
        <BiUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? "active" : ""}>
        <GiHandBag />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "active" : ""}>
        <IoIosContact />
      </a>
    </nav >
  );
};

export default Nav;
