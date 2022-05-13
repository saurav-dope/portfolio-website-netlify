import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/calculator.jpg';
import IMG2 from '../../assets/todolist.jpg';
import IMG3 from '../../assets/simple_static.jpg';

// Array of Portfolio Images

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Calculator App',
    github: 'https://github.com/saurav-dope/Calculator',
    demo: 'Specify Live link For Project Here',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Todo List App',
    github:
      'https://github.com/saurav-dope/My-First-HTML-Assignment/tree/Assignment-6/src/Assignment-6',
    demo: 'Specify Live link For Project Here',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Simple Static Website',
    github:
      'https://github.com/saurav-dope/My-First-HTML-Assignment/tree/Assignment-4/src/Assignment-4',
    demo: 'Specify Live link For Project Here',
  },
];

const Portfolio = ({ setAlert }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

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
                <a href={github} className='btn'>
                  Github
                </a>
                <a
                  href='/'
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'
                  onClick={handleClick}
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
