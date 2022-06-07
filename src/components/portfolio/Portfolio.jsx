import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/laundry-service.jpg';
import IMG2 from '../../assets/instaclone.jpg';
import IMG3 from '../../assets/calculator.jpg';

// Array of Portfolio Images

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Laundry Service App',
    github: 'https://github.com/saurav-dope/laundry-service',
    demo: 'https://laundry-service.pages.dev/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Instaclone',
    github: 'https://github.com/saurav-dope/Instaclone',
    demo: 'https://instaclone.pages.dev/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Calculator App',
    github: 'https://github.com/saurav-dope/Calculator',
    demo: 'https://saurav-dope.github.io/Calculator/',
  },
];

const Portfolio = ({ setAlert }) => {
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setAlert(true);
  //   setTimeout(() => {
  //     setAlert(false);
  //   }, 2000);
  // };

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a
                  href={github}
                  className='btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'
                  // onClick={handleClick}
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
