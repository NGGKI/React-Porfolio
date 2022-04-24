import React from "react";
import "./about.css";
import ME from "../../Assets/IMG/Me__atthebeach.jpg"
import { FaAward } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>6 months +</small>
          </article>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FiUser className="about__icon" />
            <h5>Clients</h5>
            <small>Not Yet</small>
          </article>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>3+ completed</small>
          </article>
        </div>
      </div>



    </section>);
};

export default About;
