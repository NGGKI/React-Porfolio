import React from "react";
import "./portfolio.css";
import IMG1 from '../../Assets/IMG/portfolio1.jpg';
import IMG2 from '../../Assets/IMG/portfolio2.jpg';
import IMG3 from '../../Assets/IMG/portfolio3.jpg';
import IMG4 from '../../Assets/IMG/portfolio4.jpg';
import IMG5 from '../../Assets/IMG/portfolio5.png';
import IMG6 from '../../Assets/IMG/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="project1" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/* adding github project link */}
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn">Github</a>
            <a href="https://dribbble.com/shots/popular" className="btn btn-primary" targer="_blank"  >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="project1" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/* adding github project link */}
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn">Github</a>
            <a href="https://dribbble.com/shots/popular" className="btn btn-primary" targer="_blank"  >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="project1" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/* adding github project link */}
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn">Github</a>
            <a href="https://dribbble.com/shots/popular" className="btn btn-primary" targer="_blank"  >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="project1" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/* adding github project link */}
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn">Github</a>
            <a href="https://dribbble.com/shots/popular" className="btn btn-primary" targer="_blank"  >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="project1" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/* adding github project link */}
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn">Github</a>
            <a href="https://dribbble.com/shots/popular" className="btn btn-primary" targer="_blank"  >Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="project1" />
          </div>
          <h3>This is a portfolio item title</h3>
          {/* adding github project link */}
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn">Github</a>
            <a href="https://dribbble.com/shots/popular" className="btn btn-primary" targer="_blank"  >Live Demo</a>
          </div>
        </article>

      </div>

    </section >
  );
};

export default Portfolio;
