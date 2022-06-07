import React from 'react';
import CTA from './CTA';
import ME from '../../assets/profile1.png';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Saurav Dutta</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='ME' />
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
