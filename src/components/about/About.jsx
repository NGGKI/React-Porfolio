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

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6 months +</small>
            </article>

            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small>On to the first</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3 completed +</small>
            </article>
          </div>
          <p>I graduated in Hospitality and Management when I was 19 years old. I have many years of managing large operation, customers service and marketing/sales, want to know more about my past experience, feel free to find me on Linkedin. Moving on, I always like to be in front of the computer since I was young, so I decided to start learning about coding by taking BootCamp at UCI. Now, I am open to work, so let's talk!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>);
};

export default About;
