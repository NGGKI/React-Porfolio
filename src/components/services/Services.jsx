import React from "react";
import "./services.css";
import { AiOutlineCheck } from "react-icons/ai"

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* end of UX-UI design*/}

        <article className="service">
          <div className="service__head">
            <h3>Web Developer</h3>
          </div>
          <ul className="service__list">
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* end of web developer*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li><AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* end of content creation*/}
      </div>
    </section>
  );
};

export default Services;
