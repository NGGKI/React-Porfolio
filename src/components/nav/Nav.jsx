/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { GiHandBag } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <BiUser />
      </a>
      <a href="#experience">
        <GiHandBag />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <IoIosContact />
      </a>
    </nav>
  );
};

export default Nav;
